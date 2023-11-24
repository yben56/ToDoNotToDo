<template>
  <masthead-comp />
  <router-view></router-view>
  <footer-comp />
</template>

<script>
import MastheadComp from '@/components/MastheadComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  components: { MastheadComp, FooterComp },
  name: 'App'
}
</script>