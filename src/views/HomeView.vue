<script setup lang="ts">
import HomeContent from "../components/HomeContent.vue";
const rowIndexes = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]
</script>

<template>
  <div id="home-view">

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


    <section class="container" data-row="2">
      <div class="content-row-background"></div>
    </section>

    <ContentRow v-for="(id, index) in rowIndexes" :row-number="id" />

    <section class="container" data-row="12">
      <iframe src="https://hamilsauce.github.io/playground/simple-pixel-editor/" width="430" height="800"
        frameborder="0"></iframe>
    </section>

  </div>
</template>

<style scoped>
#home-view {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 0;
  height: 100%;
  gap: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  min-height: 100vh;
  padding: 0 200px;
  background-color: brown;
  border: 1px solid black;
  z-index: 0;
}

.text-content {
  width: 100%;
  font-size: 28px;
  font-weight: bold;
}

.container[data-row="0"] {
  background-image: url('src/assets/content-rows/0_0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.container[data-row="0"] .text-content>div:nth-child(1) {
  font-weight: 600;
  font-size: 40px;
}

/* .container[data-row="0"] .text-content > div:nth-child(2){} */

.container[data-row="1"] {
  /* position: absolute; */
  /* top: 820px; */
  /* left: 17%; */
  height: 200p;
  height: 60%;
  min-height: 60%;
}

.container[data-row="2"] .content-row-background {
  background-image: url('src/assets/content-rows/full-rows/content-row-2-all.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: fit-content;
  width: 100%;
}

#mi777-model-viewer {
  width: 70%;
  height: 70%;
}
</style>