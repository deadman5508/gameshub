<script setup>
import { ref, computed, onMounted} from "vue";
import { useRouter } from "vue-router";
import allGames from "../data/Bestgames.json";

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
  background: #181818;
  padding: 1.5rem;
  border-left: 2px solid #2b2b2b;
  color: white;
  border-radius: 12px;
  box-shadow: 0 0 12px #42b88322;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
}

/* TÍTULOS */
.sidebar h3 {
  font-size: 1.2rem;
  color: #42b883;
  font-weight: 700;
  text-shadow: 0px 0px 8px #42b88355;
  margin-bottom: .8rem;
  border-bottom: 2px solid #42b88333;
  padding-bottom: .3rem;
}

/* INPUT DE PESQUISA */
.search-box input {
  width: 90%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #2e2e2e;
  background: #101010;
  color: white;
  font-size: 0.95rem;
  outline: none;
  transition: 0.25s;
  
}

.search-box input:focus {
  border-color: #42b883;
  box-shadow: 0 0 6px #42b88355;
}

/* LISTA DE DOWNLOADS */
.downloads ul {
  padding: 0;
  margin: 0;
}

.game-link {
  list-style: none;
  margin: .6rem 0;
  padding: .6rem;
  cursor: pointer;
  border-radius: 8px;
  color: #eaeaea;
  background: rgba(255,255,255,0.03);
  transition: 0.25s ease-in-out;
  font-weight: 500;
}

.game-link:hover {
  background: #42b88333;
  color: #42b883;
  box-shadow: 0 0 6px #42b88355;
  transform: translateX(4px);
}
</style>
