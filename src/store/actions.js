export default{
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct=null
      oldProduct=context.state.cartList.find(item=>(
        item.iid===payload.iid
      ))
      if(oldProduct){
        context.commit('addCounter',oldProduct)
        resolve()
      }else{
        payload.count=1
        context.commit('addToCart',payload)
        reject()
      }
    })
  }
}