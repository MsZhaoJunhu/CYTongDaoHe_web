<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <div class="receiving">
                    <img src="../../assets/tao/paySuccess.png" alt="">
                    <p>支付成功</p>
                    <p>描述描述描述</p>
                    <button @click="backToHome">返回商城首页</button>
                </div>
                <div class="receiving" style="display:none;">
                    <img src="../../assets/tao/payFail.png" alt="">
                    <p>支付失败</p>
                    <p>描述描述描述</p>
                    <button @click="backToHome">返回商城首页</button @click="backToHome">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import header_ from '@/components/public/头部'
    import TaoHeader from './taoheader'
    export default{
        data () {
            return {
                
            }
        },
        components: {
            header_,
            TaoHeader,
        },
        methods: {
            backToHome(){
                this.$router.push('taoIndex')
            }
        }
    }
</script>
<style scoped>
    .taoIndex {
        background: rgba(237, 237, 237, 1);
        padding-bottom: 4rem;
    }
    .taoswiper {
        height: auto;
        margin-top: 130px;
    }
    .receiving{
        height: 560px;
        background-color: #FFF;
        border-radius: 1rem;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .receiving>p:nth-child(2){
        font-size: 26px;
        font-weight: bold;
        line-height: 60px;
    }
    .receiving>p:nth-child(3){
        color: #999;
        margin-top: 0.5rem;
        margin-bottom: 4rem;
    }
    .receiving>button{
        width: 140px;
        height: 44px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #999;
        border-radius: 4px;
        color: rgb(95, 95, 95);
        cursor: pointer;
    }
</style>