<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer>
      <q-toolbar class="row reverse">
        <q-btn flat dense icon="menu" aria-label="Menu" @click="toggleDrawer" />

        <!-- <q-toolbar-title>
          LocalSetup
        </q-toolbar-title> -->


      </q-toolbar>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" side="left" show-if-above bordered>
      <q-list class="fixed-center">

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

      </q-list>
      <q-footer class="row reverse">LocalSetup v{{ $q.version }}</q-footer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const DrawerOpen = ref(false)
    const $q = useQuasar()

    // set status
    $q.dark.set(true) // or false or "auto"

    return {
      essentialLinks: linksList,
      leftDrawerOpen: DrawerOpen,
      toggleDrawer() {
        DrawerOpen.value = !DrawerOpen.value
      }
    }
  }
});
</script>
