<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import allGames from "../data/games.json";

const router = useRouter();
const games = ref([]);

// Simula a busca na API
onMounted(() => {
  games.value = allGames;
});

// Ordena pelo título (A-Z)
const sortedGames = computed(() =>
  games.value.slice().sort((a, b) => a.title.localeCompare(b.title))
);

// Função de navegação ao clicar no jogo
function goToGame(id) {
  router.push(`/game/${id}`);
}
</script>

<template>
  <div class="grid">
    <h1>Lista de Jogos (A–Z)</h1>

    <ul class="game-list">
      <li 
        v-for="g in sortedGames" 
        :key="g.id"
        @click="goToGame(g.id)"
        class="game-link"
      >
        {{ g.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  width: 100%;
}
h1 {
  color: #42b883;
  margin-bottom: 1rem;
}

.game-list {
  list-style: none;
  padding-left: 0;
}

.game-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  cursor: pointer;
  transition: 0.3s;
}

.game-list li:hover {
  color: #42b883;
}
</style>
