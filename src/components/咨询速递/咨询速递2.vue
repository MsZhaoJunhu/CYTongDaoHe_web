<template>
<!-- 已改 -->
  <div class="包裹">
        <header_ :select_index="3"/>
    <xfc></xfc>
    <div class="banner">
      <img src="../../assets/imgs/zxsd_banner.png" alt="行业最新信息及相关公司活动" />
      <div class="text">
        <p>最近我们在干什么？</p>
        <h1>行业最新信息及相关公司活动</h1>
      </div>
    </div>
    <div class="main_zxsd">
      <div class="xml_content">
        <div class="xlm_erz">
          <!-- <span>资讯速递</span> -->
          <span v-for="item in titleList">
             <router-link :to="item.link">{{item.content}}</router-link>
          </span>
        </div>
      </div>
      <!-- <news :newList="newList" :newsType="newsType" class="zxsd_news"></news> -->
      <div class="content"> 
       <template>
        <router-link v-for="(item,index) in newList" :key="index" :to='{path:"/zxsdinside",query:{"newsId":item.newsId,"newsType":newsType}}' class="article">
          <h3>{{item.newsTitle}}</h3>
          <p>{{newListNewsContent[index]}}</p>
          <span>{{item.newsDt | format('YYYY-MM-DD')}}</span>
        </router-link>
       </template>
      </div>
      <div class="fy_page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="8"
          :total="fyPageNumber"
          :current-page.sync="userCurrentPage"
          @current-change="sizeChange">
        </el-pagination>
      </div>
    </div>
     <footer_ />
  </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import news from '../public/news'
import {getNews} from '../api/api'
import xfc from '@/components/public/悬浮窗.vue'
import moment from 'moment'
export default {
  data(){
    return{
      titleList:[
         {link:"zxsd",content:'相关政策'},
         {link:'zxsd2',content:'行业动态'},
         {link:'zxsd3',content:'前沿趋势'}
      ],
      newList:'',
      index_title:1,
      newsType:0,
      userCurrentPage:1,
      fyPageNumber:1,
      newListNewsContent:[],
      key:this.$route.query.key||"",
    }
  },
  filters:{
    format (val,arg) {
        if(!val) return;
          val = val.toString()
        return moment(val).format(arg)
    }
  },
  methods:{
    chage(en){
      this.newsType=this.index_title=en;
      //请求数据
      getNews({newType:this.index_title}).then(res=>{
          if(res.data.code===200){
            this.newList=res.data.data
          }else{
            console.log("数据错误");
          }
      })
    },
    getNews(en){
      if(en){
        this.newsType=this.index_title=en;
        getNews({newType:en}).then(res=>{
            if(res.data.code===200){
              this.newList=res.data.data
            }else{
              console.log("数据错误");
            }
        })
      }else{
        getNews({newType:this.index_title}).then(res=>{
            if(res.data.code===200){
              this.newList=res.data.data
            }else{
              console.log("数据错误");
            }
        })
      }
    },
    sizeChange(val){
      getNews({newType:this.index_title,"pageNum":val}).then(res=>{
          if(res.data.code===200){
            this.newList=res.data.data
          }else{
            console.log("数据错误");
          }
      })
    }
  },
  components:{
    news,
    header_,
    footer_,
    xfc,
  },
  watch:{
    newList(newValue,oldValue){
      for(var i=0;i<newValue.length;i++){
        this.newListNewsContent.push(newValue[i].newsContent.replace(new RegExp("\S&nbsp;?|<(\S*?)[^>]*>.*?|<.*? />|&nbsp; ",'g'),''))
      }
      this.fyPageNumber=newValue.length
    },
  },
  mounted(){
    this.getNews();
  }
}

</script>

<style scoped>
.xlm_erz>span:nth-child(2)>a:first-child{
  color: #9e0100;
} 
.包裹{
  /* min-width: 1400px; */
}
.banner {
  width: 100%;
  position: relative;
}
.banner img {
  width: 100%;
}
.banner > .text {
  color: #d1d1d2;
  left: 260px;
  bottom: 55px;
  position: absolute;
}
.banner > .text > p {
  font-family: "华文细黑";
  font-size: 18px;
}
.banner > .text > h1 {
  font-weight: normal;
  letter-spacing: 4px;
  font-size: 56px;
}
.main_zxsd {
  position: relative;
  width: 73%;
  margin: 0 auto;
}
.xlm {
  height: 100px;
  line-height: 100px;
}
.xlm_erz span {
  padding: 0;
  background-position: right;
}
.xlm_erz span:after{
  content: "/";
  padding: 0 16px 0 16px;
}
.xlm_erz span:last-child::after{
  content: "" ;
  padding: 0;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.article {
  padding: 30px 0; 
  width: 48%;
  height: 180px;
  display: block;
  color: #333;
  border: 1px solid #999;
  border-left: 0;
  border-right: 0;
}
.fontSty>a{
  color: #9e0100 !important;
}
.article:nth-child(n+3){
  border-top: 0;
}
.article:hover{
  color:#9e0100;
}
.article > h3 {
  font-size: 20px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.article > p {
  margin: 30px 0 30px 0;
  word-break: break-word;
  font-size: 14px;
  width: 100%;
  color: #999;
  line-height: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.article > span {
  font-size: 14px;
  color: #999;
}
.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.page ul {
  margin: 30px 0;
  height: 30px;
  line-height: 30px;
}
.page ul > li {
  margin-right: 15px;
  list-style: none;
  float: left;
  text-align: center;
}
.number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.number:first-of-type {
  background: #e6e6e6;
}

.xlm_erz>span>a{
  color: #333
}

.xml_content {
  display: flex;
  padding-top: 32px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 16px;
}
.xml_content > span > input {
  width: 224px;
  height: 40px;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding-left: 10px;
  font-size: 24px;
  border: 0;
}
.xml_content > span > img {
    position: absolute;
    right: 20px;
    top:  40px;
}

@media screen and (max-width: 1400px) {
  .banner > .text {
    color: #d1d1d2;
    left: 180px;
    bottom: 30px;
    position: absolute;
  }
  .banner > .text > p {
    font-family: "华文细黑";
    font-size: 16px;
  }
  .banner > .text > h1 {
    letter-spacing: 4px;
    font-size: 48px;
  }
  
}
@media screen and (max-width: 415px) {
  .banner{
    display: none;
  }
  .main_zxsd{
    width: 100%;
  }
  .xml_content{
    padding-left: 10px;
  }
  .xlm_erz{
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
  }
  .xlm_erz>span:after{
    content: "|";
  }
  .zxsd_news >>> .article {
    padding: 30px;
    box-sizing: border-box;
    height: auto;
  }
  .zxsd_news >>> .article>p{
    margin: 20px 0 30px 0;
  }
  .zxsd_news >>> .page{
    padding: 0 15px; 
  }
}
</style>