import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import params from '@/components/params'
import Hi from '@/components/Hi'
import Error from '@/components/Error'

Vue.use(Router)  //全局使用Router

//第四节,单页面多路由区域配置
export default new Router({
  mode: 'history',                   //没有#hash符号 另外一种mode: 'hash'
  routes: [                          //配置路由，这里是个数组
    {                                //每个链接是一个对象
      path: '/',                     //连接路径
      component: home,               //路由名称
      alias:'/home'
    },{
    //加入正则需要以圆括号的形式加入 d+只能填入数字
      path:'/params/:newsId(\\d+)/:newsTitle',
      component: params
      // beforeEnter(to, from, next){
      //   console.log(to);
      //   console.log(from);
      //   // next(false)
      //   next(true)
      // }
    },{
    //第6节 重定向redirect
      path:'/gohome',
      redirect: '/'
    },{
    //重定向传值,
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },{
    //alias别名
      path:'/hi',
      component: Hi,
      alias: '/jspang'
    },{
    //第九节，404页面
      path:'*',
      component: Error
    }
  ]
})
