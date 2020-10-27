<template>
  <div id="homepage">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <home-swiper :bannersList="bannersList"></home-swiper>
    <recommend-view  :recommendsList="recommendsList"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']"  class="tab-control"></tab-control>
    <goods-list></goods-list>
    <ul>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
      <li>100*</li>
    </ul>
  </div>
</template>

<script>
  
  import HomeSwiper from 'views/homepage/childrenComponents/HomeSwiper'
  import RecommendView from 'views/homepage/childrenComponents/RecommendView'
  import FeatureView from 'views/homepage/childrenComponents/FeatureView'

  import Navbar from 'components/common/navbar/Navbar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsListItem from 'components/content/goods/GoodsList'

  import {getHomepageMultidata,getHomepageGoods} from 'network/homepage'

  export default {
    name: "Homepage",
    components:{
      Navbar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return {
        bannersList:[],
        recommendsList:[],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    created(){
      this.getHomepageMultidata()
      this.getHomepageGoods('pop')
      this.getHomepageGoods('news')
      this.getHomepageGoods('sell')
    },
    methods:{
      getHomepageMultidata(){
        getHomepageMultidata().then(res=>{
          console.log(res)
          this.bannersList=res.data.banner.list
          this.recommendsList=res.data.recommend.list
        })
      },
      getHomepageGoods(type){
        const page=this.goods[type].page+1
        getHomepageGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      }
    }
  }
</script>

<style scoped>
#homepage{
  padding-top: 44px;
}

.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  position:sticky;
  top: 44px;
}
</style>
