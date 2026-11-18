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

  return isEmailOk
})

const submitOrder = () => {
  if (!isFormValid.value) {
    return
  }

  userStore.activatePro(formName.value, formEmail.value, formLevel.value)

  isModalOpen.value = false

  formName.value = ''
  formEmail.value = ''
  formLevel.value = 'beginner'
}
</script>

<template>
  <section class="tariffs">
    <h2 class="section-title">ВЫБЕРИТЕ СВОЙ ТАРИФ</h2>

    <div class="tariffs-grid">
      <div class="tariff-card">
        <h3 class="card-title">БЕСПЛАТНО</h3>

        <p class="price">
          $0
          <span>/ мес</span>
        </p>

        <ul class="features-list">
          <li>✔ Доступ к бесплатным видео</li>
          <li>✔ Счетчик калорий</li>
          <li>✖ Персональный тренер</li>
        </ul>

        <button
          type="button"
          class="tariff-button outline-button"
          :disabled="userStore.isProAccount"
        >
          {{ userStore.isProAccount ? 'У вас уже PRO' : 'Текущий тариф' }}
        </button>
      </div>

      <div class="tariff-card pro-card" :class="{ purchased: userStore.isProAccount }">
        <div v-if="userStore.isProAccount" class="pro-badge">КУПЛЕНО</div>

        <h3 class="card-title">ПЛЮС +</h3>

        <p class="price">
          $19
          <span>/ мес</span>
        </p>

        <ul class="features-list">
          <li>✔ Доступ ко всем тренировкам</li>
          <li>✔ Синхронизация данных</li>
          <li>✔ Персональный наставник на выбор</li>
        </ul>

        <button
          type="button"
          class="tariff-button primary-button"
          :disabled="userStore.isProAccount"
          @click="isModalOpen = true"
        >
          {{ userStore.isProAccount ? 'Ваш тариф активирован' : 'Присоединиться' }}
        </button>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
      <div class="modal-window">
        <button
          type="button"
          class="close-modal"
          aria-label="Закрыть окно"
          @click="isModalOpen = false"
        >
          ×
        </button>

        <h3 class="modal-title">ОФОРМЛЕНИЕ ПОДПИСКИ</h3>

        <form class="subscription-form" @submit.prevent="submitOrder">
          <div class="input-group">
            <label for="subscription-name">Ваше имя</label>

            <input
              id="subscription-name"
              v-model="formName"
              type="text"
              placeholder="Введите имя"
              required
            />
          </div>

          <div class="input-group">
            <label for="subscription-email">Электронная почта</label>

            <input
              id="subscription-email"
              v-model="formEmail"
              type="email"
              placeholder="example@mail.com"
              required
            />
          </div>

          <div class="input-group">
            <label for="subscription-level"> Ваш уровень подготовки </label>

            <select id="subscription-level" v-model="formLevel">
              <option value="beginner">Новичок</option>
              <option value="middle">Любитель</option>
              <option value="pro">Профессионал</option>
            </select>
          </div>

          <button type="submit" class="submit-button" :disabled="!isFormValid">
            АКТИВИРОВАТЬ PRO
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tariffs {
  --accent-orange: #ff5722;

  padding: 80px 0 20px;
}

.section-title {
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
}

.tariffs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.tariff-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  background-color: #111111;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.pro-card {
  border-color: var(--accent-orange);
  background-color: rgba(255, 87, 34, 0.01);
}

.pro-card.purchased {
  border-color: #24ca84;
  background-color: rgba(36, 202, 132, 0.01);
}

.pro-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 4px 10px;
  border-radius: 10px;
  background-color: #24ca84;
  color: #000000;
  font-size: 11px;
  font-weight: 800;
}

.card-title {
  margin-bottom: 20px;
  color: #868686;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
}

.pro-card .card-title {
  color: var(--accent-orange);
}

.pro-card.purchased .card-title {
  color: #24ca84;
}

.price {
  margin-bottom: 30px;
  font-size: 54px;
  font-weight: 900;
  line-height: 1;
}

.price span {
  color: #666666;
  font-size: 16px;
  font-weight: 400;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-bottom: 40px;
  padding: 0;
  list-style: none;
}

.features-list li {
  color: #ababab;
  font-size: 15px;
}

.tariff-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

.tariff-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.outline-button {
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: #1a1a1a;
  color: #ffffff;
}

.outline-button:hover:not(:disabled) {
  background-color: #222222;
}

.primary-button {
  background-color: var(--accent-orange);
  color: #ffffff;
}

.primary-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 87, 34, 0.2);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
}

.modal-window {
  position: relative;
  width: 90%;
  max-width: 460px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background-color: #111111;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 25px;
  border: none;
  background: none;
  color: #666666;
  font-size: 32px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-modal:hover {
  color: #ffffff;
}

.modal-title {
  margin-bottom: 30px;
  color: var(--accent-orange);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
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
}

.input-group label {
  color: #666666;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  outline: none;
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: inherit;
  font-size: 15px;
  transition: border-color 0.3s ease;
}

.input-group input:focus,
.input-group select:focus {
  border-color: var(--accent-orange);
}

.submit-button {
  margin-top: 10px;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background-color: #24ca84;
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.submit-button:disabled {
  background-color: #222222;
  color: #555555;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .tariffs-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
