import { createApp } from 'vue';
import Vuex from 'vuex';
import App from '../App.vue';

const vueApp = createApp(App);
vueApp.use(Vuex);


export default new Vuex.Store({
  state: {
    cartItems: [],
  },
  getters: {
    cartItems: (state) => state.cartItems
  },
  mutations: {
    SET_CART_ITEMS: (state, payload) => state.cartItems.push(payload)
  }
});