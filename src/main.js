import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import '@picocss/pico/css/pico.min.css';
import './assets/style.css';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
