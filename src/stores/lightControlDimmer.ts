import { defineStore } from 'pinia';

export const useDimmer = defineStore('dimValue', {
  state: () => ({
    dimValue: 0,
  }),
  getters: {
    doubleCount: (state) => state.dimValue * 2,
  },
  actions: {
    increment() {
      this.dimValue++;
    },
  },
});
