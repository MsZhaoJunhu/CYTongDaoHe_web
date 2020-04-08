<template>
    <div>
        <header_ :select_index="6"/>
		<img src="../../assets/imgs/park_banner.jpg" class="park_banner" />
        <div class="park_substance_title">
			<div class="catalogue">
                <span><router-link to="/park">智慧园区</router-link></span>
                <span><router-link to="/signUpContent">园区的名称</router-link></span>
                <span>招商报名</span>
            </div>
		</div>
        <div class="signUpContentAll">
            <!-- 企业和个人选项 -->
            <div class="signUpTopTitle">
                <div :class="activeNum=='1'?'active':''" @click="clickToChangeActiveNum(1)">企业报名</div>
                <div :class="activeNum=='2'?'active':''" @click="clickToChangeActiveNum(2)">个人报名</div>
            </div>
            <!-- 企业 -->
            <div v-show="activeNum==1" class="signUpContentEnterprise">
                <div class="signUpTeShuDivCss">
                    <div class="signUpDivCss">
                        <span>公司名称</span>
                        <el-input placeholder="需求方公司名称" v-model="corporateMembership.companyName"></el-input>
                    </div>
                    <div class="signUpDivCss">
                        <span>现所在地址</span>
                        <el-input placeholder="公司所在地址" v-model="corporateMembership.address"></el-input>
                    </div>
                </div>
                <div class="signUpDivCss">
                    <span>所在行业</span>
                    <el-select v-model="corporateMembership.industry1" @change="elSelectChangeEvent" >
                        <el-option v-for="(item,index) in this.title1"
                            :key="index"
                            :label="item.itemName"
                            :value="item.dictItemId"></el-option>
                    </el-select>
                    <el-select v-model="corporateMembership.industry2" placeholder="二级行业类别">
                        <el-option v-for="(item,index) in this.title2"
                            :key="index"
                            :label="item.itemName"
                            :value="item.dictItemId"></el-option>
                    </el-select>
                    <!-- <el-select v-model="corporateMembership.industry3" placeholder="三级细分类别">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select> -->
                </div>
                <div class="signUpDivCss">
                    <span>主营业务</span>
                    <el-input type="textarea" placeholder="请输入主营业务" v-model="corporateMembership.mainBusiness" ></el-input>
                </div>
                <div class="signUpDivCss" style="width:100%;">
                    <div>
                        <span>联系人</span>
                        <el-input placeholder="联系人姓名" v-model="corporateMembership.contacts"></el-input>
                    </div>
                    <div>
                        <span>联系电话</span>
                        <el-input placeholder="联系电话" v-model="corporateMembership.contactsPhoneNo"></el-input>
                    </div>
                    <div>
                        <span>QQ号码</span>
                        <el-input placeholder="QQ号码" v-model="corporateMembership.contactsQQNo"></el-input>
                    </div>
                    <div>
                        <span>微信</span>
                        <el-input placeholder="微信号" v-model="corporateMembership.contactsWxNo"></el-input>
                    </div>
                </div>
                <div class="signUpDivCss signUpContentRadio" >
                    <!-- <el-radio v-model="radio" label="label">报名时发送企业用户注册信息</el-radio> -->
                </div>
            </div>
            <!-- 个人 -->
            <div v-show="activeNum==2" class="signUpContentEnterprise">
                <div class="signUpDivCss">
                    <span>联系人姓名</span>
                    <el-input placeholder="联系人姓名" v-model="personal.contacts"></el-input>
                </div>
                <div class="signUpDivCss">
                    <span>联系电话</span>
                    <el-input placeholder="联系电话" v-model="personal.contactsPhoneNo"></el-input>
                </div>
                <div class="signUpDivCss">
                    <span>QQ</span>
                    <el-input placeholder="QQ号码" v-model="personal.contactsQQNo"></el-input>
                </div>
                <div class="signUpDivCss">
                    <span>微信</span>
                    <el-input placeholder="微信号" v-model="personal.contactsWxNo"></el-input>
                </div>
            </div>
            <div class="signUpContentSureSignUp">
                <el-button type="primary" v-show="activeNum==2" @click="collect2" >确定报名</el-button>
                <el-button type="primary" v-show="activeNum==1" @click="collect" >确定报名</el-button>
            </div>
        </div>
		<footer_/>
    </div>
</template>
<script>
import {
    hyList,
    htListChildren,
    merchantEntered,
} from '../api/api'
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
export default {
    components:{
        header_,
        footer_,
    },
    
    data() {
        return {
            activeNum:1,
            corporateMembership:{
                companyName:"",
                address:"",
                // 行业
                industry1:"",
                industry2:"",
                // industry3:"3",
                // 主营业务
                mainBusiness:"",
                contacts:"",
                contactsPhoneNo:"",
                contactsQQNo:"",
                contactsWxNo:"",
            },
            title1:[],
            title2:[],
            personal:{
                contacts:"",
                contactsPhoneNo:"",
                contactsQQNo:"",
                contactsWxNo:"",
            },
            newsId:this.$route.query.newsId,
        }
    },
    methods: {
        elSelectChangeEvent(val){
            htListChildren({"itemId":val}).then(res=>{
                    if(res.data.code===200){
                        this.title2=res.data.data
                    }
                })
        },
        collect(){
            let merchantIndusty=""
            for(var i=0;i<this.title1.length;i++){
                if(this.title1[i].dictItemId==this.corporateMembership.industry1){
                    merchantIndusty+=this.title1[i].itemName
                }
            }
            for(var i=0;i<this.title2.length;i++){
                if(this.title2[i].dictItemId==this.corporateMembership.industry2){
                    merchantIndusty+=this.title2[i].itemName
                }
            }
            if(this.corporateMembership.companyName!=""&&this.corporateMembership.address!=""&&this.corporateMembership.industry1!=""&&this.corporateMembership.industry2!=""&&this.corporateMembership.mainBusiness!=""&&this.corporateMembership.contacts!=""&&this.corporateMembership.contactsPhoneNo!=""&&this.corporateMembership.contactsQQNo!=""&&this.corporateMembership.contactsWxNo!=""){
                if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.corporateMembership.contactsPhoneNo))){ 
                    this.$notify({
                        title: "信息填写有误",
                        message: "您电话填写有误！请重新填写再试",
                        type: 'error',
                        position: 'top-left'
                    });
                    return false; 
                }else{
                    merchantEntered({
                        "merchantAdd": this.corporateMembership.address,
                        "merchantCorpname": this.corporateMembership.companyName,
                        "merchantIndusty": merchantIndusty,
                        "merchantMain": this.corporateMembership.mainBusiness,
                        "merchantName": this.corporateMembership.contacts,
                        "merchantPhone": this.corporateMembership.contactsPhoneNo,
                        "merchantQq": this.corporateMembership.contactsQQNo,
                        "merchantRole": 0,
                        "merchantWx": this.corporateMembership.contactsWxNo,
                        "parkactId": this.newsId,
                    }).then(res => {
                        if(res.data.code==200){
                            this.$notify({
                                title: "报名成功",
                                message: "恭喜您！报名成功！",
                                type: 'success',
                                position: 'top-left'
                            });
                            this.$router.push('park')
                        }
                    })
                }
                
            }else{
                this.$notify({
                    title: "报名失败",
                    message: "您有信息尚未填写！",
                    type: 'error',
                    position: 'top-left'
                });
            }
        },
        collect2(){
            if(this.personal.contacts!=""&&this.personal.contactsPhoneNo!=""&&this.personal.contactsQQNo!=""&&this.personal.contactsWxNo!=""){
                if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.personal.contactsPhoneNo))){ 
                    this.$notify({
                        title: "信息填写有误",
                        message: "您有信息填写有误！请重新填写再试",
                        type: 'error',
                        position: 'top-left'
                    });
                    return false; 
                }else{
                    merchantEntered({
                        "merchantName": this.personal.contacts,
                        "merchantPhone": this.personal.contactsPhoneNo,
                        "merchantQq": this.personal.contactsQQNo,
                        "merchantRole": 2,
                        "merchantWx": this.personal.contactsWxNo,
                        "parkactId": this.newsId,
                    }).then(res => {
                        if(res.data.code==200){
                            this.$notify({
                                title: "报名成功",
                                message: "恭喜您！报名成功！",
                                type: 'success',
                                position: 'top-left'
                            });
                            this.$router.push('park')
                        }
                    })
                }
            }else{
                this.$notify({
                    title: "报名失败",
                    message: "您有信息尚未填写！",
                    type: 'error',
                    position: 'top-left'
                });
            }
        },
        clickToChangeActiveNum(num){
            this.activeNum=num;
        }
    },
    mounted() {
        hyList().then(res => {
            if (res.data.code === 200) {
                this.title1 = res.data.data;
            }
        })
    },
}
</script>
<style scoped>
    .park_banner{
		display: block;
		width: 100%;
	}
    .park_substance_title{
		width: 100%;
		background-color: #fff;
		height: 95px;
		display: flex;
	}
    .catalogue{
		display: flex;
		width: 73%;
		margin: 0 auto;
		height: 100%;
		align-items: center;
	}
	.catalogue span a{
		color: #4a4a4a;
	}
	.catalogue span{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #4a4a4a;
    }
    .catalogue span:after{
        content:'';
        display: block;
        margin: 0 5px;
        width:8px;
        height: 5px;
        background-image: url(../../assets/icon/more.png);
        background-size: contain;
        background-repeat:no-repeat;
        transform: rotateZ(-90deg);
    }
    .catalogue span:last-of-type:after{
        content:none;
    }
    .signUpContentAll{
        width: 73%;
        background-color: #fafafa;
		margin: 0 auto;
        padding: 21px 16px;
        margin-bottom: 46px;
    }
    .signUpTopTitle{
        display: flex;
        height: 50px;
        border-bottom: 2px solid #efefef;
    }
    .signUpTopTitle>div{
        height: 100%;
        line-height: 50px;
        color: #bbbbbb;
        border-bottom:2px solid #efefef;
    }
    .signUpTopTitle>div+div{
        margin-left: 49px;
    }
    .signUpTopTitle>.active{
        border-bottom-color:#9e0100;
        color: #000;
    }
    .signUpContentEnterprise>div{
        margin-top: 32px;
    }
    .signUpDivCss{
        width: 48%;
        min-width: 500px;
        display: flex;
    }
    .signUpDivCss span{
        display: block;
        word-break:keep-all;
        white-space:nowrap;
        line-height: 40px;
        margin-right: 8px;
    }
    .signUpDivCss>div{
        display: flex;
    }
    .signUpDivCss>div:not(:first-child)>span{
        margin-left: 8px;
    }
    .signUpDivCss>div:first-child>span,.signUpDivCss>span{
        min-width: 80px;
        text-align: right;
    }
    .signUpTeShuDivCss{
        display: flex;
    }
    .signUpContentRadio{
        padding-left: 80px;
    }
</style>
<style>
    .signUpDivCss .el-input__inner:focus,.signUpDivCss .el-textarea__inner:focus,.signUpDivCss .is-focus>input{
        border-color:#9e0100 !important;
        outline-color: #9e0100;
        width: 100%;
    }
    .signUpDivCss>.el-input{
        width: 400px;
    }
    .signUpDivCss>.el-select{
        width: 180px;
        margin-right: 4px;
    }
    .signUpDivCss .el-textarea__inner{
        resize: none;
        margin: 0;
        height: 80px;
    }
    .signUpContentSureSignUp{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px 0;
    }
    .signUpContentSureSignUp>button,.signUpContentSureSignUp>button:hover,.signUpContentSureSignUp>button:focus{
        background-color: #9e0100;
        outline-color: #9e0100;
        border-color: #9e0100;
    }
</style>