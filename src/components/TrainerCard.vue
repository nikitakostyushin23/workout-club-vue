<script setup>
defineProps({
  trainer: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-trainer'])

const handleClick = () => {
  emit('select-trainer', trainer.id)
}
</script>

<template>
  <button type="button" class="trainer-card" @click="handleClick">
    <div class="image-box">
      <img :src="trainer.img" :alt="trainer.name" class="trainer-image" />
    </div>

    <div class="info-box">
      <h3 class="trainer-name">{{ trainer.name }}</h3>
      <p class="trainer-role">{{ trainer.role }}</p>
    </div>
  </button>
</template>

<style scoped>
.trainer-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.trainer-card:hover {
  transform: translateY(-5px);
}

.trainer-card:focus-visible {
  outline: 2px solid #ffe600;
  outline-offset: 5px;
}

.image-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 4px;
  background-color: #ffffff;
}

.trainer-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-box {
  padding-top: 5px;
}

.trainer-name {
  margin-bottom: 4px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.trainer-role {
  color: #666666;
  font-size: 16px;
}
</style>
