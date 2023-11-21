<template>
  <masthead-comp />
  <header-comp />
  <div id="container" class="container">
    <signupsuccess-comp />
    <cards-comp />
    <add-new-list-comp />
  </div>
  <footer-comp />
</template>

<script>
import MastheadComp from './components/MastheadComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import CardsComp from './components/CardsComp.vue'
import FooterComp from './components/FooterComp.vue'
import AddNewListComp from './components/AddNewListComp.vue'

export default {
  components: { MastheadComp, HeaderComp,CardsComp, FooterComp, AddNewListComp },
  name: 'App'
}
</script>