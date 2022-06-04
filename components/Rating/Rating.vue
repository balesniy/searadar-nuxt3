<template>
  <div class="rating">
    <!-- TODO половинки звездочек -->
    <div v-for="star in Math.round(rating)" class="rating__image">
      <img src="~/assets/img/star.svg" alt="star" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: {
    rating: {
      type: Number,
      default: 5
    }
  },
};
</script>

<style lang="scss">
@import "./rating.scss";
</style>
