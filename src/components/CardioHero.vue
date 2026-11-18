<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const distanceInMeters = ref(0)
const maxDistanceMeters = 20000

let distanceInterval = null

const formattedDistance = computed(() => {
  const km = distanceInMeters.value / 1000
  return `${km.toFixed(2)} km`
})

const stats = {
  workoutsCount: '45',
  videosCount: '158',
}

onMounted(() => {
  distanceInterval = setInterval(() => {
    if (distanceInMeters.value < maxDistanceMeters) {
      distanceInMeters.value += 17

      if (distanceInMeters.value > maxDistanceMeters) {
        distanceInMeters.value = maxDistanceMeters
      }
    } else {
      clearInterval(distanceInterval)
    }
  }, 15)
})

onUnmounted(() => {
  if (distanceInterval) {
    clearInterval(distanceInterval)
  }
})
</script>

<template>
  <section class="hero-banner">
    <div class="banner-left">
      <h1 class="hero-title">
        Cardio <br />
        Exercise
      </h1>

      <p class="hero-subtitle">
        Огромный выбор материалов о здоровье и фитнесе, полезных рецептов и историй преображения,
        которые помогут вам оставаться в форме!
      </p>

      <button class="join-button">Присоединяйтесь</button>
    </div>

    <div class="banner-right">
      <img src="/images/trainer-hero.png" alt="Cardio Athlete" class="hero-image" />

      <div class="stat-badge orange-badge">
        <img src="/images/running-stick.png" alt="" class="badge-icon" />

        <div class="badge-text">
          <span class="badge-value">{{ formattedDistance }}</span>
        </div>
      </div>

      <div class="stat-badge dark-badge">
        <span class="play-icon">▶</span>

        <div class="badge-text">
          <span class="badge-value">{{ stats.workoutsCount }}</span>
          <span class="badge-label">Тренировок</span>
        </div>
      </div>

      <div class="stat-badge purple-badge">
        <span class="badge-value">{{ stats.videosCount }}</span>
        <span class="badge-label">Бесплатных видео</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-banner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  min-height: 500px;
  margin-bottom: 40px;
}

.banner-left {
  flex: 0 1 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-title {
  margin-top: clamp(40px, 6vw, 80px);
  margin-bottom: 40px;
  font-size: clamp(54px, 7.5vw, 96px);
  font-weight: 800;
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: -3px;
}

.hero-subtitle {
  max-width: 460px;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 1.6;
  color: #666666;
}

.join-button {
  padding: 16px 36px;
  border: none;
  border-radius: 8px;
  background-color: #ff5722;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.join-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
}

.banner-right {
  flex: 0 1 500px;
  width: 100%;
  min-height: 500px;
  position: relative;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  height: 110%;
  object-fit: contain;
  transform: translateX(-50%);
}

.stat-badge {
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 14px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.badge-value {
  font-size: 28px;
  font-weight: 800;
}

.badge-label {
  display: block;
  color: #ffffff;
  font-size: 14px;
}

.badge-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.orange-badge {
  top: 40px;
  right: 20px;
  background-color: #fca37e;
  color: #000000;
}

.dark-badge {
  top: 200px;
  left: 40px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: #1a1a1a;
}

.play-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ff5722;
  font-size: 10px;
}

.purple-badge {
  right: 0;
  bottom: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 20px 30px;
  background-color: #8a2be2;
}

@media (max-width: 1110px) {
  .hero-banner {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    min-height: auto;
    text-align: center;
  }

  .banner-left {
    flex: 0 1 auto;
    align-items: center;
    width: 100%;
  }

  .hero-subtitle {
    margin-right: auto;
    margin-left: auto;
  }

  .banner-right {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-title {
    letter-spacing: -1px;
  }
}
</style>
