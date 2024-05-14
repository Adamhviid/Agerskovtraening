<template>
    <div>
        <div class="banner-container">
            <img alt="banner" src="../assets/photos/banner.jpeg" class="banner-image mx-auto" />
        </div>
        <slot></slot> <!-- This is where your view content will be injected -->
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style scoped>
.banner-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #000000;
}

.banner-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}
</style>