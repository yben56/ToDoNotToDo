<template>
    <HeaderComp />
    <div id="container" class="container">
        <CardsComp />
        <AddToDoBtnCompComp  v-if="auth"/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import CardsComp from '@/components/CardsComp.vue'
import AddToDoBtnCompComp from '@/components/AddToDoBtnComp.vue'

export default {	
	components: { HeaderComp, CardsComp, AddToDoBtnCompComp },
    computed: {
        auth() {
            let auth = JSON.parse(localStorage.getItem('auth'))
            
            if ( auth ) {
                return auth
            } else {
                return false
            }
        }
    }
}
</script>