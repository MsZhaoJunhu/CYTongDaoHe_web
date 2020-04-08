<template>
    <div class="details_all_details">
        <router-link to="/fun/my_project_details" class="tdt_qyhy_top_title">需求列表</router-link>
        <div class="details_content_details">
            <p>个人信息</p>
            <div class="type1">
                <p>
                    <span>
                        <span>姓名：</span>
                        <span>{{custIndivList.actualName||"暂无"}}</span>
                    </span>
                    <span>
                        <span>昵称：</span>
                        <span>{{custIndivList.nickname||"暂无"}}</span>
                    </span>
                </p>
                <p>
                    <span>
                        <span>关联公司：</span>
                        <span>{{custIndivList.associatedCo||"暂无"}}</span>
                    </span>
                    <span>
                        <span>职务名称：</span>
                        <span>{{custIndivList.corpPost||"暂无"}}</span>
                    </span>
                    <span>
                        <span>岗位名称：</span>
                        <span>{{custIndivList.postName||"暂无"}}</span>
                    </span>
                </p>
            </div>
            <p>个人资源</p>
            <div class="type2">
                <p v-for="item in resources">
                    <span>
                        <span>资源类型：</span>
                        <span>{{item.resourceType||"暂无"}}</span>
                    </span>
                    <span>
                        <span>资源等级：</span>
                    <span>{{item.resourceLevel||"暂无"}}</span>
                    </span>
                    <span>
                        <span>资源标准：</span>
                    <span>{{item.levelStandard||"暂无"}}</span>
                    </span>
                    <font>
                        <span>资源描述：</span>
                        <span>{{item.resourceDesc||"暂无"}}</span>
                    </font>
                </p>
            </div>
            <p>备注</p>
            <div class="type1">
                <p>
                    <span>
                        <span>服务备注</span>
                        <span>{{serverInfo||"暂无"}}</span>
                    </span>
                </p>
            </div>
            <div  class="buttondiv">
                <button  class="xuanTA" @click="chooseTA(indivId)">选TA</button>
                <button class="xuanTAa" @click="tochat(indivId)">发起沟通</button>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>
    </div>
</template>
<script>
import { getIndivDetail,chooseTA,buildFriendShip } from "@/components/api/api";
export default {
    data() {
        return {
            indivId:this.$route.query.indivId,
            personId:this.$route.query.personId,
            custIndivList:"",
            resources:"",
            serverInfo:""
        }
    },
    methods: {
        chooseTA(indivId){
            chooseTA({"indivId":indivId,"projPersonId":this.personId}).then(res=>{
                if(res.data.code==200){
                    this.$notify({
                        title: '成功',
                        message: '您已经成功成为选择服务候选人',
                        type: 'success',
                        position: 'top-left'
                    });
                    this.$router.push("/fun/releaseXQLB");

                }else{
                    this.$notify({
                        title: '失败',
                        message: '失败操作,请重新登录再试!',
                        type: 'success',
                        position: 'top-left'
                    });
                }
            })
        },
        tochat () {
            buildFriendShip(this.indivId).then(res=>{
                if (res.data.code === 200){
                this.$router.push({ path: "alwaysChat", query: { "projId": this.projId } })
                }
            })
        }
    },
    mounted() {
        getIndivDetail({"indivId":this.indivId,"personId":this.personId}).then(res => {
            if (res.data.code === 200){
                this.resources=res.data.data.custIndivResourceList;
                this.custIndivList=res.data.data;
            }
        });
        this.serverInfo=this.$store.getters.getserverInfo
    },
}
</script>
<style  scoped>
    .details_all_details{
        width: 100%;
        height: auto;
        padding-bottom: 40px;
    }
    .tdt_qyhy_top_title{
        display: block;
        width: 73%;
        margin: 0 auto;
        padding: 45px 0 26px 16px;
        color: #9e0100;
        font-weight: bolder;
        box-sizing: border-box;
    }
    .tdt_qyhy_top_title:before{
        content: '<';
        margin-right: 8px;
    }
    .details_content_details{
        width: 73%;
        margin: 0 auto;
        background: #fff;
        padding: 40px 24px;
    }
    .details_content_details>p{
        font-size: 16px;
        text-align: left;
    }
    .details_content_details>p:not(:first-child){
        margin-top: 30px;
    }
    .details_content_details>div>p{
        margin-top: 30px;
    }
    .details_content_details>.type1>p>span>span:first-child{
        display: inline-block;
        width: 120px;
        color: #666666;
    }  
    .details_content_details>.type1>p>span>span:last-child{
        color: #999999;
    }
    .details_content_details>.type1>p>span{
        display: inline-block;
        width: 30%;
    }
    .details_content_details>.type2>p{
        display: flex;
        flex-wrap: wrap;
    }
    .details_content_details>.type2>p>span{
        width: 33%;
    }
    .details_content_details>.type2>p>span>span:first-child,.details_content_details>.type2>p>font>span:first-child{
        display: inline-block;
        width: 120px;
        color: #666666;
    }
    .details_content_details>.type2>p>span>span:last-child,.details_content_details>.type2>p>font>span:last-child{
        color: #999999;
    }
    .details_content_details>.type2>p>font{
        width: 100%;
        margin-top: 30px;
    }
    .details_content_details+span{
        display: block;
        color: #bbbbbb;
        padding-top: 32px;
        text-align: center;
        background: #f9f9f9;
        margin:0 auto;
    }
    .xuanTA{
        border: 0;
        background: #9e0100;
        width: 15%;
        height: 48px;
        color: #fff;
        font-size: 20px;
        line-height: 48px;
        border-radius: 24px;
        display: inline-block;
        margin: 0 20px;
        margin-top: 24px;
    }
    .xuanTAa{
        border: 0;
        background: #fff;
        width: 15%;
        height: 48px;
        color: #9e0100;
        border: #9e0100 1px solid;
        font-size: 20px;
        line-height: 48px;
        border-radius: 24px;
        display: inline-block;
        margin: 0 20px;
        margin-top: 24px;
    }
    .buttondiv{
        text-align: center;
    }
</style>