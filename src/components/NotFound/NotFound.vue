<template>

  <div class="wrap">
      <span>
        404 NOT FOUND
      </span>
      <div class="app" @click="$router.replace('/homePage')">
        点击回首页
      </div>
  </div>

</template>

<script>
  export default {
    name: "not-found"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    margin-top 1.5rem
    width 100%
    height 1.5rem
    text-align center
    font-size 0.8rem
    .app
      margin-top 1rem
</style>
