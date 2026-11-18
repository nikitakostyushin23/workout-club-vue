<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: '01', title: 'Силовые тренировки', videosCount: 15 },
  { id: '02', title: 'Оставайтесь в форме', videosCount: 48 },
  { id: '03', title: 'Интенсив', videosCount: 25 },
  { id: '04', title: 'Простые упражнения', videosCount: 35 },
  { id: '05', title: 'Сжигание калорий', videosCount: 35 },
]

const activeId = ref('01')

const totalVideosCount = computed(() => {
  return categories.reduce((total, item) => total + item.videosCount, 0)
})
</script>

<template>
  <section class="categories">
    <div class="stats-bar">
      <p class="stats-text">
        Всего доступно видео для тренировок:
        <span class="accent-num">{{ totalVideosCount }}</span>
      </p>
    </div>

    <div class="categories-list">
      <button
        v-for="item in categories"
        :key="item.id"
        type="button"
        class="category-item"
        :class="{ 'is-active': activeId === item.id }"
        :aria-pressed="activeId === item.id"
        @click="activeId = item.id"
      >
        <span class="category-num">{{ item.id }}</span>

        <span class="content-box">
          <span class="item-title">{{ item.title }}</span>
          <span class="sub-text">{{ item.videosCount }} видео</span>
        </span>

        <span class="arrow-box">
          <span class="arrow">→</span>
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: 60px 0 20px;
  background-color: transparent;
  --accent: #ffe600;
}

.stats-bar {
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stats-text {
  color: #666666;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.accent-num {
  color: var(--accent);
  font-weight: 700;
}

.categories-list {
  display: flex;
  flex-direction: column;
}

.category-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 35px 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.category-item:hover {
  border-bottom-color: rgba(255, 255, 255, 0.4);
}

.category-item:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.category-num {
  flex: 0 0 80px;
  color: #444444;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.content-box {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 8px;
}

.item-title {
  color: #ffffff;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.sub-text {
  color: #666666;
  font-size: 16px;
}

.arrow-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 32px;
}

.arrow {
  display: inline-block;
  color: #444444;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.category-item:hover .arrow {
  transform: translateX(5px);
  color: #ffffff;
}

.category-item.is-active {
  border-bottom-color: var(--accent);
}

.category-item.is-active .category-num,
.category-item.is-active .item-title {
  color: var(--accent);
}

.category-item.is-active .arrow {
  transform: translateX(10px) rotate(-45deg);
  color: var(--accent);
}

@media (max-width: 768px) {
  .item-title {
    font-size: 28px;
  }
}
</style>
