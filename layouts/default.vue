<template>
  <div>
    <Navigation />
    <Carousel :items="carouselItems" />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Carousel from "~/components/Carousel.vue";

export default {
  components: {
    Navigation,
    Carousel,
  },
  data() {
    return {
      carouselItems: [],
    };
  },
  created() {
    this.getCarouselsData();
  },
  methods: {
    async getCarouselsData() {
      const qs = require("qs");
      const query = qs.stringify({
        "outlet.name": "hanesa",
      });

      this.carouselItems = await this.$strapi.find(
        `carousels?_locale=${this.$i18n.locale}&${query}`
      );
    },
  },
};
</script>

<style lang="scss"></style>
