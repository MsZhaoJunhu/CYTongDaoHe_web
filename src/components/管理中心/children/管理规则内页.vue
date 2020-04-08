<template>
    <div class="内容">
        <header_ :select_index="8"/>
        <xfc></xfc>
        <div class="banner">
            <img src="../../../assets/imgs/glzx_banner.png" alt="行业最新信息及相关公司活动">
            <div class="text">
                <p>我们的管理内容有哪些？</p>
                <h1>行业最规范的管理模式</h1>
            </div>
        </div>
        <div class="xlm">
            <div>
                <span><router-link to="/glzx/glgz">管理中心</router-link></span>
                <span @click="liuLanQiHistory()">管理规则</span>
                <span>专业服务供应商信用等级评价管理规则</span>
            </div>
        </div>
        <div class="bjs">
            <div v-html="newsContent"></div>
            <!-- <div class="main">
                <p>专业服务供应商信用等级评价管理规则</p>
                <p>生效日期：<span>2018年05月32日</span></p>
                <div class="text">
                    <p>第一章 概述</p>
                    <p>
                        第一条：为了对企业会员在专业服务过程中的参与程度、商品交易过程中的诚信程度进行客观、公正的评价，以便于专业服务供应商在服务开始前对所服务企业的信用水平有个全面的认识，以及在商品交易决策前对买卖双方的信用水平有个真实的判断，根据《同道合平台服务协议》、《同道合平台服务规则》、《同道合平台评价规则》等相关协议、规则的规定，制定本规则。<br /> 第二条：本规则适用于在同道合平台完成注册的企业会员的信用等级初始评价，以及商品交易、专业服务过程中的信用等级成长评价。
                    </p>
                </div>
                <div class="text">
                    <p>第二章 企业会员信用等级初始评价</p>
                    <p>
                        第一条：在同道合平台完成注册的企业会员，平台根据企业会员填写的资料信息，按平台的企业会员信用等级初始评价模型，计算企业会员初始信用等级评分，根据不同的得分区间对应相应的信用等级。<br/> 第二条：企业会员信用等级初始评价模型
                    </p>
                    <div class="table">
                        <p>一、评价模型</p>
                        <table class="table1">
                            <tr>
                                <td>序号</td>
                                <td>评价项目</td>
                                <td>权重</td>
                                <td>评价规则</td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>资料完整度</td>
                                <td>20%</td>
                                <td class="text_right">专业服务供应商应按平台要求据实详细填写注册资料，每少填一项扣2分，最多扣20分</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>实缴资本</td>
                                <td>20%</td>
                                <td class="text_right">
                                    <div>
                                        <span>实缴资本100万（含）以下，5分</span>
                                        <span>实缴资本100万-300万（含），10分</span>
                                        <span>实缴资本300万-800万（含），15分</span>
                                        <span>实缴资本800万以上，20分</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>参保人数</td>
                                <td>10%</td>
                                <td class="text_right">
                                    <div>
                                        <span>实际参保人数10人（含）以下，5分</span>
                                        <span>实际参保人数10人以上，10分</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>营业收入</td>
                                <td>20%</td>
                                <td class="text_right">平台注册前一年营业收入300万（含）以下，5分<br />平台注册前一年营业收入300万-800万（含），10分<br /> 平台注册前一年营业收入800万-1500万（含），15分<br /> 频台注册前一年营业收入1500万以上，20分</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>近三年核心业务量</td>
                                <td>10%</td>
                                <td class="text_right">
                                    <div>
                                        <span>核心业务量在10起（含）以下，5分</span>
                                        <span>核心业务量在10以上，10分</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>典型服务案例</td>
                                <td>20%</td>
                                <td class="text_right">
                                    <div>
                                        <span>提供典型服务案例5个（含）以下，5分</span>
                                        <span>提供典型服务案例5个-8个（含），10分</span>
                                        <span>提供典型服务案例8个-12个，15分</span>
                                        <span>提供典型服务案例12个以上，20分</span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%"
                            stripe
                            >
                                <el-table-column
                                    prop="number"
                                    label="序号"
                                    width="60"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="demo"
                                    label="评价项目" 
                                    width="140"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="weight"
                                    label="权重" 
                                    width="60"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="rule"
                                    label="评价规则" 
                                    width="380">
                                    <template slot-scope="scope">
                                        <p v-html="scope.row.rule"></p>
                                    </template>
                                </el-table-column>
                        </el-table>
                        <p>二、初始评分总分100分，根据在平台注册的服务供应商的实际情况，按上表的评价规则进行评分</p>
                        <p>三、初始信用等级</p>
                        <table class="table2">
                            <tr>
                                <td>序号</td>
                                <td>初始评分</td>
                                <td>信用等级</td>
                                <td>平台评价</td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>S≥90分</td>
                                <td>小同高级</td>
                                <td>优质供应商</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>70分≤S<90分</td>
                                <td>小同中级</td>
                                <td>良好供应商</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>S<70分</td>
                                <td>小同初级</td>
                                <td>普通供应商</td>
                            </tr>
                        </table>
                        <el-table
                            :data="tableData2"
                            border
                            style="width: 100%"
                            stripe
                            >
                                <el-table-column
                                    prop="number"
                                    label="序号"
                                    width="60"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="demo"
                                    label="初始评分" 
                                    width="140"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="weight"
                                    label="信用等级"
                                    width="120"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="rule"
                                    label="平台评价" 
                                    width="120"
                                    align="center">
                                </el-table-column>
                        </el-table>
                    </div>
                    <div class="text">
                        <p>第三章 服务供应商信用等级成长评价</p>
                        <p>
                            第一条：在同道合平台完成注册并参与服务的专业服务供应商，平台根据服务供应商项目支付的实际金额，以及阶段综合评分系数，按平台的专业服务供应商信用等级成长评价计算公式，计算服务供应商成长分值，最后根据成长累积分值对应相应的信用等级。<br/> 第二条：阶段成长分值=阶段支付的实际金额×阶段综合评分系数，阶段综合评分系数=阶段综合评分/100，成长累积分值=Σ各阶段成长分值。
                            <br/> 第三条：专业服务供应商信用等级表
                        </p>
                        <div class="table">
                            <table class="table3">
                                <tr>
                                    <td>序号</td>
                                    <td class="td1">信用等级</td>
                                    <td class="td1">分级</td>
                                    <td>星级</td>
                                    <td>成长积累分值</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>小同</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/star.png"></td>
                                    <td>0-30万（含）</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>小同</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/star.png"></td>
                                    <td>30万-60万（含）</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>小同</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/star.png"></td>
                                    <td>60万-100万（含）</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>中同</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>100万-130万（含）</td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>中同</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>130万-160万（含）</td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>中同</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>160万-200万（含）</td>
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td>大同</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"></td>
                                    <td>200万-230万（含）</td>
                                </tr>

                                <tr>
                                    <td>8</td>
                                    <td>大同</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"></td>
                                    <td>230万-260万（含）</td>
                                </tr>

                                <tr>
                                    <td>9</td>
                                    <td>大同</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"></td>
                                    <td>260万-300万（含）</td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td>小道</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>300万-360万（含）</td>
                                </tr>

                                <tr>
                                    <td>11</td>
                                    <td>小道</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>360万-420万（含）</td>
                                </tr>

                                <tr>
                                    <td>12</td>
                                    <td>小道</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>420万-500万（含）</td>
                                </tr>

                                 <tr>
                                    <td>13</td>
                                    <td>中道</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>500万-560万（含）</td>
                                </tr>

                                <tr>
                                    <td>14</td>
                                    <td>中道</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>560万-620万（含）</td>
                                </tr>

                                <tr>
                                    <td>15</td>
                                    <td>中道</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>620万-700万（含）</td>
                                </tr>

                                 <tr>
                                    <td>16</td>
                                    <td>大道</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"></td>
                                    <td>700万-760万（含）</td>
                                </tr>

                                <tr>
                                    <td>17</td>
                                    <td>大道</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"></td>
                                    <td>760万-820万（含）</td>
                                </tr>

                                <tr>
                                    <td>18</td>
                                    <td>大道</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"></td>
                                    <td>820万-900万（含）</td>
                                </tr>

                                <tr>
                                    <td>19</td>
                                    <td>小合</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>900万-1000万（含）</td>
                                </tr>

                                <tr>
                                    <td>20</td>
                                    <td>小合</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>1000万-1100万（含）</td>
                                </tr>

                                <tr>
                                    <td>21</td>
                                    <td>小合</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>1100万-1200万（含）</td>
                                </tr>

                                <tr>
                                    <td>22</td>
                                    <td>中合</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>1200万-1300万（含）</td>
                                </tr>

                                <tr>
                                    <td>23</td>
                                    <td>中合</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>1300万-1400万（含）</td>
                                </tr>

                                <tr>
                                    <td>24</td>
                                    <td>中合</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/mount-y.png"><img src="../../../assets/icon/star.png"><img src="../../../assets/icon/star.png"></td>
                                    <td>1400万-1500万（含）</td>
                                </tr>

                                <tr>
                                    <td>25</td>
                                    <td>大合</td>
                                    <td>初级</td>
                                    <td><img src="../../../assets/icon/ri.png"></td>
                                    <td>1500万-1600万（含）</td>
                                </tr>

                                <tr>
                                    <td>26</td>
                                    <td>大合</td>
                                    <td>中级</td>
                                    <td><img src="../../../assets/icon/ri.png"></td>
                                    <td>1600万-1700万（含）</td>
                                </tr>

                                <tr>
                                    <td>27</td>
                                    <td>大合</td>
                                    <td>高级</td>
                                    <td><img src="../../../assets/icon/ri.png"></td>
                                    <td>1700万-1800万（含）</td>
                                </tr>
                            </table>
                        </div>
                        <p>第四条 专业服务供应商的初始信用等级从对应的信用等级的成长累积分值下限开始累积。</p>
                    </div>
                </div>
                <div class="text">
                    <p>第四章 附则</p>
                    <p>
                        第一条：本规则自2019年4月29日于平台发布，自发布之日起，公示七天后无异议则生效。<br /> 第二条：本规则需要修订的，专业服务供应商的评价行为发生在本规则修订生效以前的，适用当时的规则；评价行为发生在本规则修订生效以后的，适用本规则。
                    </p>
                </div>
            </div> -->
        </div>
        <footer_/>
    </div>
</template>

<script>
    import header_ from '../../public/头部'
    import footer_ from '../../public/底部'
    import xfc from '@/components/public/悬浮窗.vue'
    import {getNewsInfo} from '../../api/api'
    export default {
        components: {
            header_,
            footer_,
            xfc,
        },
        data() {
            return {
               tableData:[
                    {number:"1",demo:"资料完整度",weight:"20%",rule:"专业服务供应商应按平台要求据实详细填写注册资料，每少填一项扣2分，最多扣20分"},
                    {number:"2",demo:"实缴资本",weight:"20%",rule:"实缴资本100万（含）以下，5分<br/>实缴资本100万-300万（含），10分<br/>实缴资本300万-800万（含），15分<br/>实缴资本800万以上，20分"},
                    {number:"3",demo:"参保人数",weight:"10%",rule:"实际参保人数10人（含）以下，5分<br/>实际参保人数10人以上，10分"},
                    {number:"4",demo:"营业收入",weight:"20%",rule:"平台注册前一年营业收入300万（含）以下，5分<br/>平台注册前一年营业收入300万-800万（含），10分<br/>平台注册前一年营业收入800万-1500万（含），15分<br/>频台注册前一年营业收入1500万以上，20分"},
                    {number:"5",demo:"近三年核心业务量",weight:"10%",rule:"核心业务量在10起（含）以下，5分<br/>核心业务量在10以上，10分"},
                    {number:"6",demo:"典型服务案例",weight:"20%",rule:"提供典型服务案例5个（含）以下，5分<br/>提供典型服务案例5个-8个（含），10分<br/>提供典型服务案例8个-12个，15分<br/>提供典型服务案例12个以上，20分"},
                ], 
                tableData2:[
                    {number:"1",demo:"S≥90分",weight:"小同高级",rule:"优质供应商"},
                    {number:"2",demo:"70分≤S<90分",weight:"小同中级",rule:"良好供应商"},
                    {number:"3",demo:"S<70分",weight:"小同初级",rule:"普通供应商"},
                ],
                newsId:this.$route.query.newsId,
                newsContent:"",
            }
        },
        created(){
            getNewsInfo({"newId":this.newsId}).then(res=>{
                if(res.data.code===200){
                    this.newsContent=res.data.data.newsContent;
                }else{
                }
            })
        },
        methods: {
            liuLanQiHistory(){
                window.history.back(-1);
            }
        },
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        /* min-width: 1400px; */
        position: relative;
    }
    .banner img{
        width: 100%;
    }
    .banner>.text{
        color: #d1d1d2;
        left: 260px;
        bottom: 55px;
        position: absolute;
    }
    .banner>.text>p{
        font-family: '华文细黑';
        font-size: 18px;
    }
    .banner>.text>h1{
        letter-spacing:4px;
        font-size: 56px;
    }
    .bjs{
        width: 66%;
        margin: 0 auto;
        background: #fbfbfb;
        padding: 50px;
        margin-bottom: 50px;
    }
    .xlm{
        height: 100px;
        line-height: 100px;
    }
    .xlm>div{
        width: 95%;
        margin: 0 auto;
    }
    .xlm>div>span>a{
        color: #000;
    }
    .xlm span{
        background: url(../../../assets/imgs/xjt.png) no-repeat;
        padding:0 15px 0 5px;
        background-position:right;
    }
    .xlm span:last-of-type{
        background:rgba(255, 255, 255, 0);
    }
    .main{
        width: 73%;
        margin: 0 auto;
    }
    .main .text{
        width: 100%;
    }
    .main .text>p{
        margin-top:30px;
        letter-spacing:1px;
    }
    .main>p:nth-child(1){
        font-size: 36px;
        color: #353535;
        text-align: center;
    }
    .main>p:nth-child(2){
        font-size: 18px;
        color: #7c7c7c;
        text-align: center;
        margin: 25px 0;
    }
    .main .text>p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
    }
    .main .text>p:nth-child(2){
        margin-top:10px;
        line-height: 35px;
        font-size: 17px;
    }
    .table table{
        table-layout:fixed;
        empty-cells:show;
        border-collapse: collapse;
        width: 100%;
        text-align: center;
    }
    .table p{
        font-size: 17px;
        margin: 10px 0;
        line-height: 36px;
        color: #525252;
    }
    .table table{
        width: 73%;
    }
    .table table td{
        border:1px #ccc solid;
        color: #535353;
        line-height: 30px;
        padding: 10px 10px;
    }
    .table .table1,.table .table2{
        width: 100%;
    }
    .table .table1 tr td:first-child{
        width:8%;
    }
    .table .table1 tr td:nth-child(2){
        width:15%;
    }
    .table .table1 tr td:nth-child(3){
        width:8%;
    }
    .table .table1 tr td:last-child{
        width:69%;
        padding-right:27px;
    }
    .table .table2 tr td:not(:first-child){
        width:30%;
    }
    .table table tr td:nth-child(1){
        width: 100px;
    }
    .table3 .td1{
        width:200px;
        box-sizing: border-box;
    }
    .table3 td{
        text-align:center;
        box-sizing:border-box;
    }
    .table3>tr>td:nth-child(4){
        width:345px;
    }
    .table3>tr>td:nth-child(5){
        width:300px;
        padding: 0px;
    }
    .text_right{
        text-align: left;
    }
    .table table>tr>td:last-of-type{
        text-align: left;
        padding: 0 30px;
    }
    .table .table3>tr>td:last-child,.table .table2>tr>td:last-child{
        text-align:center;
    }
    .text_right>div{
        width:720px;
        display:flex;
        flex-wrap:wrap;
    }
    .text_right>div>span{
        width:360px;
        text-align:left;
    }
    .el-table{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .内容{
            padding: 0px 24px;
            overflow: hidden;
        }
        .banner,.xlm{
            display: none;
        }
        .bjs{
            padding: 0px;
        }
        .main{
            width: 100%;
        }
        .main>p:first-child{
            font-size: 20px;
        }
        .main>p:nth-child(2){
            font-size: 14px;
            margin: 0px;
        }
        .main>.text>p:first-child{
            margin: 0px;
            font-size: 16px;
        }
        .main>.text>p:nth-child(2){
            font-size: 14px;
        }
        .el-table{
            display: block;
        }
        .el-table__row>td>.cell>p{
            font-size: 14px;
            color: #606266;
        }
        .table>.table1,.table>.table2{
            display: none;
        }
        .table>p{
            font-size: 14px;
        }
        .text>p:first-child{
            margin: 0px;
            font-size: 16px !important;
        }
        .text>p:nth-child(2){
            font-size: 14px !important;
        }
        .text>p:last-child{
            font-size: 14px !important;
        }
        .table{
            overflow: scroll;
        }
        .table3{
            width: 500px !important;
        }
        .table3>tr>td:first-child{
            width: 60px !important;
            padding: 0px !important;
            font-size: 12px !important;
        }
        .table3>tr>td:nth-child(2){
            width: 100px !important;
            padding: 0px !important;
            font-size: 12px !important;
        }
        .table3>tr>td:nth-child(3){
            width: 60px !important;
            padding: 0px !important;
            font-size: 12px !important;
        }
        .table3>tr>td:nth-child(4){
            width: 90px !important;
            padding: 0px !important;
            font-size: 12px !important;
        }
        .table3>tr>td:nth-child(5){
            width: 150px !important;
            padding: 0px !important;
            font-size: 12px !important;
        }
    }
</style>