<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="rounded-full py-2 px-6 bg-primary text-white"
  >
    <slot />
  </component>
</template>
