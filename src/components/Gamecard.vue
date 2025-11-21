<script setup>
import { useRouter } from "vue-router";

defineProps({
  game: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <router-link :to="`/game/${game.id}`" class="card">
    <img :src="game.image" alt="game cover" />
    <h3>{{ game.title }}</h3>
  </router-link>
</template>

<style scoped>
.card {
  display: block;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 1rem;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

h3 {
  margin-top: 0.5rem;
  font-size: 1.1rem;
}
</style>
