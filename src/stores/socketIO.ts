import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io();

export const useSocket = defineStore('socket', {
  state: () => ({
    socket,
    onOffValue: true,
    dimValue: 0,
  }),
  getters: {
    getSocket: (state) => state.socket,
    getonOffvalue: (state) => state.onOffValue,
    getdimvaluevalue: (state) => state.dimValue,
  },
  actions: {
    onOff() {
      // console.log('onOff', this.onOffValue);
      this.socket.emit('onOff', this.onOffValue);
    },
    dim() {
      // console.log('dim :', this.dimValue);
      this.socket.emit('dim', this.dimValue);
    },
    register() {
      this.socket.on('connect', () => {
        console.log(socket.id);
        this.socket.emit('status');
      });
    },
    listen() {
      this.socket.on('onOff', (data) => {
        data == 0 ? (this.onOffValue = true) : (this.onOffValue = false);
        console.log('Listen GPIO26 : ' + data);
      });
      this.socket.on('dim', (data) => {
        this.dimValue = data;
        console.log('Listen GPIO12 : ' + data);
      });
    },
    boot() {
      this.socket.on('Connection-onOff', (data) => {
        data == 0 ? (this.onOffValue = true) : (this.onOffValue = false);
        console.log('Boot GPIO26 : ' + data);
      });
      this.socket.on('Connection-dim', (data) => {
        this.dimValue = data;
        console.log('Boot GPIO12 : ' + data);
      });
    },
  },
});
