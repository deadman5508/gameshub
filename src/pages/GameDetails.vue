<script setup>
import { useRoute } from "vue-router";
import allGames from "../data/games.json";
import { ref, watch } from "vue";
import { DownloadIcon } from 'lucide-vue-next'

const route = useRoute();
const game = ref(null);

function loadGame(){
  const gameId = Number(route.params.id);
    const found = allGames.find(g => g.id === gameId);
    game.value = found ?? null;
}
loadGame();

watch(() => route.params.id, () => {
  loadGame();
});


</script>

<template>
  <div class="details">
    <img :src="game.image" class="banner"  alt="`Download torrent de ${game.title}`"/>
    <h1>{{ game.title }}</h1>
    <p>{{ game.description }}</p>

    <div>
      <h2>Instruçoes de downloads</h2>
      <p>TORRENT 1337x : Nesta opção você será redirecionado para o site 1337x é só clicar na opcão magnetic link e pronto você poderá baixar seu arquivo com velocidade superior a 10mb/s por segundo.</p>
      <p>NAVEGADOR: Você será redirecionado para uma pagina de download Buzzheavier ou GOFILE com velocidade superior a 20mb/s recomendo usar um gerenciador de download externo se não seu download fica quebrando.</p>
      <p>TODOS OS DOWNLOADS FORAM TESTADOS ENTÃO NÃO TEM VIRUS, os downloads via torrent precisam ser instalados, os via navegador ja vem instalado em uma pasta rar só extrair e jogar.</p>
      <p>Não mantemos nenhum jogo em nosso ou arquivo em nosso site apenas disponibizamos e organiamos os links de outros sites</p>
      <p>Duvidas? chama no meu discord blackhammer4930, gostou e quer manter o site ativo manda um pix no discord blackhammer4930
 </p>
    </div>
    <div class="buttons">
      <a :href="game.link1" target="_blank" rel="noopener noreferrer" class="btn"><DownloadIcon class="icon"/>Torrent 1337x</a>
      <a :href="game.link2" target="_blank" rel="noopener noreferrer" class="btn"><DownloadIcon class="icon"/> Navegador</a>
  </div>
    <div class="video-container">
    <iframe
      width="100%"
      height="315"
      :src="game.video"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
  </div>

</template>

<style scoped>
.details {
  color: white;
  padding: 2rem;
}
.banner {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
}
.buttons {
  display: flex;
  gap: 1.5rem; /* separa os botões */
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
}

.btn {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .8rem 1.2rem;
  border-radius: 8px;
  background: #14993c;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  transition: 0.25s ease-in-out;
  border: 2px solid;
  box-shadow: 0 0 6px #42b883aa;
  -webkit-text-stroke: 1px black;
}

.btn:hover {
  background: #42b883;
}

.icon {
  width: 32px;
  height: 32px;
}

h1 {
  margin-top: 1rem;
}
p {
  margin-top: 1rem;
  opacity: 0.8;
}
.video-container {
  padding-top: 5vh;
}
</style>
