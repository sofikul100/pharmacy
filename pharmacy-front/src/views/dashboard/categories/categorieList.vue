<template>
  <div class="overflow-x-hidden relative">
    <!-- view user modal -->
    <!-- <el-dialog v-model="viewUserModal" title="View User Data" width="40%" align-center>
      <div class="w-full">
        <div>
          <span class="font-bold"
            >User Name : <span class="font-[500]">{{ viewUserData.name ? viewUserData.name : 'No Name' }}</span></span
          >
        </div>
        <div class="mt-4">
          <span class="font-bold"
            >User Email :
            <span class="font-[500]">{{ viewUserData.email ? viewUserData.email : 'No Email' }}</span></span
          >
        </div>
        <div class="mt-4">
          <span class="font-bold"
            >User Role : <span class="font-[500]">{{ viewUserData.role ? viewUserData.role : 'No Role' }}</span></span
          >
        </div>
        <div class="mt-4">
          <span class="font-bold"
            >User Phone :
            <span class="font-[500]">{{ viewUserData.phone ? viewUserData.phone : 'No Phone' }}</span></span
          >
        </div>
         <div class="mt-4">
          <span class="font-bold"
            >User Address :
            <span class="font-[500]">{{ viewUserData.address ? viewUserData.address : 'No Address' }}</span></span
          >
        </div>
         <div class="mt-4">
          <span class="font-bold">
            User Status :
            <span class="font-[500]">
               <span class="bg-green-500 px-4 py-1 text-white rounded-md" v-if="viewUserData.status === 1">Active</span>
               <span v-else class="bg-rose-500 px-4 py-1 text-white rounded-md">Inactive</span> 
            </span>
          </span>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="viewUserModal = false">Close</el-button>
        </span>
      </template>
    </el-dialog> -->
    <!-- end view user modal -->
    <div class="flex justify-between px-2 sm:px-4 bg-white">
      <h2 class="text-2xl text-[#548DEB] font-bold py-2 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>

        Categorie List
      </h2>

      <div class="flex items-center space-x-1 text-xs">
        <a href="#" class="font-bold">Home</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-[#548DEB] font-[500]">Categories</span>
      </div>
    </div>

    <!-- add new categorie section -->
    <div class="p-4 mt-3 sm:px-4 sm:py-4">
      <div class="bg-white rounded">
        <div class="w-full bg-[#548DEB] px-2 py-2 rounded">
          <h1 class="text-white text-[22px] font-[600]">
            {{ edit_id ? 'Edit Categorie Data' : 'Add New Categorie Form' }}
          </h1>
        </div>
        <form @submit.prevent="addCategorie()">
          <div class="grid grid-cols-1 gap-4 px-4 py-4 pb-6 sm:grid-cols-3">
            <div>
              <label for="categorie_name" class="block text-sm font-medium text-gray-700">Categorie Name</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="name"
                  v-model="categorie_name"
                  placeholder="Enter Categorie Name"
                  id="categorie_name"
                  autocomplete="categorie_name"
                  class="shadow-sm focus:ring-indigo-500 text-gray-500 text-[14px] font-[500] focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <small class="text-rose-500 font-[500]" v-if="errors?.categorie_name">{{
                errors?.categorie_name[0]
              }}</small>
            </div>

            <div>
              <label for="role" class="block text-sm font-medium text-gray-700">Status </label>
              <div class="mt-1">
                <select
                  name="status"
                  id="status"
                  v-model="status"
                  class="w-full text-gray-500 py-[7px] text-[14px] font-[500] rounded-md border-gray-300"
                >
                  <option value="" selected disabled>Status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              <small class="text-rose-500 font-[500]" v-if="errors?.status">{{ errors?.status[0] }}</small>
            </div>
            <div>
              <div class="mt-6">
                <button
                  type="submit"
                  :class="`${
                    edit_id
                      ? 'bg-sky-600  px-4 py-[8px] rounded font-[500] flex items-center gap-2 text-white hover:bg-green-900 transition-all'
                      : 'bg-green-600  px-4 py-[8px] rounded font-[500] flex items-center gap-2 text-white hover:bg-green-900 transition-all'
                  }`"
                >
                  <span v-if="isLoading">
                    <svg
                      aria-hidden="true"
                      class="w-4 h-6 text-gray-200 animate-spin dark:text-white fill-green-500"
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

                  <span v-else> {{ edit_id ? 'Update' : 'Add Now' }} </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- end add new user section -->

    <!-- user list section  -->

    <div class="p-4 -mt-1 sm:px-4 sm:py-4 overflow-x-scroll">
      <div class="p-4 bg-white rounded">
        <div class="flex justify-between gap-4 mb-4">
          <div class="w-full flex gap-2">
            <select name="sort" v-model="perPage" id="sort" class="py-[4px] text-gray-500 rounded-md border-gray-300">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <div class="ml-auto w-full">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                id="search"
                name="search"
                v-model="searchQuery"
                type="search"
                class="w-full py-[8px] text-[13px] font-[500] text-gray-600 rounded-md pl-10 border border-gray-300 focus:outline-none focus:z-10"
                placeholder="Search User By Categorie Name ||  Status"
              />
            </div>
          </div>
        </div>
        <table class="w-full mt-2 text-gray-500">
          <thead class="border-b">
            <tr>
              <th class="p-2 text-left text-gray-600">
                <input
                  v-model="selectAll"
                  type="checkbox"
                  class="h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-0"
                />
              </th>
              <th class="text-left text-gray-600">CATEGORIE NAME</th>
              <th class="text-left text-gray-600">STATUS</th>
              <th class="text-right text-gray-600">ACTIONS</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="w-full" v-if="bigLoader">
              <td colspan="4">
                <div class="py-6 flex items-center justify-center" id="big_loader">
                  <svg
                    aria-hidden="true"
                    class="w-14 h-14 text-gray-200 animate-spin dark:text-white fill-sky-500"
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
                </div>
              </td>
            </tr>
            <tr v-else-if="categories.length === 0">
              <td class="py-6 font-bold text-rose-500 text-center" colspan="4">No Categorie Found Here !</td>
            </tr>
            <tr v-for="categorie in categories" :key="categorie.id" v-else>
              <td class="p-2">
                <input
                  type="checkbox"
                  class="h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-0"
                  :checked="selectAll"
                />
              </td>
              <td class="flex items-center py-4">
                <div class="px-4">
                  <div>
                    <a href="#" class="text-gray-600 font-[500]">{{ categorie.categorie_name }}</a>
                  </div>
                </div>
              </td>
              <td>
                <span v-if="categorie.status === 1" class="px-2 py-1 font-[500] rounded text-xs text-white bg-green-500"
                  >Active...</span
                >
                <span v-else class="px-2 py-1 rounded text-xs font-[500] text-white bg-red-500">Inactive</span>
              </td>
              <td class="text-right">
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <MenuButton
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      Actions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute right-0 w-32 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none"
                    >
                      <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                            @click="editCategory(categorie.id)"
                            :class="[
                              active ? 'bg-gray-400 text-white' : 'text-gray-900',
                              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                            ]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 mr-2 text-sky-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                            Edit
                          </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <button
                               @click="deleteCategorie(categorie.id)"
                            :class="[
                              active ? 'bg-rose-500 text-white' : 'text-gray-900',
                              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                            ]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 mr-2 text-sky-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="7" class="py-2">
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p class="text-sm text-gray-500 font-[500]">
                      Showing
                      <span class="font-[500]">({{ totalShowing }} )</span>
                      || Total Categories
                      <span class="font-[500]">( {{ totalCategorie }} )</span>
                    </p>
                  </div>
                  <div class="flex gap-4 font-[500] text-[14px]">
                    <button
                      @click="setCurrentPage(currentPage - 1)"
                      :class="`${
                        currentPage === 1
                          ? 'bg-[#8cb0eb]  text-white px-4 py-1 rounded-sm'
                          : 'bg-[#548DEB] text-white px-4 py-1 rounded-sm'
                      }`"
                      :disabled="currentPage === 1"
                    >
                      Previous
                    </button>
                    <span class="bg-[#548DEB] py-2 px-3 rounded-sm text-white font-[500]"
                      ><span class="currentPage">( {{ currentPage }} ) </span></span
                    >
                    <button
                      @click="setCurrentPage(currentPage + 1)"
                      :class="`${
                        currentPage * perPage >= totalCategorie
                          ? 'bg-[#8cb0eb]  text-white px-4 py-1 rounded-sm'
                          : 'bg-[#548DEB] text-white px-4 py-1 rounded-sm'
                      }`"
                      :disabled="currentPage * perPage >= totalCategorie"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- end user list section -->
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { onMounted, ref, watch, watchEffect } from 'vue'

import { CategorieStore } from '../../../pinia/stores/categorieStore'
const { getCategories, addCategorie, setCurrentPage,deleteCategorie,editCategory } = CategorieStore()

import { storeToRefs } from 'pinia'
const {
  categorie_name,
  status,
  errors,
  bigLoader,
  isLoading,
  categories,
  perPage,
  totalShowing,
  totalCategorie,
  searchQuery,
  currentPage,
  edit_id
} = storeToRefs(CategorieStore())

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  setup() {
    const selectAll = ref(false)

    watch(perPage, (value) => {
      getCategories(value)
    })

    watch(searchQuery, (value) => {
      getCategories(value)
      setCurrentPage(1)
    })

    onMounted(() => {
      getCategories()
    })

    return {
      categorie_name,
      status,
      errors,
      bigLoader,
      isLoading,
      selectAll,
      getCategories,
      categories,
      addCategorie,
      perPage,
      totalCategorie,
      totalShowing,
      searchQuery,
      setCurrentPage,
      currentPage,
      deleteCategorie,
      editCategory,
      edit_id
    }
  },
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>