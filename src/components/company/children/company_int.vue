<template>
    <div class="company_int">
        <div class="company-left">
            <div class="company_title">{{membershipInfo.corpName}}</div>
            <p class='company_address'>
               云南红河康发山棕床垫厂主要产品有：全山棕床垫·山棕薄垫·床垫·棕垫·无胶山棕床垫，其中“红榈”牌全天然山棕床垫是我厂通过国家机构认证、采用专利设计包装的优质产品，凭借其绿色保健、品质优良、价格适中等优点深受消费者的青睐，畅销云南、四川、重庆，贵州、福建、浙江，河北等全国各地，并远销泰国、越南、老挝等东南亚国家。主要原料产品：一、二级棕丝、棕片乱丝、棕骨直丝等</p>
            <div class="company-border"></div>
            <div class="company_range">
                <font class="company-red">经营范围：</font>{{membershipInfo.manageRange}}
            </div>
            <div class="company-border"></div>
             <div class="company_showc">
                 <div>
                    <font class="company-red">成立日期：</font>
                    <font class="company-cent">{{membershipInfo.establishDate}}</font>
                </div>
                <div>
                    <font class="company-red">注册资金：</font>
                    <font class="company-cent">{{membershipInfo.registerCapital}}</font>
                </div>
                <div>
                    <font class="company-red">所属行业：</font>
                    <font class="company-cent"> {{membershipInfo.subIndustry}}</font>
                </div>
                <div>
                    <font class="company-red">所属区域：</font>
                    <font class="company-cent">{{membershipInfo.subArea}}</font>
                </div>
                <div>
                    <font class="company-red">企业规模：</font>
                    <font class="company-cent"> {{membershipInfo.corpScale}}</font>
                </div>
                <div>
                    <font class="company-red">人员规模：</font>
                    <font class="company-cent">{{membershipInfo.personnelScale}}</font>
                </div>
               
                
            </div>
        </div>
        <div class="company-right">
            <img src="@/assets/imgs/conpany-right2.jpg"/>
        </div>
    </div>
</template>

<script>
    import {getMembershipInfo} from '../../api/api'
    export default{
        data(){
            return{
                id:this.$route.query.id,
                membershipInfo:"",
            }
        },
        methods:{
           getMembershipInfo(){
               getMembershipInfo({id:this.id}).then(res=>{
                   if(res.data.code===200){
                    this.membershipInfo=res.data.data;
                   }
               })
           } 
        },
        created(){
            this.getMembershipInfo();
        }
    }
    
</script>
<style scoped>
   .company_int{
       background: #fff;
       padding: 55px 25px 10px;
       display: flex;
       justify-content: space-between
   }
   .company-left{
       width: 575px;
   }
   .company-right{
       margin-top:40px;
   }
   .company_title{
       color: #353535;
       font-size: 24px;
       margin-bottom: 20px;
   }
   .company_address{
       font-size: 14px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #999999;
        text-indent:2rem;
   }
   .company-border{
       margin-top:20px;
       width: 100%;
       height: 1px;
       background: #eeeeee;
   }
  .company_range{
      font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #999999;
        margin-top: 25px;
  }
 .company-red{
        color: #9f0100;
  }
  .company_showc{
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
  }
   .company_showc div{
       width: 50%;
   }
   .company-cent{
       font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #999999;
        line-height: 32px;
   }
   @media screen and (max-width: 415px) {
        .company_int{
            padding: 8px;
            display: flex;
            flex-direction: column;
        }
        .company-left{
            width: 100%;
        }
        .company-left>div:first-child{
            margin:0 0 16px 0;
        }
        .company-border,.company_range,.company_showc,.company-right{
            margin: 16px 0 0 0 ;
        }
        .company-right>img{
            width: 100%;
        }
        .company_int div{
            
        }
    }
</style>
