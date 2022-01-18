<template>
  <b-row>
    <b-container>
      <div class="menu">
        <b-tabs content-class="mt-3" align="center">
          <b-tab
            v-for="category in categories"
            :key="category.id"
            :title="category.name"
            class="menu__tab"
          >
            <div
              class="menu__item"
              v-for="item in category.menus"
              :key="item.id"
            >
              <h4>{{ item.name }}</h4>
              <span>{{ item.tag }}</span>
              <span>{{ item.price }}</span>
              <p>{{ item.description }}</p>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </b-row>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  background: #fff;
  border-radius: 5px;
  padding: 60px 100px 40px;
  &__item {

  }
}
</style>
