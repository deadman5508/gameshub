<script setup>
</script>

<template>
  <nav class="navbar">
    <h2 class="logo"><router-link to="/">GameHub</router-link></h2>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Game List</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: #121212;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto; 
  border-radius: 10px;
}

.logo a{
  font-size: 1.6rem;
  color: #42b883;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav-links a:hover {
  color: #42b883;
}
</style>
