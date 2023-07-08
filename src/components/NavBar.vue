<template lang="">
  <header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#/" class="-m-1.5 p-1.5">
        <img class="h-8 w-auto" src="/favicon.ico" alt="">
      </a>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">

        <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        -->
      </div>

      <a href="#/about" class="text-sm font-semibold leading-6 text-gray-900">Priser</a>
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Feed</a>
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Kontakt</a>
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
<style lang="">
  
</style>