<template>
    <div>
        <div class="image-container">
            <div class="loader"></div>
            <img class="image" :src="imageUrl" @load="imageLoaded">
        </div>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
        <Botao icone="cart-outline" @click="addToCart()" texto="Adicionar" />
    </div>

</template>

<script>
import Botao from '../components/Botao.vue';

export default {
    name: 'Card',
    components: {
        Botao,
    },
    props: {
        imageUrl: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: String
        },
        item: {
            type: Object
        }
    },
    methods: {
        imageLoaded(event) {
            const imageContainer = event.target.parentElement;
            imageContainer.classList.add('loaded');
        },
        addToCart() {
            this.$emit('addToCart', this.item)
            // const item = {
            //     name: this.description,
            //     price: parseFloat(this.price),
            //     image: this.imageUrl,
            //     quantity: 1,
            // };
            // console.log('Adicionando ao carrinho:', item);
            // this.$store.dispatch('addToCart', item);
        }
    }
};
</script>

<style scoped>
.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90vh;
}

.card {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(17% - 1rem);
    border: 1px solid #ddd;
    padding: 1rem;
    scrollbar-width: none;
}

.cards::-webkit-scrollbar {
    display: none;
}

.card .image-container {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.card .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #dadada;
    animation: loader 2s infinite;
}

@keyframes loader {
    0% {
        opacity: 0.6;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.6;
    }
}

.card.loaded .loader {
    display: none;
}

.card p {
    margin: 1rem 0;
}

.card .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>