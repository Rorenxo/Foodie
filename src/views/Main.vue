<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/public icons/logo.png" alt="Foodie Finder" style="height:70px; width: auto;">
    </div>
    <ul class="nav-links">
      <i class="fa-solid fa-bars"></i>
      <li><a href="/main#home">Home</a></li>
      <li><a href="/main#stores">Stores</a></li>
      <li><a href="/order">My Orders</a></li>
      <div class="box">
    <li @click="logout" class="login">Logout</li>
  </div>
    </ul>
  </nav>
  <div class="main-content">
    <!-- Home Section -->
    <section id="home" class="home">
      <h1>LET'S FIND YOUR FOOD</h1>
      <div id="map" class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36691.179135002974!2d120.29477305733364!3d14.842919766125354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b9c32216b%3A0xa080c3d36f2963a7!2sOlongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1730014145286!5m2!1sen!2sph" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
      <h2>Popular Dishes</h2>
      <p>Recommended and Top Trending Foods This Week!</p>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="getImageUrl(product.image)" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">price: ₱{{ product.price }}</p>
          <button @click="addToCartAndRedirect(product)" class="add-to-cart">Add to Cart</button>
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

    <!-- Food Selection Section -->
    <section id="food" class="food">
      <div class="food-header">
        <h2>Food Selection</h2>
        <nav class="foods-nav">
          <ul>
            <li v-for="category in foodCategories" :key="category">
              <a href="#" 
                 @click.prevent="filterFoods(category)"
                 :class="['foods-filter', { active: selectedCategory === category.toLowerCase() }]"
                 :data-category="category.toLowerCase()">
                {{ category }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="food-list">
        <div v-for="food in filteredFoods" :key="food.id" class="food-card" :data-category="food.category">
          <img :src="getImageUrl(food.image)" :alt="food.name">
          <div class="food-details">
            <h3>{{ food.name }}</h3>
            <p>{{ food.description }}</p>
            <p class="price">price: ₱{{ food.price }}</p>
            <button @click="addToCartAndRedirect(food)" class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stores Section -->
    <section id="stores" class="stores">
      <div class="stores-header">
        <h2>Featured Restaurants</h2>
        <nav class="cuisine-nav">
          <ul>
            <li v-for="cuisine in cuisines" :key="cuisine">
              <a href="#" 
                 @click.prevent="filterStores(cuisine)"
                 :class="['cuisine-filter', { active: selectedCuisine === cuisine.toLowerCase() }]"
                 :data-cuisine="cuisine.toLowerCase()">
                {{ cuisine }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="store-list">
        <router-link
          v-for="store in filteredStores" 
          :key="store.id" 
          :to="store.link" 
          class="store-card" 
          :data-cuisine="store.cuisine"
        >
          <img :src="getImageUrl(store.image)" :alt="store.name">
          <div class="store-details">
            <h3>{{ store.name }}</h3>
            <p class="address">{{ store.address }}</p>
            <span class="visit-btn">Visit</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/cart/cart'

const cartStore = useCartStore()
const router = useRouter()

const products = ref([
  {
    id: 1,
    name: 'Arancini',
    description: 'Fried rice balls, often cheesy',
    price: 550,
    image: 'foods/arancini.jpg',
    category: 'italian'
  },
  {
    id: 2,
    name: 'Bibimbap',
    description: 'Mixed rice with veggies and egg',
    price: 350,
    image: 'foods/bibimbap.jpg',
    category: 'korean'
  },
  {
    id: 3,
    name: 'Bouillabaisse',
    description: 'Fish stew with herbs and spices',
    price: 400,
    image: 'foods/Bouillabaisse.jpg',
    category: 'french'
  },
  {
    id: 4,
    name: 'Kung Pao Chicken',
    description: 'Spicy chicken with peanuts',
    price: 150,
    image: 'foods/Kung Pao Chicken.jpg',
    category: 'chinese'
  },
  {
    id: 5,
    name: 'Peking duck',
    description: 'Crispy duck served with pancakes',
    price: 250,
    image: 'foods/Peking duck.jpg',
    category: 'chinese'
  },
  {
    id: 6,
    name: 'Korean Spicy Chicken',
    description: 'Spicy marinated chicken dish',
    price: 500,
    image: 'foods/korean-Spicy-Chicken.jpg',
    category: 'korean'
  }
])

const processSteps = ref([
  { id: 1, icon: 'fas fa-utensils', title: 'Choose Your Food', description: 'Browse our wide selection of delicious foods.' },
  { id: 2, icon: 'fas fa-clipboard-list', title: 'Place Your Order', description: 'Select your items and proceed to checkout.' },
  { id: 3, icon: 'fas fa-credit-card', title: 'Make Payment', description: 'Pay securely using your preferred method.' },
  { id: 4, icon: 'fas fa-smile', title: 'Enjoy Your Meal', description: 'Receive your food and enjoy!' }
])

const foods = ref([
  {
    id: 1,
    name: 'Arancini',
    description: 'Fried rice balls, often cheesy',
    price: 550,
    image: 'foods/arancini.jpg',
    category: 'italian'
  },
  {
    id: 2,
    name: 'Bibimbap',
    description: 'Mixed rice with veggies and egg',
    price: 350,
    image: 'foods/bibimbap.jpg',
    category: 'korean'
  },
  {
    id: 3,
    name: 'Bouillabaisse',
    description: 'Fish stew with herbs and spices',
    price: 400,
    image: 'foods/Bouillabaisse.jpg',
    category: 'french'
  },
  {
    id: 4,
    name: 'Kung Pao Chicken',
    description: 'Spicy chicken with peanuts',
    price: 150,
    image: 'foods/Kung Pao Chicken.jpg',
    category: 'chinese'
  },
  {
    id: 5,
    name: 'Peking duck',
    description: 'Crispy duck served with pancakes',
    price: 250,
    image: 'foods/Peking duck.jpg',
    category: 'chinese'
  },
  {
    id: 6,
    name: 'Korean Spicy Chicken',
    description: 'Spicy marinated chicken dish',
    price: 500,
    image: 'foods/korean-Spicy-Chicken.jpg',
    category: 'korean'
  },
  {
    id: 7,
    name: 'Dim sum',
    description: 'Steamed or fried bite-sized delights.',
    price: 220,
    image: 'foods/Dim sum.jpg',
    category: 'chinese'
  },
  {
    id: 8,
    name: 'tteokbokki',
    description: 'Simmered rice cake',
    price: 150,
    image: 'foods/tteokbokki.jpg',
    category: 'korean'
  },
  {
    id: 9,
    name: 'Cicoria Ripassata',
    description: 'Sautéed chicory with garlic and olive oil.',
    price: 120,
    image: 'foods/Cicoria Ripassata.jpg',
    category: 'italian'
  }
])

const foodCategories = ref(['All', 'Italian', 'Korean', 'Chinese', 'French'])
const selectedCategory = ref('all')

const filterFoods = (category) => {
  selectedCategory.value = category.toLowerCase()
}

const filteredFoods = computed(() => {
  if (selectedCategory.value === 'all') {
    return foods.value
  }
  return foods.value.filter(food => food.category === selectedCategory.value)
})

const cuisines = ref(['All', 'Italian', 'Korean', 'Chinese', 'French'])

const stores = ref([
  {
    id: 1,
    name: 'Crab and Belly',
    address: 'Taft Road, Lincoln Steeet Subic Bay Freeport Zone',
    image: 'stores/italian restaurant.jpg',
    cuisine: 'italian',
    link: '/store/crab-and-belly'
  },
  {
    id: 2,
    name: 'Gourmet Garage Subic',
    address: 'Subic Bay Freeport Zone, Olongapo City',
    image: 'stores/Korean resto.jpg',
    cuisine: 'korean',
    link: '/store/gourmet-garage-subic'
  },
  {
    id: 3,
    name: 'Liberty Sports Bar & Grill',
    address: 'Alava Quay SBFZ, Global Commercial Center, Waterfront Rd',
    image: 'stores/Chinese Resto.jpg',
    cuisine: 'chinese',
    link: '/store/liberty-sports-bar'
  },
  {
    id: 4,
    name: 'French Brew Café',
    address: 'Tanguille Street, Masinloc, Zambales',
    image: 'stores/French.jpg',
    cuisine: 'french',
    link: '/store/French Brew'
  }
])

const selectedCuisine = ref('all')

const filterStores = (cuisine) => {
  selectedCuisine.value = cuisine.toLowerCase()
}

const filteredStores = computed(() => {
  if (selectedCuisine.value === 'all') {
    return stores.value
  }
  return stores.value.filter(store => store.cuisine === selectedCuisine.value)
})

const cart = ref([])

const addToCartAndRedirect = (item) => {
  const store = stores.value.find(store => 
    store.cuisine === item.category || 
    store.name.toLowerCase().includes(item.category)
  )


  if (store) {
    cartStore.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      storeId: store.id
    })

    router.push(store.link)
  } else {
    console.error('No matching store found for this item')
  }
}

function getImageUrl(name) {
  try {
    return new URL(`../assets/${name}`, import.meta.url).href;
  } catch (error) {
    console.error("Error resolving image:", name, error);
    return '';
  }
}
// Logout function
const logout = () => {
  // Clear the token from localStorage
  localStorage.removeItem('token')

  // Redirect to login page
  router.push('/login')
}


</script>