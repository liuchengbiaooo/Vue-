<template>
 <div>
   <PersonHeader>
     <a class="logo u-icon u-icon-logo"></a>
   </PersonHeader>
  <div class="wrap">
    <div class="logowrap">
      <div class="login">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
      </div>
    </div>
    <div class="btnWrap">
     <div class="button" @click="$router.replace('/login')">
       <i class="icon"></i>
       <span class="txt">手机号码登录</span>
     </div>
     <div class="button" id="to" @click="$router.replace('/login')">
        <i id="togo"></i>
        <span class="txt" id="todo">短信验证登录</span>
      </div>
     <div class="btn">
        <span class="zhuce">手机号快捷注册</span>
        <i class="tupan"></i>
      </div>
    </div>
    <div class="thirdWrap">
      <div class="wx">
        <i class="u-pan weixin"></i>
        <span>微信</span>
      </div>
      <div class="wx">
        <i class="u-pan qq"></i>
        <span>QQ</span>
      </div>
      <div class="wx">
        <i class="u-pan weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import  PersonHeader from "../../components/PersonHeader/PersonHeader.vue"
  export default {
    name: "personage",
    components:{
      PersonHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 100%
    height 16.599rem
    position relative
    background: #F2F5F4;
    .logowrap
      text-align: center;
      padding-top: 2.13333rem;
      padding-bottom: 2.13333rem;
      .login
        display inline-block
        width: 3.57333rem;
        height: 1.2rem;
        img
          width 100%
          height 100%
    .btnWrap
      padding: 0 .53333rem;
      margin-bottom: 2.73333rem;
      .button
        margin-bottom: .42667rem;
        border-radius: 2px;
        height: 1.25333rem;
        line-height: 1.25333rem;
        font-size: .37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        text-align: center;
        .icon
          display inline-block
          margin-right: .21333rem;
          position: relative;
          top: 0.1rem;
          background-position: 0 -.66667rem;
          background-repeat: no-repeat;
          background-size: .53333rem 3.86667rem;
          width: .53333rem;
          height: .53333rem;
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png")
      .btn
        color: #333;
        font-size: .37333rem;
        text-align: center;
        width: 100%;
        position relative
        .tupan
          display inline-block
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png")
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          position absolute
          margin-left 0.095rem
          top 0.0012rem
    #to
      background-color: transparent;
      color #b4282d;
      #togo
          display inline-block
          margin-right: .21333rem;
          position: relative;
          top: 0.1rem;
          background-repeat: no-repeat;
          background-size: .53333rem 3.86667rem;
          width: .53333rem;
          height: .53333rem;
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png")
          color #b4282d;
    .thirdWrap
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 1.06667rem;
      height: .53333rem;
      text-align: center;
      display flex
      justify-content space-evenly
      line-height .53333rem;
      .wx
        height: .53333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 .53333rem;
        span
          font-size: .37333rem;
          line-height: .53333rem;
          height: .53333rem;
          color: #7F7F7F;
          margin-left: .06667rem;
</style>
