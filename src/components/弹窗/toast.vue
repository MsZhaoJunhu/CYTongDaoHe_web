<template>
    <div class="toast_toast1" v-show="$store.getters.getToastFlag1">
        <div class="content_toast" v-show="$store.getters.getToastFlag2">
            <p class="sl"><span class="shu"></span>报名-填写相关信息<img src="../../assets/close.png" alt="close" @click="closeToast()" ></p>
            <p>
                <span class="firstOne">活动名称：</span><span>公益活动的名称</span>
                <span class="firstTwo">活动组织方：</span><span>组织方所在的公司名称</span>
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
            <button class="btn3" @click="next()">确定</button>
        </div>
        <div class="content_toast" v-show="$store.getters.getToastFlag3">
            <p class="sl"><span class="shu"></span>报名<img src="../../assets/close.png" alt="close" @click="closeToast()" style="left:630px;" ></p>
            <p class="two">
                <img src="../../assets/take_a_note_2.png" alt="">
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
        next(){
            this.$store.commit("changeTrueTwo");
        },
        changeSelect(e){
            var el=e.target;
            el.style.color="#000"
        },
    },
    created() {

    },
}
</script>
<style scoped>
    .toast_toast1{
        width: 100%;
        height: 100%;    
        background-color: rgba(00,00,00,0.7);
        box-sizing: border-box;
        padding-top: 10%;
        font-size: 14px;
    }
    .content_toast{
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
        left: 550px;
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
    .content_toast>p+p{
        margin-top: 35px;
        padding-left: 16px;
    }
    .firstOne+span,.firstTwo+span{
        margin-left: 27px;
    }
    .firstTwo{
        margin-left: 83px;
    }
    .content_toast>p>input{
        width: 158px;
        height: 30px;
        border: 1px solid #eeeeee;
        margin-left: 18px;
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
