import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isProAccount = ref(false)

  const userData = ref({
    name: '',
    email: '',
    level: 'beginner',
  })

  const activatePro = (name, email, level) => {
    userData.value = {
      name,
      email,
      level,
    }

    isProAccount.value = true
  }

  const resetUser = () => {
    userData.value = {
      name: '',
      email: '',
      level: 'beginner',
    }

    isProAccount.value = false
  }

  return {
    isProAccount,
    userData,
    activatePro,
    resetUser,
  }
})
