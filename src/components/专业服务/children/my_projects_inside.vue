<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:50:35
 * @LastEditTime: 2019-08-27 15:32:50
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class='my-project-r'>
        <xfc></xfc>
        <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="@/assets/imgs/servers/images/bg_02.png"/></div>
                <div class="swiper-slide"><img src="@/assets/imgs/servers/images/bg_02.png"/></div>
                <div class="swiper-slide"><img src="@/assets/imgs/servers/images/bg_02.png"/></div>
            </div>
            <!--如果需要分页器-->
            <div class="swiper-pagination"></div>
            <!--如果需要左右导航按钮-->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <!--如果需要滚动条-->
            <div class="swiper-scrollbar"></div>
        </div>
        </div>
        <div class='navigation-line'>
            <p>
                <span @click='gobackHome'>我的主页</span>
                <span><img src="@/assets/imgs/servers/icon1.png" alt=""></span>
                <span>我的项目</span>
                <span><img src="@/assets/imgs/servers/icon1.png" alt=""></span>
                <span>项目的名称</span>
            </p>
        </div>
        <div class='project-introduce'>
                <div class='left-part part'>
                    <img src="@/assets/imgs/servers/images/img1_05.png" alt="">
                </div>
                <div class='right-part part'>
                    <div>
                        <div class='project-title'>
                            <span class='essential-point'>需求方公司名称细分领域项目</span>
                            <span class='project-duration'>2019/04/25——2019/06/22</span>
                        </div>
                        <div class='project-property'>
                            <span>项目费用</span>
                            <span class='color-red'>￥120</span>
                            <span class='unit'>元</span>
                            <span>管理咨询 | 企业改制</span>
                            <span style='float:right'><img src="@/assets/imgs/servers/project-status-running.png" alt=""></span>
                            
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>主要需求：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>服务内容及要求：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>预期效果：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <p class='essential-point'>合同编号：</p>
                            <p class='content'>GLZX-20190520—004</p>
                        </div>
                        <div class='c-box'>
                            <p class='essential-point'>服务供应商：</p>
                            <p class='content'>服务供应商的名称</p>
                        </div>
                    </div>
                </div>
            
        </div> 
        <div class='project-progress'>
            <div class='progress-one'>
                <div class='title'>
                    <p class='title-top'></p>
                    <p class='title-mid'>
                        <span>
                            01
                        </span>
                        <span class='dot'>
                        </span>
                    </p>
                    <p class='title-bottom'>服务计划</p>
                </div>
                <div class='property'>
                    <div class='property-left'>
                        <div class='c-box'>
                            <span class='essential-point'>主要需求：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>服务内容及要求：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>预期效果：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <p class='essential-point'>合同编号：</p>
                            <p class='content'>GLZX-20190520—004</p>
                        </div>
                        <div class='c-box'>
                            <p class='essential-point'>服务供应商：</p>
                            <p class='content'>服务供应商的名称</p>
                        </div>
                    </div>
                    <div class='property-right'>
                        <div class='c-box'>
                            <span class='essential-point'>主要需求：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>服务内容及要求：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <span class='essential-point'>预期效果：</span>
                            <p class='content'>
                                项目需求项目需求项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                                项目需求项目需求，项目需求项目需求，项目需求项目需求
                            </p>
                        </div>
                        <div class='c-box'>
                            <p class='essential-point'>合同编号：</p>
                            <p class='content'>GLZX-20190520—004</p>
                        </div>
                        <div class='c-box'>
                            <p class='essential-point'>服务供应商：</p>
                            <p class='content'>服务供应商的名称</p>
                        </div>
                    </div>
                </div>
            </div>
            <progressTwo_></progressTwo_>
            <progressThree_></progressThree_>
            <progressFour_></progressFour_>
            <progressFive_></progressFive_>
        </div>
        <toast :arrs="arrsdata" class="toast"></toast>
    </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import progressTwo_ from './components/progressTwo'
import progressThree_ from './components/progressThree'
import progressFour_ from './components/progressFour'
import progressFive_ from './components/progressFive'
import simData from '@/data/simulatedData'
import Swiper from 'swiper'
//引入bus和弹窗组件
import toast from '../../弹窗/toastPublic1'
import Bus from '../../../bus.js'
import xfc from '@/components/public/悬浮窗.vue'
export default {
    data() {
        return {
            progressLine:simData.progressLine,
            arrsdata:[],
        }
    },
    components:{
        progressTwo_ ,
        progressThree_,
        progressFour_,
        progressFive_,
        toast,
        xfc,
    },
    computed: {
        progressStyle(){
            let len = document.getElementsByClassName('progress-line').length;
            let columns = len > 4 ? 4: len;
            let rows = Math.floor(len % 4 );
            return {}
        },
        progressLinePart(){
            let res = []
            for(let i = 0 ;i <= Math.floor(this.progressLine.length % 4);i++){
                res.push(this.progressLine.slice(4*i,4*(i+1)));
            }
             return res;   
        }
    },
     mounted() {
            new Swiper(".swiper-container", {
                initialslide:2,
                slidesPerview:3,
                direction:"horizontal",//横向切换
                speed:480,//速度
                // autoplay:true,
                autoplay:{
                    delay:5000,
                },
                observer:true,//开启动态检查器
                loop:true,//环路
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            })
        },
    methods: {
        gobackHome(){
            this.$router.push({ name:'home'})
        }
    },
    created(){
        //获取仓库数据
        Bus.$on('arrs',(data)=>{
            this.arrsdata=data;
        })
    }
}
</script>

<style scoped>
    .my-project-r{
        margin-bottom: 100px;
    }
    .navigation-line{
        /* padding:100px 209px 0 209px; */
        padding:100px ;
        width:1400px;
        margin:0 auto;
    }
    .navigation-line span{
        margin-right:15px;
        cursor: pointer;
    }


    
    .project-introduce{
        /* padding:100px 209px; */
        padding-top:100px 0;
        width:1400px;
        margin:0 auto;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .project-introduce .part:nth-of-type(2){
       
        width:70%;
    }
    .project-introduce .left-part{
        height:273px;
    }
    .project-introduce .right-part .c-box{
         display: flex;
         justify-content: space-between;
         align-items: flex-start;
         color:#666666;
         margin-bottom: 20px;
    }
     .project-introduce .right-part .c-box .essential-point{
         display: inline-block;
         width:13%;
     }
    .project-introduce .right-part .c-box  .content{
        flex:3;
        width:60%;
        line-height: 24px;
    }
    .right-part .project-title .essential-point{
        font-size:20px;
        color:#666666;
        font-weight: 600;
        margin-right:10px
    }
    .right-part .project-title .project-duration{
        color:#999999;
        font-size: 13px;

    }
    .right-part .project-property{
        padding:20px 0;
        color:#999999;
    }
    .right-part .project-property span{
        margin-right:20px;
        font-size: 18px;
        
    }
    .right-part .project-property span:nth-of-type(2){
        margin-right:10px;
    }
    .right-part .project-property .color-red{
        color:#9e0100;
        font-size:30px;
        font-weight: 600;
    }
    .unit {
        
    }
    .project-progress{
        padding-top:100px;
        width:1400px;
        margin: 0 auto;
    }
    .project-progress .progress-one{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;
    }
    .project-progress .progress-one .title{
        align-self: flex-start;
        /* 为了竖线对齐而设置的宽度 */
        width:42%;
    }
    .title .title-top{
        width:15%;
        height: 3px;
        background:#000;
        margin-bottom: 5px;
    }
    .title .title-mid span{
       font-size:30px;
       font-weight: 600;
    }
     .title .title-mid .dot{
         display: inline-block;
         width:6px;
         height:6px;
         border-radius: 50%;
         background: #000;
     }
     .title .title-bottom {
         font-weight: 600;

     }
    .property{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
    }
    .property .property-left{
        padding-left:20px;
        border-left:1px solid #eeeeee;
        margin-right:40px;
    }
    .property .c-box{
         display: flex;
         justify-content: space-between;
         align-items: flex-start;
         color:#666666;
         margin-bottom: 20px;
    }
    .property .c-box  .content{
        color:#aaaaaa;
        flex:3;
        width:60%;
    }
    .property .c-box .essential-point{
         display: inline-block;
         width:20%;
     }
    .toast{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }
    
@media screen and (max-width: 1366px) {
    .project-introduce .right-part .c-box .essential-point{
        width: 16%
    }
}

</style>