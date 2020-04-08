<template>
    <!-- 发布项目 -->
    <div class="publishing">
        <xfc></xfc>
        <div class="publishing_nav">
            <ul class="publishing_nav_title">
                <li v-for="(item,index) in publishing_title" :class="publishing_selectd==index?'publishing_selected':''" >
                    <font @click="changepPublishing(index)">{{item}}</font>
                </li>
            </ul>
            <router-link to="">
                <img src="../../../assets/imgs/publishing_help.png"/>
            </router-link>
        </div>
        <div class="publishing_content" v-show="publishing_selectd==0">
            <p>
                <span>公司名称</span>
                <input type="text" placeholder="需求公司名称" disabled>
            </p>
            <p>
                <span>项目类型</span>
                <select>
                    <option style="display:none;">请选择一级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
                <select>
                    <option style="display:none;">请选择二级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
            </p>
            <p>
                <span>主要需求</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>服务内容</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>预期效果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>输出成果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>指定商家</span>
                <input type="text" placeholder="指定商家名称">
            </p>
            <p>
                <span>费用预算</span>
                <input type="text"><i>元</i>
            </p>
            <p>
                <span>发布日期</span>
                <el-date-picker
                v-model="value1"
                type="date"
                :default-value="value1"
                :readonly="true">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
                </el-date-picker>
                <span>(从发布当日开始,最长90天)</span>
            </p>
            <p>
                <span>投标期限</span>
                <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value4"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions2">
                </el-date-picker>
                <span>(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
            </p>
            <p>
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
                type="button"
                @click="sendEm"
                :disabled="userDisable" 
                value="获取验证码"/>
            </p>
            <button>发布需求</button>
        </div>
        <div class="publishing_content" v-show="publishing_selectd==1">
            <p>
                <span>公司名称</span>
                <input type="text" placeholder="招投标" disabled>
            </p>
            <p>
                <span>项目类型</span>
                <select>
                    <option style="display:none;">请选择一级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
                <select>
                    <option style="display:none;">请选择二级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
            </p>
            <p>
                <span>主要需求</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>服务内容</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>预期效果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>输出成果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>指定商家</span>
                <input type="text" placeholder="指定商家名称">
            </p>
            <p>
                <span>费用预算</span>
                <input type="text"><i>元</i>
            </p>
            <p>
                <span>发布日期</span>
                <el-date-picker
                v-model="value1"
                type="date"
                :default-value="value1"
                :readonly="true">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
                </el-date-picker>
                <span>(从发布当日开始,最长90天)</span>
            </p>
            <p>
                <span>投标期限</span>
                <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value4"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions2">
                </el-date-picker>
                <span>(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
            </p>
            <p>
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
                type="button"
                @click="sendEm"
                :disabled="userDisable" 
                value="获取验证码"/>
            </p>
            <button>发布需求</button>
        </div>
        <div class="publishing_content" v-show="publishing_selectd==2">
            <p>
                <span>公司名称</span>
                <input type="text" placeholder="竞争性谈判" disabled>
            </p>
            <p>
                <span>项目类型</span>
                <select>
                    <option style="display:none;">请选择一级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
                <select>
                    <option style="display:none;">请选择二级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
            </p>
            <p>
                <span>主要需求</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>服务内容</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>预期效果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>输出成果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>指定商家</span>
                <input type="text" placeholder="指定商家名称">
            </p>
            <p>
                <span>费用预算</span>
                <input type="text"><i>元</i>
            </p>
            <p>
                <span>发布日期</span>
                <el-date-picker
                v-model="value1"
                type="date"
                :default-value="value1"
                :readonly="true">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
                </el-date-picker>
                <span>(从发布当日开始,最长90天)</span>
            </p>
            <p>
                <span>投标期限</span>
                <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value4"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions2">
                </el-date-picker>
                <span>(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
            </p>
            <p>
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
                type="button"
                @click="sendEm"
                :disabled="userDisable" 
                value="获取验证码"/>
            </p>
            <button>发布需求</button>
        </div>
        <div class="publishing_content" v-show="publishing_selectd==3">
            <p>
                <span>公司名称</span>
                <input type="text" placeholder="委托代理" disabled>
            </p>
            <p>
                <span>项目类型</span>
                <select>
                    <option style="display:none;">请选择一级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
                <select>
                    <option style="display:none;">请选择二级项目类型</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                    <option>管理咨询</option>
                </select>
            </p>
            <p>
                <span>主要需求</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>服务内容</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>预期效果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
                <span>输出成果</span>
                <textarea cols="30" rows="10" placeholder="详细的描述"></textarea>
            </p>
            <p>
                <span>指定商家</span>
                <input type="text" placeholder="指定商家名称">
            </p>
            <p>
                <span>费用预算</span>
                <input type="text"><i>元</i>
            </p>
            <p>
                <span>发布日期</span>
                <el-date-picker
                v-model="value1"
                type="date"
                :default-value="value1"
                :readonly="true">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
                </el-date-picker>
                <span>(从发布当日开始,最长90天)</span>
            </p>
            <p>
                <span>投标期限</span>
                <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <i>至</i>
                <el-date-picker
                v-model="value4"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions2">
                </el-date-picker>
                <span>(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
            </p>
            <p>
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
                type="button"
                @click="sendEm"
                :disabled="userDisable" 
                value="获取验证码"/>
            </p>
            <button>发布需求</button>
        </div>
    </div>    
</template>
<script>
import moment from 'moment'
import xfc from '@/components/public/悬浮窗.vue'
export default {
    data(){
        return {
            publishing_title:["单一来源","招投标","竞争性谈判","委托代理"],
            publishing_selectd:0,
            value1:moment(new Date(),"YYYY-MM-DD HH:mm:ss").valueOf(),
            value2:"",
            value3:"",
            value4:"",
            pickerOptions:{
                disabledDate: (time) => {
                    if (this.value1 != ""&&this.value2 != "") {
                        var newTime1= moment(value1,"YYYY-MM-DD HH:mm:ss").valueOf();
                        var newTime2= moment(value2,"YYYY-MM-DD HH:mm:ss").valueOf();
                        if(newTime1-newTime2>7776000){
                            console.log("选择时间超过90天")
                        }
                    }
                },
            },
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            pickerOptions2:{
                disabledDate: (time) => {
                    if (this.value3 != ""&&this.value4 != "") {
                        var newTime1= moment(value3,"YYYY-MM-DD HH:mm:ss").valueOf();
                        var newTime2= moment(value4,"YYYY-MM-DD HH:mm:ss").valueOf();
                        if(newTime1-newTime2>1296000){
                            console.log("选择时间超过15天")
                        }
                    }
                },
            },
            userEmail:"",
            userEmailYZX:"",
            userDisable:"",
            
        }
    },
    methods: {
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
        }
    },
    created() {
       
    },
    components:{
        xfc,
    }
}
</script>
<style scoped>
    .publishing{
        width: 1400px;
        height: auto;
        background-color:#f6f6f6;
        margin: 0 auto;
        border: none;
        padding-bottom: 32px;
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
    .publishing_content>p>span{
        margin-right: 16px;
        font-size: 18px;
        line-height: 38px;
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
    }
    .publishing_content>p>select{
        width: 180px;
        height: 38px;
        padding-left: 8px;
        margin-right: 16px;
        border: 0;
        outline: none;
    }
    .publishing_content>p>textarea{
        margin: 0;
        width: 540px;
        height: 80px;
        padding: 8px;
        box-sizing: border-box;
    }
    .publishing_content>p:nth-child(3)>span{
        margin: 16px 16px 0 0;
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
        margin: 48px 0 32px 18%;
        background: #9e0100;
        color: #fff;
        font-size: 18px;
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