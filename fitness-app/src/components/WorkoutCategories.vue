<script setup>
import { ref, computed, watch } from 'vue';

const categories = ref([
  { id: '01', title: 'Силовые тренировки', videosCount: 15 },
  { id: '02', title: 'Оставайтесь в форме', videosCount: 48 },
  { id: '03', title: 'Интенсив', videosCount: 25 },
  { id: '04', title: 'Простые упражнения', videosCount: 35 },
  { id: '05', title: 'Сжигание калорий', videosCount: 35 },
]);


const activeId = ref('01');

const totalVideosCount = computed(() => {
  return categories.value.reduce((total, item) => total + item.videosCount, 0);
});

watch(activeId, (newId) => {
  const selected = categories.value.find(c => c.id === newId);
  if (selected) {
    console.log(`Пользователь переключился на плейлист: ${selected.title}`);
  }
});
</script>

<template>
  <section class="categories">
    <div class="container">
      
      <!-- Счётчик на Computed -->
      <div class="stats-bar">
        <p class="stats-text">
          Всего доступно видео для тренировок: 
          <span class="accent-num">{{ totalVideosCount }}</span>
        </p>
      </div>

      <div class="list">
        <div 
          v-for="item in categories" 
          :key="item.id" 
          class="item"
          :class="{ 'is-active': activeId === item.id }"
          @click="activeId = item.id"
        >
          <span class="num">{{ item.id }}</span>
          
          <div class="content-box">
            <h3 class="item-title">{{ item.title }}</h3>
            <span class="sub-text">{{ item.videosCount }} видео</span>
          </div>
          
          <div class="arrow-box">
            <span class="arrow">→</span>
          </div>
        </div>
      </div>

      <footer class="footer">
        <p class="footer-text">Все права защищены</p>
      </footer>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.categories {
  padding: 60px 0 20px;
  background-color: transparent;
  --neon-yellow: #FFE600;

  .stats-bar {
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 15px;
    
    .stats-text {
      font-size: 14px;
      color: #666666;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .accent-num {
      color: var(--neon-yellow);
      font-weight: 700;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 35px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: rgba(255, 255, 255, 0.4);
      
      .arrow {
        transform: translateX(5px);
        color: #ffffff;
      }
    }

    &.is-active {
      border-bottom-color: var(--neon-yellow);
      
      .num, .item-title {
        color: var(--neon-yellow);
      }

      .arrow {
        transform: translateX(10px) rotate(-45deg);
        color: var(--neon-yellow);
      }
    }
  }

  .num {
    font-size: 16px;
    font-weight: 600;
    color: #444444;
    flex: 0 0 80px;
    transition: color 0.3s;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
  }

  .item-title {
    font-size: 42px;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: -1px;
    transition: color 0.3s;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .sub-text {
    font-size: 16px;
    color: #666666;
  }

  .arrow-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 32px;
    
    .arrow {
      color: #444444;
      display: inline-block;
      transition: all 0.3s ease;
    }
  }

  .footer {
    margin-top: 80px;
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    .footer-text {
      font-size: 16px;
      color: #444444;
    }
  }
}
</style>