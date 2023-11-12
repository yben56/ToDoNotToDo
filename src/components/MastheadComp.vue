<template>
    <div id="masthead">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="lang">
                        <lang-comp />
                    </div>
                    <div class="auth">
                        <component :is="`modal-comp`" template="login-comp" :title="$t('Login')"></component>
                        <component :is="`modal-comp`" template="signup-comp" :title="$t('Signup')"></component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#masthead {
	padding: 15px;
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
}
</style>