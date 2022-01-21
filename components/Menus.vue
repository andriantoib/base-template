<template>
  <div
    class="menu-wrapper"
    style="
      background-image: url(https://leap-in.com/wp-content/uploads/2018/06/mountain.jpg);
    "
  >
    <b-container>
      <div class="menu-title">
        <p>Our Favorites</p>
        <h3>Discover Our Menu</h3>
      </div>
      <div class="menu">
        <b-tabs content-class="mt-3" align="center">
          <b-tab
            v-for="category in categories"
            :key="category.id"
            :title="category.name"
            class="menu__tab"
          >
            <b-row class="menu__item">
              <b-col sm="12" md="6" lg="6">
                <template v-for="(item, i) in category.menus">
                  <div class="item-wrapper" v-if="!(i % 2)" :key="item.id">
                    <h4 class="title-wrapper">{{ item.name }}</h4>
                    <span class="tag-wrapper">{{ item.tag }}</span>
                    <span class="-wrapperprice">{{ item.price }}</span>
                    <p class="desc">{{ item.description }}</p>
                  </div>
                </template>
              </b-col>
              <b-col sm="12" md="6" lg="6">
                <template v-for="(item, i) in category.menus">
                  <div class="item-wrapper" v-if="i % 2" :key="item.id">
                    <h4 class="title-wrapper">{{ item.name }}</h4>
                    <span class="tag-wrapper">{{ item.tag }}</span>
                    <span class="-wrapperprice">{{ item.price }}</span>
                    <p class="desc">{{ item.description }}</p>
                  </div>
                </template>
              </b-col>
            </b-row>
            <!-- <b-row class="menu__item">
              <b-col sm="12" md="6" lg="6">
                <template v-for="(item, i) in category.menus">
                  <div v-if="i % 2" :key="item.id">
                    <h4 class="menu__item--title">{{ item.name }}</h4>
                    <span class="menu__item--tag">{{ item.tag }}</span>
                    <span class="menu__item--price">{{ item.price }}</span>
                    <p class="menu__item--desc">{{ item.description }}</p>
                  </div>
                </template>
              </b-col>
              <b-col sm="12" md="6" lg="6">
                <template v-for="(item, i) in category.menus">
                  <div v-if="!i % 2" :key="item.id">
                    <h4 class="menu__item--title">{{ item.name }}</h4>
                    <span class="menu__item--tag">{{ item.tag }}</span>
                    <span class="menu__item--price">{{ item.price }}</span>
                    <p class="menu__item--desc">{{ item.description }}</p>
                  </div>
                </template>
              </b-col>
            </b-row> -->
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
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
  outline: 0;
  & .item-wrapper {
    padding-bottom: 11px;
    border-bottom: 1px dashed #dbdbdb;
    margin-bottom: 20px;
    position: relative;
    max-height: 300px;
    display: flex;
    flex-flow: column wrap;
  }

  & .title {
    display: inline-block;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 7px;
  }
  & .tag {
    display: inline-block;
    position: relative;
    line-height: 16px;
    font-size: 13px;
    background-color: $primary;
    color: #fff;
    padding-left: 5px;
    padding-right: 3px;
    z-index: 1;
    &::before {
      top: 0;
      transform: skewX(-45deg);
      content: "";
      position: absolute;
      right: -4px;
      z-index: -1;
      width: 20px;
      height: 9px;
      background-color: $primary;
    }
    &::after {
      bottom: 0;
      transform: skewX(45deg);
      content: "";
      position: absolute;
      right: -4px;
      z-index: -1;
      width: 20px;
      height: 9px;
      background-color: $primary;
    }
  }
  & .price {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    min-width: 50px;
    text-align: right;
    color: $primary;
    font-size: 14px;
    font-weight: 500;
  }
  & .desc {
    font-size: 14px;
    margin-bottom: 0;
  }
}

.menu-wrapper {
  padding: $basePadding;
  position: relative;
  background-size: cover;
  background-position: 50%;
  min-height: 430px;
  width: 100%;
  z-index: 1;
  margin: 0 0 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(27, 26, 26, 0.45);
  }
}

.menu-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: white;
  padding-bottom: 30px;
  & p {
    color: white;
    font-size: 1.5em;
  }
}
</style>
