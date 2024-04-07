<template>
  <div class="container_header">
    <header class="header">
      <div class="logo" @click="redirectRoute('/')"><img src="../assets/img/logo.png" alt=""></div>
      <div class="search">
        <input type="text" placeholder="Pesquisar...">
        <button><ion-icon name="search"></ion-icon></button>
      </div>
      <div class="actions">
        <button><ion-icon name="heart"></ion-icon></button>
        <button @click="toggleCart"><ion-icon name="cart"></ion-icon></button>
      </div>
    </header>
    <nav class="subheader">
      <router-link @click="getItem(item)" v-for="(item, i) in linksItens" :key="i" :to="{ name: 'Mercado' }">{{ item }}</router-link>
    </nav>
    <Carrinho v-if="showCart" @toggle="toggleCart" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import Carrinho from "./Carrinho.vue";

export default {
  name: 'Header',
  components: {
    Carrinho,
    Card
  },
  data() {
    return {
      showCart: false,
      Finalizar: 'Final',
      linksItens: ['Frutas', 'Congelados', 'Padaria', 'Bebidas', 'Limpeza', 'Higiene']
    };
  },
  methods: {
    redirectRoute(route) {
      this.$router.push(route)
    },
    toggleCart() {
      this.showCart = !this.showCart
    },
    getItem(item) {
      this.$emit('getNameItem', item)
    }
  },
}
</script>

<style scoped>
.container_header {
  position: fixed;
  width: 100%;
  z-index: 8;
}

.header {
  background-color: #FA9B2D;
  color: white;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}

.logo {
  flex: 1;
}

.header .logo img {
  width: 6rem;
  height: 5rem;
  cursor: pointer;
}

.search {
  flex: 2;
  display: flex;
  align-items: center;
}

.search input {
  flex: 1;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px 0px 0px 10px;
  border: none;
}

.search button {
  padding: 10px;
  background-color: #fff;
  color: #000;
  margin-left: -2px;
  border-radius: 0px 10px 10px 0;
  border: none;
  cursor: pointer;
}

.actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.actions button {
  padding: 5px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.actions button ion-icon {
  color: #fff;
  background: transparent;
  font-size: 2rem;
}

.container_header .subheader {
  background-color: #00BF63;
  display: flex;
  padding: 1rem;
  text-align: center;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  width: 100%;
  position: fixed;
  font-weight: bold;
}

.subheader a {
  color: #f9f9f9;
  text-decoration: none;
  cursor: pointer;
  padding: 2px 5px;
}

.container_header .subheader a:hover {
  background-color: #fff;
  border-radius: 5px;
  color: #00BF63;
}
</style>
