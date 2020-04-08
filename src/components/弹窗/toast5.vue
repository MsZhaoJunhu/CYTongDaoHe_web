<template>
    <div class="toast-toast" v-show="$store.getters.getToast5Flag1">
        <div class="content_toast">
            <div class="top_toast">
                <span>
                    <span></span>考试结果
                </span>
                <div>
                    <img src="../../assets/close.png" alt="close" @click="closeToast()">
                </div>
            </div>
            <div class="bottom_toast">
                <div>
                    <img src="../../assets/kscj.png" alt="">
                </div>
                <span>{{score}} <span>分</span> </span>
                <p v-if="flag1">很遗憾！考试未通过，请明天再来。</p>
                <p v-if="flag2">恭喜您！考试通过！！！</p>
                <button class="TJ" @click="closeToast()" >完成</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            score:70,
            flag1:true,
            flag2:false,
        }
    },
    methods: {
        closeToast(){
            this.$store.commit("changeFalse");
        }
    },
}
</script>
<style scoped>
    .toast-toast{
        width: 100%;
        height: 100%;
        background-color: rgba(00,00,00,0.7);
        box-sizing: border-box;
        padding-top: 10%;
    }
    .content_toast{
        width: 720px;
        height: 400px;
        margin: 0 auto;
        background-color: #fff;
    }
    .top_toast{
        width: 100%;
        height: 43px;
        background-color: #f6f6f6;
        display: flex;
        justify-content: space-between;
    }
    .top_toast>span{
        margin-left: 16px;
        line-height: 43px;
    }
    .top_toast>div{
        padding-top: 14.5px;
        padding-right: 16px;
        cursor: pointer;
    }
    .top_toast>span>span{
        display: inline-block;
        width: 4px;
        height: 15px;
        background-color: #9e0100;
        position: relative;
        top: 2px;
        margin-right: 8px;
    }
    .bottom_toast{
        margin-top: 32px;
        position: relative;
    }
    .bottom_toast>div{
        width: 216px;
        height: 177px;
        margin: 0 auto;
        margin-bottom: 16px;
    }
    .bottom_toast>p{
        text-align: center;
        font-size: 24px;
        color: #9e0100;
        margin-bottom: 24px;
    }
    .bottom_toast>span{
        font-size: 40px;
        font-weight: bold;
        color: #9e0100;
        position: absolute;
        top: 70px;
        left: 340px;
    }
    .bottom_toast>span>span{
        font-size: 17px;
    }
    .TJ{
        width: 410px;
        height: 42px;
        border-radius: 21px;
        border: 0px;
        display: block;
        margin: 0 auto;
        color: #fff;
        background-color: #9e0100;
    }
</style>>
