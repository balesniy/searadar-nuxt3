<template>
  <span class="svg-icon">
    <svg>
      <use :href="href"></use>
    </svg>
  </span>
</template>

<script>
import Sprite from '~/assets/img/sprite.svg'

export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      default: "",
    },
  },
  computed: {
    href() {
      return `${Sprite}#${this.iconName}`
    }
  }
};
</script>

<style lang="scss">
@import "./svg-icon.scss";
</style>
