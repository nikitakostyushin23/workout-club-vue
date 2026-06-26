<script setup>

import Nav from './Nav.vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>

    <header class="header">
        <div class="header__inner">
            <span class="header__logo">WORKOUT CLUB</span>
            <Nav :class="{ 'nav--open': isMenuOpen }" />
            
            <button class="header__burger" @click="toggleMenu">
                {{ isMenuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ' }}
            </button>
        </div>
    </header>

</template>

<style lang="scss" scoped>

    .header {
        padding-top: 50px;
        padding-bottom: 20px;
        position: relative; 
        z-index: 100;

        @media (max-width: 1024px) {
            height: 80px; 
  }

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        &__logo {
        font-weight: 600;
        font-size: 28px;
        text-transform: uppercase;
        cursor: pointer;

        @media (max-width: 1024px) {
            position: fixed; 
            top: 30px;
            left: 40px;
            z-index: 1100;
    }

        @media (max-width: 450px) {
            font-size: 20px; 
            left: 20px;     
    }
}

    &__burger {
            display: none; 
            background: none;
            border: 1px solid $accent-color;
            color: $accent-color;
            padding: 5px 15px;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 14px;
            position: relative;
            z-index: 1100;

            @media (max-width: 1024px) {
                display: block;
                position: fixed; 
                top: 30px;      
                right: 40px;    
                z-index: 1100;
            }

            @media (max-width: 450px) {
                font-size: 12px;     
                padding: 5px 10px;   
                right: 20px;         
                top: 32px;           
            }
        }
    }

</style>