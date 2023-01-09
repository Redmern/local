import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io();

// socket.on('onOff', (data) => {
//   // data == true ? (onOffValue = 0) : (onOffValue = 1);

//   console.log('GPIO26 : ' + data);

//   // powerPin.writeSync(onOffValue);
//   // io.emit('onOff', onOffValue);
// });

// socket.on('dim', (data) => {
//   dimValue = data;
//   console.log('GPIO12 : ' + dimValue);
//   dimPin.pwmWrite(dimValue);
//   io.emit('dim', onOffValue);
// });

export const useSocket = defineStore('socket', {
  state: () => ({
    socket,
    onOffValue: false,
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
      console.log('dim', this.dimValue);
      this.socket.emit('dim', this.dimValue);
    },
    register() {
      this.socket.on('connect', () => {
        console.log(socket.id);
      });
    },
  },
});
