import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/om', component: About },
  { path: '/priser', component: About },
  { path: '/feed', component: About },
  { path: '/kontakt', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
