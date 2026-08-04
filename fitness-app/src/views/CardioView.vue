<script setup>
import CardioHero from '../components/CardioHero.vue';
import CardioHome from '../components/CardioHome.vue';
import CardioTariffs from '../components/CardioTariffs.vue';
</script>

<template>
  <div class="cardio-page">
    <CardioHero />
    <CardioHome /> 
    <CardioTariffs />  
  </div>
</template>

<style lang="scss" scoped>
.cardio-page {
  padding-bottom: 60px;
}
</style>