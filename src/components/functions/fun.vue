<template>
    <div class="功能页">
        <bg>
            <template v-slot:topTab>
                <img src="../../assets/head_logo/tdtglgj.png" alt="通道同图标">
                <div class="tableTopDiv">
                    <span @click="tabChange(0,$event)">信息</span>
                    <span class="functionsJL" @click="tabChange(1,$event)">交流</span>
                    <span @click="tabChange(2,$event)">功能</span>
                    <span @click="tabChange(3,$event)">我的</span>
                </div>
                <div class="userIcon" v-if="isLogin">
                    <img :src="avatar" style="width:36px;height:36px;border-radius:18px;" alt="">
                    <a class="userMenu" @mouseover="showCon(true)" @mouseout="showCon(false)">
                        <span class="userName">{{userName}}</span><i class="userMenuIcon" v-show="isShowCon">▲</i><i class="userMenuIcon" v-show="!isShowCon">▼</i>
                        <div class="my" v-show="isShowCon">
                            <button @click="fhsyTdh">返回首页</button>
                            <button @click="loginOut">退出登录</button>
                        </div>
                    </a>
                </div>
                <div class="userIcon" v-else>
                    <router-link to="/login">请登录</router-link>
                </div>
                <i class="el-icon-menu" @click="elbuttontwoBL" v-model="direction"></i>
            </template>
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </bg>
    </div>
</template>
<script>
import bg from './childen/funSlot.vue'
import funs from './childen/funs.vue'
import chat from "./childen/chat.vue"; 
import alwaysChat from './childen/alwaysChat.vue'
import {logOut,getMyInfo} from '../../components/api/api'
export default {
    components:{
        bg,
        funs,
        chat,
        alwaysChat,
        userName:'',
    },
    data() {
        return {
            //判断用户是否登录并且对应显示信息  登录->用户名+下拉菜单  未登录->显示登录
            isLogin:false,
            //控制显示顶部用户名菜单
            isShowCon:false,
            avatar:require('../../assets/funsIcon/userTX.png'),
                drawer: false,
            direction: 'ltr',
            myPath:this.$route.path,
        }
    },
    methods: {
        //顶部菜单显示
        tabChange:function(index,e){
            var par=e.currentTarget.parentElement.children;
            for(var i=0;i<par.length;i++){
                par[i].style.borderBottom="0"
            }  
            e.currentTarget.style.borderBottom="2px solid #fff"
            switch (index) {
                case 0:
                    this.$router.push('chat')
                    break; 
                case 1:
                    this.$router.push('alwaysChat')
                    break;
                case 2:
                    this.$router.push('funs')
                    break;
                case 3:
                    //角色判定
                    switch(this.userInfo.role){
                        case "0":{
                            this.$router.push({path:"home_",query:{userInfo:this.userInfo}})
                            return "home_";
                        }
                        case "1":{
                            this.$router.push({path:"homeFw",query:{userInfo:this.userInfo}});
                            return "homeFw";
                        }
                        case "2":{
                            this.$router.push({path:"homeGr",query:{userInfo:this.userInfo}});
                            return "homeGr";
                        }
                        case "3":{
                            this.$router.push({path:"homeGx",query:{userInfo:this.userInfo}});
                            return "homeGx";
                        }
                        default :{
                            alert("暂无角色")
                        }
                    }
                default:
                    break;
            }
            
        },
        //用户名菜单显示
        showCon(e){
            if(e){
                this.isShowCon=true;
            }else{
                this.isShowCon=false;
            }
        },
        //登录/退出登录   退出的登录清空session
        loginOut(){
            sessionStorage.removeItem("user");
            logOut().then(res=>{
                if(res.code===200){
                    this.$message({
                    showClose: true,
                    message: "退出成功",
                    type: "success"
                    });
                    //移除
                    sessionStorage.removeItem("user");
                    sessionStorage.setItem("user","")
                    this.$route.pash("/");
                }else{
                    this.$message({
                    showClose: true,
                    message: res.msg,
                    type: "error"
                    });
                }
            })
            this.isLogin=!this.isLogin;
            this.$router.push('/')
        },
        fhsyTdh(){
            this.$router.push('/')
        },
        elbuttontwoBL(){
            this.drawer = true;
        },
    },
    created(){
        let user=JSON.parse(sessionStorage.getItem("user"));
        if(user){
            this.userInfo=user; 
            this.userName=user.userName;
            this.isLogin=!this.isLogin;
        }
        // setInterval(() => {
            getMyInfo({"userId": user.userId}).then(res => {
                if (res.data.code === 200) {
                    if(res.data.data.avatar==null){
                        
                    }else{
                        this.avatar=res.data.data.avatar
                    }
                }
            })
        // }, 1000);
        
        
    },
    mounted() {
        var e=document.getElementsByClassName("functionsJL")
        var par=e[0].parentElement.children;
        for(var i=0;i<par.length;i++){
            par[i].style.borderBottom="0"
        }  
        if(this.myPath==="/fun/alwaysChat"){
            e[1].style.borderBottom="2px solid #fff"
        }else if(this.myPath==="/fun/chat"){
            par[0].style.borderBottom="2px solid #fff"
        }else if(this.myPath==="/fun/home_"){
            par[3].style.borderBottom="2px solid #fff"
        }else if(this.myPath==="/fun/funs"){
             par[2].style.borderBottom="2px solid #fff"
        }
    },
}   
</script>
<style scoped>

    *{
        margin: 0;
        padding: 0;   
    }
    .tableTopDiv{
        width: 20%;
        height: 18px;
        display: flex;
        justify-content: space-between;
        position: relative;
        left: -54px;
    }
    .tableTopDiv>span{
        display: inline-block;
        width: auto;
        height: 24px;
        border-bottom: 2px solid #9e0100;
    }
    .tableTopDiv>span:nth-child(3){
        border-bottom: 2px solid #fff;
    }
    .tableTopDiv>span,.tableTopDiv>span>a{
        font-size: 16px;
        /* font-weight: bold; */
        color: #fff;
        user-select: none;
        cursor: pointer;
    }
    #fun_after{
        content:'';
        display: block;
        width: 36px;
        min-height: 3px;
        background: #fff;
        position: absolute;
        top: 24px;
    }
    .userIcon{
        width: 200px;
        display: flex;
        align-items: center;
    }
    .userIcon>a{
        margin: 0 auto;
        color: #fff;
    }
    .userMenu{
        position: relative;
    }
    .userMenuIcon{
        margin-left: 4px;
        position: relative;
        top: -4px;
    }
    .my{
        width: 120px;
        top: 21px;
        left: 0px;
        display: flex;
        background: #fff;
        overflow: hidden;
        flex-direction: column;
        position: absolute;
        box-shadow: 0 2px 5px rgba(0,0,0,.5);
        border-radius: 2px;
        padding: 5px 0;
        z-index: 99;
    }
    .my>button{
        border:0px;
        width: 100%;
        text-align: center;
        padding: 10px 20px;
        margin: 0 auto;
        background-color: #fff;
        font-size: 16px;
        cursor: pointer;
    }
    .my>*{
        text-align: center;
        padding: 10px 20px;
        margin: 0 auto;
        width: 80px;
        color: #333;
        opacity: .7;
    }
    .my>*:hover{
        background: #e5e5e5;
    }
    .my>*:last-child{
        box-shadow: 0 -1px 0 rgba(0,0,0,.1);
    }
    .userName{
        width: 96px;
        display:inline-block;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }
    .funsAll{
        width: 95%;
        height: auto;
        margin: 0 auto;
        background: #f9f9f9;
    }
    .funsAll>div{
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 32px 0;
    }
    .功能页{
        width: 100%;
        height: auto;
        background: #f9f9f9;
        overflow: hidden;
        min-height: 100%;
    }
    
    .功能页>span{
        display: block;
        color: #bbbbbb;
        padding-top: 32px;
        text-align: center;
        background: #f9f9f9;
    }
    .el-icon-menu{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .el-icon-menu{
            display: block;
            font-size: 24px;
            margin-right: 16px;
            color: #fff;
        }
        .el-icon-menu:active{
            color: #9e0100;
        }
        
    }
</style>