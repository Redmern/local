import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io();

export const useSocket = defineStore('socket', {
  state: () => ({
    socket,
    onOffValue: 0,
    dimValue: 0,
  }),
  getters: {
    getSocket: (state) => state.socket,
    getonOffvalue: (state) => state.onOffValue,
    getdimvaluevalue: (state) => state.dimValue,
  },
  actions: {
    onOff() {
      this.onOffValue == 0 ? (this.onOffValue = 1) : (this.onOffValue = 0);
      this.socket.emit('onOff', this.onOffValue);
    },
    dim() {
      this.socket.emit('dim', this.dimValue);
      return;
    },
    register() {
      this.socket.on('connect', () => {
        console.log(socket.id);
      });
    },
  },
});
