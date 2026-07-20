<script setup>
import { ref } from 'vue';
import TrainerCard from './TrainerCard.vue'; 

const trainers = ref([
  { id: 1, name: 'Михаил Булыжников', role: 'Тренер', img: 'images/Bulyzhnikov.jpg' },
  { id: 2, name: 'Виктория Амброскина', role: 'Тренер', img: 'images/Ambroskina.jpg' },
  { id: 3, name: 'Дерек Лансфорд', role: 'Тренер', img: 'images/Lunsford.jpg' },
]);

// Реактивная переменная для хранения имени выбранного тренера
const selectedTrainer = ref('');

// Функция ловит имя из эмита дочерней карточки
const handleTrainerSelection = name => {
  selectedTrainer.value = name;
}
</script>

<template>
  <section class="trainers">
    <div class="container">
      
      <!-- Верхняя часть контента -->
      <div class="top-content">
        <div class="left-side">
          <h2 class="main-title">
            Тренировки <br> 
            Специально <br> 
            <span class="highlight">Для тебя</span>
          </h2>
        </div>
        
        <div class="right-side">
          <!-- Если кликнули на тренера — покажем его имя, если нет — стандартный текст -->
          <p class="desc" v-if="selectedTrainer">
            Отличный выбор! Твой персональный наставник на сегодня: 
            <strong style="color: #FFE600;">{{ selectedTrainer }}</strong>. Нажимай кнопку ниже, чтобы начать!
          </p>
          <p class="desc" v-else>
         Выбирай тренера и начинай заниматься уже сегодня!
          </p>
          <button class="start-btn">Начать</button>
        </div>
      </div>

      <!-- Шахматная сетка -->
      <div class="grid">
        <!-- Передаем пропсы :trainer и слушаем эмит @select-trainer -->
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

<style lang="scss" scoped>
.trainers {
  padding: 100px 0;
  background-color: transparent;

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 60px;
    gap: 40px;

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 24px;
      margin-bottom: 40px;
    }
  }

  .left-side {
    flex: 0 1 550px;

     @media (max-width: 900px) {
      flex: none;
      width: 100%;
    }
  }

  .main-title {
    font-size: 64px;
    font-weight: 800;
    line-height: 1.1;
    color: #ffffff;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 40px;
    }
  }

  .highlight {
    position: relative;
    display: inline-block;
    color: #000000;
    background-color: #FFE600;
    padding: 0 15px;
    margin-top: 5px;
    border-radius: 4px;
  }

  .right-side {
    flex: 0 1 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

    @media (max-width: 900px) {
      flex: none;
      width: 100%;  
    }
  }

  .desc {
    color: #868686;
    line-height: 1.6;
    font-size: 20px;
    min-height: auto;

    @media (max-width: 900px) {
      font-size: 15px; 
    }
  }

  .start-btn {
    background-color: #24ca84;
    color: #000000;
    border: none;
    padding: 12px 34px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    width: 130px;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(36, 202, 132, 0.3);
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .slot-2 {
    margin-top: 60px; 
    
    @media (max-width: 900px) {
      margin-top: 0;
    }
  }
  .slot-3 {
    margin-top: 100px; 
    
    @media (max-width: 900px) {
      margin-top: 0;
    }
  }
}
</style>