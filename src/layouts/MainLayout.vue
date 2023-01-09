<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" :width="250" side="left" show-if-above>

      <q-header class="q-dark">
        <div class="header">

          <q-icon class="header_icon" name="yard" />

          <div class="drawer-header-title">
            <p>
              Local Setup
            </p>
          </div>

        </div>
      </q-header>

      <q-list class="fixed-center">
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
      <q-footer class="q-dark">

        <div class="bottom">

          <q-toggle q-ml-s v-model="socket.onOffValue" @click="socket.onOff()" />
          <!-- <div class="text-light-green-10">
            LocalSetup V{{ $q.version }}
          </div> -->

          <p style="font-size: 10px;">
            V{{ $q.version }}
          </p>

        </div>
      </q-footer>



    </q-drawer>

    <q-page-container>
      <div class="page_header_title">{{ $route.name }}</div>
      <router-view />
      <q-footer class="bottom_menu">
        <q-toolbar class="row reverse">

          <div>
            <q-btn flat dense icon="menu" aria-label="Menu" @click="toggleDrawer" />
          </div>

          <div class="footer_slider">
            <q-slider class="slider" v-model="socket.dimValue" @pan="socket.dim" color="grey" :min="0" :max="100"
              label />
          </div>

        </q-toolbar>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useSocket } from 'stores/socketIO';
import { useQuasar } from 'quasar'
import { route } from 'quasar/wrappers'

const linksList = [
  {
    title: 'Home',
    // caption: 'Control the schedule of lights',
    icon: 'home',
    link: 'Home'
  },
  {
    title: 'Light schedule',
    // caption: 'Control the schedule of lights',
    icon: 'light',
    link: 'LightSchedule'
  },
  {
    title: 'Environment',
    // caption: 'Control the environment',
    icon: 'settings',
    link: 'Environment'
  },
  {
    title: 'Documentation',
    // caption: 'What params did this growth use',
    icon: 'summarize',
    link: 'Documentation'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  setup() {
    const DrawerOpen = ref(false);
    const $q = useQuasar();
    const socket = useSocket();

    socket.getSocket.on('onOff', (data) => {
      data == 0 ? (socket.onOffValue = true) : (socket.onOffValue = false);

      console.log('GPIO26 : ' + data);
    });
    socket.getSocket.on('dim', (data) => {
      socket.dimValue = data;

      console.log('GPIO26 : ' + data);
    });

    // set status
    $q.dark.set(true) // or false or "auto"

    return {
      essentialLinks: linksList,
      leftDrawerOpen: DrawerOpen,
      toggleDrawer() {
        DrawerOpen.value = !DrawerOpen.value
      },
      toggle() {
        socket.getSocket.emit('onOff')
      },
      socket,
      route
    }
  }
});
</script>
