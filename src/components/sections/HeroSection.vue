<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import AppLogo from '@/components/common/AppLogo.vue'
</script>

<template>
  <section class="section section-hero">
    <div class="section-hero__bg relative overflow-hidden">
      <img class="section-hero__bg-image" src="@/assets/images/bg.svg" alt="" />
      <div class="container relative z-10">
        <AppLogo />
        <h1 class="section-hero__title">
          Мой бизнес&nbsp;&mdash; цифровая платформа для тех, кто хочет открыть
          и развивать свой бизнес
        </h1>
      </div>
    </div>

    <div class="section-hero__cta">
      <div class="container relative flex items-center flex-col">
        <p
          class="font-bold text-center leading-tight text-2xl md:text-4xl max-w-[580px]"
        >
          Для начала работы ответьте на вопрос, есть ли у вас уже существующий
          бизнес?
        </p>
        <div class="section-hero__buttons mt-4 md:mt-8">
          <BaseButton class="section-hero__btn text-lg md:text-2xl font-normal">
            Да, у меня уже есть бизнес
          </BaseButton>
          <BaseButton class="text-lg md:text-2xl bg-secondary">
            Нет, но планирую открыть
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.section-hero {
  padding-top: 0;
}
.section-hero__bg {
  padding: 80px 0;
  min-height: 100vh;
  position: relative;
}
.section-hero__bg-image {
  @apply absolute h-full bottom-0 object-bottom object-cover w-full;
}
.section-hero__title {
  @apply max-w-full font-bold text-[28px] py-[60px] leading-[1.2];
}

.section-hero__cta {
  background-image: url('@/assets/images/bg_square.svg');
  background-size: cover;
  background-position: bottom;
  @apply pt-5 pb-10 relative;
}
.section-hero__buttons {
  @apply flex gap-4 flex-col;
}
.section-hero__btn {
  @apply px-8;
}

@screen md {
  .section-hero__bg {
    padding: 140px 0;
  }

  .section-hero__title {
    @apply max-w-[580px] font-bold text-[36px] py-[65px] leading-[1.2];
  }

  .section-hero__cta {
    @apply py-[40px];
    @apply pb-[80px];
  }

  .section-hero__buttons {
    @apply flex-row gap-6;
  }
}
</style>
