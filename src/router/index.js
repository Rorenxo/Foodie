import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/landing.vue'
import Login from '@/views/login.vue'
import Main from '@/views/main.vue'
import Store from '@/views/store.vue'
import order from '@/views/myorder.vue'

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/order',
    name: 'Order',
    component: order,
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
          description: 'Sautéed chicory with garlic and olive oil',
          price: 120,
          image: 'foods/Cicoria Ripassata.jpg'
        },
        {
          id: 12,
          name: 'Limonata',
          description: 'Lemon juice mixed with water and sugar',
          price: 50,
          image: 'foods/Limonata.jpg'
        },
        {
          id: 16,
          name: 'Negroni',
          description: 'Italian cocktail with gin, sweet vermouth, and Campari',
          price: 100,
          image: 'foods/negroni.jpg'
        },
        {
          id: 18,
          name: 'Tiramisu',
          description: 'Luscious, coffee-flavored Italian dessert with layers of creamy mascarpone and cocoa',
          price: 90,
          image: 'foods/Tiramisu.jpg'
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
        },
        {
          id: 14,
          name: 'Ttalgi Shake',
          description: 'Made with fresh strawberries, milk, and sugar, blended until creamy and sweet',
          price: 150,
          image: 'foods/Ttalgi Shake.jpg'
        },
        {
          id: 15,
          name: 'Strawberry Ice Cream',
          description: 'Creamy strawberry ice cream',
          price: 120,
          image: 'foods/Bungeoppang Ice Cream.jpg'
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
        },
        {
          id: 17,
          name: 'Sesame Cookies',
          description: 'Crunchy, nutty treats made with sesame seeds',
          price: 40,
          image: 'foods/Sesame Cookies.jpg'
        },
        {
          id: 19,
          name: 'Jianlibao',
          description: 'Chinese carbonated soft drink, known for its sweet, citrus flavor and energizing taste',
          price: 40,
          image: 'foods/Jianlibao.jpg'
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
        },
        {
          id: 2,
          name: 'Red Wine',
          description: 'Full-bodied Cabernet Sauvignon',
          price: 350,
          image: 'foods/Vinrouge.jpg',
        },
        {
          id: 10,
          name: 'Bière artisanale',
          description: 'Locally brewed craft beer with unique flavors and artisanal quality',
          price: 90,
          image: 'foods/bière artisanale.jpg'
        },
        {
          id: 13,
          name: 'Volvic Strawberry',
          description: 'Refreshing natural mineral water infused with a hint of strawberry flavor',
          price: 30,
          image: 'foods/Volvic.jpg'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router