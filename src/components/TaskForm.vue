<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['addTask'])

const taskName = ref('')
const priority = ref(false)
const canSubmit = computed(() => taskName.value.length > 0)

const addTask = () => {
  emit('addTask', {
    name: taskName.value,
    priority: priority.value
  })

  taskName.value = ''
  priority.value = false
}
</script>

<template>
  <div>
    <form @submit.prevent="addTask" class="flex gap-2 items-center">
      <input 
        class="bg-zinc-900 rounded border-1 border-zinc-400 text-zinc-200 px-4 py-2" 
        type="text" 
        v-model="taskName"
      >
      <label class="text-zinc-400">
        <input type="checkbox" v-model="priority">
        Prioridade
      </label>
      
      <button 
        type="submit"
        class="bg-green-500 px-4 py-2 border-0 rounded font-semibold text-zinc-900 disabled:cursor-not-allowed disabled:bg-green-600"
        :disabled="!canSubmit"
      >
        Adicionar
      </button>
    </form>
  </div>
</template>