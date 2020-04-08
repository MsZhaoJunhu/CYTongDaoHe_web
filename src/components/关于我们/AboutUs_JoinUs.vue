<template>
    <div >
       <header_ :select_index="7"/>
        <div class="banner">
            <img src="../../assets/imgs/AboutUs_banner.png" alt="行业最新信息及相关公司活动" />
        </div>
        <div class="main">
            <div class="content">
                <div>
                    <div class="text" style="height:31.25rem">
                        <h1>发展战略</h1>
                        <p class="special">First year</p>
                        <ul>
                            <li v-for="i in arr" class="plan">
                                <span>{{i}}</span>
                            </li>
                        </ul>
                        <div class="arrow">
                            <i></i>
                            <!--左箭头-->
                            <i></i>
                            <!--右箭头-->
                        </div>
                    </div>
                    <div class="special">DEVELOPME</div>
                </div>

                <div>
                    <img src="../../assets/imgs/AboutUs_JoinUs1.png" />
                </div>
            </div>
            <div class="content">
                <div>
                    <img src="../../assets/imgs/AboutUs_JoinUs2.png" />
                    <div class="special" style="text-align: right">CORE COMPETENCE</div>
                </div>
                <div>
                    <div class="special" style="margin-top:0">ADVANTAGE</div>
                    <div class="text" style="margin-top: 1rem;">
                        <h1>平台优势</h1>
                        <p>需求精准对接、专业服务大数据、交易模式便捷、全程服务专业监理、资金安全保障、海量资讯速递、企业家互助成长。</p>
                    </div>
                    <div class="text" style="margin-top: 2.5rem;">
                        <h1>核心竞争力</h1>
                        <p>强大的股东背景、专业的技术团队、庞大的企业资源、优质的服务资源、高效的运营模式、健全的保障体系。</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="text">
                    <p>
                        我们求贤若渴！您，是人才吗？
                        <br />预备，GO！
                    </p>
                    <div class="jrwm" @click="xs()"></div>
                </div>
                <div>
                    <img src="../../assets/imgs/AboutUs_JoinUs3.png" />
                </div>
            </div>
        </div>

        <toast3 class="toast"></toast3>
        
         <footer_ />
    </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import toast3 from '../弹窗/toast3.vue'
export default {
    data() {
        return {
            arr: [
                '平台上线运营', '建立企业大数据库、服务商大数据库，引进1000家企业、100家服务商入库', '建立个人会员（企业家）数据库、引入100名企业家', '新增商协会5家'
            ],          
            
        }
    },
    components: {
        toast3, 
        header_,
        footer_,
    },
    methods: {
        xs(){
            this.$store.commit("changeTrueToast3");
        }
    },
    
    

}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s ease;
}
.fade-enter,
.fade-leave-to {
    transform: translateY(-10rem);
    opacity: 0;
}

.app {
    background: #fafafa;
}
.content > div > img {
    width: 56.875rem;
}
.banner {
    width: 100%;
    min-width: 87.5rem;
    position: relative;
}
.banner img {
    width: 100%;
}
.main {
    background: #fafafa;
    position: relative;
    width: 87.5rem;
    margin: 0 auto;
    padding: 2.5rem 0;
}
.content {
    margin-top: 2.5rem;
    display: flex;
}
.content > div:nth-of-type(1) {
    margin-right: 1.875rem;
}
.content .text {
    background: #fff;
    padding: 3.75rem 2.2rem;
    box-sizing: border-box;
    position: relative;
}
.content .text > h1 {
    color: #353535;
    font-size: 1.875rem;
    margin-bottom: 3.4375rem;
    position: relative;
}
.content .text > h1::after {
    content: "";
    height: 0.0625rem;
    width: 7.5rem;
    background: #000;
    display: block;
    position: absolute;
    bottom: -1.25rem;
}
.content .text > p {
    font-size: 0.94rem;
    line-height: 2.25rem;
    color: #7a7a7a;
}
.content .text > p.special {
    font-size: 1.5rem;
    color: #9e0100;
    font-weight: 300;
    margin-bottom: 1rem;
}
.content .text .arrow {
    position: absolute;
    bottom: 2rem;
    right: 1.875rem;
}
.content .text .arrow > i {
    background: url(../../assets/icon/arrow.png) no-repeat;
    background-position: center;
    background-size: 200%;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    opacity: 0.5;
}
.content .text .arrow > i:hover {
    opacity: 1;
}
.content .text .arrow > i:nth-of-type(1) {
    margin-right: 1.5rem;
    background-position-x: 0;
}
.content .text .arrow > i:nth-of-type(2) {
    background-position-x: -1.5rem;
}
.content div.special {
    font-size: 4.63rem;
    color: #9e0100;
    opacity: 0.03;
    margin-top: 2.5rem;
}
.plan {
    position: relative;
    left: 1.3rem;
    padding-right: 1.3rem;
    list-style-type: square;
    color: #9e0000;
    margin: 0.2rem 0;
}
.plan > span {
    color: #7a7a7a;
    font-size: 0.93rem;
    line-height: 2rem;
}
.content:nth-of-type(3) .text {
    margin-right: 0;
    width: 30.75rem;
    height: 18.75rem;
}
.content:nth-of-type(3) .text p {
    font-size: 1.87rem;
    line-height: 3rem;
    color: #353535;
    margin-bottom: 1.875rem;
}
.rczc {
    width: 37.5rem;
    padding: 1.875rem 0.9375rem;
    box-sizing: border-box;
    display: flex;
}
.rczc > div {
    margin-left: 2.5rem;
}
.rczc .jrwm {
    font-size: 0.875rem;
    height: 0.5rem;
    width: 6.75rem;
}
.rczc > div > p {
    color: #9a9a9a;
    font-size: 1rem;
}
.rczc .zc {
    width: 23rem;
    height: 3.1875rem;
    line-height: 3.1875rem;
    text-align: center;
    background-color: #9e0100;
    border-radius: 1.625rem;
    color: #fff;
    font-size: 1.125rem;
    cursor: pointer;
    margin-top: 2.1875rem;
    box-shadow: 0 0.1875rem 0.5625rem #dd7272;
}
.input_ {
    width: 23rem;
    height: 2.5rem;
    padding: 0.9375rem;
    font-size: 0.875rem;
    box-sizing: border-box;
    margin: 0.9375rem 0;
    background-color: #ffffff;
    border: solid 0.0625rem #e6e6e6;
}
input::-webkit-input-placeholder {
    color: #bbb;
}
input:-ms-input-placeholder {
    color: #bbb;
}
label {
    font-size: 0.75rem;
    color: #aeaeae;
}
label + a {
    font-size: 0.75rem;
    color: #979797;
    text-decoration: none;
}
input[type="checkbox"].choice_checkbox {
    margin: 0;
    width: 1rem;
    height: 1rem;
    background-color: #eaeaea;
    -webkit-appearance: none;
    outline: none;
    position: relative;
    vertical-align: middle;
    margin-right: 0.625rem;
}
input[type="checkbox"].choice_checkbox:checked {
    background: url(../../assets/icon/check_m.png) no-repeat;
    background-size: 100%;
}
.hint {
    width: 45rem;
    height: 22.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hint > div {
    text-align: center;
}
.hint > div > p {
    font-size: 1.5rem;
    color: #9e0100;
    margin-top: 0.25rem;
}
.hint_button {
    color: #fff;
    margin-top: 2.5rem;
    background: #9e0100;
    min-width: 25.625rem;
    height: 2.8125rem;
    line-height: 2.8125rem;
    border-radius: 1.625rem;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.5rem #e2e2e2;
}
.hint > div > div > .hint_button {
    min-width: 0;
    width: 12.5rem;
}
.hint > div > div > .hint_button:nth-child(2) {
    margin-left: 2.5rem;
    background: #bbb;
}
.hqyzm {
    font-size: 0.875rem;
    width: 6.75rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    background-color: #9e0100;
    bottom: 0;
    cursor: pointer;
    user-select: none;
}
.hqyzm_not {
    background-color: #999;
    cursor: not-allowed;
}
.jrwm {
    font-size: 1.38rem;
    width: 12.375rem;
    height: 3.375rem;
    line-height: 3.3rem;
    text-align: center;
    color: #fff;
    background-color: #9e0100;
    background: url(../../assets/imgs/JoinUs_button.png) no-repeat;
    background-size: 100%;
    bottom: 0;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 0 #dfdcd9;
    cursor: pointer;
}
.jrwm:hover {
    background: url(../../assets/imgs/JoinUs_button_hover.png) no-repeat;
    background-size: 100%;
}
.jrwm:active {
    background: url(../../assets/imgs/JoinUs_button.png) no-repeat;
    background-size: 100%;
}
.preload {
    display: none;
    width: 0;
    opacity: 0;
}
.toast{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
}
</style>