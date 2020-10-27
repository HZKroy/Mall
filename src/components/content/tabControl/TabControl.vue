<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" :key="item" class="tabControlItem" :class="{active: index==currentIndex}"  @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    font-size: 14px;
     background-color: #fff;  }
  .tabControlItem{
    flex: 1;
    height:40px;
    line-height: 40px;
  }
  .active{
    color:red;
  }

</style>
