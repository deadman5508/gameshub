<script setup>
import BannerAside from "./components/BannerAside.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Navbar />
  
  <div class="layout">
    <BannerAside/>
    <main class="content">
      <router-view :key="$route.params.id"/>
    </main>

    <Sidebar class="sidebar"/>
  </div>
</template>

<style scoped>
.layout {
  display: grid ;
  grid-template-columns: 1.5fr 4fr 1.5fr;
  gap: 1.5rem;
  padding: 1.5rem;
}

.content h1 {
  color: #42b883;
  margin-bottom: 1.5rem;
}

@media (max-width: 900px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
