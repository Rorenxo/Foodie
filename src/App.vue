<template>
  <div id="app">
    <RouterView />
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Footer from "@/components/footer.vue";

const route = useRoute();

const footerRoutes = ["/main", "/landing", "/store/gourmet-garage-subic"];


const showFooter = computed(() => {
  console.log("Current route path:", route.path); 
  return footerRoutes.includes(route.path);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
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
</style>