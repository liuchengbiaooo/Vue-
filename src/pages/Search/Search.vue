<template>
  <div>
    <div class="wrap">
      <div class="input">
        <div class="icon"></div>
        <input class="txt" placeholder="升级款双宫茧桑蚕丝被 子母被 低至87折" v-model="search" @focus="isShow=true" @keydown.13="handleSearch">
      </div>
      <div class="undate" @click="$router.replace('/homePage')">
        取消
      </div>
    </div>

    <div v-if="searchs">
      <ul class="Mlist" v-if="this.isShow && this.searchs.length>0">
        <li class="down" v-for="(search,index) in searchs" :key="index">{{search}}</li>
      </ul>
    </div>

    <!--还有一个判断-->
   <!-- <div class="initList" v-if="this.searchs=='' && searchinit.hotKeywordVOList && searchgoodList!=='' ">
      <span>热门搜索</span>
      <ul>
        <li v-for="(keyword,index) in searchinit.hotKeywordVOList" :class="{highlight:keyword.highlight}" :key="index">
          <a :href="keyword.schemeUrl">
            {{keyword.keyword}}
          </a>
        </li>
      </ul>
    </div>-->

    <div v-if="searchgoodList">
      <div class="Shangpin">
        <div class="Neibie">
          <span>综合</span>
          <span>价格</span>
          <span>分类</span>
        </div>
        <ul class="List">
          <li class="Lis" v-for="(goods,index) in searchgoodList" :key="index">
            <img :src="goods.listPicUrl" class="imgs">
            <span class="txt">{{goods.name}}</span>
            <span class="mani">￥{{goods.retailPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "search",
    mounted(){
      this.$nextTick(()=>{
        this.$store.dispatch("getSearchInit")
      })
    },
    data(){
      return{
        search:"",
        isShow:false
      }
    },
    computed:{
      ...mapState(["searchs","searchinit","searchgoods"]),
      searchgoodList(){
        if(this.searchgoods){
          return this.searchgoods.directlyList
        }
      }
    },
    watch:{
      search(){
        //延迟3毫秒发请求
        setTimeout(()=>{
          this.$nextTick(()=>{
            console.log(this.search)
             this.$store.dispatch("getSearchResult",{keywordPrefix:this.search})
          })
        },300)
      }
    },
    methods:{
      handleSearch(){
        this.$store.dispatch("getSearchGoods",{keyword:this.search});
        this.search=''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    margin-top 0.2rem
    width 100%
    display flex
    position 0 .4rem
    justify-content space-between
    .input
      height 0.74rem
      line-height 0.4rem
      display flex
      justify-content space-between
      font-size .37333rem
      margin-left 0.5rem
      width 8rem
      background-color #f4f4f4
      .icon
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
        width .37333rem
        height .37333rem
        background-repeat no-repeat
        background-size 100%
        margin-right 0.4rem
        position relative
        top 0.17rem
        margin-left 0.25rem
      .txt
        flex 1
        background-color #f4f4f4
        outline:none;
    .undate
      font-size 0.4rem
      height 0.74rem
      line-height 0.74rem
      margin-right 0.3rem
  .Mlist
    width 100%
    margin-top 0.2rem
    .down
      margin-left 0.520rem
      display block
      width 100%
      height 1.2rem
      border-top 1px solid #f4f4f4
      line-height 1.2rem
      font-size 0.38rem

  .initList
    padding: 0.3rem 0.3rem;
    background-color: #fff;
    overflow: hidden;
    ul
      margin-right: -0.3rem;
      margin-bottom: -0.32rem;
      width 100%
      display flex
      justify-content flex-start
      flex-wrap wrap
      font-size 0.24rem
      li
        padding: 0 0.15rem;
        flex-shrink 0
        margin-right: 0.32rem;
        margin-bottom: 0.32rem;
        line-height: 0.46rem;
        border: 0.01rem solid #999;
        border-radius: 0.04rem;
        color: #333;
        &.highlight
          border-color: #b4282d;
          color: #b4282d!important;
  .Shangpin
    width 100%
    .Neibie
      width 100%
      display flex
      height 1.2rem
      text-align center
      line-height 1.2rem
      justify-content space-evenly
      >span
        display inline-block
        height 1.2rem
        font-size 0.4520rem
    .List
      width 100%
      display flex
      flex-flow row wrap
      .Lis
        width 45%
        margin 0 0.2rem
        .imgs
          width 100%
          background-color #f4f4f4
        .txt
          width 100%
          display block
          font-size 0.4rem
        .mani
          font-size 0.4rem
          color red

</style>
