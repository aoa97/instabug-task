<template>
  <div class="loginLeft">
    <img :src="slider[current].src" />

    <h3 v-text="slider[current].desc" />

    <div class="slider">
      <span
        v-for="(item, index) in slider"
        :key="index"
        :class="{ active: current === index }"
        @click="current = index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { slider } from "@/assets/data/data";

const current = ref(0);

setInterval(() => {
  if (current.value < slider.length - 1) {
    current.value = current.value + 1;
  } else {
    current.value = 0;
  }
}, 4000);
</script>

<style scoped lang="scss">
.loginLeft {
  background: #002177;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 4rem;

  img {
    width: 80%;
  }

  h3 {
    font-weight: 400;
    padding-inline: 2rem;
    text-align: center;
  }

  .slider {
    display: flex;
    column-gap: 1rem;

    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      cursor: pointer;

      &.active {
        background: #fff;
      }
    }
  }
}
</style>
