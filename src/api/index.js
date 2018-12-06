import ajax from "./ajax"

//通过mock获得推荐信息
export const reqCatelist = () => ajax('/catelist')

//退货，退款
export const reqPolicydesclist = () => ajax('/policydesclist')

//居家鞋包服装10个
export const reqKingkongmodule = () => ajax('/kingkongmodule')

// 四个爱吃社
export const reqShopping = () => ajax('/shopping')

//新品首发 大米 牛奶
export const reqNewitemlist = () => ajax('/newitemlist')

//三个图 轮播
export const reqBigpromotion = () => ajax('/bigpromotion')

//第二页分类
export const reqCategory = () => ajax('/category')
