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

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const switch = useOnOffSwitch();
    const dimmer = useDimmer();

    return {};
  }
});
</script>
