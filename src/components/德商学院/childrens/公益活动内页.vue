<template>
    <div class="内容">
        <!-- <header_ :select_index="5"/> -->
        <section>
            <div class="left">
                <article class="item">
                    <h4><span class="colorRed">【报名已结束】</span>公益活动一</h4>
                    <p class="people paddingLeft">活动组织方：组织方名称</p>
                    <p class="time paddingLeft">
                        <span>时间：2019-04-16</span>
                    </p>
                    <div class="contents">
                        <p>2.所起作用 “矿业技术咨询公司” 是如何帮助客户的？</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;A.&nbsp;&nbsp;&nbsp;&nbsp;咨询公司的优势：他们有庞大、完备而又国际化的技术团队，以及他们对国际矿业规范的理解 （JORC，NI 43-101，etc）,说白了，他们是卖标准的 企业。 </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;B.&nbsp;&nbsp;&nbsp;&nbsp;客户是谁？我喜欢把这些客户分为两种：走出去的和请进来的。不仅有“走出去”去非洲、东南亚、拉美等地进行矿业勘查开发的大小国企、大小私企，也包括来中国的国际矿业公司，他们也有大有小，不过既然付钱了对我们来说就都是上帝，我们对他们平等对待、专业服务。他们大部分都有一个共同点：需要满足国际标准来达到交易或者融资的目的。比如需要在香港上市、澳洲上市、多伦多上市；又比如已经上市的资产需要向证交所和股东提交年报；再比如某矿业巨头（甭管中国的还是国外的）打算收购一个国际项目。。。在前两种情况下，咨询公司作为know how的独立第三方，就能起到作用了。咨询公司所做的就是告诉客户怎么做才能满足这些国际标准，审核客户的成果，并提交独立技术报告对这些成果做出证明。在第三种情况下，咨询公司做的就是尽职调查，占有资料、分析资料、得出结论，然后以报告的形式告诉客户。说白了就是个中介，有木有？：）莫笑！欢迎同行补充！</p>
                        <div class="contents_imgs">
							<img src="../../../assets/imgs/shydny1.png" width="493px" height="354px"/>
							<img src="../../../assets/imgs/shydny2.png" width="493px" height="354px"/>
						</div>
                    </div>
                    <div class="btn_red_par">
                        <button class="btn_red" v-on:click="show1">
                            <img src="../../../assets/imgs/bm.png" alt="">
                            <span>立即报名</span>
                        </button>
                    </div>
                    <div class="bottom">
                        <div class="control">
                            <button class="btn_">
                                点赞 56
                            </button>
                            <button class="btn_">
                                <img src="@/assets/imgs/dianzan.png" alt>
                            </button>
                            <span>28条评论</span>
                        </div>
                    </div>
                    <pl></pl>
                </article>
            </div>
            <div class="right">
                <div>
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
                </div>
            </div>
        </section>
        <right-now :nowNumber="rightNowNumber" @change="changeNum"></right-now>
    </div>
</template>
<script>
import pl from '../../public/评论';
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import rightNow from './rightNow.vue'
    export default {
        components:{
            pl,
            header_,
            footer_,
            rightNow,
        },
        name: "德商公益",
        data() {
            return {
                rightNowNumber:1,
            }
        },
        methods: {
            show1: function () {
                // this.$store.commit("changeTrue");
                this.rightNowNumber=0;
            },
            changeNum(val){
                this.rightNowNumber=val;
            }
        },
        mounted(){
            
        }
    }
</script>
<style scoped>
    .内容{
        background-color: #f6f6f6;
    }
    .wrap,section{
        /* width: 1400px; */
        width: 73%;
        margin: 0 auto;
    }
    section{
        display: flex;
        justify-content: space-between;
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: relative;
    }
    .left{
        /* width: 1060px; */
        width: 70%;
    }
    .right{
        /* width:315px; */
        width: 26%;
    }
    section .item>h4{
        color: #353535;
        font-size: 1.5rem;
    }
    section .item>p{
        font-size: 14px;
        color: #888888;
        line-height: 1.5rem;
    }
    section .item>.contents{
        padding: 1rem 1rem;
    }
    section .item>.contents p{
        color: #888888;
        line-height: 1.25rem;
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
    }
    section .item>.people,section .item>.time>span{
        margin: 0;
    }
    section .item>.people,section .item>.time>.people{
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
    }
    section .right div{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 20px;
        background: #fff;
    }
    section .right>div h3{
        font-size: 1.5rem;
        line-height: 2rem;
        color: #353535;
        letter-spacing: 0px;
    }
    section .right>div a{
        font-size: 14px;
        line-height: 36px;
        color: #676767;
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
    .paddingLeft{
        text-indent: 1.5rem;
        margin: 0;
    }
    .btn_red_par{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn_red{
        width: 315px;
        height: 45px;
        border-radius: 25px;
        border: 0px;
        color: #fff;
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
    .contents_imgs{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .contents_imgs>img{
        width: 50%;
    }
    @media screen and (max-width: 415px) {
        .ljj_gynr_left{
            width: 100% !important;
        }
    }
</style>