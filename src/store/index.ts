import { defineStore } from "pinia";

export const useStore = defineStore('main', {
  state: () => {
    return {
      token: 'testToken'
    }
  },
  getters: {
    
  },
  actions: {
    setToken (token: string) {
      this.token = token
    }
  }
})