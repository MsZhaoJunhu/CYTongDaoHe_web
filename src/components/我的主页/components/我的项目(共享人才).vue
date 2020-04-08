<template>
    <div class="我的项目" id="zxks">
        <p class="wodexiangmugongxiang_title">我的项目<span class="more">
           <span v-for='(item,index) in moreItem' :key='item.id' 
           :class="{'check': currInfo === index}"
           style='cursor: pointer;'
           @click='changeItem(index)'
           >{{item.content}}</span>
        </span></p>
        <div class="info" v-show="this.currInfo==0">
          <div class='info-content info-content-gzze'>
            <div class='info-content-item'>
                <span class="title">猎聘公司名称</span>
                <p>
                    <select class='selectOption rclpSelect' @change="selectVal('rclpSelect')">
                        <option value="项目名称1" v-for="(item,k) in arrRc" :key="k">{{item.corpName}}</option>
                    </select>
                </p>
            </div>
            <div class='info-content-item' >
                <span class="title">职位名称</span>
                <p class='item-border'>
                    <span>{{arrRc[arrRcIndex].talentPost}}</span>
                </p>
            </div>
            <div class='info-content-item sp gzze'>
               <div>
                   <span class="title">工作职责</span>
                   <p class='item-border'>
                       <pre>{{arrRc[arrRcIndex].talentRespons}}</pre>
                   </p>
               </div>
            </div>
            <div class='info-content-item'>
                <div>
                    <span class="title" style="margin:0;">通知时间</span>
                    <p class='item-border'><span>{{arrRc[arrRcIndex].noticeTime}}</span></p>
                </div>
                <div>
                    <span class="title">初面时间</span>
                    <p class='item-border'><span>{{arrRc[arrRcIndex].firstTime}}</span></p>
                </div>
                <div>
                    <span class="title">终面时间</span>
                    <p class='item-border'><span>{{arrRc[arrRcIndex].lastTime}}</span></p>
                </div>
            </div>
            <div class='info-content-item'>
                <span class="title">结果说明</span>
                <p class='item-border'>
                    <textarea cols="54" rows="10" class="info_title">{{arrRc[arrRcIndex].talentResult}}</textarea>
                </p>
            </div>
          </div>
        </div>
        <div class="info" v-show="this.currInfo==1">
          <div class='info-content'>
            <div class='info-content-item'>
                <span class="title">项目名称</span>
                    <p>
                        <select class='selectOption zxzdSelect' @change="selectVal('zxzdSelect')" >
                            <option value="k" v-for="(item,k) in zxzd" :key="k">{{item.projName}}</option>
                        </select>
                    </p>
            </div>
            <div class='info-content-item' >
                <span class="title">客户公司名称</span>
                <p class='item-border'>
                    <span>{{arrLs[arrLsIndex].customerName||"暂无"}}</span>
                </p>
            </div>
            <div class='info-content-item sp'>
               <div>
                   <span class="title">所属行业</span>
                   <p class='item-border'><span>{{arrLs[arrLsIndex].consultantIndustry||"暂无"}}</span></p>
               </div>
               <div>
                   <span class="title">公司规模</span>
                   <p class='item-border'><span>{{arrLs[arrLsIndex].corpScale||"暂无"}}</span></p>
               </div>
            </div>
            
            <div class='info-content-item'>
                <span class="title">项目角色</span>
                <p class='item-border'><span>{{arrLs[arrLsIndex].projRole||"暂无"}}</span></p>
            </div>
            <div class='info-content-item'>
                <span class="title">工作职责</span>
                <p class='item-border'>
                    <pre>{{arrLs[arrLsIndex].projRespons}}</pre>
                </p>
            </div>
            <div class='info-content-item'>
                <span class="title">工作业绩</span>
                <p class='item-border'>
                    <span>
                        {{arrLs[arrLsIndex].projAchievement}}
                    </span>
                </p>
            </div>
            <div class='info-content-item'>
                <span class='title'>服务时间</span>
                <p class='item-border'>
                    <span>{{arrLs[arrLsIndex].projTime}}</span>
                </p>
            </div>
          </div>
        </div>
        <div class="info" v-show="this.currInfo==2">
          <div class='info-content'>
            <div class='info-content-item'>
                <span class="title">项目名称</span>
                    <p>
                        <select class='selectOption zxzdSelect' @change="selectVal('zxzdSelect')" >
                            <option :value="item.projName" v-for="(item,k) in zxzd" :key="k">{{item.projName}}</option>
                        </select>
                    </p>
            </div>
            <div class='info-content-item' >
                <span class="title">客户公司名称</span>
                <p class='item-border'>
                    <span>{{arrLs[arrLsIndex].customerName||"暂无"}}</span>
                </p>
            </div>
            <div class='info-content-item sp'>
               <div>
                   <span class="title">所属行业</span>
                   <p class='item-border'><span>{{arrLs[arrLsIndex].consultantIndustry||"暂无"}}</span></p>
               </div>
               <div>
                   <span class="title">公司规模</span>
                   <p class='item-border'><span>{{arrLs[arrLsIndex].corpScale||"暂无"}}</span></p>
               </div>
            </div>
            
            <div class='info-content-item'>
                <span class="title">项目角色</span>
                <p class='item-border'><span>{{arrLs[arrLsIndex].projRole||"暂无"}}</span></p>
            </div>
            <div class='info-content-item'>
                <span class="title">工作职责</span>
                <p class='item-border'>
                    <pre>{{arrLs[arrLsIndex].projRespons}}</pre>
                </p>
            </div>
            <div class='info-content-item'>
                <span class="title">工作业绩</span>
                <p class='item-border'>
                    <span>
                        {{arrLs[arrLsIndex].projAchievement}}
                    </span>
                </p>
            </div>
            <div class='info-content-item'>
                <span class='title'>服务时间</span>
                <p class='item-border'>
                    <span>{{arrLs[arrLsIndex].projTime}}</span>
                </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import { getConsultant,getHuntings } from "@/components/api/api";
    export default {
        data() {
            return {
                currInfo:1,
                moreItem:[{
                    id:1,
                    content:'人才猎聘',
                },
                {
                    id:2,
                    content:'咨询主导',
                },{
                    id:3,
                    content:'咨询辅助'
                }],
                arrLs:[
                    {
                        consultantId:"",
                        consultantIndustry:"",
                        consultantType: "",
                        corpScale: "",
                        createdBy: "",
                        createdTime: "",
                        customerName: "",
                        projAchievement: "",
                        projName:"",
                        projRespons: "",
                        projRole: "",
                        projTime: "",
                        revision: "",
                        talentId: "",
                        updatedBy: "",
                        updatedTime: "",
                    }
                ],
                arrLsIndex:0,
                arrRc:[
                    {
                        corpName: "",
                        createdBy: "",
                        createdTime: "",
                        firstTime: "",
                        huntingId: "",
                        lastTime: "",
                        noticeTime: "",
                        revision: "",
                        talentId: "",
                        talentPost: "",
                        talentRespons: "",
                        talentResult: "",
                        updatedBy: "",
                        updatedTime: "",
                    }
                ],
                arrRcIndex:0,
                projRespons:""
            }
        },
        props:{
            zxzd:"",
            rclp:"",
            zxfz:""
        },
        methods: {
            changeItem(index){
                this.currInfo = index;
                if(index==0){
                    let user=JSON.parse(sessionStorage.getItem("user"));
                    getHuntings({talentId:user.talentId}).then(res => {
                        if (res.data.code === 200) {
                            this.arrRc=res.data.data
                        }
                    });
                }else if(index==1){
                    let user=JSON.parse(sessionStorage.getItem("user"));
                    getConsultant({corpId:user.roleId,consultantId:user.consultantId,consultantType:"咨询主导"}).then(res => {
                        if (res.data.code === 200) {
                            this.arrLs=res.data.data
                        }
                    });
                }else if(index==2){
                    let user=JSON.parse(sessionStorage.getItem("user"));
                    getConsultant({corpId:user.roleId,consultantId:user.consultantId,consultantType:"咨询辅助"}).then(res => {
                        if (res.data.code === 200) {
                            this.arrLs=res.data.data
                        }
                    });
                }
            },
            //选择下拉框展示数据
            selectVal(className){
                if(className=="rclpSelect"){
                    var myselect=document.getElementsByClassName(className)
                    var index=myselect[arrRcIndex].selectedIndex;
                    this.arrRcIndex=index;
                }
                var myselect=document.getElementsByClassName(className)
                var index=myselect[arrLsIndex].selectedIndex;
                this.arrLsIndex=index;
            },
            getConsultant(){
                let user=JSON.parse(sessionStorage.getItem("user"));
                getConsultant({corpId:user.roleId,consultantId:user.consultantId}).then(res => {
                    if (res.data.code === 200) {
                        // console.log(res.data.data)
                    }
                });
            }
        },
        mounted() {
            this.getConsultant();
            //默认渲染第一个数据
            let user=JSON.parse(sessionStorage.getItem("user"));
            getConsultant({corpId:user.roleId,consultantId:user.consultantId,consultantType:"咨询主导"}).then(res => {
                if (res.data.code === 200) {
                    this.arrLs=res.data.data
                }
            });
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
    .wodexiangmugongxiang_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
    }
    .wodexiangmugongxiang_title span.more{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #cccccc;
    }
    .wodexiangmugongxiang_title span.more span{
        display: inline-block;
        padding-right:10px;
    }
    .info{
        width:100%;
        /* display: flex;
        flex-wrap: wrap; */
    }
    .info-content{
        display: grid;
        grid-template-columns: repeat(2,50%);
        grid-template-rows: 120px 120px 200px 120px;
        grid-column-gap:40px;
    }
    .info-content-gzze{
        
        grid-template-rows: 120px 270px 200px 40px;
    }
    .info-content .title{
        color:#999999;
        font-size:16px;
        margin-top: 8px;
    }
    .info-content .sp div{
       display: inline-block;
       width:45%;
       /* padding-right:40px; */
    }
    .info-content-item:nth-of-type(1) .selectOption{
        height:40px;
        width:90%;
         appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        outline: none;
        padding-left:10px;
        border: 1px solid #eeeeee
    }
    .item-border{
        border:1px solid #eeeeee;
        width:85%;
        padding:10px;
        color:#999999
    }
    .check{
        color:#000;
        font-weight: 600;
    }

    .gzze>div{
        width: 90% !important;
        display: block;
    }
    .gzze>div>p,.gzze>div>p>span{
        width: 95%;
    }
    .info_title{
        width: 100%;
        margin: 0;
        border: 0;
    }
   /* .info-content .info-content-item ul{
        width:85%;
    } */
    /* .project{
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
    }
    .project_img .project_status{
        position: relative;
        top:-100px;
        left:10px
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
    } */
    @media screen and (max-width: 415px) {
        .我的项目{
            padding: 8px;
        }
        .wodexiangmugongxiang_title{
            margin:0 0 16px 0;
        }
        .info>div{
            padding: 0 8px;
            display: flex;
            flex-direction: column;
        }
        .info>div>div{
            margin-top: 16px;
        }
        .info>div>div:last-child{
            margin-bottom: 16px;
        }
    }
</style>