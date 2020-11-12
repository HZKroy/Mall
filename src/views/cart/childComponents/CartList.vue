<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index)in cartList" :key="index" :itemInfo="item"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
  import {mapgetters} from 'vuex'
  import Scroll from 'components/commomn/scroll/Scroll'
  import CartListItem from './CartListItem'
  export default {
    name:'CartList',
    components:{
      Scroll,
      CartListItem
    },
    props:{

    },
    data(){
      return {
        
      }
    },
    methods:{
     
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$ref.scroll.refresh()
    }
  }
</script>

<style scoped>
.cart-list{
  height: calc(100%-44px)-49px;
}
.content{
  height: 100%;
}
</style>