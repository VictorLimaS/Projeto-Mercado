<template>
    <div class="content">
        <div class="text">
            <h2>Sessão - {{ itemName ? itemName : 'Frutas' }}</h2>
        </div>
        <div class="cards">
            <div v-for="fruta in cards" :key="fruta.name" class="card">
                <Card :imageUrl="fruta.imageUrl" :description="fruta.description" :price="fruta.price" />
                <Botao texto="Adicionar ao carrinho" icone="cart"
                    @adicionar-ao-carrinho="adicionarItemAoCarrinho(fruta)" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import frutas from '../json/frutas.json';
import congelados from '../json/congelados.json';
import padaria from '../json/padaria.json';
import bebidas from '../json/bebidas.json';
import limpeza from '../json/limpeza.json';
import higiene from '../json/higiene.json';
import { mapState } from 'vuex';

export default {
    name: 'ItensMercado',
    components: {
        Card,
    },
    props: {
        itemName: {
            type: String,
            default: () => 'Frutas'
        },
    },
    data() {
        return {
            cards: [],
            cardList: [
                {
                    name: 'Frutas',
                    itens: frutas,
                },
                {
                    name: 'Congelados',
                    itens: congelados,
                },
                {
                    name: 'Padaria',
                    itens: padaria,
                },
                {
                    name: 'Bebidas',
                    itens: bebidas,
                },
                {
                    name: 'Limpeza',
                    itens: limpeza,
                },
                {
                    name: 'Higiene',
                    itens: higiene,
                },
            ],
        }
    },
    computed: {
        ...mapState(['test'])
    },
    methods: {
        filterItens() {
            if (this.itemName) {
                return this.cardList.filter(item => item.name === this.itemName)
                    .forEach(item => this.cards = item.itens);
            }
            this.cards = frutas
        }
    },
    created() {
        this.filterItens()
        console.log('opa', this.test)
    },
    watch: {
        itemName() {
            this.filterItens()
        },
    }
}
</script>

<style scoped>
.content {
    justify-content: center;
    height: 100vh;
    padding-top: 12rem;
    overflow: hidden;
}

.content .text {
    margin-left: 4.5rem;
}

.content .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90vh;
}

.content .card {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(17% - 1rem);
    border: 1px solid #ddd;
    padding: 1rem;
    scrollbar-width: none;
}

.content .cards::-webkit-scrollbar {
    display: none;
}

.content .card .image-container {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.content .card .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content .card .loader {
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

.content .card.loaded .loader {
    display: none;
}

.content .card p {
    margin: 1rem 0;
}
</style>