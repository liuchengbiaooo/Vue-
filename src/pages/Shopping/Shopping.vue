<template>
  <div>
    <div class="wrap">
        <span class="wrapleft">
          购物车
        </span>
      <span class="wrapright">
          领劵
        </span>
    </div>
    <div class="app">
      <div class="appty">
        <ul class="txt">
          <li class="item">30天无忧退货</li>
          <li class="item">48小时快速退款</li>
          <li class="item">满88元免邮费</li>
        </ul>
      </div>
      <div class="shopping">
        <img/>
        <span class="go">去添加点什么吧</span>
      </div>
      <div class="login">
        登录
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopping"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    height 1.17333rem
    text-align center
    line-height 1.17333rem
    background-color #fff
    position relative
    .wrapleft
      font-size: .48rem;
      display inline-block
    .wrapright
      color #B4282D
      font-size: .4rem;
      position absolute
      right 0.85rem

  .app
    position: fixed;
    top: 1.17333rem;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;
    .appty
      padding: 0 .4rem;
      line-height .93333rem;
      .txt
        width 100%
        height: .93333rem;
        display flex
        justify-content space-evenly
        .item
          display inline-block
          font-size .32rem;
          color: #666;
    .shopping
      width 100%
      position absolute
      top 0
      bottom 0
      margin auto
      height 4rem
      img
        display: inline-block;
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin-bottom: .10667rem;
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
      .go
        display block
        margin-bottom: .66667rem;
        line-height: 1;
        font-size: .37333rem;
        color: #999;
    .login
        position absolute
        bottom: 4.6rem;
        left 0
        right 0
        margin: auto;
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #b4282d;
        border-radius: .04rem;
</style>
