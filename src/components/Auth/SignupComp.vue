<template>
    <div class="signup">   
        <form @submit.prevent="validate" class="row g-3">
            <div class="col-md-6">
                <label class="form-label">{{ $t('Firstname') }}</label>
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': firstnameError }" id="firstname" v-model="firstname" required>
                <div class="invalid-feedback" id="feedback-0" v-if="errors[0]">{{ errors[0].message }}</div>
            </div>
            <div class="col-md-6">
                <label class="form-label">{{ $t('Lastname') }}</label>
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': lastnameError }" id="lastname" v-model="lastname" required>
                <div class="invalid-feedback" id="feedback-1" v-if="errors[1]">{{ errors[1].message }}</div>
            </div>
            <div class="col-md-12">
                <label class="form-label">{{ $t('Email') }}</label>
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': emailError }" id="email" v-model="email" required>
                <div class="invalid-feedback" id="feedback-2" v-if="errors[2]">{{ errors[2].message }}</div>
            </div>
            <div class="col-md-12">
                <label class="form-label">{{ $t('Password') }}</label>
                <input type="password" class="form-control" v-bind:class="{ 'is-invalid': passwordError }" id="password" v-model="password" required>
                <div class="invalid-feedback" id="feedback-3" v-if="errors[3]">{{ errors[3].message }}</div>
            </div>
            <div class="col-md-12">
                <label class="form-label">{{ $t('RePassword') }}</label>
                <input type="password" class="form-control" v-bind:class="{ 'is-invalid': repasswordError }" id="repassword" v-model="repassword" required>
                <div class="invalid-feedback" id="feedback-4" v-if="errors[4]">{{ errors[4].message }}</div>
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
			errors: []
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
				document.getElementById('firstname').className = "form-control is-valid"
				this.errors.push({
					'message': 'Validated.'
				})
				document.getElementById('feedback-0').className = "valid-feedback"
			}

			//lastname validate
			if ( this.lastname.length < 2 ) {
				this.lastnameError = true
				this.errors.push({
					'message': this.$t('ErrorInvalidatLastname')
				})
			} else {
				document.getElementById('lastname').className = "form-control is-valid"
				this.errors.push({
					'message': 'Validated.'
				})
				document.getElementById('feedback-1').className = "valid-feedback"
			}

			//email validate
			if ( this.email.length < 10 || this.email.search('@') == -1 ) {
				this.emailError = true
				this.errors.push({
					'message': this.$t('ErrorInvalidatEmail')
				})
			} else {
				document.getElementById('email').className = "form-control is-valid"
				this.errors.push({
					'message': 'Validated.'
				})
				document.getElementById('feedback-2').className = "valid-feedback"
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
				document.getElementById('password').className = "form-control is-valid"
				this.errors.push({
					'message': 'Validated.'
				})
				document.getElementById('feedback-3').className = "valid-feedback"
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
				document.getElementById('repassword').className = "form-control is-valid"
				this.errors.push({
					'message': 'Validated.'
				})
				document.getElementById('feedback-4').className = "valid-feedback"
			}
		}
	}
}
</script>

<style scoped lang="scss">
.signup {
	min-width: 300px;
}
</style>