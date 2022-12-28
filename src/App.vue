<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ConnectButton from "@/components/ConnectButton.vue";
import ContentRow from "@/components/ContentRow.vue";
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

const fullImages = new Array(10).fill(null)
  .map((_, i) => `src/assets/content-rows/full-rows/content-row-${ i + 2 }-all.jpg`)

</script>

<template>
  <div id="app">
    <ConnectButton />
    <GotoOrderViewPrompt />
    <main id="app-body">

      <section class="container" data-row="0">
        <div class="text-content">
          <div>mi777: the MiladyMoto Jersey</div>
          <div>a Physi-Digi Love Letter to Milady</div>
        </div>
        <model-viewer id="mi777-model-viewer" src="https://hamilsauce.github.io/mi777.glb" ar=""
          ar-modes="webxr scene-viewer quick-look" camera-controls="" environment-image="neutral" shadow-intensity="0"
          autoplay="" ar-status="not-presenting">
        </model-viewer>
      </section>
      <section class="container" data-row="1">
        <GalleryGrid />
      </section>
      <!-- <section class="container" data-row="1"> -->
      <!-- </section> -->
      <ContentRow v-for="(image,index) in fullImages" :full-image-src="image" />

<!--
      <section class="container" data-row="2">
        <div class="content-row-background"></div>
      </section>
      <section class="container" data-row="3">
        <div class="content-row-background"></div>
      </section>
      <section class="container" data-row="rest">
        <div id="mega-imaged"></div>
        <img id="mega-image" src="./assets/content-rows/content-rows-3-to-12.jpg" alt="" srcset="">
      </section> -->
      <!-- <section class="container">
        <iframe src="https://hamilsauce.github.io/playground/simple-pixel-editor/" width="430" height="800"
          frameborder="0"></iframe>
      </section> -->
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
  /* position: relative; */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 5;
  height: auto;
  overflow: scroll;
overflow-y: auto;
  /* min-height: 100%; */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 40px;
  height: 100%;
  min-height: 100%;
  padding: 32px 200px;
}

.text-content {
  width: 100%;
  font-size: 28px;
  font-weight: bold;
}

.container[data-row="0"] {
  background-image: url('./assets/content-rows/0_0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}


.container[data-row="0"] .text-content>div:nth-child(1) {
  font-weight: 600;
  font-size: 40px;
}

.container[data-row="1"] {
  /* position: absolute;
  top: 820px;
  left: 17%; */
  height: 200p;
  height: 60%;
  min-height: 60%;

}

.container[data-row="2"] .content-row-background {
  background-image: url('./assets/content-rows/content-row-2-all.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: fit-content;
  width: 100%;
}

.container[data-row="3"] .content-row-background {
  background-image: url('./assets/content-rows/content-row-3-all.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: fit-content;
  width: 100%;
}

.container[data-row="rest"] {
  background-image: url('./assets/content-rows/content-rows-3-to-12.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  height: 1000px;
  width: 100%;
}

#mega-image {
  height: 100%;
  width: 80%;
  background-image: url('./assets/content-rows/content-rows-3-to-12.jpg');
  background-image: url('./assets/content-rows/content-rows-3-to-12.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 100%;
  width: 100%;
}

#mi777-model-viewer {
  width: 80%;
  height: 550px;
}
</style>
