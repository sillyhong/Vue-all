<template>
  <div class="class">
    <h1>{{ msg }}</h1>
    <!--<h1>{{ msg }} - {{ $route.params.username}} - {{ $route.params.id}}</h1>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export  default {
    name: 'hi',
    data(){
      return {
        msg: 'hi, i am Hi1 页面'
      }
    }
  }
</script>

<style scoped>

</style>
