<template>
  <div class="header">
    <ul class="header-nav">
      <li class="nav-link">
        <router-link :to="{ name: 'counter' }">Counter</router-link>
      </li>
      <li class="nav-link">
        <router-link :to="{ name: 'posts' }">Posts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
