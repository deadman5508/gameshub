<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import allGames from "../data/games.json";

const route = useRoute();
const router = useRouter();
const results = ref([]);

function searchGames() {
  const term = route.query.q?.toString().toLowerCase() || "";

  results.value = allGames.filter(g =>
    g.title.toLowerCase().includes(term)
  );
}

// Executa ao carregar e sempre que a query mudar
watch(() => route.query.q, searchGames, { immediate: true });

function goToGame(id) {
  router.push(`/game/${id}`);
}
</script>

<template>
  <div class="results">
    <h1>Resultados de: "{{ route.query.q }}"</h1>

    <ul class="grid" v-if="results.length > 0">
      <li class="card"
        v-for="g in results"
        :key="g.id"
        @click="goToGame(g.id)"
      >
      <img :src="g.image" alt="game cover" />
        <h3>{{ g.title }}</h3>
      </li>
    </ul>

    <p v-else>Nenhum jogo encontrado…</p>
  </div>
</template>

<style scoped>
.results {
    color: white;
}
li {
    cursor: pointer;
    padding: 0.3rem 0;
}
li:hover {
    color: #42b883;
}
.card{
    display: block;
    background: #1e1e1e;
    border-radius: 12px;
    padding: 1rem;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
    text-decoration: none;
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
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>
