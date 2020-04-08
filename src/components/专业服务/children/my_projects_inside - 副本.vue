<template>
    <div class="包裹">
        <xfc></xfc>
        <div class="banner">
            <label>
                <h1>快速解决您的问题</h1>
                <input type="text" placeholder="输入关键字搜索">
                <img class="search" src="icon/search.png"/>
            </label>
        </div>
        <button class="xqz" @click="change('xqz')">需求中</button>
        <button class="fwz" @click="change('fwz')">服务中</button>
        <button class="yjx" @click="change('yjx')">已结项</button>
        <button class="zbz" @click="change('zbz')">质保中</button>
        <div class="company_info">
            <div class="wrap">
                <div class="company_name">
                    <img src=""/>
                    <h4>腾讯重庆渝北区公司</h4>
                </div>
                <div class="info">
                    <div class="top">
                        <div>
                            <h2>我需要H5营销服务 <span>2019/03/19 15:03 | No.1977</span></h2>
                            <h3>预算<span class="money">￥1,200,034</span>元 H5营销</h3>
                        </div>
                        <button class="fwz" v-if="status=='fwz'">服务中</button>
                        <button class="xqz" v-else-if="status=='xqz'">需求中</button>
                        <button class="yjx" v-else-if="status=='yjx'">已结项</button>
                        <button class="zbz" v-else="status=='zbz'">质保中</button>
                    </div>
                    <p>
                        主要需求主要需求主要需求主要需求，主要
                        需求主要需求主要需求主要需求，主要需求
                        主要需求主要需求主要需求，主要需求主要
                        需求主要需求主要需求，主要需求主要需求
                        主要需求主要需求，主要需求主要需求主要
                        需求主要需求，主要需求主要需求主要需求
                        主要需求，主要需求主要需求主要需求主要
                        需求，主要需求主要需求主要需求主要需求
                        ，主要需求主要需求主要需求主要需求，主
                        要需求主要需求主要需求主要需求，主要需
                        求主要需求主要需求主要需求，主要需求主
                        要需求主要需求主要需求，主要需求主要需
                        求主要需求主要需求，主要需求主要需求主
                        要需求主要需求，主要需求主要需求主要需
                        求主要需求，主要需求主要需求主要需求主
                        需求，主要需求主要需求主要需求主要需求
                    </p>
                </div>
            </div>
        </div>
        <section>
            <router-view name="qt" v-if="status == 'fwz'||status == 'yjx'||status == 'zbz'">

            </router-view>
            <router-view name="xqz" v-else>

            </router-view>
        </section>
    </div>
</template>

<script>

import xfc from '@/components/public/悬浮窗.vue'
    export default {
        name: "my_projects",
        data(){
            return{
                status:'fwz',
            }
        },
        methods:{
            change(s){
                this.status=s;
            }
        },
        components:{
            xfc,
        }
    }
</script>

<style scoped>
    .banner{
        max-width: 1920px;
        height: 361px;
        background-image: url(../../../assets/imgs/fabubanner.png);
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .banner label{
        height: 120px;
        position: relative;
    }
    .banner label h1{
        transform: translateY(-24px);
        text-align: center;
        font-size: 26px;
        color: #ffffff;
        opacity: 0.8;
    }
    .banner label input{
        box-sizing: border-box;
        padding-left:20px;
        padding-right:50px;
        width: 640px;
        height: 55px;
        background-color: #ffffff;
        border-radius: 10px;
        opacity: 0.8;
        border: none;
        font-size: 16px;
    }
    label .search{
        content:'';
        height: 21px;
        width: 21px;
        position: absolute;
        right: 15px;
        z-index: 9;
        bottom: 47px;
    }
    .company_info{
        background: #fbfbfb;
        padding-top:87px;
        padding-bottom:50px;
    }
    .wrap{
        width: 1400px;
        margin: 0 auto;
        display: flex;
    }
    .company_name{
        width: 343px;
        height: 198px;
        background-color: #f3f3f3;
        flex-shrink: 0;
        margin-right: 47px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .company_name img{
        width: 292px;
        height: 40px;
        background: red;
    }
    .company_name h4{
        font-size: 18px;
        color: #666666;
        margin-top: 19px;
    }
    .info{
        box-sizing: border-box;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .info .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info .top>div h2{
        font-size: 24px;
        color: #666666;
    }
    .info .top>div h2 span{
        font-size: 14px;
        color: #a1a1a1;
        margin-left: 21px;
    }
    .info .top>div h3{
        font-size: 18px;
        color: #666666;
        margin-top: 13px;
    }
    .info .top>div h3 .money{
        font-size: 24px;
        color: #9e0100;
        margin: 0 5px;
    }
    button{
        width: 90px;
        height: 28px;
        border-radius: 14px;
        border: none;
        color: #fff;
        margin: 0;
        padding: 0;
    }
    button.xqz{
        background-color: #e47b1e;
        box-shadow: 0 3px 9px #e47b1e;
    }
    button.fwz{
        background-color: #1cbbbb;
        box-shadow: 0 3px 9px #1cbbbb;
    }
    button.yjx{
        background-color: #9e0100;
        box-shadow: 0 3px 9px #9E0100;
    }
    button.zbz{
        background-color: #1c5dbb;
        box-shadow: 0 3px 9px #1c5dbb;
    }
    .info p{
        font-size: 14px;
        color: #666666;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    section{
        width: 1400px;
        margin: 0 auto;
    }


</style>