<script setup>
const workouts = [
  { id: 1, title: 'Единоборства', calories: 250, img: 'images/combat sports.jpg' },
  { id: 2, title: 'Пилатес', calories: 150, img: 'images/pilates.jpg' },
  { id: 3, title: 'Йога', calories: 200, img: 'images/yoga.jpg' },
  { id: 4, title: 'Кардио', calories: 130, img: 'images/running.jpg' },
  { id: 5, title: 'Гантели', calories: 240, img: 'images/dumbbells.jpg' },
  { id: 6, title: 'Штанга', calories: 300, img: 'images/barbell.jpg' },
]
</script>

<template>
  <section class="workouts">
    <div class="header-box">
      <h2 class="title">Популярные Тренировки</h2>
      <a href="#" class="more-link">ПОСМОТРЕТЬ БОЛЬШЕ</a>
    </div>

    <div class="workouts-grid">
      <div v-for="workout in workouts" :key="workout.id" class="workout-card">
        <div class="image-wrapper">
          <img :src="workout.img" :alt="workout.title" class="workout-image" />

          <div class="overlay">
            <h3 class="card-title">{{ workout.title }}</h3>
          </div>
        </div>

        <p class="calories-text">{{ workout.calories }} калорий</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workouts {
  position: relative;
  z-index: 20;
  padding: 80px 0;
  background-color: transparent;
  --accent: #ffe600;
}

.header-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.title {
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
}

.more-link {
  color: #666666;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.more-link:hover {
  color: var(--accent);
}

.workouts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
}

.workout-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  background-color: #1a1a1a;
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-5px);
}

.image-wrapper:hover .workout-image {
  transform: scale(1.05);
}

.workout-image {
  display: block;
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
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
}

.calories-text {
  color: #666666;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .workouts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .workouts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
