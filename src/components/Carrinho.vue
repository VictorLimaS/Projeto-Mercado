<template>
  <div class="cart-overlay">
    <div class="cart">
      <h2>Meu Carrinho</h2>
      <div class="cart-items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <div class="item-info">
            <img class="item-image" :src="item.image" alt="Imagem do Produto">
            <div class="item-details">
              <p>{{ item.name }}</p>
              <div class="price-and-quantity">
                <p>R$ {{ item.price }}</p>
                <div class="quantity-controls">
                  <button @click="decreaseQuantity(index)" class="quantity-button">-</button>
                  <button @click="increaseQuantity(index)" class="quantity-button">+</button>
                </div>
              </div>
            </div>
          </div>
          <ion-icon name="close-circle" @click="removeItem(index)" class="remove-icon"></ion-icon>
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Carrinho',
  props: ['show'],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'getTotal'])
  },
  methods: {
    ...mapActions(['removeItem', 'increaseQuantity', 'decreaseQuantity'])
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

.cart-items::-webkit-scrollbar {
  width: 5px;
}

.cart-items::-webkit-scrollbar-track {
  background: transparent;
}

.cart-items::-webkit-scrollbar-thumb {
  background-color: rgb(83, 83, 83);
  cursor: pointer;
  border-radius: 10px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-right: 10px;
  border: 1px solid #ddd;
  padding: 0 2px 0 2px;
}

.item-info {
  display: flex;
  align-items: center;
}

.item-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.item-details {
  flex: 1;
}

.price-and-quantity {
  display: flex;
  align-items: center;
}

.price-and-quantity p {
  margin-right: 10px;
}

.quantity-controls {
  display: flex;
  align-items: center;
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

.remove-icon {
  margin-right: 10px;
  margin-top: 10px;
  color: #f00;
  cursor: pointer;
}

.remove-icon:hover {
  color: #f55;
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

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  display: flex;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 10px;
  border: 1px solid #ddd;
  background-color: transparent;
  cursor: pointer;
}

.quantity-controls button:hover {
  border: none;
  background-color: #41c686;
  color: #ddd;
}

.quantity-controls span {
  margin: 0 5px;
}
</style>
