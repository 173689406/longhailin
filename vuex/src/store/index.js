import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建整个项目的数据仓库对象，将多组件公用的数据放置在此对象
export default new Vuex.Store({
  //data
  state: {
    Num:0,
    age:'20岁',
    name:"hello"
  },
  getters:{
    reverseMsg:function(state){
      return state.name.split('').reverse().join('')
    },
    mixinMsg:function(state){
      return function(val){
        return val + state.name
      }
    }
  },
  //methods，在mutations里处理方法
  mutations: {
    addNum(state){
      state.Num+=2
    },
    setNum(state,value){
      state.Num = value
    }
  },
  //异步方法
  actions: {
  },
  //模块
  modules: {
  }
})
