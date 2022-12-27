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
