<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
import { computed } from "vue";

const userStore = useUserStore();

const connectButtonContent = computed(() => userStore.isConnected ? (userStore.user.wallet?.slice(0, 3) + '...' + userStore.user.wallet?.slice(-4, -1)).toLowerCase() : 'Connect');

const handleConnectClick = async () => {
  userStore.connect();
};
const show = computed(() => userStore.hasUnassignedTokens);

</script>

<template>
  <header id="prompt-header" :class="{ connected: show }">
    <div id="prompt-header-left">
      <div class="prompt-row">✅ Great job! You minted 3 mi777 Jersey Tokens.</div>
      <div class="prompt-row">
        <div class="text--purple">Proceed to the ZK-Order Experience</div>
        <div class="text--purple">to Get your Physical Jerseys!</div>
      </div>
      <div class="prompt-row">
        <div class="text--purple">Select your Sizes + Enter your Shipping Destinations</div>
        <div class="text--purple">w/ the mi777 privacy-enabled shipping experience.!</div>
      </div>
      <!-- <div class="text--purple">Select your Sizes + Enter your Shipping Destinations w/ the mi777 privacy-enabled -->
      <!-- shipping experience.</div> -->
    </div>
    <div id="prompt-header-right">
      <button id="prompt-header-order-button">Place my Jersey Orders!</button>
    </div>
  </header>
</template>

<style scoped>
#prompt-header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  border: 1px solid black;
  overflow: hidden;
  height: 0px;
  padding: 0 64px;
  font-size: 20px;
  background-color: var(--order-prompt-mint);
  color: black;
  z-index: 10;
  font-family: Comic Sans MS;
  font-size: 24px;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  letter-spacing: -1.25px;
  font-size: 20px;
}

#prompt-header-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
}

/* #prompt-header-left>div:nth-child(1) {} */

#prompt-header-left>div:nth-child(2) {
  line-height: 40px;
}

#prompt-header-left>div:nth-child(2)>div:nth-child(1) {
  font-size: 32px;
  font-weight: 800;
  text-decoration: underline;
}

#prompt-header-left>div:nth-child(2)>div:nth-child(2) {
  font-size: 32px;
  font-weight: 800;
}
#prompt-header-left>div:nth-child(3) {
  line-height: 40px;
  font-size: 24px;
  line-height: 32px;
}

#prompt-header-left>div:nth-child(3)>div:nth-child(1) {
  font-weight: 800;
}

#prompt-header-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 56px 0 0 0;
  height: 100%;

}

.text--purple {
  color: var(--order-prompt-purple);
}


#prompt-header.connected {
  height: 325px;
}

#prompt-header-order-button {
  padding: 16px 40px;
  background-color: var(--order-prompt-purple);
  color: white;
  border: none;
  white-space: nowrap;
  font-size: 20px;
  line-height: 33.75px;
  border-radius: 13px;
}
</style>
