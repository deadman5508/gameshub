<script setup>
import { ref, onMounted } from "vue";
import Gamecard from "./Gamecard.vue";

import allGames from "../data/games.json";

const visibleGames = ref([]);
const page = ref(1);
const perPage = 20; // carrega 20 por vez

const loadMore = () => {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  visibleGames.value.push(...allGames.slice(start, end));
  page.value++;
};

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    loadMore();
  }
};

onMounted(() => {
  loadMore();
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="grid">
    <Gamecard v-for="game in visibleGames" :key="game.id" :game="game" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
