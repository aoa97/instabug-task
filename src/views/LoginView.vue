<template>
  <div class="loginView">
    <LoginLeft /> 
    <LoginRight />
  </div>
</template>

<script setup>
import LoginLeft from "@/components/Login/LoginLeft.vue";
import LoginRight from "@/components/Login/LoginRight.vue";
</script>

<style scoped lang="scss">
.loginView {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;

    .loginLeft {
      display: none;
    }
    
    .loginRight {
      padding-inline: 5%;
    }
  }
}
</style>
