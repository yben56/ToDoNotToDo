<template>
    <div id="masthead">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="lang">
                        <lang-comp />
                    </div>
                    <div class="auth">
                        <div v-if="!auth">
                            <!--Login-->
                            <component :is="`modal-comp`" template="login-comp" :title="$t('Login')">
                                <template v-slot:toggle-btn>
                                    <button class="login-btn btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#login-comp">
                                        <i class="fa-solid fa-right-to-bracket"></i>
                                        {{ $t('Login') }}
                                    </button>
                                </template>
                            </component>

                            <!--Signup-->
                            <component :is="`modal-comp`" template="signup-comp" :title="$t('Signup')">
                                <template v-slot:toggle-btn>
                                    <button class="signup-btn btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#signup-comp">
                                        <i class="fa-solid fa-pencil"></i>
                                        {{ $t('Signup') }}
                                    </button>
                                </template>
                            </component>
                        </div>
                        <div v-else>
                            <div class="btn-group">
                                <b class="mt-1 me-3">{{ auth.firstname }}</b>
                                <!--Logout-->
                                <logout-comp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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

<style scoped lang="scss">
#masthead {
	padding: 15px;
    background-color: #fdfdfd;
    border-bottom: solid 1px #f4f4f4;

    .container {
        position: relative;

        .lang {
            display: inline-block;
        }

        .auth {
            display: inline-block;
            float: right;
        }
    }

    .login-btn {
        margin: 0 10px;
    }
}
</style>