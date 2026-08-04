import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // Глобальное состояние пользователя
  const isProAccount = ref(false)
  const userData = ref({
    name: '',
    email: '',
    level: 'beginner'
  })


  function activatePro(name: string, email: string, level: string) {
    userData.value.name = name
    userData.value.email = email
    userData.value.level = level
    isProAccount.value = true
    console.log(`[Pinia 2026] PRO-аккаунт успешно активирован для: ${name}`)
  }

  return { isProAccount, userData, activatePro }
})