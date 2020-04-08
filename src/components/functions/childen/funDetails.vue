<template>
    <div style="background:#fafafa;" class="details_all">
        <router-link to="/fun/releaseXQLB" class="tdt_qyhy_top_title" v-if="personalEvaluate==0">需求列表</router-link>
        <router-link to="/fun/personalEvaluate" class="tdt_qyhy_top_title" v-if="personalEvaluate==1">个人评价</router-link>
        <div class="details_content">
            <p>{{personTitle}}</p>
            <div>
                <p>
                    <span>发布类型：</span>
                    <span>{{fbType}}</span>
                </p>
                <p>
                    <span>发布者：</span>
                    <span>{{fbPerson}}</span>
                </p>
                <p>
                    <span>发布时间：</span>
                    <span>{{fbTime}}</span>
                </p>
                <p>
                    <span>需求状态：</span>
                    <span :class="xzStatus">{{xzStatus}}</span>
                </p>
                <p>
                    <span>悬赏金额：</span>
                    <span>{{xsMoney||"-"}}</span>
                </p>
                <p>
                    <span>需求名称：</span>
                    <span>{{zcContent}}</span>
                </p>
                <p>
                    <span>资源等级：</span>
                    <span>{{zyScore}}</span>
                </p>
                <p>
                    <span>等级标准：</span>
                    <span>{{scoreBz}}</span>
                </p>
                <p>
                    <span>需求内容：</span>
                    <span class="xqConetnt">{{xqConetnt}}</span>
                </p>
                <span></span>
                <div>
                    <span>服务流程</span>
                    <div :class="fwlcClass">
                        <!-- fwlc -->
                        <div>需求发布</div>
                        <span class="clircl">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div>资源对接</div>
                        <span class="clircl">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div>服务结果</div>
                        <span class="clircl">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div>结果评价</div>
                    </div>
                </div>
                <p>
                    <span>服务方：</span>
                    <span>{{fwf||"暂无"}}</span>
                </p>
                <p>
                    <span>手机号码：</span>
                    <span class="color999">{{phoneNumber||"暂无"}}</span>
                    <span class="moreSpanTitle">微信号：</span>
                    <span>{{wxNumber||"暂无"}}</span>
                    <span class="moreSpanTitle">QQ号：</span>
                    <span>{{qqNumber||"暂无"}}</span>
                    <span class="moreSpanTitle">微博号：</span>
                    <span>{{wbNumber||"暂无"}}</span>
                </p>
                <p>
                    <span>对接时间：</span>
                    <span>{{djTime||"暂无"}}</span>
                </p>
                <p v-if="xzStatus=='服务中'">
                    <span style="line-height:40px;">服务结果：</span>
                    <el-select v-model="selectedResout2" :disabled="current">
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p v-if="xzStatus=='已结束'||xzStatus=='待评价'">
                    <span>服务结果：</span>
                    <span :class="fwResout">{{fwResout}}</span>
                </p>
                <p v-if="xzStatus=='待评价'">
                    <span>结束时间：</span>
                    <span>{{jsTime||"暂无"}}</span>
                </p>
                <p v-if="xzStatus=='已结束'">
                    <span>结果评价：</span>
                    <span :class="serverEvaluate">{{serverEvaluate||"暂无"}}</span>
                    <img v-if="serverEvaluate=='好评'" src="@/assets/funsIcon/good.png" alt="">
                    <img v-if="serverEvaluate=='中评'" src="@/assets/funsIcon/midell.png" alt="">
                    <img v-if="serverEvaluate=='差评'" src="@/assets/funsIcon/bad.png" alt="">
                </p>
                <div v-if="xzStatus=='待评价'&&personalEvaluate=='1'">
                    <span style="line-height:40px;">结果评价：</span>
                    <div>
                        <div class="funs_pjXt" @click="gouxuanPj($event)" :class="fwResout=='未完成'?'fwResoutClass':''" :disabled="fwResout=='未完成'&&personalEvaluate=='1'?true:false">
                            <div>
                                <img v-show="hpGouXuan" src="@/assets/funsIcon/gouxuan.png" alt="">
                            </div>
                            <img src="@/assets/funsIcon/good.png" alt="">
                            <span>好评</span>
                        </div>
                        <div class="funs_pjXt" @click="gouxuanPj($event)" :disabled="personalEvaluate=='1'?true:false">
                            <div>
                                <img v-show="zpGouXuan" src="@/assets/funsIcon/gouxuan.png" alt="">
                            </div>
                            <img src="@/assets/funsIcon/midell.png" alt="">
                            <span>中评</span>
                        </div>
                        <div class="funs_pjXt" @click="gouxuanPj($event)" :class="fwResout=='已完成'?'fwResoutClass':''" :disabled="fwResout=='已完成'&&personalEvaluate=='1'?true:false">
                            <div>
                                <img v-show="cpGouXuan" src="@/assets/funsIcon/gouxuan.png" alt="">
                            </div>
                            <img src="@/assets/funsIcon/bad.png" alt="">
                            <span>差评</span>
                        </div>
                    </div>
                </div>
                <button v-if="xzStatus=='待评价'&&isFalseButtonTJ==true&&personalEvaluate=='1'" @click="submitPj">提交评价</button>
                <p v-show="xzStatus=='服务中'">
                    <span>结束时间：</span>
                    <span>
                        <el-date-picker
                            v-model="value2"
                            align="right"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            :picker-options="pickerOptions"
                            :disabled="current">
                        </el-date-picker>
                    </span>
                </p>
                <button v-if="xzStatus=='服务中'&&indivId==userIndivId" @click="nextBz">下一步</button>
                <!-- 如果没有候选人则不显示 -->
                <div v-if="xzStatus=='需求中'&&listType=='我的需求'&&custIndivList!=null" class="hxr_all">
                    <span>服务候选人：</span>
                    <div class="hxr_all_div"  v-for="(item,index) in custIndivList" :key="index">
                        <div  @mouseenter="changeZjmc($event)" @mouseleave="changeZj($event)">
                            <a @click="routerLink(item.indivId,personId,item.serverInfo)">
                                <img src="../../../assets/images/zjIcon.png" alt="暂无">
                                <img src="../../../assets/images/zjmcIcon.png" class="zjmc" alt="">
                            </a>
                            <p>{{item.actualName}}</p>
                            <button @click="chooseTA(item.indivId)">选TA</button>
                        </div>
                    </div>
                </div>
                <!-- 只有从我的需求点击进来时显示此按钮 -->
                <button v-if="xzStatus=='需求中'&&listType=='我的需求'" @click="xqCheXiao">需求撤销</button>
                <!-- 除了从我的需求点击进来时 此按钮为不显示 -->
                <button v-if="xzStatus=='需求中'&&listType!='我的需求'&&isRepeat==false" @click="joinWnfw">我能服务</button>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>
        <right-now :nowNumber="rightNowNumber" @change="changeNum" @iCanServer="iCanSerVer" @changeValue="changeValue"></right-now>
    </div>
</template>
<script>

import { getPersonNeeds,getMyNeedsDetail,chooseTA,iCanServer,revokeNeed,resultConfirmation,resultEvaluate } from "@/components/api/api";
import rightNow from '../grhy/xqRemarksBool'
export default {
    data() {
        return {
            personTitle:"",
            fbType:"",
            fbPerson:"",
            fbTime:"",
            xzStatus:"123",
            xsMoney:null,
            zcContent:"",
            zyScore:"",
            scoreBz:"",
            xqConetnt:"",
            fwlc:"",
            fwf:"",
            phoneNumber:"",
            wxNumber:"",
            qqNumber:"",
            wbNumber:"",
            djTime:"",
            fwResout:"",
            jsTime:"",
            resoutPj:"",
            fwlcClass:"需求发布",
            hpGouXuan:false,
            zpGouXuan:true,
            cpGouXuan:false,
            serverEvaluate:"",
            // 候选人
            custIndivList:[],
            goodPj:"",
            //获取href传过来的参数
            personId:this.$route.query.personId,
            listType:this.$route.query.listType,
            personalEvaluate:this.$route.query.personalEvaluate,
            //时间选择
            pickerOptions: {
                disabledDate(time) {
                return time.getTime() > Date.now();
            },
            shortcuts: [{
                text: '今天',
                onClick(picker) {
                picker.$emit('pick', new Date());
                }
            }, {
                text: '昨天',
                onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
                }
            }, {
                text: '一周前',
                onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
                }
            }]
            },
            value2: '',
            selectedResout:"",
            selectedResout2:"完成",
            options2: [
                { text: '完成', value: '完成' },
                { text: '未完成', value: '未完成' },
            ],
            indivId:"",
            userIndivId:"",
            isRepeat:false,
            isFalseButtonTJ:false,
            current:true,
            xqRemarks:"",
            rightNowNumber:1,
            textareaValue:"",
        }
    },
    components:{
        rightNow,
    },
    methods: {
        // 初始化渲染数据
        defaultMounted(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.userIndivId=user.roleId
            getPersonNeeds({"personId":this.personId,listType:this.listType}).then(res => {
                // 返回的数组
                if (res.data.code === 200) {
                    var records=res.data.data.records
                    this.fbTime=records[0].createdTime;
                    this.xzStatus=records[0].personStatus;
                    this.indivId=records[0].indivId;
                    if(this.xzStatus=="需求中"){
                        this.fwlcClass="需求发布"
                    }else if(this.xzStatus=="服务中"){
                        this.fwlcClass="资源对接"
                    }else if(this.xzStatus=="已终止"){
                        this.fwlcClass="服务结果"
                    }else if(this.xzStatus=="待评价"){
                        this.fwlcClass="服务结果"
                    }else if(this.xzStatus=="已结束"){
                        this.fwlcClass="评价完毕"
                    }else{
                        this.fwlcClass="需求发布"
                    }
                    this.fbPerson=records[0].personName;
                    this.fbType=records[0].personType;
                    this.xsMoney=records[0].personMoney;
                    this.zcContent=records[0].personResource;
                    this.scoreBz=records[0].personStandard;
                    this.zyScore=records[0].personLevel;
                    this.xqConetnt=records[0].personBody;
                    this.fwf=records[0].serverName;   
                    this.djTime=records[0].jointTime;   
                    this.jsTime=records[0].serverTime;
                    this.phoneNumber=records[0].serverTel;
                    this.wxNumber=records[0].serverWx;   
                    this.qqNumber=records[0].serverQq;   
                    this.wbNumber=records[0].serverBlog;   
                    this.fwResout=records[0].serverResult;
                    this.personId=records[0].personId;
                    this.serverEvaluate=records[0].serverEvaluate;
                    if(records[0].indivId==user.roleId){
                        this.current=false;
                    }else{
                        this.current=true;
                    }
                }
            });
            if(this.listType=="我的需求"){
                getMyNeedsDetail({"personId":this.personId}).then(res => {
                    if (res.data.code === 200){
                        this.custIndivList=res.data.data.custIndivList
                        if(user.roleId==res.data.data.projPerson.indivId){
                            this.isFalseButtonTJ=true;
                        }
                    }
                });
            }
            if(localStorage.getItem("roleId")==this.userIndivId&&localStorage.getItem("personId")==this.personId){
                this.isRepeat=true;
            }
        },
        // 好评 中评 差评 勾选事件
        gouxuanPj(e){
            if(this.personalEvaluate=='1'){
                if(this.fwResout=='已完成'){
                    if(e.currentTarget.lastElementChild.innerHTML=="好评"&&this.hpGouXuan==false){
                        this.hpGouXuan=true;
                        this.zpGouXuan=false;
                        this.cpGouXuan=false;
                        this.selectedResout2=this.goodPj="好评"
                    }else if(e.currentTarget.lastElementChild.innerHTML=="好评"&&this.hpGouXuan==true){
                        
                    }else if(e.currentTarget.lastElementChild.innerHTML=="中评"&&this.zpGouXuan==true){
                        
                    }else if(e.currentTarget.lastElementChild.innerHTML=="中评"&&this.zpGouXuan==false){
                        this.hpGouXuan=false;
                        this.zpGouXuan=true;
                        this.cpGouXuan=false;
                        this.selectedResout2=this.goodPj="中评"
                    }else if(e.currentTarget.lastElementChild.innerHTML=="差评"&&this.cpGouXuan==true){
                        
                    }else{

                    }
                }else{
                    if(e.currentTarget.lastElementChild.innerHTML=="好评"&&this.hpGouXuan==false){

                    }else if(e.currentTarget.lastElementChild.innerHTML=="好评"&&this.hpGouXuan==true){
                        
                    }else if(e.currentTarget.lastElementChild.innerHTML=="中评"&&this.zpGouXuan==true){
                        
                    }else if(e.currentTarget.lastElementChild.innerHTML=="中评"&&this.zpGouXuan==false){
                        this.hpGouXuan=false;
                        this.zpGouXuan=true;
                        this.cpGouXuan=false;
                        this.selectedResout2=this.goodPj="中评"
                    }else if(e.currentTarget.lastElementChild.innerHTML=="差评"&&this.cpGouXuan==true){
                        
                    }else{
                        this.hpGouXuan=false;
                        this.zpGouXuan=false;
                        this.cpGouXuan=true;
                        this.selectedResout2=this.goodPj="差评"
                    }
                }
            }
            
        },
        // 鼠标进入候选人事件
        changeZjmc(e){
            var el=e.currentTarget;
            el.firstElementChild.lastElementChild.style.display="block"
        },
        // 鼠标离开候选人事件
        changeZj(e){
            var el=e.currentTarget;
            el.firstElementChild.lastElementChild.style.display="none"
        },
        // 查看具体候选人信息的跳转事件
        routerLink(indivId,personId,value){
            this.$router.push({path:"tb_person_details",query:{"indivId":indivId,"personId":personId}})
            this.$store.commit('serverInfo',value)
        },
        // 选他事件
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
        // 我能服务事件
        joinWnfw(){
            this.rightNowNumber=0;
        },
        // 需求撤销
        xqCheXiao(){
            revokeNeed({"personId":this.personId}).then(res=>{
                if(res.data.code==200){
                    this.$notify({
                        title: '成功',
                        message: '您已经成功撤销',
                        type: 'success',
                        position: 'top-left'
                    });
                    this.$router.push("/fun/releaseXQLB")
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
        // 下一步
        nextBz(){
            resultConfirmation({"serverResult":"已完成","serverTime":this.value2,"personId":this.personId}).then(res=>{
                if(res.data.code==200){
                    this.$message({
                        showClose: true,
                        message: "操作成功！",
                        type: "success"
                    });
                    this.$router.push("/fun/releaseXQLB")
                    this.defaultMounted();
                }else{
                    this.$message({
                        showClose: true,
                        message: "操作失败，请重新登录再试！",
                        type: "error"
                    });
                }
            })
        },
        //提交评价
        submitPj(){
            resultEvaluate({"serverEvaluate":this.selectedResout2,"personId":this.personId}).then(res=>{
                if(res.data.code==200){
                    this.$message({
                        showClose: true,
                        message: "操作成功！",
                        type: "success"
                    });
                    this.$router.push("/fun/releaseXQLB")
                    this.defaultMounted();
                }else{
                    this.$message({
                        showClose: true,
                        message: "操作失败，请重新登录再试！",
                        type: "error"
                    });
                }
            })
        },
        // 弹窗关闭
        changeNum(val){
            this.rightNowNumber=val;
        },
        // 点击确定获取写入的值
        changeValue(val){
            // 服务备注
            this.textareaValue=val;
        },
        iCanSerVer(val){
            if(this.rightNowNumber==1){
                let user=JSON.parse(sessionStorage.getItem("user"));
                iCanServer({"indivId":user.roleId,"projPersonId":this.personId,"serverInfo":this.textareaValue}).then(res=>{
                    if(res.data.code==200){
                        this.$notify({
                            title: '成功',
                            message: '您已经成功成为服务候选人',
                            type: 'success',
                            position: 'top-left'
                        });
                        localStorage.setItem("personId",this.personId)
                        localStorage.setItem("roleId",user.roleId)
                        // this.$router.push("/fun/releaseXQLB");
                    }else{
                        this.$notify({
                            title: '失败',
                            message: '失败操作,请重新登录再试!',
                            type: 'success',
                            position: 'top-left'
                        });
                    }
                })
            }
        }
    },
    mounted() {
        this.defaultMounted();
    },
}
</script>
<style scoped>
    .details_all{
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
    .details_content{
        width: 73%;
        margin: 0 auto;
        background: #fff;
        padding: 40px 24px;
        box-sizing: border-box;
    }
    .details_content>p{
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
    .details_content>div{
        width: 100%;
        height: 100%;
    }
    .details_content>div>p{
        margin-top: 32px;
        display: flex;
        align-items: center;
    }
    .details_content>div>p>span:first-child{
        display: inline-block;
        width: 120px;
        text-align: left;
    }
    .details_content>div>p>span:last-child{
        color: #999999;
    }
    .details_content>div>span{
        display: block;
        width: 90%;
        height: 1px;
        margin: 0 auto;
        background: #eeeeee;
        margin: 40px 0;
    }
    .details_content>div>div{
        margin-top: 32px;
        display: flex;
    }
    .details_content>div>div>span{
        width: 120px;
    }
    .details_content>div>div>div{
        display: flex;
    }
    .details_content>div>div>div>div+div{
        margin-left: 16px;
    }
    .details_content>div>div>div>div{
        width: 100px;
        height: 30px;
        line-height: 34px;
        display: flex;
        justify-content: center;
        background: #dddddd;
        color: #9e0100;
        font-size: 14px;
        font-weight: bold;
    }
    .clircl{
        display: inline-block;
        width: 64px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 8px;
    }
    .clircl>span{
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #dddddd;
    } 
    .clircl+div{
        color: #9e0100 !important;
    }
    .需求中{
        color: #e2b62e !important;   
    }
    .服务中{
        color: #68d0da !important;
    }
    .待评价{
        color: #3283e8 !important;
    }
    .已终止{
        color: #bbbbbb !important;
    }
    .xqConetnt{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .需求发布>div:first-child{
        background: #9e0100;
        color: #fff !important;
    }
    .需求发布>div:first-child+span>span{
        background: #9e0100;
        color: #fff !important;
    }
    .资源对接>div:first-child,.资源对接>div:nth-child(3){
        background: #9e0100;
        color: #fff !important;
    }
    .资源对接>div:first-child+span>span,.资源对接>div:nth-child(3)+span>span{
        background: #9e0100;
        color: #fff !important;
    }
    .服务结果>div:first-child,.服务结果>div:nth-child(3),.服务结果>div:nth-child(5){
        background: #9e0100;
        color: #fff !important;
    }
    .服务结果>div:first-child+span>span,.服务结果>div:nth-child(3)+span>span,.服务结果>div:nth-child(5)+span>span{
        background: #9e0100;
    }
    .评价完毕>div{
        background: #9e0100 !important;
        color: #fff !important;
    }
    .评价完毕>div+span>span{
        background: #9e0100;
        color: #fff !important;
    }
    .moreSpanTitle{
        margin-left: 80px;
    }
    .moreSpanTitle+span{
        color: #999999;
    }
    .details_content+span{
        display: block;
        color: #bbbbbb;
        padding-top: 32px;
        text-align: center;
        background: #f9f9f9;
        margin:0 auto;
    }
    .color999{
        color: #999999;
    }
    .details_content .funs_pjXt{
        width: auto;
        height: auto;
        background: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .details_content .funs_pjXt>img{
        width: 20px;
        height: 15px;
        margin-right: 4px;
    }
    .details_content .funs_pjXt>div{
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border: 1px solid #999999;
        margin-right: 8px;
        display: flex;
    }
    .details_content .funs_pjXt>div>div{
        width: 100%;
        height: 100%;
    }
    .details_content>div>button{
        width: 400px;
        height: 42px;
        text-align: center;
        background: #9e0100;
        color: #fff;
        border-radius: 21px;
        border: 0;
        margin: 0 auto;
        display: block;
        margin-top: 40px;
        cursor: pointer;
        user-select: none;
    }
    .hxr_all{
        height: 220px !important;
    }

    .hxr_all .hxr_all_div+.hxr_all_div{
        margin-left: 28px;
    }
    .hxr_all .hxr_all_div>div{
        display: block ;
        height: auto ;
        width: 180px ;
        box-sizing: border-box;
        border:1px solid #eeeeee;
        background: #fff ;
        padding-top: 8px;
    }
    .hxr_all .hxr_all_div>div>a{
        position: relative;
        width: 100%;
        display: block;
    }
    .hxr_all .hxr_all_div>div>a>img:first-child{
        display: block;
        margin: 0 auto;
        width: 128px;
        height: 128px;
    }
    .hxr_all .hxr_all_div>div>a>img:last-child{
        position: absolute;
        top:0;
        left: 1.5rem;
        margin: 0 auto;
        width: 128px;
        display: none;
        height: 128px;
    }  
    .hxr_all .hxr_all_div>div>p{
        text-align: center;
        font-size: 16px;
    }
    .hxr_all .hxr_all_div>div>button{
        width: 104px;
        height: 28px;
        margin: 0 auto;
        background: #9e0100;
        border: 0;
        display: block;
        color: #fff;
        font-weight: bold;
        margin-top: 10px;
        line-height: 28px;
        border-radius: 4px;
    }
    .selectModelSj{
        width: 120px;
    }
    .selectModelSj>option{
        text-align: center !important;
    }
    .已完成{
        color: #9e0100 !important;
    }
    .好评{
        margin-right: 4px;
    }
    .中评{
        margin-right: 4px;
    }
    .差评{
        margin-right: 4px;
    }
    .fwResoutClass{
        opacity: 0.5;
    }
</style>