<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  isActive: { type: Boolean, required: true },
})
</script>

<template>
  <div 
    class="flex rounded items-center justify-center w-1/2 text-zinc-400 cursor-pointer px-3 py-5 hover:bg-zinc-800"
    :class="{ 'bg-green-500 text-zinc-800 font-bold hover:bg-green-600': isActive }"
  >
    {{ name }}
  </div>
</template>