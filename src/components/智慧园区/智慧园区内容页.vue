<template>
	<div class="park_substance">
    
		<header_ :select_index="6"/>
		<xfc></xfc>
		<img src="../../assets/imgs/park_banner.jpg" class="park_banner" />
		<div class="park_substance_title">
			<div class="catalogue">
                <span><router-link to="/park">智慧园区</router-link></span>
                <span>园区的名称</span>
            </div>
		</div>
		<div class="park_substance_main">
			<div class="substance_main1_left">
				<div class="substance_main1_left_title">{{packName}}</div>
				<div class="substance_main1_left_int">
					<div class="substance_main1_left_int_title">园区简介：</div>
					<div class="substance_main1_left_int_con">{{packInfo}}</div>
				</div>
			</div>
			<img src="../../assets/imgs/park_logo.png"  />
		</div>
		<div class="park_substance_main2">
			<div class="park_substance_main2_dt">
				<div class="park_substance_dt_title">园区动态</div>
				<router-link v-for="item in yuanqudongtai" to="/investment" class="park_substance_dt_a" >
					<div class="park_substance_dt_link">{{item.newsBody}}</div>
					<div class="park_substance_dt_date">{{item.newsDt}}</div>
				</router-link>
			</div>
			<div class="park_substance_main2_zc">
				<div class="park_substance_dt_title">优惠政策</div>
				<router-link v-for="item in youhuizhengce" to="/investment" class="park_substance_dt_a" >
					<div class="park_substance_dt_link">{{item.newsBody}}</div>
					<div class="park_substance_dt_date">{{item.newsDt}}</div>
				</router-link>
			</div>
		</div>
		<div class="park_substance_main3">
			<div class="park_substance_main3_title">
				<div class="park_substance_dt_title">招商指南</div>
				<div class="park_substance_main3_titlelist">
					<div v-for="(item,index) in process_title" :key="index" :class="selected==index?'park_substance_select':''" @click="change(index)">{{item}}</div>	
				</div>
			</div>
			<div class="park_substance_name" >{{process_title[selected]}}流程</div>
			<div class="park_substance_main3_content">
				<img :src="process[selected]" style="display: block;width: 100%;height: 100%;"/>
			</div>
		</div>
		<div class="park_substance_main2">
			<div class="park_substance_main2_dt">
				<div class="park_substance_dt_title">招商信息</div>
				<router-link v-for="item in xinxi" :to="{path:'signUpContent',query:{'newsId':item.newsId}}" class="park_substance_dt_a" >
					<div class="park_substance_dt_link">{{item.newsTitle}}</div>
					<div class="park_substance_dt_date">{{item.createdTime}}</div>
				</router-link>
			</div>
			<div class="park_substance_main2_zc">
				<div class="park_substance_dt_title">融资需求</div>
				<router-link v-for="item in xuqiu" to="item.url" class="park_substance_dt_a" >
					<div class="park_substance_dt_link">{{item.title}}</div>
					<div class="park_substance_dt_date">{{item.date}}</div>
				</router-link>
			</div>
		</div>
		<div class="park_substance_main5">
			<div class="park_substance_dt_title">惠企配套</div>
			<div class="park_substance__main5_ul">
				<div>
					<img src="../../assets/imgs/qiye1.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye2.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye3.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye4.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye5.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye6.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye7.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye8.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye9.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye10.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye11.png" />
				</div>
				<div>
					<img src="../../assets/imgs/qiye12.png" />
				</div>
			</div>
		</div>
		<div class="park_substance_main6">
			<div class="park_substance_main3_title">
				<div class="park_substance_dt_title">园区名企</div>
				<div class="park_substance_main3_titlelist2">
					<div class="park_substance_main6_btn park_substance_main6_btn_left"><img src="../../assets/imgs/download_left.png" /></div>
					<div class="park_substance_main6_btn park_substance_main6_btn_right"><img src="../../assets/imgs/download_right.png" /></div>
				</div>
			</div>
			<div class="banner">
	            <div class="swiper-container">
	                <div class="swiper-wrapper">
	                    <div class="swiper-slide" v-for="item in company_logo">
	                    	<img :src="item"/>
	                    </div>
	                </div>
	            </div>
	        </div>
		</div>
		<footer_/>
	</div>
</template>
<script>
import {
	getParkList,
	getParkInfo,
	getMerchantList
} from '../api/api'
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import  park  from "../../data/park.js";
import Swiper from 'swiper'
import xfc from '@/components/public/悬浮窗.vue'
export default {
	components:{
		header_,
		footer_,
		xfc,
	},
	data(){
		return {
			//智慧园区list
			packInfo:'',
			dongtai:park.dongtai,
            zhengce:park.zhengce,
            selected:0,
            process_title:park.process_title,
            process:park.process,
            xinxi:[],
            xuqiu:park.xuqiu,
			company_logo:park.company_logo,
			packId:this.$route.query.packId,
			packName:"",
			yuanqudongtai:[],
			youhuizhengce:[],
		}
	},
	methods:{
		change(index){
			this.selected=index
		},
		getParkInfo(){ 
			//智慧园区数据页面调整
			getParkInfo({parkId:this.$route.query.packId}).then(res=>{
				this.packInfo=res.data.data.packInfo;
				this.packName=res.data.data.packName;
				for(var i=0;i<res.data.data.custParkNews.length;i++){
					if(res.data.data.custParkNews[i].newsType=="园区动态"){
						this.yuanqudongtai.push(res.data.data.custParkNews[i])
					}else if(res.data.data.custParkNews[i].newsType=="优惠政策"){
						this.youhuizhengce.push(res.data.data.custParkNews[i])
					}else if(res.data.data.custParkNews[i].newsType=="招商信息"){
						this.xinxi.push(res.data.data.custParkNews[i])
					}
				}
			})
		}
		
	},
	mounted() {
		this.getParkInfo();
        new Swiper(".swiper-container", {
        	slidesPerView: 6,
		    spaceBetween: 25,
		    navigation: {
		        nextEl: '.park_substance_main6_btn_left',
		        prevEl: '.park_substance_main6_btn_right',
		    },
		    loop:true
		})
    },
}
</script>
<style scoped>
	.park_substance{
		width: 100%;
		background-color:#fbfbfb  ;
		/* min-width: 1400px; */
	}
	.park_banner{
		display: block;
		width: 100%;
	}
	.park_substance_title{
		width: 100%;
		background-color: #fff;
		height: 95px;
		display: flex;
	}
	.catalogue{
		display: flex;
		width: 73%;
		margin: 0 auto;
		height: 100%;
		align-items: center;
	}
	.catalogue span a{
		color: #4a4a4a;
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
    .park_substance_main{
    	width: 73%;
    	display: flex;
    	margin: 60px auto 0;
    	justify-content: space-between;
    }
    .substance_main1_left_title{
    	height: 24px;
		font-size: 24px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
    }
    .substance_main1_left_int{
    	display: flex;
    	width: 100%;
    	justify-content: space-between;
    	margin-top: 25px;
    }
    .substance_main1_left_int_title{
    	width:115px ;
    	font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
    }
    .substance_main1_left_int_con{
    	font-size: 14px;
		width: 100%;
		height: 120px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
    }
    .park_substance_main2{
    	display: flex;
    	width: 73%;
    	margin: 50px auto 0;
    	justify-content: space-between;
    }
    .park_substance_main2_dt,
    .park_substance_main2_zc{
    	background-color: #fff;
    	width: 685px;
    	height: 230px;
    	padding: 20px 15px 15px;
    	box-sizing: border-box;
    	overflow: hidden;
    }
    .park_substance_dt_title{
    	font-size: 16px;
		line-height: 16px;
		letter-spacing: 0px;
		color: #333333;
		border-left: 3px solid #9e0000;
		padding-left: 5px;
		margin-bottom: 20px;
    }
    
    .park_substance_dt_a{
    	display: flex;
    	font-size: 14px;
		justify-content: space-between;
		line-height: 25px;
		letter-spacing: 0px;
		color: #888888;
    }
    .park_substance_main3,
    .park_substance_main5,
    .park_substance_main6{
    	display: flex;
    	width: 73%;
    	margin: 30px auto 0;
    	background: #fff;
    	padding: 20px 15px 15px;
    	box-sizing: border-box;
    	flex-direction: column;
    }
    .park_substance_main3_title{
    	width: 100%;
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	
    }
    .park_substance_main3_titlelist{
    	display: flex;
    	width:465px ;
    	justify-content: space-between;
    	color: #bbbbbb;
    }
    .park_substance_main3_titlelist div{
    	cursor: pointer;
    }
    .park_substance_select{
    	color: #9e0000 !important;
    }
    
    .park_substance_main3_content{
    	width: 100%;
    	display: flex;
    	flex-wrap: wrap;
    	align-items: center;
    	margin-top: 25px;
    	
    }
    
    .park_substance_name{
    	font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #999999
    }
    .park_substance__main5_ul{
    	display: flex;
    	flex-wrap: wrap;
    	width: 100%;
    	justify-content: space-between;
    }
    .park_substance__main5_ul div{
    	width:200px;
    }
    .park_substance__main5_ul img{
    	margin-bottom: 25px;
    }
    .park_substance_main6{
    	margin-bottom: 50px;
    }
    .park_substance_main6_btn{
    	display: flex;
    	width: 28px;
    	height: 28px;
    	background-color: #dddddd;
		border-radius: 2px;
		justify-content: center;
		align-items: center;
    }
    .park_substance_main3_titlelist2{
    	display: flex;
    	width:60px ;
    	justify-content: space-between;
    	color: #bbbbbb;
    	cursor: pointer;
    }
    .park_substance_main6_btn:hover,
    .park_substance_main6_btn:focus,
    .park_substance_main6_btn:active{
    	background-color:#9e0100;
    	outline: none !important;
    }
	.substance_main1_left{
		width: 65%;
	}
	.banner>div>div>div{
		display: inline-block;
		margin: 0 3.5rem;
	}
</style>