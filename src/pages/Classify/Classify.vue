<template>
    <div>
      <div class="m-itemCateListHd">
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19971款好物</span>
        </div>
      </div>
      <div>
        <div class="m-cateNavVertWrap">
          <ul class="m-cateNavVert">
            <li class="item active"> <!--.active-->
               <a href="#" class="txt">
                 12.12专区
               </a>
            </li>
            <li class="item"> <!--.active-->
              <a href="#" class="txt">
                12.12专区
              </a>
            </li>
            <li class="item"> <!--.active-->
              <a href="#" class="txt">
                12.12专区
              </a>
            </li>
            <li class="item"> <!--.active-->
              <a href="#" class="txt">
                12.12专区
              </a>
            </li>
            <li class="item"> <!--.active-->
              <a href="#" class="txt">
                12.12专区
              </a>
            </li>
            <li class="item"> <!--.active-->
              <a href="#" class="txt">
                12.12专区
              </a>
            </li>
          </ul>
        </div>
        <div class="m-subCateList">
          <div class="banner" style="background-image: url(http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75)">
            <div class="cnt"></div>
          </div>
          <div class="cateList">
            <ul class="list">
              <li class="cateItem">
                <div class="cateImgWrapper">
                  <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144"/>
                </div>
                <div class="name">
                  三石福利价
                </div>
              </li>
              <li class="cateItem">
                <div class="cateImgWrapper">
                  <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144"/>
                </div>
                <div class="name">
                  三石福利价
                </div>
              </li>
              <li class="cateItem">
                <div class="cateImgWrapper">
                  <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144"/>
                </div>
                <div class="name">
                  三石福利价
                </div>
              </li>
              <li class="cateItem">
                <div class="cateImgWrapper">
                  <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144"/>
                </div>
                <div class="name">
                  三石福利价
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "classify"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-itemCateListHd
    align-items: center;
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color: #fff;
    position: relative;
    display flex
    justify-content center
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
    top: 1.17333rem;
    bottom: 0;
    z-index: 4;
    width: 2.16rem;
    background-color: #fff;
    position fixed
    border-top
    top-border-1px(rgba(0,0,0,.15))
    border-right 1px solid rgba(0,0,0,.15)
    .m-cateNavVert
      padding-bottom: 1.84rem;
      padding: .53333rem 0;
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
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem;
      top-border-1px(rgba(0,0,0,.15))
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
        .cateItem
          display: inline-block;
          margin-right: 0.35322rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;
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
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;

</style>
