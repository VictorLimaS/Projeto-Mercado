<template>
  <div class="cart-overlay">
    <div class="cart">
      <h2>Meu Carrinho</h2>
      <div class="cart-items">
        <div v-for="(item, index) in items" :key="index" class="cart-item">
          {{ item.name }} - R$ {{ item.price }}
          <button @click="removeItem(index)">Remover</button>
        </div>
      </div>
      <div class="total">Total: R$ {{ getTotal() }}</div>
      <div class="close-button" @click="$emit('toggle')">
        <ion-icon name="close-circle"></ion-icon>
      </div>
      <button class="finalize-button">Finalizar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carrinho', 
  props: ['show'],
  data() {
    return {
      items: []
    };
  },
  methods: {
    getTotal() {
      return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
    }
  }
};
</script>
  
<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  position: relative;   
}

.cart h2 {
  margin-bottom: 10px;
}

.cart-items {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.total {
  margin-bottom: 10px;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.close-button ion-icon {
  font-size: 24px;
  color: #00BF63;
}

.close-button ion-icon:hover {
  color: #0d9252;
}

.finalize-button {
  width: 100%;
  padding: 10px;
  background-color: #00BF63;
  color: #fff;
  border: none;
  cursor: pointer;
}

.finalize-button:hover {
  background-color: #0d9252;
}
</style>
