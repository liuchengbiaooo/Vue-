<template>
  <div class="app">
    <PersonHeader id="popo">
      <div class="wrap">
        <span class="wrapfa">发现</span>
        <span class="wrapz">甄选家</span>
      </div>
    </PersonHeader>
    <div class="m-main-tab">
      <ul class="flexbox">
        <li class="text" :class="{active:Mayindex===index}" v-for="(gettab,index) in gettabs" :key="index"
            @click="todo(index)">{{gettab.tabName}}
        </li> <!--active-->
      </ul>
    </div>


      <div class="m-main-content" v-if="generalthings">
        <!--旧版本，新版本还差一个img的格式-->
        <div class="data">
          <div v-for="(groom,index) in groomList" :key="index">

            <div class="m-tpls" v-if="groom.type===1">
              <div>
                <div class="info">
                  <div class="u-name">
             <span class="ava">
            <img
              :src="groom.avatar">
            </span>
                    <span>{{groom.nickname}}</span>
                  </div>
                  <div class="title">
                    {{groom.title}}
                  </div>
                  <div class="desc">
                    {{groom.subTitle}}
                  </div>
                  <div class="u-rcount">
                    <span>{{groom.readCount}}人看过</span>
                  </div>
                </div>
                <div class="u-pic">
                  <img
                    :src="groom.picUrl">
                </div>
              </div>
            </div>

            <div v-else class="m-tpls2">
              <div class="info2">
                <div class="u-name">
          <span class="ava">
            <img
              :src="groom.avatar">
          </span>
                  <span>{{groom.nickname}}</span>
                </div>
              </div>
              <div class="title2">
                {{groom.title}}
              </div>
              <div class="u-pic2">
                <img
                  :src="groom.picUrl">
              </div>
              <div class="u-rcount2">
                <span>{{groom.readCount}}人看过</span>
              </div>
            </div>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from "vuex"
  import PersonHeader from "../../components/PersonHeader/PersonHeader.vue"
  import BScroll from "better-scroll"

  export default {
    name: "general-things",
    data() {
      return {
        Mayindex: 0
      }
    },
    mounted() {
      this.$store.dispatch("getGeneralThings")
      this.$store.dispatch("getGetTabs")
      this.$store.dispatch("getGeneralThingList",)
    },
    computed: {
      ...mapState([
        "gettabs", //列表
        "generalthings", //识物首页
      ]),
      ...mapGetters(['groomList'])
    },
    watch: {
      generalthings: function () {
        this.$nextTick(() => {
          new BScroll(".m-main-content", {
            click: true
          })
        })
      }
    },
    methods: {
      todo(index) {
        this.Mayindex = index
      }
    },
    components: {
      PersonHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    height 100%
    width 100%
    background-color #F2F5F4
    #popo
      position fixed
    .wrap
      margin auto
      height: 1.17333rem;
      margin-left 3.2rem
      box-sizing border-box
      line-height 1.17333rem;
      position fixed
      .wrapfa
        display line-break
        font-size: .5rem;
        color: #b4282d;
        font-weight: bold;
      .wrapz
        vertical-align: middle;
        font-size: .38rem;
        color: #7F7F7F;
        margin-left 0.25rem
        position relative
        top -0.1rem

    .m-main-tab
      width: 100%;
      height: 1rem;
      background: #fafafa;
      border-bottom: .01rem solid #d9d9d9;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      left: 0;
      z-index: 20;
      top: 1.13rem;
      .flexbox
        display flex
        height: 1rem;
        line-height 1rem
        justify-content space-evenly
        .text
          font-size: .38rem;
          padding: 0 .08rem;
          margin: 0 .2rem;
          vertical-align: middle;
          color #7F7F7F;
          &.active
            color: #B4282D;
            border-bottom: .04rem solid #B4282D;
    .m-main-content
      height 14rem
      overflow hidden
      padding: 1.08rem 0 0.98rem 0
      position relative
      top 1.18rem
      .m-tpls
        margin-top 1.2rem
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        position: relative;
        padding: .32rem .3rem;
        box-sizing: border-box;
        display flex
        justify-content space-between
        .info
          width: 5.5rem;
          float left
          .u-name
            font-size: .45rem;
            color: #333;
            height 1rem
            line-height: 1rem
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .ava
              display inline-block
              box-sizing: border-box;
              margin-right: .12rem;
              width: 0.65rem;
              height: 0.65rem;
              overflow: hidden;
              border-radius: 50%
              position relative
              top 0.1rem
              left 0.1rem
              img
                display inline-block
                width: 100%
                height: 100%
                background-size 100%

          .title
            display inline-block
            margin 0.2rem 0 0.1rem 0
            font-size 0.47rem
            color: #333;

          .desc
            margin 0.15rem 0 0.15rem 0
            width 100%
            font-size 0.38rem
            color #7f7f7f
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

          .u-rcount
            span
              font-size: .22rem;
              color: #999;
              line-height: .32rem;
              margin-top: .18rem;
              display: inline-block;
              vertical-align: middle;
        .u-pic
          float right
          width: 3.68rem;
          height: 3.68rem;
          position: relative;
          overflow: hidden;
          border-radius: .18rem;
          img
            width 100%
            height 100%
            display inline-block
            background-size 100%
      .m-tpls2
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        position: relative;
        padding: .32rem .3rem;
        box-sizing: border-box;
        .info2
          width: 100%
          display block
          .u-name
            font-size: .45rem;
            color: #333;
            height 1rem
            line-height: 1rem
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .ava
              display inline-block
              box-sizing: border-box;
              margin-right: .12rem;
              width: 0.65rem;
              height: 0.65rem;
              overflow: hidden;
              border-radius: 50%
              position relative
              top 0.1rem
              left 0.1rem
              img
                display inline-block
                width: 100%
                height: 100%
                background-size 100%

        .title2
          display inline-block
          margin 0.2rem 0 0.1rem 0
          font-size 0.47rem
          color: #333;
        .u-pic2
          width 100%
          height: 5.20rem;
          img
            height 100%
            width 100%
        .u-rcount2
          span
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            display: inline-block;
            vertical-align: middle;


</style>
