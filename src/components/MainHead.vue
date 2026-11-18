<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AppPromotion from './AppPromotion.vue'

const totalSeconds = ref(38 * 60)
const calories = ref(220)

const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const showTime = computed(() => formatTime(totalSeconds.value))

let timer = null

onMounted(() => {
  timer = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--

      if (totalSeconds.value % 10 === 0 && calories.value > 0) {
        calories.value--
      }
    } else {
      clearInterval(timer)
      timer = null
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <section class="head">
    <AppPromotion class="head__promotion" />

    <div class="head__content">
      <div class="head__info">
        <h1 class="head__title">
          Cardio <br />
          Exercise
        </h1>

        <p class="head__text">Оптимизируйте свои тренировки с нашей новой программой</p>

        <div class="head__actions">
          <button type="button" class="button button--primary">Начать</button>

          <button type="button" class="button button--outline hover-lift">Детальнее</button>
        </div>
      </div>

      <div class="head__visual">
        <img
          src="@/assets/images/girl.png"
          alt="Девушка выполняет кардио-тренировку"
          class="head__img"
        />

        <div class="head__stats">
          <div class="stat-card hover-lift stat-card--time">
            <span class="stat-card__value">
              {{ showTime }}
            </span>

            <span class="stat-card__label"> ВРЕМЯ </span>
          </div>

          <div class="stat-card hover-lift stat-card--calories">
            <span class="stat-card__value">
              {{ calories }}
            </span>

            <span class="stat-card__label"> КАЛОРИИ </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  position: relative;
  margin-top: 50px;
}

.head__content {
  display: flex;
  position: relative;
  align-items: center;
  max-width: 1300px;
  min-height: 600px;
  margin: 0 auto;
}

.head__info {
  position: relative;
  z-index: 10;
  flex: 0 1 700px;
}

.head__title {
  font-size: 130px;
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -3px;
  text-transform: uppercase;
}

.head__text {
  max-width: 450px;
  margin: 25px 0 35px;
  color: #868686;
  font-size: 18px;
  line-height: 1.6;
}

.head__actions {
  display: flex;
  gap: 20px;
}

.head__visual {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  width: 650px;
  transform: translateY(-50%);
}

.head__img {
  display: block;
  width: 100%;
  height: auto;
  margin-left: -50px;
}

.head__stats {
  position: absolute;
  top: 50%;
  right: -20px;
  z-index: 15;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateY(-50%);
}

.stat-card {
  display: flex;
  flex-direction: column;
  width: 140px;
  padding: 15px 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  text-align: center;
  cursor: pointer;
}

.stat-card__value {
  font-size: 24px;
  font-weight: 800;
}

.stat-card__label {
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.8;
}

.stat-card--time .stat-card__value {
  color: #ffe600;
}

.stat-card--calories .stat-card__value {
  color: #ff4b4b;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 18px 30px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.button:hover {
  transform: translateY(-3px);
}

.button--primary {
  background-color: var(--accent-color);
  color: var(--main-bg);
}

.button--outline {
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: #2a2a2a;
  color: var(--text-color);
}

@media (max-width: 1500px) {
  .head__title {
    font-size: 110px;
  }

  .head__img {
    margin-left: -150px;
    transform: scale(0.9);
  }
}

@media (max-width: 1350px) {
  .head__title {
    font-size: 80px;
  }
}

@media (max-width: 1250px) {
  .head__title {
    font-size: 60px;
    letter-spacing: -1px;
  }
}

@media (max-width: 1110px) {
  .head__content {
    flex-direction: column;
    min-height: auto;
    margin-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }

  .head__info {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
  }

  .head__actions {
    justify-content: center;
  }

  .head__visual {
    display: none;
  }
}

@media (max-width: 768px) {
  .head__text {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .head__title {
    font-size: 45px;
  }

  .head__actions {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
