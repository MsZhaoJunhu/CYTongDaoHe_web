<template>
    <div class="about_app">
        <header_ :select_index="7"/>
        <xfc></xfc>
        <div class="banner">
            <img src="../../assets/images/JoinUs_banner.png" alt="行业最新信息及相关公司活动" />
        </div>
        <div class="xml_content">
            <div class="gywm_xlm">
                <span v-for="(item,key) in titleList" :key="key" :class="index_title==key?'fontSty':''" @click="chage(key)">
                    <router-link :to="item.link" >{{item.content}}</router-link>
                </span>
            </div>
        </div>
        <div class="main">
            <div class="content">
                <busin_public_ :text=title :select=selected></busin_public_>
            </div>  
        </div>
         <footer_ />
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import busin_public_ from './children/aboutUs-newsChild.vue'
import xfc from '@/components/public/悬浮窗.vue'
export default {
    data() {
        return {
            title:["公益热搜"],
            selected:0,
            titleList:[
                {link:"/gywm/aboutus",content:'关于我们'},
                {link:'/gywm/joinus',content:'加入我们'},
                {link:'/gywm/news',content:'公司新闻'}
            ],
            index_title:3,
        }
    },
  components: {
      busin_public_,
      header_,
      footer_,
      xfc,
  },
  methods: {
      chage(en){
            this.index_title=en
        }
  },
}
</script>

<style less scoped>
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

    .about_app {
        background: #fafafa;
        /* min-width: 1400px; */
    }

    .banner {
        width: 100%;
        min-width: 73%;
        position: relative;
    }
    .banner img {
        width: 100%;
    }
    .main {
        width: 100%;
        background: #fafafa;
        position: relative;
        margin: 0 auto;
        padding: 2.5rem 0;
    }
    .contents{
        width: 73%;
        margin: 0 auto;
    }
    .content {
        width: 73%;
        margin: 2rem auto 4rem auto;
        padding-bottom: 2.5rem;
        display: flex;
        justify-content: space-between;
    }
    .content>div{
        background-color:#fff;
    }
    .catalogue{
        display: flex;
    }
    .catalogue span{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #4a4a4a;
    }
    .catalogue span:after{
        content:'';
        display: block;
        margin: 0 5px;
        width:8px;
        height: 5px;
        background-image: url(../../assets/icon/more.png);
        background-size: contain;
        background-repeat:no-repeat;
        transform: rotateZ(-90deg);
    }
    .catalogue span:last-of-type:after{
        content:none;
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
    .gywm_xlm span:last-child>a{
        color: #9e0100 !important;
    }
    .fontSty>a{
        color: #9e0100 !important;
    }
    @media screen and (max-width: 415px) {
        .banner,.contents{
            display: none;
        }
        .main,.content{
            margin: 0;
            padding: 0;
            width: 100%;
        }
        .content{
            padding: 0 24px;
            box-sizing: border-box;
        }
        .about_app{
            overflow-y: scroll;
            padding-bottom: 30px;
        }
        .xml_content{
            padding: 16px 0;
        }
        .gywm_xlm{
            width: 100%;
            text-align: center;
        }
        .gywm_xlm>span:after{
            content: "|"
        }
        .ljj_img_box{
            padding: 0 8px !important;
        }
    }

</style>