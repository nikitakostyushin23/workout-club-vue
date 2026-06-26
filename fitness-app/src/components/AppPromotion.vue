<script setup>
</script>

<template>

    <div class="promotion">
            <span class="promotion__badge">NEW</span>
            <span class="promotion__text">Новая интенсивная тренировка</span>
    </div>

</template>

<style lang="scss" scoped>

  .promotion {
      display: inline-flex;
      align-items: center;
      background-color: #191919;
      border-radius: 200px;
      padding: 6px 20px 6px 6px;
      color: #D1D1D1;
      font-size: 14px;
      animation: pulse 1.5s infinite ease-in-out alternate;

      &__badge {
        background-color: $accent-color;
        border-radius: 200px;
        padding: 6px 16px;
        margin-right: 15px;
        font-weight: 700;
        color: $main-bg;
      }

      @media (max-width: 375px) {
        font-size: 12px; 
        padding-right: 15px; 
    
          &__badge {
              padding: 4px 12px; 
              margin-right: 10px;
        }
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
