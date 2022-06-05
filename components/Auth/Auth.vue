<template>
  <div>
    <router-link v-if="isUserAuth" to="/personal/reservations" class="auth-link">
      <avatar
        v-if="generateAvatar"
        class="auth-link__image mr-8"
        :class="{
          update: userProfile.isUpdate,
          'is-gold': isGold,
        }"
        :username="userName"
        :size="32"
      />
      <span v-else class="auth-link__image mr-8">
        <img v-if="isUserIncomplete" src="~/assets/img/avatar.svg" alt="avatar" />
        <img
          v-else
          :class="{
            update: userProfile.isUpdate,
            'is-gold': isGold,
          }"
          :src="avatarSrc"
          alt="avatar"
        />
      </span>
      <span v-if="userProfile" class="auth-link__text fs-14 fw-medium">
        {{ isUserIncomplete ? '' : userName }}
      </span>
      <span v-else class="auth-link__text fs-14 fw-medium">
        {{ $t('lk__lk.translation') }}
      </span>
    </router-link>

    <a v-else href="#" class="auth-link" @click.prevent="showSignInModal">
      <span class="auth-link__image">
        <img src="~/assets/img/avatar.svg" alt="avatar" />
      </span>
      <span class="auth-link__text fs-14 fw-medium m-hidden ml-8">
        {{ $t('lk_.translation') }}
      </span>
    </a>
  </div>
</template>

<script>
import Avatar from "vue3-avatar";
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/store/user'
import { useAuthStore } from '~/store/auth'

export default {
  components: {
    Avatar,
  },
  setup() {
    const userStore = useUserStore();
    const authStore = useAuthStore();
    const { isUserIncomplete, isUserAuth, userProfile } = storeToRefs(userStore)
    const avatarSrc = computed(() => userProfile.avatar?.avatar_file_name || '')
    const isGold = computed(() => userProfile.partnerStatus?.includes('gold'))
    const generateAvatar = computed(() => !avatarSrc && !isUserIncomplete)
    const userName = computed(() => `${userProfile.firstname} ${userProfile.lastname}`)
    const showSignInModal = () => {
      console.log('showSignInModal')
    }

    return {
      isUserAuth,
      isUserIncomplete,
      userProfile,
      avatarSrc,
      isGold,
      generateAvatar,
      userName,
      showSignInModal
    }
  },
};
</script>

<style lang="scss">
@import './auth.scss';
</style>
