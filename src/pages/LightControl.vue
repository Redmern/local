<template>
  <div class="filler"></div>



  <TimeSchedule />


  <!-- <div class="neomorph-divider">
  </div> -->
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TimeSchedule from 'components/TimeSchedule.vue';
import { useSocket } from 'stores/socketIO';

export default defineComponent({
  name: 'LightSchedule',
  components: { TimeSchedule },
  setup() {

    const socket = useSocket();
    socket.listen();

    return {
      socket
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
});
</script>
