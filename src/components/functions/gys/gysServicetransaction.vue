<template>
    <div style="" class="qyhy_fwjy">
        <div style="width:100%;padding: 16px 0 16px 16px;margin-top:32px;">
            <router-link to="/fun/funs" class="qyhy_fwjy_top_title">功能</router-link>
        </div>
        <div class="qyhy_fwjy_publishing">
            <div class="qyhy_fwjy_publishing_title">
                <span :class="activeIndexSpan==1?'activeSpan':''" @click="channgActiveSpan(1)">我要投标</span>
                <span :class="activeIndexSpan==2?'activeSpan':''" @click="channgActiveSpan(2)">我被邀标</span>
                <span :class="activeIndexSpan==3?'activeSpan':''" @click="channgActiveSpan(3)">我的标的</span>
            </div>
            <div class="qyhy_fwjy_publishing_content">
                <div class="qyhy_fwjy_div" v-for="item in arrSUXQ">
                    <div>
                        <img src="../../../assets/funsIcon/wdbd.png" alt="中标" class="wdbdImg" v-if="item.token">
                        <img :src="item.projLogo" alt="">
                    </div>
                    <div>
                        <div>
                            <p>{{item.field+item.businessType||'暂无'}}</p>
                            <p>
                                <span>{{item.businessType||"暂无"}}</span>
                                <span>{{item.field||"暂无"}}</span>
                                <span>{{item.mainRequire||"暂无"}}</span>
                            </p>
                            <p>{{item.releaseStart}}</p>
                        </div>
                        <div>
                            <p :class="item.tradeState">{{item.tradeState}}</p>
                            <button @click="checkMore(item.projId)">查看详情</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="publishing_content_fy" v-if="activeIndexSpan==3||activeIndexSpan==1">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="fsNumber"
                    :page-size="8"
                    @current-change="sizeChange"
                    >
                </el-pagination>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>        
    </div>
</template>
<script>
import moment from 'moment'
import { 
    getProjList,
    getProjListInvitation,
    getProjListOfMine
    } from "@/components/api/api";
export default {
    data(){
        return {
            arrSUXQ:[],
            fsNumber:8,
            // 三个栏目
            activeIndexSpan:1,
        }
    },
    methods: {
        // 分页
        sizeChange(val){
            let user=JSON.parse(sessionStorage.getItem("user"));
            switch (this.activeIndexSpan) {
                case 1:
                    getProjList({"pageNum": val}).then(res => {
                        if (res.data.code === 200) {
                            this.arrSUXQ=res.data.data.records;
                        }
                    })
                    break;
                default:    
                    getProjListOfMine({"splrId":Number(user.roleId),"pageNum": val}).then(res => {
                        if (res.data.code === 200) {
                            this.arrSUXQ=res.data.data.records
                            this.fsNumber=res.data.data.total
                        }
                    })
                    break;
            }
            
        },
        // 切换菜单
        channgActiveSpan(index){
            this.activeIndexSpan=index;
            let user=JSON.parse(sessionStorage.getItem("user"));
            switch (index) {
                case 1:
                    getProjList().then(res => {
                        if (res.data.code === 200) {
                            this.arrSUXQ=res.data.data.records;
                        }
                    })
                    break;
                case 2:
                    getProjListInvitation({"splrId":user.roleId}).then(res => {
                        if (res.data.code === 200) {
                            this.arrSUXQ=res.data.data
                        }
                    })
                    break;
                case 3:
                    // 需要获取分页和总个数
                    getProjListOfMine({"splrId":Number(user.roleId)}).then(res => {
                        if (res.data.code === 200) {
                            this.arrSUXQ=res.data.data.records
                            this.fsNumber=res.data.data.total
                        }
                    })
                    break;
                default:
                    
                    break;
            }
            
        },
        // 查看详情
        checkMore(projId){
            // 校验点击的栏目是我的标的 还是我被邀标  还是我要投标
            switch (this.activeIndexSpan) {
                case 2:
                    this.$router.push({path:'myFillBid',query:{"projId":projId}})
                    break;
                case 3:
                    this.$router.push({path:'myFillBid',query:{"projId":projId}})
                    break;
                default:
                    this.$router.push({path:'myFillBid',query:{"projId":projId}})
                    break;
            }
        },
    },
    mounted() {
        //分页数据渲染
        getProjList().then(res => {
            if (res.data.code === 200) {
                this.arrSUXQ=res.data.data.records
                this.fsNumber=res.data.data.total
            }
        })
    },
    created() {
        
    },
}
</script>
<style scoped>
    .qyhy_fwjy{
        background:#fafafa;
        width: 80%;
        margin: 0 auto;
    }
    .qyhy_fwjy>div:not(:first-child){
        background: #fff;
    }
    .qyhy_fwjy_top_title:before{
        content: '<';
        margin-right: 8px;
    }
    .qyhy_fwjy_top_title{
        display: block;
        width: auto;
        color: #9e0100;
        font-weight: bolder;
        box-sizing: border-box;
        width: 80px;
    }
    .qyhy_fwjy_publishing{
        width: 100%;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 16px 28px;
    }
    .qyhy_fwjy_publishing+span{
        display: block;
        color: #bbbbbb;
        padding: 32px 0;
        text-align: center;
        background: #f9f9f9;
    }
    .qyhy_fwjy_publishing_title{
        width: 100%;
        height: auto;
        margin-bottom: 28px;
    }
    .qyhy_fwjy_publishing_title>span{
        display: inline-block;
        color: #cccccc;
        padding-bottom: 8px;
        border-bottom: 2px solid #fff;
        cursor: pointer;
        user-select: none;
    }
    .qyhy_fwjy_publishing_title>.activeSpan{
        border-bottom: 2px solid #9e0100;
        color: #000;
    }
    .qyhy_fwjy_publishing_title>span+span{
        margin-left: 32px;
    }
    .qyhy_fwjy_publishing_content{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }
    .qyhy_fwjy_div{
        width: calc(92%/4);
        margin: 0 1%;
        box-sizing: border-box;
        border: 1px solid #ededed;
    }
    .qyhy_fwjy_div:hover {
        box-shadow: 0 3px 9px #f3b4b4;
    }
    .qyhy_fwjy_div:hover>div > div:first-child > p:nth-child(2) > span{
        background: #f3b4b4;
        color: #9e0100;
    }
    .qyhy_fwjy_div:nth-child(n+5){
        margin-top: 16px;
    }
    .qyhy_fwjy_div>div{
        width: 100%;
    }
    .qyhy_fwjy_div>div>img{
        width: 100%;
        height: 178px;
    }
    .qyhy_fwjy_div>div:last-child{
        display: flex;
    }
    .qyhy_fwjy_div>div>div{
        width: 60%;
        height: auto;
        margin-bottom: 14px;
    }
    .qyhy_fwjy_div>div>div:last-child{
        width: 40%;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .qyhy_fwjy_div>div>div:first-child>p{
        padding-left: 14px;
    } 
    .qyhy_fwjy_div>div>div:first-child>p:nth-child(2)>span{
        font-size: 14px;
        display: inline-block;
        background: #f2f4f7;
        color: #b7c1c8;
        padding: 4px 6px;
        margin-bottom: 6px;
        width: 70px;
        overflow: hidden;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .qyhy_fwjy_div>div>div:first-child>p:nth-child(2)>span:nth-child(2n){
        margin-left: 8px;
    }
    .qyhy_fwjy_div>div>div>p:first-child{
        margin: 16px 0;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .qyhy_fwjy_div>div>div>p:last-child{
        margin-top: 16px;
    }
    .qyhy_fwjy_div>div>div:first-child>p:last-child{
        font-size: 14px;
        color: #bbbbbb;
    }
    .qyhy_fwjy_div>div>div:last-child>button:last-child{
        font-size: 14px;
        display: block;
        height: auto;
        width: 90px;
        padding: 6px 14px;
        color: #fff;
        background: #9e0100;
        float: right;
        border: 0;
        border-radius: 14px;
    }
    .wdbdImg{
        position: absolute;
        width: auto !important;
        height: auto !important;
        flex-shrink: 0;
        margin-left: 1%;
    }
    .招标中{
        color: #eccc4d;
    }
    .选标中{
        color: #64d1d8;
    }
    .已成交{
        color: #9e0100;
    }
    .已终止{
        color: #bbbbbb;
    }
    .publishing_content_fy{
        box-sizing: border-box;
        padding: 0 5% 2% 0;
        display: flex;
        flex-direction: row-reverse;
        margin-top: 2rem;
    }
    @media screen and (max-width: 1366px) {
        .qyhy_fwjy_div>div>div:last-child>button:last-child{
            padding: 0;
            height: 40px;
            line-height: 40px;
            width: 120px;
        }
    }
</style>
<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #9e0100;
    }
</style>