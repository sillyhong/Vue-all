<template>
  <div class="class">
    <h1>{{ msg }}</h1>
    <p> newsID: {{ $route.params.newsId}}</p>
    <p> newsTitle: {{  $route.params.newsTitle }}</p>
    <router-view></router-view>

  </div>
</template>

<script type="text/ecmascript-6">
  export  default {
    name: 'hi',
    data(){
      return {
        msg: 'hi, i am params 页面'
      }
    },
    //貌似两个钩子函数只能触发其中一个
    beforeRouteEnter(to, from, next){
      console.log('即将进入路由')
      next()
    },
    beforeRouteLeave(to, from, next){
      console.log('即将离开路由')
      next()
    }
  }
</script>

<style scoped>

</style>
