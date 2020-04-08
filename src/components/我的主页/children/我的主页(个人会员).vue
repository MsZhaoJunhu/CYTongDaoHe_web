<template>
    <div class='individual-member'>
        <div class="bjs">
            <div class="main">
                <div class="title">
                    <h3>我的主页</h3>
                    <template v-for="(items,index) in title">
                        <p :class="index==select?'selected':''" @click='changePart(index)' >
                            <a><i></i>{{items[0]}}</a>
                        </p>
                    </template>
                </div>

                <div class="content">
                    <my-infoP :dataList='dataList'></my-infoP>
                    <my-account></my-account>
                    <my-equity></my-equity>
                    <my-requirements></my-requirements>
                    <!-- <my-project :arrs="arrUserInfo"></my-project> -->
                    <my-activity></my-activity>
                </div>
            </div>
        </div>
        <toast6 class="toast"></toast6>
        <toast class="toast" :arrs="arr"></toast>
    </div>
</template>
<script>
    import header_ from '../../public/头部'
    import footer_ from '../../public/底部'
    import myInfoP from '../components/我的信息(个人)'
    import myAccount from '../components/我的账户'
    import myProject from '../components/我的项目'
    import myEquity from '../components/我的权益'
    import myActivity from '../components/我的活动'
    import myRequirements from '../components/我的需求(个人)'
    import simData from '@/data/simulatedData.js'   
    import Bus from '../../../bus.js'
    import toast from '../../弹窗/toastPublic1.vue'
    import toast6 from '../../弹窗/toast6.vue'
    import { getProjs } from "@/components/api/api";
export default {
    name:'individual-member',
    components: {
            header_,
            footer_,
            myInfoP,
            myAccount,
            myProject,
            myEquity,
            myActivity,
            myRequirements,
            toast6,
            toast,
        },
    data() {
        return {
             select:0,
             dataList:{
                 profileSrc:require('@/assets/imgs/profile_photo_p.png'),
                 title:this.$route.query.userInfo.userName,
                 content:'用户所绑定企业的名称',
                 simData,

             },
             title:[
                ['我的账户','tggs','#tggs'],
                ['我的权益','fwxy','#fwxy'],
                ['我的需求','glgz','#glgz'],
                // ['我的项目','zxks','#zxks'],
                ['我的活动','tsjb','#tsjb'],
            ],
            select:0,
            arr:[],
            arrUserInfo:[],
        }
    },
    methods: {
        changePart(index){
            this.select=index;
            document.querySelector(this.title[index][2]).scrollIntoView(true);
        }
    },
    mounted() {
        let user=JSON.parse(sessionStorage.getItem("user"));
        getProjs({corpId:user.roleId}).then(res => {
            if (res.data.code === 200) {
                this.arrUserInfo=res.data.data;
            }
        });
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
    .individual-member{
        background: #fbfbfb;
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
    .xlm{
        height: 100px;
        line-height: 100px;
    }
    .xlm>div{
        width: 1400px;
        margin: 0 auto;
    }
    .xlm span{
        background: url(../../../assets/imgs/xjt.png) no-repeat;
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
        cursor: pointer;
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
        background: url(../../../assets/imgs/glzx_.png) no-repeat;
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
    .bjs{
        padding: 50px;
    }
    @media screen and (max-width: 415px) {
        .main{
            width: 100%;
            padding: 16px 24px 0 24px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }
        .title{
            display: none;
        }
        .content{
            width: 100%;
        }
    }

</style>