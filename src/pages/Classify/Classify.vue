<template>
  <div>
    <div class="m-itemCateListHd">
      <div class="m-topSearchIpt ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共19971款好物</span>
      </div>
    </div>
    <div  v-if="category.length>0">
      <div class="m-cateNavVertWrap">
        <ul class="m-cateNavVert">
          <li class="item" v-for="(cate,index) in category" :key="index"
              @click="todo(index)" :class="{active:currentIndex===index}"> <!--.active-->
            <a href="#" class="txt">
              {{cate.name}}
            </a>
          </li>
        </ul>
      </div>
      <div class="m-subCateList">
          <div>
            <div class="banner"
                    :style="{backgroundImage:`url('${categorys.wapBannerUrl}')`}">
            <div class="cnt"></div>
          </div>
            <div>
              <div class="cateList">
                <ul class="list">
                  <li class="cateItem" v-for="(cate,index) in categorys.subCateList" :key="index">

                    <div class="cateListcao" v-if="cate.categoryList">
                      <div class="nima">{{cate.name}}
                        <ul class="uls">
                          <li class="lis" v-for="(category,index) in cate.categoryList" :key="index">
                            <div class="dag">
                              <img class="mg" :src="category.wapBannerUrl"/>
                            </div>
                            <div class="name">{{category.name}}</div>
                          </li>
                        </ul>
                      </div>
                    </div>


                    <div v-else>
                      <div class="cateImgWrapper">
                        <img :src="cate.bannerUrl"/>
                      </div>
                      <div class="name">{{cate.name}}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import {mapState} from "vuex"

  export default {
    name: "classify",
    data() {
      return {
        currentIndex: 0 //下标值
      }
    },
    mounted() {
      this.$store.dispatch("getCategory")
    },
    watch: {
      category: function () {
        this.$nextTick(() => {
          new BScroll(".m-subCateList", {
            click: true
          })
        })
        this.$nextTick(() => {
          new BScroll(".m-cateNavVertWrap", {
            click: true
          })
        })
      }
    },
    computed: {
      ...mapState(["category"]),
      categorys() {
        const category = this.category[this.currentIndex]
        return category
      },
    },
    methods: {
      todo(index) {
        this.currentIndex = index
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-itemCateListHd
    width: 9.2rem;
    align-items: center;
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color: #fff;
    display flex
    justify-content center
    margin-top: 0.0001rem;
    position fixed
    z-index 8
    .m-topSearchIpt
      width 100%
      height: .74667rem;
      display flex
      justify-content center
      align-items center
      flex-flow row wrap
      font-size: .37333rem;
      border-radius: .10667rem;
      background-color: #ededed;
      overflow hidden
      .icon
        width: .37333rem;
        height: .37333rem;
        margin-right: .13333rem;
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
        background-repeat no-repeat
        background-size 100%
      .placeholder
        color: #666;

  .m-cateNavVertWrap
    overflow hidden
    height 16rem
    margin-top: 1.1rem;
    z-index: 4;
    width: 2.16rem;
    background-color: #fff;
    float left
    box-sizing border-box
    top-border-1px(rgba(0, 0, 0, .15))
    border-right 1px solid rgba(0, 0, 0, .15)
    .m-cateNavVert
      padding-bottom: 1.84rem;
      .item
        width: 100%;
        height: .66667rem;
        text-align: center;
        border: none;
        margin-bottom .53333rem
        &.active
          position: relative;
          .txt
            color red
          &::before
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: .08rem;
            background-color: #ab2b2b;
        .txt
          font-size: .37333rem;
          line-height: .66667rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: block;
          color black

  .m-subCateList
    margin-top: 1.1rem;
    float right
    width: 7.8rem;
    box-sizing border-box
    padding: .4rem .4rem .28rem;
    height 16rem
    overflow hidden
    top-border-1px(rgba(0, 0, 0, .15))
    .banner
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px;
      .cnt
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        color: #fff;
        width 100%
        height 100%

    .cateList
      float left
      overflow hidden
      .cateItem
        display: inline-block;
        margin-right: 0.35322rem;
        font-size: 0;
        vertical-align: top;
        .cateListcao
          margin-bottom: .16rem;
          .nima
            width 100%
            padding-bottom: .10667rem;
            margin-bottom: .32rem;
            text-align: left;
            font-size: .37333rem;
            font-weight: 700;
            border-bottom: 1px solid #d9d9d9;
          .uls
            .lis
              display: inline-block;
              margin-right: 0.3rem;
              font-size: 0;
              width: 1.92rem;
              vertical-align: top;
              box-sizing border-box
              .dag
                width: 1.92rem;
                height: 1.92rem;
                .mg
                  width: 1.92rem;
                  height: 1.92rem;
                  display block
              .name
                width: 1.92rem;
                font-size: .32rem;
                text-align: center;
                line-height: .48rem;

        .cateImgWrapper
          width: 1.92rem;
          height: 1.92rem;
          background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png") center no-repeat;
          img
            display: block;
            width: 100%;
            background: #fff;
            height: 100%;
        .name
          display block
          height: .96rem;
          width: 1.92rem;
          font-size: .32rem;
          text-align: center;
          line-height: .48rem;


</style>
