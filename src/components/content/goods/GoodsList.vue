<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :key="item.value" :goodsItem="item"></goods-list-item>
    {{goods}}
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default{
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goodsList{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
