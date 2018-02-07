<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <!--第二节，配置路由-->
    <button @click="goBack">后退</button>
    <button @click="goahead">前进</button>
    <button @click="gohome">回首页</button>
    <p>
      <router-link to="/">home</router-link>
      <router-link to="/params/189/jspang website is very good">params</router-link>
      <router-link to="/gohome">gohome</router-link>
      <router-link to="/goParams/666/I like Web">goParams</router-link>
      <router-link to="/hi">Hi</router-link>
      <router-link to="/jspang">jspang</router-link>
      <!--下面无效 alias不能配置在‘/’根目录下-->
      <router-link to="/home">aliashome</router-link>
      <router-link to="/*">404页面</router-link>
    </p>

    <!--第三节，通过name传递路由参数-->
    <!--<p>{{ $route.name}}</p>-->


    <!--模板将会显示到router-view上面-->
    <!--第四节，单页面多路由操作-->

    <transition name="fade" mode="out-in">
      <router-view ></router-view>
    </transition>


  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    goahead(){
      this.$router.go(1)
    },
    gohome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  /*进入过度的开始状态  元素被插入时生效 只应用一帧后立即删除*/
.fade-enter {
  opacity: 0;
}
/*离开过渡的开始状态 元素被删除时生效 只应用一帧后立即删除*/
.fade-leave {
  opacity: 1;
}
/*进入过渡的结束状态 元素被插入时就生效，在过渡过程完成后移除*/
.fade-enter-active {
  transition: 0.5s;
}

/*离开过渡的结束状态 元素被删除时生效 离开过渡后删除*/
.fade-leave-active {
  transition: 0.5s;
}
</style>
