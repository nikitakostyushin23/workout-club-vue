<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import TheNav from './TheNav.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink class="header__logo" to="/" @click="closeMenu"> WORKOUT CLUB </RouterLink>

      <TheNav id="main-navigation" :class="{ 'nav--open': isMenuOpen }" @click="closeMenu" />

      <button
        type="button"
        class="header__burger"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 100;
  padding-top: 50px;
  padding-bottom: 20px;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header__logo {
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
}

.header__burger {
  display: none;
  position: relative;
  z-index: 1100;
  padding: 5px 15px;
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  background: none;
  color: var(--accent-color);
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .header {
    height: 80px;
  }

  .header__logo {
    position: relative;
    top: 10px;
    left: 40px;
    z-index: 1100;
  }

  .header__burger {
    display: block;
    top: 10px;
    right: 40px;
  }
}

@media (max-width: 450px) {
  .header__logo {
    left: 20px;
    font-size: 20px;
  }

  .header__burger {
    right: 20px;
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>
