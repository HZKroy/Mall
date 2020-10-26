<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot> 
      </div>
      
      <!-- <div>首页</div> -->
      <!-- <img src="../../assets/img/tabbar/home.svg" alt=""> -->
    </div>
</template>

<script>
  export default{
    name:'TabbarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        defalut:'red'
      }
    },
    data(){
      return {
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!=-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        // console.log('itemClick')
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    height:24px;
    width:24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active{
    color: red;
  }
</style>
