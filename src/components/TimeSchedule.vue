<template>
  <div class="flex row justify-center schedule">
    <q-btn class="time_btn on">
      <q-icon class="time_btn_icon" name="sunny" />
      <p class="time">{{ socket.timeOn }}</p>
      <q-popup-proxy @before-show="updateProxyTimeOn" cover transition-show="scale" transition-hide="scale">
        <q-time format24h v-model="socket.timeOn">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="accent" flat v-close-popup />
            <q-btn label="OK" color="accent" flat @click="saveTimeOn" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>

    <q-btn class="time_btn off">
      <q-icon class="time_btn_icon" name="nightlight" />
      <p class="time">{{ socket.timeOff }}</p>
      <q-popup-proxy @before-show="updateProxyTimeOff" cover transition-show="scale" transition-hide="scale">
        <q-time format24h v-model="socket.timeOff">
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

export default defineComponent({
  name: 'TimeSchedule',
  setup() {
    const socket = useSocket();

    return {
      updateProxyTimeOn() {
        // proxyTimeOn.value = socket.timeOn
      },
      updateProxyTimeOff() {
        // proxyTimeOff.value = socket.timeOff
      },
      saveTimeOn() {
        socket.changeTimeOn()
      },
      saveTimeOff() {
        socket.changeTimeOff()
      },
      socket
    };
  }
});
</script>
