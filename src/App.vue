<template>
    <div id="app">
      <Header :title="'Meu Site'" />
      <Inicio />
    </div>
  </template>
  
  <script>
 import Header from './components/header.vue';
 import Inicio from './components/inicio.vue';

  
  export default {
    name: 'App',
    components: {
      Header,
      Inicio
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100vh;
  }
  </style>
  