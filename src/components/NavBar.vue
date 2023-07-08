<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="text-sm font-semibold leading-6 text-gray-900">
          <img class="h-8 w-auto" src="/favicon.ico" alt="">
          <span class="test">
            Forside
          </span>
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link to="/priser" class="text-sm font-semibold leading-6 text-gray-900">Priser</router-link>
        <router-link to="/kontakt" class="text-sm font-semibold leading-6 text-gray-900">Kontakt</router-link>
        <router-link to="/feed" class="text-sm font-semibold leading-6 text-gray-900">Feed</router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
