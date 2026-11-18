<script setup>
import { computed, ref } from 'vue'
import TrainerCard from './TrainerCard.vue'

const trainers = [
  { id: 1, name: 'Михаил Булыжников', role: 'Тренер', img: 'images/Bulyzhnikov.jpg' },
  { id: 2, name: 'Виктория Амброскина', role: 'Тренер', img: 'images/Ambroskina.jpg' },
  { id: 3, name: 'Дерек Лансфорд', role: 'Тренер', img: 'images/Lunsford.jpg' },
]

const selectedTrainerId = ref(null)

const selectedTrainer = computed(() => {
  return trainers.find((trainer) => trainer.id === selectedTrainerId.value)
})

const handleTrainerSelection = (trainerId) => {
  selectedTrainerId.value = trainerId
}
</script>

<template>
  <section class="trainers">
    <div class="trainers__container">
      <div class="top-content">
        <div class="left-side">
          <h2 class="main-title">
            Тренировки <br />
            Специально <br />
            <span class="highlight">Для тебя</span>
          </h2>
        </div>

        <div class="right-side">
          <p v-if="selectedTrainer" class="desc">
            Отличный выбор! Твой персональный наставник на сегодня:
            <strong class="selected-trainer">
              {{ selectedTrainer.name }} </strong
            >. Нажимай кнопку ниже, чтобы начать!
          </p>

          <p v-else class="desc">Выбирай тренера и начинай заниматься уже сегодня!</p>

          <button type="button" class="start-btn">Начать</button>
        </div>
      </div>

      <div class="trainers-grid">
        <div class="grid-item slot-1">
          <TrainerCard :trainer="trainers[0]" @select-trainer="handleTrainerSelection" />
        </div>

        <div class="grid-item slot-2">
          <TrainerCard :trainer="trainers[2]" @select-trainer="handleTrainerSelection" />
        </div>

        <div class="grid-item slot-3">
          <TrainerCard :trainer="trainers[1]" @select-trainer="handleTrainerSelection" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trainers {
  padding: 100px 0;
  background-color: transparent;
}

.trainers__container {
  width: 100%;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 60px;
}

.left-side {
  flex: 0 1 550px;
}

.main-title {
  color: #ffffff;
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
}

.highlight {
  position: relative;
  display: inline-block;
  margin-top: 5px;
  padding: 0 15px;
  border-radius: 4px;
  background-color: #ffe600;
  color: #000000;
}

.right-side {
  display: flex;
  flex: 0 1 450px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.desc {
  color: #868686;
  font-size: 20px;
  line-height: 1.6;
}

.selected-trainer {
  color: #ffe600;
}

.start-btn {
  width: 130px;
  padding: 12px 34px;
  border: none;
  border-radius: 8px;
  background-color: #24ca84;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(36, 202, 132, 0.3);
}

.trainers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 30px;
}

.slot-2 {
  margin-top: 60px;
}

.slot-3 {
  margin-top: 100px;
}

@media (max-width: 900px) {
  .top-content {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }

  .left-side,
  .right-side {
    flex: none;
    width: 100%;
  }

  .desc {
    font-size: 15px;
  }

  .trainers-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .slot-2,
  .slot-3 {
    margin-top: 0;
  }
}

@media (max-width: 600px) {
  .main-title {
    font-size: 40px;
  }

  .trainers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
