<template>
  <div>
    <!-- <p>{{items}}</p> -->
    <client-only>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="item.image.url" />
          <div class="swiper-content">
            <p>{{ item.title }}</p>
            <p>{{ item.subtitle }}</p>
            <b-button variant="link" class="btn btn--outline">{{ item.button }}</b-button>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 100vh;
  width: 100vw;
  .swiper-slide {
    width: 100%;
    height: 100%;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & img {
      // background-size: cover;
      width: auto;
      height: 100%;

    }
    & .swiper-content {
      position: absolute;
      flex-flow:column;
      align-items: center;
      display: flex;
      & p {
        color: white;
        font-weight: 600;
        text-align: center;
        &:first-of-type {
          font-size: 6vw;
          white-space: pre-wrap;
        }
      }
    }
  }
}
</style>
