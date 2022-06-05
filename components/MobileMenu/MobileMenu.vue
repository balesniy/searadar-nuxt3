<template>
  <!--
		  открываем по клику на бургер
	  -->
  <div class="mobile-menu" :class="{'mobile-menu--open': isOpen}">
    <transition name="fadeIn">
      <div class="mobile-menu__layout"></div>
    </transition>

    <transition name="fadeInLeft">
      <div class="mobile-menu__block">
        <div class="mobile-menu__header pb-16">
          <div class="g-row g-row_between g-row_middle">
            <div class="g-col">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="logo"
              >
                <img src="~/assets/img/logo.svg" alt="logo" />
              </a>
            </div>

            <div class="g-col">
              <button @click="$emit('close-click')" class="button button_simple">
                <SvgIcon iconName="close" />
              </button>
            </div>
          </div>
        </div>

        <div class="mobile-menu__content">
          <div>
            <router-link to="/rent-request" class="button nav__button">{{$t('lk__zayavka_na_arendu.translation')}}</router-link>
          </div>

          <div class="mt-32">
            <a @click.prevent="openChat" href="#" class="button button_simple">
              <SvgIcon iconName="chat" />
            </a>
          </div>

          <div class="mt-32">
            <Currency />
          </div>

          <div class="mt-32">
<!--            <Language />-->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openChat() {
      this.$chat.open();
    },
  },
};
</script>

<style lang="scss">
@import "./mobile-menu.scss";
</style>
