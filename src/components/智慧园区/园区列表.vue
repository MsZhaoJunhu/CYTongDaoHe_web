<template>
    <div clas="park_main">
        <header_ :select_index="6"/>
        <xfc></xfc>
        <div class="park_banner">
            <label>
                <h1>快速查询园区信息</h1>
                <input type="text" placeholder="输入关键字搜索">
                <img class="park_search" src="../../assets/imgs/search.png"/>
            </label>
        </div>
        <div class="park_title">智慧园区</div>
        <div class="park_select">
            <div class="park_select_ul">
                <div class="park_select_title">热门</div>
                <div class="park_select_li">
                    <div v-for="(item,i) in hotCity" :key="i" :class="hotIndex==i?'park_select_font park_selected':'park_select_font'" @click="selectHotCity(i,item)">{{item}}</div>
                </div>
            </div>
            <div class="park_select_ul">
                <div class="park_select_title">区域</div>
                <div class="park_select_li">
                    <div :class="index==-1?'park_select_font park_selected':'park_select_font'" @click="selectAllCity">全部</div>
                    <div v-for="(item,i) in ares" :key="i" :class="index==i?'park_select_font park_selected':'park_select_font'" @click="selectShengFen(i,item.itemName,item.dictItemId)">{{item.itemName}}</div>
                </div>
                <button class="media_more_btn" @click="yqlb_click($event)">更多</button>
            </div>
            <div class="park_select_ul secendCity2">
                <div class="park_select_title">地区</div>
                <div class="park_select_li" style="height:auto;">
                    <div :class="index2==-1?'park_select_font park_selected':'park_select_font'" @click="selectAllCity2">全部</div>
                    <div v-for="(item,i) in ares2" :key="i" :class="i==index2?'park_select_font park_selected':'park_select_font'" @click="selectCity(i,item.itemName,item.dictItemId)">{{item.itemName}}</div>
                </div>
                <button class="media_more_btn" @click="yqlb_click($event)">更多</button>
            </div>
            <div class="park_select_ul">
                <div class="park_select_title">级别</div>
                <div class="park_select_li">
                    <div v-for="(item,i) in level" :key="i" :class="indexLevel==i?'park_select_font park_selected':'park_select_font'" @click="selectLevel(i,item)">{{item}}</div>
                </div>
            </div>
            <div class="park_select_ul">
                <div class="park_select_title">产业</div>
                <div class="park_select_li">
                    <div v-for="(item,i) in industry" :key="i" :class="indexIndustry==i?'park_select_font park_selected':'park_select_font'" @click="selectIndustry(i,item)">{{item}}</div>
                </div>
                <button class="media_more_btn" @click="yqlb_click($event)">更多</button>
            </div>
            <div class="park_select_ul">
                <div class="park_select_title">类型</div>
                <div class="park_select_li">
                    <div v-for="(item,i) in type" :key="i" :class="indexType==i?'park_select_font park_selected':'park_select_font'" @click="selectType(i,item)">{{item}}</div>
                </div>
                <button class="media_more_btn" @click="yqlb_click($event)">更多</button>
            </div>
        </div>
        <div class="park_tabbar">
            <div>
                <span v-for="(item,index) in tabbar" :key="index" class="Selected"  @click="changeColor5(index)">{{item}}<img src="@/assets/imgs/jiantou.png" alt="" /></span>
            </div>
        </div>
        <div class="park_content">        
            <div class="park_content_left">
                <el-row type="flex" justify="start" v-for="(item,key) in parkList" :key="key" class="thisMyElRow">
                    <el-col :span="6">
                        <img :src="item.parkImg" class="park_left_li_img"/>
                    </el-col>
                    <el-col :span="14" :push="2">
                        <div class="park_left_title">{{item.parkName}}</div>
                        <div class="park_left_intr">{{item.parkIntro}}</div>
                        <div class="park_left_list">
                            <font class="park_left_other park_addre">所在地区：{{item.parkProvince}}-{{item.parkCity}}</font>
                            <font class="park_left_other park_yuanqu">园区类型：{{item.parkType}}</font>
                            <font class="park_left_other park_chanye">产业规划：{{item.parkPlan}}</font>
                        </div>
                        <router-link :to="{path:'/park_substance',query:{packId:item.parkId}}" class="park_ckxq">查看详情</router-link>
                    </el-col>
                </el-row>
            </div>
            <div class="park_content_right">
                <div class="park_right_title">园区排行</div>
                <div v-for="(item,k) in park_list" :key="k" class="park_right_title_ul">
                    <span v-if="(k+1)==1" class="park_right_title_li park_right_title_li1">{{k+1}}</span>
                    <span v-else-if="(k+1)==2" class="park_right_title_li park_right_title_li2">{{k+1}}</span>
                    <span v-else-if="(k+1)==3" class="park_right_title_li park_right_title_li3">{{k+1}}</span>
                    <span v-else class="park_right_title_li">{{k+1}}</span>{{item.parkName}}
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <footer_ />
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import  ares  from "../../data/park.js";
import  hotCity  from "../../data/park.js";
import {getParkList,getHotPark,getCity1,getCity2} from "../api/api"
import xfc from '@/components/public/悬浮窗.vue'
export default {
    components: {
        header_,
        footer_,
        xfc,
    },
    data(){
        return {
            //园区list
            parkList:'',
            ares:"",
            ares2:"",
            park_list:"",
            list1:true,
            list2:true,
            list3:false,
            list4:false,
            tabbar:["默认","最新"],
            redMore:"更多",
            rotate:0,
            index:-1,
            index2:-1,
            selectShengFenID:"",
            selectCityID:"",
            hotCity:["全部","北京市","天津市","上海市","江苏省","山东省","广东省","福建省","浙江省","湖北省","四川省","重庆市"],
            level:["全部","国家级","省级","市级","区县级","乡镇级","其他"],
            industry:["全部","能源电力","环保节能","文化创意","金融保险","交通运输","医疗医药","食品饮料","旅游酒店餐饮","仓储物流","汽车工业","房地产建筑","化工日化","机械设备","家电数码","建材冶金","纺织服装","轻工业","装备制造","石油化工","高新技术","航空航天","电子信息","国防科技产业","农林牧渔","科技服务","总部经济","电子产业","生产性服务业","贸易行业","大消费","电子商务"],
            type:["全部","开发区","高新区","新城区","创意产业园","总部经济园","工地产业项目","办公园区","生态城","产业综合体","物流基地","孵化器","众创空间","边境经济合作区","海关特殊区","其他"],
            hotIndex:0,
            indexLevel:0,
            indexIndustry:0,
            indexType:0,
        }
    },
    created(){
        this.getParkList();
    },
    methods:{
        getParkList(){
		    getParkList().then(res=>{
                this.parkList=res.data.data;
            })
        },
        // 更多
        yqlb_click(e){
            var pre=e.target.previousElementSibling;
            var par=e.target.parentElement;
            if(e.target.innerHTML=="更多"){
                pre.style.height="auto"
                par.style.height="auto"
                e.target.innerHTML="隐藏"
            }else if(e.target.innerHTML=="隐藏"){
                pre.style.height="35px"
                par.style.height="35px"
                e.target.innerHTML="更多"
            }
        },
        // 省份中选择了全部
        selectAllCity(){
            this.index=-1;
            this.index2=-1;
            getCity1().then(res=>{
                this.ares=res.data.data;
            })
        },
        // 选择省份
        selectShengFen(i,itemName,dictItemId){
            this.index=i;
            this.index2=-1;
            // 省份id
            this.selectShengFenID=itemName;
            this.selectCityID="";
            // 变红，中文名字，对应id
            getCity2({"itemId":dictItemId}).then(res=>{
                if(res.data.code==200){
                    this.ares2=res.data.data;
                    let secendCity2=document.getElementsByClassName("secendCity2")
                    secendCity2[0].style.display="flex";
                }
            })
            // 触发筛选
            getParkList({"parkProvince":this.selectShengFenID,"parkCity":null}).then(res=>{
                if(res.data.code==200){
                    this.parkList=res.data.data
                }
            })
        },
        // 地区中选择了全部
        selectAllCity2(){
            this.index2=-1;
            if(this.index==-1){
                getCity2().then(res=>{
                    this.ares2=res.data.data;
                })
            }else{
                for(var i=0;i<this.ares.length;i++){
                    if(this.ares[i].itemName==this.selectShengFenID){
                        getCity2({"itemId":this.ares[i].dictItemId}).then(res=>{
                            if(res.data.code==200){
                                this.ares2=res.data.data;
                                let secendCity2=document.getElementsByClassName("secendCity2")
                                secendCity2[0].style.display="flex";
                            }
                        })
                    }
                }
            }
        },
        // 选择地区
        selectCity(i,itemName,dictItemId){
            // 省份id
            this.selectShengFenID;
            // 选择的城市Id
            this.selectCityID=itemName;
            // 变红，中文名字，对应id
            this.index2=i;
            // 触发筛选
            getParkList({"parkProvince":this.selectShengFenID,"parkCity":this.selectCityID}).then(res=>{
                if(res.data.code==200){
                    this.parkList=res.data.data
                }
            })
        },
        // 选择热门
        selectHotCity(i,name){
            this.hotIndex=i
            if(this.hotIndex==0){
                this.index=-1;
                this.index2=-1;
                getCity1().then(res=>{
                    this.ares=res.data.data;
                })
                getCity2().then(res=>{
                    this.ares2=res.data.data;
                })
            }else{
                for(var i=0;i<this.ares.length;i++){
                    if(this.ares[i].itemName==name){
                        this.selectShengFen(i,name,this.ares[i].dictItemId)
                    }
                }
            }
        },
        selectLevel(i){
            this.indexLevel=i;
        },
        selectIndustry(i){
            this.indexIndustry=i;
        },
        selectType(i){
            this.indexType=i;
        },
    },
    mounted() {
        getHotPark().then(res=>{
            this.park_list=res.data.data
        })
        getCity1().then(res=>{
            this.ares=res.data.data;
        })
        getCity2().then(res=>{
            this.ares2=res.data.data;
        })
    },
}
</script>
<style scoped>
    .park_main{
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5;
    }
    .park_banner{
        width: 100%;
        height: 361px;
        background-position: center;
        background-image: url('../../assets/imgs/park_banner.jpg');
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .park_banner label{
        height: 120px;
        position: relative;
        
    }
    .park_banner label h1{
        font-size: 26px;
        line-height: 24px;
        letter-spacing: 0px;
        color: rgba(255,255,255,0.8);
        transform: translateY(-24px);
    }
    .park_banner label input{
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
    label .park_search{
        content:'';
        height: 21px;
        width: 21px;
        position: absolute;
        right: 15px;
        z-index: 9;
        bottom: 57px;
        cursor: pointer;
    }
    .park_title{
        display:flex;
        width: 100%;
        justify-content: center;
        font-size: 30px;
        line-height: 24px;
        color: #353535;
        margin-top: 65px;
        margin-bottom: 50px;
        /* min-width: 1400px; */
    }
    .park_select{
        width: 73%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        border-bottom:1px solid #d5d5d5;
        height: auto;
        position:relative;
        z-index: 2;
        /* min-width: 1400px; */
       
    }
    .park_select_ul{
        display: flex;
        flex-direction: row;
        margin-bottom: 25px;
        height: 35px;
        overflow: hidden;
    }
    .park_select_title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 104px;
        height: 35px;
        background-color: #ededed;
        text-align: center;
        color: #4a4a4a;
    }
    .park_select_all{
        display: flex;
        justify-content: center;
        align-items: center;
        width:35px;
        height: 35px;
        margin-left: 24px
    }
    
    .park_select_li{
        width:calc(100% - 104px - 90px - 48px);
        line-height: 35px;
        display: flex;
        flex-wrap: wrap;
        margin-left: 16px;
    }
    .park_select_font{
        margin:0 5px;
        width: auto;
        text-align: center;
        cursor: pointer;
        margin-right: 24px;
    }
    .park_selected{
        color:  #9e0000;
    }
    .park_retract{
        width: 65px;
        height: 25px;
        background-color: #fafafa;
        border: solid 1px #bbbbbb;
        font-size: 14px;
	    line-height: 25px;
        text-align: center;
        cursor: pointer;
    }
    .park_more_btn{
        width: 65px;
        height: 25px;
        background-color: #e8e8e8;
        font-size: 14px;
        text-align: center;
        line-height: 25px;
        color: #949494;
        cursor: pointer;
    }
    .park_more{
        width: 83px;
        height: 29px;
        background-color: #fbfbfb;
        border: solid 1px #d5d5d5;
        text-align: center;
        line-height: 29px;
        margin:-1px auto 0;
        position:relative;
        z-index: 3;
        border-top: none;
        cursor: pointer;
        font-size: 14px;
        color: #c2c2c2;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    .park_more i{
        width:0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color: #c2c2c2 transparent transparent transparent;
    }
    .park_tabbar{
        width:73%;
        margin:30px auto 0;
        height: 35px;
        background: #9E0100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px;
        color: #fff;
        margin-bottom: 47px;
        /* min-width: 1400px; */
    }
    .park_tabbar>div{
        display: flex;
        align-items: auto;
    }
    .park_tabbar span{
        display: block;
        margin-right: 50px;
        opacity: .7;
    }
    .park_tabbar span:hover{
        opacity: 1;
        cursor: pointer;
    }
    .park_tabbar.selected{
        opacity: 1;
    }
    .park_tabbar>div img{
        transform: translateY(2px);
    }
    .park_content{
        width: 73%;
        margin:0 auto;
        /* min-width: 1400px; */
    }
    .park_content_left{
        float: left;
        width: 80%;
    }
    .park_content_right{
        float:right;
        background-color: #fff;
        width: 20%;
        padding: 30px 20px;
        box-sizing: border-box
    }
    .clear{
        clear: both
    }
    .park_right_title{
        font-size: 20px;
    }
    .park_right_title_ul{
        display: flex;
        align-items: center;
        color: #353535;
        margin-bottom: 15px;
        height: 20px;
        font-size: 14px;
        color: #676767;
        margin-top: 20px
    }
    .park_right_title_li{
        display: inline-block;
        font-size: 12px;
        text-align: center;
        color: #ffffff;
        width: 16px;
        height: 16px;
        line-height: 16px;
        background-color: #888888;
        border-radius: 2px;
        margin-right: 5px;
        margin-top: 2px
    }
    .park_right_title_li1{
        background-color: rgba(158,0,0,1) !important; 
    }
    .park_right_title_li2{
        background-color: rgba(158,0,0,0.5) !important;
    }
    .park_right_title_li3{
        background-color: rgba(158,0,0,0.2) !important;
    }

    .park_left_li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 25px;
        box-sizing: border-box
    }
    .park_left_li_img{
        width: 100%;
    }
    .park_left_title{
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0px;
        color: #353535;
    }
    .park_left_intr{
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #777777;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .park_left_list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 0.5rem;
    }
    .park_left_other{
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #bbbbbb;
        display: flex;
        align-items: center;
        margin-right:35px;
        margin-bottom: 10px
        
    }
    .park_left_other::before{
        display: inline-block;
        content:"";
        height: 14px;
        margin-right: 5px ; 
        background-repeat: no-repeat; 
    }
    .park_addre::before{
        width:11px;
        background-image:url('../../assets/imgs/location-point.png'); 
    }
    .park_yuanqu::before{
        width:14px;
        background-image:url('../../assets/imgs/yuanqu.png');
    }
    .park_chanye::before{
        width:16px;
        background-image:url('../../assets/imgs/guihua.png');
    }
    .park_ckxq{
        width: 96px;
        height: 32px;
        background-color: #9e0100;
        border-radius: 3px;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0px;
        color: #ffffff;
        text-align: center;
        float: right;
    }
    .media_more_btn{
        width: 48px;
        height: 35px;
        border: 0px;
    }
    .re{transform:rotate(180deg);
        -ms-transform:rotate(180deg); /* Internet Explorer 9*/
        -moz-transform:rotate(180deg); /* Firefox */
        -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
        -o-transform:rotate(180deg); /* Opera */
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    }
    .thisMyElRow{
        margin-bottom: 2rem;
    }
</style>