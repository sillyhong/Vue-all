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
