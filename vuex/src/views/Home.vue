<template>
  <div class="home">
    <h1>点击数量:{{count}}</h1>
    <button @click="addEvent">点击</button>
    <!-- vuex的方式 -->
    <h1>点击数量:{{$store.state.Num}}</h1>
    <button @click="commitEvent">点击</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      count:0
    }
  },
  methods:{
    addEvent:function(){
      this.count++
    },
    //使用vuex共享数据时，不混乱，可以随时看到是哪个action在修改数据
    commitEvent:function(){
      this.$store.commit('addNum')
    }
  }
}
</script>
