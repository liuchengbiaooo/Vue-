import {
  RECEIVE_CATELIST,
  RECEIVE_BIGPROMOTION,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_SHOPPING,
  RECEIVE_CATEGORY
} from "./mutation-types"


import {
  reqCatelist,
  reqPolicydesclist,
  reqKingkongmodule,
  reqShopping,
  reqNewitemlist,
  reqBigpromotion,
  reqCategory
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
  //三个图 轮播
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

}

