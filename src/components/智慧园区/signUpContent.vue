<template>
    <div class="内容">
        <header_ :select_index="4.5"/>
        <el-row type="flex" justify="center" class="thisIsMySignUpContent">
            <el-col :span="20">
                <section>
                    <el-row type="flex" justify="space-between">
                        <el-col :span="18" class="left">
                            <article class="item">
                                <h4><span class="colorRed">【报名已结束】</span>公益活动一</h4>
                                <p class="people paddingLeft">活动组织方：组织方名称</p>
                                <p class="time paddingLeft flexP">
                                    <span>时间：2019-04-16</span>
                                </p>
                                <div class="contents">
                                    <p>所起作用 “矿业技术咨询公司” 是如何帮助客户的？咨询公司的优势：他们有庞大、完备而又国际化的技术团队，以及他们对国际矿业规范的理解 （JORC，NI 43-101，etc）,说白了，他们是卖标准的 企业。</p>
                                    <p>客户是谁？我喜欢把这些客户分为两种：走出去的和请进来的。不仅有“走出去”去非洲、东南亚、拉美等地进行矿业勘查开发的大小国企、大小私企，也包括来中国的国际矿业公司，他们也有大有小，不过既然付钱了对我们来说就都是上帝，我们对他们平等对待、专业服务。他们大部分都有一个共同点：需要满足国际标准来达到交易或者融资的目的。比如需要在香港上市、澳洲上市、多伦多上市；又比如已经上市的资产需要向证交所和股东提交年报；再比如某矿业巨头（甭管中国的还是国外的）打算收购一个国际项目。。。在前两种情况下，咨询公司作为know how的独立第三方，就能起到作用了。咨询公司所做的就是告诉客户怎么做才能满足这些国际标准，审核客户的成果，并提交独立技术报告对这些成果做出证明。在第三种情况下，咨询公司做的就是尽职调查，占有资料、分析资料、得出结论，然后以报告的形式告诉客户。说白了就是个中介，有木有？：）莫笑！欢迎同行补充！</p>
                                    <span style="display:flex;justify-content:space-between; margin-top:30px;margin-bottom:30px;">
                                        <img src="../../assets/imgs/shydny1.png" style="width:50%"/>
                                        <img src="../../assets/imgs/shydny2.png" style="width:50%"/>
                                    </span>
                                    <button class="btn_red" @click="clickToSignUp">
                                        <img src="../../assets/imgs/bm.png" alt="">
                                        <span>立即报名</span>
                                    </button>
                                </div>
                            </article>
                        </el-col>
                        <el-col :span="5" class="right">
                            <div>
                                <h3>招商热门</h3>
                                <a href="javascript:;">顶尖咨询公司的政府咨询部分是怎样的？</a>
                                <a href="javascript:;">各类咨询公司的作用？</a>
                                <a href="javascript:;">企业雇佣咨询公司是否真的有效？</a>
                                <a href="javascript:;">走进管理咨询|咨询公司想要的是什么？</a>
                                <a href="javascript:;">四川一真企业管理咨询公司是？</a>
                                <a href="javascript:;">聘请专业的咨询公司对企业发展的好处？</a>
                                <a href="javascript:;">咨询公司存在的意义？</a>
                                <a href="javascript:;">咨询公司需要上市吗？</a>
                                <a href="javascript:;">四川一真企业管理咨询公司是？</a>
                                <a href="javascript:;">聘请专业度的咨询公司对企业发展的好处？</a>
                            </div>
                        </el-col>
                    </el-row>
                </section>
            </el-col>
        </el-row>
        
		<footer_/>
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import {
	getParkList,
	getParkInfo,
	getMerchantList
} from '../api/api'
    export default {
        components:{
            header_,
            footer_,
        },
        data(){
            return{
			    newsId:this.$route.query.newsId,
			    parkId:this.$route.query.parkId,
            }
        },
        methods: {
            clickToSignUp(){ 
                this.$router.push({path:'/signUp',query:{newsId:this.newsId}})
            }
        },
        mounted(){
            
        },
    }
</script>
<style scoped>
    .内容{
        background-color: #f6f6f6;
    }
    section{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    section .item,.right>div{
        margin-top: 28px;
    }
    section .item>h4{
        color: #353535;
        font-size: 18px;
    }
    section .item>p{
        font-size: 14px;
        color: #888888;
    }
    section .item>.contents>p{
        text-indent: 2em;
        margin-top: 30px;
        line-height: 24px;
    }
    section .item>p span{
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
    }
    section .item span img{
        background-color: #9e0100;
    }

    section .item>.people,section .item>.time{
        margin: 0;
        margin-top:10px;
        height: 20px;
    }
    section .item>.people,section .item>.time>span{
        margin: 0;
    }
    section .item>.people,section .item>.time>.people{
        margin-top: 10px;
    }
    section .item>div.bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: flex-end;
    }
    section .item>div.bottom .control{
        display: flex;
        color: #d5bfbe;
        align-items: center;
    }
    section .item>div.bottom .control .btn_{
        border: none;
        font-size: 14px;
        color: #fff;
        background-color: #d5bfbe;
        border-radius: 3px;
        padding: 5px 10px;
        margin-right: 10px;
    }
    section .left>article.item{
        background: #fff;
        box-sizing: border-box;
        padding: 27px;
        margin-bottom: 20px;
    }
    section .right div{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 20px;
        background: #fff;
    }
    section .right>div h3{
        font-size: 20px;
    }
    section .right>div a{
        font-size: 14px;
        margin-top: 15px;
        color: inherit;
    }
    section .right>div{
        background-color: #fff;
    }
    .colorRed{
        color: #9e0100;
    }
    .flexSpan{
        display: flex;
    }
    .flexSpan>img{
        width: 24px;
        height: 24px;
        margin-right: 12px;
        background-color:#fff !important;
    }
    .flexSpan>img:first-child{
        margin-left: 12px;
    }
    .flexP{
        display: flex;
        justify-content: space-between;
    }
    .paddingLeft{
        padding-left: 20px !important;
        margin: 0;
    }
    .btn_red{
        width: 315px;
        height: 45px;
        border-radius: 25px;
        border: 0px;
        color: #fff;
        margin-left: 35%;
        line-height: 45px;
        cursor: pointer;
        background-color: #9e0100;
       
    }
    .btn_red>img{
        position: relative;
        top: 5px;
    }
    .btn_red>span{
        margin-left: 10px;
    }
    .thisIsMySignUpContent{
        margin-top: 60px;
        margin-bottom: 40px;
    }
</style>