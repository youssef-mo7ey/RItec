<script setup lang="ts">
import Close from "../assets/icons/Close.svg?component"
const props=defineProps({
    openModal:{
        type:Boolean,
        required:true,
    }
})

const emit  = defineEmits(['close-modal']);
const handleCloseModal = ()=>{
    emit('close-modal')
}
</script>

<template>
    <div>
        <div  @click="handleCloseModal" class=" cursor-pointer fixed bg-black/25 bottom-0 right-0 top-0 left-0 z-10" />
        <div class="bg-white rounded-md absolute z-20 sm:left-[35%] left-[20%] top-[20%] sm:w-[30vw] w-[60vw] h-[40vh]">
            <div class=" border-b-[2px] p-2 justify-end flex w-full border-solid border-black">
                <div class="w-[56%] flex justify-between ">
                <p class=" place-items-center">
                    Modal
                </p>
                <span @click="handleCloseModal" class=" select-none cursor-pointer">
                    <component class=" hover:opacity-70 active:opacity-30" :is='Close'></component>
                </span>
                </div>
            </div>
            <div class=" text-center">
                Modal content
            </div>
        </div>
    </div>
</template>
