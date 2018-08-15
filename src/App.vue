<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="this.$route.meta.isShow"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from  './components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style>

</style>
