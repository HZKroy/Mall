<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <cart-list></cart-list>
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar' 
  import {mapGetters} from 'vuex'
  import CareList from './childComponents/CartList' 
  export default {
    name: "Cart",
    components:{
      Navbar,
      CartList
    },
    computed:{
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
.cart{
  height:100vh;
}
.navbar{
  background-color: pink;
  color:#fff;
  font-weight: 700;
}
</style>
