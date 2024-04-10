<template>
  <div id="app">
    <Header @getNameItem="getItem"/>
    <router-view :itemName="itemName"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      itemName: '',
      showCart: false,
    }
  },
  methods: {
    getItem(value) {
      this.itemName = value
    },
    toggleCart() {
      this.showCart = !this.showCart;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir,   Helvetica, Arial, sans-serif;
}
</style>
