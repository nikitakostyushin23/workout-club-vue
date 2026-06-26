<script setup>

import { ref } from 'vue';


const navLinks = ref([
    { name: 'УПРАЖНЕНИЯ', href: '#exercises' },
    { name: 'ТРЕНИРОВКИ', href: '#workouts' },
    { name: 'ЦЕНЫ', href: '#pricing' },
    { name: 'О НАС', href: '#about' },
]);

</script>

<template>

    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item" v-for="link in navLinks" :key="link.name">
                <a :href="link.href" class="nav__link">{{ link.name }}</a>
            </li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped>

.nav {

    &__list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 27px;
        justify-content: center;
    }

    &__link {
        text-transform: uppercase;
        font-size: 14px;
        transition: color 0.3s;
    }

    @media (max-width: 1024px) {

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.98);
        backdrop-filter: blur(10px);
        z-index: 1000;
        display: none;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease-in-out;
        transform: translateY(-20px);

        &--open {
            display: flex;
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .nav__list {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .nav__link {
                font-size: 24px;
                color: $text-color;
            }
        }
    }
}
</style>
