<template>
    <div class="我的活动" id="tsjb">
        <p class="wodehuodong_title">我的活动
            <span class="more">
                <!-- <template v-for="(item,index) in huodongTitle">
                    <i :class="ishuodong===index?'selected':''" @click="change(index)">{{item}}</i>
                </template> -->
            </span>
        </p>
         <p class='button-list'>
                    <button class="disabled" :disabled="ishuodong===0" @click="lessen">&lt;</button>
                    <button class="disabled" :disabled="ishuodong===huodongTitle.length-1"  @click="add">&gt;</button>
        </p>
        <div class="info">
            <template v-for="(item,index) in huodongTitle.length">
                <table v-show="index==ishuodong" class="huodong">
                    <thead>
                    <tr>
                        <th>序{{index}}</th>
                        <th>活动类型</th>
                        <th>活动名称</th>
                        <th>活动内容</th>
                        <th>活动时间</th>
                        <th>参与人数</th>
                        <th>活动地点</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="item in huodongInfo">
                        <tr>
                            <td>{{item}}</td>
                            <td>英国名校交流考察</td>
                            <td>公益活动的详细内容</td>
                            <td>公益活动的详细内容</td>
                            <td>2019.05.20——06.02</td>
                            <td>20人</td>
                            <td style='text-align:center'>重庆</td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </template>
            <!-- <p>
                <button class="disabled" :disabled="ishuodong===0" @click="lessen">&lt;</button>
                <button class="disabled" :disabled="ishuodong===huodongTitle.length-1"  @click="add">&gt;</button>
            </p> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ishuodong:0,
                huodongTitle:[
                    '国内外游学',
                    '培训学习',
                    '私董会',
                    '产业对接会',
                    '项目路演',
                    '携同拓展',
                ],
                huodongInfo:[],
                pageItem:0
            }
        },
        created(){
            for(var a=0;a<10;a++){
                this.huodongInfo.push("美国全真课堂体验系列游学项目"+a)
            }
        },
        filters:{
            page(num){
                // console.info(num);
                // var arr=[];
                // for(var a=num;a<num+5;a++){
                //     arr.push(this.huodongInfo[a]);
                // }
                // return arr;
            }
        },
        methods:{
            change(e){
                this.ishuodong=e;
            },
            add(){
                this.ishuodong++;
                // this.pageItem+=5;
                // this.page(pageItem);
            },
            lessen(){
                this.ishuodong--;
                // this.pageItem-=5;
                // this.page(pageItem);
            }
        }
    }
</script>

<style scoped>
    .我的活动{
        background: #fff;
        box-sizing: border-box;
        padding: 25px;
        margin-bottom: 20px;
    }
    .wodehuodong_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        width:30%;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100; 
        display: flex;
        justify-content: space-between;
    }
    .wodehuodong_title span.more{
        /* font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #cccccc; */
    }
    .info>div{
        box-sizing: border-box;
    }
    .info>div p{
        line-height: 30px;
        margin-bottom: 10px;
    }
    .xqbtn{
        display: flex;
        width: 300px;
        height: 51px;
        border-radius: 26px;
        border: solid 1px #9e0100;
        color: #9e0100;
        justify-content: center;
        align-items: center;
    }
    .more i{
        font-style: normal;
        margin-left: 20px;
        cursor:pointer;
    }
    .more i.selected{
        color: #333333;
    }
    .huodong{
        background-color: #fafafa;
        padding: 15px;
        width: 100%;
        height:100%;
        text-align: center;
        box-sizing: border-box;
    }
    .huodong thead th{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #000000;
        display: inline-block;
        width: 14%;
        text-align: center;

    }
    .huodong tbody td{
        font-size: 14px;
        display: inline-block;
        width: 14%;
        font-weight: normal;
        letter-spacing: 0px;
        color: #777777;
        padding-bottom: 8px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .info>p{
        display: flex;
        margin-top: 20px;
        justify-content: flex-end;
    }
    .info>p button {
        width: 28px;
        height: 28px;
        background-color:#9e0100;
        border-radius: 2px;
        border: none;
        font-family: '黑体';
        font-size: 20px;
        margin-left: 10px;
        color: #fff;
        cursor: pointer;
    }
    .info>p button:disabled{
        background: #dddddd;
    }
    .button-list{
       /* float:right; */
       
    }
    .我的活动 .button-list button{
        width: 28px;
        height: 28px;
        background-color:#9e0100;
        border-radius: 2px;
        border: none;
        font-family: '黑体';
        font-size: 20px;
        margin-left: 10px;
        color: #fff;
        cursor: pointer;
        position: relative;
        left:90%;
        top:-30px;
        
    }
    .我的活动 .button-list button:disabled{
         background: #dddddd;
    }
    @media screen and (max-width: 415px) {
        .我的活动{
            padding: 8px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .wodehuodong_title{
            margin:0;
            width: 50%;
        }
        .button-list{
            width: 25%;
            display: flex;
            flex-direction: row;
            justify-content: end;
        }
        .我的活动 .button-list button{
            position: relative;
            top: 0;
            left: 0;
        }
        .info{
            margin-top: 16px;
            overflow: scroll;
        }
        .info>table{
            width: 1140px;
            height: auto;
            padding: 0px;
        }
    }
</style>