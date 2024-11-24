<template>
    <div class="min-h-screen bg-gray-100">
      <nav class="navbar">
        <div class="logo">
          <img src="@/assets/public icons/logo.png" alt="Foodie Finder" class="logo-image">
        </div>
        <ul class="nav-links">
          <i class="fa-solid fa-bars"></i>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/#stores">Stores</router-link></li>
          <li><router-link to="/order">My Orders</router-link></li>
          <div class="box">
            <li><router-link to="/landing" class="login">Logout</router-link></li>
          </div>
        </ul>
      </nav>
  
      <div class="container">
        <h1 class="page-title">My Orders</h1>
  
        <div class="order-container">
          <div v-if="cartStore.orders.length === 0" class="empty-orders">
            You have no orders yet. Start shopping to place an order!
          </div>
          <div v-else>
            <div v-for="order in cartStore.orders" :key="order.id" class="order-item">
              <h2 class="order-title">Order #{{ order.id }}</h2>
              <p class="order-date">Placed on: {{ new Date(order.date).toLocaleString() }}</p>
              <div v-for="item in order.items" :key="item.id" class="order-product">
                <div class="product-info">
                  <img :src="getImageUrl(item.image)" :alt="item.name" class="product-image">
                  <div>
                    <h3 class="product-name">{{ item.name }}</h3>
                    <p class="product-quantity">Quantity: {{ item.quantity }}</p>
                    <p class="product-price">Price: ₱{{ item.price * item.quantity }}</p>
                  </div>
                </div>
              </div>
              <div class="order-total">
                <p>Total: ₱{{ order.total.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/cart/cart'
  
  const cartStore = useCartStore()
  
  function getImageUrl(name) {
    try {
      return new URL(`../assets/${name}`, import.meta.url).href
    } catch (error) {
      console.error("Error resolving image:", name, error)
      return ''
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #f1f1f1;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
  }
  
  .nav-links li {
    margin-left: 1rem;
  }
  
  .nav-links a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #e53e3e;
  }
  
  .box a {
    border: 1px solid #e53e3e;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    transition: all 0.3s ease;
  }
  
  .box a:hover {
    background-color: #e53e3e;
    color: white;
  }
  
  .logo-image {
    height: 70px;
    width: auto;
  }
  
  .page-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .order-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .order-item {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .order-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .order-date {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .order-product {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  
  .product-info {
    display: flex;
    align-items: center;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 1rem;
  }
  
  .product-name {
    font-weight: 500;
  }
  
  .product-quantity, .product-price {
    font-size: 0.875rem;
    color: #666;
  }
  
  .order-total {
    font-weight: bold;
    text-align: right;
    margin-top: 1rem;
  }
  
  .empty-orders {
    text-align: center;
    color: #666;
    padding: 2rem;
  }
  </style>
  