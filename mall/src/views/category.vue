<template>
<div>
    <h1>分类页面</h1>
    <!-- 搜索栏 search搜索栏-->
    <van-search v-model="value" placeholder="商品搜索" />
    <!-- 分类产品 -->
<van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
  <template #content>
      <img width='300' src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w%3d580/sign=76ba00b1be096b6381195e583c318733/28a3b451f81986184a86281a4aed2e7389d4e6a0.jpg" alt="">
    <van-grid :column-num="3">
  <van-grid-item v-for="(item,index) in photo" :key="index" :icon="item.img" :text="item.text" :to="'/categorylist/' + item.id"/>
</van-grid>
  </template>
</van-tree-select>
    <!-- <tabBtn></tabBtn> -->
    <van-tabbar v-model="barActive">
  <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
  <van-tabbar-item icon="search">专题</van-tabbar-item>
  <van-tabbar-item icon="coupon" to='./category'>分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
import tabBtn from "@/components/tabBtn"
export default {
    data(){
        return {
            barActive:2,
            value:'',
            items:[{ text: '分组 1' }, { text: '分组 2' }, { text: '分组 3' }, { text: '分组 4' }, { text: '分组 5' }],
            active: 0,
            photo:[{id:0,text:"文字1",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs7.sinaimg.cn%2Fbmiddle%2F60ee77c5t6ea3a2c6dd46%26690&refer=http%3A%2F%2Fs7.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616337777&t=dd30d70b533db752f151ab22df7ad489"},
                {id:1,text:"文字2",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F08%2F22%2F01300000242726125670225939875.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616337777&t=32dd94f68666447d94444c86c74d9026"},
                {id:2,text:"文字3",img:"https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w%3d580/sign=76ba00b1be096b6381195e583c318733/28a3b451f81986184a86281a4aed2e7389d4e6a0.jpg"}
            ]
        }
    },
    components:{
        tabBtn
    }
}
</script>