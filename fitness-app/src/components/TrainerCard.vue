<script setup>
// Принимаем данные одного тренера от родителя
defineProps({
  trainer: {
    type: Object,
    required: true
  }
})

// Объявляем эмит (событие, которое полетит наверх к родителю)
const emit = defineEmits(['select-trainer'])

// Функция срабатывает при клике на всю карточку
function handleClick(name) {
  emit('select-trainer', name) // Отправляем имя выбранного тренера
}
</script>

<template>
  <div class="trainer-card" @click="handleClick(trainer.name)">
    <div class="image-box">
      <img :src="trainer.img" :alt="trainer.name" class="img">
    </div>
    <div class="info-box">
      <h3 class="name">{{ trainer.name }}</h3>
      <p class="role">{{ trainer.role }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trainer-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .image-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 4px;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-box {
    padding-top: 5px;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 4px;
  }

  .role {
    font-size: 14px;
    color: #666666;
  }
}
</style>