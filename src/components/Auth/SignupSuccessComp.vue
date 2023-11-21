<template>
	<div v-if="successinfo">
		<div class="col-md-6 offset-md-3">
			<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">{{ $t('Congratulations') }}</h4>
				<p>{{ $t('StartInfo') }}</p>
				<hr>
				<div class="text-end">
					<button type="button" class="btn btn-warning" @click="start">{{ $t('Start') }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {	
	methods: {
		start() {
			this.$store.dispatch('start')
		}
	},
	computed: {
		successinfo() {
			let signupsuccess = JSON.parse(localStorage.getItem('signupsuccess'))

			if ( signupsuccess == true ) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>