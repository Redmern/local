<template>
  <q-page class="row items-center justify-evenly">
    <!-- <example-component title="Example component" active :todos="todos" :meta="meta"></example-component> -->
    <q-btn></q-btn>
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
    // const onOffSwitch = useOnOffSwitch();
    // const dimmer = useDimmer();
    // const socket = useSocket();
    // socket.register();
    return { /* onOffSwitch, dimmer, socket */ };
  }
});
</script>
sudo
