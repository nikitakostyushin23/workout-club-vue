<script setup>
import { ref } from 'vue';

const cards = ref([
  { id: '01', name: 'Видео тренировки' },
  { id: '02', name: 'Программа курса' },
  { id: '03', name: 'Тарифы' },
  { id: '04', name: 'Полный доступ' }
]);

const activeIndex = ref(0);

const nextSlide = () => {
  if (activeIndex.value < cards.value.length - 1) {
    activeIndex.value++;
  } else {
    activeIndex.value = 0; 
  }
};

const prevSlide = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  } else {
    activeIndex.value = cards.value.length - 1; 
  }
};
</script>

<template>
  <section class="cardio-home">
    
    <div class="section-header">
      <h2 class="section-title">Не знаете с чего начать?</h2>
      <div class="slider-arrows">
        
        <button class="arrow-btn" @click="prevSlide">←</button>
        <button class="arrow-btn" @click="nextSlide">→</button>
      </div>
    </div>

    <div class="cards-slider">
      <div 
        v-for="(card, index) in cards" 
        :key="card.id" 
        class="nav-card" 
        :class="{ 'is-active': activeIndex === index }"
        @click="activeIndex = index"
      >
        <span class="card-num">{{ card.id }}</span>
        <h3 class="card-name">{{ card.name }}</h3>
        <span class="card-arrow">→</span>
      </div>
    </div>

    <div class="home-content">
      <div class="content-left">
        <h2 class="content-title">Тренируйтесь дома</h2>
        <p class="content-text">
         Тренируйтесь дома без специального оборудования. Короткие и полноценные программы под любые цели: похудение, сила, выносливость, гибкость. Видеоинструкции и подсказки помогут заниматься правильно и безопасно. Выберите тренировку и начните прямо сейчас!
        </p>
        <a href="#" class="more-link">Больше <span class="arrow">→</span></a>
      </div>

      <div class="content-right">
        <img src="/images/Home-workout.png" alt="Home Workout" class="content-img">
      </div>
    </div>
    <div class="home-content">
      <div class="content-left">
        <h2 class="content-title">Получите еще больше полезного контента</h2>
        <p class="content-text">
         Гайды, советы по восстановлению и разборы ошибок-всё для уверенного прогресса. Подходит для любого уровня. Выбирайте формат и прокачивайте результат!
        </p>
        <a href="#" class="more-link">Больше <span class="arrow">→</span></a>
      </div>

      <div class="content-right">
        <img src="/images/girl-ropes.jpg" alt="Home Workout" class="content-img">
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.cardio-home {
  padding: 60px 0;
  --neon-yellow: #FFE600;
  --accent-orange: #FF5722;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
  }

  .section-title {
    font-size: 32px;
    font-weight: 700;
  }

  .slider-arrows {
    display: flex;
    gap: 12px;
  }

  .arrow-btn {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    color: #ffffff;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: var(--accent-orange);
      color: #ffffff;
      border-color: var(--accent-orange);
    }
  }

  .cards-slider {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 100px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 50px;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .nav-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 35px 25px;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    transition: all 0.3s ease;
    @include hover-lift;

    .card-num {
      font-size: 14px;
      font-weight: 600;
      color: #444444;
      transition: color 0.3s;
    }

    .card-name {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.3;
      max-width: 150px;
      transition: color 0.3s;
    }

    .card-arrow {
      position: absolute;
      bottom: 35px;
      right: 25px;
      font-size: 18px;
      color: #444444;
      transition: all 0.3s ease;
    }

    &:hover, &.is-active {
      border-color: var(--accent-orange);
      background: rgba(255, 87, 34, 0.02);
      
      .card-num { color: var(--accent-orange); }
      .card-name { color: #ffffff; }
      .card-arrow { 
        color: var(--accent-orange);
        transform: translateX(5px);
      }
    }
  }

  .home-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 100px; 
    gap: 40px;

    @media (max-width: 1300px) {
      flex-direction: column; 
      gap: 24px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .content-left {
    flex: 0 1 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1300px) {
      flex: none;
      width: 100%;
    }
  }

  .content-title {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 24px;
    text-transform: uppercase;
    line-height: 1.1;

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  .content-text {
    color: #868686;
    line-height: 1.6;
    font-size: 18px;
    margin-bottom: 30px;
    min-height: auto;
  }

  .more-link {
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;

    .arrow {
      transition: transform 0.3s;
    }

    &:hover {
      color: var(--accent-orange);
      .arrow { transform: translateX(5px); }
    }
  }

  .content-right {
    flex: 0 1 600px;
    width: 100%;

    @media (max-width: 1300px) {
      flex: none;
      width: 100%;
    }
  }

  .content-img {
    display: block;
    width: 100%;
    height: auto; 
    aspect-ratio: 16 / 10; 
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
}
</style>


