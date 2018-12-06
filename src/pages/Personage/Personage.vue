<template>
  <div class="row">
    <a class="u-icon u-icon-home">
    </a>
    <a class="logo u-icon u-icon-logo"></a>
    <div class="right">
      <span class="search">
        <i class="u-icon u-icon-searchl"></i>
      </span>
      <span class="cart">
        <i class="u-icon u-icon-cart"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personage"
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
    .logo
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    .right
      margin-left: auto;
      margin-right: 1.06667rem;
      .search
        margin-right: .26667rem;
    .u-icon-home,.u-icon-logo,.u-icon-searchl,.u-icon-cart
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
      &.u-icon-cartl
        width: .85333rem;
        height: .85333rem;
        background-position: 0 -4.74667rem;
      &.u-icon-cart
        width: .85333rem;
        height: .85333rem;
        background-position: 0 0;
</style>
