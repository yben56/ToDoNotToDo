<template>
  <masthead-comp />
  <nav-comp />
  <footer-comp />
</template>

<script>
import MastheadComp from './components/MastheadComp.vue'
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: { MastheadComp, NavComp, FooterComp },
  name: 'App'
}
</script>