<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { io } from 'socket.io-client';

const socket = io();

socket.on('connect', () => {
  console.log(socket.id);
});

socket.emit('Test')

export default defineComponent({
  name: 'App'
});
</script>
