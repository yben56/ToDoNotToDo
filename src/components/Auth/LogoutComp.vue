<template>
    <div class="logout">   
        <button type="button" class="btn btn-sm btn-danger" @click="logout">{{ $t('Logout') }}</button>
    </div>
</template>

<script>
import { auth } from '../../js/auth.js'

export default {	
	methods: {
		auth,
		logout() {
			this.$store.dispatch('logout')
		}
	}
}
</script>