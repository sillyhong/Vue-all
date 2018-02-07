<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--第二节，配置路由-->
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <!--<router-link :to="{name: 'hi1', params:{username:'weihong', id: 888}}">Hi1页面</router-link>-->
      <!--<router-link to="/hi2">Hi2页面</router-link>-->
    </p>

    <!--第三节，通过name传递路由参数-->
    <!--<p>{{ $route.name}}</p>-->


    <!--模板将会显示到router-view上面-->
    <!--第四节，单页面多路由操作-->
    <router-view ></router-view>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>


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
