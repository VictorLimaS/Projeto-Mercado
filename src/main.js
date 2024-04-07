import { createApp } from 'vue';
import App from './App.vue';    
import router from './router/router';
import store from './store';
import { app } from './firebase';

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(store);
vueApp.config.globalProperties.$firebase = app;
vueApp.mount('#app');