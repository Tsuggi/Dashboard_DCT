import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggleMenu = defineStore('menuToggle', () => {
  const stateToggleMenu = ref(true)
  return { stateToggleMenu }
})
