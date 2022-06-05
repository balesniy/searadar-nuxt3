<template>
  <div
      class="language"
      data-target="language"
      @click="show = !show"
      v-click-away="onClickAway"
  >
    <div class="language__data language__data_main">
      <span class="language__flag mr-8">
        <img :src="getFlagSrc($i18n.locale)" alt="flag"/>
      </span>
      <span class="language__name fs-14">
        {{ $i18n.locale.toUpperCase() }}
      </span>
    </div>

    <transition name="fadeInDown">
      <ul v-if="show" class="language__list" id="language">
        <li v-for="domain in DOMAINS" class="language__item">
          <a class="language__data" :href="'https://' + domain.url + redirectPath">
            <span class="language__flag mr-8">
              <img
                  :src="getFlagSrc(domain.locale)"
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

<script setup>
import { useUserStore } from '~/store/user'

const DOMAINS = [
  { url: 'searadar.com', locale: 'en', name: 'English', jivositeId: 'dEXhpHBhDJ' },
  { url: 'searadar.ru', locale: 'ru', name: 'Russian', jivositeId: 'iadPjhJm3g' },
  { url: 'searadar.de', locale: 'de', name: 'German', jivositeId: 'dEXhpHBhDJ' },
  { url: 'searadar.es', locale: 'es', name: 'Spanish', jivositeId: 'dEXhpHBhDJ' },
  { url: 'searadar.nl', locale: 'nl', name: 'Dutch', jivositeId: 'dEXhpHBhDJ' },
  { url: 'searadar.pl', locale: 'pl', name: 'Polish', jivositeId: 'dEXhpHBhDJ' },
  { url: 'searadar.fr', locale: 'fr', name: 'French', jivositeId: 'dEXhpHBhDJ' },
  { url: 'searadar.ro', locale: 'ro', name: 'Romanian', jivositeId: 'dEXhpHBhDJ' },
]

const getServiceIcon = async iconName => {
  const module = await import(/* @vite-ignore */ `~/assets/img/language-flag/${iconName}.png`)
  return module.default.replace(/^\/@fs/, '')
}

const show = ref(false)

const onClickAway = () => {
  show.value = false
}

const getFlagSrc = (code) => {
  const path = `./language-flag/${code.toUpperCase()}.png`
  const modules = import.meta.globEager("./language-flag/*.png");
  return modules[path]?.default;
}

const userStore = useUserStore()

const redirectPath = computed(() => {
  const url = new URL(document.location.href);
  if (userStore.token.length) {
    url.searchParams.set('token', userStore.token)
  }
  return url.pathname + url.search
})
</script>

<style lang="scss">
@import "./language.scss";
</style>
