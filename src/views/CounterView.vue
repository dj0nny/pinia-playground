<template>
  <div class="counter">
    <h2>{{ counter }}</h2>
  </div>
  <div class="grid">
    <button @click="handleIncrement">Increment</button>
    <button @click="handleDecrease">Decrease</button>
    <button @click="handleReset">Reset</button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import useCounterStore from '../store/counter';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    const counter = computed(() => counterStore.counter);

    const handleIncrement = () => {
      counterStore.increment();
    };

    const handleDecrease = () => {
      counterStore.decrease();
    };

    const handleReset = () => {
      counterStore.reset();
    };

    return {
      counter,
      handleIncrement,
      handleDecrease,
      handleReset,
    };
  },
});
</script>
