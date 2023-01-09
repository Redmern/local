<template>
  <q-page class="row items-center justify-evenly">
    <q-input filled v-model="timeOn" mask="time" :rules="['time']">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="timeOn" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input filled v-model="timeOff" mask="time" :rules="['time']">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="timeOff" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      timeOn: ref('12:00'),
      timeOff: ref('00:00')
    };

  }
});
</script>
sudo
