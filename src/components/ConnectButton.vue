<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
import { computed } from "vue";

const userStore = useUserStore();

const DEFAULT_CONNECT_TEXT = 'Connect';

const connectButtonContent = computed(() => userStore.isConnected ? `${ userStore.user.wallet?.slice(0, 6).toLowerCase() }...${ userStore.user.wallet?.slice(-5, -1).toLowerCase() }` : DEFAULT_CONNECT_TEXT);

const handleConnectClick = async () => {
  userStore.connect();
};

</script>

<template>
  <div id="connect-container">
    <button id="connect-button" :class="{ gray: userStore.isConnected }" @click="handleConnectClick">
      {{ connectButtonContent }}</button>
  </div>
</template>

<style scoped>
#connect-container {
  position: absolute;
  right: 5%;
  top: 5%;
  z-index: 500;
}

#connect-button {
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

#connect-button.gray {
  background: var(--app-gray);
}
</style>
