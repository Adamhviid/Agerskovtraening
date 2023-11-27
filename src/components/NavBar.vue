<template>
  <header class="bg-black bg-opacity-30 text-white top-0 w-full z-50">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-3">
      <div class="flex lg:flex-1">
        <router-link to="/" class="text-sm font-semibold leading-6 flex items-center">
          <img class="h-12 w-auto mr-2" src="/favicon.ico" alt="">
          <span class="text-xl">Forside</span>
        </router-link>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <router-link to="/forloeb" class="text-md font-semibold leading-6  hover:text-[#32579a]">
          Forløb
        </router-link>
        <router-link to="/kontakt" class="text-md font-semibold leading-6  hover:text-[#32579a]">
          Kontakt
        </router-link>
        <!-- <router-link to="/feed" class="text-md font-semibold leading-6  hover:text-[#32579a]">
          Feed
        </router-link> -->
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
