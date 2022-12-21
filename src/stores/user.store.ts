import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { UserModel } from "@/models/user.model";
import Web3 from 'web3';

const GCF_LOCAL_URL = 'http://localhost:5000/my-lady-8b48f/us-central1/getMiladyBalance';
const GCF_URL = 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getMiladyBalance';
const IAN_WALLET = '0x587376ed782a73966c1b9d9a00635613a6e539dd';

const envUrl = GCF_LOCAL_URL

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
  const userState = reactive(initialUser);

  const user = computed(() => userState);
  const hasBalance = computed(() => !!userState.mi777Balance);
  const isConnected = computed(() => !!userState.wallet);
  const hasSubmitted = computed(() => userState.orders.length > 0);

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider)

    userState.wallet = (await web3.eth.requestAccounts())[0];
    await getUserBalance(userState.wallet);
  }

  const getUserBalance = async (wallet?: string) => {
    if (!(isConnected && wallet)) return console.error('USER NOT CONNECTED, CANT GET BALANCE');
    const endpoint = `${ envUrl }?wallet=${ IAN_WALLET }`;

    try {
      const balanceResponse: any = await (await fetch(endpoint, {
        method: 'GET',
      })).json();

      userState.mi777Balance = balanceResponse.entries[0].balance;

    } catch (error) {
      console.error(error);
    }
  }


  return {
    user,
    hasBalance,
    isConnected,
    hasSubmitted,
    connect,
    getUserBalance
  };
});