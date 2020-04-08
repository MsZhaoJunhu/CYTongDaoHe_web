<template>
    <div style="background:#fafafa;" class="qyhy_xqfb_a">
        <router-link to="/fun/funs" class="tdt_qyhy_top_title">需求修改</router-link>
        <div class="publishing">
            <div class="publishing_content">
                <p>
                    <span>公司名称</span>
                    <input type="text" placeholder="需求公司名称" v-model="fDylySj.personName" disabled>
                    <span>联系电话</span>
                    <input type="text" placeholder="公司电话" v-model="fDylySj.personPhone" @blur="checkPhoneNumber">
                </p>
                <p>
                    <span>项目类型</span>
                    <select v-model="fDylySj.businessType" id="changeFirstClassMenu" @change="changeFirstClassMenu()" disabled>
                        <option style="display:none;">请选择一级项目类型</option>
                        <option v-for="item in firstClassMenu" :data-value="item.dictItemId">{{item.itemName}}</option>
                    </select>
                    <select v-model="fDylySj.field" :placeholder="fDylySj.field" disabled>
                        <option style="display:none;">请选择二级项目类型</option>
                        <option v-for="item in secedClassMenu">{{item.itemName}}</option>
                    </select>
                </p>
                <p>
                    <span>主要需求</span>
                    <textarea cols="30" rows="20" placeholder="详细的描述" v-model="fDylySj.mainRequire"></textarea>
                </p>
                <p>
                    <span>服务内容及要求</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.serveContent"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>预期效果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultExpect"></textarea>
                    <span>输出成果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultOutput"></textarea>
                </p>
                <p class="textarea_tb" v-if="corpReTender==1">
                    <span>资质证书名称</span>
                    <input type="text" placeholder="资质证书名称">
                    <span>资质水平</span>
                    <input type="text" placeholder="商家的资质水平">
                </p>
                <p v-if="corpReTender==2">
                    <span>指定商家</span>
                    <input type="text" placeholder="指定商家名称">
                </p>
                <p>
                    <span>费用预算</span>
                    <input type="number" v-model="fDylySj.costBudget"><i>元</i>
                </p>
                <p>
                    <span>发布期限</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    format="yyyy-MM-dd"
                    :default-value="value1"
                    disabled>
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value2"
                    type="date"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    @change="checkDate"
                    disabled>
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(从发布当日开始,最长90天)</span>
                </p>
                <p>
                    <span>投标期限</span>
                    <el-date-picker
                    v-model="value3"
                    type="date"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1"
                    disabled>
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value4"
                    type="date"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                    :picker-options="pickerOptions2"
                    @change="checkDate2">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
                </p>
                <p style="display:none">
                    <span>邮箱验证</span>
                    <input
                    type="text"
                    id="email"
                    v-model="userEmail"
                    placeholder="请输入邮箱"
                    @blur="youxiang_yz"/>
                    <input
                    type="number"
                    id="email_yzm"
                    @blur="sendCode"
                    v-model="userEmailYZX"
                    placeholder="请输入邮箱验证码"/>
                    <input
                    class="shouye_p_button_hqyzm"
                    type="button"
                    @click="sendEm"
                    :disabled="userDisable" 
                    value="获取验证码"/>
                </p>
                <button class="buttonFdylyFbXq" v-if="corpReTender==undefined" @click="fdylyUpdateFbXq">需求修改</button>
                <button class="buttonFdylyFbXq" v-if="corpReTender!=undefined"  @click="fdylyUpdatealignFbXq">再次招标</button>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>        
    </div>
</template>
<script>
import moment from 'moment'
import { 
    publishProjsNeed,
    getBusinessList,
    getBusinessTowList,
    corpFinish,
    splrFinish,
    getProjDetailByCorp,
    corpChangeNeed,
    corpReTendering
    } from '../../api/api'
export default {
    data(){
        return {
            value1:moment(new Date(),"YYYY-MM-DD HH:mm:ss").valueOf(),
            value2:"",
            value3:"",
            value4:"",
            pickerOptions:{
                disabledDate: (time) => {
                    return time.getTime() < Date.now() 
                },
            },
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            pickerOptions2:{
                disabledDate: (time) => {
                    return time.getTime() < Date.now()
                },
            },
            // 两队时间是否正确
            time1Correct:0,
            time2Correct:0,
            userEmail:"",
            userEmailYZX:"",
            userDisable:"",
            dnlySj:{
                // 公司名称
                personName:"",
                // 项目id
                projId:null,
                // 企业会员id
                corpId:null,
                // 供应商id  指定商家 1
                splrId:null,
                // 会员企业名称
                corpName:null,
                // 供应商名称
                splrName:null,
                // 项目logo
                projLogo:null,
                // 合同编号
                contractNo:null,
                // 项目状态
                projState:null,
                // 终止原因
                terminReason:null,
                // 交易状态
                tradeState:null,
                // 交易模式
                tradeMode:null,
                // 交易进程
                tradeProcess:null,
                // 项目类型 1
                businessType:null,
                // 细分领域 1
                field:null,
                // 主要需求 1
                mainRequire:null,
                // 服务内容及要求 1
                serveContent:null,
                // 预期效果 1
                resultExpect:null,
                // 输出成果 1
                resultOutput:null,
                // 供应商资格
                qualLevel:null,
                // 费用预算 1
                costBudget:null,
                // 发布期限开始 1
                releaseStart:null,
                // 发布期限结束 1
                releaseEnd:null,
                // 投标期限开始 1
                bidStart:null,
                // 投标期限结束 1
                bidEnd:null,
                //验证邮箱 1
                checkEmail:null,
                // 验证码 1
                checkCode:null,
                token:null
            },
            fDylySj:{
                // 公司名称
                personName:"",
                // 企业会员id
                corpId:null,
                // 项目类型 1
                businessType:null,
                // 细分领域 1
                field:null,
                // 主要需求 1
                mainRequire:null,
                // 服务内容及要求 1
                serveContent:null,
                // 预期效果 1
                resultExpect:null,
                // 输出成果 1
                resultOutput:null,
                // 费用预算 1
                costBudget:null,
                // 发布期限开始 1
                releaseStart:null,
                // 发布期限结束 1
                releaseEnd:null,
                // 投标期限开始 1
                bidStart:null,
                // 投标期限结束 1
                bidEnd:null,
            },
            firstClassMenu:[],
            firstClassMenuDataValue:"",
            secedClassMenu:[],
            // 获取href传过来的参数
            projId:this.$route.query.projId,
            corpReTender:this.$route.query.corpReTender,
        }
    },
    methods: {
        checkDate(){
            var newTime1= this.value1;
            var newTime2= moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            if(newTime2-newTime1>7776000000){
                this.$message.error('选择时间超过90天,将不能发布哦！');
                this.time1Correct=0;
            }else if(newTime2-newTime1<0){
                this.$message.error('选择时间错误,将不能发布哦！');
                this.time1Correct=0;
            }else{
                this.time1Correct=1;
            }
        },
        checkDate2(){
            var newTime1= moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            var newTime2= moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            if(newTime2-newTime1>1296000000){
                this.$message.error('选择时间超过15天,将不能发布哦！');
                this.time2Correct=0;
            }else if(newTime2-newTime1<0){
                this.$message.error('选择时间错误,将不能发布哦！');
                this.time2Correct=0;
            }else{
                this.time2Correct=1;
            }

        },
        youxiang_yz() {
            var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (!reg.test(this.userEmail)) {
                console.log("邮箱错误")
            }else{
                console.log("邮箱正确")
            }
        },
        sendCode(){
        },
        sendEm() {
        },
        changepPublishing(index){
            this.publishing_selectd=index;
        },
        //调用接口发布需求单一来源
        dylyFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.dnlySj.releaseStart=this.value1;
            this.dnlySj.releaseEnd=this.value2;
            this.dnlySj.bidStart=this.value3;
            this.dnlySj.bidEnd=this.value4;
            this.dnlySj.checkEmail=this.userEmail;
            this.dnlySj.checkCode=this.userEmailYZX;
            this.dnlySj.token=user.token;
            this.dnlySj.tradeMode="单一来源";
            publishProjsNeed(this.dnlySj).then(res=>{
                if(res.data.msg=="发布企业需求成功"&&res.status==200){
                    this.open1();
                    this.$router.push("/fun/funs")
                }else{
                    this.open2();
                    this.$router.push("/fun/funs")
                }
            });
        },
        fdylyFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.fDylySj.releaseStart=this.value1;
            this.fDylySj.releaseEnd=moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidStart=moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidEnd=moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.corpName=this.fDylySj.personName;
            this.fDylySj.corpId=user.roleId;
            this.fDylySj.role=user.role;
            switch (this.publishing_selectd==1) {
                case 1:
                    this.dnlySj.tradeMode="招投标";
                    break;
                case 2:
                    this.dnlySj.tradeMode="竞争性谈判";
                    break;
                case 3:
                    this.dnlySj.tradeMode="委托代理";
                    break;
                default:
                    break;
            }
            if(this.fDylySj.personName==null||this.fDylySj.personPhone==null||this.fDylySj.businessType==null||this.fDylySj.field==null||this.fDylySj.mainRequire==null||this.fDylySj.serveContent==null||this.fDylySj.resultExpect==null||this.fDylySj.resultOutput==null||this.fDylySj.costBudget==null||this.fDylySj.releaseStart==""||this.fDylySj.releaseEnd==""||this.fDylySj.bidStart==""||this.fDylySj.bidEnd==""){
                this.$notify({
                    title: '发布失败',
                    message: '您有必填信息未填写，请重试',
                    type: 'error',
                    position: 'top-left'
                });
            }else{
                if(this.time1Correct=="0"||this.time2Correct=="0"){
                    this.$notify({
                        title: '发布失败',
                        message: '您有信息填写错误，请重试',
                        type: 'error',
                        position: 'top-left'
                    });
                }else if(this.time1Correct=="1"&&this.time2Correct=="1"){
                    publishProjsNeed(
                        {
                        "bidEnd": this.fDylySj.bidEnd,
                        "bidStart": this.fDylySj.bidStart,
                        "businessType": this.fDylySj.businessType,
                        "field": this.fDylySj.field,
                        "corpId": this.fDylySj.corpId,
                        "corpName": this.fDylySj.corpName,
                        "mainRequire": this.fDylySj.mainRequire,
                        "releaseEnd": this.fDylySj.releaseEnd,
                        "releaseStart": this.fDylySj.releaseStart,
                        "resultExpect": this.fDylySj.resultExpect,
                        "resultOutput": this.fDylySj.resultOutput,
                        "costBudget":this.fDylySj.costBudget,
                        "serveContent":this.fDylySj.serveContent,
                        "role":this.fDylySj.role,
                        }
                        ).then(res=>{
                        if(res.data.msg=="发布企业需求成功"&&res.status==200){
                            this.open1();
                            this.$router.push("/fun/funs")
                        }else{
                            this.open2();
                            this.$router.push("/fun/funs")
                        }
                    });
                }
            }
        },
        fdylyUpdateFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.fDylySj.releaseStart=this.value1;
            this.fDylySj.releaseEnd=moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidStart=moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidEnd=moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.corpName=this.fDylySj.personName;
            this.fDylySj.corpId=user.roleId;
            this.fDylySj.role=user.role;
            this.checkDate();
            this.checkDate2();
            switch (this.publishing_selectd==1) {
                case 1:
                    this.dnlySj.tradeMode="招投标";
                    break;
                case 2:
                    this.dnlySj.tradeMode="竞争性谈判";
                    break;
                case 3:
                    this.dnlySj.tradeMode="委托代理";
                    break;
                default:
                    break;
            }
            if(this.fDylySj.personName==null||this.fDylySj.personPhone==null||this.fDylySj.businessType==null||this.fDylySj.field==null||this.fDylySj.mainRequire==null||this.fDylySj.serveContent==null||this.fDylySj.resultExpect==null||this.fDylySj.resultOutput==null||this.fDylySj.costBudget==null||this.fDylySj.releaseStart==""||this.fDylySj.releaseEnd==""||this.fDylySj.bidStart==""||this.fDylySj.bidEnd==""){
                
                this.$notify({
                    title: '修改失败',
                    message: '您有必填信息未填写，请重试',
                    type: 'error',
                    position: 'top-left'
                });
            }else{
                if(this.time1Correct=="0"||this.time2Correct=="0"){
                    this.$notify({
                        title: '修改失败',
                        message: '您有信息填写错误，请重试',
                        type: 'error',
                        position: 'top-left'
                    });
                }else if(this.time1Correct=="1"&&this.time2Correct=="1"){
                    let par={
                                "bidEnd": this.fDylySj.bidEnd,
                                "bidStart": this.fDylySj.bidStart,
                                "businessType": this.fDylySj.businessType,
                                "field": this.fDylySj.field,
                                "corpId": this.fDylySj.corpId,
                                "corpName": this.fDylySj.corpName,
                                "mainRequire": this.fDylySj.mainRequire,
                                "releaseEnd": this.fDylySj.releaseEnd,
                                "releaseStart": this.fDylySj.releaseStart,
                                "resultExpect": this.fDylySj.resultExpect,
                                "resultOutput": this.fDylySj.resultOutput,
                                "costBudget":this.fDylySj.costBudget,
                                "serveContent":this.fDylySj.serveContent,
                                "role":this.fDylySj.role,
                            }
                    if(this.fDylySj.bidEnd>this.fDylySj.releaseEnd){
                        this.$notify({
                            title: '修改失败',
                            message: '修改时间不能超过发布期限',
                            type: 'error',
                            position: 'top-left'
                        });
                    }else{
                        let reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
                        if(reg.test(this.fDylySj.personPhone)){
                            corpChangeNeed(par,this.projId).then(res=>{
                                if(res.status==200){
                                    this.$notify({
                                        title: '修改成功',
                                        message: '修改企业需求成功',
                                        type: 'success',
                                        position: 'top-left'
                                    });
                                    this.$router.push("/fun/funs")
                                }else{
                                    this.$notify({
                                        title: '警告',
                                        message: '修改企业需求失败',
                                        type: 'warning',
                                        position: 'top-left'
                                    });
                                    this.$router.push("/fun/funs")
                                }
                            });
                        }else{
                            this.$message({
                                showClose: true,
                                message: "请输入正确的手机号码",
                                type: "error"
                            });
                        }
                        
                    }
                }
            }
        },
        fdylyUpdatealignFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.fDylySj.releaseStart=this.value1;
            this.fDylySj.releaseEnd=moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidStart=moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidEnd=moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.corpName=this.fDylySj.personName;
            this.fDylySj.corpId=user.roleId;
            this.fDylySj.role=user.role;
            this.checkDate();
            this.checkDate2();
            switch (this.publishing_selectd==1) {
                case 1:
                    this.dnlySj.tradeMode="招投标";
                    break;
                case 2:
                    this.dnlySj.tradeMode="竞争性谈判";
                    break;
                case 3:
                    this.dnlySj.tradeMode="委托代理";
                    break;
                default:
                    break;
            }
            if(this.fDylySj.personName==null||this.fDylySj.personPhone==null||this.fDylySj.businessType==null||this.fDylySj.field==null||this.fDylySj.mainRequire==null||this.fDylySj.serveContent==null||this.fDylySj.resultExpect==null||this.fDylySj.resultOutput==null||this.fDylySj.costBudget==null||this.fDylySj.releaseStart==""||this.fDylySj.releaseEnd==""||this.fDylySj.bidStart==""||this.fDylySj.bidEnd==""){
                
                this.$notify({
                    title: '修改失败',
                    message: '您有必填信息未填写，请重试',
                    type: 'error',
                    position: 'top-left'
                });
            }else{
                if(this.time1Correct=="0"||this.time2Correct=="0"){
                    this.$notify({
                        title: '修改失败',
                        message: '您有信息填写错误，请重试',
                        type: 'error',
                        position: 'top-left'
                    });
                }else if(this.time1Correct=="1"&&this.time2Correct=="1"){
                    let par={
                                "bidEnd": this.fDylySj.bidEnd,
                                "bidStart": this.fDylySj.bidStart,
                                "businessType": this.fDylySj.businessType,
                                "field": this.fDylySj.field,
                                "corpId": this.fDylySj.corpId,
                                "corpName": this.fDylySj.corpName,
                                "mainRequire": this.fDylySj.mainRequire,
                                "releaseEnd": this.fDylySj.releaseEnd,
                                "releaseStart": this.fDylySj.releaseStart,
                                "resultExpect": this.fDylySj.resultExpect,
                                "resultOutput": this.fDylySj.resultOutput,
                                "costBudget":this.fDylySj.costBudget,
                                "serveContent":this.fDylySj.serveContent,
                                "role":this.fDylySj.role,
                            }
                    if(this.fDylySj.bidEnd>this.fDylySj.releaseEnd){
                        this.$notify({
                            title: '修改失败',
                            message: '修改时间不能超过发布期限',
                            type: 'error',
                            position: 'top-left'
                        });
                    }else{
                        let reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
                        if(reg.test(this.fDylySj.personPhone)){
                            corpReTendering(par,this.projId).then(res=>{
                                if(res.data.code==200){
                                    this.$notify({
                                        title: '操作成功',
                                        message: '再次招标成功',
                                        type: 'success',
                                        position: 'top-left'
                                    });
                                    this.$router.push("/fun/funs")
                                }else{
                                    this.$notify({
                                        title: '警告',
                                        message: '再次招标失败',
                                        type: 'warning',
                                        position: 'top-left'
                                    });
                                    this.$router.push("/fun/funs")
                                }
                            });
                        }else{
                            this.$message({
                                showClose: true,
                                message: "请输入正确的手机号码",
                                type: "error"
                            });
                        }
                        
                    }
                }
            }
        },
        // 发布成功
        open1() {
            this.$notify({
                title: '发布成功',
                message: '企业需求发布成功',
                type: 'success',
                position: 'top-left'
            });
        },
        // 发布失败
        open2() {
            this.$notify({
                title: '警告',
                message: '企业需求发布失败',
                type: 'warning',
                position: 'top-left'
            });
        },
        // 获取子二级options
        changeFirstClassMenu(){
            let obj = document.getElementById("changeFirstClassMenu")
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value")
            this.firstClassMenuDataValue=store_num;
            getBusinessTowList({"itemId":store_num}).then(res => {
                if (res.data.code === 200) {
                    this.secedClassMenu=res.data.data
                }
            });
        },
        addDate(date,days){ 
            var d=new Date(date); 
            d.setDate(d.getDate()+days); 
            var m=d.getMonth()+1; 
            return d.getFullYear()+'-'+m+'-'+d.getDate(); 
        },
        checkPhoneNumber(){
            let reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
            if (this.fDylySj.personPhone === "") {
                this.$message({
                    showClose: true,
                    message: "请输入手机号码",
                    type: "error"
                });
                return;
            }else if (!reg.test(this.fDylySj.personPhone)) {
                this.$message({
                    showClose: true,
                    message: "请输入正确的手机号码",
                    type: "error"
                });
                return;
            }
        },
    },
    created() {
        let originUser = JSON.parse(sessionStorage.getItem("user"));
        this.dnlySj.personPhone = originUser.phoneNo; 
        // this.fDylySj.personPhone = originUser.phoneNo;
        
        if(this.projId==undefined){
            getBusinessList().then(res => {
                if (res.data.code === 200) {
                    this.firstClassMenu=res.data.data
                }
            });
            switch (originUser.role) {
                case "0":
                    corpFinish({"corpId": originUser.roleId}).then(res => {
                        if (res.data.code === 200) {
                                this.dnlySj.personName=res.data.data[0].corpName;
                                this.fDylySj.personName = res.data.data[0].corpName;
                                this.fDylySj.personPhone = res.data.data[0].personPhone;
                                console.log(res.data.data[0])
                            }
                        })
                    break;
                default:
                    this.dnlySj.personName = originUser.userName;
                    this.fDylySj.personName = originUser.userName;
                    break;
            }
        }else{
            getProjDetailByCorp({projId:this.projId}).then(res => {
                if (res.data.code === 200) {
                    this.fDylySj.personName=res.data.data.corpName;
                    this.fDylySj.businessType=res.data.data.businessType;
                    this.fDylySj.field=res.data.data.field;
                    this.fDylySj.mainRequire=res.data.data.mainRequire;
                    this.fDylySj.serveContent=res.data.data.serveContent;
                    this.fDylySj.resultExpect=res.data.data.resultExpect;
                    this.fDylySj.resultOutput=res.data.data.resultOutput;
                    this.fDylySj.costBudget=res.data.data.costBudget;
                    this.fDylySj.releaseStart=this.value1=res.data.data.releaseStart;
                    this.fDylySj.releaseEnd=this.value2=res.data.data.releaseEnd;
                    this.fDylySj.bidStart=this.value3=res.data.data.bidStart;
                    let day2=new Date();
                    let newDate=day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate()
                    this.value3=this.addDate(newDate,10)
                    this.fDylySj.bidEnd=this.value4=res.data.data.bidEnd;
                }
            })
            getBusinessList().then(res => {
                if (res.data.code === 200) {
                    this.firstClassMenu=res.data.data
                    for(var i=0;i<this.firstClassMenu.length;i++){
                        if(this.firstClassMenu[i].itemName==this.fDylySj.businessType){
                            getBusinessTowList({"itemId":this.firstClassMenu[i].dictItemId}).then(res => {
                                
                                if (res.data.code === 200) {
                                    this.secedClassMenu=res.data.data
                                }
                            });
                        }
                    }
                }
            });
        }
        
    },
}
</script>
<style scoped>

    .publishing{
        width: 73%;
        height: auto;
        background-color:#fff;
        margin: 0 auto;
        border: none;
        padding-bottom: 16px;
        padding-top: 16px;
    }
    .publishing input{
        background-color: #fff;
        color: #999999;
        font-size: 14px
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
        width:auto;
        justify-content: space-between;
        height: 100%;
        align-items: center;
    }
    .publishing_nav_title li{
        height: 100%;
    }
    .publishing_nav_title li:not(:first-child){
        margin-left: 24px;
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
    .publishing_content{
        width: 100%;
        height: auto;
        margin-top: 16px;
        padding: 0 16px;
        box-sizing: border-box;
    }
    .publishing_content>p{
        display: flex;
        flex-wrap: wrap;
        min-height: 38px;
        margin: 16px 0 0 0;
    }
    .publishing_content>p>.qc_dyh_span_yx{
        width: auto;
    }
    .publishing_content>p>span{
        display: inline-block;
        width: 10%;
        margin-right: 16px;
        font-size: 16px;
        line-height: 38px;
        color: #666666;
        user-select: none;
    }
    .publishing_content>p>span:after{
        content: "*";
        color: #9e0100;
        line-height: 18px;
    }
    .publishing_content>p>input{
        width: 180px;
        height: 38px;
        border: 0;
        padding-left: 16px;
        box-sizing: border-box;
        background: #f6f6f6;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .publishing_content>p>input+span{
        margin-left: 27.5%;
    }
    .publishing_content>p>select{
        width: 180px;
        height: 38px;
        padding-left: 8px;
        margin-right: 16px;
        border: 0;
        outline: none;
        background: #f6f6f6;
    }
    .publishing_content>.textarea_tb>textarea{
        width: 35%;
    }
    .publishing_content>.textarea_tb>textarea+span{
        margin-left: 5%;
    }
    .publishing_content>p>textarea{
        margin: 0;
        width: 86%;
        height: 80px;
        padding: 8px;
        resize:none;
        box-sizing: border-box;
        background: #f6f6f6;
        border: 0;
    }
    .publishing_content>p:nth-child(3)>span:nth-child(3),.publishing_content>p:nth-child(4)>span:nth-child(3){
        margin-left: 16px;
    }
    .publishing_content>p:nth-child(3)>*:nth-child(n+5){
        margin-top: 16px;
    }
    .publishing_content>p>input+i{
        font-style: normal;
        line-height: 38px;
        margin-left: 8px;
    }
    .publishing_content>p>div+i{
        font-style: normal;
        margin: 0 8px;
        line-height: 38px;
    }
    .publishing_content>p>div+span{
        margin: 0 0 0 16px;
        font-size: 16px;
        color: #999999;
    }
    .publishing_content>p>div+span:after{
        content: ""
    }
    .publishing_content>p>input+input{
        margin-left: 16px;
    }
    .publishing_content>button{
        width: 220px;
        height: 50px;
        border: 0;
        border-radius: 20px;
        background: #9e0100;
        color: #fff;
        font-size: 18px;
        display: block;
        margin: 32px auto;
    }
    .publishing+span{
        display: block;
        color: #bbbbbb;
        padding: 32px 0;
        text-align: center;
        background: #f9f9f9;
    }
    .tdt_qyhy_top_title{
        display: block;
        width: 74%;
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
    .publishing_right_wh{
        display: inline-block;
        width: 120px;
        height:32px;
        background: #9e0100;
        color: #fff;
        text-align: center;
        line-height: 32px;
        border-radius: 4px;
        font-size: 14px;
        margin-top: 10px;
    }
    .publishing_content>p>.shouye_p_button_hqyzm{
        background: none;
        color: #9e0100;
        font-weight: bolder;
    }
    @media screen and (max-width: 415px) {
        .publishing{
            width: 100%;
            padding: 16px 24px !important;
            margin: 0;
            box-sizing: border-box;
        }
        .publishing_nav{
            width: 100%;
            margin: 0;
        }
        .publishing_nav>ul>li>font{
            font-size: 14px;
        }
        .publishing_nav>a{
            width: 20px;
            overflow: hidden;
        }
        .publishing_content>p>select+select,.publishing_content>p>input+input{
            margin-left: 28%;
            margin-top: 16px;
        }
        .publishing_content>p:nth-child(3)>span{
            margin: 0;
        }
        .publishing_content>p>textarea{
            width: 100%;
            margin-top: 8px;
        }
        .publishing_content>p:nth-child(7),.publishing_content>p:nth-child(8){
            display: flex;
            flex-direction: column;
        }
    }
</style>