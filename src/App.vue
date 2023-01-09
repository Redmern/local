<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSocket } from 'stores/socketIO';


export default defineComponent({
  name: 'App',
  setup() {
    const socket = useSocket();
    socket.boot();
  }
});
</script>
