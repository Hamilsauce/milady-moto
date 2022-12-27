<script setup lang="ts">
defineProps({
  imageContent: Array
})
</script>

<template>
  <div class="content-row">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 class="heading">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-top: 2rem;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 10px 1px rgb(36, 63, 8);
  backdrop-filter: brightness(50%);
  margin-bottom: 8px;
  font-size: 16px;
  padding: 0;
  width: 100%;
  height: 1000px !important;
}

.heading:hover {
  color: hsla(160, 100%, 37%, 1);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
  transition: 0.3s;
}


.row:hover i {
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  transform: scale(1.5);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.row:before {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
  padding: 0;
}

.row:after {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
  padding: 0;
}

.row:first-of-type:before {
  display: none;
  padding: 0;
}

.row:last-of-type:after {
  display: none;
}
</style>
