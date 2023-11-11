<template>
  <component :is="`bootstrap-modal`" template="login-form" title="登入"></component>
  <component :is="`bootstrap-modal`" template="signup-form" title="註冊"></component>
</template>

<script>
export default {
  name: 'App',
}
</script>