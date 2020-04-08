<template>
    <div class="toast-toast" v-show="$store.getters.getToast6Flag1">
        <div class="aqsz" v-show="$store.getters.getToast6Flag5">
            <div class="topAqsz">
                <span>
                    <span></span>安全设置
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="aqszTwo">
                <div @click="show5">
                    <img src="../../assets/tc/xgdlmm.png" alt="">
                    <p>修改登录密码</p>
                </div>
                <div @click="show6">
                    <img src="../../assets/tc/xgaqmm.png" alt="">
                    <p>修改安全密码</p>
                </div>
                <div @click="show7">
                    <img src="../../assets/tc/xgaqwt.png" alt="">
                    <p>修改安全问题</p>
                </div>
            </div>
            <div class="aqszThree">
                <span>安全设置完成度：</span>
                <div></div>
                <div></div>
                <span>60.0%</span>
            </div>
            <p>
                你的安全设置完成度<span class="spanRed">一般</span>，请立即到“
                <span class="spanRed xhx">注册信息完善</span>
                ”中上传“工商营业执照、组织机构代码、纳税登记证、法人身份证”，提交平台审核，成为
                <span class="spanRed">认证会员</span>
            </p>
        </div>
        <div class="xgdlmm" v-show="$store.getters.getToast6Flag6">
            <div class="topAqsz">
                <span>
                    <span></span>安全设置-修改登录密码
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom">
                <p>
                    <span>原登录密码：</span>
                    <el-input type="password" v-model="loginPasswordValue" @blur="testingLoginPassword" placeholder="请输入原登录密码"></el-input>
                    <span>
                        <img :src="imgOkNo[loginPasswordValueBool]" alt="">
                        <span class="ts" :class="loginPasswordValueBool==1?'loginPasswordValueBoolClass':'loginPasswordValueBoolClas'">原始密码错误</span>
                    </span>
                </p>
                <p>
                    <span>现登录密码：</span>
                    <el-input type="password" v-model="newLoginPasswordValue" v-on:input="testingnewLoginPasswordValue" @focus="clearNewTwoLoginPasswordValue" placeholder="请输入现登录密码"></el-input>
                    <span>
                        <img :src="imgOkNo[newLoginPasswordValueBool]" alt="">
                        <span class="ts" :class="newLoginPasswordValueBool==1?'loginPasswordValueBoolClass':'loginPasswordValueBoolClas'">现登录密码与原密码相同</span>
                    </span>
                </p>
                <p>
                    <span>登录密码确认：</span>
                    <el-input type="password" v-model="newTwoLoginPasswordValue" v-on:input="testingnewTwoLoginPasswordValue" :disabled="disableUpdatePasswordBool2==-1" placeholder="请输入原登录密码"></el-input>
                    <span>
                        <img :src="imgOkNo[newTwoLoginPasswordValueBool]" alt="">
                        <span class="ts" :class="newTwoLoginPasswordValueBool==1?'loginPasswordValueBoolClass':'loginPasswordValueBoolClas'" >输入不一致,请重新输入</span>
                    </span>
                </p>
                <button class="TJ qrxg" @click="confirmUpdate">确认修改</button>
            </div>
        </div>
        <div class="xgdlmm" v-show="$store.getters.getToast6Flag7">
            <div class="topAqsz">
                <span>
                    <span></span>安全设置-修改安全密码
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom">
                <p>
                    <span>原安全密码：</span>
                    <input type="password" class="sr">
                    <span>
                        <img src="../../assets/tc/ok.png" alt="">
                        <span class="ts">输入不一致,请重新输入</span>
                    </span>
                </p>
                <p>
                    <span>现安全密码：</span>
                    <input type="password" class="sr">
                    <span>
                        <img src="../../assets/tc/ok.png" alt="">
                        <span class="ts">输入不一致,请重新输入</span>
                    </span>
                </p>
                <p>
                    <span>安全密码确认:</span>
                    <input type="password" class="sr" style="margin-left:42px;">
                    <span>
                        <img src="../../assets/tc/no.png" alt="">
                        <span class="ts">输入不一致,请重新输入</span>
                    </span>
                </p>
                <button class="TJ qrxg" @click="show8()" >确认修改</button>
            </div>
        </div>
        <div class="xgdlmm" v-show="$store.getters.getToast6Flag8">
            <div class="topAqsz">
                <span>
                    <span></span>安全设置-修改安全问题
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom plzj">
                <p>
                    <span>问题一：</span>
                    <select class="sr" @change="selectOption(1,$event)">
                        <option selected>你爸爸叫什么？</option>
                        <option>你妈妈叫什么？</option>
                        <option>你儿子叫什么？</option>
                        <option>你爱人叫什么？</option>
                    </select>
                </p>
                <p>
                    <span>答案一：</span>
                    <el-input v-model="answerOne" placeholder="请输入答案"></el-input>
                </p>
                <p>
                    <span>问题二：</span>
                    <select class="sr" @change="selectOption(2,$event)">
                        <option selected>你爷爷叫什么？</option>
                        <option>你奶奶叫什么？</option>
                        <option>你孙子叫什么？</option>
                        <option>你表姐叫什么？</option>
                    </select>
                </p>
                <p>
                    <span>答案二：</span>
                    <el-input v-model="answerTwo" placeholder="请输入答案"></el-input>
                </p>
                <button class="TJ qrxg" @click="confirmUpdate2" >确认修改</button>
            </div>
        </div>
        <div class="xgdlmm" v-show="$store.getters.getToast6Flag9">
            <div class="topAqsz">
                <span>
                    <span></span>安全保障-修改登陆密码
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="mt">
                <img src="../../assets/tc/xgcs.png" alt="">
            </div>
            <p>很遗憾，您已超过当日修改次数，请明天修改!</p>
            <button class="TJ" @click="closeToast()" >完成</button>
        </div>
        <div class="xgyx" v-show="$store.getters.getToast6Flag10">
            <div class="topAqsz">
                <span>
                    <span></span>邮箱修改
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom xgyxBottom">
                <p>
                    <span>原邮箱：</span> <span>tdh123@gmail.com</span>
                </p>
                <p>
                    <span>新邮箱：</span>
                    <input type="text" class="sr">
                </p>
                <p>
                    <span>验证码：</span>
                    <input type="text" class="sr inputW">
                    <button>获取验证码</button>
                </p>
                <span>
                    请在原始邮箱获取验证码，并填写
                </span>
                <button class="TJ qrxg" @click="closeToast()">确认修改</button>
            </div>
        </div>
        <div class="xgsj" v-show="$store.getters.getToast6Flag11">
            <div class="topAqsz">
                <span>
                    <span></span>认证手机号修改
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom xgsjBottom">
                <p>
                    <span>原认证手机号：</span> <span>183*****145</span>
                </p>
                <p>
                    <span>新认证手机号：</span>
                    <input type="text" class="sr">
                </p>
                <p>
                    <span>验证码：</span>
                    <input type="text" class="sr inputW">
                    <button>获取验证码</button>
                </p>
                <button class="TJ qrxg" @click="closeToast()">确认修改</button>
            </div>
        </div>
        <div class="xgyhkgr" v-show="$store.getters.getToast6Flag12">
            <div class="topAqsz">
                <span>
                    <span></span>绑定银行卡修改-个人会员
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom xgsjBottom">
                <p>
                    <span>姓名：</span>
                    <input type="text" class="sr">
                </p>
                <p>
                    <span>手机号：</span>
                    <input type="text" class="sr">
                </p>
                 <p>
                    <span>原绑定卡号：</span>
                    <span>6227********256</span>
                </p>
                 <p>
                    <span>新绑定卡号：</span>
                    <input type="text" class="sr">
                </p>
                <p>
                    <span>验证码：</span>
                    <input type="text" class="sr inputW">
                    <button>获取验证码</button>
                </p>
                <button class="TJ qrxg" @click="closeToast()">确认修改</button>
            </div>
        </div>
        <div class="xgyhkgr" v-show="$store.getters.getToast6Flag13">
            <div class="topAqsz">
                <span>
                    <span></span>绑定银行卡修改-企业会员
                </span>
                <div>
                    <img src="../../assets/tc/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="xgBottom xgsjBottom">
                <p>
                    <span>姓名：</span>
                    <input type="text" class="sr" placeholder="供应商公司名称">
                </p>
                <p>
                    <span>手机号：</span>
                    <input type="text" class="sr">
                </p>
                 <p>
                    <span>原绑定银行：</span>
                    <span>中国工商银行</span>
                </p>
                <p>
                    <span>原绑定卡号：</span>
                    <span>6227********256</span>
                </p>
                <p>
                    <span>新绑定银行：</span>
                    <input type="text" class="sr" placeholder="中国工商银行">
                </p>
                <p>
                    <span>新绑定卡号：</span>
                    <input type="text" class="sr" placeholder="6227********256">
                    <span class=" lv">
                        <img src="../../assets/tc/yzok.png" alt="">
                        <span class="ts">卡号确认无误</span>
                    </span>
                </p>
                <p>
                    <span>验证码：</span>
                    <input type="text" class="sr inputW">
                    <button>获取验证码</button>
                </p>
                <button class="TJ qrxg" @click="closeToast()">确认修改</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import { 
    checkPasswordRight,
    updateLoginPassword,
    updateSafeQA 
} from "@/components/api/api";
export default {
    data() {
        return {
            docType: "paragon",
            loginPasswordValue:"",
            // 验证后显示消息
            loginPasswordValueBool:-1,
            newLoginPasswordValue:"",
            // 验证后显示消息
            newLoginPasswordValueBool:-1,
            newTwoLoginPasswordValue:"",
            // 验证后显示消息
            newTwoLoginPasswordValueBool:-1,
            // 校验确认修改密码按钮是否可点
            disableUpdatePasswordBool:-1,
            disableUpdatePasswordBool1:-1,
            disableUpdatePasswordBool2:-1,
            disableUpdatePasswordBool3:-1,
            imgOkNo:[
                require('../../assets/tc/ok.png'),
                require('../../assets/tc/no.png'),
            ],
            problemOne:"",
            problemTow:"",
            answerOne:"",
            answerTwo:"",
        }
    },
    methods: {
        closeToast(){
            this.$store.commit("changeSixToastFalse");
            this.loginPasswordValue="";
            this.newLoginPasswordValue="";
            this.newTwoLoginPasswordValue="";
            this.problemOne="";
            this.problemTow="";
            this.answerOne="";
            this.answerTwo="";
            this.loginPasswordValueBool=-1;
            this.newLoginPasswordValueBool=-1;
            this.newTwoLoginPasswordValueBool=-1;
        },
        openTips(){
          this.$message({
          message: '修改成功',
          type: 'success'
        });
        },
        show5(){
            this.$store.commit("changeSixToast5")
        },
        show6(){
            this.$store.commit("changeSixToast6")
        },
        show7(){
            this.$store.commit("changeSixToast7")
        },
        show8(){
            this.$store.commit("changeSixToast8")
        },
        testingLoginPassword(){
            // 离开输入框校验密码是否正确
            checkPasswordRight({"password":this.loginPasswordValue}).then(res => {
                if (res.data.code === 200) {
                    this.loginPasswordValueBool=0;
                    this.disableUpdatePasswordBool1=1;
                }else{
                    this.loginPasswordValueBool=1;
                    this.disableUpdatePasswordBool1=-1;
                }
            })
        },
        testingnewLoginPasswordValue(){
            if(this.newLoginPasswordValue===this.loginPasswordValue){
                this.newLoginPasswordValueBool=1;
                this.disableUpdatePasswordBool2=-1;
              }else{
                this.newLoginPasswordValueBool=0;
                this.disableUpdatePasswordBool2=1;
            }
        },
        clearNewTwoLoginPasswordValue(){
            this.newTwoLoginPasswordValue=""
        },
        testingnewTwoLoginPasswordValue(){
            if(this.newTwoLoginPasswordValue&&this.newLoginPasswordValue===this.newTwoLoginPasswordValue){
                this.newTwoLoginPasswordValueBool=0
                this.disableUpdatePasswordBool3=1;
            }else{
                this.newTwoLoginPasswordValueBool=1
                this.disableUpdatePasswordBool3=-1;
            }
        },
        // 确认修改
        confirmUpdate(){
            let userSafeInfoParam={
                "password": this.newTwoLoginPasswordValue,
            }
            if(this.disableUpdatePasswordBool1=='1'&&this.disableUpdatePasswordBool2=="1"&&this.disableUpdatePasswordBool3=="1"){
                let that=this;
                updateLoginPassword(userSafeInfoParam).then(res => {
                    if (res.data.code === 200) {
                        this.$notify({
                            title: '修改密码',
                            type: "success",
                            message: '修改密码成功！即将退出重新登录！',
                            position: 'top-left'
                        });
                        this.$store.commit("changeSixToastFalse");
                        setTimeout(function(){ 
                            sessionStorage.clear();
                            that.$router.push('/login')
                        }, 500);
                    }
                })
            }else{
                console.log("修改失败")
            }
            
        },
        selectOption(index,e){
            if(index==1){
                this.problemOne=e.target.value
            }else{
                this.problemOne=e.target.value
            }
        },
        // 确认修改2
        confirmUpdate2(){
            let userSafeInfoParam={
                "problemOne": this.problemOne,
                "problemTow": this.problemTow,
                "answerOne": this.answerOne,
                "answerTow": this.answerTow,
            }
            updateSafeQA(userSafeInfoParam).then(res => {
                if (res.data.code === 200) {
                    let that=this;
                    this.$notify({
                        title: '修改安全问题',
                        type: "success",
                        message: '修改安全问题成功！',
                        position: 'top-left'
                    });
                    this.$store.commit("changeSixToastFalse");
                    setTimeout(function(){ 
                        sessionStorage.clear();
                        that.$router.push('/login')
                    }, 500);
                }else{
                    this.$notify({
                        title: '修改安全问题',
                        type: "error",
                        message: '修改安全问题失败！请稍后或重新登录后重试！',
                        position: 'top-left'
                    });
                }
            })
        }
    },
}
</script>
<style scoped>
    .loginPasswordValueBoolClas{
        opacity: 0;
        margin: 8px;
    }
    .loginPasswordValueBoolClass{
        opacity: 1;
        margin: 8px;
    }
    .toast-toast{
        width: 100%;
        height: 100%;
        background-color: rgba(00,00,00,0.7);
        box-sizing: border-box;
        padding-top: 10%;
    }
    .toast-toast input{
        padding-left: 8px;
    }
    .content_toast,.jyjl,.aqsz,.xgdlmm,.xgyx,.xgsj,.xgyhkgr,.kfjl,.ksjl,.czjlgys,.czjlqyhy,.kkjl,.bjjl,.jfjl,.pfjl{
        width: 720px;
        height: 550px;
        margin: 0 auto;
        background-color: #fff;
    }
    .xgdlmm,.xgyx{
        height: 370px;
    }
    .xgyhkgr{
        height: 440px;
    }
    .xgsj{
        height: 350px;
    }
    .topAqsz{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f6f6f6;
        display: flex;
        justify-content: space-between;
    }
    .topAqsz>span{
        margin-left: 16px;
        line-height: 20px;
        line-height: 40px;
    }
    .topAqsz>div{
        padding-top: 4px;
        padding-right: 16px;
        cursor: pointer;
    }
    .topAqsz>span>span{
        display: inline-block;
        width: 4px;
        height: 15px;
        line-height: 40px;
        background-color: #9e0100;
        position: relative;
        top: 2px;
        margin-right: 8px;
    }
    .bottom{
        margin-top: 32px;
        position: relative;
        padding-left: 18px;
    }
    .pl200{
        padding-left: 250px;
    }
    .bottom>p+p{
        margin-top: 40px;
    }
    .pl200>p+p{
        margin-top: 30px;
    }
    .bottom>p>span:first-child{
        margin-right: 18px;
        color: #555555;
    }
    .pl200>p>span:first-child{
        color: #000;
    }
    .bottom .rq{
        height: 34px;
        display: flex;
    }
    .bottom .rq>span{
        line-height: 34px;
    }
    .bottom .rq>span:not(:first-child){
        padding: 0 8px 0 8px;
        cursor: pointer;
        border: 1px solid #eeeeee;
    }
    .bottom .rq>span:not(:first-child)>img{
        position: relative;
        top: 3px;
        margin-right: 4px;
    }
    .bottom .rq>span:not(:first-child)+span{
        margin-left: 8px;
    }
    .pl200 .rq>span:first-child{
        margin-right: 16px;
    }
    .pl200 .rq+p>span{
        margin-right: 32px;
    }
    .bottom>p>span+input{
        width: 158px;
        height: 30px;
        padding-left: 4px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
    }
    .bottom>p:nth-child(5)>span{
        margin-right: 32px;
    }
    .bottom>p>span+input+button{
        width: 84px;
        height: 30px;
        border: 0px;
        background-color: #Fff;
        color: #9e0000;
        cursor: pointer;
    }
    .TJ{
        width: 410px;
        height: 42px;
        border-radius: 21px;
        border: 0px;
        display: block;
        margin: 0 auto;
        margin-top: 30px;
        color: #fff;
        background-color: #9e0100;
    }
    .tx{
        margin: 0;
        margin-top: 30px;
        position: relative;
        left: -90px;
    }
    .qian{
        color: #9e0100;
        font-weight: bold;
    }
    .yuan{
        color: #000;
    }
    .two{
        width: 100%;
        height: 78px;
        line-height: 78px;
        padding-left: 16px;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        border: 1px solid #000;
        padding-top: 24px;
    }
    .two>select{
        width: 96px;
        height: 26px;
        border: 1px solid #eeeeee;
        margin-left: 16px;
        outline: none;
    }
    .two>button{
        width: 64px;
        height: 26px;
        color: #fff;
        background-color: #9e0100;
        border: 0;
        margin-left: 16px;
        cursor: pointer;
    }
    .two>button>img{
        margin-right: 4px;
        position: relative;
        top: 2px;
    }
    .three{
        width: 100%;
        height: 300px;
        display: block;
        overflow: hidden;
        padding-left: 16px;
        box-sizing: border-box;
    }
    .three>table>tr{
        height: 46px;
        line-height: 46px;
    }
    .three>table>tr:first-child{
        height: 40px;
    }
    .three>table>tr>td{
        width: 140px;
        text-align: center;
    }
    .three>table>tr>td:nth-child(2){
        width: 200px;
    }
    .three>table>tr>td:first-child{
        width: 50px;
    }
    .active{
        background-color:#fafafa;
    }
    .three>table{
        height: 300px;
        margin-bottom: 16px;
    }
    .four{
        width:100%;
        height: 26px;
        display: flex;
        flex-direction: row-reverse;
        padding-right: 16px;
        box-sizing: border-box;
        margin-top: 32px;;
    }
    .four>button{
        width: 64px;
        height: 26px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
        background-color: #fff;
        color: #666666;
        cursor: pointer;
    }
    .four>button+button{
        border-right: 0px;
    }
    .four>span{
        margin-left: 16px;
    }
    .aqsz .aqszTwo{
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding-top: 48px;
        padding-bottom: 48px;
    }
    .aqsz .aqszTwo>div{
        width: 160px;
        height: 160px;
        box-sizing: border-box;
        border: 4px solid #9e0000;
        border-radius: 8px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }
    .aqsz .aqszTwo>div:hover{
        opacity: 1;
    }
    .aqsz .aqszTwo>div>p{
        margin-top: 5px;
        font-size: 16px;
        color: #9e0100;
        font-weight: bold;
    }
    .aqsz .aqszThree{
        height: 38px;
        padding-left: 62px;
        display: flex;
        line-height: 16px;
        position: relative;
        margin-bottom: 36px;
    }
    .aqsz .aqszThree>div:nth-child(2){
        width: 300px;
        height: 10px;
        margin-top: 12px;
        border-radius: 5px;
        background-color: #efefef;
        margin-left: 28px;
        margin-right: 20px;
    }
    .aqsz .aqszThree>div:nth-child(3){
        width: 180px;
        height: 10px;
        border-radius: 5px;
        background: linear-gradient(to right,#a20c0c,#f1e7ae);
        position: absolute;
        top: 12px;
        left: 218px
    }
    .aqsz .aqszThree>span:first-child{
        line-height: 38px;
    }
    .aqsz .aqszThree>span:last-child{
        font-size: 38px;
        color: #9e0100;
        line-height: 38px;
    }
    .aqsz .aqszThree+p{
        padding-left: 62px;
        padding-right: 62px;
    }
    .spanRed{
        color: #9e0000;
    }
    /* .xhx{
        text-decoration: underline;
    } */
    .xgBottom{
        width: 70%;
        min-width: 500px;
        margin: 0 auto;
    }
    .sr{
        box-sizing: border-box;
        border: 1px solid #eeeeee;
    }
    .xgBottom>p{
        display: flex;
        margin-top: 32px;
        justify-content:flex-start;
        align-items: center;
    }
    .xgBottom>p>span:first-child{
        display: inline-block;
        width: 120px;
        text-align: center;
    }
    .xgBottom>p>span:last-child{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .xgBottom>p>span:last-child>img{
        flex-shrink: 0;
        margin-left: 8px;
    }
    .qrxg{
        cursor: pointer;
    }
    .ts{
        font-size: 12px;
        color: #aaaaaa;
        margin-left: 8px;
    }
    .xgBottom select{
        outline: none;
        color: #bbbbbb;
        width: 202px;
        height: 40px;
        padding-left: 12px;
    }
    .plzj>p{
        margin-top: 16px !important;
    }
    .mt{
        width: 182px;
        height: 139px;
        margin: 0 auto;
        margin-top: 26px;
        margin-bottom: 16px;
    }
    .mt+p{
        font-size: 23px;
        color: #9e0100;
        text-align: center;
    }
    .xgyxBottom{
        box-sizing: border-box;
        padding-left: 210px;
    }
    .xgyxBottom>p>span+span{
        margin-left: 46px;
    }
    .xgyxBottom .inputW{
        width: 80px;
        height: 26px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
    }
    .xgyxBottom .inputW+button{
        border:0;
        background-color: #fff;
        font-size: 14px;
        color: #9e0000;
        cursor: pointer;
    }
    .xgyxBottom>span:nth-child(4){
        position: relative;
        top: 9px;
        left: 107px;
        font-size: 14px;
        color: #cccccc;
    }
    .xgsjBottom{
        box-sizing: border-box;
    }
    .xgsjBottom>p>span+span{
        margin-left: 46px;
    }
    .xgsjBottom .inputW{
        width: 80px;
        height: 26px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
        margin-left: 94px;
    }
    .xgsjBottom .inputW+button{
        border:0;
        background-color: #fff;
        font-size: 14px;
        color: #9e0000;
        cursor: pointer;
    }
    .xgsjBottom>span:nth-child(4){
        position: relative;
        top: 9px;
        left: 107px;
        font-size: 14px;
        color: #cccccc;
    }
    .xgyhkgr>.xgBottom{
        box-sizing: border-box;
    }
    .xgyhkgr>.xgsjBottom>p>span+span{
        margin-left: 18px;
    }
    .xgyhkgr>.xgsjBottom .inputW{
        width: 80px;
        height: 26px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
        margin-left: 48px;
    }
    .xgyhkgr>.xgsjBottom .inputW+button{
        border:0;
        background-color: #fff;
        font-size: 14px;
        color: #9e0000;
        cursor: pointer;
    }
    .xgyhkgr>.xgsjBottom>p:first-child>input{
        margin-left: 62px;
    }
    .xgyhkgr>.xgsjBottom>p:nth-child(4)>input{
        margin-left: 16px;
    }
    .lv>span{
        color:#42bd56;
    }
    .lv>img{
        position: relative;
        top: 2px;
    }
    .xgyhkgr>.xgsjBottom>p:nth-child(5)>input,.xgyhkgr>.xgsjBottom>p:nth-child(6)>input{
        margin-left: 16px;
    }
    /*扣分记录*/
    .kfjl{
        width: 1024px;
        height: 500px;
    }
    .threeKfjl>table{
        width: 1024px;
        height: 268px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threeKfjl>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threeKfjl>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threeKfjl>table>tr>td:first-child>div{
        width: 32px;
    }
    .threeKfjl>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threeKfjl>table>tr>td:nth-child(3)>div{
        width: 90px;
    }
    .threeKfjl>table>tr>td:nth-child(4)>div{
        width: 116px;
    }
    .threeKfjl>table>tr>td:nth-child(5)>div{
        width: 145px;
    }
    .threeKfjl>table>tr>td:nth-child(6)>div{
        width: 284px;
    }
    .threeKfjl>table>tr>td:nth-child(7)>div{
        width: 67px;
    }
    /*考试记录*/
    .ksjl{
        width: 720px;
        height: 425px;
        overflow: hidden;
    }
    .threeKsjl{
        padding-left: 16px;
    }
    .threeKsjl>table{
        width: 720px;
        height: 224px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threeKsjl>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threeKsjl>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threeKsjl>table>tr>td:first-child>div{
        width: 32px;
    }
    .threeKsjl>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threeKsjl>table>tr>td:nth-child(3)>div{
        width: 90px;
    }
    .threeKsjl>table>tr>td:nth-child(4)>div{
        width: 116px;
    }
    /*成长记录-供应商*/
    .czjlgys{
        width: 960px;
        height: 425px;
        overflow: hidden;
    }
    .threeCzjlgys>table{
        width: 960px;
        height: 224px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threeCzjlgys>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threeCzjlgys>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threeCzjlgys>table>tr>td:first-child>div{
        width: 32px;
    }
    .threeCzjlgys>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threeCzjlgys>table>tr:not(:first-child)>td:nth-child(2)>div{
        position: relative;
        left: -10px;
    }
    .threeCzjlgys>table>tr>td:nth-child(3)>div{
        width: 106px;
    }
    .threeCzjlgys>table>tr:not(:first-child)>td:nth-child(3)>div{
        position: relative;
        left: -24px;
    }
    .threeCzjlgys>table>tr>td:nth-child(4)>div{
        width: 116px;
    }
    .threeCzjlgys>table>tr:not(:first-child)>td:nth-child(4)>div{
        width: 180px;
        position: relative;
        left: -62px;
    }
    .threeCzjlgys>table>tr:not(:first-child)>td:nth-child(5)>div{
        position: relative;
        left: -104px;
    }
    .threeCzjlgys>table>tr:not(:first-child)>td:nth-child(6)>div{
        position: relative;
        left: -54px;
    }
    .threeCzjlgys+div{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .ColorRed{
        color: #9e0000;
        font-weight: bold;
    }
    .threeCzjlgys+div+.four{
        margin-top: 16px;
    }
    /*成长记录-企业会员*/
    .czjlqyhy{
        width: 960px;
        height: 450px;
        overflow: hidden;
    }
    .threeCzjlqyhy>table{
        width: 960px;
        height: 224px;
        box-sizing: border-box;
        overflow: hidden;
        display: block;
        display: flex;
        flex-direction: column;
    }
    .threeCzjlqyhy>table>tr{
        height: 36px;
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threeCzjlqyhy>table>tr>td>div{
        height: 48px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threeCzjlqyhy>table>tr>td:first-child>div{
        width: 32px;
    }
    .threeCzjlqyhy>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threeCzjlqyhy>table>tr:not(:first-child)>td:nth-child(2)>div{
        position: relative;
        left: 0px;
    }
    .threeCzjlqyhy>table>tr>td:nth-child(3)>div{
        width: 106px;
    }
    .threeCzjlqyhy>table>tr:not(:first-child)>td:nth-child(3)>div{
        position: relative;
        left: -24px;
    }
    .threeCzjlqyhy>table>tr>td:nth-child(4)>div{
        width: 116px;
    }
    .threeCzjlqyhy>table>tr:not(:first-child)>td:nth-child(4)>div{
        width: 180px;
        position: relative;
        left: -62px;
    }
    .threeCzjlqyhy>table>tr:not(:first-child)>td:nth-child(5)>div{
        position: relative;
        left: -104px;
    }
    .threeCzjlqyhy>table>tr:not(:first-child)>td:nth-child(6)>div{
        position: relative;
        left: -54px;
    }
    .threeCzjlqyhy+div{
        display: flex;
        margin-top: 8px;
        padding-bottom: 15px;
        border-bottom: 1px solid #f6f6f6;
        justify-content: space-between;
    }
    .ColorRed{
        color: #9e0000;
        font-weight: bold;
    }
    .threeCzjlqyhy+div+.four{
        margin-top: 16px;
    }
    /*扣款记录*/
    .kkjl{
        width: 1024px;
        height: 500px;
    }
    .threeKkjl>table{
        width: 1024px;
        height: 268px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threeKkjl>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threeKkjl>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threeKkjl>table>tr>td:first-child>div{
        width: 32px;
    }
    .threeKkjl>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threeKkjl>table>tr>td:nth-child(3)>div{
        width: 90px;
    }
    .threeKkjl>table>tr>td:nth-child(4)>div{
        width: 116px;
    }
    .threeKkjl>table>tr>td:nth-child(5)>div{
        width: 145px;
    }
    .threeKkjl>table>tr>td:nth-child(6)>div{
        width: 284px;
    }
    .threeKkjl>table>tr>td:nth-child(7)>div{
        width: 67px;
    }
    /*补缴记录*/
    .bjjl{
        width: 1024px;
        height: 500px;
    }
    .threebjjl>table{
        width: 1024px;
        height: 268px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threebjjl>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threebjjl>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threebjjl>table>tr>td:first-child>div{
        width: 32px;
    }
    .threebjjl>table>tr>td:nth-child(2)>div{
        width: 520px;
    }
    .threebjjl>table>tr>td:nth-child(3)>div{
        width: 90px;
    }
    .threebjjl>table>tr>td:nth-child(4)>div{
        width: 116px;
    }
    /*缴费记录*/
    .jfjl{
        width: 1024px;
        height: 500px;
    }
    .threejfjl>table{
        width: 1024px;
        height: 268px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threejfjl>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threejfjl>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threejfjl>table>tr>td:first-child>div{
        width: 32px;
    }
    .threejfjl>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threejfjl>table>tr>td:nth-child(3)>div{
        width: 120px;
    }
    .threejfjl>table>tr>td:nth-child(4)>div{
        width: 170px;
    }
    .threejfjl>table>tr>td:nth-child(5)>div{
        width: 86px;
    }
    .threejfjl>table>tr>td:nth-child(6)>div{
        width: 86px;
    }
    .threejfjl>table>tr>td:nth-child(7)>div{
        width: 90px;
    }
    .threejfjl>table>tr>td:nth-child(8)>div{
        width: 67px;
    }
    /*赔付记录*/
    .pfjl{
        width: 1024px;
        height: 500px;
    }
    .threepfjl>table{
        width: 1024px;
        height: 268px;
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .threepfjl>table>tr{
        display: flex;
        margin-top: 8px;
        justify-content: space-between;
    }
    .threepfjl>table>tr>td>div{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
        box-sizing: border-box;
    }
    .threepfjl>table>tr>td:first-child>div{
        width: 32px;
    }
    .threepfjl>table>tr>td:nth-child(2)>div{
        width: 86px;
    }
    .threepfjl>table>tr>td:nth-child(3)>div{
        width: 120px;
    }
    .threepfjl>table>tr>td:nth-child(4)>div{
        width: 170px;
    }
    .threepfjl>table>tr>td:nth-child(5)>div{
        width: 86px;
    }
    .threepfjl>table>tr>td:nth-child(6)>div{
        width: 86px;
    }
    .threepfjl>table>tr>td:nth-child(7)>div{
        width: 90px;
    }
    .threepfjl>table>tr>td:nth-child(8)>div{
        width: 67px;
    }
    
    @media screen and (max-width: 415px) {
        .aqsz,.xgdlmm{
            width: 94%;
        }
        .aqszTwo{
            padding: 0 8px;
            box-sizing: border-box;
        }
        .aqszTwo>div{
            width: 30% !important;
            height: auto !important;
            padding: 4px !important;
        }
        .aqszTwo>div>img{
            width: 94px;
            height: 94px;
        }
        .aqszTwo>div>p{
            font-size: 14px !important;
            text-align: center;
        }
        .aqszThree{
            padding: 0 0 0 16px !important;
        }
        .aqszThree>div:nth-child(2){
            width: 38% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
        .aqszThree>div:nth-child(3){
            display: none;
        }
        .aqszThree>span:nth-child(4){
            font-size: 26px !important;
            margin-left: 2%;
        }
        .aqsz>p:nth-child(4){
            padding: 16px;
        }
        .xgdlmm{
            margin-top: 25%;
        }
        .xgBottom{
            padding: 16px 16px 0 16px !important;
            box-sizing: border-box;
        }
        .xgBottom>p{
            display: flex;
            flex-wrap: wrap;
        }
        .TJ{
            width: 50%;
            margin: 16px auto;
        }
        .xgdlmm>.mt+p{
            font-size: 17px;
        }
        .xgdlmm>.mt+p+.TJ{
            width: 50%;
        }
        .xgyx,.xgsj,.xgyhkgr{
            width: 100%;
            margin-top: 30%;
        }
        .inputW{
            margin-left: 45px !important;
        }
    }
</style>
<style>
    .xgBottom .el-input{
        width: auto;
    }
</style>
