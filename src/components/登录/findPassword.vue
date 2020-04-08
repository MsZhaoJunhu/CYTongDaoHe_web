<template>
    <div>
        <header_ />
        <bg>
            <template v-slot:topTab>
                <span class="fontSize" @click="tabChange(0)">邮箱验证找回</span>
                <span class="fontSize" @click="tabChange(1)">手机验证找回</span>
                <span class="fontSize" @click="tabChange(2)">安全问题找回</span>
                <i id="after" :style="tabSelect==1?'left:180px':tabSelect==2?'left:360px':tabSelect==3?'360px !important':'0px'"></i>
                <i id="after3" :style="tabSelect==1?'left:128px':tabSelect==2?'left:248px':tabSelect==3?'360px !important':'0px'"></i>
            </template>
            <transition mode="out-in">
                <div v-if="tabSelect==0" key="a1">
                    <p>输入注册邮箱</p>
                    <input type="text" id="zcxy" placeholder="请输入注册邮箱" onkeyup="this.value=this.value.replace(/\D/g,'')"><br/>
                    <p>输入邮箱验证码</p>
                    <div class="dtm">
                        <input type="text" id="yxyzm" placeholder="请输入6位验证码" style="width: 300px" step="1" maxlength="6">
                        <input type="button" class="fsyzyj" value="发送验证邮件">
                    </div>
                    <router-link to="login"><input type="button" class="loginbut" value="立即登录"></router-link>
                    <p>以上方式都无法找回？<span class="fontColorRed">请联系客服400-0623-688</span></p>
                </div>
                <div v-else-if="tabSelect==1" key="a2">
                    <p>输入注册手机</p>
                    <input type="text" id="sjh" placeholder="请输入注册手机号" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')"><br/>
                    <p>输入手机验证码</p>
                    <div class="dtm">
                        <input type="text" id="dtmsrk" placeholder="请输入6位验证码" style="width: 300px" step="1" maxlength="6">
                        <input type="button" class="hqdtm" value="发送验证短信">
                    </div>
                    <router-link to="login"><input type="button" class="loginbut" value="立即登录"></router-link>
                    <p>以上方式都无法找回？<span class="fontColorRed">请联系客服400-0623-688</span></p>
                </div>
                <div v-else key="a3">
                    <p>用户设置的第一个安全问题？</p>
                    <input type="text" id="wt1" placeholder="请输入答案"><br/>
                    <p>用户设置的第二个安全问题</p>
                    <input type="password" id="wt2" placeholder="请输入答案" ><br/>
                    <router-link to="login"><input type="button" class="loginbut" value="立即登录"></router-link>
                    <p>以上方式都无法找回？<span class="fontColorRed">请联系客服400-0623-688</span></p>
                </div>
            </transition>
        </bg>
        <footer_/>
    </div>
</template>

<script>
    import header_ from '@/components/public/头部'
    import footer_ from '@/components/public/底部'
    import bg from '../../components/public/登录注册'
    import ckmmc from '@/assets/imgs/ckmmc.png'
    import ckmm from '@/assets/imgs/ckmm.png'
    export default {
        components:{
            bg,
            header_,
            footer_,
        },
        data(){
            return{
                tabSelect:0
            }
        },
        methods:{
            tabChange:function(index){
                this.tabSelect = index
            },
            ckmm(e){
                var el=e.target;
                var password=document.getElementById("password")
                if(el.src==ckmm&&password.type=="password"){
                    el.src=ckmmc
                    password.type=""
                }else if(el.src==ckmmc){
                    el.src=ckmm
                    password.type="password"
                }
            }
        }
    }
</script>
<style scoped>
    .erweima{
        width: 230px;
        height: 78px;
        background: url('../../assets/imgs/erweima.png') no-repeat top right;
        position: absolute;
        margin: 0;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
    .erweima>div{
        position: relative;
        top: 30px;
        left: 20px;
        width: 150px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        border-radius: 16px;
        color: #878787;
        background-color: #f2f2f2;
    }
    
    #after,#after3{
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
    #password+img{
        position: relative;
        top: -60px;
        left: 350px;
        cursor: pointer;
    }
    input::-webkit-input-placeholder{
        color: #bdbdbd;
        opacity:1;
    }
    .fsyzyj{
        width: 126px;
        margin: 15px 0 25px 0;
    }
    .fontSize{
        font-size: 22px;
        font-weight: bold;
    }
    #after{
        width: 160px !important;
    }
    #after3{
        width: 120px !important;
        display: none;
    }
    .fontColorRed{
        color:#9e0100;
    }
    
    @media screen and (max-width: 416px) {
        #after3{
            display: block;
        }
    }
</style>