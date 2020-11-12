<template>
  <div id="homepage">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick()' ref="rabControl1" :class="{fixed:isTabFixed}" class="tabControl1" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3"  @scroll="contentScroll"  :pull-up-load="true"  @pullingUp="loadMore">
    <home-swiper :bannersList="bannersList"></home-swiper>
    <recommend-view  :recommendsList="recommendsList"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick()' ref="rabControl2" :class="{fixed:isTabFixed}"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top> 
    <!-- 监听组件的原生事件时，需要加上.native修饰 -->
    
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
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomepageMultidata,getHomepageGoods} from 'network/homepage'
  import {itemListenerMixin} from 'common/mixin'

  export default {
    name: "Homepage",
    components:{
      Navbar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    mixins:[itemListenerMixin],
    data(){
      return {
        bannersList:[],
        recommendsList:[],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:this.$refs.scroll.scroll.y,
        itemImgListener:null
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      this.getHomepageMultidata()
      this.getHomepageGoods('pop')
      this.getHomepageGoods('news')
      this.getHomepageGoods('sell')
    },
    mounted(){
      this.tabClick(0)
    },
    actived(){
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
      this.refs.scroll.refresh()
    },
    deactived(){
      this.saveY=this.$refs.scroll.getCurrentY()
      this.$bus.off('itemImgload',this.itemImgListener)
    },
    methods:{
      debounce(func,delay){
        let timer=null
        return function(...args){
          if(timer){
            clearTimeout(timer)
          }
          timer=setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },
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

          this.$ref.scroll.scroll.finishPullUp()
        })
      },
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='news'
            break
          case 2:
            this.currentType='sell'
            break
        }
        this.$refs.TabControl1.currentIndex=index
        this.$refs.TabControl2.currentIndex=index
      },
      BackTopClick(){
        this.$ref.scroll.scroll.scrollTo(0,0,500)
        console.log('111')
      },
      contentScroll(position){
        this.isShowBackTop=-position.y>1000
        this.isTabFixed=(-position.y)>this.tabOffsetTop
      },
      loadMore(){
        this.getHomepageGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
      },
      swiperImageLoad(){
        this.tabOffsetTop=$refs.tabControl2.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
#homepage{
  padding-top: 44px;
  height: 100vh;
}

.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.content{
  /* height: calc(100%-93px); */
  overflow: hidden;
  position: relative;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}

.fixed{
  position:fixed;
  left:0;
  right:0;
  top:44px;
}
.tabControl1{
  position: relative;
  z-index: 9;
}
</style>
