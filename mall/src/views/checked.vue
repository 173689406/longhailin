<template>
    <div>
        <h1>复选框</h1>
        <!--给全选按钮绑定v-mode变量，值为true时就是选中状态，绑定点击事件，执行全选和反选操作-->
      <input type='checkbox'  v-model='checked' @click='checkedAll'>全选
      <div v-for="(item,index) in data1" :key="index">
        <!--给每个复选按钮绑定同一个v-mode数组变量，数组里面有相应的value就被选中-->
        <input type='checkbox' v-model='arr' :value="item.id" @click="fn2()">{{item.value}}
      </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
 
          data1:[{
            id:'1',
            value:'苹果'
          },{
            id:'2',
            value:'荔枝'
          },{
            id:'3',
            value:'香蕉'
          },{
            id:'4',
            value:'火龙果'
          }],
          arr:[],
          checked: false,
        }
 
    },   
 methods:{
      //神奇的setTimeout 伪装异步
      fn2(){
        setTimeout(() => console.log(this.arr))
      },
      checkedAll: function() {
        if (this.checked) {//实现反选
          this.arr = [];
        } else { //实现全选
          this.arr = [];
          this.data1.forEach( (item) => {
            this.arr.push(item.id);
          });
        }
        setTimeout(() => console.log(this.arr))
      }
    },
    watch: { //深度 watcher
      arr: {
        handler: function (val, oldVal) {
          if (this.arr.length === this.data1.length) {
            this.checked=true;
          } else {
            this.checked=false;
          }
        },
        deep: true
      }
 
 
    }
}
</script>