<template>
  <nav class="m-tabBar">
    <a class="item active" @click="todo('/homepage')">
      <i name="tabBar-index" class="u-icon u-icon-tabBar-index"></i>
      <span class="txt">首页</span>
    </a>
    <a class="item" @click="todo('/classify')">
      <i name="tabBar-cate" class="u-icon u-icon-tabBar-cate"></i>
      <span class="txt">分类</span>
    </a>
    <a class="item" @click="todo('/generalthings')">
      <i name="tabBar-topic" class="u-icon u-icon-tabBar-topic"></i>
      <span class="txt">识物</span>
    </a>
    <a class="item" @click="todo('/shopping')">
      <i name="tabBar-cart" class="u-icon u-icon-tabBar-cart"></i>
      <span class="txt">购物车</span>
    </a>
    <a class="item" @click="todo('/personage')">
      <i name="tabBar-ucenter" class="u-icon u-icon-tabBar-ucenter"></i>
      <span class="txt">个人</span>
    </a>
  </nav>
</template>

<script>
  export default {
    name: "foot-guide",
    methods: {
      todo(val) {
        this.$router.replace(val)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-tabBar
     display flex
     flex-flow row nowrap
     -webkit-box-direction normal
     -webkit-box-align center
     align-items center
     justify-content space-around
     position fixed
     z-index 5
     bottom 0
     left 0
     width 100%
     height 1.30667rem
     background #fff
     border-top 1px solid #d9d9d9
     >.item
       position relative
       text-align center
     &.active
        color red
       .u-icon
          display: inline-block;
          vertical-align: middle;
          background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png");
          background-repeat: no-repeat;
          background-size: .74667rem 8.66667rem;
          width: .74667rem;
          height: .74667rem;
       .u-icon-tabBar-index
         background-position 0 -3.52rem
       .txt
         display block
         margin-top .09333rem
         font-size .32rem
         color #555
         line-height 1
       .u-icon-tabBar-cate
         background-position 0 -2.64rem
       .u-icon-tabBar-topic
         background-position 0 -6.16rem
       .u-icon-tabBar-cart
         background-position 0 -.88rem
       .u-icon-tabBar-ucenter
         background-position 0 -7.92rem

</style>
