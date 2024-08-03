import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTasks: (state) => state.tasks,
  },
  actions: {
    createTask(name, priority){
      this.tasks.push({ 
        id: this.tasks.length + 1,
        name, priority,
        done: false 
      })
    },
    removeTask(task){
      this.tasks.filter(t => t.id === task.id)
    },
  },
})