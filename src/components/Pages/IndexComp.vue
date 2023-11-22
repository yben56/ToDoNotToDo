<template>
    <header-comp />
    <div id="container" class="container">
        <cards-comp />
        <add-new-list-comp  v-if="auth"/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import CardsComp from '@/components/CardsComp.vue'
import AddNewListComp from '@/components/AddNewListComp.vue'

export default {	
	components: { HeaderComp, CardsComp, AddNewListComp },
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