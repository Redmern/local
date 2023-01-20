<template>
  <div class="flex row justify-center schedule">
    <q-btn class="time_btn on">
      <q-icon class="time_btn_icon" name="sunny" />
      <p class="time">{{ proxyTimeOn }}</p>
      <q-popup-proxy @before-show="updateProxyTimeOn" cover transition-show="scale" transition-hide="scale">
        <q-time format24h v-model="proxyTimeOn">
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
        <q-time format24h v-model="proxyTimeOff">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="accent" flat v-close-popup />
            <q-btn label="OK" color="accent" flat @click="saveTimeOff" v-close-popup />
          </div>
        </q-time>
      </q-popup-proxy>
    </q-btn>

    <q-btn class="time_btn action_btn trash">
      <q-icon name="delete" />
    </q-btn>
    <q-btn class="time_btn action_btn power">
      <q-icon name="power" />
    </q-btn>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSocket } from 'stores/socketIO';
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const socket = useSocket();
    const proxyTimeOn = ref('12:01')
    const proxyTimeOff = ref('00:01')

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
        socket.timeOn = proxyTimeOn.value
        socket.changeTimeOn()
      },
      saveTimeOff() {
        socket.timeOff = proxyTimeOff.value
        socket.changeTimeOff()
      },
      socket
    };

  }
});
</script>
