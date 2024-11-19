<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Main from './views/Main.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <Main />
    <Footer />
  </div>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import '@/assets/base.css';
@import '@/assets/main.css';

:root {
    --primary-color: #e60023;
    --secondary-color: #333;
    --tertiary-color: #FFFACD;
    --background-color: #f7f7f7;
    --text-color3: #f1f1f1;
    --text-color: #191919;
    --text-color2: #e60023;
    --fornav: #FFFACD;
    --transition-speed: 0.3s;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--background-color);
}
/* Responsive styles */

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links .fa-solid {
        display: flex;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .product-grid,
    .store-list {
        grid-template-columns: repeat(1, 1fr);
    }

    .footer .box-container {
        grid-template-columns: 1fr;
    }

    .footer .box img,
    .footer .box .share {
        padding-left: 0;
        margin-left: 0;
        justify-content: center;
    }
}
</style>
