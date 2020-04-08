<template>
    <bg>
        <template v-slot:topTab>
            <span @click="tabChange(0)">邮箱注册</span>
            <span @click="tabChange(1)">手机注册</span>
            <i id="after" :style="tabSelect==1?'left:310px':'left:0px'"></i>
        </template>
        <transition mode="out-in">
            <div v-if="tabSelect==0" key="a1">
                <p>邮箱</p>
                <input type="text" class="srk" id="email" placeholder="请输入邮箱"><br/>
                <p>验证码</p>
                <div class="dtm">
                    <input type="number" class="srk" id="email_yzm" placeholder="请输入邮箱验证码" style="width: 300px">
                    <input type="button" class="hqdtm" id="yxdtm" value="获取动态码">
                </div>
                <p>密码</p>
                <input type="password" class="srk" id="email_pwd" placeholder="请输入密码（6-16位字母/数字/符号）"><br/>
                <label><input type="checkbox" id="agreement" name="agreement"/>我已阅读并同意</label><a href="javascript:void(0);">服务协议、 网络服务交易协议、 隐私保护政策</a>
                <input type="button" id="email_login" class="loginbut" value="注 册">
                <p>已有帐号？<router-link to="/login">登录</router-link></p>
            </div>
            <div v-else key="a2">
                <p>帐号</p>
                <input type="text" class="srk" id="sj" placeholder="请输入手机号" maxlength="11"  onkeyup="this.value=this.value.replace(/\D/g,'')"><br/>
                <p>验证码</p>
                <div class="dtm">
                    <input type="number" class="srk" id="sj_yzm" placeholder="请输入手机验证码" style="width: 300px" maxlength="1">
                    <input type="button" class="hqdtm" id="sjdtm" value="获取动态码">
                </div>
                <p>密码</p>
                <input type="password" class="srk" id="sj_pwd" placeholder="请输入密码（6-16位字母/数字/符号）"><br/>
                <label><input type="checkbox" id="agreement" name="agreement"/>我已阅读并同意</label><a href="javascript:void(0);">服务协议、 网络服务交易协议、 隐私保护政策</a>
                <input type="button"  id="sj_login" class="loginbut" value="注 册">
                <p>已有帐号？<router-link to="/login">登录</router-link></p>
            </div>
        </transition>
    </bg>
</template>

<script>
    import bg from '../components/public/登录注册'
    import {getMembership} from './api/api'
    export default {
        components:{
            bg
        },
        data(){
          return{
              tabSelect:0
          }
        },
        methods:{
            tabChange:function(index){
                this.tabSelect = index
            }
        },
        mounted(){
            this.test();
        }
    }
</script>

<style scoped>
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button,
    input[type='number']{
        appearance: none;
    }
    .bottom{
        font-size: 16px;
        color: #777;
        margin-top: 10px;
    }
    .bottom>div{
        margin-top: 60px;
        width: 418px;
    }
    .srk{
        font-size: 15px;
        margin: 15px 0 25px 0;
        padding-left:20px;
        width: 411px;
        height: 47px;
        background-color: #ffffff;
        border: solid 1px #e6e6e6;
        width: 400px;
        outline-color: #9e0100;
    }

    .loginbut{
        font-size: 18px;
        color: #fff;
        height: 51px;
        background-color: #9e0100;
        border-radius: 26px;
        border: 0;
        outline:none;
        margin: 30px 0;
        width: 100%;
        cursor:pointer;
        box-shadow: 0 3px 9px #dd7272;
    }
    .bottom p:last-of-type{
        text-align: center;
    }
    .hqdtm{
        color: #fff;
        height: 49px;
        background-color: #9e0100;
        border: 0;
        outline:none;
        cursor:pointer;
        width: 96px;
    }
    #after{
        transition: .5s;
    }
    .v-enter-active{
        transition: .3s ease;
    }
    .v-leave-active{
        transition: .3s ease;
    }
    .v-enter,.v-leave-to{
        transform: translateY(-50px);
        opacity: 0;
    }
    @media screen and (max-width: 415px) {

    }

</style>