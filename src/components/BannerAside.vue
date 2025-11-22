<script setup>
function openAd() {
  window.open("https://www.exemplo.com/anuncio", "_blank");
}
</script>

<template>
  <aside class="asidebar">
    <div class="bannerbox" @click="openAd">
      <span class="ad-label">Publicidade</span>
      <span class="placeholder-text">Seu anúncio aqui</span>
    </div>
  </aside>
</template>

<style scoped>
.asidebar {
  padding: 1rem;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
}

/* BANNER ESTILIZADO */
.bannerbox {
  width: 100%;
  height: 600px; /* tamanho padrão de banner vertical */
  background: linear-gradient(145deg, #242424, #111);
  border: 2px solid #42b88355;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 18px #42b88322;
  text-align: center;
}

.bannerbox:hover {
  border-color: #42b883;
  box-shadow: 0 0 18px #42b883;
  transform: scale(1.02);
}

.placeholder-text {
  color: #888;
  font-size: 1.1rem;
  font-weight: 600;
}

.ad-label {
  font-size: 0.8rem;
  color: #42b883;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
