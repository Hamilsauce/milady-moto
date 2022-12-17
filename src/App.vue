<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Web3 from 'web3';
import { ref } from "vue";
const GCF_LOCAL_URL = 'http://localhost:5000/my-lady-8b48f/us-central1/getMiladyBalance'
const GCF_URL = 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getMiladyBalance';

let IAN_WALLET = '0x587376ed782a73966c1b9d9a00635613a6e539dd'
let userWalletAddress: string[] | null = null;

const isConnected = ref(false);

const connect = async () => {
  const web3 = new Web3(Web3.givenProvider)
  userWalletAddress = await web3.eth.requestAccounts();

  isConnected.value = userWalletAddress ? true : false;
  console.warn('userWalletAddress', userWalletAddress);
};

const handleFormButtonClick = async (e: Event): Promise<void> => {
  let addressResponse = (await fetch(GCF_LOCAL_URL

    , {
      method: 'GET',
      // mode: 'no-cors',
      // body: JSON.stringify({ address: IAN_WALLET })
    }));

  let res = await addressResponse.json()
  console.warn({ res });

};

</script>

<template>
  <header id="app-header">
    <img alt="Vue logo" class="logo" src="@/assets/mi777_jersey.png" width="250" height="250" />

    <div class="wrapper">
      <HelloWorld msg="Milady Moto wow!" />

      <nav>
        <a id="mint-link">Mint on Scatter</a>
        <RouterLink to="/vip">Connect to verify ownership of tokey toke</RouterLink>
        <RouterLink to="/vip">Enter your detes into the form</RouterLink>
        <RouterLink to="/vip">wait</RouterLink>
      </nav>
    </div>
    <div id="app-header__connect-container">
      <button @click="connect" class="app-button" id="connect-button" type="button">CONNECT</button>
    </div>
  </header>

  <section id="app-body">
    <button v-if="isConnected" @click="handleFormButtonClick" id="to-form-button" class="app-button" type="button">
      GO TO GATED AREA IF YOU GOT WHAT IT TAKES
    </button>
    <RouterView />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

#app-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0px;
  width: 100%;
  height: 100%;

}

#app-header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.app-header__connect-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;

}

#app-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  padding: 32px;
  overflow-y: scroll;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  #app-header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }



  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
