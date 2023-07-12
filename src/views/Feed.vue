<template lang="">
  <div class="flex justify-center items-center" id="spinner">
    <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
  </div>
  <div>
    <iframe width="100%" height="1000" src="https://www.instagram.com/agerskov_traening/embed" frameborder="0" id="instagram-embed"></iframe>
  </div>
</template>
<script>
export default {
  mounted() {
    const spinner = document.getElementById('spinner');
    const iframe = document.getElementById('instagram-embed');

    iframe.style.display = 'none';

    iframe.addEventListener('load', () => {
      spinner.style.display = 'none';
      iframe.style.display = 'block';
    });
  }
}
</script>
<style lang="">
  
</style>
