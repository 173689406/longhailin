<template>
    <div>
        <h1>名字:{{name}}</h1>
        <h1>数字:{{Num}}</h1>
        <h1>mapState年龄:{{age}}</h1>
        <h1>年龄{{$store.state.age}}</h1>
        <input type="text" v-model="Num">
        mapState数据双向绑定<input type="text" :value="Num" @input="changevalue">
    </div>
</template>
<script>
//state在组件中的运用
//将想要用到的全局stata数据，放置到组建的computed内使用，v-model将其内容获取和设置分开
import { mapState } from "vuex"
export default {
    computed:mapState(['Num','age','name']),
    methods:{
        changevalue:function(e){
            this.$store.commit('setNum',e.target.value)
        }
    }
}
</script>