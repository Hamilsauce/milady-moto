import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { UserModel } from "@/models/user.model";
import Web3 from 'web3';

const GCF_LOCAL_URL = 'http://localhost:5000/my-lady-8b48f/us-central1/getMiladyBalance'
const GCF_URL = 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getMiladyBalance';

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
  shippingAddresses: [],
};

export const useUserStore = defineStore("user", () => {
  const userState = reactive(initialUser);

  const user = computed(() => userState);
  const hasBalance = computed(() => !!userState.mi777Balance);
  const isConnected = computed(() => !!userState.wallet);
  const hasSubmitted = computed(() => userState.shippingAddresses.length > 0);

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider)

    userState.wallet = (await web3.eth.requestAccounts())[0];
    await getUserBalance();
  }

  const getUserBalance = async () => {
    if (!isConnected) return console.error('USER NOTE CONNECTED, CANT GET BALANCE');

    const balanceResponse: BalanceResponse = await (await fetch(GCF_LOCAL_URL, {
      method: 'GET',
    })).json();

    userState.mi777Balance = balanceResponse[0].balance;
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