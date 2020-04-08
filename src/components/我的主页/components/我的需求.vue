<template>
    <div class="我的需求" id="glgz">
        <p class="wodexuqiu_title">我的需求<span class="more"  @click="showMore">查看更多</span></p>
        <div class="info">
            <template>
                <img src="../../../assets/imgs/xq.png" alt="">
                <div>
                    <p>暂无服务订单！<br/>找人才为您做企业服务</p>
                    <router-link class="xqbtn" to=""  @click="showTwo">
                        发布需求
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import Bus from '../../../bus.js'
import toastJS from '../../../data/toast.js'
    export default {
       name:'my-requirements',
       data() {
        return {
            requireList:simData.requireList,
            toastJS,
            }
        },
        methods:{
            showTwo(){
                Bus.$emit('arrs',toastJS.wdxq.arrTwo)
                this.$store.commit("changeToastZjTrue")
            },
            closeAll(){
                this.$store.commit("changeToastZjFalse");
            },
            // 这里是需要执行的sj事件
            /*showNext(){
                Bus.$emit('arrs',this.arrTwoOne)
            }*/
            showMore(){
                Bus.$emit('arrs',toastJS.wdxq.arrThree)
                this.$store.commit("changeToastZjTrue")
            }
        }
    }
</script>

<style scoped>
    .我的需求{
        background: #fff;
        box-sizing: border-box;
        padding: 25px;
        margin-bottom: 20px;
    }
    .wodexuqiu_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }
    .wodexuqiu_title span.more{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #cccccc;
    }
    .info{
        display: flex;
        justify-content: center;
    }
    .info>div{
        box-sizing: border-box;
        padding-top: 30px;
        margin-left: 40px;
    }
    .info>div p{
        line-height: 30px;
        margin-bottom: 10px;
    }
    .xqbtn{
        display: flex;
        width: 300px;
        height: 51px;
        border-radius: 26px;
        border: solid 1px #9e0100;
        color: #9e0100;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 415px) {
        .我的需求{
            padding: 8px;
        }
        .wodexuqiu_title{
            margin:0 0 16px 0 !important;
        }
        .info{
            display: flex;
            flex-direction: column;
        }
        .info>div{
            margin: 0 auto;
            margin-bottom: 8px;
            padding-top: 16px;
        }
        .info>div>p{
            text-align: center;
        }
        .info>div>a{
            height: 32px;
            width: 160px;
        }
    }
</style>