<script setup>
import { ref } from 'vue';

const workoutsList = ref([
  { id: 1, title: 'Единоборства', calories: 250, img: 'images/combat sports.jpg' },
  { id: 2, title: 'Пилатес', calories: 150, img: 'images/pilates.jpg' },
  { id: 3, title: 'Йога', calories: 200, img: 'images/yoga.jpg' },
  { id: 4, title: 'Кардио', calories: 130, img: 'images/running.jpg' },
  { id: 5, title: 'Гантели', calories: 240, img: 'images/dumbbells.jpg' },
  { id: 6, title: 'Штанга', calories: 300, img: 'images/barbell.jpg' },
]);
</script>

<template>
  <section class="workouts">
    <div class="container">
      
      <div class="header-box">
        <h2 class="title">Популярные Тренировки</h2>
        <a href="#" class="more-link">ПОСМОТРЕТЬ БОЛЬШЕ</a>
      </div>

      <div class="grid">
        <div 
          v-for="workout in workoutsList" 
          :key="workout.id" 
          class="card"
        >
          <div class="image-wrapper">
            <img :src="workout.img" :alt="workout.title" class="img">
            
            <div class="overlay">
              <h3 class="card-title">{{ workout.title }}</h3>
            </div>
          </div>
          
          <p class="calories-text">{{ workout.calories }} калорий</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

.workouts {
  padding: 80px 0;
  background-color: transparent; 
  --accent: #FFE600; 
  position: relative; 
  z-index: 20;

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
  }

  .title {
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
  }

  .more-link {
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: var(--accent); 
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 30px; 

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr; 
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .image-wrapper {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 16 / 10; 
    background: #1a1a1a;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px); 
      
      .img {
        transform: scale(1.05); 
      }
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  }

  .card-title {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
  }

  .calories-text {
    font-size: 14px;
    color: #666666;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
}
</style>
