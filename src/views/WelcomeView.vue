<template>
  <div class="welcomeView">
    <h2>Welcome | {{ user }}</h2>

    <button @click="handleLogout">Log out</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref(localStorage.getItem("user"));

watch(user, (newUser) => {
  if (!newUser) {
    router.push("/login");
  }
});

const handleLogout = () => {
  user.value = localStorage.removeItem("user"); // undefined => no user
};
</script>

<style scoped lang="scss">
.welcomeView {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
  padding: 2rem;

  button {
    color: #fff;
    background: #002177;
    width: auto;
    padding-inline: 7rem;
  }
}
</style>
