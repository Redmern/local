<template>
  <div class="flex row justify-center t_schedule">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSocket } from 'stores/socketIO';
import { ref } from 'vue'

var socket;
var proxyTimeOn = ref('12:01')
var proxyTimeOff = ref('00:01')

export default defineComponent({
  name: 'TestComponent',
  setup() {
    socket = useSocket();
    proxyTimeOn = ref('12:01')
    proxyTimeOff = ref('00:01')
  }

});
</script>
