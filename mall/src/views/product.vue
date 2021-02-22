<template>
    <div>
        <h2>产品页</h2>
        <!-- 商品导航栏 -->
        <van-nav-bar
        title="商品"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"
        
        />
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" class="swipe"/>
        </van-swipe-item>
    </van-swipe>
    <div class="info">
        <span>30天无忧退货</span>
        <span>24小时快速退款</span>
        <span>满88免邮费</span>
    </div>
    <div>
        <span>商品名称</span>
        <p id="price">￥200</p>
    </div>
    <!-- 规格数量，cell单元格 -->
    <!-- 商品参数 -->
    <van-cell-group>
    <van-cell title="商品参数" />
    <van-cell title="尺寸" value="100*100"  />
    <van-cell title="颜色" value="红色"  />
    <van-cell title="材质" value="纯棉"  />
    <van-cell title="产地" value="中国，北京"  />
    <!-- 商品内容 -->
    <img src="https://img01.yzcdn.cn/vant/apple-2.jpg" alt="" class="img">
    </van-cell-group>
    <!-- 商品导航 购物车，立即购买-->
    <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
    <van-goods-action-icon icon="cart-o" text="购物车" :badge="badge" to='/buycart'/>
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" @click='goodsEvent'/>
    <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 选择商品规格，sku选择 -->
    <van-sku
    v-model="show"
    :sku="sku"
    :goods="goods"
    :hide-stock="sku.hide_stock"
    @add-cart="onAddCartClicked"
    />
    </div>
</template>
<script>
let sku = {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    //   项目类名称1
    {
      k: '颜色', // skuKeyName：规格类目名称
      k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
        {
          id: '1', // skuValueId：规格值 id
          name: '黄色', // skuValueName：规格值名称
          imgUrl: 'https://img01.yzcdn.cn/vant/apple-3.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
          previewImgUrl: 'https://img01.yzcdn.cn/vant/apple-3.jpg', // 用于预览显示的规格类目图片
        },
        {
          id: '2',
          name: '蓝色',
          imgUrl: 'https://img01.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img01.yzcdn.cn/2.jpg',
        }
      ],
      largeImageMode: true, //  是否展示大图模式
    },
    // 项目类名称2
     {
      k: '尺寸', // skuKeyName：规格类目名称
      k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
        {
          id: '1', // skuValueId：规格值 id
          name: '黄色', // skuValueName：规格值名称
        },
        {
          id: '2',
          name: '蓝色',
        }
      ],
      largeImageMode: false, //  是否展示大图模式
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 2259, // skuId
      s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
      price: 666, // 价格（单位分）
      stock_num: 888 // 当前 sku 组合对应的库存
    },
    {
      id: 2257, // skuId
      s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
      price: 6600, // 价格（单位分）
      stock_num: 88 // 当前 sku 组合对应的库存
    }
  ],
  price: '666', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
//   messages: [
//     {
//       // 商品留言
//       datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
//       multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
//       name: '留言', // 留言名称
//       type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
//       required: '1', // 是否必填 '1' 表示必填
//       placeholder: '' // 可选值，占位文本
//     }
//   ],
  hide_stock: false // 是否隐藏剩余库存
}

export default {
    props:["id"],
    data(){
        return {
            images:[
                'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa3.att.hudong.com%2F03%2F88%2F01300000400534127693880874175.jpg&refer=http%3A%2F%2Fa3.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616295442&t=7d569ea487533080fa275d005c5fbb5e',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg&refer=http%3A%2F%2Fa4.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616295441&t=d8622759e7fdf375cdf1b38057bc7944',
                "https://img01.yzcdn.cn/vant/apple-1.jpg",
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-3.jpg'
            ],
            badge:0,
            show: false,
            sku: sku,
            goods: {
            // 默认商品 sku 缩略图
            picture: 'https://img01.yzcdn.cn/vant/apple-2.jpg'
            }
        }
    },
    methods: {
        onClickLeft() {
        this.$router.go(-1)
        },
        goodsEvent(){
            this.show = true
            // this.badge1 = 5
        },
        onAddCartClicked(skuData){
            console.log(skuData)//获取选中的商品，添加到后端的api里
            console.log(skuData.selectedNum)
            this.badge = skuData.selectedNum
        }
    
    },
    async created(){
        this.sku.price = 200
    }
}
</script>
<style>
.swipe{
    width:375px;
    height:200px;
}
.info{
    display:flex;
    justify-content: space-around;
    line-height: 24px;
    height:24px;
    color:#999;

}
.info span{
    /* display:block; */
    margin:10 20;
}
#price{
    color:red;
}
.img{
    width:375px;
}
</style>