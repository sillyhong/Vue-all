import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'
import category from '@/components/common/category'
import shop from '@/components/common/shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    },{
      path:'/shop',
      component: shop
    },{
    path:'/category',
      component: category
    }
  ]
})
