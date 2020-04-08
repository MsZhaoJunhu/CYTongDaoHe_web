<template>
    <div class="commodity_par">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <!-- 商品信息 -->
        <el-row type="flex" justify="center" align="center">
            <el-col :span="16">
                <div class="commodity_details">
                    <div>
                        <img src="../../assets/tao/pro1.png" alt="">
                    </div>
                    <div class="commodityPar">
                        <div class="commodity commodityTop">
                            <div>
                                <p>惠普（HP）GT52彩色墨水</p>
                                <p>支持型号：HP Ink Tank 310/318/319/ 311/410/418/419/ 411/ 118/ 508/511/518/519/531/538/618；HP Deskjet GT 5810/5820 All-in-One</p>
                            </div>
                            <div>
                                <p>￥{{money}}</p>
                            </div>
                        </div>
                        <div class="commodity commodityMid">
                            <div>
                                <div>
                                    <span>选择规格：</span>
                                </div>
                                <div>
                                    <div>
                                        <div :class="colorIndex==1?'active':''" @click="colorIndex=1">黄色</div>
                                    </div>
                                    <div>
                                        <div :class="colorIndex==2?'active':''" @click="colorIndex=2">黄色</div>
                                    </div>
                                    <div>
                                        <div :class="colorIndex==3?'active':''" @click="colorIndex=3">黄色</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>数量选择：</span>
                                </div>
                                <div>
                                    <div>
                                        <button @click="btnBuyNum(0)">-</button>
                                        <span>{{buyNum}}</span>
                                        <button @click="btnBuyNum(1)">+</button>
                                    </div>
                                    <button>加入购物车</button>
                                    <button>立即咨询</button>
                                </div>
                            </div>
                        </div>
                        <div class="commodity commodityBot">
                            <div>
                                <p>服务说明：</p>
                            </div>
                            <div>
                                <p>满99元包邮</p>
                                <p>拆封后不支持七天无理由退货</p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 商品详情 -->
        <el-row type="flex" justify="center" align="center">
            <el-col :span="16">
                <div class="commodity_details commodity_iconDetail">
                    <p>商品信息</p>
                    <div>
                        <img src="../../assets/tao/pro11.png" alt="">
                        <img src="../../assets/tao/pro22.png" alt="">
                        <img src="../../assets/tao/pro3.png" alt="">
                        <img src="../../assets/tao/pro4.png" alt="">
                        <img src="../../assets/tao/pro5.png" alt="">
                        <img src="../../assets/tao/pro6.png" alt="">
                    </div>
                </div>
            </el-col>
        </el-row>
      <tao-goodslist :title="'热门推荐'"
      :grouplist="grouplist"></tao-goodslist>
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import TaoHeader from './taoheader'
import TaoGoodslist from './taogoodslist'
export default {
    data () {
        return {
            money:"100.00",
            proNum:1,
            // 选择颜色的规格下标
            colorIndex:'',
            // 数量
            buyNum:1,
            grouplist: [
                {
                    id: '001',
                    Url: require('../../assets/tao/pro1smart.png'),
                    Route:"commodityDetails"
                },
                {
                    id: '002',
                    Url: require('../../assets/tao/pro1smart.png'),
                    Route:"commodityDetails"
                },
                {
                    id: '003',
                    Url: require('../../assets/tao/pro1smart.png'),
                    Route:"commodityDetails"
                },
                {
                    id: '004',
                    Url: require('../../assets/tao/pro1smart.png'),
                    Route:"commodityDetails"
                },
            ],
        }
    },
    components: {
        header_,
        TaoHeader,
        TaoGoodslist
    },
    methods: {
        btnBuyNum(index){
            if(index==0&&this.buyNum>1){
                this.buyNum--;
            }else if(index==0&&this.buyNum<1){
                
            }else if(index==1){
                this.buyNum++;
            }
        }
    },
}
</script>
<style scoped>
    .commodity_par{
        width: 100%;
        height: auto;
        background-color: rgba(237, 237, 237, 1);
        padding-bottom: 2rem;
        padding-top: 130px;
    }
    .commodity_details{
        width: 100%;
        height: 600px;
        border-radius: 1rem;
        margin-top: 40px;
        padding: 4rem;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .commodity_details>div{
        width: 50%;
        height: 100%;
    }
    .commodity_details>div>img{
        width: 100%;
    }
    .commodity{
        height: calc(100%/3);
        width: 100%;
        overflow: hidden;
    }
    .commodityTop{
        display: flex;
        justify-content: space-between;
    }
    .commodityTop>div:first-child{
        width:80%;
        display: flex;
        flex-direction: column;
    }
    .commodityTop>div>p:first-child{
        font-size: 21px;
        display: block;
        min-height: 60px;
    }
    .commodityTop>div>p:last-child{
        font-size: 16px;
        color: rgba(151, 151, 151, 1);
    }
    .commodityTop>div:last-child{
        width:20%;
        display: flex;
        /* flex-direction: column; */
        justify-content: flex-end;
        align-items: flex-end;
    }
    .commodityTop>div:last-child>p{
        font-size: 21px;
        font-weight: bold;
        color: #9e0000;
    }
    .commodityMid{
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        border: 1px solid #999;
        border-left: 0;
        border-right: 0;
    }
    .commodityMid>div{
        height: calc(100%/2);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .commodityMid>div>div{
        width: auto;
        height: 100%;
    }
    .commodityMid>div>div:first-child{
        width: 16%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .commodityMid>div>div:first-child>span{
        color: rgb(110, 110, 110);
    }
    .commodityMid>div>div:last-child{
        width: 84%;
        display: flex;
        align-items: center;
    }
    .commodityMid>div:first-child>div:last-child{
        border-bottom: 1px dashed #999;
        flex-wrap: wrap;
    }
    .commodityMid>div:first-child>div:last-child>div{
        width: calc(100%/3);
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .commodityMid>div:first-child>div:last-child>div>div{
        width: 100px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(214, 214, 214);
        border-radius: 8px;
        cursor: pointer;
        box-sizing: border-box;
    }
    .commodityMid>div:first-child>div:last-child>div>.active{
        border: 2px solid #9e0000;
    }
    .commodityMid>div:last-child>div:last-child>div{
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 1rem;
    }
    .commodityMid>div:last-child>div:last-child>div>button{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #fff;
        border: 0;
        cursor: pointer;
        box-shadow: 0 0 4px 4px rgba(153, 151, 151, 0.4);
    }
    .commodityMid>div:last-child>div:last-child>div>input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
        margin: 0;
    }
    .commodityMid>div:last-child>div:last-child>div>input{
        min-width: 30px;
        width: auto;
        font-size: 20px;
    }
    .commodityMid>div:last-child>div:last-child>button{
        margin: 0 1rem;
        width: 105px;
        height: 40px;
        color: #fff;
        border-radius: 8px;
        background-color: #9e0000;
        border: 1px solid #9e0000;
        cursor: pointer;
    }
    .commodityBot{
        padding-top: 1rem;
        display: flex;
        justify-content: flex-start;
    }
    .commodityBot>div:first-child{
        width: 16%;
    }
    .commodityBot>div:last-child{
        width: 84%;
    }
    .commodityBot>div>p{
        color: rgb(110, 110, 110);
    }
    .commodityBot>div:last-child>p::before{
        content: '*';
        display: inline-block;
        width: 12px;
    }
    .commodity_iconDetail{
        display: block;
        height: auto;
        padding: 0;
        padding-top: 1rem;
    }
    .commodity_iconDetail>p{
        padding: 0 1rem;
        margin-bottom: 1rem;
        font-size: 20px;
        font-weight: bold;
        color: rgb(97, 97, 97);
    }
    .commodity_iconDetail>div{
        width: 100%;
        height: auto;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
    }
    .commodity_iconDetail>div>img{
        width: 100%;
    }
    .commodity_recommend{
        display: block;
        height: auto;
        padding: 0;
        padding-top: 1rem;
    }
    .commodity_recommend>div{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
    }
    .commodity_recommend>div>div{
        height: 430px;
        width: calc(100%/4);
    }
    .commodity_recommend>div>div>div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-right: 1px solid #d3d3d3;
        box-sizing: border-box;
        border-top: 1px solid #d3d3d3;
        padding-top: 1rem;
        cursor: pointer;
    }
    .commodity_recommend>div>div:last-child>div{
        border: 0;
        border-top: 1px solid #d3d3d3;
    }
    .commodity_recommend>div:first-child{
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .commodity_recommend>div:first-child>span{
        padding-left: 1rem;
        font-size: 20px;
        font-weight: bold;
        color: rgb(97, 97, 97);
    }
    .commodity_recommend>div:first-child>div{
        width: auto;
        height: auto;
    }
    .commodity_recommend>div:first-child>div>button{
        width: 30px;
        height: 30px;
        border: 1px solid #999;
        border-radius: 15px;
        background-color: #fff;
        color: #999;
        margin: 0 1rem;
        cursor: pointer;
    }
    .commodity_recommend>div:first-child>div>button:last-child{
        margin-left: 0.5rem;
    }
    .commodity_recommend>div:first-child>div>button:first-child{
        margin-right: 0.5rem;
    }
    .commodity_recommend>div>div>div>p:nth-child(2){
        font-size: 20px;
    }
    .commodity_recommend>div>div>div>p:nth-child(3){
        font-size: 16px;
        color: rgb(126, 126, 126);
    }
    .commodity_recommend>div>div>div>p:last-child{
        font-size: 20px;
        color: #9e0000;
    }
    .commodity_recommend>div>div>div:hover{
        box-shadow: 0px 0px 30px #d3d3d3 inset;
    } 
</style>