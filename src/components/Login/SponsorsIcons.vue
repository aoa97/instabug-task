<template>
  <div class="sponsors">
    <IconLyft />
    <IconBuzzFeed />
    <IconAsana />
    <IconOnePlus />
    <IconHouseParty />
  </div>
</template>

<script setup>
import IconLyft from "@/components/svg/IconLyft.vue";
import IconBuzzFeed from "@/components/svg/IconBuzzFeed.vue";
import IconAsana from "@/components/svg/IconAsana.vue";
import IconOnePlus from "@/components/svg/IconOnePlus.vue";
import IconHouseParty from "@/components/svg/IconHouseParty.vue";
</script>

<style scoped lang="scss">
.sponsors {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}
</style>
