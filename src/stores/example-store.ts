import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

// const socket = io();

// console.log(socket)

// socket.on('connect', () => {
//   console.log(socket.id);
// });

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
