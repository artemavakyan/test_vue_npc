<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import StoryItem from '@/components/common/StoryItem.vue'

import image1 from '@/assets/images/history/1.png'
import image2 from '@/assets/images/history/2.png'
import image3 from '@/assets/images/history/3.png'

const stories = [
  {
    id: 1,
    image: image1,
    alt: 'Пекарня Русские традиции',
    title: 'Пекарня "Русские традиции"',
    quote:
      'Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня, объяснить, что она живая».',
    description:
      'Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчёты, учёт рисков и перспектив, анализ рынка, налаживание сбыта.',
  },
  {
    id: 2,
    image: image2,
    alt: 'Автомастерская',
    title: 'Автомастерская',
    quote:
      'Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, чтобы успеть съездить в магазин, когда удобно.',
    description:
      'Встреча в городе N с новыми будущими партнёрами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг.',
  },
  {
    id: 3,
    image: image3,
    alt: 'Салон красоты Эмират',
    title: 'Салон красоты "Эмират"',
    quote:
      'Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.',
    description:
      'Открытие салона красоты стало началом увлекательного и полного вызовов пути.',
  },
]
</script>

<template>
  <section class="section py-12">
    <SectionTitle dots> Истории успеха </SectionTitle>

    <div
      class="container mt-10 gap-10 mx-auto flex flex-col md:mt-20 md:gap-24"
    >
      <StoryItem
        v-for="story in stories"
        :key="story.id"
        :image="story.image"
        :alt="story.alt"
        :title="story.title"
        :quote="story.quote"
        :description="story.description"
      />
    </div>
  </section>
</template>
