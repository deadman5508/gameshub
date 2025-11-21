<script setup>
import { ref, computed, onMounted} from "vue";
import { useRouter } from "vue-router";
import allGames from "../data/games.json";

const search = ref("");
const router = useRouter();
const topDownloads = ref([]);

  onMounted(() => {
    topDownloads.value = allGames;
  });

  const listop = computed(() =>topDownloads.value.slice());

  function goToGame(id) {router.push(`/game/${id}`);
  }

  function searchGame() {
  if (!search.value.trim()) return;

  router.push({
    name: "GameSearch",
    query: { q: search.value.trim() }
  });

  search.value = "";
}

</script>

<template>
  <aside class="sidebar">
    <div class="search-box">
      <h3>Pesquisar Jogos</h3>
      <input
        v-model="search"
        type="text"
        placeholder="Buscar..."
        @keyup.enter="searchGame"
      />
    </div>

    <div class="downloads">
      <h3>Top 5 Baixados</h3>

      <ul>
        <li v-for="g in listop"         
        :key="g.id"
        @click="goToGame(g.id)"
        class="game-link"
      >
        {{ g.title }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  padding: 1rem;
  background: #181818;
  border-left: 2px solid #333;
  color: white;
  height: 100%;
  position: sticky;
  top: 0;
}

.search-box input {
  width: 90%;
  padding: 0.6rem;
  border-radius: 6px;
  border: none;
  margin-top: 0.5rem;
  outline: none;
}

.downloads ul {
  list-style: none;
  padding-left: 0;
}

.downloads li {
  margin: 0.4rem 0;
  font-size: 1rem;
  cursor: pointer;
}
</style>
