<template>
  <swiper>
      <!-- v-for时，必须设置一个key -->
      <swiper-item v-for="item in bannersList" :key="item.value">  
        <a :href="item.link">
          <img :src="item.image" alt="">
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
    }
  }
</script>