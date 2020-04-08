<template>
    <div style="background:#fafafa;" class="qyhy_xqfb_a">
        <router-link to="/fun/funs" class="tdt_qyhy_top_title">功能</router-link>
        <div class="publishing">
            <div class="publishing_nav">
                <ul class="publishing_nav_title">
                    <li v-for="(item,index) in publishing_title" :class="publishing_selectd==index?'publishing_selected':''" >
                        <font @click="changepPublishing(index)" :class="publishing_selectd==index?'publishing_selected_fontBloder':'publishing_selected_font'">{{item}}</font>
                    </li>
                </ul>
                <ul class="publishing_nav_selectLB">
                    <li @click="screenType(0,$event)">
                        <div :class="cdxz==0?'active':''">
                            <div></div>
                        </div>
                        <span>全部</span>
                    </li>
                    <li @click="screenType(1,$event)">
                        <div :class="cdxz==1?'active':''">
                            <div></div>
                        </div>
                        <span style="color:#e2b62e;">需求中</span>
                    </li>
                    <li @click="screenType(2,$event)">
                        <div :class="cdxz==2?'active':''">
                            <div></div>
                        </div>
                        <span style="color:#68d0da;">服务中</span>
                    </li>
                    <li @click="screenType(3,$event)">
                        <div :class="cdxz==3?'active':''">
                            <div></div>
                        </div>
                        <span style="color:#9e0000;">已结束</span>
                    </li>
                    <li @click="screenType(4,$event)">
                        <div :class="cdxz==4?'active':''">
                            <div></div>
                        </div>
                        <span style="color:#bbbbbb;">待评价</span>
                    </li>
                    <li @click="screenType(5,$event)">
                        <div :class="cdxz==5?'active':''">
                            <div></div>
                        </div>
                        <span style="color:#bbbbbb;">已终止</span>
                    </li>
                </ul>
            </div>
            <div class="publishing_content">
                <div class="tdt_xqBox_div" v-for="(item,i) in arrSUXQ" :key="i">
                    <div>
                        <span>{{item.personResource||"暂无"}}</span>
                        <span :class="item.personStatus">{{item.personStatus}}</span>
                    </div>
                    <div>{{item.personBody}}</div>
                    <span></span>
                    <div>
                        <span>
                            <span>{{item.personResource||"暂无"}}</span>
                            <span>{{item.personLevel||"暂无"}}</span>
                            <span>{{item.createdTime||"暂无"}}</span>
                        </span>
                        <button @click="routerToDetails(item.personId)">查看详情</button>
                    </div>
                </div>
            </div>
            <div class="publishing_content_fy">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="fsNumber"
                    :page-size="6"
                    :current-page.sync="userCurrentPage"
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
import { getPersonNeeds } from "@/components/api/api";
export default {
    data(){
        return {
            publishing_title:["所有需求","我的需求","我的服务"],
            publishing_selectd:0,
            //所有需求
            arrSUXQ:[],
            //在mounted时获取的用户发布项目的数据的对象  获取数据后填充并渲染到页面上
            userInfoXm:{
                "personId":null,
                "indivId":null,
                "personName":null,
                "personPhone":null,
                "personType":null,
                "personResource":null,
                "personLevel":null,
                "personStandard":null,
                "personBody":null,
                "personStatus":null,
                "paymentMethod":null,
                "revision":null,
                "createdBy":null,
                "createdTime":null,
                "updatedBy":null,
                "updatedTime":null,
                "token":null
            },
            fsNumber:1,
            screenTypeFy:"全部",
            cdxz:0,
            listType:"所有需求",
            userCurrentPage:1,
        }
    },
    methods: {
        //点击了所有需求/我的服务/我的需求
        changepPublishing(index){
            this.publishing_selectd=index;
            let user=JSON.parse(sessionStorage.getItem("user"));
            if(index==0){
                getPersonNeeds({listType:"所有需求",indivId:user.roleId}).then(res => {
                    if (res.data.code === 200) {
                        this.arrSUXQ=res.data.data.records.reverse();
                        this.fsNumber=res.data.data.total;
                        this.listType=res.data.type;
                        this.userCurrentPage=1;
                    }
                });
                this.cdxz=0;
            }else if(index==2){
                getPersonNeeds({listType:"我的服务",serverId:user.roleId}).then(res => {
                    if (res.data.code === 200) {
                        this.arrSUXQ=res.data.data.records.reverse();
                        this.fsNumber=res.data.data.total;
                        this.listType=res.data.type;
                        this.userCurrentPage=1;
                    }
                });
                this.cdxz=0;
            }else if(index==1){
                getPersonNeeds({listType:"我的需求",indivId:user.roleId}).then(res => {
                    if (res.data.code === 200) {
                        this.arrSUXQ=res.data.data.records.reverse();
                        this.fsNumber=res.data.data.total;
                        this.listType=res.data.type;
                        this.userCurrentPage=1;
                    }
                });
                this.cdxz=0;
            }
        },
        //
        getPersonsNeeds(streen,selected,sizeChange,content){
            let cs={
                indivId:streen,
                listType:selected,
                pageNum:sizeChange,
                personStatus:content
            }
            getPersonNeeds(cs).then(res => {
                if (res.data.code === 200) {
                    this.arrSUXQ=res.data.data.records.reverse();
                    this.fsNumber=res.data.data.total;
                }
            });
        },  
        getPersonsNeedsSelect(streen,selected,sizeChange,content){
            let cs={
                indivId:streen,
                listType:selected,
                personStatus:sizeChange,
                screenType:content
            }
            getPersonNeeds(cs).then(res => {
                if (res.data.code === 200) {
                    this.arrSUXQ=res.data.data.records.reverse();
                    this.fsNumber=res.data.data.total;
                }
            });
        }, 
        //选择菜单栏目  前端效果
        screenType(index,e){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.cdxz=index;
            switch (index) {
                case 0:
                    this.screenTypeFy=e.currentTarget.firstElementChild.nextElementSibling.innerHTML;
                    this.userCurrentPage=1;
                    break;
                case 1:
                    this.screenTypeFy=e.currentTarget.firstElementChild.nextElementSibling.innerHTML;
                    this.userCurrentPage=1;
                    break;
                case 2:
                    this.screenTypeFy=e.currentTarget.firstElementChild.nextElementSibling.innerHTML;
                    this.userCurrentPage=1;
                    break;
                case 3:
                    this.screenTypeFy=e.currentTarget.firstElementChild.nextElementSibling.innerHTML;
                    this.userCurrentPage=1;
                    break;
                case 4:
                    this.screenTypeFy=e.currentTarget.firstElementChild.nextElementSibling.innerHTML;
                    this.userCurrentPage=1;
                    break;
                case 5:
                    this.screenTypeFy=e.currentTarget.firstElementChild.nextElementSibling.innerHTML;
                    this.userCurrentPage=1;
                    break;
                default:
                    break;
            }
            let screenState=this.screenTypeFy=="全部"?null:this.screenTypeFy;
            if(this.publishing_selectd==0){
                this.getPersonsNeedsSelect(user.roleId,this.listType,screenState);
            }else if(this.publishing_selectd==1){
                this.getPersonsNeedsSelect(user.roleId,this.listType,screenState);
            }if(this.publishing_selectd==2){
                this.getPersonsNeedsSelect(user.roleId,this.listType,screenState);
            }
        },
        routerToDetails(personId){
            this.$router.push({path:"my_project_details",query:{"personId":personId,listType:this.listType,personalEvaluate:"0"}})
        },
        //
        sizeChange(val){
            let user=JSON.parse(sessionStorage.getItem("user"));
            // 分页
            let content=this.screenTypeFy=="全部"?null:this.screenTypeFy
            switch (this.publishing_selectd) {
                case 0:
                    this.getPersonsNeeds(user.roleId,this.listType,val,content);
                    break;
                case 1:
                    this.getPersonsNeeds(user.roleId,this.listType,val,content);
                    break;
                case 2:
                    this.getPersonsNeeds(user.roleId,this.listType,val,content);
                    break;
                default:
                    break;
            }
        }
    },
    mounted() {
        //分页数据渲染
        //查询了所有需求 默认全部
        let user=JSON.parse(sessionStorage.getItem("user"));
        getPersonNeeds({listType:"所有需求",indivId:user.roleId}).then(res => {
            if (res.data.code === 200) {
                this.arrSUXQ=res.data.data.records.reverse();
                this.fsNumber=res.data.data.total;
                this.listType=res.data.type
            }
        });
    },
    created() {
        
    },
}
</script>
<style scoped>
    
    .tdt_qyhy_top_title{
        width: 73%;
        display: block;
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
    .publishing{
        width: 73%;
        height: auto;
        background-color:#fff;
        margin: 0 auto;
        border: none;
        padding-bottom: 32px;
    }
    .publishing_nav{
        width: calc(100% - 40px);
        display: flex;
        border-bottom: 2px solid #fff;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        margin:0 20px;
        
    }
    .publishing_nav_title{
        display: flex;
        width:320px;
        justify-content: space-between;
        height: 100%;
        align-items: center;
    }
    .publishing_nav_title li{
        height: 100%;
    }
    .publishing_nav_title li font{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333333;
        height: 100%;
    }
    .publishing_nav_title .publishing_selected font{
        border-bottom:2px solid #9e0100; 
    }
    .publishing_selected_fontBloder{
        font-weight: bolder;
        cursor: pointer;
        user-select: none;
    }
    .publishing_selected_font{
        user-select: none;
        color: #cfcfcf !important;
        cursor: pointer;
    }
    .publishing+span{
        display: block;
        color: #bbbbbb;
        padding: 32px 0;
        text-align: center;
        background: #f9f9f9;
    }
    .publishing_nav_selectLB{
        display: flex;
        width: auto;
    }
    .publishing_nav_selectLB>li{
        display: flex;
        margin-right: 24px;
        align-items: center;
    }
    .publishing_nav_selectLB>li>div{
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border: 1px solid #dddddd;
        margin-right: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .publishing_nav_selectLB>li>.active>div{
        width: 6px;
        height: 6px;
        background: #9e0100;
        margin:0 auto;
    }
    .publishing_nav_selectLB>li>span{
        font-weight: bold;
        user-select: none;
    }
    .publishing_content{
        width:100%;
        height: 500px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .tdt_xqBox_div{
        width:31%;
        height: 43%;
        border: 1px solid #ededed;
        box-sizing: border-box;
        padding: 20px 10px;
        margin: 1% 1%;
    }
    .tdt_xqBox_div>div:first-child{
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }
    .tdt_xqBox_div>div:first-child>span:first-child{
        font-size: 18px;
        font-weight: bold;
    }
    .tdt_xqBox_div>div:first-child>span:last-child{
        font-size: 16px;
    }
    .tdt_xqBox_div>div:nth-child(2){
        font-size: 14px;
        color: #a7a7a7;
        height: 61px;
        box-sizing: border-box;
        padding: 0 8px 0 0;
        overflow: hidden;
        margin-bottom: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    .tdt_xqBox_div>div:nth-child(2)+span{
        display: block;
        width: 100%;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 16px;
    }
    .tdt_xqBox_div>div:last-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tdt_xqBox_div>div:last-child>span{
        font-size: 12px;
        color: #bbbbbb;
    }
    .tdt_xqBox_div>div:last-child>span>span:after{
        content: "|";
        margin: 0 4px;
    }
    .tdt_xqBox_div>div:last-child>span>span:last-child:after{
        content: "";
    }
    .tdt_xqBox_div>div:last-child>button{
        width: 100px;
        height: 34px;
        background: #9e0100;
        border: 0;
        color: #fff;
        text-align: center;
        line-height: 34px;
        border-radius: 16px;
        cursor: pointer;
        user-select: none;
    }
    .publishing_content_fy{
        box-sizing: border-box;
        padding: 0 5% 2% 0;
        display: flex;
        flex-direction: row-reverse;
    }
    .需求中{
        color: #e2b62e;   
    }
    .服务中{
        color: #68d0da;
    }
    .已结束{
        color: #9e0000;
    }
    .已终止{
        color: #bbbbbb;
    }
    
    .待评价{
        color: #3283e8 !important;
    }
</style>
<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #9e0100;
    }
</style>