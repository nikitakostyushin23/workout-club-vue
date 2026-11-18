<template>
  <div class="promotion">
    <span class="promotion-badge">NEW</span>
    <span class="promotion-text">Новая интенсивная тренировка</span>
  </div>
</template>

<style scoped>
.promotion {
  display: inline-flex;
  align-items: center;
  background-color: #191919;
  border-radius: 200px;
  padding: 6px 20px 6px 6px;
  color: #d1d1d1;
  font-size: 14px;
  animation: pulse 1.5s infinite ease-in-out alternate;
}

.promotion-badge {
  background-color: var(--accent-color);
  border-radius: 200px;
  padding: 6px 16px;
  margin-right: 15px;
  font-weight: 700;
  color: var(--main-bg);
}

.promotion-text {
  display: inline-block;
}

@media (max-width: 375px) {
  .promotion {
    font-size: 12px;
    padding-right: 15px;
  }

  .promotion-badge {
    padding: 4px 12px;
    margin-right: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .promotion {
    animation: none;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }

  100% {
    transform: scale(1.05);
    opacity: 1;
  }
}
</style>
