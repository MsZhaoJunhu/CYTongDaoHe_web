<template>
    <div class="public-background">
        <div class="public-mainPar">
            <div class="public-title">
                <img src="../../../assets/icon1.png" alt="">
                <span>账户信息</span>
            </div>
            <div class="public-content">
                <label>
                    <span class="public-start">公司名称</span>
                    <el-input v-model="compeny.name" placeholder="请输入公司名称"></el-input>
                </label>
                <label>
                    <span class="public-start">公司地址</span>
                    <el-input v-model="compeny.adress" placeholder="请输入公司地址"></el-input>
                </label>
                <label>
                    <span class="public-start">公司电话</span>
                    <el-input v-model="compeny.phone" placeholder="请输入公司电话"></el-input>
                </label>
                <label>
                    <span>公司邮箱</span>
                    <el-input v-model="compeny.email" placeholder="请输入公司邮箱"></el-input>
                </label>
                <label>
                    <span>公司官网</span>
                    <el-input v-model="compeny.officialWebsite" placeholder="请输入公司官网"></el-input>
                </label>
                <div class="div100">
                    <span>公司简介</span>
                    <el-input type="textarea" :rows="5" v-model="compeny.introduction" placeholder="请输入公司简介"></el-input>
                </div>
                <div class="div100">
                    <p class="upload-p">公司Logo</p>
                    <div class="upload_img_par">
                        <div class="upload_img" :class="avatar=='improve_registration_information_imgBorder'?'':''">
                        <img :src="avatar">
                        <my-upload field="img"
                                    @crop-success="cropSuccess"
                                    v-model="show"
                                    :width="200"
                                    :height="200"
                                    img-format="png"
                                    :size="size"></my-upload>
                        </div>
                        <button @click="show=true">
                        <img src="../../../assets/icon/upload.png"
                            alt="">
                        <span>上传头像</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="public-content">
                <div class="submitC-class" @click="submit">提交</div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
      resources,
      resourcesEr,
      getMyInfo,
    } from "@/components/api/api";
    import myUpload from 'vue-image-crop-upload';
    export default{
        data () {
            return {
                compeny:{name:"",phone:"",email:"",weChat:"",qq:"",weBo:""},
                avatar: "",
                size: 2.1,
                show: false,
                avatar: "",
            }
        },
        created () {
            // 获取头像
            // getMyInfo({ "userId": user.userId }).then(res => {
            //     if (res.data.code === 200) {
            //     this.avatar = res.data.data.avatar
            //     }
            // })
        },
        components: {
            "my-upload": myUpload
        },
        methods: {
            handleClose (done) {
                this.$confirm('是否确认退出？')
                .then(_ => {
                    done();
                    // this.mountedInfo();
                })
                .catch(_ => { });
            },
            // 通用取消
            cancel(){
                this.drawer=false;
            },
            // 通用保存
            preservation(){
                const that = this;
                that.cancel();
                that.arrContent.push(that.arr[0])
            },
            submit(){
                this.$confirm('您还未认证成为服务供应商，认证后可以为其他企业提供专业服务，快来认证吧！', '信息保存成功！', {
                confirmButtonText: '立即加入',
                cancelButtonText: '不了，谢谢！',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '正在进入!'
                    });
                    this.$router.push('perfectUserInfo1')
                }).catch(() => {
                    this.$router.push('/')        
                });
            },
            cropSuccess (imgDataUrl) {
                let user = JSON.parse(sessionStorage.getItem("user"));
                changeAvatar({ "avatar": imgDataUrl, "userId": user.userId }).then(res => {
                    if (res.data.code == 200) {
                    this.$confirm(res.data.msg);
                    this.mountedInfo();
                    }
                })
            },
        }
    }
</script>
<style scoped>
    .public-background{
        width: 100%;
        height: auto;
        background: rgb(184, 184, 184);
        background: url('../../../assets/imgs/loginba.png');
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7rem 0;
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
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-right: 1rem;
    }
    .public-content>.div100{
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem;
    }
    .public-content>.div100>span{
        font-size: 14px;
        line-height: 2rem;
    }
    .public-content>.div100 /deep/ .el-textarea{
        margin-top: 0.5rem;
    }
    .public-content label:nth-child(n+3){
        margin-top: 0.5rem;
    }
    .public-content label span{
        display: block;
        width: 8rem;
        text-align: center;
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
        padding: 0.3rem 0;
        border-radius: 4px;
        font-size: 1rem;
        text-align: center;
        border: 1px dashed #999;
        cursor: pointer;
    }
    .drawer-div-par{
        width: 30rem;
        height: 34rem;
        background: #e7e7e7;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2rem 0;
        box-sizing: border-box;
        overflow-y: auto;
    }
    .drawer-div-par>div{
        width: 16rem;
    }
    .drawer-div-par p{
        margin: 1rem 0 0.5rem 0;
    }
    .submit-btns-par{
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
    .drawer-div-par /deep/ .input-ts{
        width: 217px;
    }
    .submitC-class{
        padding: 0.25rem 1.5rem;
        background: #9e0000;
        color: #fff;
        border-radius: 0.25rem;
    }
    .public-content+.public-content{
        margin-top: 1rem;
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
    .upload_img_par{
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem;
    }
    .upload_img{
        width: 8rem;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .upload_img img{
        display: block;
        width: 7rem;
        height: 7rem;
        background: #fafafa;
    }
    .upload_img_par button{
        width: 8rem;
        border: 1px solid #999;
        background: none;
        padding: 0.25rem 0;
        cursor: pointer;
        color: #666;
    }
    .upload-p{
        font-size: 14px;
        line-height: 1.8rem;
        margin-top: 0.5rem;
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
    }
    .el-drawer__header button{
        color: #fff;
    }
    .el-dialog__wrapper{
        overflow: hidden;
    }
</style>