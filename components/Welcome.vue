<template>
  <div class="welcome">
    <div class="welcome__text">
      <h2>{{ content.title }}</h2>
      <p>{{ content.subtitle }}</p>
    </div>
    <div class="welcome__images">
      <div class="images" v-for="item in content.images" :key="item.id">
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style lang="scss" scoped>
.welcome {
  padding: $sectionPadding;
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin-bottom: 2rem;
    & p {
      white-space: pre-wrap;
      text-align: center;
    }
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & .images {
      padding: 10px;
      & img {
        width: 350px;
        height: 350px;
        @include for-size(phone-only) {
          width: 350px;
          height: auto;
        }
      }
    }
    // display: grid;
    // grid-template-columns: 3;
    // // flex-flow: row nowrap;
    // // justify-content: center;
    // margin: 10px;
  }
}
</style>
