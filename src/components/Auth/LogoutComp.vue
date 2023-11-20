<template>
    <div class="logout">   
        <button type="button" class="btn btn-sm btn-danger" @click="logout">{{ $t('Logout') }}</button>
    </div>
</template>

<script>
export default {	
	methods: {
		logout() {
			this.$store.dispatch('logout')
		}
	}
}
</script>