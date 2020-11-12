<template>
  <div class="toast">
    <div>{{message}}</div>
  </div>
</template>
<script>
  export default {
    name:'Toast',
    components:{

    },
    props:{
      message:{
        type:String,
        default(){
          return ''
        }
      }
    },
    data(){
      return {
        
      }
    },
    methods:{
     
    }
  }
</script>

<style scoped>
.toast{
  position:fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);

  padding: 8px 10px;
  color: white;
  background-color:rgba(0,0,0,0.7);
}
</style>