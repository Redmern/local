<template>
  <div class="flex row justify-center schedule">
    <q-btn class="time_btn on">
      <q-icon class="time_btn_icon" name="sunny" />
      <p class="time">{{ proxyTimeOn }}</p>
      <q-popup-proxy @before-show="updateProxyTimeOn" cover transition-show="scale" transition-hide="scale">
        <q-time format24h :model-value="proxyTimeOn">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="accent" flat v-close-popup />
            <q-btn label="OK" color="accent" flat @click="saveTimeOn" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>

    <q-btn class="time_btn off">
      <q-icon class="time_btn_icon" name="nightlight" />
      <p class="time">{{ proxyTimeOff }}</p>
      <q-popup-proxy @before-show="updateProxyTimeOff" cover transition-show="scale" transition-hide="scale">
        <q-time format24h :model-value="proxyTimeOff">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="accent" flat v-close-popup />
            <q-btn label="OK" color="accent" flat @click="saveTimeOff" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSocket } from 'stores/socketIO';
import { ref } from 'vue'

export default defineComponent({
  name: 'TimeSchedule',
  props: {
    id: Number
  },
  setup() {
    const socket = useSocket();
    var proxyTimeOn = ref('12:01');
    var proxyTimeOff = ref('00:01');

    return {
      proxyTimeOff,
      proxyTimeOn,

      updateProxyTimeOn() {
        proxyTimeOn.value = socket.timeOn
      },
      updateProxyTimeOff() {
        proxyTimeOff.value = socket.timeOff
      },
      saveTimeOn() {
        console.log('proxyTimeOn')
        console.log(proxyTimeOn.value)
        socket.timeOn = proxyTimeOn.value
        socket.changeTimeOn()
      },
      saveTimeOff() {
        console.log('proxyTimeOff')
        console.log(proxyTimeOff.value)
        socket.timeOff = proxyTimeOff.value
        socket.changeTimeOff()
      },
      socket
    };
  }
});
</script>
