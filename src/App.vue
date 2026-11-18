<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="container">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--main-bg);
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

a {
  color: #ababab;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #c7c7c7;
}

.container {
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;
}

@media (max-width: 1500px) {
  .container {
    width: 90%;
  }
}

@media (max-width: 900px) {
  .container {
    width: 95%;
  }
}
</style>
