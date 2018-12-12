import {
  RECEIVE_CATELIST,
  RECEIVE_SHOPPING,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_BIGPROMOTION,
  RECEIVE_CATEGORY,
  RECEIVE_PERSONAL,
  RECEIVE_GETTABS,
  RECEIVE_GENERALTHINGS,
  RECEIVE_GENERALTHINGLIST,
  RECEIVE_SAVEUSER,
  RECEIVE_SEARCHRESULT,
  RECEIVE_SEARCHINIT,
  RECEIVE_SEARCHGOODS
} from "./mutation-types"


export default {
  //获取推荐
   [RECEIVE_CATELIST](state,{catelist}){
     state.catelist = catelist
   },

  //退货，退款
  [RECEIVE_POLICYDESCLIST](state,{policydesclist}){
     state.policydesclist=policydesclist
  },
  //居家鞋包服装10个
  [RECEIVE_KINGKONGMODULE](state,{kingkong}){
     state.kingkong=kingkong
  },
  //四个爱吃社
  [RECEIVE_SHOPPING](state,{shopping}){
     state.shopping=shopping
  },
  //新品首发 大米 牛奶
  [RECEIVE_NEWITEMLIST](state,{newitemlist}){
     state.newitemlist=newitemlist
  },
  //限时
  [RECEIVE_BIGPROMOTION](state,{bigpromotion}){
     state.bigpromotion=bigpromotion
  },
  //第二页分类
  [RECEIVE_CATEGORY](state,{category}){
     state.category=category
  },

  //三个图 轮播
  [RECEIVE_PERSONAL](state,{personal}){
     state.personal = personal
  },

  //识物分类
  [RECEIVE_GETTABS](state,{gettabs}){
     state.gettabs = gettabs
  },

  //识物的数据
  [RECEIVE_GENERALTHINGS](state,{Shilists}){
     let ShiWulist =[]
    Shilists.forEach((list,index)=>{
         ShiWulist = ShiWulist.concat(list.topics)
      })
     console.log(ShiWulist)
     state.generalthings = ShiWulist
  },

  //更新的数据
  [RECEIVE_GENERALTHINGLIST](state,{Shilist}){
    let ShiWulist = []
    Shilist.forEach((list,index)=>{
      ShiWulist = ShiWulist.concat(list.topics)
    })
    console.log(ShiWulist)
    state.generalthings = state.generalthings.concat(ShiWulist)
  },

  //保存用户信息
  [RECEIVE_SAVEUSER](state,{user}){
    state.user = user
  },

  [RECEIVE_SEARCHRESULT](state,{searchs}){
     state.searchs=searchs
  },

  [RECEIVE_SEARCHINIT](state,{searchinit}){
     state.searchinit=searchinit
  },

  [RECEIVE_SEARCHGOODS](state,{searchgoods}){
     state.searchgoods=searchgoods
  }
}
