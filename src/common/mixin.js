import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'
import {BACK_POSITION} from 'common/const'
export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.scroll.refresh,100)
    this.itemImgListener = ()=>{
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad',itemImgListener)
  }
}
export const backTopMixin={
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false
    }
  },
  methods:{
    backTop(){
      this.refs.Scroll.ScrollTo(0,0,500)
    }
  }
}