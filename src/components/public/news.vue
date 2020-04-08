<template>
    <div>
        <!-- 组件 -->
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
          :page-size="2"
          :total="fyPageNumber">
        </el-pagination>
      </div>
    </div>
</template>


<script>
import {getNews} from '../api/api'
import moment from 'moment'
export default {
    data(){
        return{
            fyPageNumber:1,
            newListNewsContent:[],
        }
    },
    filters:{
      format (val,arg) {
          if(!val) return;
           val = val.toString()
          return moment(val).format(arg)
      }
    },
    props:["newList","newsType"],
    methods:{
      
    },
    watch:{
      newList(newValue,oldValue){
        for(var i=0;i<newValue.length;i++){
          this.newListNewsContent.push(newValue[i].newsContent.replace(new RegExp("\S&nbsp;?|<(\S*?)[^>]*>.*?|<.*? />|&nbsp; ",'g'),''))
        }
        this.fyPageNumber=newValue.length
      },
    },
    mounted() {

    },
}
</script>

<style scope>
    
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
.article > span {
  font-size: 14px;
  color: #999;
}
.fy_page {
  width: 100%;
  height: auto;
  padding: 24px 0;
}
.number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.number:first-of-type {
  background: #e6e6e6;
}

@media screen and (max-width: 415px) {
  .content{
    display: flex;
    flex-direction: column;
  }
  .article{
    width: 100%;
  }
}
</style>
<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #9e0100;
    }
</style>