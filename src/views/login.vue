<template>
    <div class="container">
      <h1>Authentication System</h1>
      <div id="auth-section">
        <!-- Register Form -->
        <h2>Register</h2>
        <input type="text" v-model="registerUsername" placeholder="Username">
        <input type="email" v-model="registerEmail" placeholder="Email">
        <input type="password" v-model="registerPassword" placeholder="Password">
        <button @click="register">Register</button>
  
        <!-- Login Form -->
        <h2>Login</h2>
        <input type="text" v-model="loginUsername" placeholder="Username">
        <input type="password" v-model="loginPassword" placeholder="Password">
        <button @click="login">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const registerUsername = ref('')
    const registerEmail = ref('')
    const registerPassword = ref('')
    const loginUsername = ref('')
    const loginPassword = ref('')
    const message = ref('')

    const register = async () => {
      try {
        const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: registerUsername.value,
            email: registerEmail.value,
            password: registerPassword.value
          }),
        })
        const data = await response.json()
        message.value = data.message
        if (response.ok) {
          router.push('/login')
        }
      } catch (error) {
        message.value = 'An error occurred during registration'
      }
    }

    const login = async () => {
      try {
        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: loginUsername.value,
            password: loginPassword.value
          }),
        })
        const data = await response.json()
        if (response.ok) {
          localStorage.setItem('token', data.token)
          router.push('/main')
        } else {
          message.value = data.message
        }
      } catch (error) {
        message.value = 'An error occurred during login'
      }
    }

    return {
      registerUsername,
      registerEmail,
      registerPassword,
      loginUsername,
      loginPassword,
      message,
      register,
      login
    }
  }
}
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1, h2 {
    text-align: center;
  }
  
  input {
    width: calc(100% - 20px);
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>
  