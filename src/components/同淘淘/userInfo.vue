<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <el-row type="flex" justify="center" align="center" class="orderPar">
                    <el-col :span="4">
                        <div class="userInfo">
                            <img src="../../assets/tao/userImg.png" alt="">
                            <p>15213280546</p>
                            <router-link to="order">我的订单</router-link>
                            <router-link to="userInfo">账户资料</router-link>
                            <router-link to="userAdress">收货地址</router-link>
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="1">
                        <div class="userOrder">
                            <div class="userOrder_title">
                                <span>账户资料</span>
                            </div>
                            <div class="userInfo_fun">
                                <div>
                                    <p>账户昵称</p>
                                    <p>未设置</p>
                                </div>
                                <span>现在设置</span>
                            </div>
                            <div class="userInfo_fun">
                                <div>
                                    <p>手机验证</p>
                                    <p>您的验证手机:152****0546</p>
                                </div>
                                <span>修改</span>
                            </div>
                            <div class="userInfo_fun">
                                <div>
                                    <p>登录密码</p>
                                    <p>互联网账号存在被盗风险，建议您定期更改密码以保护账号安全。</p>
                                </div>
                                <span>修改</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import TaoHeader from './taoheader'
export default {
    data () {
        return {
            
        }
    },
    components: {
        header_,
        TaoHeader,
    },
    methods: {
        
    }
}
</script>
<style scoped>
    .taoIndex {
        height: 100%;
        background: rgba(237, 237, 237, 1);
    }
    .taoswiper {
        margin-top: 130px;
    }
    .userInfo{
        width: 100%;
        height: auto;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        border-radius: 0.5rem;
    }
    .userInfo>p,.userInfo>a{
        display: block;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
    }
    .userInfo>a{
        border-top: 1px solid rgb(197, 196, 196);
        font-size: 14px;
    }
    .userInfo>a:hover{
        background-color: #9e0000;
        color: #fff;
    }
    .userInfo>a:last-child:hover{
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
    .orderPar{
        padding: 2rem 0;
    }
    .userOrder{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        background-color: #fff;
    }
    .userOrder_title{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 0.5rem 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(212, 212, 212);
    }
    .userOrder_title>span{
        font-size: 18px;
        font-weight: bold;
        color: #777777;
    }
    .userInfo_fun{
        width: 100%;
        height: 120px;
        padding: 0 1.5rem;
        border-bottom: 1px solid rgb(212, 212, 212);
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .userInfo_fun:last-child{
        border: 0;
    }
    .userInfo_fun>span{
        color: #9e0000;
        cursor: pointer;
    }
    .userInfo_fun>div>p:first-child{
        font-weight: bold;
        font-size: 14px;
    }
    .userInfo_fun>div>p:last-child{
        color: #777;
        font-size: 14px;
    }
</style>
