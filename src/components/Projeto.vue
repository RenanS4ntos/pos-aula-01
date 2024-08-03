<script setup>
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'
import { useTaskStore } from '../store'

const { getTasks } = useTaskStore()
</script>

<template>
  <div class="bg-zinc-800 shadow rounded w-[500px] p-4">
    <h1 class="text-green-500 font-semibold text-lg">Lista de tarefas</h1>
    
    <TaskForm />
    <TaskList />
    <p 
      class="text-lg text-zinc-300"
      v-show="!getTasks.length"
    >
      Adicione uma nova tarefa!
    </p>
  </div>
</template>