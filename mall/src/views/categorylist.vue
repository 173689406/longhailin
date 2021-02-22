<template>
    <div>
        <h4>分类列表详情</h4>
        <van-tabs v-model="activeName" >
            <van-tab :title="item.title"  v-for="(item,index) in list" :key="index">
                <h2>{{item.pro}}</h2>
                <van-grid :border="false" :column-num="3">
                <van-grid-item v-for="(item1,index1) in pic" :key="index1" v-lazy="item1" to="/product/' + item1.id">
                    <van-image :src="item1" />
                    <h4 class="title1">纯棉</h4>
                    <p class="price1">￥100</p>
                </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    props:["id"],
    data(){
        return {
            activeName:'0',

            list:[
                {pro:"手机",title:"标签1",id:1},
                {pro:"电脑",title:"标签2",id:2},
                {pro:"居家",title:"标签3",id:3},
                {pro:"旅行",title:"标签4",id:4},
                {pro:"手机",title:"标签1",id:5},
                {pro:"电脑",title:"标签2"},
                {pro:"居家",title:"标签3"},
                {pro:"旅行",title:"标签4"},
                {pro:"手机",title:"标签1"},
                {pro:"电脑",title:"标签2"},
                {pro:"居家",title:"标签3"},
                {pro:"旅行",title:"标签4"},
            ],
            pic:[
                'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa3.att.hudong.com%2F03%2F88%2F01300000400534127693880874175.jpg&refer=http%3A%2F%2Fa3.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616295442&t=7d569ea487533080fa275d005c5fbb5e',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg&refer=http%3A%2F%2Fa4.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616295441&t=d8622759e7fdf375cdf1b38057bc7944',
                "https://img01.yzcdn.cn/vant/apple-1.jpg",
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-3.jpg'
            ]
        }
    },
    created(){
        // console.log(this.id)
    }
}
</script>
<style>
.title1{
    /* position:absolute; */
    padding:0 10px;
    box-sizing:border-box;
    top:130px;
}
.price1{
    color:red;
    position:absolute;
    top:200px;
    
}
</style>