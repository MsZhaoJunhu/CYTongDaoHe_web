<template>
    <div class='progress-four'>
         <div class='title'>
                        <p class='title-top'></p>
                        <p class='title-mid'>
                            <span>
                             04
                            </span>
                            <span class='dot'>

                            </span>
                        </p>
                        <p class='title-bottom'>项目评价</p>
        </div>
        <div class='content'>
            
            <progressFourChild>
                <template v-slot:bottomTable>
                    <div class='nav-list'>
                        <ul @click="changeTabSelect($event)">
                            <li>里程碑一</li>
                            <li>里程碑二</li>
                            <li>里程碑三</li>
                            <li>里程碑四</li>
                        </ul>
                    </div>
                </template>
                <template mode="out-in">
                    <div v-if="tabSelect==1">
                        <div class='detail'>
                            <div class='left-part'>
                                <p class='grey-color'>服务商星级评分：
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'>项目1111的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div class='grey-color'>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p  class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div> 
                            <div class='right-part'>
                                <p class='grey-color'>需求方星级评分：
                                        <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'> 项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabSelect==2">
                        <div class='detail'>
                            <div class='left-part'>
                                <p class='grey-color'>服务商星级评分：
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'>项目2222的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div class='grey-color'>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p  class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div> 
                            <div class='right-part'>
                                <p class='grey-color'>需求方星级评分：
                                        <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'> 项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabSelect==3">
                        <div class='detail'>
                            <div class='left-part'>
                                <p class='grey-color'>服务商星级评分：
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'>项目3333的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div class='grey-color'>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p  class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div> 
                            <div class='right-part'>
                                <p class='grey-color'>需求方星级评分：
                                        <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'> 项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabSelect==4">
                        <div class='detail'>
                            <div class='left-part'>
                                <p class='grey-color'>服务商星级评分：
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'>项目4444的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div class='grey-color'>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p  class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div> 
                            <div class='right-part'>
                                <p class='grey-color'>需求方星级评分：
                                        <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/bookmark-star.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                    <img src="@/assets/imgs/servers/star3.png" alt="">
                                </p>
                                <div class='grey-color' style='line-height: 30px;'> 项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                    项目的详细评价项目的详细评价项目的详细评价项目的详细评价
                                </div>
                                <div>
                                    <span class='color-red'>[解释]</span>服务供应商
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                                <div>
                                    <span class='color-red'>[追加]</span>需求方：
                                    <p style='line-height: 30px;'>
                                        对需求方评价的解释对需求方评价的解释对需求方评价的解释
                                        对需求方评价的解释对需求方评价的解释.....
                                    </p>
                                    <p class='detail-time'>
                                        2019.04.24 8:23
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </progressFourChild>
        </div>
        
    </div>
</template>
<script>
import progressFourChild from './progressFourChild'
export default {
    data() {
        return {
            tabSelect:1,
        }
    },
    components:{
        progressFourChild
    },
    methods: {
        changeTabSelect(e){
            if(e.target.innerHTML=="里程碑一"){
                this.tabSelect=1;
            }else if(e.target.innerHTML=="里程碑二"){
                this.tabSelect=2;
            }else if(e.target.innerHTML=="里程碑三"){
                this.tabSelect=3;
            }else if(e.target.innerHTML=="里程碑四"){
                this.tabSelect=4;
            }
        }
    },
}
</script>

<style scoped>
    .progress-four{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;
    }
    .progress-four .title{
        align-self: flex-start;
        width:17.5%;
        /* padding-right:150px; */
    }
    .title .title-top{
        width:15%;
        height: 3px;
        background:#000;
        margin-bottom: 5px;
    }
    .title .title-mid span{
       font-size:30px;
       font-weight: 600;
    }
     .title .title-mid .dot{
         display: inline-block;
         width:6px;
         height:6px;
         border-radius: 50%;
         background: #000;
     }
     .title .title-bottom {
         font-weight: 600;

     }
    .progress-four .content{
        flex:5;
        padding-left:100px;
        border-left:1px solid #eeeeee
    }
     .content .nav-list ul{
         padding-bottom: 15px;
         border-bottom:1px solid #eeeeee;
         margin-bottom: 25px;
     }
    .content .nav-list ul li{
        display: inline-block;
        margin-right:20px;
        font-size:20px;
        font-weight: 600;

    }
    .content .detail{
        display: flex;
        justify-content: center;
        align-items: center;
        color:#bbbbbb;
    }
    .detail .left-part p img{
        padding-right:30px;
    }
    .detail .right-part p img{
        padding-right:30px;
    }
    .left-part{
        margin-right:20px
    }
    .left-part > p{
        margin-bottom:20px;
    }
    .left-part div{
        margin:20px 0 40px 0;
    }
    .grey-color{
        color:#666666;
    }
    .color-red{
        color:#9e0100;
        font-weight: 600;
    }
    .right-part > p{
        margin-bottom:20px;
    }
    .right-part div{
        margin:20px 0 40px 0;
    }
    .detail-time{
        float: right;
        color:#bbbbbb;
        font-size:12px;
    }
    


</style>