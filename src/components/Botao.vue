<template>
    <button v-bind="$attrs" :class="ehEstiloPadraoButton"><ion-icon v-bind="$attrs" :class="ehEstiloPadraoIcon" :name="icone"></ion-icon>{{ texto }}</button>
</template>

<script>
export default {
    name: 'Botao',
    props: {
        texto: {
            type: String,
        },
        icone: {
            type: String,
        },
        usarEstiloDefault: {
            type: Boolean,
            default: () => true
        },
    },
    computed: {
        ehEstiloPadraoButton() {
            return this.usarEstiloDefault ? 'button-default' : ''
        },
        ehEstiloPadraoIcon() {
            return this.usarEstiloDefault ? 'icon-default' : ''
        }
    }
}
</script>

<style scoped>
.button-default {
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #00BF63;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.button-default:hover {
    background-color: #07a358;
}

.icon-default {
    font-size: 30px;
}
</style>
