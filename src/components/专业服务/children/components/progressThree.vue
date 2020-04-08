<template>
    <div class='progress-three'>
        <div class='title'>
            <p class='title-top'></p>
            <p class='title-mid'>
                <span>
                    03
                </span>
                <span class='dot'>

                </span>
            </p>
            <p class='title-bottom'>费用支付</p>
        </div>
        <div class='progress-line' :style='progressStyle'>
            <div v-for='(item,partIndex) in progressLinePart' class='progressLine-part'>
                <div class='progress-line-item' v-for='(it,index) in item' :key='it.id' :class='`it${index+1}`'>
                    <div class='complete-time'>
                        <p class='time'><span v-show='it.completeStatus === 1'>{{it.createTime}}</span></p>
                        <p class='y-line'><span v-show='it.completeStatus === 1'></span></p>
                    </div>
                    <div class='circle'>
                        <div :class="{'circle-red':it.completeStatus === 1}"></div>
                    </div>
                    <div class='connect-line' :class="{'line-red': it.completeStatus === 1}"
                        v-if='(index+1) % 4 !== 0 '></div>
                    <div v-else-if='(index+1) % 4 === 0 && (partIndex+1)%2 !==0' class='polyline-right'>
                        <img src="@/assets/imgs/servers/03.png" alt="">
                    </div>
                    <div v-else class='polyline-left'>
                        <img src="@/assets/imgs/servers/04.png" alt="">
                    </div>

                    <div class='key-event'>
                        <p class='event-step'>{{it.step}}</p>
                        <p class='key-event-name' @click="showfw">{{it.keyEvent}}</p>
                        <p class='text'>支付金额</p>
                        <p class='afford-money'>15元</p>
                        <p>
                            <span style='color:#999999;text-decoration: underline;cursor: pointer;'>阶段确认书</span>
                            <span style='color:#9e0100;margin-left:15px;cursor: pointer;'>下载</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import simData from '@/data/simulatedData'    
import Bus from '../../../../bus.js'
import jsFH from './xy.js'
    export default {
        data() {
            return {
                progressLine: simData.serverCost,
                arr:[
                    //阶段项目验收确认书详情
                    [
                        720,800,"阶段项目验收确认书详情",
                        [
                            {name:26,jyxm:[
                                {first:"项目名称：",fontSize:"fontFour",secend:"项目的名称",secendColor:"q999999"},
                                {first:"合同编号：",fontSize:"fontFour",secend:"GLZX-20190520-004",secendColor:"q999999"},
                                {first:"甲方公司：",fontSize:"fontFour",secend:"甲方公司名称",secendColor:"q999999"},
                                {first:"乙方公司：",fontSize:"fontFour",secend:"乙方公司名称",secendColor:"q999999"},
                            ]},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:1,title:"服务概况"},
                            {name:1,title:"服务时间：",fontSize:"fontFour",answer:"2019.04.25-2019.05.16",fontColor:"fontColor9"},
                            {name:26,jyxm:[
                                {first:"公司参与人员：",secend:"名称一,名称一,名称一,名称一,名称一,名称一",secendColor:"q999999"},
                                {first:"项目小组人员：",secend:"名称一,名称一,名称一,名称一,名称一,名称一",secendColor:"q999999"},
                                
                            ]},
                            {name:27,title:"服务内容：",fontSize:"fontFour",answer:"该阶段服务的详细内容该阶段服务的详细内容，该阶段服务的详细内容该阶段服务的详细内容该阶段服务的详细内容，该阶段服务的详细内容该阶段服务的详细内容。",fontColor:"fontColor9"},
                            {name:27,title:"输出成果：",fontSize:"fontFour",answer:"对该阶段输出成果的详细叙述对该阶段输出成果的详细叙述，对该阶段输出成果的详细叙述对该阶段输出成果的详细叙述。",fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:26,jyxm:[
                                {first:"客户签字：",fontSize:"fontFour",secend:"甲方公司名称",secendColor:"q999999"},
                                {first:"签字日期：",fontSize:"fontFour",secend:"2019.05.16",secendColor:"q999999"},
                                {first:"第三方签字：",fontSize:"fontFive",secend:"同道合平台",secendColor:"q999999"},
                                {first:"签字日期：",fontSize:"fontFour",secend:"2019.05.16",secendColor:"q999999"},
                            ]},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:27,title:"声明：",fontSize:"fontTwo",answer:"以上内容签字确认完毕，即代表公司针对上述服务阶段/服务内容的确认完成，如公司对输出成果还有疑虑，项目组将根据公司意见，结合自己的专业判断对该方案进行修订完善并对实施情况做出跟踪辅导，如还有任何疑问，请向同道合平台进行反馈或投诉，在此也感谢公司对同道合平台以及服务供应商的支持和配合！",fontColor:"fontColor9"},
                        ]
                    ],
                ],
                arr2:[
                    //结项确认书详情
                    [
                        720,750,"阶段项目验收确认书详情",
                        [
                            {name:26,jyxm:[
                                {first:"项目名称：",fontSize:"fontFour",secend:"项目的名称",secendColor:"q999999"},
                                {first:"合同编号：",fontSize:"fontFour",secend:"GLZX-20190520-004",secendColor:"q999999"},
                                {first:"甲方公司：",fontSize:"fontFour",secend:"甲方公司名称",secendColor:"q999999"},
                                {first:"乙方公司：",fontSize:"fontFour",secend:"乙方公司名称",secendColor:"q999999"},
                            ]},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:1,title:"服务概况"},
                            {name:26,jyxm:[
                                {first:"项目经理：",fontSize:"fontFour",secend:"项目经理名称",secendColor:"q999999"},
                                {first:"申请时间：",fontSize:"fontFour",secend:"2019.04.25",secendColor:"q999999"},
                                {first:"整体验收时间：",fontSize:"fontFour",secend:"2019.07.30",secendColor:"q999999"},
                                {first:"保质期：",fontSize:"fontThree",secend:"2019.07.30-2019.09.29",secendColor:"q999999"},
                            ]},
                            {name:28,title:"保质期承诺：",fontSize:"fontFive",answer:[
                                {content:"服务方郑重承诺，按照合同约定履行质保期，具体承诺如下："},
                                {content:"1.服务方保证整体验收后，对后续运行过程中出现的问题提供电话咨询、现场指导、运行纠偏等"},
                                {content:"2.服务方保证根据后续运行情况对原解决方案进行修改和调整，以实现预期效果"},
                                {content:"3.服务方保证对客户问题及时响应，立即行动，负责到底"},
                            ],fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:27,title:"致甲方公司的名称：",answer:"我司已按合同要求履行质保期承诺，并由第三方（平台）确认合格，请予以结项。",fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:27,title:"甲方意见：",fontSize:"fontTwo",answer:"我司已按合同要求履行质保期承诺，并由第三方（平台）确认合格，请予以结项。",fontColor:"fontColor9"},
                            {name:29,contents:[
                                {title:"甲方：",fontSize:"fontTwo",answer:"甲方公司名称",fontColor:"q999999"},
                                {title:"日期：",fontSize:"fontTwo",answer:"2019.05.16",fontColor:"q999999"}
                            ]}
                        ]
                    ]
                ],
                arr3:[
                    //项目整体验收书详情
                    [
                        720,780,"阶段项目验收确认书详情",
                        [
                            {name:26,jyxm:[
                                {first:"项目名称：",fontSize:"fontFour",secend:"项目的名称",secendColor:"q999999"},
                                {first:"合同编号：",fontSize:"fontFour",secend:"GLZX-20190520-004",secendColor:"q999999"},
                                {first:"甲方公司：",fontSize:"fontFour",secend:"甲方公司名称",secendColor:"q999999"},
                                {first:"乙方公司：",fontSize:"fontFour",secend:"乙方公司名称",secendColor:"q999999"},
                            ]},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:1,title:"服务概况"},
                            {name:26,jyxm:[
                                {first:"项目经理：",fontSize:"fontFour",secend:"项目经理名称",secendColor:"q999999"},
                                {first:"申请时间：",fontSize:"fontFour",secend:"2019.04.25",secendColor:"q999999"},
                                {first:"项目服务起止时间：",secend:"2019.07.30-2019.07.30",secendColor:"q999999"},
                            ]},
                            {name:27,title:"服务内容：",fontSize:"fontFour",answer:"该阶段服务的详细内容该阶段服务的详细内容，该阶段服务的详细内容该阶段服务的详细内容该阶段服务的详细内容，该阶段服务的详细内容该阶段服务的详细内容。",fontColor:"fontColor9"},
                            {name:27,title:"输出成果：",fontSize:"fontFour",answer:"对该阶段输出成果的详细叙述对该阶段输出成果的详细叙述，对该阶段输出成果的详细叙述对该阶段输出成果的详细叙述。",fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:27,title:"致甲方公司的名称：",answer:"我司已按合同要求完成相关服务内容，所有输出成果已向贵司提交，经第三方（平台）评审，请予以验收。",fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:30,bottomTab:[
                                {title:"平台方审核意见",index:0},
                                {title:"甲方验收意见",index:1},
                            ],tabContent:[
                                {index:0,content:jsFH.Contenthtml5},
                                {index:1,content:jsFH.Contenthtml6},
                            ]},
                            {name:29,contents:[
                                {title:"甲方：",fontSize:"fontTwo",answer:"甲方公司名称",fontColor:"q999999"},
                                {title:"日期：",fontSize:"fontTwo",answer:"2019.05.16",fontColor:"q999999"}
                            ]}

                        ]
                    ]
                ]
            }
        },
        computed: {
            progressStyle() {
                let len = document.getElementsByClassName('progress-line').length;
                let columns = len > 4 ? 4 : len;
                let rows = Math.floor(len % 4);
                return {}
            },
            progressLinePart() {
                let res = []
                for (let i = 0; i <= Math.floor(this.progressLine.length / 4); i++) {
                    res.push(this.progressLine.slice(4 * i, 4 * (i + 1)));
                }
                return res;
            }
        },
        methods: {
            showfw(){
                // 传数组到bus仓库并起姓名字
                Bus.$emit('arrs',this.arr)
                this.$store.commit("changeToastZjTrue")
            }
        },
    }
</script>

<style scoped>
    .title .title-top {
        width: 15%;
        height: 3px;
        background: #000;
        margin-bottom: 5px;
    }

    .title .title-mid span {
        font-size: 30px;
        font-weight: 600;
    }

    .title .title-mid .dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #000;
    }

    .title .title-bottom {
        font-weight: 600;

    }

    .progress-three {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 100px;

    }

    .progress-three .title {
        align-self: flex-start;
        width: 17.5%;
        height: 100%
    }

    .progress-three .progress-line {
        flex: 5;
        width: 80%;
    }

    .progress-three .progress-line .progressLine-part {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        align-items: center;
    }

    .progress-three .progress-line .progressLine-part:nth-of-type(1) {
        border-left: 1px solid #eeeeee;
    }

    .progress-three .progress-line .progress-line-item {
        position: relative;
        text-align: center;
        min-height: 180px;
        width: 25%;
    }

    .progress-line-item:nth-last-of-type(1) {
        display: block;
        content: '';

    }

    .progressLine-part:nth-of-type(even) {
        flex-direction: row-reverse;
    }

    .progressLine-part:nth-of-type(even) .connect-line {
        position: absolute;
        width: 91.5%;
        height: 2px;
        top: 21%;
        left: -46%;
        background: #bbbbbb;
    }

    .progressLine-part:nth-of-type(odd) .connect-line {
        width: 91.5%;
        height: 2px;
        position: absolute;
        top: 21%;
        left: 54%;
        background: #bbbbbb;
    }
    
    .progressLine-part .line-red{
            background: #9e0100 !important;
    }

    .progressLine-part:nth-last-of-type(1) .progress-line-item {
        width: 24%;
    }

    .progressLine-part:nth-last-of-type(1) .connect-line {
        /* width: 124%; */
        width: 92%;
    }

    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 1) {
        /* margin-right: calc(24% + 4% / 3); */
        margin-right: calc(24% + 4% / 3);
    }

    /* 如果最后一行是2个元素 */
    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 2) {
        /* margin-right: calc(48% + 8% / 3); */
         margin-right: calc(48% + 8% / 3);
    }

    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 1) {
        /* margin-left: calc(24% + 4% / 3); */
         margin-left: calc(24% + 4% / 3);
    }

    /* 如果最后一行是2个元素 */
    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 2) {
        /* margin-left: calc(48% + 8% / 3); */
         margin-left: calc(48% + 8% / 3);
    }

    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1) .connect-line {
        height: 0px;
        width: 0px
    }

    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1) .connect-line {
        height: 0px;
        width: 0px
    }

    .connect-line:nth-last-of-type(1) {
        background: #fff;
    }

    .progress-line-item .polyline-right {
        position: absolute;
        left: 50%;
        top: 20%;
        z-index: -1;
    }

    .progress-line-item .polyline-right img {}

    .progress-line-item .polyline-left {
        position: absolute;
        top: 20%;
        z-index: -1;
    }

    .progress-line-item .polyline-left img {}


    .line-red {
        background: #9e0100
    }

    .progress-line-item .complete-time .time {
        height: 18px;
    }

    .progress-line-item .complete-time .y-line {
        width: 2px;
        height: 15px;
        margin: 10px auto;
    }

    .progress-line-item .complete-time .y-line span {
        display: inline-block;
        width: 2px;
        height: 15px;
        background: #9e0100;

    }

    .progress-line-item .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #9e0100;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        background: #fff;
    }

    .progress-line-item .key-event .event-step {
        font-weight: bold;
        font-size: 34px;
        color: #9e0100;
        margin-top: 10px;
    }

    .key-event {
        margin: 0 auto;
        height: 220px;
    }

    .key-event p {
        margin: 10px 0;
    }

    .key-event .text {}

    .key-event .afford-money {
        width: 25%;
        padding: 5px 20px;
        margin: 0 auto;
        color: #fff;
        background: #9e0100;
        border-radius: 4px;
    }

    .key-event .event-list li {
        padding-top: 10px;
    }

    .key-event-name {
        color: #353535;
        font-size: 18px;
        font-weight: 600;

    }
    .circle-red{
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #9e0100;
    }


</style>