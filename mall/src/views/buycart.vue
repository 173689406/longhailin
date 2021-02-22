<template>
    <div>
        <h3>购物车</h3>
        <div class="info">
        <span>30天无忧退货</span>
        <span>24小时快速退款</span>
        <span>满88免邮费</span>
        </div>
        <div class="list">
            <van-checkbox-group v-model="result" ref="checkboxGroup">
            <div class="cartItem" v-for="(item,index) in cartlist" :key="index" >  
                <van-checkbox  ref="checkboxGroup" :name="item.pro">
                </van-checkbox>
                 <van-card
                num="2"
                tag="标签"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
                />
            </div>
            </van-checkbox-group>
            
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-button type="primary" @click="checkAll">全选</van-button>
            <van-button type="info" @click="toggleAll">反选</van-button>
            </van-submit-bar>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            result: [],
            checked: true,
            cartlist:[
                {pro:"手机",title:"标签1",id:1},
                {pro:"电脑",title:"标签2",id:2},
                {pro:"居家",title:"标签3",id:3},
                {pro:"旅行",title:"标签4",id:4},
            ]
        }
    },
    methods:{
         onSubmit(){

         },
          checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    }
}
</script>
<style scoped>
.checkbox{
    width:100%
}
.info{
    display:flex;
    justify-content: space-around;
    line-height: 24px;
    height:24px;
    color:#999;

}
.cartItem{
    display:flex;
    align-content: center;
}
.van-card{
    width:100%;
}
</style>