<template>
    <!-- 底部导航标签栏 -->
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
  <van-tabbar-item icon="search">专题</van-tabbar-item>
  <van-tabbar-item icon="coupon" to='./category'>分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
    data(){
        return {
            active:0
        }
   },
}
</script>