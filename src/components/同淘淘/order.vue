<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <el-row type="flex" justify="center" align="center" class="orderPar">
                    <el-col :span="4">
                        <div class="userInfo">
                            <img src="../../assets/tao/userImg.png" alt="">
                            <p>15213280546</p>
                            <router-link to="order">我的订单</router-link>
                            <router-link to="userInfo">账户资料</router-link>
                            <router-link to="userAdress">收货地址</router-link>
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="1">
                        <div class="userOrder">
                            <div class="userOrder_title">
                                <span>我的订单</span>
                                <select>
                                    <option selected>待支付</option>
                                    <option>已支付</option>
                                    <option>已关闭</option>
                                </select>
                            </div>
                            <div class="userOrder_body">
                                <div class="bodyTop">
                                    <span>2019-12-30</span>
                                    <div>订单号：191221419485574</div>
                                    <span>单价</span>
                                    <span>数量</span>
                                    <span>付款金额</span>
                                    <span>待付款</span>
                                </div>
                                <div class="bodyBottom">
                                    <div>
                                        <div>
                                            <div class="bodyBottom_one">
                                                <div class="imgPar">
                                                    <img src="../../assets/tao/order1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="orderDetailsBottomLine">
                                                <div>
                                                    <p>标题名称</p>
                                                    <p>一段假想的简介，这是一段比较长的简介。</p>
                                                </div>
                                                <span>￥129.00</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="bodyBottom_one">
                                                <div class="imgPar">
                                                    <img src="../../assets/tao/order1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="orderDetailsBottomLine">
                                                <div>
                                                    <p>标题名称</p>
                                                    <p>一段假想的简介，这是一段比较长的简介。</p>
                                                </div>
                                                <span>￥129.00</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="bodyBottom_one">
                                                <div class="imgPar">
                                                    <img src="../../assets/tao/order1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="orderDetailsBottomLine">
                                                <div>
                                                    <p>标题名称</p>
                                                    <p>一段假想的简介，这是一段比较长的简介。</p>
                                                </div>
                                                <span>￥129.00</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <span>￥288.00</span>
                                        <button @click="checkDetail">查看详情</button>
                                    </div>
                                </div>
                            </div>
                            <div class="userOrder_body">
                                <div class="bodyTop">
                                    <span>2019-12-30</span>
                                    <div>订单号：191221419485574</div>
                                    <span>单价</span>
                                    <span>数量</span>
                                    <span>付款金额</span>
                                    <span>待付款</span>
                                </div>
                                <div class="bodyBottom">
                                    <div>
                                        <div>
                                            <div class="bodyBottom_one">
                                                <div class="imgPar">
                                                    <img src="../../assets/tao/order1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="orderDetailsBottomLine">
                                                <div>
                                                    <p>标题名称</p>
                                                    <p>一段假想的简介，这是一段比较长的简介。</p>
                                                </div>
                                                <span>￥129.00</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="bodyBottom_one">
                                                <div class="imgPar">
                                                    <img src="../../assets/tao/order1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="orderDetailsBottomLine">
                                                <div>
                                                    <p>标题名称</p>
                                                    <p>一段假想的简介，这是一段比较长的简介。</p>
                                                </div>
                                                <span>￥129.00</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="bodyBottom_one">
                                                <div class="imgPar">
                                                    <img src="../../assets/tao/order1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="orderDetailsBottomLine">
                                                <div>
                                                    <p>标题名称</p>
                                                    <p>一段假想的简介，这是一段比较长的简介。</p>
                                                </div>
                                                <span>￥129.00</span>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <span>￥288.00</span>
                                        <button @click="checkDetail">查看详情</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import TaoHeader from './taoheader'
export default {
    data () {
        return {
            
        }
    },
    components: {
        header_,
        TaoHeader,
    },
    methods: {
        checkDetail(){
            this.$router.push('orderDetails')
        }
    }
}
</script>
<style scoped>
    .taoIndex {
        background: rgba(237, 237, 237, 1);
    }
    .taoswiper {
        margin-top: 130px;
    }
    .userInfo{
        width: 100%;
        height: auto;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        border-radius: 0.5rem;
    }
    .userInfo>p,.userInfo>a{
        display: block;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
    }
    .userInfo>a{
        border-top: 1px solid rgb(197, 196, 196);
        font-size: 14px;
    }
    .userInfo>a:hover{
        background-color: #9e0000;
        color: #fff;
    }
    .userInfo>a:last-child:hover{
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
    .orderPar{
        padding: 2rem 0;
    }
    .userOrder{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        background-color: #fff;
    }
    .userOrder_title{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 0.5rem 1rem;
        box-sizing: border-box;
    }
    .userOrder_title>span{
        font-size: 18px;
        font-weight: bold;
        color: #777777;
    }
    .userOrder_title>select{
        width: 120px;
        outline: none;
    }
    .userOrder_body{
        width: 100%;
        height: auto;
    }
    .bodyTop{
        width: 100%;
        height: 46px;
        border: 1px solid rgb(214, 214, 214);
        border-right:0;
        border-left:0;
        background-color: rgb(245, 245, 245);
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 46px;
    }
    .bodyTop>*{
        font-size: 14px;
    }
    .bodyBottom{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }
    .bodyBottom>div>div>div{
        padding-bottom: 1rem;
    }
    .bodyBottom>div>div{
        margin-bottom: 1rem;
    }
    .bodyBottom>div:first-child{
        width: 68%;
    }
    .bodyBottom>div:last-child{
        width: 32%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    .bodyBottom>div:first-child>div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bodyBottom_one{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .orderDetailsBottomLine{
        width: 80%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(202, 202, 202);
    }
    .orderDetailsBottomLine>span{
        transform: translateX(-1.5rem);
    }
    .orderDetailsBottomLine>div>p{
        font-size: 14px;
    }
    .orderDetailsBottomLine>div>p:first-child{
        font-weight: bold;
    }
    .orderDetailsBottomLine>div>p:last-child{
        color: rgb(190, 190, 190);
    }
    .bodyBottom>div:last-child>button{
        width: 100px;
        height: 30px;
        background-color: #fff;
        border: 1px solid #999;
        border-radius: 0.25rem;
        cursor: pointer;
    }
    .bodyBottom>div:last-child>span{
        transform: translateX(2rem);
    }
    .imgPar{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:rgba(185, 185, 185, 0.5);
    }
</style>
