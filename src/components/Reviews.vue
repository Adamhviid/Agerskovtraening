<template>
    <div
        v-if="isMobile"
        class="mt-5">
        <swiper
            :options="swiperOption"
            :modules="modules"
            :pagination="{ clickable: true, renderBullet: bulletRenderer }">
            <swiper-slide
                v-for="(slide, i) in slides"
                :key="i">
                <img
                    :src="slide"
                    class="slide-image" />
            </swiper-slide>
            <div
                class="swiper-pagination swiper-pagination-white"
                slot="pagination"></div>
        </swiper>
    </div>
    <div v-else>
        <swiper
            :options="swiperOption"
            :modules="modules"
            :pagination="{ clickable: true, renderBullet: bulletRenderer }">
            <swiper-slide
                v-for="(slideGroup, i) in chunkedSlides"
                :key="i">
                <div class="grid-container">
                    <img
                        v-for="(slide, j) in slideGroup"
                        :key="j"
                        :src="slide"
                        class="slide-image" />
                </div>
            </swiper-slide>
            <div
                class="swiper-pagination swiper-pagination-white"
                slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            isMobile: false,
            slides: [],
            chunkedSlides: [],
            modules: [Pagination],
            swiperOption: {
                notNextTick: true,
                loop: true,
                initialSlide: 0,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: true,
                },
                speed: 800,
                grabCursor: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "bullets",
                },
            },
        };
    },
    methods: {
        chunk(array, size) {
            return Array.from({ length: Math.ceil(array.length / size) }, (v, i) => array.slice(i * size, i * size + size));
        },
        checkIsMobile() {
            this.isMobile = window.innerWidth < 1024;
        },
        bulletRenderer(index, className) {
            const _className = `${className} swiper-pagination-bullet-custom`;
            return `<span class="${_className}"></span>`;
        },
    },
    async created() {
        window.addEventListener("resize", this.checkIsMobile);
        this.checkIsMobile();

        const imagesContext = import.meta.glob("../assets/reviews/*.png");
        const images = Object.keys(imagesContext);
        const slides = [];
        for (let i = 0; i < images.length; i++) {
            const imageModule = await imagesContext[images[i]]();
            slides.push(imageModule.default);
        }
        this.slides = slides;
        this.chunkedSlides = this.chunk(this.slides, 4);
    },
};
</script>

<style scoped>
.grid-container {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 0 auto;
}

.slide-image {
    width: 100%;
    object-fit: cover;
}

.swiper-pagination {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
}
</style>
