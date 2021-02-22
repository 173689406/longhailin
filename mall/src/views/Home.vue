<template>
  <div class="home">
    <!-- 搜索栏 search搜索栏-->
    <van-search v-model="value" placeholder="商品搜索" />
    <!--轮播 swipe轮播-->
<van-swipe :autoplay="3000" :width='750' :height='200'>
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" width='375' height='200'/>
  </van-swipe-item>
</van-swipe>
<!-- 4个图标 -->
<van-grid>
  <!-- <img src="../assets/123.jpg" alt="" width="100" height="50"> -->
  <van-grid-item icon="https://img01.yzcdn.cn/vant/apple-1.jpg" text="图片1" />
  <van-grid-item icon="https://img01.yzcdn.cn/vant/apple-2.jpg" text="文字" />
  <van-grid-item icon="../assets/123.jpg" text="文字" />
  <van-grid-item icon="photo" text="文字" />
</van-grid>
<!-- 品牌制造商直供 panel面板加grid宫格-->
<van-panel title="品牌制造商直供">
<van-grid :border="false" :column-num="3">
  <van-grid-item v-for="(item,index) in images" :key="index" v-lazy="item" >
    <h4 class='title'>{{msg}}</h4>
    <p class='price'>{{price}}元起</p>
    <van-image :src="item" />
  </van-grid-item>
</van-grid>
</van-panel>
<!-- 人气推荐 card商品卡片-->
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
<van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  origin-price="10.00"
/>
<!-- 底部导航标签栏 -->
<tabBtn></tabBtn>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import api from '../assets/config/api.js'
import Vue from 'vue';
import { Lazyload } from 'vant';
import tabBtn from '@/components/tabBtn.vue'

Vue.use(Lazyload);

export default {
  data() {
    return {
      value: '',
      images: [
        'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg',
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg&refer=http%3A%2F%2Fa4.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616295441&t=d8622759e7fdf375cdf1b38057bc7944',
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
        'https://img01.yzcdn.cn/vant/apple-3.jpg'
      ],
      msg:"手机",
      price:4,
    };
  },
  computed:{
    
  },
  components:{
    tabBtn
  },
  async mounted(){
    // console.log(api)
    // let res = await axios.get(api.IndexUrl)
    // console.log(res.date)

  }
}

</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .title{
    position:absolute;
    top:30px;
    left:10px;
    z-index:1
  }
  .price{
    position:absolute;
    top:60px;
    left:10px;
    z-index:1;
  }
</style>
