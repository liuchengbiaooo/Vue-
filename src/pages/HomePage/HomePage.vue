<template>
  <div>
    <HomeHeader/>
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&quality=75&thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/e0c3e253dcfdb170bda823ac5b71247e.jpg?imageView&quality=75&thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/018b7902a3fb1e48dbdd8b7bb42674aa.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5a2289149a59ca24ef2256674542e4cb.jpg?imageView&quality=75&thumbnail=750x0">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="m-indexServicePolicy active">
      <ul class="g-grow">
        <li class="item" v-for="(policydesc,index) in policydesclist" :key="index">
          <a>
            <i class="u-icon u-icon-servicePolicy-index"
               :style="{backgroundImage:`url('${policydesc.icon}')`}"></i>
            <span class="text">
                {{policydesc.desc}}
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="wrapper">
        <div class="list" v-for="(kingKong,index) in kingkong.kingKongList" :key="index">
          <div class="icon">
            <img :src="kingKong.picUrl"/>
          </div>
          <span class="txt">{{kingKong.text}}</span>
        </div>
      </div>
    </div>
    <div class="m-lazyload img m-lazyload-loaded">
      <img class="swiper-lazy" src="https://yanxuan.nosdn.127.net/15435895031254332.gif">
    </div>
    <div class="onimg">
      <div>
        <img src="https://yanxuan.nosdn.127.net/15439062209423716.png"/>
        <img src="https://yanxuan.nosdn.127.net/15439062418853717.png"/>
      </div>
    </div>
    <div class="onimg">
      <div>
        <img src="https://yanxuan.nosdn.127.net/15438948939222563.png"/>
        <img src="https://yanxuan.nosdn.127.net/15439062784443718.png"/>
      </div>
    </div>
    <div class="m-bossRecommendModule active">
      <img src="https://yanxuan.nosdn.127.net/b36b6e2c6132b5980c047005f7520795.png">
    </div>
    <div class="m-sceneLightShoppingGuideModule">
      <div v-for="(shop,index) in shopping" :key="index">
        <a class="m-styleBanner">
          <div class="title">
            {{shop.styleItem.title}}
          </div>
          <div class="desc">
            {{shop.styleItem.desc}}
          </div>
          <div class="picList" v-for="(picUrl,index) in shop.styleItem.picUrlList" :key="index">
            <img class="pic" :src="picUrl"/>
          </div>
        </a>
      </div>

    </div>
    <div class="m-indexFloor">
      <div class="moduleTitle">
        <span>私人订制</span>
      </div>
      <div class="m-carousel ">
        <div class="swiper-container" id="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="item" v-for="(categorys,index) in categorysArr[0]" :key="index">
                <img
                  :src="categorys.listPicUrl"/>
                <div>
                 <span class="up">
                 {{categorys.name}}
               </span>
                  <span class="down">
               ￥{{categorys.counterPrice}}
               </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="item" v-for="(categorys,index) in categorysArr[1]" :key="index">
                <img
                  :src="categorys.listPicUrl"/>
                <div>
                 <span class="up">
                 {{categorys.name}}
               </span>
                  <span class="down">
               ￥{{categorys.counterPrice}}
               </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="item" v-for="(categorys,index) in categorysArr[2]" :key="index">
                <img
                  :src="categorys.listPicUrl"/>
                <div>
                 <span class="up">
                 {{categorys.name}}
               </span>
                  <span class="down">
               ￥{{categorys.counterPrice}}
               </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="item" v-for="(categorys,index) in categorysArr[3]" :key="index">
                <img
                  :src="categorys.listPicUrl"/>
                <div>
                 <span class="up">
                 {{categorys.name}}
               </span>
                  <span class="down">
               ￥{{categorys.counterPrice}}
               </span>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" id="p2"></div>
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
    <div class="m-flashSaleModule m-indexFloor">
      <div class="moduleTitle">
        <div class="left">
          <span>限时购</span>
          <div class="m-countdown ">
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="mins">00</span>
            <span class="colon">:</span>
            <span class="secs">00</span>
          </div>
        </div>
        <a href="#" class="right">
          <span>更多</span>
          <i class="icon u-icon u-icon-index-titleArrow"></i>
        </a>
      </div>
      <div class="cnt">
        <a href="#" class="m-indexFlashSaleItem" v-for="(item,index) in bigpromotion.itemList" :key="index">
          <div class="imgWrap">
            <img :src="item.picUrl">
          </div>
          <div class="price">
            <span class="actualPrice">￥{{item.originPrice}}</span>
            <span class="retailPrice">{{item.activityPrice}}</span>
          </div>
        </a>
      </div>
    </div>

    <div class="m-newItemModule m-indexFloor">
      <div class="moduleTitle">
        <div class="left">
          <span>限时购</span>
        </div>
        <a href="#" class="right">
          <span>更多</span>
          <i class="icon u-icon u-icon-index-titleArrow"></i>
        </a>
      </div>
      <div class="m-indexItem m-goodGrid">
        <ul class="list">
          <li class="item" v-for="(newitem,index) in newitemlist" :key="index">
            <a href="#" class="good">
              <div class="hd">
                <img
                  :src="newitem.listPicUrl">
              </div>
              <div class="name">
                <span>{{newitem.simpleDesc}}</span>
                <span class="mani">￥{{newitem.retailPrice}}</span>
              </div>
              <div class="tagWraper" v-if="newitem.promTag">
                <p class="status gradientPrice">{{newitem.promTag}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="m-ft g-row">
      <div class="app">
        <span>下载app</span>
        <span>电脑版</span>
     </div>
   </div>
</div>
</template>

<script>
  import HomeHeader from "../../components/HomeHeader/HomeHeader.vue"
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from "vuex"
  export default {
    name: "home-page",
    mounted() {
       new Swiper('#swiper1', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 3000, //循环时间
        }
      }),
       new Swiper('#swiper2', {
          //direction: 'vertical', // 垂直切换选项
          loop: false, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '#p2',
          },
        }),
       this.$store.dispatch("getPolicydesclist")
       this.$store.dispatch("getKingkongmodule")
       this.$store.dispatch("getShopping")
       this.$store.dispatch("getNewitemlist")
       this.$store.dispatch("getBigpromotion")
       this.$store.dispatch("getPersonal")
    },
    computed:{
      ...mapState([
        "newitemlist", //新品首发 大米 牛奶
        "shopping",  //四个爱吃社
        "kingkong", // 居家鞋包服装10个
        "policydesclist", //退货，退款
        "bigpromotion", //限时
        "personal",//三个图，轮播
      ]),
      categorysArr() {
        const {personal} = this
        const categoryDig = [] // 定义最大的双重数组
        let arr = [] //定义大数组里面的小数组
        personal.forEach((c) => {

          if (arr.length === 0) {
            categoryDig.push(arr)  //如果arr的值小于0 将他放入 双重数组中
          }
          arr.push(c)
          if (arr.length === 3) {  //当arr里面的值到达一定数量后，重新清空放入新数组
            arr = []
          }
        })
        return categoryDig
      },
    },
    components: {
      HomeHeader,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /* @import "../../common/stylus/mixins.styl"*/
  .swiper-container
    width: 100%
    height: 100%
    img
      width 100%
      height auto

  .m-indexServicePolicy
    background: #FFEDDB;
    .g-grow
      width: 100%;
      height: .96rem;
      padding: 0 .2rem;
      display flex
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      zoom: 1;
      box-sizing border-box
      .item
        -webkit-box-flex: 1;
        flex: 1;
        float: left;
        a
          display: inline-block;
          vertical-align: middle;
          height: .42667rem;
          .u-icon-servicePolicy-index
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .42667rem;
            height: .42667rem;
          .text
            color: #B4282D;
            font-size: .32rem;
            margin-left: .05rem;
            line-height: .42667rem;
            display: inline-block;
            vertical-align: middle;

  .container
    padding-bottom: .69333rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: #FFEDDB;
    .wrapper
      height 3.4rem
      flex-shrink: 0;
      width: 100%;
      position: relative;
      display flex
      flex-wrap wrap
      justify-content space-evenly
      .list
        width 1.3rem
        height 1.6rem
        margin 0.1rem 0.2rem
        text-align center
        .icon
          img
            width: 1.1rem
            height: 1.1rem
        .txt
          font-size: .32rem;

  .m-lazyload
    background 0 0
    height: 100%;
    .swiper-lazy
      width 100%
      height auto

  .onimg
    width 100%
    height auto
    display: inline
    img
      width 49%
      height atuo

  .m-bossRecommendModule
    width 100%
    height auto
    img
      width 100%
      height auto

  .m-sceneLightShoppingGuideModule
    background: #B7030A;
    overflow: hidden;
    padding: .13333rem .4rem .4rem .34667rem;
    margin-bottom: .26667rem;
    display flex
    justify-content center
    flex-direction row
    flex-wrap wrap
    overflow: hidden;
    .m-styleBanner
      background-color: #F5F5F5;
      display: block;
      width: 4.17333rem;
      height: 3.52rem;
      float: left;
      margin: .05333rem 0 0 .05333rem;
      padding: .26667rem 0 0 .26667rem;
      border-radius: .05333rem;
      .title
        padding-left: .13333rem;
        color black
        font-size: .42667rem;
        font-family: PingFangSC-Medium;
      .desc
        padding-left: .13333rem;
        font-size: .32rem;
        margin-top 0.2rem
      .picList
        width 100%
        .pic
          width: 2rem;
          height: 2rem;
          float: left;
          margin-right: .05333rem;
          margin-top 0.3rem

  .m-indexFloor
    margin-bottom: .26667rem;
    background-color #fff
    .moduleTitle
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      padding: 0 .4rem;
      background: #fff;
      overflow hidden
      box-sizing border-box
      font-size .42667rem;
    .m-carousel
      position: relative;
      background-color: #fff;
      .swiper-container
        padding-bottom: .8rem
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper
          height: auto;
          position: relative;
          width: 100%;
          display: flex;
          box-sizing: content-box;
          .swiper-slide
            height auto
            position: relative;
            .item
              padding: 0 !important;
              margin-left: .26667rem;
              width: 2.88rem;
              float: left;
              img
                background-color: #f5f5f5;
                top: 0;
                left: 0;
                width: 2.88rem;
                height: 2.88rem;
              .down
                color #b4282d
        #p2
          margin auto
          width: auto;
          top 0.3rem
          left: 0;
          right 0
          bottom: .32rem;
          height: .16rem;
          position relative

  .m-flashSaleModule
    background-color white
    .cnt
      overflow: hidden;
      padding: 0 .13333rem 0 .4rem;
      .m-indexFlashSaleItem
        display: block;
        color: #333;
        float: left;
        margin-right: .26667rem;
        padding-bottom: .4rem;
        .imgWrap
          width: 2.88rem;
          height: 2.88rem;
          background: #F5F5F5;
          border-radius: 4px;
          margin-bottom: .16rem;
          img
            width: 2.88rem;
            height: 2.88rem;

        .price
          padding-left: .26667rem;
          .actualPrice
            font-size: .37333rem;
            color: #b4282d;
            margin-right: .16rem;
          .retailPrice
            font-size: .32rem;
            color: #7F7F7F;
            text-decoration: line-through;

  .moduleTitle
    width: 100%;
    height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 .4rem;
    background: #fff;
    overflow: hidden;
    content: '';
    clear: both;
    display: inline-block;
    .left
      display: inline-block;
      float: left;
      font-size: .42667rem;
      font-family: PingFangSC-Regular;
      .m-countdown
        display: inline-block;
        vertical-align: middle;
        margin: -.08rem 0 0 .16rem;
        .hours
          display: inline-block;
          font-size: .32rem;
          line-height: .48rem;
          width: .48rem;
          height: .48rem;
          text-align: center;
          background-color: #333;
          border-radius: .05333rem;
          color: #fff;
          margin: 0 .13333rem;
          font-family: PingFangSC-Medium;
          position: relative;
          top: -0.05rem;
        .colon
          font-size: .37333rem;

    .right
      display: block;
      font-size: .37333rem;
      float: right;
      color: #333;
      line-height: 1.33333rem;
      .u-icon-index-titleArrow
        margin: -.06667rem 0 0 .10667rem;
        display: inline-block;
        vertical-align: middle;
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-219f348910.png")
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .17333rem;
        height: .30667rem;

  .m-newItemModule
    margin-bottom: .26667rem;
    padding-bottom: .34667rem;
    .m-indexItem
      padding-left: .13333rem;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 0;
      overflow: hidden;
      box-sizing border-box
      .list
        display: flex;
        flex-wrap: wrap;
        .item
         padding: 0 0 .17333rem !important;
         margin-left: .26667rem;
         width: 2.88rem;
         float: left;
         position: relative;
         overflow: hidden;
         background-color: #fff;
         .good
           display block
           .hd
             background-color: #f5f5f5;
             border-radius: .05333rem;
             position: relative;
             img
               width 100%
           .name
             color black
             font-size: .32rem;
             .mani
               color red
           .tagWraper
             width: 100%;
             z-index: 1;
             margin: 0 0 .05333rem -.16rem;
             height: .4rem;
             overflow: hidden;
             padding-left: 0;
             position absolute
             bottom 0
             .status
               text-align center
               color white
               margin-left: .16rem;
               background-color: #f48f18;

  .m-ft
    border-top: 1px solid rgba(0, 0, 0, .15);
    background-color: #414141;
    height 3rem
    width 100%
    .app
      margin-top 0.6rem
      display flex
      justify-content space-evenly
      span
        width: 2.5rem;
        height: 0.6rem;
        border 1px solid white
        text-align center
        line-height 0.6rem;
        color white
        font-size 0.3rem

</style>
