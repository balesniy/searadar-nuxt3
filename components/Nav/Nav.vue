<template>
  <nav class="nav">
    <!--
		  nav_opacity - класс для шапки с полупрозрачным фоном
	  	  nav_white - класс для шапки с белым фоном
	  -->
    <div class="container">
      <div class="g-row g-row_middle g-row_between">
        <div class="g-col">
          <router-link
            to="/"
            rel="noopener noreferrer"
            class="logo"
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/assets/img/logo-var-mobile.svg"
              />
              <source
                media="(min-width: 769px)"
                srcset="/assets/img/logo-var.svg"
              />
              <img
                src="~/assets/img/logo-var.svg"
                alt="logo"
              />
            </picture>
          </router-link>
        </div>

        <div class="g-col">
          <div class="g-row g-row_middle g-row_medium">
            <div class="g-col t-hidden">
              <router-link to="/rent-request" class="button nav__button">{{$t('lk__zayavka_na_arendu.translation')}}</router-link>
            </div>

            <div class="g-col">
              <a :href="'tel:' + $t('searadar_phone_clear.translation')" class="button button_simple">
                <SvgIcon iconName="phone" />
              </a>
            </div>

            <div class="g-col t-hidden">
              <button @click="openChat" class="button button_simple" style="color: inherit">
                <SvgIcon iconName="chat" />
              </button>
            </div>

            <div class="g-col">
              <Auth />
            </div>

            <div class="g-col t-hidden">
              <Currency />
            </div>

            <div class="g-col t-hidden">
              <Language />
            </div>

            <div class="g-col t-show">
              <div id="burger">
                <slot>
                  <button @click="$emit('burger-click')" type="button" class="burger" title="Menu">
                    <!-- toggle class is-active -->
                    <span class="burger__line"></span>
                    <span class="burger__line"></span>
                    <span class="burger__line"></span>
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { $chat } = useNuxtApp()
const openChat = () => $chat.open()
</script>

<style lang="scss">
@import "./nav.scss";
</style>
