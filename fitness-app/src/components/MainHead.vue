<script setup>

import AppPromotion from './AppPromotion.vue'
import { ref, onMounted, onUnmounted } from 'vue';


const totalSeconds = ref(38 * 60); 
const showTime = ref("38:00");
const calories = ref(220);


function formatTime(time) {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  
  return `${mins}:${(secs) < 10 ? '0' : ''}${secs}`;
};


let timer;

onMounted(() => {
  timer = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
      showTime.value = formatTime(totalSeconds.value);
      
      if (totalSeconds.value % 10 === 0 && calories.value > 0) {
        calories.value--;
      }
    } else {
      clearInterval(timer); 
    }
  }, 1000);
});


onUnmounted(() => clearInterval(timer));

</script>

<template>

  <section class="head">
    <AppPromotion class="head__promotion" />
    
    <div class="head__content">

      <div class="head__info">

        <h1 class="head__title">Cardio <br>Exercise</h1>
        <p class="head__text">Оптимизируйте свои тренировки с нашей новой программой</p>

        <div class="head__actions">
          <button class="button button--primary">Начать</button>
          <button class="button button--outline">Детальнее</button>
        </div>

      </div>

      <div class="head__visual">

        <img src="@/assets/images/girl.png" alt="Cardio" class="head__img">
        
        
        <div class="head__stats">

          <div class="stat-card stat-card--time">
            <span class="stat-card__value">{{ showTime }}</span>
            <span class="stat-card__label">ВРЕМЯ</span>
          </div>

          <div class="stat-card stat-card--calories">
            <span class="stat-card__value">{{ calories }}</span>
            <span class="stat-card__label">КАЛОРИИ</span>
          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<style lang="scss" scoped>

.head {
  margin-top: 50px;
  position: relative;
  
  &__content {
    display: flex;
    position: relative;
    max-width: 1300px;
    margin: 0 auto; 
    min-height: 600px;
    align-items: center; 

    @media (max-width: 1110px) {
      flex-direction: column;
      text-align: center;
      min-height: auto;
      padding-bottom: 50px;
      margin-top: 50px;
    }
  }

  &__info {
    position: relative;
    z-index: 10;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 700px;

    @media (max-width: 1110px) {
      flex: 0 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    font-size: 130px;
    line-height: 0.85; 
    letter-spacing: -3px;
    font-weight: 900;
    text-transform: uppercase;

    @media (max-width: 1500px) { font-size: 110px; }
    @media (max-width: 1350px) { font-size: 80px; }
    @media (max-width: 1250px) { font-size: 60px; letter-spacing: -1px; }
    @media (max-width: 480px)  { font-size: 45px; }
  }

  &__text {
    color: #868686;
    max-width: 450px;
    margin: 25px 0 35px;
    line-height: 1.6;
    font-size: 18px;

    @media (max-width: 768px) { font-size: 16px; }
  }

  &__actions {
    display: flex;
    gap: 20px;

    @media (max-width: 1100px) {
      justify-content: center;
    }
    
    @media (max-width: 480px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__visual {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 650px;
    z-index: 1;

    
    @media (max-width: 1110px) {
      display: none;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: auto;
    margin-left: -50px; 
    
    @media (max-width: 1500px) {
      margin-left: -150px;
      scale: 0.9;
    }
  }

  &__stats {
    position: absolute;
    z-index: 15;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.stat-card {
  width: 140px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  padding: 15px 25px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
  cursor: pointer;
  @include hover-lift;

  &__value {
    font-size: 24px;
    font-weight: 800;
  }

  &__label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 900;
    opacity: 0.8;
  }

  &--time { .stat-card__value { color: #FFE600; } }
  &--calories { .stat-card__value { color: #FF4B4B; } }
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 30px;
  min-width: 160px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  font-size: 18px;

  &:hover { transform: translateY(-3px); }
  &--primary { background-color: $accent-color; color: $main-bg; }
  &--outline { background-color: #2a2a2a; color: $text-color; border: 1px solid rgba(255, 255, 255, 0.05); @include hover-lift; }
}

</style>
