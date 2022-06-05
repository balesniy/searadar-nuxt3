<template>
  <div id="app" class="wrap-all">
    <div class="wrap-content">
      <!--      <ModalSignUp ref="modalSignUp"/>-->
      <!--      <ModalSignIn ref="modalSignIn"/>-->
      <Nav
          class="nav_opacity"
          @burger-click="isMobileMenuOpen = !isMobileMenuOpen"
      />
      <MobileMenu
          @close-click="isMobileMenuOpen = false"
          :is-open="isMobileMenuOpen"
      />
      <slot />
    </div>
    <Footer/>
  </div>
</template>
<script setup>
const isMobileMenuOpen = ref(false)
</script>
