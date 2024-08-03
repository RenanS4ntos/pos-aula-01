<script setup>
import { ref } from 'vue' // reactive -> objetos e array (não primitivos) | ref -> primitivos
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

const tasks = ref([
  { id: 1, name: 'Aula na pos até as 17h', priority: false, done: false },
  { id: 2, name: 'Viver um pouco', priority: true, done: false },
  { id: 3, name: 'Trabalhar', priority: false, done: true },
  { id: 4, name: 'Estudar', priority: false, done: false },
  { id: 5, name: 'Fazer o projeto', priority: true, done: false }
])

const addTask = (task) => {
  tasks.value.push(task)
}

const removeTask = (task) => {
  const index = tasks.value.indexOf(task)
  tasks.value.splice(index, 1)
}

</script>

<template>
  <div class="bg-zinc-800 shadow rounded w-[500px] p-4">
    <h1 class="text-green-500 font-semibold text-lg">Lista de tarefas</h1>
    
    <TaskForm @addTask="addTask"/>
    <TaskList :tasks="tasks" @removeTask="removeTask"/>
    <p 
      class="text-lg text-zinc-300"
      v-show="!tasks.length"
    >
      Adicione uma nova tarefa!
    </p>
  </div>
</template>