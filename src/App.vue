<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <main class="mt-20">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style scoped></style>