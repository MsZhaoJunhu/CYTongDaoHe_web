<template>
    <div class="public-background">
        <div class="public-mainPar">
            <div class="public-title">
                <img src="../../../assets/icon3.png" alt="">
                <span>账户信息</span>
            </div>
            <div class="public-content">
                <label>
                    <span class="public-start">用户名</span>
                    <el-input v-model="user.actualName" placeholder="请输入用户名"></el-input>
                </label>
                <label>
                    <span class="public-start">手机号码</span>
                    <el-input v-model="user.phoneNo" placeholder="请输入手机号码"></el-input>
                </label>
                <label>
                    <span class="public-start">邮箱</span>
                    <el-input v-model="user.emailAdd" placeholder="请输入邮箱"></el-input>
                </label>
                <label>
                    <span>微信号</span>
                    <el-input v-model="user.wechatNo" placeholder="请输入微信"></el-input>
                </label>
                <label>
                    <span>QQ</span>
                    <el-input v-model="user.qqNo" placeholder="请输入QQ"></el-input>
                </label>
                <label>
                    <span>微博</span>
                    <el-input v-model="user.microblogNo" placeholder="请输入微博"></el-input>
                </label>
                <label>
                    <span>推荐人</span>
                    <el-input v-model="user.recommendName" placeholder="请输入推荐人"></el-input>
                </label>
                <label>
                    <span>推荐人电话</span>
                    <el-input v-model="user.recommendPhone" placeholder="请输入推荐人电话"></el-input>
                </label>
            </div>
            <div class="public-title">
                <img src="../../../assets/icon1.png" alt="">
                <span>关联公司信息</span>
            </div>
            <div class="public-content">
                <label>
                    <span class="public-start">公司名称</span>
                    <el-input v-model="user.associatedCo" placeholder="请输入公司名称"></el-input>
                </label>
                <label>
                    <span class="public-start">岗位</span>
                    <el-input v-model="user.postName" placeholder="请输入岗位"></el-input>
                </label>
                <label>
                    <span class="public-start">职务</span>
                    <el-select v-model="user.corpPost" placeholder="请选择职务">
                        <el-option label="实际控制人" value="实际控制人"></el-option>
                        <el-option label="董事长" value="董事长"></el-option>
                        <el-option label="董事" value="董事"></el-option>
                        <el-option label="监事" value="监事"></el-option>
                        <el-option label="高管" value="高管"></el-option>
                        <el-option label="中干" value="中干"></el-option>
                        <el-option label="基干" value="基干"></el-option>
                        <el-option label="员工" value="员工"></el-option>
                    </el-select>
                </label>
            </div>
            <div class="public-title">
                <img src="../../../assets/icon2.png" alt="">
                <span>个人资源</span>
            </div>
            <div class="public-personContent" v-for="item in user.custIndivResourceList">
                <div>
                    <div>{{item.resourceType}}</div>
                    <div>{{item.resourceLevel}}</div>
                    <div>{{item.levelStandard}}</div>
                </div>
                <div>{{item.resourceDesc}}</div>
            </div>
            <div class="public-content">
                <div class="add-table-tr" @click="add">新增</div>
            </div>
            <div class="public-content">
                <el-button class="form-btn infosubmit" @click="submit">提交</el-button>
            </div>
        </div>
        <el-drawer :visible.sync="drawer" title="个人资源" size="100%" direction="btt" :before-close="handleClose">
            <div class="drawer-div-par" v-for="(item,index) in arr" :key="index">
                <div>
                    <p>资源类型</p>
                    <el-select v-model="item.resourceType" @change="changeResourceType" placeholder="请选择资源类型">
                        <el-option v-for="(item,index) in primaryResources" :key="index" :label="item.itemName" :value="item.dictItemId"></el-option>
                    </el-select>
                </div>
                <!-- <div>
                    <p>资源等级</p>
                    <el-select v-model="item.resourceLevel" @change="changeResourceLevel" placeholder="请选择资源登记">
                        <el-option v-for="(item,index) in twoTierResources" :key="index" :label="item.itemName" :value="item.itemCode"></el-option>
                    </el-select>
                </div> -->
                <div>
                    <p>等级标准</p>
                    <el-input class="input-ts" v-model="item.levelStandard" placeholder="请选择资源等级" :disabled="true"></el-input>
                </div>
                <div>
                    <p>资源描述</p>
                    <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" placeholder="请输入对资源的描述" v-model="item.resourceDesc"></el-input>
                </div>
                <div class="submit-btns-par">
                    <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                    <el-button class="form-btn infosubmit" @click="preservation">保存</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
    import {
        indivFinish,
        resources,
        resourcesEr,
        updateIndivInfo,
        updateIndivResource,
        talent
    } from "@/components/api/api";
    export default{
        data () {
            return {
                user:{},
                drawer:false,
                arrContent:[
                    {resourceType:"政府资源",resourceLevel:"三级",levelStandard:"区级重要领导关系",resourceDesc:"这是一段资源描述这是一段资源描述这是一段资源描述这是一段资源描述这是一段资源描述这是一段资源描述这是一段资源描述"}
                ],
                primaryResources:"",
                twoTierResources:"",
                threeTierResources:"",
                arr:[]
            }
        },
        created () {
            this.primaryResourcesFun();
            let user = JSON.parse(sessionStorage.getItem("user"));
            indivFinish({ "indivId": user.roleId }).then(res => {
                if (res.data.code === 200) {
                    this.user = res.data.data[0]
                    if(user.email){
                        this.user.emailAdd=user.email
                    }else{
                        this.user.phoneNo=user.phoneNo
                    }
                }
            })
        },
        methods: {
            handleClose (done) {
                const that = this;
                this.$confirm('是否确认退出？')
                .then(_ => {
                    that.cancel();
                })
                .catch(_ => { });
            },
            // 通用取消
            cancel(){
                this.drawer=false;
                this.arr=[];
                console.log()
            },
            // 通用保存
            preservation(){
                const that = this;
                that.user.custIndivResourceList.push(that.arr[0])
                that.cancel();
            },
            primaryResourcesFun () {
                resources().then(res => {
                    if (res.data.code === 200) {
                        this.primaryResources = res.data.data
                    }
                });
            },
            changeResourceType (val) {
                // 匹配选择的项的中文名称
                for (var i in this.primaryResources) {
                    if (this.primaryResources[i].dictItemId == val) {
                        this.arr[0].resourceType = this.primaryResources[i].itemName
                        this.arr[0].resourceLevel=""
                        this.arr[0].levelStandard=""
                    }
                }
                resourcesEr({ "dictItemId": val }).then(res => {
                    if (res.data.code === 200) {
                        this.twoTierResources = res.data.data
                        this.twoTierResourcesVal = val;
                    }
                });
            },
            changeResourceLevel (val) {
                for (var i in this.twoTierResources) {
                    if (this.twoTierResources[i].itemCode == val) {
                        this.arr[0].resourceLevel = this.twoTierResources[i].itemName
                    }
                }
                resourcesEr({ "dictItemId": this.twoTierResourcesVal, "itemCode": val }).then(res => {
                    if (res.data.code === 200) {
                        this.arr[0].levelStandard = res.data.data[0].itemValue1;
                    }
                });
            },
            submit(){
                let user = JSON.parse(sessionStorage.getItem("user"));
                let parameter = this.certainFunction(this.user, [
                    "actualName",
                    "phoneNo",
                    "emailAdd",
                    "wechatNo",
                    "qqNo",
                    "microblogNo",
                    "associatedCo",
                    "postName",
                    "corpPost",
                    "recommendName",
                    "recommendPhone",
                    "indivId",
                ])
                updateIndivInfo(parameter,user.roleId).then(res => {
                    if (res.data.code == 200) {
                        updateIndivResource(this.user.custIndivResourceList, user.roleId).then(res => {
                            talent({actualname:this.user.actualName,indivId:user.roleId,phoneNo:this.user.phoneNo,registerEmail:this.user.emailAdd}).then(res => {
                                if (res.data.code == 200) {
                                    console.log(res.data)
                                }
                            })
                            if (res.data.code == 200) {
                                this.$confirm('您还未加入我们的共享人才,快来加入吧，好工作，好机会正等着你！', '信息提交成功！', {
                                    confirmButtonText: '立即加入',
                                    cancelButtonText: '不了，谢谢！',
                                    type: 'warning'
                                }).then(() => {
                                    this.$message({
                                        type: 'success',
                                        message: '正在进入!'
                                    });
                                    this.$router.push('/fun/perfectUserInfo1')
                                }).catch(() => {
                                    this.$router.push('/')        
                                });
                            } else {
                                this.$notify({
                                title: '操作失败',
                                message: '您登录信息已失效，请重新登录后重试！',
                                type: 'error',
                                position: 'top-left'
                                });
                            }
                        })
                    } else {
                        this.$notify({
                        title: '操作失败',
                        message: '您登录信息已失效，请重新登录后重试！',
                        type: 'error',
                        position: 'top-left'
                        });
                    }
                })
                
            },
            // 过滤对象属性方法
            certainFunction (obj, keys) {
                return keys.reduce((result, key) => {
                    if (obj.hasOwnProperty(key)) {
                    result[key] = obj[key];
                    }
                    return result;
                }, {});
            },
            add(){
                let user = JSON.parse(sessionStorage.getItem("user"));
                this.drawer=true
                this.arr.push({resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:"",indivId:user.roleId})
            }
        }
    }
</script>
<style scoped>
    .public-background{
        width: 100%;
        min-height: 100%;
        height: auto;
        background: rgb(184, 184, 184);
        background: url('../../../assets/imgs/loginba.png');
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .public-mainPar{
        width: 45rem;
        height: 40rem;
        overflow-y: auto;
        background: #fafafa;
        border-top: 4px solid #c20808;
        padding-bottom: 2rem;
        box-sizing: border-box;
    }
    .public-title{
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        padding-left: 1.5rem;
    }
    .public-title img{
        width: 2rem;
        height: 2rem;
        margin-right: 1.5rem;
    }
    .public-title span{
        font-size: 1.1rem;
        font-weight: 800;
        color: #c20808;
    }
    .public-content{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 0 2rem;
    }
    .public-content label{
        width: 50%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .public-content label:nth-child(odd){
        padding-right: 1rem;
    }
    .public-content label:nth-child(even){
        padding-left: 1rem;
    }
    .public-content label>span+div{
        width: 222px;
        border-radius: 0;
    }
    .public-content label>span+div /deep/ .el-input__inner{
        border-radius: 0;
    }
    .public-content label:nth-child(n+3){
        margin-top: 0.5rem;
    }
    .public-content label span{
        display: block;
        width: 5rem;
        text-align: left;
        font-size: 14px;
    }
    .public-start::after{
        content: '*';
        color: red;
    }
    .public-mainPar /deep/ .el-input__inner:focus,
    .public-mainPar /deep/ .el-textarea__inner:focus,
    .public-mainPar /deep/ .el-select .el-input.is-focus .el-input__inner{
        border-color: #9e0100;
    }
    .add-table-tr{
        width: 100%;
        height: 40px;
        /* padding: 0.3rem 0; */
        border-radius: 0;
        font-size: 1rem;
        line-height: 40px;
        text-align: center;
        border: 1px dashed #999;
        cursor: pointer;
        box-sizing: border-box;
    }
    .drawer-div-par{
        width: 30rem;
        height: 21.5rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center !important;
        padding: 2rem 0 0 0;
        box-sizing: border-box;
        overflow-y: auto;
        transform: none;
    }
    .drawer-div-par>div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0 2rem;
        box-sizing: border-box;
    }
    .drawer-div-par>div+div{
        margin-top: 1rem;
    }
    .drawer-div-par>div:last-child{
        justify-content: flex-end;
    }
    .drawer-div-par>div>p{
        white-space: nowrap;
        margin-right: 1rem;
    }
    .drawer-div-par>div>div{
        width: 100%;
    }
    /* .drawer-div-par p{
        margin: 1rem 0 0.5rem 0;
    } */
    .submit-btns-par{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid #dad7d7;
    }
    .drawer-div-par .submit-btns-par{
        padding-top: 1rem;
        margin-top: 2rem;
    }
    .drawer-div-par /deep/ textarea{
        margin: 0;
        border-radius: 0;
    }
    .drawer-div-par /deep/ input{
        border-radius: 0;
    }
    .public-personContent{
        padding: 0 2rem;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .public-personContent>div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .public-personContent>div:first-child div{
        width:calc(100%/3);
        white-space: nowrap;
        color: #666;
    }
    .public-personContent>div:last-child{
        color: #999;
        margin-top: 0.5rem;
    }
    .infosubmit{
        background: #9e0000;
        color: #fff;
        border-color: #9e0000;
    }
    /* .drawer-div-par /deep/ .input-ts{
        width: 217px;
    } */
    .submitC-class{
        padding: 0.25rem 1.5rem;
        background: #9e0000;
        color: #fff;
        border-radius: 0.25rem;
    }
    .public-content+.public-content{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* 设置滚动条的样式 */
    .public-mainPar::-webkit-scrollbar {
        width: 10px;
    }
    /* 滚动槽 */
    .public-mainPar::-webkit-scrollbar-track {
    border-radius: 8px;
    }
    /* 滚动条滑块 */
    .public-mainPar::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 8px 0 0 green inset;
    }
    .public-mainPar::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 #666 inset;
    }
    .public-mainPar::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }
    .public-mainPar::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    .public-mainPar:hover::-webkit-scrollbar {
        width: 10px;
    }
    .public-mainPar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgba(0,0,0,0);
        box-shadow: 10px 0 0 #999 inset;
    } 
    .public-mainPar {
        overflow-y: overlay;
        word-wrap: break-word;
    }
    .public-mainPar {
        margin-left: calc(100vw - 100%);
    }
</style>
<style>
    .el-drawer{
        background: none !important;
    }
    .el-drawer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .el-drawer__body{
        flex: 0;
    }
    .el-drawer__header{
        width: 30rem;
        padding: 0;
        margin: 0;
        background: #fff;
        border-bottom: 1px solid #dad7d7;
        height: 40px;
        display: flex;
        box-sizing: border-box;
        padding: 0 1rem;
    }
    .el-drawer__header .el-dialog__close{
        color: #666;
    }
    .el-drawer__header button{
        color: #fff;
    }
    .el-dialog__wrapper{
        overflow: hidden;
    }
</style>