<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:19:05
 * @LastEditTime: 2019-08-27 15:30:35
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class='progress-two'>
        <div class='title'>
            <p class='title-top'></p>
            <p class='title-mid'>
                <span>
                    02
                </span>
                <span class='dot'>

                </span>
            </p>
            <p class='title-bottom'>服务进程</p>
        </div>
        <div class='progress-line' :style='progressStyle'>
            <div class='progressLine-part' v-for='(item,partIndex) in progressLinePart' :key='partIndex'>
                <div class='progress-line-item' v-for='(it,index) in item' :key='it.id' :class='`it${index+1}`'>
                    <div class='complete-time'>
                        <p class='time'><span v-show='it.completeStatus === 1'>{{it.createTime}}</span></p>
                        <p class='y-line'><span v-show='it.completeStatus === 1'></span></p>
                    </div>
                    <div class='circle'>
                        <div :class="{'circle-red':it.completeStatus === 1}"></div>
                    </div>
                    <div class='connect-line' :class="{'line-red': it.completeStatus === 1}"
                        v-if='(index+1) % 4 !== 0  '></div>
                    <div v-else-if='(index+1) % 4 === 0 && (partIndex+1)%2 !==0' class='polyline-right'>
                        <img src="@/assets/imgs/servers/03.png" alt="">
                    </div>
                    <div v-else class='polyline-left'>
                        <img src="@/assets/imgs/servers/04.png" alt="">
                    </div>

                    <div class='key-event'>
                        <p class='event-step'>{{it.step}}</p>
                        <p class='key-event-name' @click="showfw">{{it.keyEvent}}</p>
                        <p>
                            <ul class='event-list'>
                                <li v-for='(i,index2) in it.content' :key='index2'>{{i}}</li>
                            </ul>
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
                progressLine: simData.progressLine,
                arr:[
                    //服务日志详情弹窗
                    [
                        720,550,"服务日志详情",
                        [
                            {name:1,title:"服务主题：",fontSize:"fontFour",answer:"服务日志的名称",fontColor:"fontColor9"},
                            {name:1,title:"服务时间：",fontSize:"fontFour",answer:"2019.04.25-2019.04.28",fontColor:"fontColor9"},
                            {name:1,title:"服务地点：",fontSize:"fontFour",answer:"服务地点描述",fontColor:"fontColor9"},
                            {name:1,title:"参与人员：",fontSize:"fontFour",answer:"参与人员名称、参与人员名称、参与人员名称",fontColor:"fontColor9"},
                            {name:"borderTop",borderTop:"borderTop"},
                            {name:25,bottomTab:[
                                {title:"服务内容",index:0},
                                {title:"待解决问题",index:1},
                                {title:"下阶段服务计划",index:2},
                                {title:"意见反馈",index:3},
                                {title:"现场照片",index:4},
                            ],tabContent:[
                                {index:0,content:jsFH.Contenthtml1},
                                {index:1,content:jsFH.Contenthtml2},
                                {index:2,content:jsFH.Contenthtml3},
                                {index:3,content:jsFH.Contenthtml4,fontSize:"fontFour",jfqr:"甲方确认：",jfqrContent:"本次服务内容尚未确认，请通知需求方确认",jfqrContentColor:"q999999",fontSizetwo:"fontTwo q999999",jf:"甲方：",jfContent:"",rq:"日期：",rqContent:""},
                            ]}
                        ]
                    ],
                ],
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

    .progress-two {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;

    }

    .progress-two .title {
        align-self: flex-start;
        width: 17.5%;
        height: 100%
    }

    .progress-two .progress-line {
        flex: 5;
        width: 80%;
    }

    .progress-two .progress-line .progressLine-part {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /* align-items: center; */
    }

    .progress-two .progress-line .progressLine-part:nth-of-type(1) {
        border-left: 1px solid #eeeeee;
    }

    .progress-two .progress-line .progress-line-item {
        position: relative;
        text-align: center;
        min-height: 180px;
        padding-bottom: 5px;
        width: 24%;
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
        width: 98%;
        height: 2px;
        top: 21%;
        left: -51%;
        background: #bbbbbb;
    }

    .progressLine-part:nth-of-type(odd) .connect-line {
        width: 97%;
        height: 2px;
        position: absolute;
        top: 21%;
        left: 54%;
        background: #bbbbbb;
    }

    .progressLine-part .line-red{
            background: #9e0100 !important;
    }

    .progressLine-part:nth-last-of-type(1) {
        display: flex;
    }

    .progressLine-part:nth-last-of-type(1) .progress-line-item {
        /* width: 24%; */
    }

    .progressLine-part:nth-last-of-type(1) .connect-line {
        /* width: 97%; */
    }

    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 1) {
        margin-right: calc(24% + 4% / 3);
    }

    
    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 2) {
        margin-right: calc(48% + 8% / 3);
    }

    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 1) {
        margin-left: calc(24% + 4% / 3);
         /* margin-left: calc(30% + 4% / 3); */
    }

    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 2) {
        margin-left: calc(48% + 8% / 3);
        /* margin-left: calc(53% + 8% / 3); */
    }

    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1) .connect-line {
        height: 0px;
        width: 0px
    }

    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1) .connect-line {
        height: 0px;
        width: 0px
    }

    .progress-line-item .connect-line {}

    .connect-line:nth-last-of-type(1) {
        background: #fff;
    }

    .progress-line-item .polyline-right {
        position: absolute;
        left: 51%;
        top: 20%;
        z-index: -1
    }

    .progress-line-item .polyline-right img {
        
    }

    .progress-line-item .polyline-left {
        position: absolute;
        top: 20%;
        left:-8%;
        z-index: -1
    }

    .progress-line-item .polyline-left img {
       
    }


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
        z-index: 1000;
    }

    .progress-line-item .key-event .event-step {
        font-weight: bold;
        font-size: 34px;
        color: #9e0100;
        margin-top: 10px;
    }

    .key-event {
        margin: 0 auto;
        max-height: 220px;
    }

    .key-event .event-list {
        background: #fcf7f7;
        color: #666666;
        width: 50%;
        margin: 0 auto;
        border-radius: 50%;
    }

    .key-event .event-list li {
        padding-top: 10px;
    }

    .key-event-name {
        color: #353535;
        font-size: 18px;
        font-weight: 600;

    }

    .circle {
        z-index: 999;
    }

    .circle .circle-red {

        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #9e0100;
    }
</style>