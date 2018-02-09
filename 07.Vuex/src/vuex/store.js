
import Vue from 'vue';
import Vuex from 'vuex';
//vue引入vuex
Vue.use(Vuex);

const state = {
  count: 1
}


const mutations={
  add(state, num){
    state.count　+= num;
  },
  reduce(state){
    state.count--;
  }
}

const getters = {
  count:function(state){
    return state.count +=100;
  }
}

const actions ={
  //content上下文 可以理解为store本身
  addAction(context){
    context.commit('add',10)

    setTimeout(()=>{context.commit('reduce')},1000);
    console.log('我比reduce提前执行');
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

const moduleA = {
    state,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  modules: {a: moduleA}
})


// export default new Vuex.Store({
//   state,
//   mutations,
//   getters,
//   actions
//
// })
