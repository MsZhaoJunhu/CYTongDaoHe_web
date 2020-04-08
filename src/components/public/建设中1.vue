<template>
    <div class="jsz_all">
        <header_ :select_index="3"></header_>
        <xfc></xfc>
        <div class="jsz_img">
            <img src="../../assets/images/jsz.png" alt="">
        </div>
        <p class="jsz_p">该页面正在建设中，敬请期待！</p>
        <footer_></footer_>
    </div>
</template>
<script>
import header_ from './头部'
import footer_ from './底部'
import xfc from '@/components/public/悬浮窗.vue'
export default {
    components: {
            header_,
            footer_,
            xfc,
        },
}
</script>
<style scoped>
    .jsz_all{
        width: 100%;
        height: 100%;
        /* min-width: 1400px; */
    }
    .jsz_img{
        padding: 202px 0 30px 0;
        background: rgba(230, 230, 230);
    }
    .jsz_img>img{
        display: block;
        margin: 0 auto;
    }
    .jsz_p{
        font-size: 26px;
        color: #9e0100;
        text-align: center;
        padding-bottom: 70px;
        background: rgba(230, 230, 230);
    }
    
    @media screen and (max-width: 415px) {
        .jsz_img>img{
            width: 100%;
            height: 100%;
        }
    }
</style>