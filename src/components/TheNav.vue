<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { name: 'ГЛАВНАЯ', to: '/', isHash: false },
  { name: 'ТРЕНИРОВКИ', to: '/cardio', isHash: false },
  { name: 'БЛОГ', to: '#blog', isHash: true },
  { name: 'О НАС', to: '#about', isHash: true },
]
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="link in navLinks" :key="link.name" class="nav__item">
        <RouterLink
          :to="link.to"
          class="nav__link"
          :class="{
            'is-link-active': !link.isHash && route.path === link.to,
          }"
        >
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 27px;
  list-style: none;
}

.nav__link {
  font-size: 14px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav__link.is-link-active {
  color: #ffe600;
}

@media (max-width: 1024px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition:
      opacity 0.4s ease-in-out,
      visibility 0.4s ease-in-out,
      transform 0.4s ease-in-out;
  }

  .nav.nav--open {
    display: flex;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav__list {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .nav__link {
    color: var(--text-color);
    font-size: 24px;
  }
}
</style>
