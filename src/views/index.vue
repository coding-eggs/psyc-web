<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in sliderList" v-bind:key="index">
            <a v-bind:href="'/#/index/'">
              <img v-bind:src="item.img" alt="">
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">

      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      swiperOption :{
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      sliderList: [
        {
          id: "42",
          img: "/img/slider/slider-1.jpg"
        },
        {
          id: "43",
          img: "/img/slider/slider-2.jpg"
        },
        {
          id: "44",
          img: "/img/slider/slider-3.jpg"
        },
        {
          id: "45",
          img: "/img/slider/slider-4.jpg"
        }
      ]
    }
  }
};
</script>


<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  color: #7f7676 ;
}
.index{
  margin-top: 10px;
  .swiper-box{
    .swiper-container{
      height: 600px;
      width: 1600px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
