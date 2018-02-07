// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'         //引入App组件
import router from './router'   //引入router组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//第一节： Vue-router入门
//第二节： Vue-router配置子路由
//第三节： Vue-router传递参数 method1: {{$route.name}} method2: <router-link :to='{name: '',params:{}}'>
//第四节： Vue-router单页面多路由区域操作
//第五节： Vue-router url传递参数
//第六节： Vue-router url redirect重定向  url不发生变化,
//第六节： Vue-router alias 别名      url发生变化，用户知道 自己访问的路径


