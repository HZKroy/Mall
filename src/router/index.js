import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Homepage = () => import('views/homepage/Homepage')
const Cate = () => import('views/cate/Cate')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: Homepage
    },
    {
      path: '/cate',
      component: Cate
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail',
      component: Detail
    }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
