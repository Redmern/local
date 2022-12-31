<template>
  <q-page class="row items-center justify-evenly">



    <!-- <example-component title="Example component" active :todos="todos" :meta="meta"></example-component> -->
    <!-- <q-btn color="primary" @click="socket.onOff()">klik maar hier!</q-btn>

    <q-knob show-value font-size="1rem" v-model="socket.dimValue" size="75px" :thickness="0.25" color="teal"
      track-color="grey-3" class="q-ma-md">
      {{ socket.dimValue }}%
    </q-knob> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDimmer } from 'stores/lightControlDimmer';
import { useOnOffSwitch } from 'stores/lightControlSwitch';
import { useSocket } from 'stores/socketIO';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const onOffSwitch = useOnOffSwitch();
    const dimmer = useDimmer();
    const socket = useSocket();
    socket.register();
    socket.onOff();
    return { onOffSwitch, dimmer, socket };
  }
});
</script>
sudo
