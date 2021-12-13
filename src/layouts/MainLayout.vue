<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="q-drawer"
    >
      <q-list class="q-drawer">
        <q-item-label
          header
        >
          Trusted way of banking for 3000+ <br> SMEs and startups in Singapore
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :active-class="link.active"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    link: ''
  },
  {
    title: 'Cards',
    caption: '',
    icon: 'credit_card',
    link: '',
    active:true
  },
  {
    title: 'Payments',
    caption: '',
    icon: 'payments',
    link: ''
  },
  {
    title: 'Credit',
    caption: '',
    icon: 'arrow_circle_left',
    link: ''
  },
  {
    title: 'Settings',
    caption: '',
    icon: 'person',
    link: ''
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style scoped>
.q-drawer{
  background: #0C365A;
  width:100%;
  color: white;
}
.activeCls{
  color:#01D167;
}
</style>
