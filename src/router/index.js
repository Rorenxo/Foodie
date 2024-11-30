import { createRouter, createWebHistory } from 'vue-router'

import Landing from '@/views/landing.vue'
import Login from '@/views/login.vue'
import Main from '@/views/Main.vue'
import Store from '@/views/store.vue'
import Order from '@/views/myorder.vue'


const routes = [
  { path: '/', component: Landing },
  { path: '/main', component: Main, meta: { requiresAuth: true } },
  { path: '/landing', component: Landing }, // Define the '/landing' route
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
 
  {
  path: '/order',
  name: 'Order',
  component: Order,
  },
{
    path: '/store/crab-and-belly',
    name: 'CrabAndBelly',
    component: Store,
    props: {
      storeName: 'Crab and Belly',
      storeAddress: 'Taft Road, Lincoln Steeet Subic Bay Freeport Zone',
      storeImage: 'stores/italian restaurant.jpg',
      storeProducts: [
        {
          id: 1,
          name: 'Arancini',
          description: 'Fried rice balls, often cheesy',
          price: 550,
          image: 'foods/arancini.jpg'
        },
        {
          id: 2,
          name: 'Cicoria Ripassata',
          description: 'Creamy risotto with a mix of seafood',
          price: 120,
          image: 'foods/Cicoria Ripassata.jpg'
        }
      ]
    }
  },
  {
    path: '/store/gourmet-garage-subic',
    name: 'GourmetGarageSubic',
    component: Store,
    props: {
      storeName: 'Gourmet Garage Subic',
      storeAddress: 'Subic Bay Freeport Zone, Olongapo City',
      storeImage: 'stores/Korean resto.jpg',
      storeProducts: [
        {
          id: 1,
          name: 'Bibimbap',
          description: 'Mixed rice with vegetables and meat',
          price: 350,
          image: 'foods/bibimbap.jpg'
        },
        {
          id: 2,
          name: 'Korean Spicy Chicken',
          description: 'Spicy marinated chicken dish',
          price: 500,
          image: 'foods/korean-Spicy-Chicken.jpg'
        },
        {
          id: 3,
          name: 'Tteokbokki',
          description: 'Simmered rice cake',
          price: 150,
          image: 'foods/tteokbokki.jpg'
        }
      ]
    }
  },
  {
    path: '/store/liberty-sports-bar',
    name: 'LibertySportsBar',
    component: Store,
    props: {
      storeName: 'Liberty Sports Bar & Grill',
      storeAddress: 'Alava Quay SBFZ, Global Commercial Center, Waterfront Rd',
      storeImage: 'stores/Chinese Resto.jpg',
      storeProducts: [
        {
          id: 1,
          name: 'Kung Pao Chicken',
          description: 'Spicy chicken with peanuts',
          price: 150,
          image: 'foods/Kung Pao Chicken.jpg'
        },
        {
          id: 2,
          name: 'Peking duck',
          description: 'Crispy duck served with pancakes',
          price: 250,
          image: 'foods/Peking duck.jpg'
        },
        {
          id: 3,
          name: 'Dim sum',
          description: 'Steamed or fried bite-sized delights.',
          price: 220,
          image: 'foods/Dim sum.jpg'
        }
      ]
    }
  },
  {
    path: '/store/French Brew',
    name: 'French Brew Café',
    component: Store,
    props: {
      storeName: 'French Brew Café',
      storeAddress: 'Tanguille Street, Masinloc, Zambales',
      storeImage: 'stores/French.jpg',
      storeProducts: [
        {
          id: 1,
          name: 'Bouillabaisse',
          description: 'Fish stew with herbs and spices',
          price: 400,
          image: 'foods/Bouillabaisse.jpg'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If the user is not logged in (i.e., no token in localStorage)
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to the login page if not authenticated
      next({ path: '/login' });
    } else {
      // Proceed to the route if authenticated
      next();
    }
  } else {
    // If no authentication required, proceed to the route
    next();
  }
});

// Redirect to the login page if already logged in and trying to go to /login
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  
  if (to.path === '/login' && token) {
    // If user is already logged in, redirect them to the main page
    next({ path: '/main' });
  } else {
    next();
  }
});
// Export the router object
export default router;


