<template>
    <div class="company_news">
        <H1 v-if="flag">暂无新闻详情</H1>
        <template v-for="item in membershipInfo">
            <router-link :to="{path:'/zxsdinside',query:{newsId:item.newsId}}" class="news_article">
                <font class="news-title">{{item.newsTitle}}</font>
                <p class="introduction">{{item.newsContent}}</p>
                <span class="company-showtime">{{item.newsDt}}</span>
            </router-link>
        </template>
       
    </div>
</template>

<script>
    import {getMemNews} from '../../api/api'
    export default{
        data(){
            return{
                membershipInfo:"",
                flag:false
            }
        },
        methods:{
           getMemNews(){
               getMemNews({id:this.$route.query.id}).then(res=>{
                   if(res.data.code===200){
                    if(res.data.data.records=="" || res.data.data.records==null){
                        this.flag=true;
                        this.membershipInfo=""
                        return false;   
                    }
                    this.membershipInfo=res.data.data.records;
                   }
               })
           } 
        },
        created(){
            this.getMemNews();
        }
    }
   
</script>
<style scoped>
    a{
        color: #353535;
    }
   .company_news{
       background: #fff;
       padding: 0 25px 10px;
   }
   .news_article{
       display: block;
       border-bottom: 1px solid #dedede;
       padding-bottom: 40px;
       margin-top: 50px;
   }
   .news_article:last-child{
       border: 0;
   }
   .news-title{
       display: block;
       font-size: 20px;
       line-height: 24px;
       margin-bottom: 25px;
   }
   .introduction{
       font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e9e9e;
        text-indent: 2rem;
        margin-bottom: 40px;
   }
   .company-showtime{
       font-size: 14px;
        line-height: 28px;
        letter-spacing: 0px;
        color: #bbbbbb;
   }
   H1{
    margin-top: 20px
   }
   @media screen and (max-width: 415px) {
       .company_news{
           width: 100%;
           box-sizing: border-box;
       }
       .news_article{
           width:100%;
           padding: 16px 0;
           margin-top: 16px;
           border-top: 0;
       }
   }
</style>
