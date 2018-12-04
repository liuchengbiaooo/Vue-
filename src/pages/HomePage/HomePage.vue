<template>
  <div class="g-row">
    <div class="m-indexHd">
      <div class="line">
        <a href="#" class="logo"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">
                搜索商品, 共19915款好物
              </span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="tabWrap">
        <div class="m-tabs scroll">
          <header>
            <div class="inner">
              <div class="list">
                <div class="tab active">
                        <span class="txt">
                          推荐
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          居家
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          鞋包配饰
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          服装
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          电器
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          洗护
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          饮食
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          餐厨
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          婴童
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          文体
                        </span>
                </div>
                <div class="tab">
                        <span class="txt">
                          特色区
                        </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle">
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home-page"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .g-row
    width 10rem
    margin-right auto
    margin-left auto
    .m-indexHd
      background-color #fff
      border-bottom 1px solid #d9d9d9
      .line
        position relative
        z-index 2
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items center
        background #fff
        padding .21333rem .4rem
        & > .ipt
          -webkit-box-flex 1
          flex-grow 1
        .logo
          width 1.84rem
          height .53333rem
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          display inline-block
          margin-right .26667rem
          background-size cover
          background-position center
        .m-topSearchIpt
          display flex
          flex-flow row nowrap
          -webkit-box-align center
          align-items center
          -webkit-box-pack center
          justify-content center
          height .74667rem
          font-size .37333rem
          background-color #ededed
          border-radius .10667rem
          .icon
            display inline-block
            vertical-align middle
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
            background-repeat no-repeat
            background-size 100% 100%
            width .37333rem
            height .37333rem
            margin-right .13333rem
          .span
            color #666

        .loginBtn
          width .98667rem
          height .53333rem
          line-height .53333rem
          text-align center
          color #b4282d
          border 1px solid #b4282d
          border-radius .10667rem
          margin-left .21333rem;
    .tabWrap
      position relative
      z-index 2
      background #fff
      margin-top -.01333rem
      .m-tabs
        padding-right 1.33333rem
        width 100%
        >header
          display flex
          flex-flow row nowrap
          background-color #fff
          position relative
          .inner
            display flex
            flex-flow row nowrap
            .list
              display flex
              flex-flow row nowrap
              flex-shrink 0
              padding 0 .4rem
              background #fff
              .tab
                margin-left .26667rem
                flex-shrink 0
                position relative
                &.active
                  color red
                  .txt
                    position relative
                    color #b4282d
                    &:after
                      content: ' ';
                      position: absolute;
                      left: 0;
                      bottom: 0;
                      width: 100%;
                      height: .05333rem;
                      background-color: #b4282d;
                .txt
                  display: inline-block;
                  padding: 0 .21333rem;
                  line-height: .8rem;
                  font-size: .37333rem;
                  color: #333;
                  text-align: center;
              .tab:first-of-type
                margin-left 0
    .toggleWrap
      display flex
      -webkit-box-flex: 0;
      flex-grow: 0;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      .linear
        width: .8rem;
        height: .8rem;
        background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
      .toggle
        width: 1.33333rem;
        height: .8rem;
        text-align: center;
        background: #fff;
        .icon
          margin-top: .2rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
</style>
