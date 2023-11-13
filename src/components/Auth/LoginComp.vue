<template>
    <div class="login">   
        <form @submit.prevent="validate">
            <div class="form-group">
                <label>{{ $t('Email')}}</label>
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': emailError }" id="email" v-model="email">
                <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">{{ errors[0].message }}</div>
            </div>
            <div class="form-group">
                <label>{{ $t('Password')}}</label>
                <input type="password" class="form-control" v-bind:class="{ 'is-invalid': passwordError }" id="password" v-model="password">
                <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">{{ errors[1].message }}</div>
            </div>
            <button type="submit" class="btn btn-danger submit">{{ $t('Submit')}}</button>
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
				errors: []
			}
		},
		methods: {
			validate() {
				this.errors = [];
				
				//email validate
				if(this.email.length < 10 || this.email.search('@') == -1) {
					this.emailError = true;
					this.errors.push({
						'message': this.$t('ErrorInvalidatEmail')
					});
				} else {
					document.getElementById('email').className = "form-control is-valid";
					this.errors.push({
						'message': 'Validated.'
					});
					document.getElementById('feedback-1').className = "valid-feedback";
				}
				
				//password validate
				var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
				if(this.password.length < 8 || this.password.match(regex) == null) {
					this.passwordError = true;
					this.errors.push({
						'field': 'password',
						'message': this.$t('ErrorInvalidatPassword')
					});
				} else {
					document.getElementById('password').className = "form-control is-valid";
					this.errors.push({
						'message': 'Validated.'
					});
					document.getElementById('feedback-2').className = "valid-feedback";
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.login {
	min-width: 300px;
}
</style>