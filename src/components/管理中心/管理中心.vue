<template>
    <div class="包裹">
        <header_  :select_index="8"/>
        <xfc></xfc>
        <div class="banner">
            <img src="../../assets/imgs/glzx_banner.png" alt="行业最新信息及相关公司活动">
            <div class="text">
                <p>我们的管理内容有哪些？</p>
                <h1>行业最规范的管理模式</h1>
            </div>
        </div>
        <div class="xlm">
            <div>
                <span>管理中心</span>
                <span >{{childrenMenu}}</span>
            </div>
        </div>
        <div class="bjs">
            <div class="main">
                <div class="glzx_title">
                    <h3>管理中心</h3>
                    <template v-for="(items,index) in title">
                        <p :class="index==select?'selected':''"  @click="chages(items[0])">
                            <router-link :to="{path:items[1]}"  replace><i></i>{{items[0]}}</router-link>
                        </p>
                    </template>
                </div>
                <div class="glzx_content">
                    <router-view @updatetitle="change">
                    </router-view>
                </div>
            </div>
        </div>
        <template>
            <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"  tag="div" :swipe-options="{direction: 'horizontal'}">
                <el-tabs  class="MediaTopBar" type="card" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="通告公式" name="first" >
                        <tggs></tggs>
                    </el-tab-pane>
                    <el-tab-pane label="服务协议" name="second" >
                        <fwxy></fwxy>
                    </el-tab-pane>
                    <el-tab-pane label="管理规则" name="third" >
                        <glgz></glgz>
                    </el-tab-pane>
                    <el-tab-pane label="在线考试" name="fourth">
                        <zxks></zxks>
                    </el-tab-pane>
                    <el-tab-pane label="会员权益" name="fifth" >
                        <hyqy></hyqy>
                    </el-tab-pane>
                    <el-tab-pane label="反馈/申请" name="Sixth" >
                        <tsjb></tsjb>
                    </el-tab-pane>
                </el-tabs>
            </v-touch>
        </template>
        <toast4 class="toast" v-if="$store.getters.getToast4Flag1"></toast4>
        <toast5 class="toast" v-if="$store.getters.getToast5Flag1"></toast5>
        <footer_ />
    </div>
</template>
<script>
    import header_ from '@/components/public/头部'
    import footer_ from '@/components/public/底部'
    import toast4 from '../弹窗/toast4'
    import toast5 from '../弹窗/toast5'
    import tggs from './children/通告公示'
    import fwxy from './children/服务协议'
    import glgz from './children/管理规则'
    import zxks from './children/在线考试'
    import hyqy from './children/会员权益'
    import tsjb from './children/投诉举报'
    import xfc from '@/components/public/悬浮窗.vue'
    export default {
        data(){
            return{
                select:1,
                title:[
                    ['通告公示','tggs'],
                    ['服务协议','fwxy'],
                    ['管理规则','glgz'],
                    ['在线考试','zxks'],
                    ['会员权益','hyqy'],
                    ['反馈/申请','tsjb'],
                ],
                childrenMenu:'管理规则',
                activeName: 'first',
                bools:false,
            }
        },
        components: {
            toast4,
            toast5,
            tggs,
            fwxy,
            glgz,
            zxks,
            hyqy,
            tsjb,
            header_,
            footer_,
            xfc,
        },
        props:[
            'selected'
        ],
        methods:{
            change:function(data){
                this.select=data;
            },
            chages(xx){
                this.childrenMenu=xx;
                if(xx=="会员权益"){
                    var glzx_content=document.getElementsByClassName("glzx_content")
                    glzx_content[0].style.backgroundColor="#fbfbfb"
                }else if(xx!="会员权益"){
                    var glzx_content=document.getElementsByClassName("glzx_content")
                    glzx_content[0].style.backgroundColor="#fff"
                }
            },
            /* media中的 */
            handleClick(tab, event) {
                
            },
            bool:function(bool){
                this.bools=bool;
            },
            onSwipeLeft: function () {
                if(this.activeName=="first"){
                    this.activeName="second"
                }else if(this.activeName=="second"){
                    this.activeName="third"
                }else if(this.activeName=="third"){
                    this.activeName="fourth"
                }else if(this.activeName=="fourth"){
                    this.activeName="fifth"
                }else if(this.activeName=="fifth"){
                    this.activeName="Sixth"
                }else{
                    this.activeName="first"
                }
            },
            onSwipeRight: function () {
                if(this.activeName=="first"){
                    this.activeName="Sixth"
                }else if(this.activeName=="second"){
                    this.activeName="first"
                }else if(this.activeName=="third"){
                    this.activeName="second"
                }else if(this.activeName=="fourth"){
                    this.activeName="third"
                }else if(this.activeName=="fifth"){
                    this.activeName="fourth"
                }else{
                    this.activeName="fifth"
                }
            }
        }
    }
</script>
<style scoped>
    .banner{
        width: 100%;
        /* min-width: 1400px; */
        position: relative;
    }
    .banner img{
        width: 100%;
    }
    .banner>.text{
        color: #d1d1d2;
        left: 260px;
        bottom: 55px;
        position: absolute;
    }
    .banner>.text>p{
        font-family: '华文细黑';
        font-size: 18px;
    }
    a{
        width: 100%;
        display: flex;
        color: initial;
    }
    .banner>.text>h1{
        letter-spacing:4px;
        font-size: 56px;
    }
    .main{

        width: 76%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .bjs{
        width: 100%;
        box-sizing: border-box;
        background: #fbfbfb;
        padding: 50px;
    }
    .xlm{
        height: 100px;
        line-height: 100px;
    }
    .xlm>div{
        width: 70%;
        margin: 0 auto;
    }
    .xlm span{
        background: url(../../assets/imgs/xjt.png) no-repeat;
        padding:0 15px 0 5px;
        background-position:right;
    }
    .xlm span:last-of-type{
        background:rgba(255, 255, 255, 0);
    }
    .glzx_title{
        width: 20%;
        height: 480px;
        background-color: #ffffff;
        padding: 31px 15px;
        box-sizing: border-box;
    }
    .glzx_title h3{
        font-size: 24px;
        color: #9e0100;
        margin-bottom:40px;
        font-weight: normal
    }
    .glzx_title p{
        font-size: 18px;
        color: #676767;
        margin-bottom:40px;
        display: flex;
    }
    .glzx_title p.selected a{
        color: #9e0100 !important;
    }
    .glzx_title p i{
        display: block;
        height: 22px;
        width: 22px;
        background: url(../../assets/imgs/glzx_.png) no-repeat;
        margin: 2px 14px 0 0;

    }
    .glzx_title p:nth-of-type(2) i{
        background-position:0 -54px;
    }
    .glzx_title p:nth-of-type(3) i{
        background-position:0 -108px;
    }
    .glzx_title p:nth-of-type(4) i{
        background-position:0 -162px;
    }
    .glzx_title p:nth-of-type(5) i{
        background-position:0 -214px;
    }
    .glzx_title p:nth-of-type(6) i{
        background-position:0 -270px;
    }
    .glzx_content{
        width: 76%;
        padding: 0 25px;
        background: #fff;
        box-sizing: border-box;
    }
    .main>p{
        padding: 0 10px;
        font-size: 17px;
        line-height: 30px;
    }
    .toast{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }
    .MediaTopBar{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .MediaTopBar{
            display: block;
        }
        
        .el-tabs__nav-prev{
            line-height: 36px !important;
        }
        .banner,.xlm,.bjs,.toast{
            display: none;
        }
    }
</style>