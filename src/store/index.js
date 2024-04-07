import { createApp } from 'vue';
import Vuex from 'vuex';
import aplication from './aplication.js';
import App from '../App.vue';    

const vueApp = createApp(App);
vueApp.use(Vuex);

export default new Vuex.Store( aplication );
