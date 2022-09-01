<template>
  <div v-if="!loading" class="posts-wrapper">
    <article v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </article>
  </div>
  <div v-else class="spinner" aria-busy="true"></div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import usePostsStore from '../store/posts';

export default defineComponent({
  setup() {
    const postsStore = usePostsStore();

    const posts = computed(() => postsStore.postsList);
    const loading = computed(() => postsStore.postsLoading);

    postsStore.getPosts();

    return {
      loading,
      posts,
    };
  },
});
</script>
