<template>
  <div
    class="currency"
    data-target="currency"
    @click="state.show = !state.show"
    v-click-away="onClickAway"
  >
    <div class="currency__data currency__data_main">
      <span class="currency__symbol mr-8" v-if="false">
        ₽
      </span>
      <span class="currency__name fs-14">{{ currency }}</span>
    </div>

    <transition name="fadeInDown">
      <ul v-if="state.show" id="currency" class="currency__list">
        <li
          v-for="({symbol, name}, key) in CURRENCIES"
          class="currency__item"
          :class="{ 'is-selected': key === currency }"
          :data-currency="key"
          @click="changeCurrency(key)"
        >
          <div class="currency__data">
            <span class="currency__symbol mr-8">
              {{ symbol }}
            </span>
            <span class="currency__name fs-14">
              {{ name }}
            </span>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user'

const CURRENCIES = {
  EUR: { name: 'Euro', symbol: '€' },
  USD: { name: 'USD', symbol: '$' },
  RUB: { name: 'Russian ruble', symbol: '₽' },
  PLN: { name: 'Polish zloty', symbol: 'zł' },
  // SEK: { name: 'Swedish krona', symbol: 'sek' },
};

const currency = useCookie('currency', {
  maxAge: 24 * 60 * 60 * 365
})

const userStore = useUserStore()

const state = reactive({
  show: false,
  isLoading: false
})

const onClickAway = () => {
  console.log('onClickAway')
  state.show = false
}

const changeCurrency = (key) => {
  currency.value = key
  userStore.currency = key
  // TODO показать лоадер
  // TODO update listing search and index static content
}
</script>

<style lang="scss">
@import "./currency.scss";
</style>
