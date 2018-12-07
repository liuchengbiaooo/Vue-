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
              <div class="list"> <!--active-->
                <div class="tab" :class="{active:currentIndex===index}" v-for="(cate,index) in catelist" :key="index"
                     @click="todo(index)">
                        <span class="txt">
                          {{cate.name}}
                        </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div class="pindao" v-show="ishow">
          <span class="quanbu">全部频道</span>
        </div>
        <div v-show="ishow" class="moban">
            <div class="wrap">
              <ul class="wrapul">
                <li class="txt" :class="{reive:currentIndex===index}" v-for="(cate,index) in catelist" :key="index"
                    @click="todo(index)">{{cate.name}}</li> <!--reive-->
              </ul>
            </div>
        </div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <!--<transition name="xz">-->
            <div class="toggle" :class="{active:ishow}" @click="come"></div>
          <!--</transition>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import {mapState} from "vuex"

  export default {
    name: "home-page",
    data() {
      return {
        currentIndex: 0,
        ishow: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll(".inner", {
          click: true,
          scrollX: true  //水平滑动
        })
      })
      this.$store.dispatch("getCatelist")
    },
    computed: {
      ...mapState(["catelist"])
    },
    methods: {
      todo(index) {
        this.currentIndex = index
      },
      come() {
        this.ishow = !this.ishow
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .g-row
    width 100%
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
        > header
          display flex
          flex-flow row nowrap
          background-color #fff
          position relative
          overflow hidden
          .inner
            display flex
            flex-flow row nowrap
            width 100%
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
      .pindao
        position fixed
        z-index 5
        top 1.18rem
        width 100%
        box-sizing border-box
        background-color white
        .quanbu
          height: .8rem;
          line-height: .8rem;
          padding-left: .4rem;
          font-size: .37333rem;
      .moban
        z-index 5
        .wrap
          background-color white
          position fixed
          top 1.8rem
          .wrapul
            margin-top 0.2rem
            width 100%
            .txt
              width: 2rem;
              height: .74667rem;
              line-height: .74667rem;
              text-align: center;
              float: left;
              margin-bottom: .53333rem;
              margin-left: .4rem;
              background: #FAFAFA;
              box-sizing border-box
              &.reive
                border: 1px solid #b4282d;
                color: #b4282d;
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
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
      .toggle
        margin-right 0.3rem
        text-align: center;
        width: .4rem;
        height: .4rem;
        background: #fff;
        z-index 99
        display: inline-block;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transform:rotateZ(0deg);
        transition:all 0.3s;
        &.active
          transform:rotateZ(180deg);
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
</style>

