import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueCarousel from 'vue-carousel';

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Programs from './views/Programs.vue'
import Feed from './views/Feed.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/om', component: About },
  { path: '/forloeb', component: Programs },
  { path: '/feed', component: Feed },
  { path: '/kontakt', component: Contact },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(VueCarousel)
app.mount('#app')
