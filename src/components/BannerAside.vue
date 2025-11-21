<script setup>
import { useRouter } from "vue-router";

const router = useRouter();


  router.push({

  });


</script>

<template>
  <aside class="sidebar">
    <div class="search-box">

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
  height: 100vh;
}

.search-box input {
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: none;
  margin-top: 0.5rem;
  outline: none;
}
</style>
