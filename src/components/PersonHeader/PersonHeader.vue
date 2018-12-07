<template>
  <div class="row">
    <a class="u-icon u-icon-home" @click="$router.replace('/homepage')"></a>
    <slot></slot>
    <div class="right">
      <span class="search">
        <i class="u-icon-searchl"></i>
      </span>
      <span class="cart">
        <i class="u-icon-cart"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "person-header"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .row
    z-index: 1;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding: 0 .21333rem 0 .32rem;
    height: 1.17333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color #F2F5F4
    .logo
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    .right
      height: 1.17333rem;
      margin-left: auto;
      margin-right: .7555rem;
      .search
        margin-top 0.165454rem
        display inline-block
        width: .85333rem;
        height: .85333rem;
        margin-right 0.15rem
        .u-icon-searchl
          display inline-block
          width: .85333rem;
          height: .85333rem;
          background-position: 0 -4.75rem;
          background-size: 2.29333rem 5.6rem;
          background-repeat: no-repeat;
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
      .cart
        display inline-block
        width: .85333rem;
        height: .85333rem;
        .u-icon-cart
          display inline-block
          width: .85333rem;
          height: .85333rem;
          background-position: 0 0rem;
          background-size: 2.29333rem 5.6rem;
          background-repeat: no-repeat;
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
    .u-icon-home,.u-icon-logo
      display: inline-block;
      vertical-align: middle;
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
      background-repeat: no-repeat;
      background-size: 2.29333rem 5.6rem;
      &.u-icon-home
        width: .64rem;
        height: .58667rem;
        background-position: 0 -.98667rem;
      &.u-icon-logo
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -1.70667rem;
</style>
