<template>
    <div class="包裹">
        <header_/>
        <router-view></router-view>
        <footer_ />
        <toast6 class="toast"></toast6>
        <toast class="toast" :arrs="arr"></toast>
    </div>
</template>

<script>
    import simData from '@/data/simulatedData.js'
    import Bus from '../../bus.js'
    import toast from '../弹窗/toastPublic1.vue'
    import toast6 from '../弹窗/toast6.vue'
    import header_ from '@/components/public/头部'
    import footer_ from '@/components/public/底部'
    export default {
        data(){
            return{
                dataList:{
                    profileSrc:require('@/assets/imgs/profile_photo.png'),
                    title:'服务供应商名称',
                    simData,
                },
                currentPart:0,
                select:0,
                title:[
                    ['我的账户','tggs'],
                    ['我的权益','fwxy'],
                    ['我的需求','glgz'],
                    ['我的项目','zxks'],
                    ['我的信用','hyqy'],
                    ['我的活动','tsjb'],
                ],
                arr:[],
                arrTwo:[]
            }
        },
        components: {
           
            toast6,
            toast,
            header_,
            footer_,
            // myInfo,
            // myAccount,
            // myProject,
            // myCredit,
            // myActivity,
        },
        props:[
            'selected'
        ],
        methods:{
            change:function(data){
                this.select=data;
            },
            changePart:function(index){
                // this.currentPart = index;
                // this.$router.push({ name:'talent-member'})
            }
        },
        created(){
            //获取仓库数据
            Bus.$on('arrs',(data)=>{
                this.arr=data;
            })
        }
    }
</script>

<style scoped>
    .toast{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }
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

        width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .bjs{
        background: #fbfbfb;
        padding: 50px;
    }
    .xlm{
        height: 100px;
        line-height: 100px;
    }
    .xlm>div{
        width: 1400px;
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
    .title{
        width: 315px;
        height: 480px;
        background-color: #ffffff;
        padding: 31px 15px;
        box-sizing: border-box;
    }
    .title h3{
        font-size: 24px;
        color: #9e0100;
        margin-bottom:40px;
        font-weight: normal
    }
    .title p{
        font-size: 18px;
        color: #676767;
        margin-bottom:40px;
        display: flex;
    }
    .title p.selected a{
        color: #9e0100 !important;
    }
    .title p i{
        display: block;
        height: 22px;
        width: 22px;
        background: url(../../assets/imgs/glzx_.png) no-repeat;
        margin: 2px 14px 0 0;

    }
    .title p:nth-of-type(2) i{
        background-position:0 -54px;
    }
    .title p:nth-of-type(3) i{
        background-position:0 -108px;
    }
    .title p:nth-of-type(4) i{
        background-position:0 -162px;
    }
    .title p:nth-of-type(5) i{
        background-position:0 -214px;
    }
    .title p:nth-of-type(6) i{
        background-position:0 -270px;
    }
    .content{
        width: 1055px;
        box-sizing: border-box;
    }
    .main>p{
        padding: 0 10px;
        font-size: 17px;
        line-height: 30px;
    }
    
    @media screen and (max-width: 415px) {
        
    }
</style>