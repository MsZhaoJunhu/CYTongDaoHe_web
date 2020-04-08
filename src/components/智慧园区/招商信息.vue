<template>
	<div class="investment">
		<header_ :select_index="6"/>
		<xfc></xfc>
		<img src="../../assets/imgs/investment_banner.png" class="investment_banner"/>
		<div class="park_substance_title">
			<div class="catalogue">
                <span>智慧园区</span>
                <span>园区的名称</span>
                <span>招商报名</span>
            </div>
		</div>
		<form :class="role==1?'investment_main_per':'investment_main'">
				<div v-for="(item,key) in nvestment" :key="key" v-if="item.form_type==1" :class="item.class_name">
					<label>{{item.lab}}</label>
					<input :placeholder="item.input_place"  :name="item.form_name"/>
				</div>
				
				<div v-else-if="item.form_type==2" :class="item.class_name">
					<label>{{item.lab}}</label>
					
					<select v-for="childitem in item.list" :class="childitem.class_name" :name="childitem.form_name">
						<option v-for="grandsonitem in childitem.option" :value="grandsonitem.value">{{grandsonitem.name}}</option>
					</select>
					<div style="clear: both;"></div>
				</div>
				
				
				<div v-else-if="item.form_type==3" :class="item.class_name">
					<label>{{item.lab}}</label>
					<textarea  :placeholder="item.input_place" :name="item.form_name"></textarea>
				</div>
				
				
				<div v-else-if="item.form_type==4" :class="item.class_name">
					<input type="checkbox" :placeholer="item.input_place" :name="item.form_name"/>
					<label>{{item.input_place}}</label>
				</div>
				
				<img src="../../assets/imgs/submit.png" class="submit_img"/>
			
		</form>
		<footer_/>
	</div>
</template>
<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import  investment  from "../../data/park.js";
import xfc from '@/components/public/悬浮窗.vue'
	export default {
	components:{
		
		header_,
		footer_,
		xfc,
	},
    data(){
        return {
        	role:1,//  0、公司   1、个人
            nvestment:''
            
        }
    },
    mounted() {
    	if(this.role==0){
    		this.nvestment=investment.investment_con
    	}else{
    		this.nvestment=investment.investment_per
    	}
    },
    methods:{
        changes(key){
           
        }
    }
}
</script>
<style>
	.investment{
		/* min-width: 1400px; */
	}
	.investment_banner{
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
	
	.investment_main{
		background-color: #FAFAFA;
		width: 73%;
		height: 490px ;
		padding: 35px 15px 0 15px;
		margin: 0 auto 50px;
	}
	.investment_main_per{
		background-color: #FAFAFA;
		width: 73%;
		height: 490px ;
		padding: 35px 15px 0 15px;
		margin: 0 auto 50px;
		display: flex;
		flex-direction: column;
	}
	.investment_input{
		display: flex;
		height: 38px;
		align-items: center;
		float: left;
		margin-bottom: 25px;
	}
	.investment_input label,
	.investment_input_select label,
	.nvestment_textarea label{
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #666666;
		width: 90px;
		height: 100%;
	}
	.investment_input input{
		height: calc(100% - 2px);
		width: calc(100% - 90px);
		text-indent: 10px;
		color: #666666;
	}
	.investment_input_compay{
		width: 570px;
	}
	.investment_input_address{
		margin-left:155px ;
		width: 580px;
	}
	.investment_input_select{
		float: left;
		display: flex;
		height: 38px;
		margin-bottom: 25px;
	}
	.investment_input_address label{
		width: 120px !important;
	}
	
	.investment_select1,
	.investment_select2,
	.investment_select3{
		float: left;
		width: 180px;
		height: 36px;
		border-radius: 1px;
		color: #999999;
		margin-right: 20px;
		outline: none;
		text-indent: 10px;
	}
	.nvestment_textarea{
		width: 673px;
		height:75px !important ;
		display: flex;
		clear: both;
		margin-bottom: 25px;
	}
	.nvestment_textarea label{
		align-items: flex-start !important; 
	}
	.nvestment_textarea textarea{
		height: calc(100% - 2px);
		width: calc(100% - 90px);
		color: #666666;
		text-indent: 10px;
		line-height: 20px;
		margin-left: 0;
	}
	.investment_publics{
		margin-left: 94px;
		width: 270px;
	}
	.investment_tell label{
		width: 70px !important;
	}
	.investment_qq label{
		width: 40px !important;
	}
	.investment_wx label{
		width: 40px !important;
	}
	
	
	
	.investment_publics input{
		width: calc(100% - 94px);
	}
	
	
	.investment_radio{
		clear: both;
		margin-left: 90px;
		display: flex;
		align-items: center;
		margin-bottom: 60px;
	}
	
	.investment_radio label{
		font-size: 14px;
		margin-left: 5px;
		letter-spacing: 0px;
		color: #a2a2a2;
	}
	.submit_img{
		margin-left: 90px;
		cursor:pointer;
		width: 250px;
	}
	.investment_per_qq,
	.investment_per_tell,
	.investment_per_name,
	.investment_per_wx{
		width: 270px !important;
	}
	.investment_per_qq label,
	.investment_per_tell label,
	.investment_per_name label,
	.investment_per_wx label{
		justify-content: flex-end;
	}
	.investment_per_qq input,
	.investment_per_tell input,
	.investment_per_name input,
	.investment_per_wx input{
		margin-left: 20px;
	}
    @media screen and (max-width: 415px) {
		.park_substance_title{
			height: auto;
		}
		.catalogue{
			padding: 16px 24px;
			width: 100%;
			height: 32px;
		}
		.investment_main_per{
			width: 100%;
			margin: 0;
			padding: 0 24px;
			box-sizing: border-box;
		}
		.investment_input{
			margin: 16px 0 0 0;
			height: 32px;
		}
		.investment_input>label:after{
			content: ":"
		}
		.investment_input>input{
			border: 1px solid #999;
		}
		.submit_img{
			width: 50%;
			margin-top: 16px;
		}
	}
</style>