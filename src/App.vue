<template>
  <main class="container">
    <app-header></app-header>
    <router-view></router-view>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

import AppHeader from './components/AppHeader.vue';

export default defineComponent({
  components: {
    AppHeader,
  },
  setup() {},
});
</script>
