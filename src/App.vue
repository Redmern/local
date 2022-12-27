<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { io } from 'socket.io-client';

const socket = io();

console.log(socket)

socket.on('connect', () => {
  console.log(socket.id);
});

export default defineComponent({
  name: 'App'
});
</script>
