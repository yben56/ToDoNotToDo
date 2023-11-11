<template>
  <component :is="`bootstrap-modal`" template="login-form" :title="$t('Login')"></component>
  <component :is="`bootstrap-modal`" template="signup-form" :title="$t('Signup')"></component>

  <lang-btn />
</template>

<script>
export default {
  name: 'App',
}
</script>