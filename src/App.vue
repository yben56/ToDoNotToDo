<template>
  <component :is="`bootstrap-modal`" template="login-form" :title="$t('login')"></component>
  <component :is="`bootstrap-modal`" template="signup-form" :title="$t('signup')"></component>
</template>

<script>
export default {
  name: 'App',
}
</script>