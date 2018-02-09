
<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <!--<h3>{{$store.state.count}}  - {{ count }}</h3>-->
    <h3> {{ count }}</h3>


    <!--声明模块组后-->
    <h3>{{ $store.state.a.count }}</h3>

    <div>
      <button @click="$store.commit('add',10)">+</button>
      <!--<button @click="$store.commit('reduce')">-</button>-->
      <button @click="reduce">-</button>
    </div>
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  export default{
    data(){
      return{
        msg:'Hello Vuex',

      }
    },

    store,

      computed:{
        //简写  最常用
        ...mapState(['count']),//展开后会取出对象，所以可以写多个
        ...mapGetters(['count'])

//        count(){
//          return this.$store.state.count
//        },
//
//        count(){
//          return this.$store.getters.count
//        }
      } ,
      methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAction', 'reduceAction'])

      }

//    computed: mapState({
//      count: (state) => state.count
//    })

  }
</script>
