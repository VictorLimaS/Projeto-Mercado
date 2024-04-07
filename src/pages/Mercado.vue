<template>
    <ItensMercado :itemName="itemName" />
</template>

<script>
import ItensMercado from '../components/ItensMercado.vue'

export default {
    name: 'Mercado',
    components: {
        ItensMercado,
    },
    props: {
        itemName: String,
    }
}

</script>