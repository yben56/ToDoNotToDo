<template>
    <div class="login">   
        <form @submit.prevent="validate" class="row g-3">
			<div class="col-md-12">
				<label class="form-label">{{ $t('Email') }}</label>
				<input 
					type="text"
					:class="['form-control', {'is-invalid': emailError, 'is-valid': !emailError && submit}]" 
					v-model="email" 
					required
				>
				<div class="invalid-feedback" v-if="errors[0]">{{ errors[0].message }}</div>
			</div>
			<div class="col-md-12">
				<label class="form-label">{{ $t('Password') }}</label>
				<input 
					type="password" 
					:class="['form-control', {'is-invalid': passwordError, 'is-valid': !passwordError && submit}]" 
					v-model="password" 
					required
				>
				<div class="invalid-feedback" v-if="errors[1]">{{ errors[1].message }}</div>
			</div>
			<div class="col-md-12">
				<i class="text-danger">* {{ $t('FalseInfo') }}</i>
			</div>
			<div class="col-md-12">
				<button type="submit" class="btn btn-danger submit">{{ $t('Submit')}}</button>
			</div>
        </form>
    </div>
</template>

<script>
export default {	
	data() {
		return {
			email: '',
			password: '',
			emailError: false,
			passwordError: false,
			errors: [],
			submit: false,
		}
	},
	methods: {
		validate() {
			this.errors = []
			
			//email validate
			if ( this.email.length < 10 || this.email.search('@') == -1 ) {
				this.emailError = true
				this.errors.push({
					'message': this.$t('ErrorInvalidatEmail')
				})
			} else {
				this.emailError = false
				this.errors.push({'message': ''})
			}
			
			//password validate
			var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
			if ( this.password.length < 8 || this.password.match(regex) == null ) {
				this.passwordError = true
				this.errors.push({
					'field': 'password',
					'message': this.$t('ErrorInvalidatPassword')
				})
			} else {
				this.passwordError = false
				this.errors.push({'message': ''})
			}

			this.submit = true //submit btn been clicked

			//Only trigger when validation success
			if ( !this.emailError && !this.passwordError ) {
				this.submitForm()
			}
		},
		submitForm() {
			this.$axios.get('/database/Login.json', {
				email: this.email,
				password: this.password
			}).then(response => {
				console.log(response.data)
				this.$store.dispatch('login', response.data)
			}).catch(error => {
				console.error(error)
			})
		}
	}
}
</script>

<style scoped lang="scss">
.login {
	min-width: 300px
}
</style>