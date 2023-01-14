import { defineStore } from 'pinia';
import { io } from 'socket.io-client';
import { ref } from 'vue';

const socket = io();

export const useSocket = defineStore('socket', {
  state: () => ({
    socket,
    onOffValue: true,
    dimValue: 0,
    timeOn: ref('12:00'),
    timeOff: ref('00:00'),
  }),
  getters: {
    getSocket: (state) => state.socket,
    getonOffvalue: (state) => state.onOffValue,
    getdimvaluevalue: (state) => state.dimValue,
  },
  actions: {
    changeTimeOn() {
      // console.log(this.timeOn);
      this.socket.emit('timeOn', this.timeOn);
    },
    changeTimeOff() {
      // console.log(this.timeOff);
      this.socket.emit('timeOff', this.timeOff);
    },
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
        data == 0 ? (this.onOffValue = false) : (this.onOffValue = true);
        // console.log('Listen GPIO26 : ' + data);
      });

      this.socket.on('dim', (data) => {
        this.dimValue = data;
        // console.log('Listen GPIO12 : ' + data);
      });
    },
    boot() {
      this.socket.on('Connection-onOff', (data) => {
        console.log('Boot GPIO26 : ' + data);
        data == 0 ? (this.onOffValue = false) : (this.onOffValue = true);
      });

      this.socket.on('Connection-dim', (data) => {
        this.dimValue = data;
        // console.log('Boot GPIO12 : ' + data);
      });

      this.socket.on('timeOff', (data) => {
        this.timeOff = data;
        // console.log('Boot timeOff : ' + data);
      });

      this.socket.on('timeOn', (data) => {
        this.timeOn = data;
        // console.log('Boot timeOn : ' + data);
      });
    },
  },
});
