<template>
  <Tabbar>
    <TabbarItem path="/homepage" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">主页</div>
    </TabbarItem>
    <TabbarItem path="/cate">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabbarItem>   
    <TabbarItem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabbarItem>  
    <TabbarItem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/tabbarItem'
export default ({
  name:'MainTabbar',
  components:{
    Tabbar,
    TabbarItem
  }
})
</script>

<style scoped>

</style>