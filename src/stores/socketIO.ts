import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io();

export const useSocket = defineStore('socket', {
  state: () => ({
    socket,
  }),
  getters: {
    getSocket: (state) => state.socket,
  },
  actions: {
    register() {
      socket.on('connect', () => {
        console.log(socket.id);
      });
    },
  },
});
