<template>
    <div id="header">
        <CarouselComp />
    </div>
</template>

<script>
import CarouselComp from '@/components/CarouselComp.vue'

export default {
  components: {
    CarouselComp
  }
}
</script>

<style scope lang="scss">
#header {
    background-color: #ffffff;
    border-bottom: solid 1px #f4f4f4;
    text-align: center;  
}
</style>