<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import BaseButton from '@/components/common/BaseButton.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import FormField from '@/components/common/FormField.vue'

const { logout, getCurrentUser, updateUserProfile } = useAuth()
const router = useRouter()

const currentUser = getCurrentUser()
const fio = ref(currentUser.value?.fullName || '')
const email = ref(currentUser.value?.email || '')
const password = ref(currentUser.value?.password || '')
const avatarUrl = ref(currentUser.value?.avatarUrl || '')

function handleLogout() {
  logout()
  router.push({ name: 'login' })
}

function updateProfile(event) {
  event.preventDefault()

  const updatedData = {
    fullName: fio.value,
    email: email.value,
    password: password.value,
    avatarUrl: avatarUrl.value,
  }

  updateUserProfile(updatedData)

  alert('Профиль обновлен')
}
</script>

<template>
  <section class="section section-login">
    <div class="container">
      <div class="max-w-md">
        <div class="flex items-center justify-between">
          <router-link class="underline text-lg" to="/">
            Назад на главную
          </router-link>
          <BaseButton class="bg-secondary" @click="handleLogout"
            >Выйти</BaseButton
          >
        </div>
        <form class="mt-8 space-y-4" @submit="updateProfile">
          <div class="form__row">
            <label for="fio" class="block text-sm font-medium text-gray-700"
              >ФИО</label
            >
            <FormField v-model="fio" type="text" id="fio" name="fio" />
          </div>
          <div class="form__row">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <FormField v-model="email" type="email" id="email" name="email" />
          </div>
          <div class="form__row">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Пароль</label
            >
            <FormField
              v-model="password"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div class="form__row">
            <label for="avatar" class="block text-sm font-medium text-gray-700"
              >Аватар</label
            >
            <FormField
              v-model="avatarUrl"
              type="tetx"
              id="avatar"
              name="avatar"
            />
          </div>
          <div class="form__row">
            <BaseButton type="submit"> Сохранить </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.section-login {
  padding: 140px 0;
}
</style>
