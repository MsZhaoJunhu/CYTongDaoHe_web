<template>
    <div class="内容">
        <div class="banner">
            <label>
                <h1>快速解决您的问题</h1>
                <input type="text" placeholder="输入关键字搜索">
                <img class="search" src="../../../assets/icon/search.png"/>
            </label>
        </div>
        <table class="main_menu">
            <tr>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (1).png" alt="" /><p>工商注册</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (2).png" alt="" /><p>会计代理</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (3).png" alt="" /><p>商标注册</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (4).png" alt="" /><p>商标注册</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (5).png" alt="" /><p>法律咨询</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (6).png" alt="" /><p>法律咨询</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (7).png" alt="" /><p>品牌服务</p></router-link></td>
            </tr>
            <tr>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (8).png" alt="" /><p>财税咨询</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (9).png" alt="" /><p>项目咨询</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (10).png" alt="" /><p>项目申报</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (11).png" alt="" /><p>互联网</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (12).png" alt="" /><p>资质认证</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (13).png" alt="" /><p>认证服务</p></router-link></td>
                <td><router-link to="/"><img src="../../../assets/icon/main_icon (14).png" alt="" /><p>管理咨询</p></router-link></td>
            </tr>
        </table>
        <section>
            <h1 class="title">
                <span @click="changeIf1($event)">精选</span> & <span  @click="changeIf2($event)">VIP</span>
            </h1>
            <div class="model">
                <li>
                    <div>
                        <h3>营销方式</h3>
                        <span v-for="(item,index) in title1" :key="index" :class="num1==index?'selected':''"  @click="changeColor1(index)">{{item}}</span>
                    </div>

                </li>
                <li>
                    <div>
                        <h3>营销方式</h3>
                        <span v-for="(item,index) in title2" :key="index" :class="num2==index?'selected':''"  @click="changeColor2(index)">{{item}}</span>
                    </div>
                    <router-link to="/">
                        更多
                    </router-link>
                </li>
                <span class="more">
					更多<img src="../../../assets/icon/more.png"/>
				</span>
            </div>

            <div class="tabbar">
                <div>
                    <span v-for="(item,index) in title3" :key="index" :class="num3==index?'selected':''"  @click="changeColor3(index)">{{item}}<img src="../../../assets/icon/jiantou.png" alt="" /></span>
                </div>
                <label>
                    <em>
                        <i></i>
                    </em>
                    仅显示非投放类需求
                </label>
            </div>
            <div class="put_info" v-if=flag1>
                
                <router-link class="item" to="release_details">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="ywc">已完成</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

                <router-link class="item" to="release_inside">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="ywc">已完成</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

                <router-link class="item" to="release_inside">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="pdz">派单中</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

                <router-link class="item" to="release_inside">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="ygb">已关闭</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

            </div>
            <div class="put_info" v-if=flag2>
                
                <router-link class="item" to="release_inside">
                    <div class="img_box">
                        
                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>VIP2</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="ywc">已完成</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

                <router-link class="item" to="release_inside">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="ywc">已完成</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

                <router-link class="item" to="release_inside">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="pdz">派单中</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

                <router-link class="item" to="release_inside">
                    <div class="img_box">

                    </div>
                    <div class="info">
                        <div class="top">
                            <h4>
                                <span>房地产羡慕需要推广方案</span>
                                <p>2018/09/12 09:09</p>
                            </h4>
                            <button class="ygb">已关闭</button>
                        </div>
                        <div class="center">
                            <p>需求方：房地产项目代理方</p>
                            <p>项目情况：我方是代理公司，目前手里有一个房地产楼盘的项目，需要进行全案策划</p>
                            <p>项目需求：1、需要项目整体策划方案；2、内容包含线上线下；3、需要有过往案例经验；4、具体BRIEF请在附件中查看</p>
                            <p>预算：150W以内</p>
                        </div>
                        <div class="bottom">
                            <div>
                                <span>整合营销</span>
                                <span>整合营销</span>
                            </div>
                            <span>
								预算：<i class="money">150W元</i>
							</span>
                        </div>
                    </div>
                </router-link>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'all_projects',
        data() {
            return {
                title1:["不限","品牌广告","推广营销","创意/策划","技术开发"],
                title2:["不限","推广营销","创意/策划","技术开发"],
                title3:["综合","最新","价格"],
                num1:"",
                num2:"",
                num3:"",
                flag1:true,
                flag2:false,
            }
        },
        created(){
            this.$emit('select',2)
        },
        methods: {
            changeColor1(index){
                this.num1=index;
            },
            changeColor2(index){
                this.num2=index;
            },
            changeColor3(index){
                this.num3=index;
            },
            changeIf1(e){
                this.flag1=true;
                this.flag2=false;
                e.target.nextElementSibling.style.color="#000";
                e.target.style.color="#9E0100";
            },
            changeIf2(e){
                this.flag1=false;
                this.flag2=true;
                e.target.previousElementSibling.style.color="#000";
                e.target.style.color="#9E0100";
            },
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    body{
        background: #fbfbfb;
    }
    .banner{
        width: 100%;
        height: 361px;
        background-image: url(../../../assets/imgs/fabubanner.png);
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .banner label{
        height: 120px;
        position: relative;
    }
    .banner label h1{
        transform: translateY(-24px);
        text-align: center;
        font-size: 26px;
        color: #ffffff;
        opacity: 0.8;
    }
    .banner label input{
        box-sizing: border-box;
        padding-left:20px;
        padding-right:50px;
        width: 640px;
        height: 55px;
        background-color: #ffffff;
        border-radius: 10px;
        opacity: 0.8;
        border: none;
        font-size: 16px;
    }
    label .search{
        content:'';
        height: 21px;
        width: 21px;
        position: absolute;
        right: 15px;
        z-index: 9;
        bottom: 47px;
    }
    .main_menu{
        width: 1400px;
        margin: 60px auto;
        border-collapse: collapse;
    }
    .main_menu td{
        border: 1px solid #ebebeb;
        width: 200px;
        height: 186px;
    }
    .main_menu td a{
        position: relative;
        width: 100%;
        height: 100%;
        display:block;
        padding-top:45px;
        text-align: center;
    }
    .main_menu td a:hover:after{
        content:'';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background:rgba(158,1,0,.1);
        border: 2px solid #9E0100;
        top: 0px;
        left: 0px;
        box-sizing: border-box;
    }
    .main_menu td p{
        margin-top: 5px;
        font-size: 20px;
        color: #5a5a5a;
    }
    section{
        width: 1400px;
        margin: 0 auto;
    }
    section>.title{
        text-align: center;
        padding: 30px 0;
        font-size: 30px;
    }
    section>.title>span{
        cursor: pointer;
    }
    section>.title>span:hover{
        color: #9E0100;
    }
    section>.title span:first-child{
        color: #9E0100;
    }
    section .model li h3{
        width: 104px;
        height: 35px;
        background-color: #ededed;
        font-size: 16px;
        color: #4a4a4a;
        text-align:center;
        line-height: 35px;
    }
    section .model{
        border-bottom: 1px solid #d5d5d5;
        margin-bottom: 55px;
    }
    section .model li{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        justify-content: space-between;
    }
    section .model li div{
        display: flex;
        align-items: center;
    }
    section .model li span{
        margin: 0 24px;
        cursor: pointer;
    }
    section .model li span:hover{
        cursor: pointer;
        color: #9E0100;
    }
    section .model li a{
        width: 65px;
        height: 25px;
        background-color: #e8e8e8;
        text-align: center;
        line-height: 25px;
        font-size: 14px;
        color: #949494;
    }
    section .model li div span.selected{
        color: #9E0100;
    }
  
    section .model>span{
        height: 30px;
        width: 83px;
        display:flex;
        font-size: 14px;
        color: #c2c2c2;
        align-items:center;
        justify-content: center;
        border: 1px solid #c2c2c2;
        border-top-color:#fbfbfb;
        position: absolute;
        margin:0px calc((1400px - 85px) / 2);
    }
    section .model>.more{
        cursor: pointer;
    }
    section .model>.more img{
        margin-left: 5px;
    }
    section .tabbar{
        height: 35px;
        background: #9E0100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px;
        color: #fff;
        margin-bottom: 47px;
    }
    section .tabbar>div{
        display: flex;
        align-items: auto;
    }
    section .tabbar span{
        display: block;
        margin-right: 50px;
        opacity: .7;
    }
    section .tabbar span.selected{
        opacity: 1;
    }
    section .tabbar>div img{
        transform: translateY(2px);
    }
    section .put_info{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    section .put_info .item{
        width: 686px;
        height: 313px;
        margin-bottom: 30px;
        background-color: #ffffff;
        display:flex;
        box-sizing: border-box;
        padding:35px 20px;
    }
    section .put_info .item .img_box{
        height: 82px;
        width: 82px;
        margin-right: 20px;
        flex-shrink: 0;
        background: #ececec;
        overflow: hidden;
        border-radius: 50%;
    }
    section .put_info .item .info{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    section .put_info .item .info .top{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 5px;
    }
    section .put_info .item .info .top h4{
        font-size: 18px;
        color: #5a5a5a;
        padding-bottom: 5px;
    }
    section .put_info .item .info .top h4 p{
        font-size: 12px;
        color: #a5a5a5;
    }
    section .put_info .item .info .top button{
        width: 90px;
        height: 28px;
        border-radius: 14px;
        border: none;
        color: #fff;
        margin: 0;
        padding: 0;
    }
    section .put_info .item .info .top button.ywc{
        background-color: #9e0100;
        box-shadow: 0 3px 9px #9E0100;
    }
    section .put_info .item .info .top button.pdz{
        background-color: #1cbbbb;
        box-shadow: 0 3px 9px #1cbbbb;
    }
    section .put_info .item .info .top button.ygb{
        background-color: #e6e6e6;
        box-shadow: 0 3px 9px #e6e6e6;
        color: #7f7f7f;
    }
    section .put_info .item .info .center{
        height: 100%;
        overflow-y: auto;
    }
    section .put_info .item .info .center::-webkit-scrollbar {
        width: 5px;
    }
    section .put_info .item .info .center::-webkit-scrollbar-track {
        background-color:rgba(0,0,0,.1);
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    section .put_info .item .info .center::-webkit-scrollbar-thumb {
        background-color:#9E0100;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    section .put_info .item .info .center p{
        font-size: 14px;
        color: #807f7f;
        margin-bottom: 5px;
        overflow: auto;
    }
    section .put_info .item .info .bottom{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10px;
    }
    section .put_info .item .info .bottom div>span{
        background-color: #e9e9e9;
        border-radius: 12px;
        color: #939191;
        font-size: 14px;
        padding: 2px 10px;
    }
    section .put_info .item .info .bottom>span{
        color: #939191;
        font-size: 14px;
        padding: 2px 10px;
    }
    section .put_info .item .info .bottom .money{
        color: #939191;
        font-style: normal;
        font-size: 24px;
        color: #9e0100;
    }



</style>
