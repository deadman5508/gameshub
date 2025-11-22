<script setup>

defineProps({
  game: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <router-link :to="`/game/${game.id}`" class="card">
    <img :src="game.image" alt="`Download torrent de ${game.title}`"/>
    <h3>{{ game.title }}</h3>
  </router-link>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
  border-radius: 14px;
  padding: 0.8rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  border: 2px solid #222;
  transition: 0.25s ease-in-out;
  box-shadow: 0 0 10px #0007;
  position: relative;
}

.card:hover {
  border-color: #42b883;
  box-shadow: 0 0 18px #42b88366;
  transform: translateY(-6px) scale(1.03);
}

/* Imagem com animação e máscara sutil */
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}

.card:hover img {
  opacity: 0.85;
  filter: brightness(1.05);
}

/* Título */
h3 {
  margin-top: 0.7rem;
  font-size: 1.15rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.3s;
}

.card:hover h3 {
  color: #42b883;
  text-shadow: 0 0 10px #42b88388;
}
</style>
