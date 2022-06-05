<template>
  <NuxtLayout name="default">
    <Head>
      <Script async :src="`//code-eu1.jivosite.com/widget/${jivositeId}`" />
    </Head>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
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
const jivositeId = computed(() => DOMAINS.find((i) => i.locale === locale.value)?.jivositeId);
</script>


