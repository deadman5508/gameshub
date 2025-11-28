<script setup>
</script>

<template>
  <nav class="navbar">
    <h2 class="logo"><router-link to="/">
      <img src="/vite.svg" alt="Jogos Torrent gratis" class="logo-img" />
      <span>JogosTorrentgratis</span></router-link></h2>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Game List</router-link></li>
    </ul>
    <span></span>
  </nav>
</template>

<style scoped>
.navbar {
  background: #181818;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  max-width: 1200px;
  margin: 1rem auto;
  border-radius: 12px;
  border: 1px solid #2b2b2b;
  box-shadow: 0 0 12px #42b88322;
  backdrop-filter: blur(6px);
  top: 0;
  z-index: 999;
}
.navbar h2 a{
  display: flex;
  align-items: center;
  justify-content: center;
}


.logo a {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #42b883;
  transition: 0.3s ease-in-out;
}

.logo a:hover {
  text-shadow: 0 0 10px #42b883;
}


.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding-right: 8vw;
}

.nav-links a {
  color: #dcdcdc;
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: 0.3s ease-in-out;
}

.nav-links a:hover {
  color: #42b883;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>
