<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Modal from './components/Modal.vue';
const openModal = ref<boolean>(true)

onMounted(()=>{
  openModal.value=true
})

const handleCloseModal = () => {
  openModal.value = false;
};
const handleOpenModal =()=>{
  openModal.value = true
}
</script>

<template>
  <div>
    <p>home</p>
    <p @click="handleOpenModal" class=" hover:underline hover:text-red-500 select-none cursor-pointer "> Open Modal </p>
    <Modal v-if="openModal" :openModal="openModal" @close-modal="handleCloseModal"/>
  </div>
</template>
