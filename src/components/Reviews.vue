<template>
    <div class="image-container">
        <img
            v-for="(slide, index) in slides"
            :key="index"
            :src="slide"
            class="slide-image" />
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            slides: [],
        };
    },
    async created() {
        const imagesContext = import.meta.glob("../assets/reviews/*.png");
        const images = Object.keys(imagesContext);
        const slides = [];
        for (let i = 0; i < images.length; i++) {
            const imageModule = await imagesContext[images[i]]();
            slides.push(imageModule.default);
        }
        this.slides = slides;
    },
};
</script>

<style scoped>
.image-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.slide-image {
    width: 100%;
    object-fit: cover;
}
</style>