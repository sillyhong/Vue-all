import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)  //全局使用Router

// export default new Router({
//   routes: [                    //配置路由，这里是个数组
//     {                          //每个链接是一个对象
//       path: '/',               //连接路径
//       name: 'HelloWorld',      //路由名称
//       components: HelloWorld             //对应路由的组建模板,将会显示在router-view上
//     },{
//       path: '/hi',
//       component: Hi,
//       children:[              //配置在路由 这里也是一个数组
//         {path:'/', name:'hi', component: Hi},
//         {path:'/hi1', name:'hi1', component: Hi1},
//         {path:'/hi2', name:'hi2', component: Hi2}
//       ]
//     }
//   ]
// })

//第四节,单页面多路由区域配置
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },{
      path: '/Hi',
      components: {
        default:HelloWorld,
        left:Hi2,
        right:Hi1
      }
    }

  ]
})
