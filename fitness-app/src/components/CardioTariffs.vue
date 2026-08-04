<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user' 

const userStore = useUserStore()

const isModalOpen = ref(false)

const formName = ref('')
const formEmail = ref('')
const formLevel = ref('beginner')


const isFormValid = computed(() => {
  const isEmailOk = formEmail.value.includes('@') && formEmail.value.includes('.') 
  return  isEmailOk 
})

// Функция отправки формы
const submitOrder = () => {
  if (isFormValid.value) {
    // Отправляем данные в Pinia Store!
    userStore.activatePro(formName.value, formEmail.value, formLevel.value)
    
    // Закрываем окно и очищаем форму
    isModalOpen.value = false
    formName.value = ''
    formEmail.value = ''
  }
}
</script>

<template>
  <section class="tariffs">
    <h2 class="section-title">ВЫБЕРИТЕ СВОЙ ТАРИФ</h2>

    <!-- СЕТКА КАРТОЧЕК ТАРИФОВ -->
    <div class="tariffs-grid">
      <!-- 1. Карточка БЕСПЛАТНО -->
      <div class="tariff-card">
        <h3 class="card-title">БЕСПЛАТНО</h3>
        <p class="price">$0 <span>/ мес</span></p>
        <ul class="features-list">
          <li>✔ Доступ к бесплатным видео</li>
          <li>✔ Счетчик калорий</li>
          <li>✖ Персональный тренер</li>
        </ul>
        <button class="tariff-btn outline-btn" :disabled="userStore.isProAccount">
          {{ userStore.isProAccount ? 'У вас уже PRO' : 'Текущий тариф' }}
        </button>
      </div>

      <!-- 2. Карточка ПЛЮС+ -->
      <div class="tariff-card pro" :class="{ 'purchased': userStore.isProAccount }">
        <div class="pro-badge" v-if="userStore.isProAccount">КУПЛЕНО</div>
        <h3 class="card-title">ПЛЮС +</h3>
        <p class="price">$19 <span>/ мес</span></p>
        <ul class="features-list">
          <li>✔ Доступ ко всем тренировкам</li>
          <li>✔ Синхронизация данных</li>
          <li>✔ Персональный наставник на выбор</li>
        </ul>
        <!-- Клик по кнопке открывает нашу модалку -->
        <button 
          class="tariff-btn primary-btn" 
          @click="isModalOpen = true"
          :disabled="userStore.isProAccount"
        >
          {{ userStore.isProAccount ? 'Ваш тариф активирован' : 'Присоединиться' }}
        </button>
      </div>
    </div>

    <!-- ВСПЛЫВАЮЩЕЕ ОКНО НА ОФОРМЛЕНИЕ (МОДАЛКА) -->
    <div class="modal-overlay" v-if="isModalOpen" @click.self="isModalOpen = false">
      <div class="modal-window">
        <button class="close-modal" @click="isModalOpen = false">×</button>
        <h3 class="modal-title">ОФОРМЛЕНИЕ ПОДПИСКИ</h3>
        
        <form @submit.prevent="submitOrder" class="subscription-form">
          <!-- Поле ИМЯ (v-model) -->
          <div class="input-group">
            <label>Ваше имя</label>
            <input v-model="formName" type="text" placeholder="Введите имя" required />
          </div>

          <!-- Поле EMAIL (v-model) -->
          <div class="input-group">
            <label>Электронная почта</label>
            <input v-model="formEmail" type="email" placeholder="example@mail.com" required />
          </div>

          <!-- Поле УРОВЕНЬ ПОДГОТОВКИ (v-model на select) -->
          <div class="input-group">
            <label>Ваш уровень подготовки</label>
            <select v-model="formLevel">
              <option value="beginner">Новичок</option>
              <option value="middle">Любитель</option>
              <option value="pro">Профессионал</option>
            </select>
          </div>

          <!-- Кнопка отправки: :disabled завязан на computed-свойство! -->
          <button type="submit" class="submit-btn" :disabled="!isFormValid">
            АКТИВИРОВАТЬ PRO
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tariffs {
  padding: 80px 0 20px;
  --neon-yellow: #FFE600;
  --accent-orange: #FF5722;

  .section-title {
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 1px;
  }

  .tariffs-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .tariff-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: all 0.3s ease;

    &.pro {
      border-color: var(--accent-orange);
      background: rgba(255, 87, 34, 0.01);
    }

    &.purchased {
      border-color: #24ca84;
      background: rgba(36, 202, 132, 0.01);
    }

    .pro-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #24ca84;
      color: #000;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 10px;
    }

    .card-title {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 20px;
      color: #868686;
    }

    &.pro .card-title { color: var(--accent-orange); }
    &.purchased .card-title { color: #24ca84; }

    .price {
      font-size: 54px;
      font-weight: 900;
      margin-bottom: 30px;
      line-height: 1;

      span { font-size: 16px; color: #666666; font-weight: 400; }
    }

    .features-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      margin-bottom: 40px;

      li { font-size: 15px; color: #ABABAB; }
    }

    .tariff-btn {
      width: 100%;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;

      &:disabled { opacity: 0.3; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
    }

    .outline-btn {
      background: #1a1a1a;
      color: #ffffff;
      border: 1px solid rgba(255,255,255,0.05);
      &:hover { background: #222222; }
    }

    .primary-btn {
      background: var(--accent-orange);
      color: #ffffff;
      &:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255, 87, 34, 0.2); }
    }
  }

  // СТИЛИ МОДАЛЬНОГО ОКНА 
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-window {
    background: #111111;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    width: 90%;
    max-width: 460px;
    padding: 40px;
    position: relative;
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  }

  .close-modal {
    position: absolute;
    top: 20px;
    right: 25px;
    background: none;
    border: none;
    color: #666666;
    font-size: 32px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover { color: #ffffff; }
  }

  .modal-title {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    color: var(--accent-orange);
  }

  .subscription-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label { font-size: 12px; font-weight: 600; color: #666666; text-transform: uppercase; }
    
    input, select {
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 10px;
      padding: 14px 18px;
      font-size: 15px;
      color: #ffffff;
      outline: none;
      width: 100%;
      font-family: inherit;
      transition: border-color 0.3s;

      &:focus { border-color: var(--accent-orange); }
    }
  }

  .submit-btn {
    background: #24ca84; // Активация загорается мятным!
    color: #000000;
    border: none;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.3s ease;

    &:disabled {
      background: #222222;
      color: #555555;
      cursor: not-allowed;
    }
  }
}
</style>