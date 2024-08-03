<script setup>
import { ref, onMounted } from 'vue'
import Tab from './components/Tab.vue'
import Conceitos from './components/Conceitos.vue'
import Projeto from './components/Projeto.vue'

const activeTab = ref('') // conceitos | projeto
const changeTab = (tab) => {
  activeTab.value = tab
}

onMounted(() => {
  activeTab.value = 'projeto'
})

</script>

<template>
  <div class="bg-zinc-900 h-screen w-screen flex flex-col items-center justify-center">
    <div class="w-[500px] flex flex-col items-center justify-center gap-3 mb-4">
      <h1 class="text-xl font-bold text-zinc-300">Aula 01 - Introdução ao Vue</h1>
      <div class="flex w-full">
        <Tab 
          name="Conceitos"
          :isActive="activeTab === 'conceitos'"
          @click="changeTab('conceitos')"
        />
        <Tab 
          name="Projeto"
          :isActive="activeTab === 'projeto'"
          @click="changeTab('projeto')"
        />
      </div>
    </div>

    <Conceitos v-if="activeTab === 'conceitos'" />
    <Projeto v-if="activeTab === 'projeto'"  />
  </div>
</template>
