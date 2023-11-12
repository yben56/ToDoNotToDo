<template>
  <masthead-comp />
  <header-comp />
  <div id="container" class="container">
    
  </div>
  <footer-comp />
</template>

<script>
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import MastheadComp from './components/MastheadComp.vue'

export default {
  components: { MastheadComp, HeaderComp, FooterComp },
  name: 'App',
}
</script>