/* eslint-disable no-return-assign */
import { ref } from 'vue';
import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', () => {
  const counter = ref(0);

  const increment = () => (counter.value += 1);
  const decrease = () => (counter.value -= 1);
  const reset = () => (counter.value = 0);

  return {
    counter,
    increment,
    decrease,
    reset,
  };
});

export default useCounterStore;
