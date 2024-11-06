<script setup lang="ts">

import SectionTitle from '@/components/common/SectionTitle.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import IconConsult from '@/components/icons/IconConsult.vue'
</script>

<template>
  <section class="section section-consult">
    <img class="section-consult__bg" src="@/assets/images/bg_square.svg" alt="">
    <div class="container">
      <SectionTitle>
        Есть вопросы?
      </SectionTitle>
      <p class="text-base max-w-[270px] text-center mx-auto mt-[10px]">
        Задайте интересующие вас вопросы
        онлайн помощнику
      </p>
      <BaseButton class="px-10 mx-auto mt-[30px] flex gap-2 items-center font-bold text-primary">
        <IconConsult class="fill-white h-5 w-auto object-contain" />
        Онлайн помощник
      </BaseButton>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.section-consult {
  padding-top: 60px;
  @apply relative h-[300px];
}
.section-consult__bg {
  @apply rotate-180 object-cover absolute inset-0 z-[-1] w-full object-bottom h-full;
}

</style>
