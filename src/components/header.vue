<template>
  <div class="container_header">
    <header class="header">
      <div class="logo">Logo</div>
      <div class="search">
        <input type="text" placeholder="Pesquisar...">
        <button><ion-icon name="search"></ion-icon></button>
      </div>
      <div class="actions">
        <button><ion-icon name="heart"></ion-icon></button>
        <button><ion-icon name="cart"></ion-icon></button>
      </div>
    </header>
    <nav class="subheader">
      <ul>
        <li><a href="#">Frutas</a></li>
        <li><a href="#">Congelados</a></li>
        <li><a href="#">Padaria</a></li>
        <li><a href="#">Bebidas</a></li>
        <li><a href="#">Limpeza</a></li>
        <li><a href="#">Higiene</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

.container_header {
 position: fixed;
 width: 100%;
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

.search {
  flex: 2;
  display: flex;
  align-items: center;
}

.search input {
  flex: 1;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
  border: none;
}

.search button {
  padding: 10px;
  background-color: #fff;
  color: #000;
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

.subheader {
  background-color: #00BF63;
  color: white;
  padding: 1rem ;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
}

.subheader ul {
  display: flex;
  gap: 5rem;
  list-style-type: none;
}

.subheader li {
  margin: 0 10px;
}

.subheader a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
}

.subheader a:hover {
  background-color: #fff;
  border-radius: 5px;
  color:#FA9B2D;
}

</style>
