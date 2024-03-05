<template>
    <div id="masthead">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="lang">
                        <lang-comp />
                    </div>
                    <div class="auth">
                        <div v-if="!Auth()">
                            <!--Login-->
                            <component :is="`modal-comp`" template="LoginComp" :title="$t('Login')">
                                <template v-slot:toggle-btn>
                                    <button class="login-btn btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#LoginComp">
                                        <i class="fa-solid fa-right-to-bracket"></i>
                                        {{ $t('Login') }}
                                    </button>
                                </template>
                            </component>

                            <!--Signup-->
                            <component :is="`modal-comp`" template="SignupComp" :title="$t('Signup')">
                                <template v-slot:toggle-btn>
                                    <button class="signup-btn btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#SignupComp">
                                        <i class="fa-solid fa-pencil"></i>
                                        {{ $t('Signup') }}
                                    </button>
                                </template>
                            </component>
                        </div>
                        <div v-else>
                            <img class="rounded-circle shadow-4-strong img-thumbnail" src="@/assets/images/default-thumb.png" />
                            <b class="mt-1 ms-3 me-3">{{ Auth().firstname }}</b>
                            <MenuComp/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuComp from '@/components/MenuComp.vue'

export default {
  components: { MenuComp }
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

    .img-thumbnail {
        display: inline;
        width: 30px;
    }
}
</style>