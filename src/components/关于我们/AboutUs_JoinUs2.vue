<template>
    <div class="app_joinus">
        <header_ :select_index="7"/>
        <xfc></xfc>
        <div class="banner_joinus">
            <img src="../../assets/images/JoinUs_banner.png" alt="行业最新信息及相关公司活动" />
        </div>
        <div class="xml_content">
            <div class="gywm_xlm">
                <span v-for="(item,key) in titleList" :key="key" :class="index_title==key?'fontSty':''" @click="chage(key)">
                    <router-link :to="item.link" >{{item.content}}</router-link>
                </span>
            </div>
        </div>
        <div class="main_joinus">
            <div class="ptys content_joinus">
                <div class="joinUs_title">平台优势</div>
                <div class="jrwm_show">
                    <div class="jrwm_show_box">
                        <div class="join_us_number">01</div>.
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/interview.png" alt />
                            <br />需求精准对接
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="join_us_number">02</div>.
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/big-data.png" alt />
                            <br />专业服务大数据
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="join_us_number">03</div>.
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/money-deposit.png" alt />
                            <br />交易模式便捷
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="join_us_number">04</div>.
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/partnership.png" alt />
                            <br />全程服务专业监理
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="join_us_number">05</div>.
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/safe.png" alt />
                            <br />资金安全保障
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div class="hxjzl content_joinus">
                <div class="joinUs_title">核心竞争力</div>
                <div class="jrwm_show">
                    <div class="jrwm_show_box">
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/group.png" alt />
                            <br />庞大的企业源
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/team.png" alt />
                            <br />优质的服务资源
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/meeting.png" alt />
                            <br />专业的技术团队
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/presentation.png" alt />
                            <br />高效的运营模式
                        </div>
                    </div>
                    <div class="jrwm_show_box">
                        <div class="jrwm_show_conent">
                            <img src="../../assets/images/strategy.png" alt />
                            <br />健全的信用体系
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div class="rcsy content_joinus">
                <div>
                    <div class="joinUs_title">人才收益</div>
                    <div class="rcsy_s">
                        <div class="rcsy_box">
                            <div class="rcsy_content">
                                <img src="../../assets/images/presentation(2).png" alt />
                                <p>意见领袖</p>
                                <p>平台助力提升个人影响力，打造强IP</p>
                            </div>
                        </div>
                        <div class="rcsy_box">
                            <div class="rcsy_content">
                                <img src="../../assets/images/interview(1).png" alt />
                                <p>项目合作</p>
                                <p>发挥专业技能，英雄有用武之地</p>
                            </div>
                        </div>
                        <div class="rcsy_box">
                            <div class="rcsy_content">
                                <img src="../../assets/images/leadership.png" alt />
                                <p>发展机遇</p>
                                <p>打通职业生涯通道，为专业人才提供更多的发展机遇</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rzbz content_joinus">
                <div class="joinUs_title">入驻保障</div>
                <div class="rzbz_box">
                    <div class="rzbz_div">
                        <img src="../../assets/images/mffw.png" alt />
                        <div class="rzbz_text">
                            <p>免费服务</p>
                            <p>平台向共享人才提供免费服务，您在平台上的所有活动，不花一分钱</p>
                        </div>
                    </div>
                    <div class="rzbz_div">
                        <img src="../../assets/images/xxbh.png" alt />
                        <div class="rzbz_text">
                            <p>信息保护</p>
                            <p>人才个人信息绝对保密，仅主动投递时可见</p>
                        </div>
                    </div>
                    <div class="rzbz_div">
                        <img src="../../assets/images/aqhz.png" alt />
                        <div class="rzbz_text">
                            <p>安全合作</p>
                            <p>所有企业用户审核认证，减少风险，提高安全性</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="jrwm_box content_joinus">
                <div class="but_box">
                    <p>
                        我们求贤若渴！您，是人才吗？
                        <br />预备，GO！
                    </p>
                    <div class="jrwm" @click="xs()"></div>
                </div>
                <div>
                    <img src="../../assets/images/JoinUs.png" />
                </div>
            </div>
        </div>

        
        <div class="preload">
            <!--预加载-->
            <img src="../../assets/images/JoinUs_button_hover.png" />
        </div>
        
        <toast3 class="toastAll"></toast3>
         <footer_ />
    </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import modal from '../public/Modal'
import toast3 from '../弹窗/toast3.vue'
import xfc from '@/components/public/悬浮窗.vue'
export default {
    data() {
        return {
            modal_obj: {
                show: false,//模态框是否显示
            },
            hqyzm_time: 0
            ,
            modal_zt: 'rczc',//注册状态
            /*
                rczc:人才注册
                xxws:信息完善
                zccg:注册成功
            */
            modal_ts_zt: null,//提示状态
            /*
                ts:提示->确定退出？
                zcsb:注册失败
            */
            xxws_jd: 0,
            xxws_tab_title: ['基本信息', '教育经历', '培训经历', '专业能力', '工作经验', '教育经历', '培训经历', '专业能力'],
            titleList:[
                {link:"/gywm/aboutus",content:'关于我们'},
                {link:'/gywm/joinus',content:'加入我们'},
                {link:'/gywm/news',content:'公司新闻'}
            ],
            index_title:3,
            drawer: false,
            direction: 'btt',
        }
    },
    methods: {
        modal_show_() {
            //document.body.style.overflow = "hidden";//禁用浏览器滚动

            this.modal_obj.show = true
        },
        register() {//注册事件
            this.modal_zt = 'xxws'//注册成功进入信息完善界面
        },
        modal_close() {//确定要关闭吗
            if (this.modal_zt == 'rczc' || this.modal_zt == 'xxws')//如果在人才注册或信息完善界面
                this.modal_ts_zt = 'ts'//弹出退出提示
            else
                this.close()
        },
        close() {//关闭
            //document.body.style.overflow = "visible";//解除禁用滚动

            this.modal_obj.show = false;
            setTimeout(() => {//离开动画结束后将modal_ts_zt设为null
                this.modal_ts_zt = null
            }, 250);
        },
        get_captcha() {//获取验证码事件
            if (this.hqyzm_time <= 0) {
                this.hqyzm_time = 60
                var timing = setInterval(() => {
                    this.hqyzm_time--
                    if (this.hqyzm_time <= 0)
                        clearInterval(timing);
                }, 1000)
            }
        },
        xs(){
            this.$router.push({path:"/sharingTalents"})
        },
        handleClose(done) {
            done();
        },
        chage(en){
            this.index_title=en
        }
    },
    computed: {
        hqyzm_txt() {
            if (this.hqyzm_time <= 0)
                return '获取验证码'
            else
                return this.hqyzm_time + 's'
        }
    },
    mounted() {
        
    },
    components: {
        modal,
        toast3,
        header_,
        footer_,
        xfc,
    }

}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .left-100 {
        left: -100% !important;
    }
    .angle-45 {
        transform: rotate(45deg) !important;
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

    .app_joinus{
        background: #fafafa;
        /* min-width: 1400px; */
    }

    .banner_joinus {
        width: 100%;
        position: relative;
    }
    .banner_joinus img {
        width: 100%;
    }
    .main_joinus {
        background: #fafafa;
        position: relative;
        margin: 0 auto;
        padding: 2.5rem 0;
    }
    .content_joinus {
        width: 73%;
        margin: 3rem auto 4rem auto;
        padding-bottom: 2.5rem;
    }

    .content_joinus .joinUs_title {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 6rem;
        position: relative;
        color: #353535;
    }
    .content_joinus .joinUs_title:after {
        content: "";
        position: absolute;
        width: 10rem;
        height: 0.0625rem;
        background-color: #353535;
        bottom: -1.25rem;
        left: calc((100% - 10rem) / 2);
    }
    .jrwm_box {
        margin-bottom: 2.5rem;
    }
    .jrwm_show {
        display: flex;
        justify-content: space-between;
    }
    .jrwm_show > .jrwm_show_box {
        width: 18%;
        height: 20rem;
        opacity: 0.9;
    }
    .jrwm_show > .jrwm_show_box:nth-of-type(5n) {
        margin: 0;
    }
    .jrwm_box>div:last-child{
        width: 70%;
        display: flex;
        align-items: center;
    }
    .ptys {
        background: url("../../assets/images/PlatformAdvantage.png") no-repeat;
        background-position: bottom;
    }
    .ptys .jrwm_show > .jrwm_show_box {
        background: #fff;
        box-sizing: border-box;
        font-size: 2.5rem;
        line-height: 2.25rem;
        color: #353535;
    }
    .ptys .jrwm_show > .jrwm_show_box > .join_us_number {
        margin: 2.25rem 0 0 2.25rem;
        padding-bottom: 0.5rem;
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        margin-bottom: 0.5rem;
        border-bottom: 0.25rem #353535 solid;
    }
    .hxjzl {
        background: url("../../assets/images/CoreCompetence.png") no-repeat;
        background-position: bottom;
        margin-bottom: 3.25rem;
    }
    .hxjzl > .joinUs_title {
        margin-bottom: 5rem;
    }
    .rcsy {
        background: url("../../assets/images/TalentBenefit.png") no-repeat;
        background-position: bottom;
        width: 100%;
        height: auto;
    }
    .rcsy > div {
        width: 100%;
        height: auto;
        background: url("../../assets/images/rcsy.png") no-repeat;
        background-size: 100%;
        box-sizing: border-box;
        padding-top: 12px;
    }
    .rcsy > div > .joinUs_title {
        margin-bottom: 6rem;
        color: #fff;
    }
    .rcsy > div > .joinUs_title:after {
        background-color: #fff;
    }
    .rcsy_s {
        display: flex;
        justify-content: center;
        padding-bottom: 65px;;
    }
    .rcsy_box {
        display: inline-block;
        width: 22.5rem;
        height: 22.5rem;
        border: solid 0.0625rem #ffffff33;
        background: #ffffff15;
        margin-right: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rcsy_box:nth-of-type(3n) {
        margin: 0;
    }
    .rzbz {
        background: url("../../assets/images/ResidenceGuarantee.png") no-repeat;
        background-position: bottom;
    }
    .rcsy_content {
        width: 11.25rem;
        text-align: center;
        color: #fff;
    }
    .rcsy_content > p:nth-of-type(1) {
        position: relative;
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin: 1.75rem 0 2.1875rem 0;
    }
    .rcsy_content > p:nth-of-type(1):after {
        content: "";
        width: 1.75rem;
        height: 0.125rem;
        position: absolute;
        left: calc((100% - 1.75rem) / 2);
        bottom: -1rem;
        background-color: #fafafa;
    }
    .rcsy_content > p:nth-of-type(2) {
        font-size: 1.125rem;
        line-height: 1.75rem;
        opacity: 0.7;
    }
    .rzbz_div {
        display: inline-block;
        width: 28rem;
        height: 15rem;
        background-color: #ffffff;
        margin-right: calc((100% - 28rem * 3) / 2);
    }
    .rzbz_div:nth-last-of-type(1) {
        margin: 0;
    }
    .rzbz_text {
        display: inline-block;
        width: 13.5rem;
        vertical-align: top;
    }
    .rzbz_text > p:nth-of-type(1) {
        font-size: 1.5rem;
        line-height: 2.25rem;
        color: #333333;
        margin-bottom: 1.25rem;
    }
    .rzbz_text > p:nth-of-type(2) {
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: #7a7a7a;
        opacity: 0.7;
    }

    .jrwm_show_conent {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 1.5rem;
        line-height: 2.75rem;
        color: #7a7a7a;
    }

    .content_joinus > div > img {
        width: 100%;
    }
    .content_joinus .but_box {
        margin-right: 0;
        width: 30%;
        height: auto;
        background: #fff;
        padding: 3.75rem 2.2rem;
        box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
    }
    .content_joinus .but_box p {
        font-size: 1.87rem;
        line-height: 3rem;
        color: #353535;
        margin-bottom: 1.875rem;
    }
    .jrwm_box {
        display: flex;
        margin-bottom: 0;
        padding-bottom: 0;
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

    .xxws {
        width: 45rem;
        height: 38.4375rem;
        padding: 2rem 1rem;
        box-sizing: border-box;
    }
    .xxws > .joinUs_title {
        font-size: 1.125rem;
        margin-bottom: 2.5rem;
        line-height: 20px;
        color: #9e0000;
    }
    .xxws_tab {
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .xxws_tab_box {
        width: 200%;
        position: relative;
        transition: 0.5s;
        left: 0;
    }
    .xxws_tab_div {
        display: inline-block;
        box-sizing: border-box;
        color: #bbbbbb;
        background-color: #eeeeee;
        line-height: 30px;
        height: 30px;
        border-radius: 15px;
        padding: 0 20px;
        margin-right: 36px;
    }
    .xxws_tab_div.select {
        color: #fff;
        background-color: #9e0100;
    }
    .xxws .direction_box {
        line-height: 30px;
        color: #999;
        position: absolute;
        padding-right: 1px;
        right: 0px;
        top: 0;
        user-select: none;
        background: #fff;
    }


    .jrwm {
        font-size: 1.38rem;
        width: 12.375rem;
        height: 3.375rem;
        line-height: 3.3rem;
        text-align: center;
        color: #fff;
        background-color: #9e0100;
        background: url(../../assets/images/JoinUs_button.png) no-repeat;
        background-size: 100%;
        bottom: 0;
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 0 #dfdcd9;
        cursor: pointer;
    }
    .jrwm:hover {
        background: url(../../assets/images/JoinUs_button_hover.png) no-repeat;
        background-size: 100%;
    }
    .jrwm:active {
        background: url(../../assets/images/JoinUs_button.png) no-repeat;
        background-size: 100%;
    }
    .preload {
        display: none;
        width: 0;
        opacity: 0;
    }
    .toastAll{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }
    .xml_content {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 2rem 0% 0 13%;
    }
    .gywm_xlm{
        width: 73%;
    }
    .gywm_xlm span {
        padding: 0;
        background-position: right;
    }
    .gywm_xlm span:after{
        content: "/";
        padding: 0 16px 0 16px;
    }
    .gywm_xlm span:last-child::after{
        content: "";
        padding: 0;
    }
    .gywm_xlm span>a{
        color: #000;
    }
    .gywm_xlm span:nth-child(2)>a{
        color: #9e0100 !important;
    }
    .fontSty>a{
        color: #9e0100 !important;
    }
    .rzbz_box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .rzbz_div{
        width: 32%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 1%;
    }
    .rzbz_div>img{
        flex-shrink: 0;
        height: 150px;
    }
    @media screen and (max-width: 415px) {
        .banner_joinus{
            display: none;
        }
        .xml_content{
            padding: 16px 0 0 0;
        }
        .gywm_xlm{
            width: 100%;
            text-align: center;
        }
        .gywm_xlm>span:after{
            content: "|"
        }
        .main_joinus{
            padding: 0 24px;
        }
        .main_joinus>div{
            margin: 0;
            padding: 0;
        }
        .content_joinus{
            width: 100%;
            height: 100%;
        }
        .content_joinus>.joinUs_title,.rcsy>div>.joinUs_title,.rzbz>.joinUs_title{
            margin: 0;
            font-size: 24px;
            margin-top: 16px;
        }
        .rcsy>div>.joinUs_title{
            padding-top: 16px;
        }
        .content_joinus>.joinUs_title:after,.rcsy>div>.joinUs_title:after{
            bottom: 0.55rem;
        }
        .jrwm_show{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }
        .ptys{
            background: url()
        }
        .ptys .jrwm_show > .jrwm_show_box,.hxjzl .jrwm_show > .jrwm_show_box{
            display: block;
            width: 32%;
            margin: 0;
            height: auto;
            color: #fff;
            font-size: 8px;
            line-height: 12px;
            margin-top: 10px;
        }
        .ptys .jrwm_show > .jrwm_show_box >.join_us_number{
            font-size: 16px;
            border: 0;
            padding: 0;
            margin: 0 0 0 2.25rem;
            display: none;
        }
        .jrwm_show>div:last-child{
            width: 32%;
        }
        .jrwm_show_conent{
            margin: 0 auto;
            font-size: 14px;
            display: flex;
            flex-direction: column;
        }
        .jrwm_show_conent>img{
            width: 45px;
            margin: 0 auto;
        }
        .jrwm_show_conent>br{
            display: none;
        }
        .rcsy{
            background: url()
        }
        .rcsy>div{
            height: auto;
            padding: 0;
        }
        .rcsy_s{
            display: flex;
            flex-direction: column;
            height: auto;
            padding-bottom: 50px;
        }
        .rcsy_s>.rcsy_box{
            width: 50%;
            height: auto;
            margin: 8px auto;
        }
        .rcsy_s>.rcsy_box>.rcsy_content>img{
            width: 50px;
            padding-top: 8px;
        }
        .rcsy_s>.rcsy_box>.rcsy_content>p{
            margin: 0;
            padding: 0;
            font-size: 14px;
        }
        .rcsy_s>.rcsy_box>.rcsy_content>p:nth-child(2):after{
            display: none;
        }
        .hxjzl{
            background: url()
        }
        .rzbz_box{
            display: flex;
            flex-direction: column;
        }
        .rzbz_div{
            width: 100%;
            margin: 0;
            display: flex;
            padding: 16px;
            box-sizing: border-box;
            margin-top: 16px;
            height: auto;
        }
        .rzbz_div:last-child{
            margin-top: 16px;
        }
        .rzbz_div>img{
            height: 80px;
            margin: 0;
        }
        .rzbz_text{
            margin: 0;
            width: 100%;
        }
        .rzbz_text>p{
            margin: 0 !important;
            padding: 0;
            font-size: 14px !important;
            padding-left: 8px;
        }
        .rzbz_text>p:first-child{
            font-size: 18px;
        }
        .jrwm_box{
            display: flex;
            flex-direction: column;
            margin-top: 16px !important;
        }
        .jrwm_box>.but_box{
            width: 100% !important;
            padding: 0 !important;
            padding: 16px 0 16px 16px !important;
            height: auto;
        }
        .but_box>p{
            font-size: 20px !important;
            line-height: 0px;
            margin-bottom: 16px !important;
        }
        .jrwm{
            margin: 0 auto;
        }
        .but_box+div{
            width: 100%;
            padding-bottom: 16px;
        }
        .but_box+div>img{
            width: 100%;
        }
        .content_joinus .joinUs_title{
            line-height: 5rem;
            margin-top: 0px;
        }
        .jrwm_box>div:last-child{
            width: 100%;
        }
    }
</style>