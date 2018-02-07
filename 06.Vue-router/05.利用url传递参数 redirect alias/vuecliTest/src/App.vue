<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--第二节，配置路由-->
    <p>
      <router-link to="/">home</router-link>
      <router-link to="/params/189/jspang website is very good">params</router-link>
      <router-link to="/gohome">gohome</router-link>
      <router-link to="/goParams/666/I like Web">goParams</router-link>
      <router-link to="/hi">Hi</router-link>
      <router-link to="/jspang">jspang</router-link>
      <!--下面无效 alias不能配置在‘/’根目录下-->
      <router-link to="/home">alias home</router-link>
    </p>

    <!--第三节，通过name传递路由参数-->
    <!--<p>{{ $route.name}}</p>-->


    <!--模板将会显示到router-view上面-->
    <!--第四节，单页面多路由操作-->
    <router-view ></router-view>


  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
