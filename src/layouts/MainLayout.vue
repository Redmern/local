<template>
  <q-layout view="lHh Lpr lFf">

    <q-drawer v-model="leftDrawerOpen" side="left" show-if-above :width="250" :breakpoint="500">
      <q-list class="fixed-center">
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
      <q-footer class="q-dark">
        <div style="display: flex; justify-content: center;">
          <p class="text-light-green-10 q-mr-sm" style="font-size: 10px;"> LocalSetup V{{ $q.version }} </p>
        </div>
        <!-- <div class="q-pa-sm grey-9"> LocalSetup V{{ $q.version }} </div> -->
      </q-footer>
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-footer class="float">
        <q-toolbar class="row reverse">

          <div>
            <q-btn flat dense icon="menu" aria-label="Menu" @click="toggleDrawer" />
          </div>

          <div class="footer_slider">
            <q-slider class="slider" v-model="socket.dimValue" color="grey" thumb-color="light-green-10" :min="0"
              :max="100" label />
          </div>

        </q-toolbar>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useDimmer } from 'stores/lightControlDimmer';
import { useSocket } from 'stores/socketIO';
import { useQuasar } from 'quasar'

const linksList = [
  {
    title: 'Home',
    // caption: 'Control the schedule of lights',
    icon: 'home',
    link: 'https://quasar.dev'
  },
  {
    title: 'Light schedule',
    // caption: 'Control the schedule of lights',
    icon: 'light',
    link: 'https://quasar.dev'
  },
  {
    title: 'Environment',
    // caption: 'Control the environment',
    icon: 'settings',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Documentation',
    // caption: 'What params did this growth use',
    icon: 'summarize',
    link: 'https://chat.quasar.dev'
  },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const DrawerOpen = ref(false)
    const $q = useQuasar()

    const socket = useSocket();

    // set status
    $q.dark.set(true) // or false or "auto"

    return {
      essentialLinks: linksList,
      leftDrawerOpen: DrawerOpen,
      toggleDrawer() {
        DrawerOpen.value = !DrawerOpen.value
      },
      socket
    }
  }
});
</script>
