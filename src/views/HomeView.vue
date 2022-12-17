<script setup lang="ts">
import HomeContent from "../components/HomeContent.vue";
</script>

<template>
  <main id="home-view">
    <HomeContent />
  </main>
</template>

<style scoped>
#home-view {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0px;
  width: 100%;
  height: 100%;
}
</style>