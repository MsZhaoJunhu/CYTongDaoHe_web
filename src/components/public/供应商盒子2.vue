<template>
    <div class="box" :style="'width:'+boxWidth+'px'">
        <router-link :to="boxUrl">
            <div class="img">
                <img :src="imgURL" alt="">
            </div>
            <div class="info" :style="boxTags==null?'flex-wrap:wrap':'flex-wrap:unset'">
                <div>
                    <h4>{{boxName}}</h4>
                    <p class="tjd">
                        <img src="../../assets/imgs/popleHead.png" alt=""><span>{{splrName}}</span>
                    </p>
                </div>
                <span class="posi">
                    <img src="../../assets/imgs/jingdian.png" alt="">
                </span>
            </div>
        </router-link>
        <div v-if="boxTags!=null">
            <p class="tab_title">
                <span :class="showTab?'selected':''" @click="change(true)">服务标签</span>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            boxUrl:"",
            boxWidth:{
                type:String,
                default:'439',
            },
            boxName:String,
            splrName:String,
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
            imgURL:""
        },
        data(){
            return{
                showTab:true,
                secendItemSpan:-1,
                visible:false,
            }
        },
        methods:{
            change:function(Boolean){
                this.showTab=Boolean;
            },
        },
        mounted() {
        },
    }
</script>
<style scoped>
    .box{
        background-color: #fff;
    }
    .tjd{
        display: flex;
        align-items: center;
    }
    .tjd>span:last-child{
        font-size: 1rem;
        margin-left: 1rem;
    }
    .change{
        padding: 0 16px;
        height: 134px;
    }
    .change p>span{
        padding: 0 7px;
        color: rgba(0,0,0,.7);
    }
    .change p>span:first-of-type{
        padding-left: 0;
    }
    .info{
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 0 16px;
        padding-bottom: 8px;
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
        margin: 0 5px 10px 0;
        margin-right: 2%;
        user-select: none;
        overflow:hidden; /*超出的部分隐藏起来。*/ 
        white-space:nowrap;/*不显示的地方用省略号...代替*/
        text-overflow:ellipsis;/* 支持 IE */
        text-align: center;
    }
    .box{
        border: 1px solid #f6f6f6;
        box-sizing: border-box;
        width: 85%;
        margin: 0 auto;
        margin-bottom: 35px;;
        padding-bottom: 2rem;
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
    .info{
        margin-top: 20px; 
        box-sizing: border-box;  
        justify-content: flex-end;
    }
    .info>div{
        width: 100%;
    }
    .box>div:last-of-type{
        margin-bottom: 20px;
    }
    .info h4{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        color: #000;
    }
    .info p{
        margin-top: 5px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        color: #999999;
    }
    .posi>h6{
        position: absolute;
        font-size: 1rem;
        color: #fff;
        top: 1.1rem;
        padding-left: 4px;
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