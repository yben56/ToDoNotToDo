<template>
    <HeaderComp />
    <div id="container" class="container">
        <CardsComp />
        <AddToDoBtnCompComp  v-if="Auth()"/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import CardsComp from '@/components/CardsComp.vue'
import AddToDoBtnCompComp from '@/components/AddToDoBtnComp.vue'

export default {	
	components: { HeaderComp, CardsComp, AddToDoBtnCompComp },
}
</script>