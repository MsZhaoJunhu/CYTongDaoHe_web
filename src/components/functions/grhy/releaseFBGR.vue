<template>
    <div style="width:100%;height:100%;background:#fafafa;">
        <router-link to="/fun/funs" class="tdt_qyhy_top_title">需求发布</router-link>
        <div class="publishing">
            <div class="publishing_content">
                <form>
                    <p>
                        <span>发布类型</span>
                        <button @click="changeBgAndSj($event)">{{fbfs1}}</button>
                        <button class="active" @click="changeBgAndSj($event)">{{fbfs2}}</button>
                        <input type="hidden" v-model="formGrXqFb.personType" >
                    </p>
                    <p>
                        <span>实名用户</span>
                        <input type="text" placeholder="需求公司名称" v-model="formGrXqFb.personName" disabled>
                    </p>
                    <p>
                        <span>联系电话</span>
                        <input type="text" placeholder="自动获取绑定电话" v-model="formGrXqFb.personPhone">
                    </p>
                    <p>
                        <span>需求名称</span>
                        <select v-model="formGrXqFb.personResource" id="changeFirstClassMenu" @change="changeFirstClassMenu()" >
                            <option v-for="item in firstClassMenu" :data-value="item.dictItemId" >{{item.itemName}}</option>
                        </select>
                        <span>资源等级</span>
                        <select v-model="formGrXqFb.personLevel" id="changeSecendClassMenu"  @change="changeSecendClassMenu()">
                            <option v-for="item in secedClassMenu" :data-value="item.itemCode" >{{item.itemName}}</option>
                        </select>
                        <span>等级标准</span>
                        <input type="text" v-model="formGrXqFb.personStandard" disabled>
                        
                    </p>
                    <p>
                        <span>需求内容</span>
                        <textarea cols="30" rows="20" placeholder="详细的描述" v-model="formGrXqFb.personBody"></textarea>
                    </p>
                    <p v-show="!putongfabu">
                        <span>赏金额度</span>
                        <input type="text" v-model="formGrXqFb.personMoney">
                        <i>元</i>
                        <span class="qc_dyh_span_yx">(最高不超过2000元)</span>
                    </p>
                    <p v-show="!putongfabu">
                        <span>支付方式</span>
                        <font @click="changeColor_tdt(0)" :class="yhkWxZfb==0?'tdt_grhy_zffs_active':'yhk'">
                            <img src="../../../assets/imgs/yhk.png" alt="">
                            <span>
                                <i>某某</i>{{yhk}}(<i>2333</i>)
                            </span>
                        </font>
                        <font @click="changeColor_tdt(1)" :class="yhkWxZfb==1?'tdt_grhy_zffs_active':'yhk'">
                            <img src="../../../assets/imgs/wx.png" alt="">
                            <span>{{wx}}支付</span>
                        </font>
                        <font @click="changeColor_tdt(2)" :class="yhkWxZfb==2?'tdt_grhy_zffs_active':'yhk'">
                            <img src="../../../assets/imgs/zfb.png" alt="">
                            <span>{{zfb}}支付</span>
                        </font>
                        <input type="hidden" v-model="formGrXqFb.paymentMethod" class="ycDSj">
                    </p>
                    <div class="isPublic">
                        <span>是否公开</span>
                        <div>
                            <div @click="isPublicEvent($event)">
                                <div>
                                    <div class="isPublicActive"></div>
                                </div>
                                <span>{{isPublic}}</span>
                            </div>
                            <div @click="isPublicEvent($event)">
                                <div>
                                    <div></div>
                                </div>
                                <span>{{isNotPublic}}</span>
                            </div>
                        </div>
                        <font>（温馨提示：请选择显示公开方式后，个人需求才能正式发布）</font>
                    </div>
                    <button @click="onsubmit()">发布需求</button>
                </form>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>        
    </div>
</template>
<script>
import moment from 'moment'
import { 
    publishPersonNeed,
    getPersonNeeds,
    resources,
    resourcesEr,
    indivFinish 
    } from '../../api/api'
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
                            this.$message({
                                showClose: true,
                                message: "选择时间超过90天！请重新选择！",
                                type: "error"
                            });
                        }
                    }
                },
            },
            fbfs1:"悬赏发布",
            fbfs2:"普通发布",
            yhkWxZfb:-1,
            yhk:"银行卡",
            wx:"微信",
            zfb:"支付宝",
            putongfabu:true,
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
                            this.$message({
                                showClose: true,
                                message: "选择时间超过15天！请重新选择！",
                                type: "error"
                            });
                        }
                    }
                },
            },
            userEmail:"",
            userEmailYZX:"",
            userDisable:"",
            //调用接口时的表单
            formGrXqFb:{
                "personName":"",
                "personPhone":"",
                "personType":"",
                "personResource":"",
                "personLevel":"",
                "personStandard":"",
                "paymentMethod":"",
                "token":""
            },
            isPublic:"公开",
            isNotPublic:"非公开",
            isSelectedPublic:1,
            // 选择政府政策的一级二级三级
            // 一级
            firstClassMenu:[],firstClassMenuDataValue:"",
            // 二级
            secedClassMenu:[],secedClassMenuDataValue:"",
        }
    },
    methods: {
        sendCode(){

        },
        sendEm() {
            
        },
        changepPublishing(index){
            this.publishing_selectd=index;
        },
        changeBgAndSj(e){
            var el=e.currentTarget;
            if(el.innerHTML=="普通发布"){
                el.className="active"
                el.previousElementSibling.className=""
                this.formGrXqFb.personType=this.fbfs2
                this.putongfabu=true;
            }else{
                el.className="active"
                this.putongfabu=false;
                el.nextElementSibling.className=""
                this.formGrXqFb.personType=this.fbfs1
            }
        },
        changeColor_tdt(index){
            this.yhkWxZfb=index;
            switch (index) {
                case 0:
                    this.formGrXqFb.paymentMethod=this.yhk
                    break;
                case 1:
                    this.formGrXqFb.paymentMethod=this.wx
                    break;
                case 2:
                    this.formGrXqFb.paymentMethod=this.zfb
                    break;
                default:
                    this.formGrXqFb.paymentMethod=null;
                    break;
            }
        },
        onsubmit(){
            this.formGrXqFb.token = sessionStorage.getItem("token");
            //是否公开
            this.formGrXqFb.isPublic = this.isSelectedPublic;
            if(this.formGrXqFb.personType=="悬赏发布"){
                if(this.formGrXqFb.personResource==""||this.formGrXqFb.personLevel==""||this.formGrXqFb.personStandard==""||this.formGrXqFb.personBody==""||this.formGrXqFb.personMoney==""||this.formGrXqFb.paymentMethod==""||this.formGrXqFb.isPublic==""){
                    this.$message({
                        showClose: "警告",
                        message: "您有数据未填写",
                        type: "error"
                    })
                    return ""
                }else{
                    publishPersonNeed(this.formGrXqFb).then(res=>{
                        if(res.data.code!==200){
                            this.$message({
                                showClose: true,
                                message: res.data.msg,
                                type: "error"
                            });
                        }else if(res.data.code===200){
                            this.$message({
                                showClose: true,
                                message: res.data.msg,
                                type: "success"
                            });
                            this.$router.push("/fun/funs");
                        }
                        
                    });
                }
            }else{
                if(this.formGrXqFb.personResource==""||this.formGrXqFb.personLevel==""||this.formGrXqFb.personStandard==""||this.formGrXqFb.personBody==""||this.formGrXqFb.isPublic==""){
                    this.$message({
                        showClose: "警告",
                        message: "您有数据未填写",
                        type: "error"
                    });
                    return ""
                }else{
                    publishPersonNeed(this.formGrXqFb).then(res=>{
                        if(res.data.code!==200){
                            this.$message({
                                showClose: true,
                                message: res.data.msg,
                                type: "error"
                            });
                        }else if(res.data.code===200){
                            this.$message({
                                showClose: true,
                                message: res.data.msg,
                                type: "success"
                            });
                            this.$router.push("/fun/funs");
                        }
                        
                    });
                }
            }
        },
        isPublicEvent(e){
            var isPublic=document.getElementsByClassName("isPublic")
            for(var i=0;i<isPublic[0].children[1].children.length;i++){
                isPublic[0].children[1].children[i].firstElementChild.firstElementChild.className=" "
            }
            e.currentTarget.firstElementChild.firstElementChild.className="isPublicActive"
            switch (e.currentTarget.firstElementChild.nextElementSibling.innerHTML) {
                case "公开":
                    this.isSelectedPublic=1;
                    break;
                default:
                    this.isSelectedPublic=0;
                    break;
            }
        },
        changeFirstClassMenu(){
            let obj = document.getElementById("changeFirstClassMenu");
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value");
            this.firstClassMenuDataValue=store_num;
            // 清空候选条件
            this.formGrXqFb.personLevel=""
            this.formGrXqFb.personStandard=""
            resourcesEr({"dictItemId":store_num}).then(res => {
                if (res.data.code === 200) {
                    this.secedClassMenu=res.data.data
                }
            });
        },
        changeSecendClassMenu(){
            let obj = document.getElementById("changeSecendClassMenu");
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value");
            this.secendClassMenuDataValue=store_num;
            resourcesEr({"dictItemId":this.firstClassMenuDataValue,"itemCode":this.secendClassMenuDataValue}).then(res => {
                if (res.data.code === 200) {
                    this.formGrXqFb.personStandard=res.data.data[0].itemValue1
                }
            });
        }
    },
    created() {
        let originUser = JSON.parse(sessionStorage.getItem("user"));
        this.formGrXqFb.personName = originUser.userName;
        this.formGrXqFb.personPhone = originUser.phoneNo;  
        this.formGrXqFb.indivId = originUser.roleId;
        this.formGrXqFb.personType = "普通发布";
        resources().then(res => {
            if (res.data.code === 200) {
                this.firstClassMenu=res.data.data
            }
        });
        indivFinish({"indivId":originUser.roleId}).then(res => {
            if (res.data.code === 200) {
                this.formGrXqFb.personName=res.data.data[0].actualName
                this.formGrXqFb.personPhone=res.data.data[0].phoneNo
            }
        });

    },
}
</script>
<style scoped>
    .publishing{
        width: 1400px;
        height: auto;
        background-color:#fff;
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
        padding-top: 34px;
    }
    .publishing_content>form>p{
        display: flex;
        flex-wrap: wrap;
        min-height: 38px;
        margin: 16px 0 0 0;
    }
    .publishing_content>form>p>.qc_dyh_span_yx{
        width: auto;
        color: #cccccc;
    }
    .publishing_content>form>p>.qc_dyh_span_yx:after{
        content: ''
    }
    .publishing_content>form>p>span+button,.publishing_content>form>p>span+button+button{
        width: 96px;
        height: 38px;
        border: 1px solid #9e0100;
        background: #fff;
        color: #9e0100;
    }
    .publishing_content>form>p>span+button.active,.publishing_content>form>p>span+button+button.active{
        background: #9e0100;
        color: #fff;
    }
    .publishing_content>form>p>span+button+button{
        margin-left: 12px;
    }
    .publishing_content>form>p>span{
        display: inline-block;
        width: 120px;
        margin-right: 16px;
        font-size: 16px;
        line-height: 38px;
        color: #666666;
    }
    .publishing_content>form>p>span:after{
        content: "*";
        color: #9e0100;
        line-height: 18px;
    }
    .publishing_content>form>p>input{
        width: 200px;
        height: 38px;
        border: 0;
        padding-left: 16px;
        box-sizing: border-box;
        background: #f6f6f6;
    }
    .publishing_content>form>p>input+span{
        margin-left: 27.5%;
    }
    .publishing_content>form>p>select{
        width: 180px;
        height: 38px;
        padding-left: 8px;
        margin-right: 16px;
        border: 0;
        outline: none;
        background: #f6f6f6;
        color: #999999;
    }
    .publishing_content>form>p>select>option{
        color: #999999;
    }
    .publishing_content>form>.textarea_tb>textarea{
        width: 35%;
    }
    .publishing_content>form>.textarea_tb>textarea+span{
        margin-left: 5%;
    }
    .publishing_content>form>p>textarea{
        margin: 0;
        width: 63%;
        height: 80px;
        padding: 8px;
        resize:none;
        box-sizing: border-box;
        background: #f6f6f6;
        border: 0;
    }
    .publishing_content>form>p:nth-child(3)>span:nth-child(3),.publishing_content>form>p:nth-child(4)>span:nth-child(3){
        margin-left: 16px;
    }
    .publishing_content>form>p:nth-child(3)>*:nth-child(n+5){
        margin-top: 16px;
    }
    .publishing_content>form>p>input+i{
        font-style: normal;
        line-height: 38px;
        margin-left: 8px;
        margin-right: 8px;
    }
    .publishing_content>form>p>div+i{
        font-style: normal;
        margin: 0 8px;
        line-height: 38px;
    }
    .publishing_content>form>p>div+span{
        margin: 0 0 0 16px;
        font-size: 16px;
        color: #999999;
    }
    .publishing_content>form>p>div+span:after{
        content: ""
    }
    .publishing_content>form>p>input+input{
        margin-left: 16px;
    }
    .publishing_content>form>button{
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
        width: 1400px;
        margin: 0 auto;
        padding: 45px 0 26px 16px;
        color: #9e0100;
        font-weight: bolder;
    }
    .tdt_qyhy_top_title:before{
        content: '<';
        margin-right: 8px;
    }
    .publishing_selected_fontBloder{
        font-weight: bolder;
    }
    .publishing_selected_font{
        color: #cfcfcf !important;
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
    .publishing_content>form>p>.shouye_p_button_hqyzm{
        background: none;
        color: #9e0100;
        font-weight: bolder;
    }
    .publishing_content>form>p>font{
        padding: 10px 9px;
        display: inline-block;
        border: 1px solid #eeeeee;
        color: #444444;
        font-size: 14px;
        position: relative;
    }
    .publishing_content>form>p>font+font{
        margin-left: 8px;
    }
    .publishing_content>form>p>font>span>i{
        font-style: normal;
    }
    .publishing_content>form>p>font>img{
        height: 14px;
        margin-right: 8px;
        position: relative;
        top: 1px;
    }
    .publishing_content>form>p>.tdt_grhy_zffs_active{
        border: 1px solid #9e0100;
        color: #9e0100;
    }
    .isPublic{
        margin-top: 16px;
        display: flex;
    }
    .isPublic>span:first-child{
        display: inline-block;
        width: 120px;
        margin-right: 16px;
        font-size: 16px;
        line-height: 38px;
        color: #666666;
    }
    .isPublic>span:first-child:after{
        content: "*";
        color: #9e0100;
        line-height: 18px;
    }
    .isPublic>div{
        width: 15%;
        display: flex;
        justify-content: space-between;
    }
    .isPublic>div>div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .isPublic>div>div>div{
        width: 12px;
        height: 12px;
        box-sizing: border-box; 
        border:1px solid #eeeeee;
        background: #f6f6f6;
        display: flex;
        align-items: center;
    }
    .isPublic>div>div>div+span{
        color: #cccccc;
    }
    .isPublic>div>div>div>.isPublicActive{
        background: #9e0100;
        width: 6px;
        height: 6px;
        margin: 0 auto;
    }
    .isPublic>font{
        line-height:38px;
        color: #999999;
        
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