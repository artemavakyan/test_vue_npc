<script setup lang="ts">
defineProps({
  dots: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <h2
    class="section-title font-bold text-center text-3xl md:text-4xl lg:text-5xl"
    :class="{
      'section-title--dots': dots,
    }"
  >
    <slot />
  </h2>
</template>

<style scoped lang="postcss">
.section-title--dots {
  @apply flex items-center justify-center gap-4;
}
.section-title--dots::before,
.section-title--dots::after {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  transform: rotate(-45deg);
}
</style>
