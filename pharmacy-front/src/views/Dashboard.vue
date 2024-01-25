<template>
  <div class="flex min-h-screen">
      <div class="flex min-h-screen" v-if="isSidebarShow">
        <the-sidebar/>
      </div>
    <div class="flex flex-col flex-grow bg-gray-200">
      <the-header :ToogleSidebar="ToogleSidbar"/>

      <div class="mb-auto">
        <router-view />
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import {computed, onMounted, ref} from "vue"
export default {
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },

 

  setup(){
    
    const isSidebarShow = ref(true)


    function ToogleSidbar(){
      isSidebarShow.value =!isSidebarShow.value
    }


    



     return {
      isSidebarShow,
      ToogleSidbar
     }
  }


}
</script>
