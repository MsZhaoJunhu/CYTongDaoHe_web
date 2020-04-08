<template>
    <div class="xfc_all">
        <div class="xfc_erweima">
            <img src="../../assets/imgs/wetcat.jpg" alt="">
        </div>
        <div class="xfc_ck">
            <router-link :to="link">
                <div class="xfc_icon" @mouseenter="changeIconToWord($event)" @mouseleave="changeWordToIcon($event)" >
                    <img src="../../assets/icon/xfcIcon1.png" alt="">
                    <span><p>同道通</p></span>
                </div>
            </router-link>
            <div @click="routerLinkToShuoMing" style="cursor: pointer;">
                <div class="xfc_icon" @mouseenter="changeIconToWord($event)" @mouseleave="changeWordToIcon($event)">
                    <img src="../../assets/icon/xfcIcon2.png" alt="">
                    <span><p>使用</p><p>说明</p></span>
                </div>
            </div>
            <div  @click="routerLinkToShuoMings">
                <div class="xfc_icon" @mouseenter="changeIconToWord($event)" @mouseleave="changeWordToIcon($event)">
                    <img src="../../assets/icon/xfcIcon3.png" alt="">
                    <span><p>在线</p><p>咨询</p></span>
                </div>
            </div>
            <div class="xfc_icon ewm" @mouseover="changeIconToWord($event)" @mouseout="changeWordToIconTS($event)">
                <img src="../../assets/icon/xfcIcon4.png" alt="二维码">
                <span style="color:#fff"><p>关注</p><p>我们</p></span>
            </div>
            <div class="xfc_icon" @click="toTop" @mouseenter="changeIconToWord($event)" @mouseleave="changeWordToIcon($event)">
                <img src="../../assets/icon/xfcIcon5.png" alt="">
                <span style="color:#fff"><p>回到</p><p>顶部</p></span>
            </div>
            <el-drawer
                title="同道合平台使用说明"
                :visible.sync="drawer"
                :direction="direction"
                size="100%"
                :before-close="handleClose">
                <div class="gdt_tdhshuoMing" style="width: 100%;height: 800px;overflow-y: scroll;">
                    <!-- <div class="search">
                        <input type="text" placeholder="请输入搜索内容！" v-model="searchValue">
                        <div @click="tapToNextOrPre($event)">
                            <img src="../../assets/imgs/search.png" alt="">
                        </div>
                    </div> -->
                    <div v-html="this.newsContent" style="width:50%;height: 100%; display: block;margin:0 auto;"></div>
                </div>
            </el-drawer>
        </div>
    </div>
</template>
<script>
import { getNewPtInfo } from '../../components/api/api';
export default {
    data() {
        return {
            isLogin:false,
            link:'/login',
            link2:"/glgzInside?newsId=16",
            drawer: false,
            direction: 'btt',
            newsContent:"",
            searchValue:'',
            elementArrWindowHeight:[],
            elementArrWindowI:1,
        }
    },
    methods: {
        routerLinkToShuoMings(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            if(user!=null){
                this.$router.push({"path":"/fun/alwaysChat"})
            }else{
                this.$router.push({"path":"/reg"})
            }
        },
        changeIconToWord(e){
            var el=e.currentTarget;
            var fir=el.firstElementChild;
            var las=el.lastElementChild;
            var xfcerweima=document.getElementsByClassName("xfc_erweima")
            if(fir.tagName=="IMG"&&fir.alt==""){
                // fir.alt
                el.style.background="#9e0100";
                las.style.display="inline-block";
                fir.style.display="none";
            }else if(fir.tagName=="IMG"&&fir.alt=="二维码"){
                xfcerweima[0].firstElementChild.style.display="block"
                el.style.background="#9e0100";
                las.style.display="inline-block";
                fir.style.display="none";
            }
        },
        changeWordToIcon(e){
            var el=e.currentTarget;
            var fir=el.firstElementChild;
            var las=el.lastElementChild;
            var xfcerweima=document.getElementsByClassName("xfc_erweima")
            if(las.style.display=="inline-block"){
                el.style.background="#fff";
                las.style.display="none";
                fir.style.display="inline-block";
            }
        },
        changeWordToIconTS(e){
            var el=e.currentTarget;
            var fir=el.firstElementChild;
            var las=el.lastElementChild;
            var xfcerweima=document.getElementsByClassName("xfc_erweima")
            xfcerweima[0].firstElementChild.style.display="none"
            el.style.background="#fff";
            el.style.color="#fff";
            las.style.display="none";
            fir.style.display="inline-block";
        },
        toTop(){
            (function smoothscroll(){
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(smoothscroll);
                    window.scrollTo (0,currentScroll - (currentScroll/5));
                }
            })();
        },
        routerLinkToShuoMing(){
            //获取协议
            getNewPtInfo({"xyName":"同道合平台使用说明"}).then(res => {
                this.newsContent=res.data.data.newsContent
                this.drawer=true;
            });
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        searchChange(){
            // if(this.searchValue==""||this.searchValue==null){
            //     const DomTree=this.getAll()
            //     for(let i in DomTree){
            //         if(DomTree[i].innerText.indexOf(this.searchValue)!=-1&&DomTree[i].style.display!="none"&&DomTree[i].childNodes.length==1&&DomTree[i].firstElementChild==null){
            //             this.elementArrWindowHeight.push(DomTree[i].getBoundingClientRect().top)
            //             DomTree[i].style.backgroundColor=""
            //         }
            //     }
            // }else{
                let replaceReg = new RegExp(this.searchValue, 'g')
                let replaceString = '<span class="search-text" style="backgroundColor:red;">' + this.searchValue + '</span>'
                this.newsContent.replace(replaceReg,replaceString)
                console.log(this.newsContent)
                // const DomTree=this.getAll()
                // for(let i in DomTree){
                //     if(DomTree[i].innerText.indexOf(this.searchValue)!=-1&&DomTree[i].style.display!="none"&&DomTree[i].childNodes.length==1&&DomTree[i].firstElementChild==null){
                //         this.elementArrWindowHeight.push(DomTree[i].getBoundingClientRect().top)
                //         DomTree[i].innerHTML=DomTree[i].innerHTML.replace(replaceReg, replaceString)
                //         console.log(DomTree[i].innerHTML)
                //     }
                // }
                // for(let i in HTMLtext){
                    // if(HTMLtext[i].innerText.indexOf(this.searchValue)!=-1&&HTMLtext[i].style.display!="none"&&HTMLtext[i].childNodes.length==1&&HTMLtext[i].firstElementChild==null){
                    //     this.elementArrWindowHeight.push(HTMLtext[i].getBoundingClientRect().top)
                    //     HTMLtext[i].innerHTML=HTMLtext[i].innerHTML.replace(replaceReg, replaceString)
                    //     console.log(HTMLtext[i].innerHTML)
                    // }
                // }
            // }
        },
        tapToNextOrPre(e){
            // let reg =/^[\u4e00-\u9fa5]{0,}$/ig;
            let replaceReg = new RegExp(this.searchValue, 'g');
            let replaceString = '<span style="color:red;">' + this.searchValue + '</span>'
            // this.newsContent=this.newsContent.replace(replaceReg,replaceString)
            // console.log(this.newsContent)
            console.log(window)
        },
        getAll() {
            var objs = document.all;
            var length1;
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i].tagName;
                if (obj == "body" || obj == "BODY") {
                    length1 = i+1;
                    break;
                }
            }
            var b_objs = new Array();
            for (var j = length1; j < objs.length; j++) {
                b_objs.push(objs[j]);
            }
            return b_objs;
        }
    },
    created() {
        let user=JSON.parse(sessionStorage.getItem("user"));
        if(user){
            this.userInfo=user; 
            this.userName=user.userName;
            this.isLogin=!this.isLogin;
        }
    },
    watch: {
        isLogin(val){
            if(val){
                this.link="/fun"
            }
        },
       
    },
}
</script>
<style scoped>
    .search{
        width:500px;
        height: 50px;
        position: fixed;
        top: 74%;
        right: 4%;
        bottom: 0;
        background: #fafafa;
        transform: translateY(-100px);
        margin: auto;
        border: 1px solid #999;
        align-items: center;
        display: flex;
    }
    .search input{
        height: 100%;
        width: 100%;
        box-shadow: none;
        border: none;
        padding:0 20px;
        font-size: 16px;
    }
    .search div{
        width:50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink:0;
    }
    .search img{
        cursor: pointer;
    }
    .xfc_all{
        position: fixed;
        width: 55px;
        z-index: 999;
        right: 1%;
        background-color: #fff;
        bottom: 10%;
    }
    .xfc_ck{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size:14px;
    }
    .xfc_ck a{
        color: #fff;
    }
    .xfc_icon{
        position: relative;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dddddd;
        border-bottom:0;
        color: #9e0100;
        user-select: none;
    }
    .xfc_ck{
        border-bottom: 1px solid #dddddd;
    }
    .xfc_icon span{
        display: none;
    }
    .xfc_erweima{
        position: absolute;
        left: -119px;
        bottom: -4px;
    }
    .xfc_erweima img{
        display: none;
        width: 118px;
        height: 118px;
    }
    .xfc_icon p{
        font-size: 0.5em;
        color: #fff;
    }
     .gdt_tdhshuoMing::-webkit-scrollbar {
    width: 10px;
    }
    /* 滚动槽 */
    .gdt_tdhshuoMing::-webkit-scrollbar-track {
    border-radius: 8px;
    }
    /* 滚动条滑块 */
    .gdt_tdhshuoMing::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 8px 0 0 green inset;
    }
    .gdt_tdhshuoMing::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 #666 inset;
    }
    .gdt_tdhshuoMing::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }
    .gdt_tdhshuoMing::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    .gdt_tdhshuoMing:hover::-webkit-scrollbar {
        width: 10px;
    }
    .gdt_tdhshuoMing::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgba(0,0,0,0);
        box-shadow: 10px 0 0 #999 inset;
    } 
    .gdt_tdhshuoMing {
        overflow-y: overlay;
        word-wrap: break-word;
    }
    .gdt_tdhshuoMing {
        margin-left: calc(100vw - 100%);
    }
    .search > .twoButtonDiv{
        flex-direction: column;
        justify-content: space-around;
        padding: 0 4px;
    }
    .twoButtonDiv>span{
        user-select: none;
        color: #666;
        display: block;
        border: 1px solid #999;
        cursor: pointer;
    }
    @media screen and (max-width: 415px) {
        .xfc_all{
            display: none;
        }
    }
</style>