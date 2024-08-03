<script setup>
import { onMounted, ref } from 'vue'
import { useTaskStore } from '../store'
  
const { getTasks, removeTask } = useTaskStore()

const tasks = ref([])

const taskDone = (task) => {
  task.done = !task.done
}

onMounted(() => {
  tasks.value = getTasks
})
</script>

<template>
  <div>
    <ul class="w-full flex flex-col gap-2 items-start justify-start pt-2" >
      <li 
        class="text-zinc-300 cursor-pointer space-x-4 hover:bg-zinc-900 hover:rounded hover:px-2"
        :class="[
          { 'text-green-600': task.priority },
          { 'line-through': task.done }
        ]"
        v-for="(task, index) in tasks"
        :key="task.id"
      >
        <span @click="taskDone(task)">{{ `${index + 1} - ${task.name}` }}</span>
        <button 
          type="button" 
          class="text-red-500 font-semibold" 
          @click="removeTask(task)"
        >
          X
        </button>
      </li>
    </ul>
  </div>
</template>