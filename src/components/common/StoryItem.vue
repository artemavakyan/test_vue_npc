<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'

defineProps<{
  image: string
  alt: string
  title: string
  quote: string
  description: string
}>()
</script>

<template>
  <div class="story-item flex items-center gap-10 md:gap-14 xl:gap-24">
    <img
      :src="image"
      :alt="alt"
      class="basis-1/3 shrink-0 max-w-[320px] h-auto object-contain"
    />
    <div class="basis-2/3 shrink-0 max-w-[600px]">
      <h3 class="text-2xl font-bold">{{ title }}</h3>
      <div class="story-item__desc mt-5 flex gap-4 items-center">
        <span class="story-item__icon hidden md:block">
          <svg
            class="w-12 h-auto object-contain"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 46 33"
          >
            <path
              fill="#FE5F5F"
              d="m.032 25.328 7.086 7.09 7.087-7.09-7.087-7.091-7.086 7.09ZM8.925 16.463l7.087 7.091 7.086-7.09-7.086-7.092-7.087 7.091ZM0 7.51l7.086 7.092 7.087-7.092L7.086.42 0 7.51ZM22.608 25.328l7.087 7.09 7.086-7.09-7.086-7.091-7.087 7.09ZM31.501 16.463l7.087 7.091 7.087-7.09-7.087-7.092-7.087 7.091ZM22.576 7.51l7.087 7.092 7.086-7.092L29.663.42l-7.087 7.09Z"
            />
          </svg>
        </span>
        <p class="text-primary font-normal leading-[1.4]">
          {{ quote }}
        </p>
      </div>
      <p class="text-gray-700 mt-5">
        {{ description }}
      </p>
      <BaseButton class="bg-secondary flex gap-2 items-center mt-5">
        Читать историю
        <svg
          class="w-4 h-auto object-contain"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 10"
        >
          <path
            fill="#fff"
            d="M12.01 3.659H0v2.16h12.01v3.24L16 4.739 12.01.419v3.24Z"
          />
        </svg>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.story-item {
  @apply flex-col lg:flex-row;
}
.story-item:nth-child(even) {
  @apply lg:flex-row-reverse;
}
</style>
