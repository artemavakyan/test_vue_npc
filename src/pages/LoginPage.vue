<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormField from '@/components/common/FormField.vue'

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

async function handleLogin() {
  errorMessage.value = ''
  loading.value = true

  await new Promise(resolve => setTimeout(resolve, 1000))

  const success = login(email.value, password.value)

  if (success) {
    router.push({ name: 'profile' })
  } else {
    errorMessage.value = 'Пользователь не найден'
  }

  loading.value = false
}
</script>

<template>
  <section class="section section-login">
    <div class="container">
      <router-link class="underline text-lg" to="/">
        Назад на главную
      </router-link>
      <div class="flex justify-center">
        <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-center text-gray-800">
            Авторизация
          </h2>

          <form @submit.prevent="handleLogin" class="space-y-4">
            <p v-if="errorMessage" class="text-red-500 text-center">
              {{ errorMessage }}
            </p>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <FormField
                required
                v-model="email"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Пароль</label
              >
              <FormField
                required
                v-model="password"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <div class="flex justify-between items-center">
              <BaseButton
                :disabled="loading"
                type="submit"
                class="bg-secondary"
              >
                <span v-if="!loading">Войти</span>
                <span v-else>Загрузка...</span>
              </BaseButton>
              <a href="#" class="underline text-sm"> Забыли пароль? </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.section-login {
  padding: 140px 0;
}
</style>
