<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ConnectButton from "@/components/ConnectButton.vue";
import GotoOrderViewPrompt from "@/components/GotoOrderViewPrompt.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";
import { computed } from "vue";
import router from "@/router";
import { useUserStore } from "@/stores/user.store";
import { contentRows } from '@/data/old-content-row-config.js'

const userStore = useUserStore();
console.log(contentRows)

userStore.init()

const showOrderPrompt = computed(() => userStore.hasUnassignedTokens);

const handleFormButtonClick = async (e: Event): Promise<void> => {
  if (!showOrderPrompt) return;

  router.push(('/vip'));
};

</script>

<template>
  <div id="app">
    <ConnectButton />
    <GotoOrderViewPrompt />
    <main id="app-body">
      <div class="container" data-row="0">
        <div class="text-content">
          <div>mi777: the MiladyMoto Jersey</div>
          <div>a Physi-Digi Love Letter to Milady</div>
        </div>
        <model-viewer id="mi777-model-viewer" src="https://hamilsauce.github.io/mi777.glb" ar=""
          ar-modes="webxr scene-viewer quick-look" camera-controls="" environment-image="neutral" shadow-intensity="0"
          autoplay="" ar-status="not-presenting">
        </model-viewer>
      </div>

      <GalleryGrid />
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
      <!-- <div class="container">
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
      </div> -->
    </main>
  </div>
</template>

<style scoped>
#app-body {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 5;
  height: 100%;
  overflow: scroll;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 32px;
  min-height: 100vh;
  padding: 0 200px;
}

.text-content {
  width: 100%;
  font-size: 28px;
  font-weight: bold;
}

.container[data-row="0"] {
  background-image: url('./assets/content-rows/0/0_0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.container[data-row="0"] .text-content > div:nth-child(1){
  font-weight: 600;
  font-size: 40px;
}

#mi777-model-viewer {
  width: 80%;
  height: 80%;
}
</style>
