<template>
    <div class="内容">
        <div class="item">
            <h1>
                <span>01</span>
                <p>服务内容及要求</p>
            </h1>
            <jihua></jihua>
        </div>

        <div class="item">
            <h1>
                <span>01</span>
                <p>服务内容及要求</p>
            </h1>
            <jc model="2" :step="0" start-time="2019.01.02" end-time="2019.06.18">
                <p class="事件描述" slot="ms">事件描述事件描述事件描述事件描述事件描述事件描述事件描述</p>
            </jc>
        </div>

        <div class="item">
            <h1>
                <span>01</span>
                <p>服务内容及要求</p>
            </h1>
            <jc model="2" :step="3" start-time="2019.01.02" end-time="2019.06.18">
                <span class="money" slot="ms">￥50000</span>
            </jc>
        </div>

        <div class="item">
            <h1>
                <span>01</span>
                <p>服务内容及要求</p>
            </h1>
            <pj :jieduan="3"></pj>
        </div>

        <div class="item">
            <h1>
                <span>01</span>
                <p>服务内容及要求</p>
            </h1>
            <pl :is-show="false" :is-padding="true"></pl>
        </div>

    </div>
</template>

<script>
    import jihua from '../components/计划模板'
    import jc from '../components/进程模板'
    import pj from '../components/评价模板'
    import pl from '../../../public/评论'
    export default {
        components:{
            jihua,
            jc,
            pj,
            pl
        }
    }
</script>

<style scoped>

    .item{
        display: flex;
        padding: 45px 0;
    }
    .item h1{
        display: block;
        width: 204px;
        flex-shrink: 0;
        border-right:1px solid #dddddd;
        /*margin-right: 35px;*/
    }
    .item h1 span{
        display: inline-block;
        font-size: 30px;
        padding: 0 2px;
        color: #353535;
        font-weight: bold;
        position: relative;
        border-top: 4px solid #484848;
    }
    .item h1 span:after{
        content:'';
        display: block;
        width: 7px;
        height: 7px;
        background-color: #484848;
        border-radius:50%;
        position: absolute;
        bottom: 6px;
        right: -8px;
    }
    .item h1 span{
        flex-shrink: 0;
    }
    .item h1 p{
        font-weight: bold;
        font-size: 18px;
        color: #353535;
    }
    .事件描述{
        margin-top: 10px;
        font-family: HiraginoSansGB-W3;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #8a8a8a;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .事件描述:after{
        position: absolute;
        top: -25px;
        border-radius: 50%;
        content: '';
        display: block;
        width: 134px;
        height: 134px;
        background-color: #a10908;
        opacity: 0.03;
    }
    .money{
        margin-top: 10px;
        width: 88px;
        height: 28px;
        background-color: #9e0100;
        border-radius: 3px;
        font-family: HiraginoSansGB-W3;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>