<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full bg-white shadow-md px-4 py-4">
      <div class="flex flex-col items-center justify-center space-x-2 mb-6">
        <div class="mb-4">
          <img src="../assets/images/fav.png" alt="" class="w-[120px]" />
        </div>
        <h1 class="font-bold"><span class="text-[#548DEB]">PHARMA</span> LIMITED</h1>
      </div>

      <!-- <div class="bg-rose-600 text-white w-full rounded-sm mb-6 py-2" v-if="credentialError">
        <span class="ml-2 text-[13px] font-[500]">{{ credentialError ? credentialError : '' }}!</span>
      </div> -->

      <form class="space-y-4" @submit.prevent="loginHandler(form)">
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            id="email"
            name="email"
            type="email"
            v-model="form.email"
            autocomplete="email"
            class="w-full py-2 text-sm text-gray-900 rounded-md pl-10 border font-[500] border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Email address"
          />
        </div>
        <small class="text-rose-500 font-[500]" v-if="errors?.email">{{ errors?.email[0] }}</small>

        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
          <input
            id="password"
            name="password"
            type="password"
            v-model="form.password"
            autocomplete="current-password"
            class="w-full py-2 text-sm text-gray-900 font-[500] rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Password"
          />
        </div>
        <small class="text-rose-500 font-[500]" v-if="errors?.password">{{ errors?.password[0] }}</small>
        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-6 border border-transparent font-medium rounded-md text-white bg-[#548DEB] hover:bg-indigo-700 focus:outline-none"
          >
            <span v-if="isLoading">
              <svg
                aria-hidden="true"
                class="w-6 h-8 text-gray-200 animate-spin dark:text-white fill-indigo-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span>
            <span v-else>Login Now</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  email: '',
  password: '',
})

import { onMounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { userStore } from '../pinia/stores/userStore'
const { loginHandler, hasToken } = userStore()
const { errors, isLoading, credentialError } = storeToRefs(userStore())

const toast = () => {
  
}
</script>
