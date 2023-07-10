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

        <router-link to="/forløb"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-[#32579a]">forløb</router-link>

        <router-link to="/kontakt"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-[#32579a]">Kontakt</router-link>

        <router-link to="/feed"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-[#32579a]">Feed</router-link>

      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 1024px) {
  .lg\:flex {
    display: flex;
  }

  .lg\:hidden {
    display: none;
  }

  .lg\:gap-x-12 {
    gap: 1.5rem;
  }
}
</style>
