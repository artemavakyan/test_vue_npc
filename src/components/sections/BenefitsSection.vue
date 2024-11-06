<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import image1 from '@/assets/images/benefits/1.svg'
import image2 from '@/assets/images/benefits/2.svg'
import image3 from '@/assets/images/benefits/3.svg'

const benefitsList = [
  {
    image: image1,
    title: '482',
    desc: 'Организаций поддержки по Российской Федерации',
  },
  {
    image: image2,
    title: '5240',
    desc: 'Оказано услуг государственной поддержки',
  },
  {
    image: image3,
    title: '1360',
    desc: 'Зарегистрировано участников проекта',
  },
]
</script>

<template>
  <section class="section section-benefits py-12 bg-white">
    <SectionTitle dots> Преимущества </SectionTitle>
    <div
      class="flex flex-col md:flex-row justify-center gap-10 md:gap-20 lg:gap-36 mt-10 md:mt-20"
    >
      <div
        v-for="(item, index) in benefitsList"
        :key="index"
        class="flex flex-col items-center"
      >
        <div class="mb-4">
          <img
            :src="item.image"
            :alt="item.desc"
            class="w-40 h-40 object-contain"
          />
        </div>
        <div class="text-secondary text-[50px] font-bold">
          {{ item.title }}
        </div>
        <p class="text-black text-xl text-center mt-2 max-w-[256px]">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>
