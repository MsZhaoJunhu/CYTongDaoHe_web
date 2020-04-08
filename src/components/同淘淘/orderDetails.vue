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
                                <span>
                                    订单号:
                                    <span>191221419485574</span>
                                </span>
                            </div>
                            <div class="userOrder_body">
                                <div class="userOrder_process">
                                    <div>
                                        <div class="active">1</div>
                                        <div>
                                            <p>下单</p>
                                            <p>2019-12-21</p>
                                            <p>28：46</p>
                                        </div>
                                    </div>
                                    <div class="userOrder_process_line"></div>
                                    <div>
                                        <div>2</div>
                                        <div>
                                            <p>付款</p>
                                            <p>2019-12-21</p>
                                            <p>28：46</p>
                                        </div>
                                    </div>
                                    <div class="userOrder_process_line"></div>
                                    <div>
                                        <div>3</div>
                                        <div>
                                            <p>发货</p>
                                            <p>2019-12-21</p>
                                            <p>28：46</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="display:none;">
                                    <div>
                                        <div>1</div>
                                        <div>
                                            <p>下单</p>
                                            <p>2019-12-21</p>
                                            <p>28：46</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>2</div>
                                        <div>
                                            <p>关闭订单</p>
                                            <p>2019-12-21</p>
                                            <p>28：46</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <el-row class="proTitle">
                                    <el-col :span="15">商品信息</el-col>
                                    <el-col :span="3">单价</el-col>
                                    <el-col :span="3">数量</el-col>
                                    <el-col :span="3">应付金额</el-col>
                                </el-row>
                            </div>
                            <div class="proDetailsPar" v-for="item in  4">
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
                                    <span>￥129.00</span>
                                </div>
                            </div>
                            <div class="allProDetails">
                                <p>商品总计：￥387.00</p>
                                <p>运费：+￥18.00</p>
                                <p>优惠：-￥40.00</p>
                                <p>
                                    <span>付款金额：</span>
                                    <span>￥365.00</span>
                                </p>
                            </div>
                            <div class="getAdressInfo">
                                收货信息
                            </div>
                            <div class="myAdressInfo">
                                <p>姓名：王源</p>
                                <p>电话：15213280546</p>
                                <p>详细地址：重庆市 市辖区 渝北区 服装城大道云尚城1-8-5</p>
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
        
    }
}
</script>
<style scoped>
    .taoIndex {
        background: rgba(237, 237, 237, 1);
    }
    .taoswiper {
        height: auto;
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
        font-weight: normal;
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
    .userOrder_process{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 2rem;
    }
    .userOrder_process>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .userOrder_process>div>div:first-child{
        width: 30px;
        height: 30px;
        border: 1px solid rgb(179, 179, 179);
        border-radius: 15px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
        color: #999;
    }
    .userOrder_process>div>.active{
        background: #9e0000 !important;
        border-color: #9e0000 !important;
        color: #fff !important;
    }
    .userOrder_process>div>div:last-child{
        transform: translateY(1rem);
    }
    .userOrder_process>div>div:last-child>p:first-child{
        color: #999999;
    }
    .userOrder_process>div>.active+div>p:first-child{
        color: #000;
        font-weight: bold;
    }
    .userOrder_process>div>div:last-child>p+p{
        margin-top: 0.25rem;
    }
    .userOrder_process_line{
        width: 20%;
        height: 1px;
        background: #c9c9c9;
    }
    .proTitle{
        height: 40px;
        border: 1px solid rgb(201, 201, 201);
        background: #f3f3f3;
        border-left: 0;
        background: rgb(251, 251, 251);
        border-right: 0;
    }
    .proTitle /deep/ .el-col{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .proTitle /deep/ .el-col:first-child{
        justify-content: flex-start;
        padding-left: 1rem;
        box-sizing: border-box;
    }
    .proDetailsPar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
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
        align-items: center;
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
    .orderDetailsBottomLine>span:last-child{
        transform: translateX(-2rem);
    }
    .orderDetailsBottomLine>span:nth-child(2){
        transform: translateX(2.5rem);
    }
    .orderDetailsBottomLine>span:nth-child(3){
        transform: translateX(0.5rem);
    }
    .imgPar{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:rgba(185, 185, 185, 0.5);
    }
    .allProDetails{
        width: 100%;
        border: 1px solid rgb(199, 199, 199);
        border-left: 0;
        border-right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 2rem;
        box-sizing: border-box;
    }
    .allProDetails>p{
        font-size: 15px;
        color: #999999;
        margin-top: 1rem;
    }
    .allProDetails>p:last-child{
        margin-bottom: 1rem;
        color: red;
    }
    .allProDetails>p:last-child>span:first-child{
        color: #000;
        font-weight: bold;
        font-size: 16px;
    }
    .allProDetails>p:nth-child(3){
        color: red;
    }
    .getAdressInfo{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(199, 199, 199);
    }
    .myAdressInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 1rem;
        box-sizing: border-box;
    }
    .myAdressInfo>p{
        margin-top: 1rem;
    }
    .myAdressInfo>p:last-child{
        margin-bottom: 2rem;
    }
    .myAdressInfo>p:first-child{
        margin-top: 2rem;
    }
</style>
