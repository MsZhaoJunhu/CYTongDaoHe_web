<template>
    <div class="toast-toast" v-show="$store.getters.getToast4Flag1">
        <div class="content_toast" v-show="$store.getters.getToast4Flag2">
            <p class="one">
                <span>
                    <img src="../../assets/close.png" alt="close" @click="closeToast()">
                </span>
            </p>
            <p class="two">
                <span>反馈编号：</span><span class="nr">10005</span>
                <span>受理部门：</span><span class="nr">同道合服务中心</span>
                <span>受理期限：</span><span class="nr">3天内</span>
                <span>反馈用户：</span><span class="nr">用户01235</span>
                <span>反馈时间：</span><span class="nr">2019.04.29</span>
                <span>联系电话：</span><span class="nr">18******14</span>
                <span>主要类型：</span><span class="nr">举报</span>
                <span>主要行为：</span><span class="nr">虚假交易</span>
            </p>
            <p class="three">
                <span>反馈对象：</span><span class="nr">用户456</span>
                <span>处理状态：</span><span class="nr zt" style="color:#287fe2">已处理</span>
            </p>
            <div class="four">
                <p>反馈内容：</p>
                <span>
                    涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易
                </span>
            </div>
            <div class="five">
                <div>
                    <p>受理部门的意见：</p>
                    <span>
                        受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见
                    </span>
                </div>
                <div>
                    <p>处理结果：</p>
                    <span>
                        处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果
                    </span>
                </div>
            </div>
        </div>
        <div class="content_toast" v-show="$store.getters.getToast4Flag3">
            <p class="one">
                <span>
                    <img src="../../assets/close.png" alt="close" @click="closeToast()">
                </span>
            </p>
            <p class="two">
                <span>反馈编号：</span><span class="nr">10005</span>
                <span>受理部门：</span><span class="nr">同道合服务中心</span>
                <span>受理期限：</span><span class="nr">3天内</span>
                <span>反馈用户：</span><span class="nr">用户01235</span>
                <span>反馈时间：</span><span class="nr">2019.04.29</span>
                <span>联系电话：</span><span class="nr">18******14</span>
                <span>主要类型：</span><span class="nr">举报</span>
                <span>主要行为：</span><span class="nr">虚假交易</span>
            </p>
            <p class="three">
                <span>反馈对象：</span><span class="nr">用户456</span>
                <span>处理状态：</span><span class="nr zt" style="color:#28b299">已受理</span>
            </p>
            <div class="six">
                <p>反馈内容：</p>
                <span>
                    涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易
                </span>
            </div>
        </div>
        <div class="content_toast jg" v-show="$store.getters.getToast4Flag4">
            <p class="one">
                <span>
                    <img src="../../assets/close.png" alt="close" @click="closeToast()">
                </span>
            </p>
            <p class="two">
                <span>反馈编号：</span><span class="nr">10005</span>
                <span>受理部门：</span><span class="nr">同道合服务中心</span>
                <span>受理期限：</span><span class="nr">3天内</span>
                <span>反馈用户：</span><span class="nr">用户01235</span>
                <span>反馈时间：</span><span class="nr">2019.04.29</span>
                <span>联系电话：</span><span class="nr">18******14</span>
                <span>主要类型：</span><span class="nr">举报</span>
                <span>主要行为：</span><span class="nr">虚假交易</span>
            </p>
            <p class="three">
                <span>反馈对象：</span><span class="nr">用户456</span>
                <span>处理状态：</span><span class="nr zt" style="color:#9e0100">未处理</span>
            </p>
            <div class="six">
                <p>反馈内容：</p>
                <div class="sixDiv">
                    <div>
                    涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易涉嫌于某某用户进行虚假交易
                    </div>
                </div>
                <button>
                    <img src="" alt="">
                    <span>编辑信息</span>
                </button>
            </div>
            <div>
                <button>撤回举报</button>
                <button>确认修改</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        closeToast(){
            this.$store.commit("changeFalse");
        },
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
        height: 466px;
        margin: 0 auto;
        background-color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 54px;
    }
    .content_toast>p{
        font-size: 14px;
    }
    .content_toast>p+p{
        margin-top: 20px;
    }
    .one{
        display: flex;
        flex-direction: row-reverse;
        padding-top: 13px;
        padding-bottom: 20px;
    }
    .one img{
        cursor: pointer;
    }
    .nr{
        display: inline-block;
        width: 150px;
        line-height: 20px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color: #888888;
    }
    .two{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .two>span:nth-child(n+7){
        margin-top: 18px;
    }
    .four{
        padding-top: 20px;
    }
    .four>p{
        margin-bottom: 15px;
    }
    .four>span{
        display: inline-block;
        width: 100%;
        height: 45px;
        color: #888888;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
    }
    .five{
        padding-top: 32px;
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #efefef;
    }
    .five>div{
        width: 48%;
    }
    .five>div>p{
        margin-bottom: 15px;
    }
    .five>div>p+span{
        display: inline-block;
        height: 61px;
        padding-right: 30px;;
        color: #888888;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;
    }
    .five>div:first-child{
        border-right: 1px solid #efefef;   
    }
    .three>.nr{
        position: relative;
        top: 4px;
    }
    .six{
        padding-top: 32px;
        margin-top: 32px;
        border-top: 1px solid #efefef;
    }
    .six>p{
        margin-bottom: 15px;
    }
    .six>p+span{
        display: inline-block;
        height: 61px;
        padding-right: 30px;;
        color: #888888;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;
    }
    .jg{
        height: 560px;
    }
    .sixDiv{
        width: 680px;
        height: 120px;
        padding: 17px;
        box-sizing: border-box;
        color: #bbbbbb;
        background-color:#fafafa; 
        margin-bottom: 20px;
    }
    .sixDiv>div{
        width: 100%;
        height: 86px;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:4;
    }
    .sixDiv+button{
        width: 114px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid #dddddd;
        background-color: #fff;
        color: #666666;
    }
    .six+div{
        width: 100%;
        height: 128px;
        margin: 0 auto;
        padding-top: 45px;
        padding-left: 141px;
        box-sizing: border-box;
    }
    .six+div>button{
        width: 180px;
        height: 42px;
        border: 0px;
        border-radius: 21px;
        color: #fff;
        background-color: #9e0100;
    }
    .six+div>button:first-child{
        background-color: #c95e5e;  
        margin-right: 40px;  
    }
</style>