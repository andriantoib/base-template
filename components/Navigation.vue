<template>
  <b-navbar id="navigation" class="navigation" toggleable="lg" fixed="top">
    <b-navbar-brand href="/">
      <img
        src="https://dimymainbucket.s3.ap-southeast-1.amazonaws.com/logo/qfood-logo.png"
        width="200"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-sidebar"></b-navbar-toggle>

    <b-navbar-nav class="menu ml-auto">
      <b-nav-item
        active-class="active"
        active
        class="menu-item"
        @click="homePressed"
        >Home</b-nav-item
      >
      <b-nav-item active-class="active" class="menu-item">Menu</b-nav-item>
      <b-nav-item class="menu-item">Reservation</b-nav-item>

      <!-- <b-nav-item class="menu-item">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
      </b-nav-item> -->
    </b-navbar-nav>

    <b-sidebar id="nav-sidebar"> </b-sidebar>
  </b-navbar>
</template>

<script>
export default {
  // components: { LocaleSwitcher }
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    homePressed() {
      console.log("home menu pressed");
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        var navbar = document.getElementById("navigation");
        var nav_classes = navbar.classList;
        if (document.documentElement.scrollTop >= 150) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  height: $navHeight;
  padding: 1em 3em;
  transition: all 0.5s;
  background: rgba(255, 255, 255, 0);
  top: 0;
  width: 100vw;
  border-bottom: 0.5px solid #ffffff66;
  @include for-size(phone-only) {
    padding: 0.5rem 1rem;
  }
  &.shrink {
    height: $navHeight;
    // padding: 0.5rem 3em;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    & .menu {
      @include for-size(phone-only) {
        display: none;
      }
      & .menu-item {
        padding: 0px 25px;
        width: 180px;
        & a {
          color: #000;
          font-size: 18px;
          font-weight: 600;
          transition: all 0.2s;
          &:hover {
            color: $primary;
          }
        }
      }
    }
  }
  & .menu {
    @include for-size(phone-only) {
      display: none;
    }
    & .menu-item {
      padding: 0px 25px;
      width: 180px;
      & a {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        transition: all 0.2s;
        &:hover {
          color: $primary;
        }
      }
    }
  }
}

.active {
  color: $primary;
}

.nav-item {
  color: white;
}
</style>
