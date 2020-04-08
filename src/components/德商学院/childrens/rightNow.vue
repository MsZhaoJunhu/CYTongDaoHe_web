<template>
    <div class="hiddenPar" v-show="nowNumber==0">
        <div class="hiddenParDiv">
            <div class="hiddenParDiv_title">
                <span>报名-填写相关信息</span>
                <span @click="chanegProps">X</span>
            </div>
            <div class="hiddenParDiv_body">
                <div>
                    <span>活动名称：</span>
                    <input type="text" v-model="activeName" placeholder="公益活动的名称" disabled>
                </div>
                <div>
                    <span>活动组织方：</span>
                    <input type="text" v-model="activeCom" placeholder="组织方所在公司名称" disabled>
                </div>
                <div>
                    <span>您的姓名：</span>
                    <input type="text" v-model="yourName" placeholder="请输入您的姓名">
                </div>
                <div>
                    <span>所在城市：</span>
                    <select v-model="cityCode">
                        <option value="A10">北京</option>
                        <option value="A20">上海</option>
                    </select>
                </div>
                <div>
                    <span>联系电话：</span>
                    <input type="text" v-model="phoneNumber" placeholder="请输入您的电话" @blur="checkYourPhone">
                </div>
                <div>
                    <span>联系电话：</span>
                    <div>
                        <button @click="clickToInputerNumber">-</button>
                        <input type="text" disabled :value="inputNumber">
                        <button @click="clickToAddInputerNumber">+</button>
                    </div>
                </div>
                <div>
                    <button>确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nowNumberC:"",
            // 人数
            inputNumber:1,
            // 电话
            phoneNumber:"",
            phoneBoolean:false,
            // 名字
            yourName:"",
            // 活动名称
            activeName:"",
            // 活动组织方
            activeCom:"",
            // 城市
            cityCode:"",
        }
    },
    props:{
        nowNumber:{
            type:Number,
        }
    },
    methods: {
        clickToAddInputerNumber(){
            this.inputNumber++;
        },
        clickToInputerNumber(){
            if(this.inputNumber>1){
                this.inputNumber--;
            }else{

            }
        },
        chanegProps(){
            this.nowNumberC=1;
            this.$emit('change', this.nowNumberC)
        },
        checkYourPhone(){
            let reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
            if (!reg.test(this.phoneNumber)) {
                this.$message({
                    showClose: true,
                    message: "请输入正确的手机号码",
                    type: "error"
                });
                this.phoneBoolean=false;
            }else{
                this.phoneBoolean=true;
            }
        }
    },
    mounted(){
    }
}
</script>
<style scoped>
    .hiddenPar{
        width: 100%;
        height: 100%;
        background-color: rgba(00,00,00,0.7);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .hiddenParDiv{
        width: 720px;
        height: 480px;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hiddenParDiv_title{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
    }
    .hiddenParDiv_title>span{
        display: block;
        width: auto;
        height: auto;
        padding: 0.5rem;
        font-size: 20px;
        line-height: 20px;
    }
    .hiddenParDiv_title>span:first-child::before{
        content: '|';
        font-size: 20px;
        font-weight: bolder;
        line-height: 20px;
        color: #9e0100;
    }
    .hiddenParDiv_title>span:last-child{
        cursor: pointer;
    }
    .hiddenParDiv_body{
        width: 100%;
        height: auto;

    }
    .hiddenParDiv_body>div{
        height: 2.8rem;
        display: flex;
        align-items: center;justify-content: center;
    }
    .hiddenParDiv_body>div>span{
        display: block;
        width: 5rem;
        text-align: right;
    }
    .hiddenParDiv_body>div>span+*{
        width: 14rem;
        height: 1.5rem;
        text-indent: 0.5rem;
        outline: none;
    }
    .hiddenParDiv_body>div>span+div{
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        align-items: center;
    }
    .hiddenParDiv_body>div>span+div>button{
        height: 1.5rem;
        width: 1.5rem;
        background: #fafafa;
        box-sizing: border-box;
        border: 1px solid #999;
        cursor: pointer;
    }
    .hiddenParDiv_body>div>span+div>button:first-child{
        border-right: 0px;
    }
    .hiddenParDiv_body>div>span+div>button:last-child{
        border-left: 0px;
    }
    .hiddenParDiv_body>div>span+div>button+input{
        height: 1.5rem;
        box-sizing: border-box;
        text-align: center;
    }
    .hiddenParDiv_body>div>button{
        border: 1px solid #9e0100;
        background: #9e0100;
        color: #fff;
        width: 10rem;
        height: 2rem;
        border-radius: 1rem;
        line-height: 2rem;
        text-align: center;
        cursor: pointer;
    }
</style>