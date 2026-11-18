<script setup>
import { ref } from 'vue'

const cards = [
  { id: '01', name: 'Видео тренировки' },
  { id: '02', name: 'Программа курса' },
  { id: '03', name: 'Тарифы' },
  { id: '04', name: 'Полный доступ' },
]

const activeIndex = ref(0)

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % cards.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + cards.length) % cards.length
}
</script>

<template>
  <section class="cardio-home">
    <div class="section-header">
      <h2 class="section-title">Не знаете с чего начать?</h2>

      <div class="slider-arrows">
        <button
          class="arrow-button"
          type="button"
          aria-label="Предыдущая карточка"
          @click="prevSlide"
        >
          ←
        </button>

        <button
          class="arrow-button"
          type="button"
          aria-label="Следующая карточка"
          @click="nextSlide"
        >
          →
        </button>
      </div>
    </div>

    <div class="cards-slider">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="nav-card hover-lift"
        :class="{ 'is-active': activeIndex === index }"
        @click="activeIndex = index"
      >
        <span class="card-number">{{ card.id }}</span>

        <h3 class="card-name">{{ card.name }}</h3>

        <span class="card-arrow">→</span>
      </div>
    </div>

    <div class="home-content">
      <div class="content-left">
        <h2 class="content-title">Тренируйтесь дома</h2>

        <p class="content-text">
          Тренируйтесь дома без специального оборудования. Короткие и полноценные программы под
          любые цели: похудение, сила, выносливость, гибкость. Видеоинструкции и подсказки помогут
          заниматься правильно и безопасно. Выберите тренировку и начните прямо сейчас!
        </p>

        <a href="#" class="more-link">
          Больше
          <span class="link-arrow">→</span>
        </a>
      </div>

      <div class="content-right">
        <img src="/images/Home-workout.png" alt="Тренировка дома" class="content-image" />
      </div>
    </div>

    <div class="home-content">
      <div class="content-left">
        <h2 class="content-title">Получите еще больше полезного контента</h2>

        <p class="content-text">
          Гайды, советы по восстановлению и разборы ошибок — всё для уверенного прогресса. Подходит
          для любого уровня. Выбирайте формат и прокачивайте результат!
        </p>

        <a href="#" class="more-link">
          Больше
          <span class="link-arrow">→</span>
        </a>
      </div>

      <div class="content-right">
        <img src="/images/girl-ropes.jpg" alt="Тренировка с канатами" class="content-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cardio-home {
  --accent-orange: #ff5722;
  padding: 60px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
}

.slider-arrows {
  display: flex;
  gap: 12px;
}

.arrow-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  background-color: #111111;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.arrow-button:hover {
  background-color: var(--accent-orange);
  border-color: var(--accent-orange);
}

.cards-slider {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 100px;
}

.nav-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 35px 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  background-color: #111111;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.card-number {
  color: #444444;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.card-name {
  max-width: 150px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.card-arrow {
  position: absolute;
  right: 25px;
  bottom: 35px;
  color: #444444;
  font-size: 18px;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.nav-card:hover,
.nav-card.is-active {
  border-color: var(--accent-orange);
  background-color: rgba(255, 87, 34, 0.02);
}

.nav-card:hover .card-number,
.nav-card.is-active .card-number {
  color: var(--accent-orange);
}

.nav-card:hover .card-name,
.nav-card.is-active .card-name {
  color: #ffffff;
}

.nav-card:hover .card-arrow,
.nav-card.is-active .card-arrow {
  color: var(--accent-orange);
  transform: translateX(5px);
}

.home-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 100px;
}

.home-content:last-child {
  margin-bottom: 0;
}

.content-left {
  flex: 0 1 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content-title {
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
}

.content-text {
  min-height: auto;
  margin-bottom: 30px;
  color: #868686;
  font-size: 18px;
  line-height: 1.6;
}

.more-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.more-link:hover {
  color: var(--accent-orange);
}

.link-arrow {
  transition: transform 0.3s ease;
}

.more-link:hover .link-arrow {
  transform: translateX(5px);
}

.content-right {
  flex: 0 1 600px;
  width: 100%;
}

.content-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1300px) {
  .home-content {
    flex-direction: column;
    gap: 24px;
  }

  .content-left {
    flex: none;
    width: 100%;
  }

  .content-right {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 900px) {
  .section-header {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    text-align: center;
  }

  .cards-slider {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 50px;
  }
}

@media (max-width: 600px) {
  .cards-slider {
    grid-template-columns: 1fr;
  }

  .content-title {
    font-size: 32px;
  }
}
</style>
