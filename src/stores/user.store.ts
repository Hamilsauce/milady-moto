import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Order, UserModel } from "@/models/user.model";
import Web3 from 'web3';
import { getUser, saveUser, updateUser, userExists } from "@/firestore/db";
import { useRoute } from "vue-router";

const GCF_LOCAL_URL = 'http://localhost:5000/my-lady-8b48f/us-central1/getMiladyBalance';
const GCF_URL = 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getMiladyBalance';

const MILADY_BALANCE_ENDPOINT = GCF_URL

export interface UserState {
  userData: UserModel;
}

export interface BalanceMap {
  balance: number;
  contract: string;
}

export type BalanceResponse = BalanceMap[];

const initialUser: UserModel = {
  mi777Balance: null,
  wallet: null,
  orders: [],
};

export const useUserStore = defineStore("user", () => {
  const web3 = new Web3(Web3.givenProvider);

  const userState = reactive(initialUser);

  const user = computed(() => userState);
  const balance = computed(() => userState.mi777Balance);
  const orders = computed(() => userState.orders);
  const assignedOrders = computed(() => orders.value.filter(order => order.status !== 'SHIPPING_UNASSIGNED'));
  const unassignedOrders = computed(() => orders.value.filter(order => order.status === 'SHIPPING_UNASSIGNED'));

  const hasBalance = computed(() => balance.value > 0);
  const hasUnassignedTokens = computed(() => unassignedOrders.value.length > 0);
  const unassignedTokenCount = computed(() => unassignedOrders.value.length);
  const isConnected = computed(() => !!userState.wallet);

  const init = async () => {
    const wallet = (await web3.eth.getAccounts())[0];

    if (wallet) {
      const mi777Balance = await fetchMI777Balance(wallet);

      Object.assign(userState, await fetchUser(wallet, {
        mi777Balance,
      }));
    }
  }

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider)

    let wallet = (await web3.eth.getAccounts())[0] || (await web3.eth.requestAccounts())[0]

    const mi777Balance = await fetchMI777Balance(wallet);

    console.warn({ wallet, mi777Balance, });

    if (await userExists(wallet)) {
      await fetchUser(wallet, { mi777Balance });
    }
    else {
      await createUser({ wallet, mi777Balance })
    }
  }

  const addOrder = async (order: Order) => {
    const res = await updateUser(user.value.wallet || '', {
      ...user.value,
      orders: [
        ...user.value.orders,
        createOrderRecord(order)
      ]
    });

    return res;
  }

  const updateOrder = async (id: number, updates: Partial<Order>) => {
    const order = Object.assign(user.value.orders.find(_ => _.id == id) || {}, updates)

    const res = await updateUser(user.value.wallet || '', user.value);

    return res;
  }
  const getOrder = (id: number): Order => {
    return user.value.orders.find(_ => _.id == id) || {} as Order
  }

  const fetchUser = async (wallet: string, data: Partial<UserModel>): Promise<null> => {
    const res = await getUser(wallet, data);
    Object.assign(userState, res);

    return null;
  }

  const createUser = async (initialData: Partial<UserModel>): Promise<null> => {
    if (!initialData.wallet) return null;

    const mi777Balance = initialData.mi777Balance | 0;

    const userObj = {
      ...initialData,
      mi777Balance,
      orders: new Array(mi777Balance).fill(null).map((_, i) => createOrderRecord({ id: i }))
    }
    console.log({ userObj });

    const res = await saveUser(initialData.wallet || '', userObj);
    Object.assign(userState, res);

    return null;
  }

  const createOrderRecord = (data?: Partial<Order>): Order => {
    const defaultOrder: Order = {
      id: -1,
      jerseySize: null,
      shippingAddress: null,
      status: 'SHIPPING_UNASSIGNED',
    }

    const order = data ? { ...defaultOrder, ...data } : defaultOrder;

    return order;
  }

  const fetchMI777Balance = async (wallet?: string) => {
    if (!(isConnected && wallet)) return console.error('USER NOT CONNECTED, CANT GET BALANCE');

    const endpoint = `${ MILADY_BALANCE_ENDPOINT }/${ wallet }`;

    try {
      const balanceResponse: any = await (await fetch(endpoint, {
        method: 'GET',
      })).json();

      return balanceResponse.balance
    } catch (error) {
      console.error(error);
    }
  }

  return {
    user,
    orders,
    balance,
    fetchMI777Balance,
    isConnected,
    hasUnassignedTokens,
    hasBalance,
    unassignedTokenCount,
    assignedOrders,
    addOrder,
    init,
    connect,
    unassignedOrders,
    getOrder,
    updateOrder
  };
});