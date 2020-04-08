<template>
    <!--信息填写-->
    <toastChild>
        <template v-slot:topTab>
            <span class="tabbar first selected" @click="tabChange(0)">基本信息</span>
            <span class="tabbar" @click="tabChange(1)">教育经历</span>
            <span class="tabbar" @click="tabChange(2)">培训经历</span>
            <span class="tabbar" @click="tabChange(3)">专业能力</span>
            <span class="tabbar" @click="tabChange(4)">工作经验</span>
            <img src="../../assets/imgs/toRightpng.png" @click="changejia(tabNum)" alt="">
            <i id="after"></i>
        </template>
        <transition mode="out-in">
            <div v-if="tabSelect==0">
                <span class="fontTwo">姓名<span class="xh">*</span>:</span>
                <input type="text" class="xm">
                <span class="fontTwo tz">性别<span class="xh">*</span>:</span>
                <select class="xbwh">
                    <option style="display:none;">性别</option>
                    <option>男</option>
                    <option>女</option>
                </select>
                <span class="fontTwo tz">年龄<span class="xh">*</span>:</span>
                <input type="text" class="xb2">
                <br>
                <span class="fontTwo">生日<span class="xh">*</span>:</span>
                <select class="xbwhNF">
                    <option style="display:none;">年份</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                </select>年
                <select class="xbwhNF xbwhYF">
                    <option style="display:none;">月份</option>
                    <option>12</option>
                    <option>11</option>
                    <option>10</option>
                    <option>9</option>
                    <option>8</option>
                    <option>7</option>
                    <option>6</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>月
                <select class="xbwhNF xbwhYF">
                    <option style="display:none;">日</option>
                    <option>31</option>
                    <option>30</option>
                    <option>29</option>
                    <option>28</option>
                </select>日
                <br>
                <span class="fontFive">身份证号码<span class="xh">*</span>:</span>
                <input type="text">
                <span class="fontTwo tz">省份<span class="xh">*</span>:</span>
                <select class="xbwhSF">
                    <option style="display:none;">选择省份</option>
                    <option>北京</option>
                    <option>北京1</option>
                    <option>北京2</option>
                    <option>北京3</option>
                    <option>北京4</option>
                </select>
                <span class="fontTwo tz">城市<span class="xh">*</span>:</span>
                <select class="xbwhSF">
                    <option style="display:none;">选择省份</option>
                    <option>内环高速路</option>
                    <option>二环高速路</option>
                    <option>三环高速路</option>
                    <option>郊区平民窟</option>
                </select>
                <br>
                <span class="fontFour">手机号码<span class="xh">*</span>:</span>
                <input type="text" class="xm">
                <span class="fontFour">注册邮箱<span class="xh">*</span>:</span>
                <input type="text" class="xm">
                <br>
                <span class="fontFourTB">QQ号码<span class="xh">*</span>:</span>
                <input type="text" class="xm">
                <span class="fontFour">微信号码<span class="xh">*</span>:</span>
                <input type="text" class="xm">
                <br>
                <span class="fontFour">微博号码<span class="xh">*</span>:</span>
                <input type="text" class="xm">
            </div>
            <div v-if="tabSelect==1">
                <p>教育经历</p>
            </div>
            <div v-if="tabSelect==2">
                <p>培训经历</p>
            </div>
            <div v-if="tabSelect==3">
                <p>专业能力</p>
            </div>
            <div v-if="tabSelect==4">
                <p>工作经验</p>
            </div>
        </transition>
    </toastChild>
</template>
<script>
import toastChild from './children/toast3Child.vue'
export default {
    data() {
        return {
            num:1,
            tabSelect:0,
            tabNum:0
        }
    },
    components:{
        toastChild,
    },
    methods: {
        closeToast(){
            this.$store.commit("changeFalse");
        },
        tabChange:function(index){
            this.tabSelect = index;
            this.tabNum=index;
        },
        changejia(index){
            if(index<4){
                this.tabNum+=1;
                this.tabSelect=index+=1;
            }else if(index=4){
                this.tabNum=0;
                index=0;
                this.tabSelect=index;
            }
        }
    },
}
</script>
<style scoped>
    .banner{
        width: 100%;
        /* min-width: 1400px; */
        position: relative;
    }
    .banner img{
        width: 100%;
    }
    .banner>.text{
        color: #d1d1d2;
        left: 260px;
        bottom: 55px;
        position: absolute;
    }
    .banner>.text>p{
        font-family: '华文细黑';
        font-size: 18px;
    }
    .banner>.text>h1{
        letter-spacing:4px;
        font-size: 56px;
        font-weight:normal;
    }
    .main{
        position: relative;
        width: 1400px;
        margin: 0 auto;
    }
    .qyjj{
        padding: 40px 130px 0 130px;
        text-align: center;
        border-bottom:1px solid #ccc;
    }
    .qyjj .text{
        margin: 85px 0;
        line-height: 36px;
    }
    .title{
        width: 100%;
        font-size: 48px;
        line-height: 48px;
        color: #353535;
        margin: 30px auto;
        position: relative;
    }
    .xhx{
        text-align: center;
    }
    .xhx::after{
        content:"";
        display: block;
        height: 1px;
        width: 160px;
        background: #000;
        position: absolute;
        left: 50%;
        margin-left:-80px;
        bottom: -20px;
    }
    .hxtd{
        padding: 50px 0;
        border-bottom:1px solid #ccc;
    }
    .show{
        margin-top:80px;
        display: flex;
    }
    .intro{
        width: 25%;
    }
    .intro img{
        width: 100%;
        height: auto;
    }
    .intro p{
        margin: 10px 0;
    }
    .intro p:nth-child(1){
        font-size: 30px;
    }
    .intro p:nth-child(2){
        font-size: 16px;
        color: #aaa;
    }
    .intro p:nth-child(3){
        font-size: 15px;
        margin-right: 13px;
        line-height: 30px;
    }
    .qywh{
        padding: 50px 0 70px 0;
    }
    .qywh>p{
        text-align: center;
        color: #999;
        padding: 20px 0;
    }
    .ptjs{
        display: flex;
        margin-top: 50px;
    }
    .ptxx{
        width: 20%;
        height: 90px;
        padding: 35px;
        background-color: #f7f7f7;
    }
    .ptxx:nth-child(2n){
        background-color: #f2f2f2;
    }
    .ptxx p:nth-child(1){
        font-size: 24px;
    }
    .ptxx p:nth-child(2){
        margin-top: 10px;
        font-size: 16px;
        color: #999;
    }
    .last{
        padding-top:50px;
        background: url(../../assets/imgs/last.png) no-repeat;
    }
    .site{
        width: 1400px;
        height: 280px;
        margin: 0 auto;
        background: #fff;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .site div:nth-child(1){
        font-size: 30px;
        width: 530px;
    }
    .site div:nth-child(1) .red_xbk{
        font-weight:bold;
        padding-bottom:10px;
        margin-bottom:10px;
        font-size: 24px;
        color: #9e0100;
        border-bottom:3px solid #9e0100;
    }
    .site div:nth-child(2){
        font-size: 18px;
        margin: 0 130px 0 110px;
        width: 280px;
    }
    .site div span{
        display:block;
        font-size: 14px;
        margin: 15px 0;
    }
    .site div:nth-child(3){
        border: #ccc solid 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 125px;
        width: 225px;
        cursor: pointer;
        text-align:center;
        font-size: 14px;
        margin-right: 15px;
    }
    .xbwh{
        width: 88px;
        height: 24px;
        margin-right: 30px;
    }
    .xbwhNF{
        width: 88px;
        height: 24px;
        margin: 32px 8px 32px 0px;
    }
    .xbwhYF{
        margin: 0px 8px 0px 20px;
    }
    .xbwhSF{
        width: 88px;
        height: 24px;
        margin: 0px 30px 0px 0px;
    }
</style>