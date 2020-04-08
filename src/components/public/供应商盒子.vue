<template>
    <div class="box" :style="'width:'+boxWidth+'px'">
        <router-link :to="boxUrl">
            <div class="img">
                <img :src="imgURL" alt="">
            </div>
            <div class="info_box" :style="boxTags==null?'flex-wrap:wrap':'flex-wrap:unset'">
                <div>
                    <h4>{{boxName}}</h4>
                    <p class="tjd">
                        <span v-if="istjd">推荐度：</span>
                        <template>
                            <i class="star">
                                <img v-for="(item,index) in creditRatings.sunNumber" :key="index" src="../../assets/icon/ri.png" alt="">
                            </i>
                            <i class="star">
                                <img v-for="(itemmount,index) in creditRatings.mountNumber" :key="index" src="../../assets/imgs/mount-y.png" alt="">
                            </i>
                            <i class="star">
                                <img v-for="(itemstart,index) in creditRatings.startNumber" :key="index" src="../../assets/imgs/star-y.png" alt="">
                            </i>
                        </template>
                    </p>
                </div>
                <div class="circleDiv" style="width:126px;">
                    <el-progress type="circle" :percentage="97" color="#9e0100" style="opacity:0"></el-progress>
                    <div class="circleCntent">
                        <p>{{goodQuality||0}}%</p>
                        <p>服务优质率</p>
                    </div>
                </div>
            </div>   
        </router-link>
        <div v-if="boxTags!=null">
            <p class="tab_title">
                <span :class="showTab?'selected':''" @mouseover="change(true)">服务标签</span>
                <span :class="!showTab?'selected':''" @mouseover="change(false)">服务客户</span>
            </p>
            <div class="change">
                <div v-show="showTab" class="tag_box">
                    <template v-for="(item,index) in boxTags">
                        <span class="tags" :key="index" v-if="item!=''&&item!=null">
                            <el-popover
                                placement="top"
                                width="150"
                                trigger="hover"
                                :content="item">
                                <span class="elButtonMy" slot="reference">{{item}}</span>
                            </el-popover>
                        </span>
                    </template>
                </div>
                <div v-show="!showTab">
                    <p v-for="(item,index) in surveyCustomerList" :key="index"><span>{{item}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            boxUrl:Object,
            boxWidth:{
                type:String,
                default:'439',
            },
            boxName:String,
            boxStar:Number,
            boxTags:{
                type:Array,
                default:null,
            },
            boxKehu:Array,
            istjd:{
                type:Boolean,
                default:false,
            },
            imgURL:"",
            goodQuality:"",
            creditRating:0,
            surveyCustomerList:"",
        },
        data(){
            return{
                showTab:true,
                creditRatings:{
                    startNumber:[],
                    mountNumber:[],
                    sunNumber:[],
                },
                secendItemSpan:-1,
                visible:false,
            }
        },
        methods:{
            change:function(Boolean){
                this.showTab=Boolean;
            },
        },
        watch: {
            creditRating(){
                this.creditRatings={
                    startNumber:[],
                    mountNumber:[],
                    sunNumber:[],
                };
                var level=this.creditRating
                if(0<=level&&level<4){
                    // 这里只有星星
                    for(var i=0;i<level;i++){
                        this.creditRatings.startNumber.push("level");
                    }
                }else if(4<=level&&level<16){
                    // 有星星 有月亮
                    for(var i=0;i<level%4;i++){
                        this.creditRatings.startNumber.push("level");
                    }
                    for(var i=0;i<parseInt(level/4);i++){
                        this.creditRatings.mountNumber.push("level");
                    }
                }else if(16<=level){
                    // 有星星 有月亮 有太阳
                    for(var i=0;i<level%4;i++){
                        this.creditRatings.startNumber.push("level");
                    }
                    for(var i=0;i<parseInt(level/4);i++){
                        this.creditRatings.mountNumber.push("level");
                    }
                    for(var i=0;i<parseInt(parseInt(level/4)/4);i++){
                        this.creditRatings.sunNumber.push("level");
                    }
                }
            }
        },
        mounted() {
            var level=this.creditRating
            if(0<=level&&level<4){
                // 这里只有星星
                for(var i=0;i<level;i++){
                    this.creditRatings.startNumber.push("level");
                }
            }else if(4<=level&&level<16){
                // 有星星 有月亮
                for(var i=0;i<level%4;i++){
                    this.creditRatings.startNumber.push("level");
                }
                for(var i=0;i<parseInt(level/4);i++){
                    this.creditRatings.mountNumber.push("level");
                }
            }else if(16<=level){
                // 有星星 有月亮 有太阳
                for(var i=0;i<level%4;i++){
                    this.creditRatings.startNumber.push("level");
                }
                for(var i=0;i<parseInt(level/4);i++){
                    this.creditRatings.mountNumber.push("level");
                }
                for(var i=0;i<parseInt(parseInt(level/4)/4);i++){
                    this.creditRatings.sunNumber.push("level");
                }
            }
        }, 
    }
</script>
<style scoped>
    .tjd{
        display: flex;
        align-items: center;
        margin-top:5px
    }
    .tjd>.star{
        margin-right: 5px;
    }
    .star img{
        margin:0px 2px;
    }
    .change{
        padding: 0 16px;
        height: 120px;
        overflow: hidden;
    }
    .change p>span{
        padding: 0 7px;
        color: rgba(0,0,0,.7);
        font-size: 14px;
        user-select: none;
    }
    .change p>span:first-of-type{
        padding-left: 0;
    }
    .info_box{
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
    }
    .tab_title{
        display: flex;
        margin-bottom: 10px;
        padding: 0 16px;
    }
    .tab_title span{
        padding-bottom: 5px;
        margin-right: 15px;
        cursor: pointer;
        font-size: 16px;
    }
    .tab_title span.selected{
        border-bottom: 1px solid #9e0100;
    }
    .tag_box{
        display: flex;
        flex-wrap: wrap;
    }
    .tag_box>.tags{
        position: relative;
        text-align: center;
    }
    .tags{
        width: calc(94%/3);
        background-color: #ffffff;
        height: 30px;
        line-height: 32px;
        border-radius: 16px;
        color: #939191;
        font-size: 14px;
        border: solid 1px #dddddd;
        margin: 0 0 10px 0;
        margin-right: 2%;
        user-select: none;
        box-sizing: border-box;
        overflow:hidden; /*超出的部分隐藏起来。*/ 
        white-space:nowrap;/*不显示的地方用省略号...代替*/
        text-overflow:ellipsis;/* 支持 IE */
    }
    .box{
        border: 1px solid #f6f6f6;
        box-sizing: border-box;
        width: 85%;
        height: auto;   
        margin: 0 auto;
        margin-bottom: 35px;;
        background-color: #fff;
    }
    .img{
        width: 100%;
        height: 148px;
        background-color: #fff;
        border-bottom: 1px solid #f6f6f6;
        text-align: center;
        padding-top: 33px !important;
    }
    .img>img{
        height: 76%;
        width: 76%;
    }
    .box>div{
        padding:10px 15px;
        box-sizing: border-box;
    }
    .box>div:first-of-type{
        padding:0;
        margin: 0;
    }
    .info_box{
        margin-top: 20px;
        justify-content: flex-end;
    }
    .info_box>div{
        width: 100%;
    }
    .box>div:last-of-type{
        margin-bottom: 20px;
    }
    .info_box h4{
        font-size: 18px;
        margin-top: 40px;
        font-weight: normal;
        font-stretch: normal;
        color: #666666;
        user-select: none;
    }
    .info_box p{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        color: #999999;
    }
    .circleDiv{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .circleDiv:after{
        content:'';
        display: block;
        width: 40px;
        height: 40px;
        background-color: #fff;
        position: absolute;
    }
    .el-progress__text{
        font-size: 20px !important;
    }
    .circleCntent{
        position: absolute;
        z-index: 9;
        /* top: 25%;
        left: 47%; 
        background: #fff;*/
    }
    .circleCntent>p{
        text-align: center;
        color: #9e0100;
        font-size: 18px;
    }
    .circleCntent>p:first-child{
        font-size: 30px;
    }
    .tagsSecend{
        position: absolute;
        top: 0;
        left: -50%;
        right: -50%;
        z-index: 2;
        width: auto;
        background: #fff;
        padding: 1px 8px;
        line-height: 32px;
        transform: translate(-2px,-1px);
        background: #fff;
        border: 1px solid #999;
        border-radius: 20px;
        display: inline-block;
    }
    .tagsChildren{
        display: inline-block;
        width:100%;/*要显示文字的宽度*/
        overflow:hidden; /*超出的部分隐藏起来。*/ 
        white-space:nowrap;/*不显示的地方用省略号...代替*/
        text-overflow:ellipsis;/* 支持 IE */
        text-align: center;
    }
    .elButtonMy{
        border: 0;
        padding: 0;
        overflow:hidden; /*超出的部分隐藏起来。*/ 
        white-space:nowrap;/*不显示的地方用省略号...代替*/
        text-overflow:ellipsis;/* 支持 IE */
        text-align: center;
    }
</style>