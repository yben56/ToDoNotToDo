<template>
	<div v-if="auth" class="signupsuccess container">
		<div class="col-md-6 offset-md-3 mt-5">
			<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">{{ $t('Congratulations') }}</h4>
				<p>{{ $t('StartInfo') }}</p>
				<hr>
				<div class="text-end">
					<router-link to="/">
						<button type="button" class="btn btn-warning">{{ $t('Start') }}</button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { auth } from '@/js/auth.js'

export default {
	computed: {
		auth() {
            return auth()
        }
	}
}
</script>

<style scoped lang="scss">
.signupsuccess {
	min-height: 400px;
}
</style>