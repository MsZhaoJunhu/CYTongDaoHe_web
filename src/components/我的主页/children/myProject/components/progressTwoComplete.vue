<template>
    <div class='progress-two-complete'>
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
            <div class='progressLine-part' v-for='(item,partIndex) in progressLinePart'>
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
                        <p class='key-event-name'>{{it.keyEvent}}</p>
                        <p>
                            <ul class='event-list'>
                                <li v-for='i in it.content'>{{i}}</li>
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
    export default {
        data() {
            return {
                progressLine: simData.progressComplete
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
        mounted() {

        }
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

    .progress-two-complete {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;

    }

    .progress-two-complete .title {
        align-self: flex-start;
        width: 17.5%;
        height: 100%
    }

    .progress-two-complete .progress-line {
        flex: 5;
        width: 80%;
    }

    .progress-two-complete .progress-line .progressLine-part {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /* align-items: center; */
    }

    .progress-two-complete .progress-line .progressLine-part:nth-of-type(1) {
        border-left: 1px solid #eeeeee;
    }

    .progress-two-complete .progress-line .progress-line-item {
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
        width: 97%;
        height: 2px;
        top: 21%;
        left: -51%;
        background: #9e0100;
    }

    .progressLine-part:nth-of-type(odd) .connect-line {
        width: 97%;
        height: 2px;
        position: absolute;
        top: 21%;
        left: 54%;
        background: #9e0100;
    }

    .progressLine-part:nth-last-of-type(1) {
        display: flex;
        /* justify-content: space-between;
        flex-wrap: wrap; */
        /* width:75%; */


    }

    .progressLine-part:nth-last-of-type(1) .progress-line-item {
        width: 24%;
    }

    /* .progressLine-part:nth-last-of-type(1) .progress-line-item:not(:nth-child(4n)){
        margin-right: calc(4% / 2 );
    } */
    .progressLine-part:nth-last-of-type(1) .connect-line {

        width: 97%;
    }

    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 1) {
        margin-right: calc(24% + 4% / 3);
    }

    /* 如果最后一行是2个元素 */
    .progressLine-part:nth-of-type(odd):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 2) {
        margin-right: calc(48% + 8% / 3);
    }

    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 1) {
        margin-left: calc(24% + 4% / 3);
    }

    /* 如果最后一行是2个元素 */
    .progressLine-part:nth-of-type(even):nth-last-of-type(1) .progress-line-item:nth-last-of-type(1):nth-child(4n - 2) {
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

    .progress-line-item .connect-line {}

    .connect-line:nth-last-of-type(1) {
        background: #fff;
    }

    .progress-line-item .polyline-right {
        position: absolute;
        left: 50%;
        top: 20%;
        z-index: -1
    }

    .progress-line-item .polyline-right img {
       
    }

    .progress-line-item .polyline-left {
        position: absolute;
        /* left:-120%; */
        top: 20%;
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
        background: #fff;
        z-index: 99999;
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