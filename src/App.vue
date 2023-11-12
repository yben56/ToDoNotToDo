<template>
    <component :is="`modal-comp`" template="login-comp" :title="$t('Login')"></component>
    <component :is="`modal-comp`" template="signup-comp" :title="$t('Signup')"></component>

  <lang-comp />
</template>

<script>
export default {
  name: 'App',
}
</script>