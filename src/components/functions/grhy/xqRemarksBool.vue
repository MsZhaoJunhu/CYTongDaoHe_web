<template>
    <div class="hiddenPar" v-show="nowNumber==0">
        <div class="hiddenParDiv">
            <div class="hiddenParDiv_title">
                <span>服务备注</span>
                <span @click="chanegProps">×</span>
            </div>
            <div class="hiddenParDiv_body">
                <div>
                    <textarea v-model="textareaValue" placeholder="请输入服务备注内容" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button @click="chanegProps2">确定</button>
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
            textareaValue:"",
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
        chanegProps2(){
            if(this.textareaValue){
                this.nowNumberC=1;
                this.$emit('change', this.nowNumberC)
                this.$emit('changeValue', this.textareaValue)
                this.$emit('iCanServer', 0)
            }else{
                this.$message({
                    showClose: true,
                    message: "操作失败！您服务备注不能为空",
                    type: "error"
                });
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
        border-radius: 1rem;
        overflow: hidden;
    }
    .hiddenParDiv_title{
        width: 100%;
        height: 100px;
        background: rgba(246,246,246,1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        box-sizing: border-box;
    }
    .hiddenParDiv_title>span{
        display: block;
        width: auto;
        height: auto;
        padding: 0.5rem;
        font-size: 20px;
        line-height: 20px;
    }
    .hiddenParDiv_title>span:last-child{
        cursor: pointer;
        font-size: 34px;
    }
    .hiddenParDiv_body{
        width: 100%;
        height: auto;
    }
    .hiddenParDiv_body>div{
        display: flex;
        align-items: center;justify-content: center;
    }
    .hiddenParDiv_body>div:first-child{
        height: 300px;
        padding: 30px 0;
        box-sizing: border-box;
        border: 1px solid #999;
    }
    .hiddenParDiv_body>div:first-child>textarea{
        width: 80%;
        height: 80%;
        padding: 12px;
        text-indent: 2em;
        resize: none;
        font-size: 20px;
        line-height: 1.5rem;
    }
    .hiddenParDiv_body>div:first-child>textarea::-webkit-scrollbar {
        width: 10px;
    }
    /* 滚动槽 */
    .hiddenParDiv_body>div:first-child>textarea::-webkit-scrollbar-track {
        border-radius: 8px;
    }
    /* 滚动条滑块 */
    .hiddenParDiv_body>div:first-child>textarea::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, 0);
        box-shadow: 8px 0 0 #999 inset;
    }
    .hiddenParDiv_body>div:last-child{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .hiddenParDiv_body>div>button{
        border: 1px solid #9e0100;
        background: #9e0100;
        color: #fff;
        width: 4rem;
        height: 2rem;
        border-radius: 4px;
        line-height: 2rem;
        text-align: center;
        cursor: pointer;
        margin-top: 1rem;
        margin-right: 2.5rem;
    }
</style>