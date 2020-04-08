<template>
<div class="top_all_yinying">
    <!--   -->
    <header class="top_header" :class="select_index==3?'backgroundBlack':(select_index==4.5?'backgroundBlack':'')">
        <div>
            <img src="../../assets/imgs/LOGO.png" style="margin-left:2%;"/>
            <ul style="margin-left:2rem;height:100%;">
                <template v-for="(item,index) in title">
                    <li :class="select_index == index?'header_nav_li selected':'header_nav_li'">
                        <router-link :to="item.link">{{item.title}}</router-link>
                        <div v-if="item['childred']" class="children_nav">
                            <router-link v-for="(childitem,childindex) in item['childred']" :to="childitem.link">{{childitem.title}}</router-link>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <div>
            <ul>
                <li class="login_reg" @func="getIsLogin"  v-if="!isLogin">
                    <router-link to="/login">登录</router-link>
                    <router-link to="/reg">注册</router-link>
                </li>
                <li class="login_reg" v-else>
                    <a @mouseover="showCon(true)" @mouseout="showCon(false)">
                        <span class="isLoginName">{{userName}}</span><i>▲</i>
                        <div class="my" v-show="isShowCon">
                            <button @click="routerToPerson">同道通</button>
                            <button @click="loginOut">退出登录</button>
                        </div>
                    </a>
                </li>
                <li>
                    <button class="submitXQ" @click="submitXQYzNew" style="background: -webkit-linear-gradient(left, #9e0000, #9e2900);color:#fff;font-weight:normal;">人才注册</button>
                    <button class="submitXQ" @click="submitXQYz" style="background:#9e0100;color:#fff;font-weight:normal;marginLeft:12px;">发布需求</button>
                </li>
            </ul>
        </div>
    </header>
</div>
</template>

<script>
    import toast from '../弹窗/toastPublic1.vue'
    import {logOut} from '../../components/api/api'
    export default {
        data(){
            return{
                title:[
                    {'link':'/','title':'首页'},
                    {'link':'/fwgys','title':'服务供应商',},
                    {'link':'/zyfw','title':'专业服务',},
                    // {'link':'/taoIndex','title':'同淘淘'},
                    {'link':'/zxsd','title':'资讯速递',},
                    // {'link':'/SaidSchoolBusNew','title':'同道学院'},
                    // {'link':'/park','title':'智慧园区',},
                ],
                isLogin:false,
                isShowCon:false,
                userName:'',
                userInfo:'',
            }
        },
        props:['select_index'],
        methods:{
            submitXQYzNew(){
                this.$router.push({path:"/sharingTalents"})
            },
            //进入我的主页  角色信息验证  0企业 1服务 2个人  3共享
            showZy(){
                //角色判定
               switch(this.userInfo.role){
                   case "0":{
                       this.$router.push({path:"/home/company-member",query:{userInfo:this.userInfo}})
                       return "/home/company-member";
                   }
                   case "1":{
                       this.$router.push("/home/server");
                       return "/home/server";
                   }
                   case "2":{
                       this.$router.push("/home/individual-member");
                       return "/home/individual-member";
                   }
                   case "3":{
                       this.$router.push("/home/talent-member");
                       return "/home/talent-member";
                   }
                   default :{
                       alert("暂无角色")
                   }
               }   
            },
            getIsLogin(data){
                this.isLogin=data;
            },
            showCon(e){
                if(e){
                    this.isShowCon=true;
                }else{
                    this.isShowCon=false;
                }
            },
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
            },
            routerToPerson(){
                this.$router.push('/fun/funs')
            },
            submitXQYz(){
                let user=JSON.parse(sessionStorage.getItem("user"));
                if(user){
                    switch (user.role) {
                        case "0":
                            this.$router.push("/fun/releaseFB")
                            break;
                        case "2":
                            this.$router.push("/fun/releaseFBGR")
                            break;
                        default:
                            this.$message({
                                showClose: true,
                                message: "您暂无此权限！",
                                type: "error"
                            });
                            break;
                    }
                }else{
                    this.$router.push("/reg")
                }
            }
        },
        mounted(){
            const goTop= document.querySelector('.top_header')
            if(goTop){
                window.onscroll = function() {
                    const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
                    const goTop= document.querySelector('.top_header')
                    if (scrollTop >82&&goTop!=null) {
                        goTop.style.backgroundColor="rgb(46, 46, 46)"
                    } else if (scrollTop <82&&goTop!=null) {
                        goTop.style.backgroundColor=""
                    }
                }
            }
            
            let userParse=sessionStorage.getItem("user")
            if(userParse!=null){
                let user=JSON.parse(userParse);
                this.userInfo=user; 
                this.userName=user.userName;
                this.isLogin=!this.isLogin;
                this.titleMedia[9].title=this.userName;
            }
            
        },
        components:{
            toast
        }
    }

    
</script>

<style scoped>
    .isLoginName{
        display: inline-block;
    }
    .toast{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }
    .login_reg{
        position: relative;
    }
    .login_reg i{
        display: inline-block;
        transform: scale(.7) rotateX(50deg) rotateZ(180deg);
        margin-left: 5px;
    }
    .login_reg .my{
        width: 150px;
        top: 30px;
        left: 10px;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        position: absolute;
        box-shadow: 0 2px 5px rgba(0,0,0,0);
        border-radius: 2px;
        padding: 5px 0;
        z-index: 99;
        background: none;
    }
    .login_reg .my>button{
        border:0px;
        width: 100%;
        text-align: center;
        padding: 10px 20px;
        margin: 0 auto;
        font-size: 16px;
        cursor: pointer;
        background: none;
        background-color: rgb(46, 46, 46);
    }
    .login_reg .my>*{
        text-align: center;
        padding: 10px 20px;
        margin: 0 auto;
        width: 80px;
        color: #fff;
    }
    .login_reg .my>*:hover{
        background-color: rgb(146, 146, 146);
    }
    .login_reg .my>*:last-child{
        box-shadow: 0 -1px 0 rgba(255,255,255,.1);
    }
    
    header{
        width: 100%;
        height: 62px;
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    ul{
        display: flex;
        align-items: center;
        margin-right: 38px;
    }
    ul>li{
        margin-left: 21px;
        
    }
    ul>li.selected{
        border-bottom: 2px solid #9e0100;
    }
    ul>li.selected a{
        color: #fff;
    }
    ul>li>a{
        padding: 20px 0;
        font-size: 16px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #fff;
        padding: 0 8px;
        line-height: 30px;
    }
    ul>li.login_reg>a{
        margin-left: 17px;
        height:30px;
        display: inline-block;
        color: #fff;
        font-size: 16px;
        user-select: none;
    }
    ul>li.login_reg>a:first-of-type{
        margin-left: 0;
    }
    ul>li.login_reg>a:last-of-type img{
        transform: translateY(2px);
    }
    .header_nav_li{
        position: relative;
        word-wrap: none;
        display: block;
        height: 100%;
        line-height: 70px;
    }
    .header_nav_li>img{
        flex-shrink: 0;
    }
    .header_nav_li>a{
        font-weight: bold;
        user-select: none;
    }
    .children_nav{
        display: block;
        position: absolute;
        z-index: -222;
        height: 0;
        width: 100%;
        padding:0;
        box-sizing: border-box;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        transition: all 1s ;
        overflow: hidden;
    }
    .children_nav a{
        display: block;
        text-align: center;
        padding-bottom: 5px;
        transition: all 1s;
        color: transparent;
        font-size: 15px
    }
    .header_nav_li:hover .children_nav{
        display: block;
        color: #9e0100;
        z-index: 9999;
        height:120px;
        padding: 15px 8px 8px;
        overflow: hidden;
    }
    .header_nav_li:hover .children_nav a{
        color: #353535;
        display: block;
    }
    .my a{
        cursor: pointer;
    }
    .children_nav a:hover{
        color: #9e0100 !important
    }
    .el-icon-menu{
        display: none;
    }
    header{
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
        z-index: 999;
    }
    .top_all_yinying{
        width:100%;
        height:80px;
        overflow: hidden;
        position: absolute;
        top: 0;
        z-index: 10;
    }
    .submitXQ{
        border: 0px;
        background: none;
        letter-spacing: 0px;
        font-weight: bold;
        color: #353535;
        padding: 4px 20px;
        font-size: 16px;
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 14px;
    }
    .top_header{
        border-bottom: 1px solid rgba(102,102,102);
    }
    .top_header>div{
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .top_header>div>*{
        flex-shrink: 0;
    }
    .backgroundBlack{
        background-color:rgb(46, 46, 46);
    }
</style>