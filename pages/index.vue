<template>
  <b-container>
    <Welcome :content="welcomeSection" />
    <Menus :categories="menuCategories" />
  </b-container>
</template>

<script>
import Welcome from "~/components/Welcome.vue";
import Menus from "~/components/Menus.vue";
export default {
  name: "IndexPage",
  components: {
    Welcome,
    Menus,
  },
  data() {
    return {
      welcomeSection: {},
      menus: [],
      menuCategories: [],
    };
  },
  created() {
    this.getWelcomeSectionData();
    this.getMenuData();
  },
  methods: {
    async getWelcomeSectionData() {
      const qs = require("qs");
      const query = qs.stringify({
        "outlet.name": "hanesa",
      });

      this.welcomeSection = await this.$strapi.find(
        `welcome-section?_locale=${this.$i18n.locale}&${query}`
      );
    },
    async getMenuData() {
      const qs = require("qs");
      const query = qs.stringify({
        "outlet.name": "hanesa",
      });

      this.menuCategories = await this.$strapi.find(
      `categories?${query}`
      );
    },
  },
};
</script>
