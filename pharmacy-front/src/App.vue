<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>




<template>
  <div v-if="isLoading">
    <div class="preloader-container">
      <div class="preloader">
      </div>
    </div>
  </div>
  <div v-else>
    <router-view :key="$route.fullPath" />
  </div>
</template>


<style scoped>
.preloader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.preloader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #548DEB;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

