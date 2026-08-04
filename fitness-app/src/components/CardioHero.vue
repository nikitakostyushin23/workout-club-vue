<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const distanceInMeters = ref(0);
const maxDistanceMeters = 20000;

let distanceInterval = null;

const formattedDistance = computed(() => {
  const km = distanceInMeters.value / 1000;
  return `${km.toFixed(2)} km`; 
});

const stats = ref({
  distance: '20 km',
  workoutsCount: '45',
  videosCount: '158'
});

onMounted(() => {
  distanceInterval = setInterval(() => {
    if (distanceInMeters.value < maxDistanceMeters) {
      distanceInMeters.value += 17; 
      
      if (distanceInMeters.value > maxDistanceMeters) {
        distanceInMeters.value = maxDistanceMeters;
      }
    } else {
      clearInterval(distanceInterval); 
    }
  }, 15);
});

onUnmounted(() => {
  if (distanceInterval) {
    clearInterval(distanceInterval);
  }
});
</script>

<template>
  <section class="hero-banner">
    <div class="banner-left">
      <h1 class="main-title">Cardio <br> Exercise</h1>
      
      <p class="subtitle">
        Огромный выбор материалов о здоровье и фитнесе, полезных 
        рецептов и историй преображения, которые помогут вам 
        оставаться в форме!
      </p>

      <button class="join-btn">Присоединяйтесь</button>
    </div>

    <div class="banner-right">
      <img src="/images/trainer-hero.png" alt="Cardio Athlete" class="hero-img">

      <div class="stat-badge orange-badge">
        <img class="badge-icon" src="/images/running-stick.png">
       <div class="badge-text">
          <span class="badge-val">{{ formattedDistance }}</span>
        </div>
      </div>

      <div class="stat-badge dark-badge">
        <span class="play-icon">▶</span>
        <div class="badge-text">
          <span class="badge-val">{{ stats.workoutsCount }}</span>
          <span class="badge-lbl">Тренировок</span>
        </div>
      </div>

      <div class="stat-badge purple-badge">
        <span class="badge-val">{{ stats.videosCount }}</span>
        <span class="badge-lbl">Бесплатных видео</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-banner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  min-height: 500px;
  margin-bottom: 40px;

  @media (max-width: 1110px) {
    flex-direction: column;
    text-align: center; 
    align-items: center; 
    min-height: auto;
    gap: 40px;
  }
}

.banner-left {
  flex: 0 1 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1110px) {
    flex: 0 1 auto;
    align-items: center; 
    width: 100%;
  }

  .main-title {
    margin-top: clamp(40px, 6vw, 80px); 
    font-size: clamp(54px, 7.5vw, 96px);
    font-weight: 800;
    line-height: 0.95;
    text-transform: uppercase;
    letter-spacing: -3px;
    margin-bottom: 40px;

    @media (max-width: 480px) { letter-spacing: -1px; }
  }

  .subtitle {
    line-height: 1.6;
    color: #666666;
    margin-bottom: 40px;
    max-width: 460px;
    font-size: 18px; 
    
    @media (max-width: 1110px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .join-btn {
    background-color: #FF5722;
    color: #ffffff;
    border: none;
    padding: 16px 36px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
    }
  }
}

.banner-right {
  flex: 0 1 500px;
  width: 100%;
  position: relative;
  min-height: 500px;

  @media (max-width: 1110px) {
    display: none;
  }

  .hero-img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 110%;
    object-fit: contain;
    z-index: 1;
  }
}

.stat-badge {
  position: absolute;
  border-radius: 14px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  z-index: 5;

  .badge-val { font-size: 28px; font-weight: 800;}
  .badge-lbl { font-size: 14px; color: #ffffff; display: block; }
}

.orange-badge {
  background-color: #fca37e;
  color: #000;
  top: 40px;
  right: 20px;
  .badge-icon { font-size: 20px; }
}

.dark-badge {
  background-color: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.05);
  top: 200px;
  left: 40px;

  .play-icon {
    background: #FF5722;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
}

.purple-badge {
  background-color: #8A2BE2;
  bottom: 40px;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 20px 30px;
}
</style>