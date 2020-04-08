<template>
    <div class="内容">
        <section>
            <div class="left">
                <article class="item">
                    <h4><span class="colorRed">【专题讲座】</span>专题讲座的标题一</h4>
                    <p class="people paddingLeft">主讲者：笨拙的蜗牛</p>
                    <p class="time paddingLeft flexP">
                        <span>时间：2019-04-16</span>
                        <span class="flexSpan">分享到: <img src="../../../assets/imgs/wx.png" alt="微信"><img src="../../../assets/imgs/wb.png" alt="微博"><img src="../../../assets/imgs/qq.png" alt="QQ"></span>
                    </p>
                    <div>
                        <video id="video" loop width="1000px" height="580px" src="@/assets/video/x.mp4" autoplay style="outline:none; margin-top:20px;">您的浏览器不支持 video。
                        </video>
                        <p class="gd"><span>观看人数 22365  观看中人数465</span><span><img src="../../../assets/imgs/pause.png" @click="pause($event)" alt="pause" style="background-color:;"><img src="../../../assets/imgs/full-screen.png" @click="screen($event)" alt="FullScreen"></span></p>
                    </div>
                    <div class="bottom">
                        <div class="control">
                            <button class="btn_">
                                点赞56
                            </button>
                            <button class="btn_">
                                👍
                            </button>
                            <span>28条评论</span>
                        </div>
                    </div>
                    <pl></pl>
                </article>
            </div>
            <div class="right">
                <div>
                    <h3>公益热搜</h3>
                    <a href="">顶尖咨询公司的政府咨询部分是怎样的？</a>
                    <a href="">各类咨询公司的作用？</a>
                    <a href="">企业雇佣咨询公司是否真的有效？</a>
                    <a href="">走进管理咨询|咨询公司想要的是什么？</a>
                    <a href="">四川一真企业管理咨询公司是？</a>
                    <a href="">聘请专业的咨询公司对企业发展的好处？</a>
                    <a href="">咨询公司存在的意义？</a>
                    <a href="">咨询公司需要上市吗？</a>
                    <a href="">四川一真企业管理咨询公司是？</a>
                    <a href="">聘请专业度的咨询公司对企业发展的好处？</a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import pl from '../../public/评论'
    import pause from '../../../assets/imgs/pause.png'
    import BoFang from '../../../assets/imgs/BoFang.png'
    export default {
        components:{
            pl,
        },
        name: "德商公益",
        methods: {
            pause(e){
                var el=e.target;
                var video=document.getElementById("video")
                if(el.alt=="pause"){
                    el.src=BoFang
                    el.alt="BoFang"
                    video.pause();
                }else if(el.alt=="BoFang"){
                    el.src=pause
                    el.alt="pause"
                    video.play();
                }
            },
            screen(e){
                var el=e.target;
                var video=document.getElementById("video")
                if(el.alt=="FullScreen"){
                    var ele = document.getElementById("video");
                    if (ele .requestFullscreen) {
                        ele .requestFullscreen();
                    } else if (ele .mozRequestFullScreen) {
                        ele .mozRequestFullScreen();
                    } else if (ele .webkitRequestFullScreen) {
                        ele .webkitRequestFullScreen();
                    }
                }
            }
        },  
    }
</script>
<style scoped>
    .内容{
        background-color: #f6f6f6;
    }
    .wrap,section{
        width: 1400px;
        margin: 0 auto;
    }
    section{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .left{
        width: 1060px;
    }
    .right{
        width:315px;
    }
    section .item,.right>div{
        margin-top: 28px;
    }
    section .item>h4{
        color: #353535;
        font-size: 18px;
    }
    section .item>p{
        font-size: 14px;
        color: #888888;
    }
    section .item>p.content{
        margin-top: 30px;
    }
    section .item>p span{
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
    }
    section .item>.people,section .item>.time{
        margin: 0;
        margin-top:10px;
        height: 20px;
    }
    section .item>.people,section .item>.time>span{
        margin: 0;
    }
    section .item>.people,section .item>.time>.people{
        margin-top: 10px;
    }
    section .item>div.bottom{
        display: flex;
        justify-content: space-between;
        margin-top: -20px;
        align-items: flex-end;
    }
    section .item>div.bottom .control{
        display: flex;
        color: #d5bfbe;
        align-items: center;
    }
    section .item>div.bottom .control .btn_{
        border: none;
        font-size: 14px;
        color: #fff;
        background-color: #d5bfbe;
        border-radius: 3px;
        padding: 5px 10px;
        margin-right: 10px;
    }
    section .left>article.item{
        background: #fff;
        box-sizing: border-box;
        padding: 27px;
        margin-bottom: 20px;
    }
    section .right div{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        padding: 20px;
        background: #fff;
    }
    section .right>div h3{
        font-size: 20px;
    }
    section .right>div a{
        font-size: 14px;
        margin-top: 15px;
        color: inherit;
    }
    section .right>div{
        background-color: #fff;
    }
    .colorRed{
        color: #9e0100;
    }
    .flexSpan{
        display: flex;
    }
    .flexSpan>img{
        width: 24px;
        height: 24px;
        margin-right: 12px;
        background-color:#fff !important;
    }
    .flexSpan>img:first-child{
        margin-left: 12px;
    }
    .flexP{
        display: flex;
        justify-content: space-between;
    }
    .paddingLeft{
        padding-left: 20px;
    }
    .gd{
        width: 1010px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        position: relative;
        top: -50px;
        font-size: 1rem;
        color: #888888;
    }
    .gd img{
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        top: -10px;
    }
</style>