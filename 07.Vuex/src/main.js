// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//第一节 初始Vuex
//第二节 state访问状态对象的三种方法 ①$store.state.count  ②计算选项comuted: count => store.state.count ③mapState(['count'])
//第三节 mutations修改状态
//第四节 getters计算过滤操作
//第五节 action异步修改状态
//第六节 modele模块组


