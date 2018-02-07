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
    }
  }
</script>

<style scoped>

</style>
