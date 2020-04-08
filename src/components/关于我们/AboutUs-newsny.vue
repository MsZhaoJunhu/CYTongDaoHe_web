<template>
    <div class="app">
        <header_ :select_index="7"/>
        <xfc></xfc>
        <div class="main">
            <div class="content">
                <div class="left">
                    <!--先删除其left内容 html片段在div.left加入v-html  -->
                    <h3>{{newsMode.newsTitle}}</h3>
                    <p>
                        <span>发布者：</span>
                        <span>{{newsMode.createdBy}}</span>
                    </p>
                    <p>
                        <span>时间：</span>
                        <span>{{newsMode.newsDt}}</span>
                    </p>
                    <div v-html="newsMode.newsContent">
                       {{newsMode.newsContent}}
                    </div>
        
                </div>
                <div class="right">
                    <!-- <div>
                        <h3>公益热搜</h3>
                        <a href="">顶尖咨询公司的政府咨询部分是怎样的？</a>
                        <a href="">各类咨询公司的作用？</a>
                        <a href="">企业雇佣咨询公司是否真的有效？</a>
                        <a href="">走进管理咨询|咨询公司想要的是什么？</a>
                        <a href="">四川一真企业管理咨询公司是？</a>
                        <a href="">聘请专业的咨询公司对企业发展的好处？</a>
                        <a href="">咨询公司存在的意义？</a>
                        <a href="">咨询公司需要上市吗？</a>
                        <a href="">四川一真企业管理咨询公司是？</a>
                        <a href="">聘请专业度的咨询公司对企业发展的好处？</a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </div> -->
                    <iframe src="http://isoyu.com/?a=code&type=top" frameborder="0" scrolling="no" width="315" height="300"></iframe>
                </div>
            </div>
        </div>
         <footer_ />
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import xfc from '@/components/public/悬浮窗.vue'
import {getTdhNews} from "../api/api"
      export default {
           components:{
            header_,
            footer_,
            xfc,
        },
        data() {
        return {
            newsMode:{},
        };
    },
        created(){
        getTdhNews({newsId:this.$route.query.id}).then(res=>{
            this.newsMode=res.data.data[0]
        })
    },
      }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .app {
        background: #fafafa;
    }
    .main {
        background: #fafafa;
        position: relative;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        padding: 6rem 0;
    }
    .content {
        width: 73%;
        margin: 0 auto;
        padding-bottom: 2.5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .content>div{
        background-color: #fff;
    }
    .right{
        width:315px;
    }
    .right>div{
        margin-top: 28px;
    }
    .right div{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 20px;
        background: #fff;
    }
    .right>div h3{
        font-size: 20px;
    }
    .right>div a{
        font-size: 14px;
        margin-top: 15px;
        color: inherit;
    }
    .right>div{
        background-color: #fff;
    }
    .left{
        width: 1050px;
        padding: 16px 24px;
        box-sizing: border-box;
    }
    .left>p{
        margin-top: 8px;
        line-height: 32px;
    }
    .left>h3{
        font-size: 26px;
    }
    .left>div>p{
        margin-top: 8px;
        line-height: 32px;
    }
    .imgTwo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 16px 0;
    }
    .imgTwo>img{
        width: 49%;
    }
    .imgOne{
        margin: 16px 0;
        width: 100%;
    }
    .imgOne>img{
        width: 100%;
    }
    @media screen and (max-width: 415px) {
        .right{
            display: none;
        }
        .content,.left{
            width: 100%;
        }
        .main{
            padding-top: 0px;
        }
        .left{
            padding: 0 24px;
        }
        .left>h3{
            width: 100%;
            text-align: center;
            font-size: 22px;
            color: #9e0010;
        }
        .left p{
            font-size: 14px;
        }
        .left>div>p{
            text-indent: 2em;
        }
        .left>div:nth-child(4)>p:nth-child(2){
            text-indent: 0;
        }
        .left>div:nth-child(6)>p:nth-child(1){
            text-indent: 0;
        }
    }
</style>