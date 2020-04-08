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
                                    <span>历史成交量：</span>
                                    <span>6255</span>
                                </div>
                                <div>
                                    <span>服务评分：</span>
                                    <div>
                                        <i class="el-icon-star-on startYellow"></i>
                                        <i class="el-icon-star-on startYellow"></i>
                                        <i class="el-icon-star-on startYellow"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                    </div>
                                    <span class="threeStart">3星</span>
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
                <div class="commodity_iconDetail_title">
                    <div v-for="(item,index) in functionList" :key="index" @click="functionListActive=item.id" :class="functionListActive==index?'active':''">{{item.name}}</div>
                </div>
                <div class="commodity_details commodity_iconDetail">
                    <div v-show="functionListActive==0">
                        <p>
                            一个组织实现其目标的过程中会出现一些因素来影响资产类型，涉及到如何管理资产，因素包括该组织的性质和目的、其经营范围、财务约束和监管要求、组织及其利益相关方的需求和期望；
                        </p>
                        <p>
                            当建立，实施，维护和持续改进资产管理时需要对这些影响因素加以考虑。 由组织来进行有效的资产控制和管理是必不可少的，通过风险和机遇管理来实现价值，以达到成本，风险和性能的理想平衡。在组织运作时的监管和立法环境越来越具有挑战性，当前的许多资产所面临的固有风险都在不断地演变；
                        </p>
                        <p>
                            本国际标准所介绍的资产管理及资产管理管理系统的基本原理，当将其整合到组织的治理和风险框架中后，可以利用各种机遇促进实实在在的利益；
                        </p>
                        <p>
                            资产管理使用基于风险的方法将组织的目标转换到与资产相关的决策、计划和活动之中；
                        </p>
                        <p>
                            ISO55000是资产管理认证体系，2014年正式发布，目前已在五十多个政府及监管机构、十个国家以及十五个区域内应用并取得显著效；
                        </p>
                        <p>
                            ISO55000适用于所有行业所有规模的单位和组织，目前普遍应用于电力、煤炭和天然气、水务、港口、铁路和医疗机构等领域的众多企业；
                        </p>
                        <p>
                            ISO55000通过资产的全寿命周期的动态管理和多学科协作，通过风险管理和基于风险的决策，有效地管理好企业资产，以实现企业实物资产和无形资产（知识产权、品牌和企业声誉等）的价值最大化，力求达到保持资产价值，提升资产效率，进而提升资产价值，放大资产效应；
                        </p>
                        <p>
                            企业通过ISO55000资产管理体系，实现一体化和可持续发展，面提升企业的领导力、企业内部协商、沟通、企业能力开发和信息管理等方面的水平；
                        </p>
                        <p>
                            ISO55000不是简单的标准化，是涉及到企业管理更多方面的一个常态的组织管理体系，是资产管理的一个重要手段。通过资产管理体系的建立和实施，组织建立了较完善的资产全生命周期系统，建立起完整的资产管理治理机制。可以降低资产管理风险，持续改善绩效和提高竞争优势的能力，有利于提高公司形象和声誉并被利益相关方所认可（投资人，监管者，外部机构等）。
                        </p>
                    </div>
                    <div v-show="functionListActive==1">
                        <p>
                            1、申报表；
                        </p>
                        <p>
                            2、有战略资产管理计划；
                        </p>
                        <p>
                            3、资产列表（如设备等）；
                        </p>
                        <p>
                            4、对达成资产管理目标起作用的管理文件；
                        </p>
                        <p>
                            5、官方要求的其他材料。
                        </p>
                    </div>
                    <div v-show="functionListActive==2">
                        <p>
                            1、明确利益相关人以及对应的需求和期望；
                        </p>
                        <p>
                            2、资产管理方面的决策准则；
                        </p>
                        <p>
                            3、相关方对记录与资产管理有关的财务与非财务信息的要求，以及针对资产管理进行内外部报告的要求；
                        </p>
                        <p>
                            4、确定资产管理体系范围。
                        </p>
                    </div>
                    <div v-show="functionListActive==3">
                        <p>
                            1、申请；
                        </p>
                        <p>
                            2、报价；
                        </p>
                        <p>
                            3、签合同；
                        </p>
                        <p>
                            4、现场检查和文件准备；
                        </p>
                        <p>
                            5、审核；
                        </p>
                        <p>
                            6、发证；
                        </p>
                    </div>
                    <div v-show="functionListActive==4">
                        <p>
                            3—6个月
                        </p>
                    </div>
                    <div v-show="functionListActive==5">
                        <p>
                            一个组织实现其目标的过程中会出现一些因素来影响资产类型，涉及到如何管理资产，因素包括该组织的性质和目的、其经营范围、财务约束和监管要求、组织及其利益相关方的需求和期望；
                        </p>
                        <p>
                            当建立，实施，维护和持续改进资产管理时需要对这些影响因素加以考虑。 由组织来进行有效的资产控制和管理是必不可少的，通过风险和机遇管理来实现价值，以达到成本，风险和性能的理想平衡。在组织运作时的监管和立法环境越来越具有挑战性，当前的许多资产所面临的固有风险都在不断地演变；
                        </p>
                        <p>
                            本国际标准所介绍的资产管理及资产管理管理系统的基本原理，当将其整合到组织的治理和风险框架中后，可以利用各种机遇促进实实在在的利益；
                        </p>
                        <p>
                            资产管理使用基于风险的方法将组织的目标转换到与资产相关的决策、计划和活动之中；
                        </p>
                        <p>
                            ISO55000是资产管理认证体系，2014年正式发布，目前已在五十多个政府及监管机构、十个国家以及十五个区域内应用并取得显著效；
                        </p>
                        <p>
                            ISO55000适用于所有行业所有规模的单位和组织，目前普遍应用于电力、煤炭和天然气、水务、港口、铁路和医疗机构等领域的众多企业；
                        </p>
                        <p>
                            ISO55000通过资产的全寿命周期的动态管理和多学科协作，通过风险管理和基于风险的决策，有效地管理好企业资产，以实现企业实物资产和无形资产（知识产权、品牌和企业声誉等）的价值最大化，力求达到保持资产价值，提升资产效率，进而提升资产价值，放大资产效应；
                        </p>
                        <p>
                            企业通过ISO55000资产管理体系，实现一体化和可持续发展，面提升企业的领导力、企业内部协商、沟通、企业能力开发和信息管理等方面的水平；
                        </p>
                        <p>
                            ISO55000不是简单的标准化，是涉及到企业管理更多方面的一个常态的组织管理体系，是资产管理的一个重要手段。通过资产管理体系的建立和实施，组织建立了较完善的资产全生命周期系统，建立起完整的资产管理治理机制。可以降低资产管理风险，持续改善绩效和提高竞争优势的能力，有利于提高公司形象和声誉并被利益相关方所认可（投资人，监管者，外部机构等）。
                        </p>
                    </div>
                    <div v-show="functionListActive==6">
                        <p>一、资产管理的益处可以包括哪些？</p>
                        <p>答：1、改善财务表现；</p>
                        <p>2、为资产投资决策提供信息资料；</p>
                        <p>3、风险管理；</p>
                        <p>4、改善服务和产品；</p>
                        <p>5、履行社会责任；</p>
                        <p>6、符合性证明；</p>
                        <p>7、提高声誉；</p>
                        <p>8、提高组织的可持续发展；</p>
                        <p>9、提高效率和效益；</p>
                        <p>二、iso 55000是硬性标准吗？</p>
                        <p>答：不是硬性标准。但ISO55000这份标准的核心精神是“令资产（含设备）最大化创造价值”，打破了“就资产论资产、就设备论设备”的束缚，深刻反映了资产管理和设备管理的本质，应该是是未来的主流。</p>
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
            functionList:[
                {id:"0",name:"产品描述"},
                {id:"1",name:"资料清单"},
                {id:"2",name:"必备条件"},
                {id:"3",name:"服务流程"},
                {id:"4",name:"预计完成时间"},
                {id:"5",name:"注意事项"},
                {id:"6",name:"常见问题"},
            ],
            functionListActive:0,
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
        font-size: 18px;
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
        align-items: center;
        justify-content: center;
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
    .commodityMid{
        height: auto;
    }
    .commodityMid /deep/ .el-icon-star-on{
        font-size: 22px;
        color: rgb(204, 204, 204);
    }
    .commodityMid /deep/ .startYellow{
        color: rgba(250, 210, 20, 1);
    }
    .commodityMid>div:first-child{
        height: 120px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .commodityMid>div:last-child{
        height: 100px;
    }
    .commodityMid>div:first-child>div{
        width: 100%;
        justify-content: flex-start;
        align-items: center;
    }
    .commodityMid>div:first-child>div>div{
        width: auto !important;
    }
    .commodityMid>div:first-child>div>span:first-child{
        width: 16%;
        font-size: 18px;
        color: rgb(110, 110, 110);
    }
    .commodityMid>div:first-child>div:first-child>span:first-child{
        width: auto;
    }
    .threeStart{
        margin-left: 1rem;
        font-size: 18px;
        color: rgb(110, 110, 110);
    }
    .commodity_iconDetail{
        margin: 0;
        padding: 1rem;
        border-top-left-radius: 0;
    }
    .commodity_iconDetail_title{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        margin-top: 1rem;
    }
    .commodity_iconDetail_title>div{
        width: auto;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        /* margin-right: 1rem; */
        /* border-top-left-radius: 10px; */
        /* border-top-right-radius: 10px; */
        padding: 0 16px;
        color: rgba(90, 90, 90, 1);
        font-size: 16px;
        cursor: pointer;
    }
    .commodity_iconDetail_title>div:first-child{
        border-top-left-radius: 10px;
    }
    .commodity_iconDetail_title>div:last-child{
        border-top-right-radius: 10px;
    }
    .commodity_iconDetail_title>.active{
        background-color: #9e0000;
        color: #fff;
    }
    .commodity_iconDetail>div{
        border: 1px solid rgb(202, 202, 202);
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .commodity_iconDetail>div>p{
        text-indent: 1em;
        font-size: 15px;
        line-height: 24px;
    }
</style>