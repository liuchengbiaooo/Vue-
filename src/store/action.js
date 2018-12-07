import {
  RECEIVE_CATELIST,
  RECEIVE_BIGPROMOTION,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_SHOPPING,
  RECEIVE_CATEGORY,
  RECEIVE_PERSONAL,
  RECEIVE_GETTABS,
  RECEIVE_GENERALTHINGS,
  RECEIVE_GENERALTHINGLIST
} from "./mutation-types"


import {
  reqCatelist,
  reqPolicydesclist,
  reqKingkongmodule,
  reqShopping,
  reqNewitemlist,
  reqBigpromotion,
  reqCategory,
  reqPersonal,
  reqGeneralThings,
  reqGetTabs,
  reqGeneralThingList
} from "../api/index"


export default {
   //获取推荐信息
  async getCatelist({commit}){
    const result = await reqCatelist()
    if(result.code===0){
      const catelist = result.data
      commit(RECEIVE_CATELIST,{catelist})
    }
  },

  //退货，退款
  async getPolicydesclist({commit}){
    const result = await reqPolicydesclist()
    if(result.code===0){
      const policydesclist = result.data
      commit(RECEIVE_POLICYDESCLIST,{policydesclist})
    }
  },

  //居家鞋包服装10个
  async getKingkongmodule({commit}){
    const result = await reqKingkongmodule()
    if(result.code===0){
      const kingkong = result.data
      commit(RECEIVE_KINGKONGMODULE,{kingkong})
    }
  },
 // 四个爱吃社
  async getShopping({commit}){
    const result = await reqShopping()
    if(result.code===0){
      const shopping = result.data
      commit(RECEIVE_SHOPPING,{shopping})
    }
  },
  //新品首发 大米 牛奶
  async getNewitemlist({commit}){
    const result = await reqNewitemlist()
    if(result.code===0){
      const newitemlist = result.data
      commit(RECEIVE_NEWITEMLIST,{newitemlist})
    }
  },

  //限时
  async getBigpromotion({commit}){
    const result = await reqBigpromotion()
    if(result.code===0){
      const bigpromotion = result.data
      commit(RECEIVE_BIGPROMOTION,{bigpromotion})
    }
  },

 // 第二页分类
  async getCategory({commit},fn){
    const result = await reqCategory()
    if(result.code===0){
      const category = result.data
      commit(RECEIVE_CATEGORY,{category})
      fn.typeof === "function" &&  fn()
    }
  },

// 三个轮播
  async getPersonal({commit}){
    const result = await reqPersonal()
    if(result.code===0){
      const personal = result.data
      commit(RECEIVE_PERSONAL,{personal})
    }
  },

  //识物数据

  async getGeneralThings({commit}){
    const result = await reqGeneralThings()
    if(result.code==='200'){
      const generalthings = result.data
      commit(RECEIVE_GENERALTHINGS,{generalthings})
    }
  },

  //识物上的列表
  async getGetTabs({commit}){
    const result = await reqGetTabs()
    if(result.code==='200'){
      const gettabs = result.data
      commit(RECEIVE_GETTABS,{gettabs})
    }
  },

//识物上的更新
  /*GeneralThingList*/
  async getGeneralThingList({commit}){
    const result = await reqGeneralThingList()
    if(result.code==='200'){
      const generalthinglist = result.data.result
      commit(RECEIVE_GENERALTHINGLIST,{generalthinglist})
    }
  },

}

