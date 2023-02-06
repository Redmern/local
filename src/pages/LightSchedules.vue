<template>
  <div class="filler"></div>
  <!-- <Test /> -->
  <component v-for="(item, index) in schedules" :is="'TimeSchedule'" :key="index" />
  <div class="neomorph-divider">
  </div>
  <div class="flex justify-center">
    <q-btn class="add_time_schedule" icon="add" @click="loadComponent" />
  </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TimeSchedule from 'components/TimeSchedule.vue';

const scheduleId = 0;

export default defineComponent({
  name: 'LightSchedule',
  components: { TimeSchedule },
  setup() {
    return {
      newSchedule() {
        console.log('xxx')

      }
    }
  },
  data() {
    return {
      schedules: []
    }
  },
  methods: {
    loadComponent() {
      this.schedules.push({
        component: { TimeSchedule }
      })
    }
  }
});
</script>
