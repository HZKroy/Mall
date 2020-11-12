export default{
      // addCart(state,payload){
    //   let oldProduct=null
    //   // for(let item of state.cartList){
    //   //   if(item.iid===payload.iid){
    //   //     oldProduct=item
    //   //   }
    //   // }
    //   oldProduct=state.cartList.find(item=>(
    //     item.iid===payload.iid
    //   ))
    //   if(oldProduct){
    //     oldProduct.count+=1
    //   }else{
    //     payload.count=1
    //     state.cartList.push(payload)
    //   }
    //   state.cartList.push(payload)
    // }
    addCounter(state,payload){
      payload.count++
      payload.checked=false
    },
    addToCart(state,payload){ 
      state.cartList.push(payload)
    }
}