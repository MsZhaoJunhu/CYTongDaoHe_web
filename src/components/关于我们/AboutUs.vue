<template>
    <div class="app">
        <header_ :select_index="7"/>
        <xfc></xfc>
        <div class="banner">
            <img src="../../assets/imgs/AboutUs_banner.png" alt="行业最新信息及相关公司活动">
        </div>
        <div class="xml_content">
            <div class="gywm_xlm">
                <span v-for="(item,key) in titleList" :key="key" :class="index_title==key?'fontSty':''" @click="chage(key)">
                    <router-link :to="item.link" >{{item.content}}</router-link>
                </span>
            </div>
        </div>
        <div class="main">
            <div class="qyjj">
                <div class="titles">
                    <p class="xhx">ABOUT US</p>
                </div>
                <p class="text">同道合中小企业一站式专业服务互联网大数据平台起于“涵养人文德商，报效家国天下；聚合专业资源，共享共融共创”之初心，是一家致力于解决企业全生命周期的痛点难点问题，为企业提供一系列精准服务对接、服务过程监控、服务成果保障的第三方专业服务互联网大数据平台。平台为实现中小企业优秀企业家“碎片化资源”与“碎片化需求”线上线下链接互助与价值共享，打造“同道合-互助共享众创信息平台”和“同道合-德商学院”，为推动中小企业共融众创，精心铸就服务品质，助力中小企业快速发展。</p>
            </div>
            <div class="hxtd_content">
                <div class="titles">
                    <p class="xhx">核心团队</p>
                </div>
                <div class="show_con">
                    <div class="intro_con">
                        <img src="../../assets/imgs/wyk.png" alt="">
                        <div class="text">
                            <p>王億科</p>
                            <p>执行董事&创始人</p>
                            <p :class="{'limit_row':!unfold_zt}">王億科先生在生活和创业成长的路上，有幸得到知己、恩师、伙伴、前辈等认识和不认识的朋友支持和帮助，始终心怀感恩，不忘初心。在未来的路上，随着社会商业形态瞬息万变，为适应新技术的下一代商业文明，学习和传承老一辈渝商精神，愿奉献一生之心血携手一帮志同道合、有良知的朋友为企业、社会、国家以及人类的社会经济文明作出所有努力和探索、学习、促进共同成长！</p>
                        </div>
                    </div>
                    <div class="intro_con">
                        <img src="../../assets/imgs/hjr.png" alt="">
                        <div class="text">
                            <p>胡佳睿</p>
                            <p>执行CEO&合伙人</p>
                            <p :class="{'limit_row':!unfold_zt}">胡佳睿先生是管理科学及公共决策方面的专业硕士，拥有15年的咨询及管理实践，曾就职于世界500强管理咨询公司，在战略规划、激励体系与管理提升等有深入研究，结合研究成果，为客户提供具体的解决方案，并与众多集团型企业、上市公司建立长期战略合作关系。</p>
                        </div>
                    </div>
                    <div class="intro_con">
                        <img src="../../assets/imgs/yjq.png" alt="">
                        <div class="text">
                            <p>杨景乔</p>
                            <p>执行CEO&合伙人</p>
                            <p :class="{'limit_row':!unfold_zt}">杨景乔先生15年从业经历，从本地顶尖民企集团到世界500强金融集团到西南地区最好的总裁教育平台。近5年走访数十个行业，超500家企业学习全国顶尖管理专家课程过100场，对中小企业的发展现状有深刻认知，对中小企业管理形成自己的理论体系，堪称中小企业实战管理专家。常年为金色印象、海普洛、城银科技等知名企业提供管理咨询服务，具备超强法务、税务、政务与商务供应链设计、操作、管理能力。</p>
                        </div>
                    </div>
                    <div class="intro_con">
                        <img src="../../assets/imgs/qyc.png" alt="">
                        <div class="text">
                            <p>乔玉春</p>
                            <p>SBU副总经理</p>
                            <p :class="{'limit_row':!unfold_zt}">乔玉春先生从事金融行业近15年，对电器制造及销售公司、投融资企业、房地产等行业具有丰富的财务管理、风险管理、资金管理、税收筹划等工作经验。</p>
                        </div>
                    </div>
                </div>
                <div @click="unfold_zt=!unfold_zt;" class="unfold"><div :class="{'unfold2':unfold_zt}">∟</div></div>
            </div>
            <div class="about_us_qywh">
                <div class="titles">
                    <p class="xhx">企业文化</p>
                </div>
                <p>资源整合 专业服务 互助成长 价值再造</p>
                <div class="ptjs">
                    <div class="ptxx">
                        <p>平台愿景</p>
                        <p>立大同 行正道 合未来</p>
                    </div>
                    <div class="ptxx">
                        <p>平台定位</p>
                        <p>碎片化时间与碎片化资源的 价值再造</p>
                    </div>
                    <div class="ptxx">
                        <p>平台文化</p>
                        <p>企业家信息、资源互助共享 共同成长</p>
                    </div>
                    <div class="ptxx">
                        <p>平台功能</p>
                        <p>帮助解决企业发展中的疼点 难点问题</p>
                    </div>
                    <div class="ptxx">
                        <p>平台思维</p>
                        <p>交换一个苹果各得一个苹果 交换一个思想各得多个思想</p>
                    </div>
                </div>
            </div>
            <div class="zzjg_content">
                <div class="titles">
                    <p class="xhx">组织架构</p>
                </div>
                <div class="zhu_zhi_jia_gou" style="margin-top:5rem">
                    <!-- <img src="../../assets/imgs/zzgj.png" alt="" style="margin:0 auto; display:block;"> -->
                    <div style="background:#767777;">
                        <img src="../../assets/icon/aboutUs1.png" alt="">
                        <p style="color:#fff;">同道合专业服务</p>
                        <p style="color:#fff;">6+1模式</p>
                    </div>
                    <div style="border:1px solid #000;width:0;height:48px;"></div>
                    <div style="background:#999899;">
                        <img src="../../assets/icon/aboutUs2.png" alt="">
                        <p style="color:#fff;">执行总经理</p>
                    </div>
                </div>
                <div class="zhu_zhi_jia_gou_shu">
                    <div></div>
                </div>
                <div class="zhu_zhi_jia_gou_heng"></div>
                <div class="zhu_zhi_jia_gou2">
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs3.png" alt="">
                            <p>会员中心</p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs4.png" alt="">
                            <p>资源中心</p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs5.png" alt="">
                            <p>服务中心</p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs6.png" alt="">
                            <p>公关中心</p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs7.png" alt="">
                            <p>研究中心</p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs8.png" alt="">
                            <p>技术中心</p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src="../../assets/icon/aboutUs9.png" alt="">
                            <p>德商学院</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="false" class="zzry">
                <div class="titles">
                    <p class="xhx">资质荣誉</p>
                </div>
                <div style="margin-top:5rem">
                    <img src="../../assets/imgs/zzry.png" alt="" style="margin:0 auto; display:block;">
                </div>
            </div>
            <div class="ptgn">
                <div class="titles">
                    <p class="xhx">平台功能</p>
                </div>
                <div class="ping_tai_gong_neng" style="margin-top:5rem">
                    <!-- <img src="../../assets/imgs/ptgn.png" alt="" style="margin:0 auto; display:block;"> -->
                    <div class="ping_tai_gong_neng_one">
                        <div class="ping_tai_gong_neng_one_one">
                            <div>
                                <p>前台</p>
                            </div>
                            <div>
                                <p>后台</p>
                            </div>
                        </div>
                        <div class="ping_tai_gong_neng_one_two" style="background:#d89999;">
                            <p>中台</p>
                        </div>
                    </div>
                    <div class="ping_tai_gong_neng_two">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="ping_tai_gong_neng_three">
                        <img src="../../assets/icon/aboutUs10.png" alt="">
                        <P style="color:#353535;"><span style="color:#9e0100;">三</span>大端口</P>
                    </div>
                    <div class="ping_tai_gong_neng_three_jia">+</div>
                    <div class="ping_tai_gong_neng_three">
                        <img src="../../assets/icon/aboutUs11.png" alt="">
                        <p style="color:#353535;"><span style="color:#9e0100;">五</span>大核心功能</p>
                    </div>
                    <div class="ping_tai_gong_neng_three_jia">+</div>
                    <div class="ping_tai_gong_neng_three">
                        <img src="../../assets/icon/aboutUs12.png" alt="">
                        <p style="color:#353535;"><span style="color:#9e0100;">两</span>大增值服务</p>
                    </div>
                    <div class="ping_tai_gong_neng_four">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="ping_tai_gong_neng_five">
                        <div style="background:#eccccc;">
                            <p>第三方咨询</p>
                            <p>监理</p>
                        </div>
                        <div style="background:#d89999;">
                            <p>人才共享体系</p>
                        </div>
                    </div>
                </div>
                <div class="ping_tai_gong_neng_shu">
                    <div></div>
                </div>
                <div class="ping_tai_gong_neng_dian">
                    <div></div>
                </div>
                <div class="ping_tai_gong_neng2">
                    <div>
                        <div>
                            <img src="../../assets/icon/aboutUs13.png" alt="">
                            <p>交易</p>
                        </div>
                        <div style="background:#d89999;">
                            <img src="../../assets/icon/aboutUs14.png" alt="">
                            <p>服务</p>
                        </div>
                        <div>
                            <img src="../../assets/icon/aboutUs16.png" alt="">
                            <p>评价</p>
                        </div>
                        <div style="background:#d89999;">
                            <img src="../../assets/icon/aboutUs17.png" alt="">
                            <p>反馈</p>
                        </div>
                        <div>
                            <img src="../../assets/icon/aboutUs18.png" alt="">
                            <p>支付</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="last">
            <div class="site" >
                <div>
                    <div class="red_xbk">
                        您能给我们多大的信任，我们就能给您多大的惊喜
                    </div>
                    准备好了吗？<br />
                    那就与我们取得联系吧
                </div>
                <div>
                    <p>地址</p>
                    <p>重庆市渝北区食品城大道18号13幢3单元1-5</p>
                    <p>电话</p>
                    <p>400-0623-688</p>
                </div>
                <div>
                    <Maptest></Maptest>
                </div>
                
            </div>
        </div>
       <footer_ />
    </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import Maptest from '../mapTest'
import xfc from '@/components/public/悬浮窗.vue'
    export default {
        data() {
            return {
                unfold_zt:false,
                titleList:[
                    {link:"/gywm/aboutus",content:'关于我们'},
                    {link:'/gywm/joinus',content:'加入我们'},
                    {link:'/gywm/news',content:'公司新闻'}
                ],
                index_title:0,
            }
        },
        methods: {
            chage(en){
                this.index_title=en
            }
        },
        components:{
            Maptest,
            header_,
            footer_,
            xfc,
        }
    }
</script>

<style scoped>
    .app{
        /* min-width: 1400px; */
    }
    .banner{
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .banner img{
        width: 100%;
    }
    .main{
        position: relative;
        width: 87.5rem;
        width: 100%;
        margin: 0 auto;
    }
    .main>div{
        width: 70%;
        margin: 0 auto;
    }
    .main>div:not(:first-child){
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .qyjj,.hxtd_content,.about_us_qywh,.zzjg_content,.ptgn,.zzry{
        border-bottom:0.0625rem solid #ccc;
        box-sizing: border-box;
        
    }
    .qyjj{
        padding: 2.5rem 8.125rem 0 8.125rem;
        text-align: center;
    }
    .qyjj .text{
        margin: 5.3125rem 0;
        line-height: 2.25rem;
        font-size: 0.9375rem;
        color: #7a7a7a;
    }
    .zzjg_content,.ptgn{
        width: 100%;
    }
    .titles{
        width: 100%;
        font-size: 3rem;
        line-height: 3rem;
        color: #353535;
        margin: 1.25rem auto;
        position: relative;
    }
    .xhx{
        text-align: center;
        font-size: 3rem;
        color: #353535;
    }
    .xhx::after{
        content:"";
        display: block;
        height: 0.0625rem;
        width: 10rem;
        background: #000;
        position: absolute;
        left: 50%;
        margin-left:-5rem;
        bottom: -1.25rem;
    }
    .show_con{
        margin-top:5rem;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        padding: 20px 0px;
        justify-content: space-around;
    }
    .intro_con{
        flex-shrink: 0;
        width: 20%;
        /* margin-right: calc((100% - (18%* 4)) / 4); */
    }
    .intro:nth-last-child(1){
        margin-right: 0;
    }
    .intro_con img{
        width: 100%;
        height: auto;
    }
    .intro_con p{
        margin: 3% 0;
    }
    .intro_con p:nth-child(1){
        font-size: 1.875rem;
        color: #353535;
    }
    .intro_con p:nth-child(2){
        font-size: 1rem;
        color: #bbb;
    }
    .intro_con p:nth-child(3){
        font-size: 0.9375rem;
        line-height: 1.875rem;
        color: #7c7c7c;
        height: 16.875rem;
        transition: 0.25s;
        overflow: hidden;
        position: relative;
    }
    .intro_con:last-child{
        margin: 0;
    }
    .limit_row{
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        height: 7.1875rem !important;
    }
    .unfold{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 1.875rem auto 0;
        height: 3.125rem;
        width: 4rem;
        padding-bottom:0.5rem; 
    }
    .unfold>div{
        text-align: center;
        font-size: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        color: #ddd;
        transform: rotate(-45deg);
        cursor: pointer;
        user-select:none;
        transition:0.25s;
    }
    .unfold2{
        transform: rotate(135deg) !important;
    }
    .about_us_qywh>p{
        text-align: center;
        color: #999;
        padding: 1.25rem 0;
    }
    .ptjs{
        display: flex;
        margin-top: 3.125rem;
    }
    .ptxx{
        width: 20%;
        padding: 2.1875rem;
        background-color: #f7f7f7;
    }
    .ptxx:nth-child(2n){
        background-color: #f2f2f2;
    }
    .ptxx p:nth-child(1){
        font-size: 1.5rem;
        color: #353535;
    }
    .ptxx p:nth-child(2){
        margin-top: 0.625rem;
        font-size: 1rem;
        color: #878787;
        line-height: 1.5rem;
    }
    .last{
        padding-top: 5.3125rem;
        box-sizing: border-box;
        background: url(../../assets/imgs/last.png) no-repeat;
        background-size: 100%;
    }
    .site{
        width: 100%;
        height: 17.5rem;
        margin: 0 auto;
        padding:0 3rem;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .site div:nth-child(1){
        font-size: 1.875rem;
    }
    .site div:nth-child(1) .red_xbk{
        font-weight:bold;
        padding-bottom:0.625rem;
        margin-bottom:0.625rem;
        font-size: 1.5rem;
        color: #9e0100;
        border-bottom:0.1875rem solid #9e0100;
    }
    .site div:nth-child(2){
        font-size: 1.125rem;
        margin: 0 6.875rem 0 8.4375rem;
    }
    .site div span{
        display:block;
        font-size: 0.875rem;
        margin: 0.9375rem 0;
    }
    .site div:nth-child(3){
        border: #ccc solid 0.0625rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 7.8125rem;
        width: 14.0625rem;
        cursor: pointer;
        text-align:center;
        font-size: 0.875rem;
        margin-right: 0.9375rem;
    }
    .site>div:nth-child(2)>p{
        margin-top: 4px;
        font-size: 20px;
    }
    .site>div:nth-child(2)>p:nth-child(even){
        font-size: 16px;
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
    .fontSty>a{
        color: #9e0100 !important;
    }
    .zzjg_content>div:last-child>img,.ptgn>div:last-child>img{
        width: 100%;
    }
    .zhu_zhi_jia_gou{
    }
    .zhu_zhi_jia_gou>div,.zhu_zhi_jia_gou2>div>div:last-child{
        width: 160px;
        height: 160px;
        border-radius: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
    }
    .zhu_zhi_jia_gou>div>img,.zhu_zhi_jia_gou2>div>div:last-child>img{
        flex-shrink: 0;
        margin-bottom: 8px;
    }
    .zhu_zhi_jia_gou>div>p,.zhu_zhi_jia_gou2>div>div:last-child>p{
        font-size: 18px;
    }
    .zhu_zhi_jia_gou_shu{
        width: 100%;
        height: 68px;
    }
    .zhu_zhi_jia_gou_shu>div{
        height: 68px;
        width: 0px;
        border: 1px dashed #555555;
        margin: 0 auto;
    }
    .zhu_zhi_jia_gou_heng{
        width: 86%;
        height: 0px;
        border:1px dashed #555555;
        margin: 0 auto;
    }
    .zhu_zhi_jia_gou2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .zhu_zhi_jia_gou2>div{
        width: 14%;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .zhu_zhi_jia_gou2>div>div:first-child{
        width: 0px;
        height: 98px;
        border: 1px dashed #555555;
        margin: 0 auto;
    }
    .zhu_zhi_jia_gou2>div>div:last-child{
        background: #fafafa;
        border-radius: 0;
    }
    .zhu_zhi_jia_gou2>div>div:last-child>p{
        color: #767777;
    }
    .ping_tai_gong_neng{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ping_tai_gong_neng p{

    }
    .ping_tai_gong_neng>div{
        width: 11%;
        height: 200px;
    }
    .ping_tai_gong_neng_one{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .ping_tai_gong_neng_one_one{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .ping_tai_gong_neng_one_one,.ping_tai_gong_neng_one_two{
        width: 45%;
    }
    .ping_tai_gong_neng_one_one>div,.ping_tai_gong_neng_one_two{
        height: 74px;
        background: #eccccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ping_tai_gong_neng_two,.ping_tai_gong_neng_four{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
    .ping_tai_gong_neng_four{
        flex-direction: row;
    }
    .ping_tai_gong_neng_two>div:last-child{
        width: 8px;
        height: 8px;
        background: #555555;
    }
    .ping_tai_gong_neng_two>div:first-child{
        width: 70%;
        height: 0;
        border: 1px dashed #555555;
    }
    .ping_tai_gong_neng_four>div:last-child{
        width: 8px;
        height: 8px;
        background: #555555;
    }
    .ping_tai_gong_neng_four>div:first-child{
        width: 70%;
        height: 0;
        border: 1px dashed #555555;
    }
    .ping_tai_gong_neng_three{
        height: 146px !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #f6f6f6;
    }
    .ping_tai_gong_neng p{
        color: #fff;
        font-size: 18px;
        font-weight:bold;
    }
    .ping_tai_gong_neng_three_jia{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        font-weight:bold;
    }
    .ping_tai_gong_neng_five{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .ping_tai_gong_neng_five>div{
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ping_tai_gong_neng_shu>div{
        height: 70px;
        width: 0;
        border: 1px dashed #555555;
    }
    .ping_tai_gong_neng_dian,.ping_tai_gong_neng_shu{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ping_tai_gong_neng_dian>div{
        width: 8px;
        height:8px;
        background: #555555;
    }
    .ping_tai_gong_neng2{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
    }
    .ping_tai_gong_neng2>div{
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ping_tai_gong_neng2>div>div{
        width: 15%;
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #eccccc;
    }
    .ping_tai_gong_neng2>div>div>p{
        color:#fff;
        font-size: 18px;
        font-weight: bold;
    }
    @media screen and (max-width: 415px) {
        .banner{
            display: none;
        }
        .main{
            width: 100%;
            padding: 0 24px;
            box-sizing: border-box;
        }
        .qyjj,.hxtd_content,.about_us_qywh,.zzjg_content,.ptgn{
            padding: 0px;
        }
        .qyjj>.titles,.hxtd_content>.titles,.qywh>.titles,.zzjg_content>.titles,.ptgn>.titles{
            margin: 8px 0;
        }
        .xhx{
            font-size: 24px;
        }
        .xhx:after{
            width: 8rem;
            left: 55%;
            bottom: -0.2rem;
        }
        .text{
            margin: 16px 0 !important;
            display: flex;
            flex-direction: column;
            line-height: 32px !important;
            text-align: left;
            text-indent: 2em;
        }
        .show{
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .intro{
            width: 100%;
        }
        .intro>.text{
            display: flex;
            flex-direction: column;
        }
        .intro>.text>p:first-child,.intro>.text>p:nth-child(2){
            text-align: center;
        }
        .intro>.text>p{
            margin: 8px 0 0 0;
        }
        .intro>.text>p:first-child{
            margin: 0;
        }
        .unfold{
            display: none;
        }
        .qywh>p{
            padding: 16px 0 ;
        }
        .ptjs{
            margin: 0;
            display: flex;
            flex-direction: column;
        }
        .ptxx{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            padding: 0 8px;
            margin-top: 16px;
            box-sizing: border-box;
        }
        .ptxx:first-child{
            margin: 0px;
        }
        .ptxx>p{
            text-align: center;
            margin: 0px !important;
            padding-top: 10px;
        }
        .ptxx>p:last-child{
            padding: 10px 0 8px 0;
            font-size: 14px;
        }
        .ptxx>p:first-child{
            font-size: 18px;
        }
        .zzjg_content>div:last-child,.ptgn>div:last-child{
            width: 100%;
            margin: 0 !important;
        }
        .zzjg_content>div:last-child>img,.ptgn>div:last-child>img{
            width: 100%;
            margin-top: 16px;
        }
        .site{
            width: 100%;
            display: flex;
            flex-direction: column;
            height: auto;
            padding: 0 24px;
        }
        .site>div{
            width: 100% !important;
            display: block;
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
        .site>div:first-child{
            font-size: 16px;
        }
        .site>div:first-child>div:first-child{
            font-size: 18px;
        }
        .site>div:nth-child(2){
            margin: 0;
        }
        .site>div:nth-child(2)>p{
            margin-top: 16px;
        }
        .site>div:nth-child(2)>p:nth-child(2n+1){
            font-size: 20px;
        }
        .site>div:nth-child(2)>p:nth-child(2n+1):after{
            content: ":"
        }
        .site>div:nth-child(2)>p:nth-child(2n){
            font-size: 18px;
        }
        .site>div:last-child{
            margin: 16px 0;
        }
        .intro_con{
            width: 100%;
        }
    }
</style>