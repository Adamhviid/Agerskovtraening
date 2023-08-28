<template>
  <vueper-slides lazy lazy-load-on-drag autoplay class="no-shadow" :slide-ratio="1 / 1" bullets-outside
    transition-speed="350">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.content">
      <template #loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import one from '../assets/reviews/1.png';
import two from '../assets/reviews/2.png';
import three from '../assets/reviews/3.png';
import four from '../assets/reviews/4.png';
import five from '../assets/reviews/5.png';
import six from '../assets/reviews/6.png';
import seven from '../assets/reviews/7.png';
import eight from '../assets/reviews/8.png';
import nine from '../assets/reviews/9.png';
import ten from '../assets/reviews/10.png';
import eleven from '../assets/reviews/11.png';

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          content: one,
          title: "review"
        },
        {
          content: two,
          title: "review"
        },
        {
          content: three,
          title: "review"
        },
        {
          content: four,
          title: "review"
        },
        {
          content: five,
          title: "review"
        },
        {
          content: six,
          title: "review"
        },
        {
          content: seven,
          title: "review"
        },
        {
          content: eight,
          title: "review"
        },
        {
          content: nine,
          title: "review"
        },
        {
          content: ten,
          title: "review"
        },
        {
          content: eleven,
          title: "review"
        }
      ]
    }
  }
}
</script>
<style>
.vueperslide--loading .vueperslide__content-wrapper {
  display: none !important;
}
</style>