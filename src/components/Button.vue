<template lang="">
    <div class="mt-5">
        <router-link :to="to" class="font-semibold">
            <button class="bg-blue-950 hover:text-[#32579a] text-white font-bold py-2 px-4 rounded-full">
                {{ text }}
            </button>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        to: String,
        text: String,
    },
}
</script>
<style lang="">
  
</style>