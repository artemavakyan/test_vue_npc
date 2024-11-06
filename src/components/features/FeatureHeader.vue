<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import IconConsult from '@/components/icons/IconConsult.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import IconProfile from '@/components/icons/IconProfile.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="header fixed top-0 left-0 w-full z-20 py-2 transition ease-in duration-200"
    :class="{
      'header--scrolled': isScrolled,
    }"
  >
    <div class="container flex gap-2 items-center md:gap-7">
      <BaseButton to="profile" class="flex items-center gap-2 px-2">
        <IconProfile class="fill-white w-4 h-4" />
        <span class="hidden md:block"> Личный кабинет </span>
      </BaseButton>
      <a class="header__catalog text-base" href="#"> Каталог услуг </a>

      <button
        class="ml-auto flex gap-2 items-center font-bold text-primary text-sm md:gap-4 md:text-base"
      >
        <span
          class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
        >
          <IconConsult class="h-5 w-auto fill-white object-contain" />
        </span>
        Онлайн помощник
      </button>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.header--scrolled {
  @apply bg-white/90 py-4;
}
</style>
