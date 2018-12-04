<template>
 <div>
   <router-view></router-view>
   <FootGuide/>
 </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"
  export default {
    name: "app",
    components:{
      FootGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
