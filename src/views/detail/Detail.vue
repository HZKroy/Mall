<template>
<div id="detail" class="detail">
  <detail-navbar @titleClick="titleClick" ref="nav"></detail-navbar>
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
    <detail-swiper></detail-swiper>
    <detail-base-info :goods="goodsInfo"></detail-base-info>
    <detail-shop-info  :shop="shopInfo"></detail-shop-info>
    <detail-image-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-image-info>
    <detail-params-info :paramInfo="itemParams"></detail-params-info>
    <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends"></goods-list>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </scroll>

</div>


</template>
<script>
  import detailNavbar from './childComponents/detailNavbar'
  import {getDetail,Goods,getRecommend} from 'network/detail'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailImageInfo from './childComponents/DetailImageInfo'
  import DetailParamsInfo from './childComponents/DetailParamsInfo'
  import DetailCommentInfo from './childComponents/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodsList/'
  import {debounce} from '@/commom/utils'
  import {itemListeneMixin,backTopMixin} from '@/common/mixin'
  import DetailBottomBar from'./childComponents/DetailBottomBar'
  import BackTop from 'components/content/backTop/BackTop'
  import {BACK_POSITION} from 'common/const'

 

  export default {
    name: "Detail",
    components:{
      DetailNavbar,
      DetailSwiper,
      DetailBaseInfo,
      Scroll,
      DetailImageInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar,
      backTop
    },
    mixins:[itemListeneMixin,backTopMixin],
    data(){
      return {
        iid:null,
        topImages:[],
        goods:null,
        shopInfo:{},
        detailInfo:{},
        itemParams:{},
        commentInfo: {},
        recommends:[],
        themeTopYs:[],
        getThemeTopYs:null,
        currentIndex:0,
        isShowBackTop:false
      }
    },
    created(){  //不能获取元素
      this.iid=this.$route.params.iid
      getDetail(this.iid).then(res=>{
        const data=res.result
        this.topImages=data.itemInfo.topImages
        this.goods=new Goods(data.itemInfo,data.colnmn,data.shopInfo.services)
        this.shopInfo=data.shopInfo
        this.detailInfo=data.detailInfo
        this.itemParams=data.itemParams
        if (data.rate.list) {
		        this.commentInfo = data.rate.list[0];
	        }
      })
      getRecommend().then(res=>{
        this.recommends=res.data.list
      }),
      this.getThemeTopYs=debounce(()=>{
        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      })
    },
    mounted(){ //数据还没有获取到
      
    },
    updated(){
      // this.$nextTick(()=>{
      //   this.themeTopYs=[]
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // })
      //图片没有加载完全  页面高度不对
    },
    destroyed(){
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    methods:{
      detailImageLoad(){
        this.$refs.Scroll.scroll.refresh()
        getThemeTopYs()
      },
      titleClick(index){
        this.refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        const positionY=-position.y
        let length =this.themeTopYs.length
        for(let i =0;i<length;i++){
          if(this.currentIndex!==i&&((i<length-1&&positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i)+1])||(i==length-1))){
            this.currentIndex=i
            this.$refs.nav.currentIndex=this.currentIndex
          }
        }
      },
      BackTop(){
        this.$ref.scroll.scroll.scrollTo(0,0,500)
      },
      addToCart(){
        const product={}
        product.image=this.topimage[0]
        product.title=this.goodsInfo.title
        product.desc=this.goodsInfo.desc
        product.price=this.goodsInfo.newPrice
        product.iid=this.goodsInfo.iid

        // this.$store.commit('addCart',product)
        this.$store.dispatch('addcart',product).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
.detail{
  height:100px;
  background-color: red;
}
.content{
  background-color:#fff;
  height: calc(100% - 44px- 49px);
}
</style>
