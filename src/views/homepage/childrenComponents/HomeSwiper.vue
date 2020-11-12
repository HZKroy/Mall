<template>
  <swiper>
      <!-- v-for时，必须设置一个key -->
      <swiper-item v-for="item in bannersList" :key="item.value">  
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default{
    name:'HomeSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      bannersList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad=true
      }
    }
  }
</script>