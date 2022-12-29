import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Order, UserModel } from "@/models/user.model";
import Web3 from 'web3';
import { getUser, updateUser } from "@/firestore/db";

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

  const hasBalance = computed(() => balance.value > 0);
  const hasUnassignedTokens = computed(() => hasBalance.value && userState.orders.length !== balance.value);
  const unassignedTokenCount = computed(() => balance.value - userState.orders.length);
  const isConnected = computed(() => !!userState.wallet);

  const init = async () => {
    const wallet = (await web3.eth.getAccounts())[0];

    if (wallet) {
      const mi777Balance = await fetchMI777Balance(wallet);

      Object.assign(userState, await getUser(wallet, {
        wallet,
        mi777Balance,
      }));
    }
  }

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider)

    const wallet = (await web3.eth.requestAccounts())[0];
    const mi777Balance = await fetchMI777Balance(wallet);

    // const userDoc = await getDoc(doc(`users/${ wallet }`));
    // console.warn({ userDoc });
    // console.log('user exists', userDoc.exists());
    console.log({
      wallet,
      mi777Balance,
    });


    Object.assign(userState, await getUser(wallet, {
      wallet,
      mi777Balance,
    }));


    // if (userDoc.exists()) {
    //   /*
    //         TODO
    //         Update balance user balance and then Fetch from firestore;
    //   */
    // } else {
    //   /*
    //         TODO
    //         Create new user document with wallet info, fetch from firestore.
    //   */
    // }


    // const userDoc = doc(`users/${ wallet }`);
    // userDoc.
    // userState.wallet = (await web3.eth.requestAccounts())[0];
    // await fetchMI777Balance(userState.wallet);
  }

  const addOrder = async (order: Order) => {
    const res = await updateUser(user.value.wallet || '', {
      ...user.value,
      orders: [
        ...user.value.orders,
        order
      ]
    })
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
    addOrder,
    init,
    connect,
  };
});