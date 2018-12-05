<template>
  <nav class="m-tabBar">
    <a class="item" @click="todo('/homepage')" :class="{active:isShow('/homepage')}">
      <i name="tabBar-index" class="u-icon u-icon-tabBar-index"></i>
      <span class="txt">首页</span>
    </a>
    <a class="item" @click="todo('/classify')" :class="{active:isShow('/classify')}">
      <i name="tabBar-cate" class="u-icon u-icon-tabBar-cate"></i>
      <span class="txt">分类</span>
    </a>
    <a class="item" @click="todo('/generalthings')" :class="{active:isShow('/generalthings')}">
      <i name="tabBar-topic" class="u-icon u-icon-tabBar-topic"></i>
      <span class="txt">识物</span>
    </a>
    <a class="item" @click="todo('/shopping')" :class="{active:isShow('/shopping')}">
      <i name="tabBar-cart" class="u-icon u-icon-tabBar-cart"></i>
      <span class="txt">购物车</span>
    </a>
    <a class="item" @click="todo('/personage')" :class="{active:isShow('/personage')}">
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
      },
      isShow(path){
        return this.$route.path===path
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-tabBar
    height: 1.30667rem;
    width 100%
    position fixed
    z-index 5
    bottom 0
    background-color white
    display flex
    justify-content space-evenly
    .item
      text-align center
      &.active
        color red
      .u-icon
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png")
        width: .74667rem;
        height: .74667rem;
        background-size: .74667rem 8.66667rem;
        background-repeat no-repeat
        display inline-block
        &.u-icon-tabBar-index
          background-position: 0 -3.52rem;
        &.u-icon-tabBar-cate
          background-position: 0 -2.64rem;
        &.u-icon-tabBar-topic
          background-position: 0 -6.16rem;
        &.u-icon-tabBar-cart
          background-position: 0 -.88rem;
        &.u-icon-tabBar-ucenter
          background-position: 0 -7.92rem;
      .txt
        display block
</style>
