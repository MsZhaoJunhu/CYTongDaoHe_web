<template>
    <div class="内容">
        <router-link :to="{path:'/glgzInside',query:{'newsId':item.newsId}}" class="articles" v-for="item in newsList" >
            <h3>{{item.newsTitle}}</h3>
            <p>{{item.newsContent}}</p>
            <span>{{item.newsDt}}</span>
        </router-link>
        <!-- <div class="page">
            <ul>
                <li class="number">1</li>
                <li class="number">2</li>
                <li class="number">3</li>
                <li class="number">4</li>
                <li class="number">5</li>
            </ul>
        </div> -->
    </div>
</template>

<script>
import {getNews} from '../../api/api'
import { Loading } from 'element-ui';
    export default {
        mounted() {
            this.$emit('updatetitle','2')
        },
        created() {
            let loadingInstance = Loading.service(true);
            getNews({"newType":6}).then(res=>{
                if(res.data.code===200){
                    this.newsList=res.data.data
                    for(var i=0;i<this.newsList.length;i++){
                        this.newsList[i].newsContent=this.newsList[i].newsContent.replace(new RegExp("\S&nbsp;?|<(\S*?)[^>]*>.*?|<.*? />|&nbsp;|&gt;",'g'),'')
                    }
                     loadingInstance.close();
                }else{
                    loadingInstance.close();
                }
            })
           
        },
        data() {
            return {
                newsList:[],
                loading:true,
            }
        },
    }
</script>

<style scoped>
    .articles{
        border-bottom: #d1d1d2 1px solid;
        padding: 50px 0;
        width: 100%;
        color: #333;
        display: block;
    }
    .articles>h3{
        font-size: 20px;
        font-weight:normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .articles>p{
        margin: 20px 0 20px 0;
        word-break:break-word;
        font-size: 14px;
        width: 100%;
        color: #999;
        line-height: 25px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .articles>span{
        font-size: 14px;
        color: #999;
    }
    .articles:last-child{
        border-bottom:0px;
    }
    .page ul{
        margin: 30px 0;
        height: 30px;
        line-height: 30px;
    }
    .page ul>li{
        margin-right:15px;
        list-style: none;
        float: left;
        text-align: center;
    }
    .number{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .number:first-of-type{
        background: #e6e6e6;
    }
    @media screen and (max-width: 415px) {
        .articles>*{
            padding: 0 16px;
            box-sizing: border-box;
        }
        .articles{
            padding: 16px 24px;
            box-sizing: border-box;
        }
        .articles>h3{
            font-size: 16px;
        }
        .articles>p{
            font-size: 14px;
        }
        .articles>span{
            font-size: 12px;
        }
        .page{
            padding:0 16px;
        }
    }
</style>
<style>
.el-loading-spinner .path{
    stroke: #9e0100;
}
</style>