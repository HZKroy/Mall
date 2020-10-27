<template>
  <div class="goodsListItem">
    <goods-list-item v-for="item in goods"  :key="item.value" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
