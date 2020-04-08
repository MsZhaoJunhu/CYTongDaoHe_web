<template>
    <div class="toast_toast2" v-show="$store.getters.getToast2Flag1">
        <div class="content_toast2" v-show="$store.getters.getToast2Flag2">
            <p class="sl"><span class="shu"></span>报名-填写报名信息<img src="../../assets/close.png" alt="close" @click="closeToast()" ></p>
            <p>
                <span class="firstOne">活动名称：</span><span>活动项目名称</span>
                <span class="firstTwo">活动组织方：</span><span>活动组织方名称</span>
            </p>
            <p>
                您的姓名：<input type="text" placeholder="李某某" maxlength="10">
            </p>
            <p>
                所在城市：
                <select class="citys" @change="changeSelect($event)">
                    <option style="display:none;">请选择城市</option>
                    <option>北京</option>
                    <option>天京</option>
                    <option>上海</option>
                    <option>广州</option>
                    <option>深圳</option>
                </select>
            </p>
            <p>
                联系电话：<input type="text" placeholder="123456789">
            </p>
            <p @click="addDelete($event)">
                报名人数：<button class="btn1">-</button><span>{{num}}</span><button class="btn2">+</button>
            </p>
            <button class="btn3" @click="next1()">下一步</button>
        </div>
        <div class="content_toast2" v-show="$store.getters.getToast2Flag3">
            <p class="sl"><span class="shu"></span>报名<img class="img2" src="../../assets/close.png" alt="close" @click="closeToast()" ></p>
            <p>
                <span class="firstOne">报名项目：</span><span>项目名称</span>
            </p>
           <p>
                <span class="firstOne">报名费用：</span><span><span>12500</span>元</span>
            </p>
            <p>
                <span class="firstOne">
                    开票方式：
                    <select class="citys" @change="changeSelect($event)">
                        <option style="display:none;">请选择开票方式</option>
                        <option>同道合平台</option>
                        <option>同道平台</option>
                        <option>同平台</option>
                        <option>同道平台</option>
                        <option>同道合平台</option>
                    </select>
                </span>
                <span class="firstOne">
                    支付主体：
                    <select class="citys" @change="changeSelect($event)">
                        <option style="display:none;">请选择身份</option>
                        <option>当前个人会员</option>
                        <option>当前企业会员</option>
                    </select>
                </span>
            </p>
            <p>
                <span class="firstOne last">
                    支付方式：
                    <button @click="changeBorderImg($event)" class="borderImg1">
                        <img src="../../assets/yhk.png" alt="图标">
                        某某银行卡（2333）
                    </button>
                    <button @click="changeBorderImg($event)" class="borderImg2">
                        <img src="../../assets/wx.png" alt="图标">
                        微信支付
                    </button>
                    <button @click="changeBorderImg($event)" class="borderImg3">
                        <img src="../../assets/zfb.png" alt="图标">
                        支付宝支付
                    </button>
                </span>
            </p>
            <button class="btn3" @click="next2()">下一步</button>
        </div>
        <div class="content3" v-show="$store.getters.getToast2Flag4">
            <p class="sl"><span class="shu"></span>支付验证<img class="img3" src="../../assets/close.png" alt="close" @click="closeToast()" ></p>
            <p>
                <span class="firstOne">支付主体：</span><span>关联公司(企业会员)</span>
            </p>
            <p>
                <span class="firstOne pl1">
                    邮箱：<input type="text" placeholder="输入邮箱">
                </span>
            </p>
            <p>
                <span class="firstOne pl2">
                    验证码：<input type="text"><button>获取验证码</button> 
                </span>
            </p>
            <p>
                <span class="firstOne">
                    安全密码：<input type="text" placeholder="输入安全密码">
                </span>
            </p>
            <button class="btn3" @click="next3()">下一步</button>
        </div>
        <div class="content3" v-show="$store.getters.getToast2Flag5">
            <p class="sl"><span class="shu"></span>支付验证<img class="img4" src="../../assets/close.png" alt="close" @click="closeToast()" ></p>
            <p>
                <span class="firstOne">支付主体：</span><span>个人会员</span>
            </p>
            <p>
                <span class="firstOne">
                    手机号码：<input type="text" placeholder="输入手机号码">
                </span>
            </p>
            <p>
                <span class="firstOne pl2">
                    验证码：<input type="text"><button>获取验证码</button> 
                </span>
            </p>
            <p>
                <span class="firstOne">
                    安全密码：<input type="text" placeholder="输入安全密码">
                </span>
            </p>
            <button class="btn3" @click="next4()">下一步</button>
        </div>
        <div class="content_toast2" v-show="$store.getters.getToast2Flag6">
            <p class="sl"><span class="shu"></span>报名<img class="img5" src="../../assets/close.png" alt="close" @click="closeToast()" ></p>
            <p class="two">
                <img src="../../assets/tclogo.png" alt="">
            </p>
            <p class="two">报名成功，平台会在第一时间通知您！</p>
            <button class="btn3" @click="closeToast">确定</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:1,
        }
    },
    methods: {
        addDelete(e){
            var el=e.target;
            if(el.className=="btn2"){
                this.num+=1;
            }else if(el.className=="btn1"&&this.num>1){
                this.num-=1;
            }else{
                this.num=1;
            }
        },
        closeToast(){
            this.$store.commit("changeFalse");
        },
        next1(){
            this.$store.commit("changeTrueToast22");
        },
        next2(){
            this.$store.commit("changeTrueToast23");
        },
        next3(){
            this.$store.commit("changeTrueToast24");
        },
        next4(){
            this.$store.commit("changeTrueToast25");
        },
        changeSelect(e){
            var el=e.target;
            el.style.color="#000"
        },
        changeBorderImg(e){
            var img1=document.getElementsByClassName("borderImg1")
            var img2=document.getElementsByClassName("borderImg2")
            var img3=document.getElementsByClassName("borderImg3")
            if(e.target.className=="borderImg1"){
                e.target.style.border="1px solid #9e0100";
                img2[0].style.border="1px solid #eeeeee";
                img3[0].style.border="1px solid #eeeeee";
            }else if(e.target.className=="borderImg2"){
                e.target.style.border="1px solid #9e0100";
                img1[0].style.border="1px solid #eeeeee";
                img3[0].style.border="1px solid #eeeeee";
            }else if(e.target.className=="borderImg3"){
                e.target.style.border="1px solid #9e0100";
                img2[0].style.border="1px solid #eeeeee";
                img1[0].style.border="1px solid #eeeeee";
            }
        },
    },
}
</script>
<style scoped>
    .toast_toast2{
        width: 100%;
        height: 100%;
        background-color:#999999;    
        background-color: rgba(00,00,00,0.7);
        box-sizing: border-box;
        padding-top: 10%;
        font-size: 14px;
    }
    .content_toast2{
        width: 720px;
        height: 480px;
        margin: 0 auto;
        opacity: 1;
        background-color: #ffffff;
    }
    .sl{
        width: 100%;
        height: 44px;
        line-height: 44px;
        padding-left: 16px;
        box-sizing: border-box;
        background-color: #f6f6f6;
    }
    .sl>img{
        position: relative;
        top: 2px;
        cursor: pointer;
    }
    .shu{
        width: 4px;
        height: 15px;
        display: inline-block;
        background-color:#9e0100;
        position: relative;
        top: 2px;
        margin-right: 8px;
    }
    .content_toast2>p+p{
        margin-top: 35px;
        padding-left: 16px;
    }
    .firstOne+span,.firstTwo+span{
        margin-left: 27px;
    }
    .firstTwo{
        margin-left: 83px;
    }
    .content_toast2>p>input{
        width: 158px;
        height: 30px;
        border: 1px solid #eeeeee;
        margin-left: 18px;
        padding-left: 8px;
    }
    .btn1{
        margin-left: 18px;
    }
    .btn1,.btn2{
        width: 30px;
        height: 30px;
        border: 0;
        color: #c7c7c7;
        background-color:#ffffff;
        border: 1px solid #eeeeee;
        cursor: pointer;
    }
    .btn1+span{
        width: 96px;
        height: 30px;
        border: 1px solid #eeeeee;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        position: relative;
        top: 1.5px;
        border-left: 0;
        border-right: 0;
        color: #9e0100;
    }
    .btn3{
        width: 410px;
        height: 45px;
        border: 0;
        color: #fff;
        background-color: #9e0100;
        display: block;
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 22.5px;
        cursor: pointer;
    }
    .two{
        margin: 0 auto;
        text-align: center;
        font-size: 24px;
        color: #9e0100;
    }
    .firstOne>input{
        width: 158px;
        height: 30px;
        box-sizing: border-box;
        margin-left: 18px;
        padding-left: 8px;
    }   
    .firstOne>button{
        margin-left: 18px;
    }
    .last>button{
        width: 158px;
        height: 30px;
        border: 1px solid #eeeeee;
        line-height: 30px;
        background-color: #fff;
        cursor: pointer;
    }
    .last>button>img{
        position: relative;
        top: 4px;
    }
    .content3{
        width: 720px;
        height: 480px;
        margin: 0 auto;
        opacity: 1;
        background-color: #ffffff;
    }
    .content3>p{
        padding-left: 230px;
    }
    .content3>p:first-child{
        padding-left: 16px;
    }
    .content3>p+p{
        margin-top: 35px;
    }
    .pl1>input{
        margin-left: 45px;
    }
    .pl2>input{
        margin-left: 30px;
    }
    .pl2>input+button{
        border: 0px;
        background-color: #fff;
        color: #9e0100;
        font-size: 14px;
        cursor: pointer;
    }
    .sl>.img2,.sl>.img5{
        left:638px;
    }
    .sl>.img3,.sl>.img4{
        left: 610px;
    }
    .citys{
        width: 160px;
        height: 32px;
        margin-left: 18px;
        border: 1px solid #eeeeee;
        color: #999999;
    }
    .citys option{
        color: #000;
    }
</style>
