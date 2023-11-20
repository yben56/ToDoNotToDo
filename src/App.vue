<template>
  <masthead-comp />
  <header-comp />
  <div id="container" class="container">
    <cards-comp />
  </div>
  <footer-comp />
</template>

<script>
import MastheadComp from './components/MastheadComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import CardsComp from './components/CardsComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: { MastheadComp, HeaderComp,CardsComp, FooterComp },
  name: 'App'
}
</script>