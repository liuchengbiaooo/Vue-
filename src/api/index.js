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

//限时
export const reqBigpromotion = () => ajax('/bigpromotion')

//第二页分类
export const reqCategory = () => ajax('/category')

//三轮播
export const reqPersonal = () => ajax('/personal')

//识物 推究
const BSAE = "/wangyi"
export const reqGeneralThings = () =>ajax(BSAE +'/topic/v1/find/recManual.json');

//识物的列表
export const reqGetTabs = () => ajax(BSAE + '/topic/v1/find/getTabs.json')

//更新识物内容
export const reqGeneralThingList = () => ajax(BSAE + '/topic/v1/find/recAuto.json?page=2&size=5&exceptIds=5507,5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773')


// http://m.you.163.com/topic/v1/find/recAuto.json?page=2&size=5&exceptIds=5507,5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773


