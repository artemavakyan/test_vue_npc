<script setup lang="ts">
import FeatureHeader from '@/components/features/FeatureHeader.vue'
import FeatureFooter from '@/components/features/FeatureFooter.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <FeatureHeader class="layout-header" />
    <main class="flex-1 relative">
      <slot />
    </main>
    <FeatureFooter class="layout-footer" />
  </div>
</template>
