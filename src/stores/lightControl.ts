import { defineStore } from 'pinia';

export const useOnOffSwitch = defineStore('onoff', {
  state: () => ({
    onoff: 0,
  }),
  getters: {
    getState: (state) => state.onoff * 2,
  },
  actions: {
    switch() {
      this.onoff++;
    },
  },
});

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
