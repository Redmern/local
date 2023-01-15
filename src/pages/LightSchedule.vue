<template>

  <q-card class="my-card">
    <q-card-section>
      <div class="q-pa-md">
        <div class="q-mb-sm">
          <q-badge color="teal">
            Lights On: {{ socket.timeOn }}
          </q-badge>
        </div>

        <q-btn icon="access_time" round color="primary">
          <q-popup-proxy @before-show="updateProxyTimeOn" cover transition-show="scale" transition-hide="scale">
            <q-time format24h v-model="proxyTimeOn">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup />
                <q-btn label="OK" color="primary" flat @click="saveTimeOn" v-close-popup />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-btn>
      </div>

      <div class="q-pa-md">
        <div class="q-mb-sm">
          <q-badge color="teal">
            Lights off: {{ socket.timeOff }}
          </q-badge>
        </div>

        <q-btn icon="access_time" round color="primary">
          <q-popup-proxy @before-show="updateProxyTimeOff" cover transition-show="scale" transition-hide="scale">
            <q-time format24h v-model="proxyTimeOff">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup />
                <q-btn label="OK" color="primary" flat @click="saveTimeOff" v-close-popup />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>


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
