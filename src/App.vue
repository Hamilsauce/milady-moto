<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { computed } from "vue";
import { useUserStore } from "./stores/user.store";
import router from "./router";

const userStore = useUserStore();
userStore.init()
const isLegit = computed(() => userStore.isConnected && userStore.hasBalance);
const connectButtonContent = computed(() => userStore.isConnected ? (userStore.user.wallet?.slice(0, 3) + '...' + userStore.user.wallet?.slice(-4, -1)).toLowerCase() : 'Connect');

const handleConnectClick = async () => {
  userStore.connect();
};

const handleFormButtonClick = async (e: Event): Promise<void> => {
  if (!isLegit) return;

  router.push(('/vip'));
};

</script>

<template>
  <div id="app">
    <div id="connect-container">
      <button @click="handleConnectClick">{{ connectButtonContent }}</button>
    </div>
    <header id="app-header" :class="{ connected: isLegit }">
      <div id="app-header-left">
        <div id="app-header-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolorum id esse
          quos laudantium accusamus soluta fugiat distinctio deserunt culpa commodi, fuga pariatur optio voluptatum
          accusantium necessitatibus facilis debitis qui!</div>
      </div>
      <div id="app-header-right">
        <button>PLACE MY JERSEY ORDER</button>
      </div>
    </header>
    <main id="app-body">
      <div class="container" data-row="0">
        <model-viewer id="mi777-model-viewer" src="src/assets/mi777.glb" ar="" ar-modes="webxr scene-viewer quick-look"
          camera-controls="" environment-image="neutral" shadow-intensity="0" autoplay="" ar-status="not-presenting">
        </model-viewer>
      </div>
      <div class="container">
        <iframe src="https://hamilsauce.github.io/playground/simple-pixel-editor/" width="430" height="800"
          frameborder="0"></iframe>
      </div>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
      </div>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
      </div>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
      </div>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit maiores, veniam sequi minus non quibusdam
        quasi laborum fuga iure alias velit laboriosam tenetur similique odio inventore ratione commodi facilis.
      </div>
    </main>
  </div>
  <!-- <footer id="app-footer">
    <div class="container">
      footer
    </div>
  </footer> -->

</template>

<style scoped>
/* * {} */

button {
  cursor: pointer;
}

#app-header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0px;
  border: 1px solid black;
  overflow: hidden;
  height: 0px;
  padding: 0 56px;
  background-color: burlywood;
  z-index: 10;

}



#app-header-left {
  width: 50%;
}

#app-header-right button {
  padding: 32px;
  background-color: purple;
  color: white;
  border: none;
}

#app-header.connected {
  height: 400px;
}

#app-body {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  /* gap: 500px; */
  z-index: 5;
  height: 100%;
  overflow: scroll;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 0px;
  min-height: 100vh;
}

.container[data-row="0"] {
  background-image: url('./assets/content-rows/0/0_0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

#mi777-model-viewer {
  width: 100%;
  height: 100%;
}

#connect-container {
  position: absolute;
  right: 5%;
  top: 5%;
  z-index: 500;
}

#connect-container button {
  width: 100%;
  height: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 32px;
  background-color: rgb(236, 221, 21);
  font-weight: 600;
  font-size: 18px;
  z-index: 501;
}
</style>
