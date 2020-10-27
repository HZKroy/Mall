import {request} from './request'
export function getHomepageMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomepageGoods(type,page){
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })
}