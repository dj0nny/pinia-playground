import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const usePostsStore = defineStore('posts', () => {
  const postsList = ref([]);
  const postsLoading = ref(false);

  const getPosts = async () => {
    postsLoading.value = true;
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    postsList.value = data;
    postsLoading.value = false;
  };

  return {
    postsList,
    getPosts,
  };
});

export default usePostsStore;
