<template>
  <div
      class="language"
      data-target="language"
      @click="show = !show"
      v-on-clickaway="handleClickAway"
  >
    <div class="language__data language__data_main">
      <span class="language__flag mr-8">
        <img :src="require(`@/assets/img/flags/${$i18n.locale.toUpperCase()}.png`)" alt="flag"/>
      </span>
      <span class="language__name fs-14">
        {{ $i18n.locale.toUpperCase() }}
      </span>
    </div>

    <transition name="fadeInDown">
      <ul v-if="show" class="language__list" id="language">
        <li v-for="domain in domains" class="language__item">
          <a class="language__data" :href="'https://' + domain.url + redirectPath">
            <span class="language__flag mr-8">
              <img
                  :src="require(`@/assets/img/flags/${domain.locale.toUpperCase()}.png`)"
                  alt="flag"
              />
            </span>
            <span class="language__name fs-14">
              {{ domain.name }}
            </span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import {directive as onClickaway} from 'vue-clickaway';
import {LOCALES} from '@/utils/config'


export default {
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
      // LOCALES,
      show: false,
      domains: CONFIG.domains
    }
  },
  methods: {
    setLocale(locale) {
      console.log({locale})
    },
    handleClickAway() {
      this.show = false
    },
  },
  computed:{
    redirectPath:function (){
      let  url = new URL(document.location.href);
      if (this.$store.state.user.token) {
        url.searchParams.set('token', this.$store.state.user.token)
      }
      return url.pathname + url.search
    }
  }
};
</script>

<style lang="scss">
@import "./language.scss";
</style>
