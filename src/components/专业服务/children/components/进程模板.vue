<template>
    <div class="nr">
        <template v-if="model==1">
            <p>交易进程</p>
            <div class="交易进程">
                <span :class="1<=step?'selected':''">甄选</span>
                <span>
                    <img v-if="1==step" src="../../未标题-1.gif"/>
                    <img v-else-if="1<=step" src="../../over.png"/>
                    <img v-else src="../../未标题-1.png"/>
                </span>
                <span :class="2<=step?'selected':''">投标</span>
                <span>
                    <img v-if="2==step" src="../../未标题-1.gif"/>
                    <img v-else-if="2<=step" src="../../over.png"/>
                    <img v-else src="../../未标题-1.png"/>
                </span>
                <span :class="3<=step?'selected':''">选标</span>
                <span>
                    <img v-if="3==step" src="../../未标题-1.gif"/>
                    <img v-else-if="3<=step" src="../../over.png"/>
                    <img v-else src="../../未标题-1.png"/>
                </span>
                <span :class="4<=step?'selected':''">中标</span>
                <span>
                    <img v-if="4==step" src="../../未标题-1.gif"/>
                    <img v-else-if="4<=step" src="../../over.png"/>
                    <img v-else src="../../未标题-1.png"/>
                </span>
                <span :class="5<=step?'selected':''" @click="show2">成交</span>
                <span @click="show1" class="wytb">
                    <img src="../../../../assets/tc/auction.png" alt="">
                    我要投标
                </span>
            </div>
        </template>
        <template v-else-if="model==2">
            <div class="通用进程">
                <div>
                    <hr/>
                    <hr class="完成进度" :style="'width:'+(230*(step+1))+'px;'"/>
                    <div class="事件">
                        <p class="时间">{{startTime}}</p>
                        <i class="进度标记 over"></i>
                    </div>
                    <template v-for="(item,index) in content">
                        <div class="事件">
                            <p class="时间">{{item.time}}</p>
                            <i :class="step>index?'进度标记 over':'进度标记'"></i>
                            <span class="步骤">{{index+1}}</span>
                            <h5 class="事件标题" @click="show3">{{item.title}}</h5>
                            <slot name="ms">
                            </slot>
                        </div>
                    </template>
                    <div class="事件">
                        <p class="时间">{{endTime}}</p>
                        <i :class="step>=(content.length+1)?'进度标记 over':'进度标记'"></i>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import Bus from '../../../../bus.js'
import imgAlss from '../../../../assets/tc/alss.png'
import imgGSJJ from '../../../../assets/tc/gsjj.png'
import jsFH from './xy.js'
    export default {
        props: {
            step: Number,
            model: {
                type: String,
                default:'1',
            },
            startTime:{
                type:String,
                default:'1970.01.01'
            },
            endTime:{
                type:String,
                default:'1970.01.01'
            },
            content:{
                type:Array,
                default:()=>[
                    {
                        "time":'2019.01.02',
                        "title":'事件标题',
                        "content":'事件描事件描述事件描述事件描述事件描述事件描事件描述事件描述事件描述事件描述'
                    },
                    {
                        "time":'2019.01.03',
                        "title":'事件标题',
                        "content":'事件描事件描述事件描述事件描述事件描述事件描事件描述事件描述事件描述事件描述'
                    },
                ],
            },
        },
        data(){
            return{
                jsFH,
                shijian:1,
                arr:[
                    //我要投标
                    [
                        720,
                        550,
                        "我要投标",
                        [
                            {name:2,title:"公司名称：",fontSize:"fontFour",format:"text"},
                            {name:16,title:"需求内容：",fontSize:"fontFour",width:550,height:96},
                            {name:18,title:"服务计划：",fontSize:"fontFour",},  
                            {name:18,title:"投标文件：",fontSize:"fontFour",},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:19,mc:"案例实施：",fontSize:"fontFour",w:188,h:144,alssSZ:[
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                            ]},
                            {name:5,title:"投标"},
                        ],
                    ],
                    [
                        720,
                        600,
                        "投标服务商详情-第一次投标",
                        [
                            {name:20,title:"服务商的名称",jj:"公司简介：",jjFontSize:"fontFour",jjContent:"公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容",cxfs:"诚信分数：",CxFontSize:"fontFour",cxfsContent:"100分",img:imgGSJJ}, 
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:21,title:"投标时间：",FontSize:"fontFour",answer:"2019.03.31",bzAnswer:"截至日期2019.04.06"},
                            {name:22,title:"服务计划：",FontSize:"fontFour",wj:[
                                {title:"服务计划1",lj:"www.baidu.com"},
                                {title:"服务计划2",lj:"www.baidu.com"},
                            ]},
                            {name:22,title:"投标文件：",FontSize:"fontFour",wj:[
                                {title:"报价表",lj:"www.baidu.com"},
                                {title:"附件",lj:"www.baidu.com"},
                            ]},
                            {name:19,mc:"案例实施：",fontSize:"fontFour",w:188,h:144,alssSZ:[
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                            ]},
                            {name:5,title:"修改投标信息"},
                        ],
                    ], 
                    [
                        720,
                        600,
                        "投标服务商详情-第一次投标",
                        [
                            {name:20,title:"服务商的名称",jj:"公司简介：",jjFontSize:"fontFour",jjContent:"公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容",cxfs:"诚信分数：",CxFontSize:"fontFour",cxfsContent:"100分",img:imgGSJJ}, 
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:21,title:"投标时间：",FontSize:"fontFour",answer:"2019.03.31"},
                            {name:22,title:"服务计划：",FontSize:"fontFour",wj:[
                                {title:"服务计划1",lj:"www.baidu.com"},
                                {title:"服务计划2",lj:"www.baidu.com"},
                            ]},
                            {name:22,title:"投标文件：",FontSize:"fontFour",wj:[
                                {title:"报价表",lj:"www.baidu.com"},
                                {title:"附件",lj:"www.baidu.com"},
                            ]},
                            {name:19,mc:"案例实施：",fontSize:"fontFour",w:188,h:144,alssSZ:[
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                                {imgURL:imgAlss,title:"案例项目名称"},
                            ]},
                            {name:5,title:"修改投标信息"},
                        ],
                    ],
                ],
                arrTwo:[
                    [
                        720,
                        660,
                        "成交",
                        [
                            {name:23,titleA:"请仔细阅读",titleRed:"专业服务网络交易协议",titleB:"后完成交易",Nr:"内容：",fontSize:"fontTwo",contentTitle:"专业服务网络协议",contentTitleColor:"ColorRed",content:[
                                {htmls:jsFH.Phtml}
                            ]}
                        ]
                    ]
                ],
                arrThree:[
                    [
                        720,550,"服务日志详情",
                        [
                            {name:1,title:"服务主题：",fontSize:"fontFour",answer:"服务日志的名称",fontColor:"fontColor9"},
                            {name:1,title:"服务时间：",fontSize:"fontFour",answer:"2019.04.25-2019.04.28",fontColor:"fontColor9"},
                            {name:1,title:"服务地点：",fontSize:"fontFour",answer:"服务地点描述",fontColor:"fontColor9"},
                            {name:1,title:"参与人员：",fontSize:"fontFour",answer:"参与人员名称、参与人员名称、参与人员名称",fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:24,bottomTab:[
                                {title:"服务内容",index:0},
                                {title:"待解决问题",index:1},
                                {title:"下阶段服务计划",index:2},
                                {title:"意见反馈",index:3},
                            ],tabContent:[
                                {index:0,content:jsFH.Contenthtml1},
                                {index:1,content:jsFH.Contenthtml2},
                                {index:2,content:jsFH.Contenthtml3},
                                {index:3,content:jsFH.Contenthtml4},
                            ]
                            }
                        ]
                    ]
                ],
                arrFour:[
                    [
                       720,550,"阶段费用支付详情", 

                    ]
                ],
            }
        },
        methods:{
            show1(){
                // 传数组到bus仓库并起姓名字
                Bus.$emit('arrs',this.arr)
                this.$store.commit("changeToastZjTrue")
            },
            show2(){
                // 传数组到bus仓库并起姓名字
                Bus.$emit('arrs',this.arrTwo)
                this.$store.commit("changeToastZjTrue")
            },
            show3(){
                // 传数组到bus仓库并起姓名字
                Bus.$emit('arrs',this.arrThree)
                this.$store.commit("changeToastZjTrue")
            },
            show4(){
                // 传数组到bus仓库并起姓名字
                Bus.$emit('arrs',this.arrFour)
                this.$store.commit("changeToastZjTrue")
            },
        },
    }
</script>

<style scoped>
    .nr{
        display: flex;
        flex-direction: column;
    }

    .nr p{
        margin-bottom: 10px;
    }

    .交易进程 {
        display: flex;
        align-items: center;
        padding: 30px 0;
    }

    .交易进程 span {
        margin-right: 10px;
        border-radius: 5px;
    }

    .交易进程 span:nth-of-type(2n-1) {
        color: #9e0000;
        background: #e5e5e5;
        height: 30px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
    }
    .交易进程 span.selected {
        color: #fff;
        background: #9e0000;
    }
    .通用进程 {
        max-width: calc(1400px - 205px);
        overflow-y: hidden;
        overflow-x: auto;
        margin-left: 50px;
        display: flex;
    }
    .通用进程>div{
        left: -50px;
        display: flex;
        position: relative;
        /*padding-bottom: 50px;*/
    }
    .通用进程 hr{
        position: absolute;
        height: 3px;
        width: calc(100% - 170px);
        background: rgba(0,0,0,.1);
        border: none;
        left: 85px;
        top: 60px;
    }
    .通用进程 hr.完成进度{
        max-width: calc(100% - 170px);
        background: #9e0000;
    }
    /*美化滚动条*/
    .通用进程::-webkit-scrollbar {
        width: 12px;
        height: 6px;
    }
    .通用进程::-webkit-scrollbar-track {
        background-color:#efefef;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    .通用进程::-webkit-scrollbar-thumb {
        background-color:#9e0100;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }

    .通用进程 .事件{
        width: 168px;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        margin-right: 60px;
    }

    .通用进程 .事件:last-of-type{
        margin-right: 0px;
    }
    .事件 .时间{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #8a8a8a;
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }
    .事件 .时间:after{
        content: '';
        display: block;
        position: absolute;
        background: #9e0000;
        width: 1px;
        height: 15px;
        top: 25px;
    }
    .事件 .进度标记{
        background: #fff;
        width: 24px;
        height: 24px;
        box-sizing: border-box;
        border: 3px solid #9e0000;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items:center;
        justify-content: center;
    }
    .事件 .进度标记.over:after{
        content: '';
        display:block;
        width: 70%;
        height: 70%;
        box-sizing: border-box;
        border-radius: 50%;
        background: #9e0000;
    }
    .事件 .步骤{
        margin: 20px 0;
        font-family: '阿里汉仪智能黑体';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #a10908;
    }
    .事件 .事件标题{
        font-family: HiraginoSansGB-W3;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #353535;
    }
    .wytb{
        cursor: pointer;
        width: 100px;
        height: 30px;
        background-color: #dddddd;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
    .wytb>img{
        position: relative;
        top: 3px;
    }

</style>