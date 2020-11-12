<template>
    <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item.value" class="title.item" :class="{active:index==currentIndex}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </navbar>
    <h2>详情页</h2>
    <h3>{{iid}}</h3>
  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/Navbar'

  export default {
    name:'DetailNavbar',
    components:{
      Navbar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex=index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$route.go(-1)
      }
    }
  }
</script>

<style scoped>
.title{
  display: flex;

}
.title-item{
  flex:1;
}
.active{
  color: red;
}
.back img{
  margin-top: 10px;
}

</style>