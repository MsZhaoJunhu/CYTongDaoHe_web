<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <div class="receiving">
                    <p>
                        <span>收货信息</span>
                        <span>
                            <span>应付金额：</span>
                            <span>￥129.00</span>
                        </span>
                    </p>
                    <div>
                        <p>提交订单成功,请选择支付方式</p>
                        <p>
                            请在<span>2小时内</span>完成支付,超时订单将自动取消。
                        </p>
                        <p>预售商品预计将于2019.12.23陆续发货</p>
                        <div class="allClickPayWay">
                            <el-popover
                            placement="bottom"
                            width="160"
                            trigger="hover">
                            <img src="../../assets/tao/erweima.png" alt="">
                            <p>请使用支付宝扫一扫</p>
                            <p>扫描二维码支付</p>
                                <el-button class="elBtnClick" slot="reference" @click="clickToResout">
                                    <img src="../../assets/tao/zhifubao.png" alt="">
                                </el-button>
                            </el-popover>
                            <el-popover
                            placement="bottom"
                            width="160"
                            trigger="hover">
                            <img src="../../assets/tao/erweima.png" alt="">
                            <p>请使用微信扫一扫</p>
                            <p>扫描二维码支付</p>
                                <el-button class="elBtnClick" slot="reference" @click="clickToResout">
                                    <img src="../../assets/tao/wechat.png" alt="">
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import header_ from '@/components/public/头部'
    import TaoHeader from './taoheader'
    export default{
        data () {
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        components: {
            header_,
            TaoHeader,
        },
        methods: {
            clickToResout(){
                setTimeout(() => {
                    this.$router.push('payResout')
                }, 3000);
            }
        }
    }
</script>
<style scoped>
    .taoIndex {
        height: 100%;
        background: rgba(237, 237, 237, 1);
        padding-bottom: 4rem;
    }
    .taoswiper {
        height: auto;
        margin-top: 130px;
    }
    .receiving{
        background-color: #FFF;
        border-radius: 1rem;
        margin-top: 2rem;
    }
    .receiving>p{
        font-size: 20px;
        font-weight: bold;
        color: rgb(87, 87, 87);
        padding: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .receiving>p>span:last-child{
        font-size: 14px;
        font-weight: normal;
        margin-left: 2rem;
    }
    .receiving>p>span:last-child>span:last-child{
        font-size: 18px;
        color: #9e0000;
    }
    .receiving>div{
        height: 360px;
        border-top: 1px solid rgb(160, 160, 160);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 10rem;
    }
    .receiving>div>p{
        font-size: 14px;
        margin: 0.25rem 0;
    }
    .receiving>div>p>span{
        color: #9e0000;
    }
    .receiving>div>p:first-child{
        font-size: 30px;
        margin: 1rem 0;
    }
    .receiving>div>p:nth-child(3){
        margin-bottom: 2rem;
    }
    .allClickPayWay{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .allClickPayWay>span{
        margin: 0 1rem;
    }
    .elBtnClick{
        width: 180px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(133, 133, 133);
        padding: 0;
        background-color: #fff;
    }
    .elBtnClick:focus{
        border-color: #9e0000;
    }
    .elBtnClick>span{
        display: block;
    }
</style>
<style>
    .el-popover{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        background-color: #fff;
    }
    .el-popover>p{
        font-size: 14px;
        margin-top: 0.5rem;
    }
    .el-popover>p+p{
        margin-top: 0.1rem;
    }
</style>