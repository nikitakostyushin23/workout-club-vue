<script setup>

import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import MainHead from './components/MainHead.vue';
import PopularWorkouts from './components/PopularWorkouts.vue';
import OurTrainers from './components/OurTrainers.vue';
import WorkoutCategories from './components/WorkoutCategories.vue';

</script>

<template>

  <div class="container">
    <TheHeader />
    <MainHead />
    <PopularWorkouts />
    <OurTrainers />
    <WorkoutCategories />
  </div>
  <RouterView />

</template>

<style lang="scss">
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: $main-bg;
    color: $text-color;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  a {
    color: #ABABAB;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #c7c7c7;
    }
  }

  .container {
    width: 90%;
    margin: 0 auto;
    max-width: 1300px; 

   @media (max-width: 1500px) {
    width: 90%; 
  }

    @media (max-width: 900px) {
    width: 95%;
  }
  }
  
</style>
