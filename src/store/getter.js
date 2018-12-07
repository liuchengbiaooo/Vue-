export default {
  groomList(state) {
    var arr = []
    const {generalthings, generalthinglist} = state
    generalthings.forEach((general,index)=>{
      arr=arr.concat(general.topics)
    })
    generalthinglist.forEach((generalthing,index)=>{
      arr=arr.concat(generalthing.topics)
    })
    console.log('+++',arr)
    return arr
  }
}
