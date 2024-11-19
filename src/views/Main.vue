<template>
    <div class="main-content">
      <!-- Home Section -->
      <section id="home" class="home section">
        <h1>LET'S FIND YOUR FOOD</h1>
        <div id="map" class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36691.179135002974!2d120.29477305733364!3d14.842919766125354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b9c32216b%3A0xa080c3d36f2963a7!2sOlongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1730014145286!5m2!1sen!2sph" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
  
      <!-- Products Section -->
      <section id="products" class="products section">
        <h2>Popular Dishes</h2>
        <p>Recommended and Top Trending Foods This Week!</p>
        <div class="product-grid">
          <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">price: ₱{{ product.price }}</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
  
      <!-- Process Section -->
      <section id="process" class="process">
        <h2>Our Process</h2>
        <div class="process-steps">
          <div v-for="step in processSteps" :key="step.id" class="step">
            <div class="step-number">
              <i :class="step.icon"></i>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
        <div class="imagefoot"></div>
      </section>
  
      <!-- Stores Section -->
      <section id="stores" class="stores section">
        <div class="stores-header">
          <h2>Featured Restaurants</h2>
          <nav class="cuisine-nav">
            <ul>
              <li v-for="cuisine in cuisines" :key="cuisine">
                <a href="#" class="cuisine-filter" :data-cuisine="cuisine.toLowerCase()">{{ cuisine }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="store-list">
          <div v-for="store in stores" :key="store.id" class="store-card" :data-cuisine="store.cuisine">
            <img :src="store.image" :alt="store.name">
            <div class="store-details">
              <h3>{{ store.name }}</h3>
              <p class="address">{{ store.address }}</p>
              <button class="visit-btn">Visit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const products = ref([
    {
      id: 1,
      name: 'Arancini',
      description: 'Fried rice balls, often cheesy',
      price: 550,
      image: '@/assets/foods/arancini.jpg'
      
    },
    {
      id: 2,
      name: 'Bibimbap',
      description: 'Mixed rice with veggies and egg',
      price: 350,
      image: '@/assets/foods/bibimbap.jpg'
    },
    {
      id: 3,
      name: 'Bouillabaisse',
      description: 'Fish stew with herbs and spices',
      price: 400,
      image: '/assets/foods/Bouillabaisse.jpg'
    },
    {
      id: 4,
      name: 'Kung Pao Chicken',
      description: 'Spicy chicken with peanuts',
      price: 150,
      image: '@/assets/foods/Kung Pao Chiken.jpg'
    },
    {
      id: 5,
      name: 'Peking duck',
      description: 'Crispy duck served with pancakes',
      price: 250,
      image: '/assets/foods/Peking duck.jpg'
    },
    {
      id: 6,
      name: 'Korean Spicy Chicken',
      description: 'Spicy marinated chicken dish',
      price: 500,
      image: '@/assets/assets/foods/Peking duck.jpg'
    }
  ])
  
  const processSteps = ref([
    { id: 1, icon: 'fas fa-utensils', title: 'Choose Your Food', description: 'Browse our wide selection of delicious foods.' },
    { id: 2, icon: 'fas fa-clipboard-list', title: 'Place Your Order', description: 'Select your items and proceed to checkout.' },
    { id: 3, icon: 'fas fa-credit-card', title: 'Make Payment', description: 'Pay securely using your preferred method.' },
    { id: 4, icon: 'fas fa-smile', title: 'Enjoy Your Meal', description: 'Receive your food and enjoy!' }
  ])
  
  const cuisines = ref(['All', 'Italian', 'Korean', 'Chinese', 'Resto Bar'])
  
  const stores = ref([
    {
      id: 1,
      name: 'Crab and Belly',
      address: 'Taft Road, Lincoln Steeet Subic Bay Freeport Zone',
      image: '/stores/italian restaurant.jpg',
      cuisine: 'italian'
    },
    {
      id: 2,
      name: 'Gourmet Garage Subic',
      address: 'Subic Bay Freeport Zone, Olongapo City',
      image: '/assets/stores/Korean resto.jpg',
      cuisine: 'korean'
    },
    {
      id: 3,
      name: 'Liberty Sports Bar & Grill',
      address: 'Alava Quay SBFZ, Global Commercial Center, Waterfront Rd',
      image: '/assets/stores/Chinese Resto.jpg',
      cuisine: 'chinese'
    },
    {
      id: 4,
      name: 'Pirate Bistro',
      address: '532 Waterfront Rd, Subic Bay Freeport Zone',
      image: '/assets/stores/pirate bistro.jpg',
      cuisine: 'restobar'
    }
  ])
  
  </script>
  