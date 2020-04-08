<template>
    <div class="content">
        <div class="tab">
            <span class="selected">所有反馈</span>
        </div>
        <div id="sy">
            <table>
                <tr>
                    <td>编号</td>
                    <td>反馈用户</td>
                    <td>反馈类型</td>
                    <td>主要行为</td>
                    <td>反馈对象</td>
                    <td>发起时间</td>
                    <td>处理状态</td>
                    <td>操作</td>
                </tr>
                <tr>
                    <td>10001</td>
                    <td>用户012345</td>
                    <td>投诉类</td>
                    <td>非专业投诉</td>
                    <td>用户012345</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10002</td>
                    <td>用户012345</td>
                    <td>投诉类</td>
                    <td>非专业投诉</td>
                    <td>用户04235</td>
                    <td>2019.04.29</td>
                    <td class="ysl">已受理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10003</td>
                    <td>用户00835</td>
                    <td>举报</td>
                    <td>虚假交易</td>
                    <td>用户00835</td>
                    <td>2019.04.29</td>
                    <td class="ysl">已受理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10004</td>
                    <td>用户04575</td>
                    <td>举报</td>
                    <td>不正当竞争</td>
                    <td>用户04575</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10005</td>
                    <td>用户54565</td>
                    <td>投诉类</td>
                    <td>骚扰用户</td>
                    <td>用户54565</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10006</td>
                    <td>用户36515</td>
                    <td>申请</td>
                    <td>服务器延迟</td>
                    <td>用户36515</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10007</td>
                    <td>用户14735</td>
                    <td>建议</td>
                    <td>平台功能</td>
                    <td>用户14735</td>
                    <td>2019.04.29</td>
                    <td class="ysl">已受理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10008</td>
                    <td>用户84755</td>
                    <td>申请</td>
                    <td>保证金授信</td>
                    <td>用户84755</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10009</td>
                    <td>用户32535</td>
                    <td>投诉类</td>
                    <td>专业类投诉</td>
                    <td>用户32535</td>
                    <td>2019.04.29</td>
                    <td class="ysl">已受理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10010</td>
                    <td>用户70135</td>
                    <td>举报</td>
                    <td>骗取用户财产</td>
                    <td>用户70135</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
                <tr>
                    <td>10011</td>
                    <td>用户70135</td>
                    <td>建议</td>
                    <td>服务监督</td>
                    <td>用户70135</td>
                    <td>2019.04.29</td>
                    <td class="wcl">未处理</td>
                    <td @click="show($event)">详情</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.$emit('updatetitle','5')
        },
        methods: {
            show(e){
                var el=e.target;
                if(el.previousSibling.innerHTML=="已处理"){
                    this.$store.commit("changeTrueToast4")
                }else if(el.previousSibling.innerHTML=="未处理"){
                    this.$store.commit("changeTrueToast43")
                }else if(el.previousSibling.innerHTML=="已受理"){
                    this.$store.commit("changeTrueToast42")
                }
            }
        },
        components:{
            
        }
    }
</script>

<style scoped>
    .content{
        width: 1055px;
        padding:25px;
        background: #fff;
        box-sizing: border-box;
    }
    table{
        width: 100%;
        margin-top:30px;
        border-collapse: collapse;
    }
    table td{
        height: 45px;
        text-align: center;
        border: 0;
        color: #999;
        font-size: 18px;
    }
    td a{
        color: #999;
        text-decoration:none;
    }
    table tr:nth-of-type(1) td{
        background: #fafafa;
        color: #555;
    }
    .tab>span{
        font-size: 20px;
        line-height: 28px;
        color: #dddddd;
        margin-right: 25px;
        cursor: pointer;
    }
    .tab>span.selected{
        color: #9e0100;
    }
    .ysl{
        color: #19ac92;
    }
    .ycl{
        color: #287fe2;
    }
    .wcl{
        color: #9e0100;
    }
</style>