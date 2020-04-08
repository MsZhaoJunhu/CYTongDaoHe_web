<template>
    <div class="company_int">
        <div class="company-left">
            <div class="company_title">联系我们</div>
            <p class='company_address'>公司名称：{{menAboutInfo.corpName}}<br/>
                公司地址：{{menAboutInfo.corpAdd}}</p>
            <div class="company-border"></div>
            <div class="company_contact_info" >销售部联系信息</div>
            <div class="company_pos_info" v-for="(item,key) in menAboutInfo.custCorpSalesmen " :key="key" >
                <font>联系人: {{item.saleName}}</font>
                <font>邮件: {{item.saleEmail}}</font> 
                <font>电话: {{item.salePhone}}</font>
                <font>传真: {{item.saleFax}}</font>
                <div class="company-border"></div>
            </div>
           
            
        </div>
        <div class="company-right">
            <img src="@/assets/imgs/conpany-right.jpg"/>
        </div>
    </div>
</template>

<script>
    import {getMemAbout} from '../../api/api'
    export default{
        data(){
            return{
                id:this.$route.query.id,
                menAboutInfo:"",
            }
        },
        methods:{
           getMemAbout(){
               getMemAbout({id:this.id}).then(res=>{
                   if(res.data.code===200){
                    this.menAboutInfo=res.data.data;
                   }
               })
           } 
        },
        created(){
            this.getMemAbout();
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
       color: #999999;
       font-size: 16px;
       line-height: 28px;
   }
   .company-border{
       margin-top:20px;
       width: 100%;
       height: 1px;
       background: #eeeeee;
   }
   .company_contact_info{
       color: #9f0100;
       font-size: 18px;
       line-height: 28px;
       margin-top: 20px;
   }
   
   .company_pos_info{
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
       margin-top: 15px;
   }
  .company_pos_info font{
       color: #999999;
       width: 50%;
       padding: 5px 0;
   }
   @media screen and (max-width: 415px) {
       .company_int{
           padding: 8px 16px;
           display: flex;
           flex-direction: column;
       }
       .company_pos_info{
           display: flex;
           flex-direction: column;
       }
       .company-right>img{
           width: 100%;
       }
       .company-left{
           width: 100%;
       }
   }
</style>
