<template>
    <div class="signup">   
        <form @submit.prevent="validate" class="row g-3">
            <div class="col-md-6">
                <label class="form-label">{{ $t('Firstname') }}</label>
                <input 
					type="text" 
					:class="['form-control', { 'is-invalid': firstnameError, 'is-valid': !firstnameError && submit }]"
					v-model="firstname" 
					required
				>
                <div class="invalid-feedback" v-if="errors[0]">{{ errors[0].message }}</div>
            </div>
            <div class="col-md-6">
                <label class="form-label">{{ $t('Lastname') }}</label>
                <input 
					type="text" 
					:class="['form-control', { 'is-invalid': lastnameError, 'is-valid': !lastnameError && submit }]"
					v-model="lastname"
					required
				>
                <div class="invalid-feedback" v-if="errors[1]">{{ errors[1].message }}</div>
            </div>
            <div class="col-md-12">
                <label class="form-label">{{ $t('Email') }}</label>
                <input 
					type="text"
					:class="['form-control', {'is-invalid': emailError, 'is-valid': !emailError && submit }]" 
					v-model="email"
					required
				>
                <div class="invalid-feedback" v-if="errors[2]">{{ errors[2].message }}</div>
            </div>
            <div class="col-md-12">
                <label class="form-label">{{ $t('Password') }}</label>
                <input
					type="password"
					:class="['form-control', { 'is-invalid': passwordError, 'is-valid': !passwordError && submit }]"
					v-model="password"
					required
				>
                <div class="invalid-feedback" v-if="errors[3]">{{ errors[3].message }}</div>
            </div>
            <div class="col-md-12">
                <label class="form-label">{{ $t('RePassword') }}</label>
                <input
					type="password"
					:class="['form-control', {'is-invalid': repasswordError, 'is-valid': !repasswordError && submit }]" 
					v-model="repassword"
					required
				>
                <div class="invalid-feedback" v-if="errors[4]">{{ errors[4].message }}</div>
            </div>
			<div class="col-md-12">
				<i class="text-danger">* {{ $t('FalseInfo') }}</i>
			</div>
            <div class="col-md-12">
				<button type="submit" class="btn btn-danger submit">{{ $t('Submit') }}</button>
			</div>
        </form>
    </div>
</template>

<script>
export default {	
	data() {
		return {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			repassword: '',
			firstnameError: false,
			lastnameError: false,
			emailError: false,
			passwordError: false,
			repasswordError: false,
			errors: [],
			submit: false,
		}
	},
	methods: {
		validate() {
			this.errors = []
			
			//firstname validate
			if ( this.firstname.length < 2 ) {
				this.firstnameError = true
				this.errors.push({
					'message': this.$t('ErrorInvalidatFirstname')
				})
			} else {
				this.firstnameError = false
				this.errors.push({'message': ''})
			}

			//lastname validate
			if ( this.lastname.length < 2 ) {
				this.lastnameError = true
				this.errors.push({
					'message': this.$t('ErrorInvalidatLastname')
				})
			} else {
				this.lastnameError = false
				this.errors.push({'message': ''})
			}

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

			// repassword validate
			if ( this.repassword.length < 8 || this.repassword !== this.password ) {
				this.repasswordError = true
				if ( this.repassword.length < 8 ) {
					this.errors.push({
						'field': 'repassword',
						'message': this.$t('ErrorInvalidatPassword')
					})
				} else {
					this.errors.push({
						'field': 'repassword',
						'message': this.$t('ErrorInvalidatPasswordsMatch')
					})
				}
			} else {
				this.repasswordError = false
				this.errors.push({'message': ''})
			}

			this.submit = true //submit btn been clicked

			//Only trigger when validation success
			if ( !this.firstnameError && !this.lastnameError && !this.emailError && !this.passwordError && !this.repasswordError ) {
				this.submitForm()
			}
		},
		submitForm() {
			this.$axios.get('/database/Signup.json', {
				firstname: this.firstname,
				lastname: this.lastname,
				email: this.email,
				password: this.password
			}).then(response => {
				console.log(response.data)
				this.$store.dispatch('signup', response.data)
			}).catch(error => {
				console.error(error)
			})
		}
	}
}
</script>

<style scoped lang="scss">
.signup {
	min-width: 300px;
}
</style>