import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './lib/router';

const app = createApp(App);

// 本番環境でログは出力しない
if (import.meta.env.VITE_NODE_ENV === 'production') {
  const no = () => {
    // 何もしない
  };
  console.log = no;
  console.warn = no;
  console.debug = no;
  console.info = no;
  console.error = no;
  console.table = no;
  console.time = no;
  console.timeEnd = no;
  console.group = no;
  console.groupEnd = no;
  console.trace = no;
}

app.use(createPinia());
app.use(router);

app.mount('#app');
