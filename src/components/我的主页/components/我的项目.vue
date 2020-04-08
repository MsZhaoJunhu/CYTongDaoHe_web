<template>
    <div class="我的项目" id="zxks">
        <p class="wodexiangmu_title">我的项目<span class="more">查看全部</span></p>
        <div class="info">
            <template v-for="item in arrs.records">
                <div class="project">
                    <div class="project_img">
                    <img :src="item.projLogo" alt="">
                    <p :class='item.projState||"暂无"'>{{item.projState||"暂无"}}</p>
                    </div> 
                    <!-- <h5>项目名称</h5> -->
                    <h5>{{item.createdBy||"暂无"}}</h5>
                    <!-- <p>企业或这公司的名称</p> -->
                    <p>{{item.corpName||"暂无"}}</p>
                    <button @click="routerToXmXq(item.projId)">查看详情</button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
          return {
          }
      },
      props:{
          arrs:""
      },
      methods: {
          routerToXmXq(id){
            this.$router.push({path:'my_projects_require',query:{id:id}})
          }
      },
    }
</script>

<style scoped>
    .我的项目{
        background: #fff;
        box-sizing: border-box;
        padding: 25px;
        margin-bottom: 20px;
    }
    .wodexiangmu_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }
    .wodexiangmu_title span.more{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #cccccc;
    }
    .info{
        display: flex;
        flex-wrap: wrap;
    }
    .project{
        width: 172px;
        margin-right: 35px;
        margin-bottom: 20px;
    }
    .project:nth-of-type(5n){
        margin-right: 0;
    }
    .project_img{
        width: 100%;
        height: 104px;
        background-color: #e5e5e5;
        /* position: relative; */
    }
    .project_img>img{
        height: 100%;
        width: 100%;
    }
    .project_img p{
        position: relative;
        top:-100px;
        left: 10px;
        box-sizing: border-box;    
        color: #fff !important;
        width:60px;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        text-align: center;

    }
    .project_img  .需求中{
        background-color: #e2b62e;  
    }
    .project_img  .服务中{
        background-color: #68d0da;
    }
    .project_img  .已结项{
        background-color: #9e0000;
    }
    .project_img  .已终止{
        background-color: #bbbbbb;
    }
    .project_img  .暂无{
        background: #555555;
        position: relative;
        color: #000;
    }
    .project h5{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 20px;
        letter-spacing: 0px;
        color: #555555;
        margin-top: 5px;
    }
    .project p{
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #999999;
        margin-bottom: 5px;
    }

    .project button{
        width: 172px;
        height: 28px;
        background-color: #9e0100;
        border-radius: 2px;
        border: solid 1px #9e0100;
        font-size: 12px;
        color: #fff;
    }
    
    @media screen and (max-width: 415px) {
        .我的项目{
            padding: 8px;
        }
        .wodexiangmu_title{
            margin:0 0 16px 0;
        }
        .info{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .info>div{
            width: 49%;
            margin: 0;
        }
        .info>div:nth-child(n+3){
            margin-top: 16px;
        }
    }
    @media screen and (max-width: 1366px) {
        .project_img p{
            width: 90px;
            height: 34px;
            line-height: 36px;
        }
        .project p{
            line-height: normal;
        }
        .project h5{
            line-height: normal;
        }
        .project button{
            height: 36px;
            line-height: 36px;
            border-radius: 16px;
        }
    }
</style>