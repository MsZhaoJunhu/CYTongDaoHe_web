<template>
    <div class="itemSubmissionPar">
      <el-row class="first_itemSubmission" type="flex" justify="start" align="middle">
        <el-col :span="24">
          <router-link to="serverItems">
            <i class="el-icon-arrow-left"></i>
            项目列表
          </router-link>
        </el-col>
      </el-row>
      <el-row  class="secend_itemSubmission" type="flex" justify="center" align="middle">
        <el-col :span="24">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="23" class="secend_itemSubmission_first">
              <img src="../../../assets//itemSubmission/itemSubmissionLogo.png" alt="">
              <span>服务提交</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="21" class="secend_itemSubmission_secend">
              <div>
                <span>项目名称：</span>
                <span>{{details.projType}}</span>
              </div>
              <div>
                <span>甲方公司名称：</span>
                <span>{{details.splrName}}</span>
              </div>
              <div>
                <span>乙方公司名称：</span>
                <span>{{details.corpName}}</span>
              </div>
              <div>
                <span>合同编号：</span>
                <span class="colorRed">{{details.contractNo}}</span>
              </div>
              <div>
                <span>项目期限：</span>
                <span>{{details.serverTerm}}</span>
                <!-- <span>2017-01-10</span>
                <span class="interval">~</span>
                <span>2017-01-10</span> -->
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="22" class="secend_itemSubmission_three">
              <el-row class="secend_itemSubmission_threeOne" v-for="(item,index) in details.projEventList.slice(0,-1)" :key="index">
                <el-col :span="1" :class="item.revision==0?'colorHui':(item.revision==1?'colorIng':(item.revision==2?'colorSuccess':''))">
                  <!--  circularRed -->
                  <!-- 0 未开始 -->
                  <!-- 1正在进行 -->
                  <!-- 2已完成 -->
                  <div class="circular">
                    <span class="iconfont icon-duigou"></span>
                    <span>{{index+1}}</span>
                  </div>
                  <div class="verticalLine"></div>
                </el-col>
                <el-col :span="23">
                  <p class="milepost">{{item.eventName}}</p>
                  <div class="serverJournal">
                    <span>服务日志：</span>
                    <button @click="clickToRouter(0,item.eventId,item)" v-if="userRole==1">
                      <span>+新增</span>
                    </button>
                  </div>
                  <div class="assembly">
                    <div :class="journalObjects.length>5?'':'opacity0'">
                      <i class="el-icon-arrow-left" @click="preView(0,$event)"></i>
                    </div>
                    <div class="journalsParOverfolw">
                      <journals :journalObject="journalObjects[index]" :title="details.projEventList[index].eventName" :corpName="details.corpName"></journals>
                    </div>
                    <div :class="journalObjects.length>5?'':'opacity0'">
                      <i class="el-icon-arrow-right" @click="preView(1,$event)"></i>
                    </div>
                  </div>
                  <div>
                    <div class="serverJournal">
                      <span>阶段提交：</span>
                      <button @click="clickToRouter(1,item.eventId,item)" v-if="userRole==1">
                        <span>提交</span>
                      </button>
                    </div>
                    <div class="assembly stageSubmit">
                      <div v-for="(items,indexs) in journalObjects2[index]" :key="indexs">
                        <div>
                          <span>项目阶段验收确认书</span>
                          <div class="journal">
                            <div :class="items.serverStatus==0?'待确认':(items.serverStatus==1?'待审核':(items.serverStatus==2?'已完成':''))"></div>
                            <span>{{items.serverStatus==0?'待确认':(items.serverStatus==1?'待审核':(items.serverStatus==2?'已完成':''))}}</span>
                          </div>
                        </div>
                        <div>
                          <button @click="clickDetails(1,items,details.projEventList[index].eventName)">查看详情</button>
                          <div>
                            <span>{{items.serverTime}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row class="secend_itemSubmission_threeOne secend_itemSubmission_WarrantyPeriod">
                <el-col :span="1" :class="allSubmitClass==0?'colorHui':(allSubmitClass==1?'colorIng':(allSubmitClass==2?'colorSuccess':''))">
                  <!--  circularRed -->
                  <div class="circular">
                    <span class="iconfont icon-duigou"></span>
                    <span>{{details.projEventList.length}}</span>
                  </div>
                  <div class="verticalLine colorGrayLine"></div>
                </el-col>
                <el-col :span="23">
                  <p class="milepost">整体验收确认：</p>
                  <div>
                    <div class="serverJournal">
                      <span>整体提交：</span>
                      <button @click="clickToRouter(2)" v-if="userRole==1">
                        <span>提交</span>
                      </button>
                    </div>
                    <div class="assembly stageSubmit">
                      <div v-show="overallSubmission">
                        <div>
                          <span>项目整体验收确认书</span>
                          <div class="journal">
                            <div :class="overallSubmission.serverStatus==0?'待确认':(overallSubmission.serverStatus==1?'待审核':(overallSubmission.serverStatus==2?'已完成':''))"></div>
                            <span>{{overallSubmission.serverStatus==0?'待确认':(overallSubmission.serverStatus==1?'待审核':(overallSubmission.serverStatus==2?'已完成':''))}}</span>
                          </div>
                        </div>
                        <div>
                          <button @click="clickDetails(2,overallSubmission)">查看详情</button>
                          <div>
                            <span>2016-2-12</span>
                            ~
                            <span>2016-2-12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row class="secend_itemSubmission_threeOne secend_itemSubmission_WarrantyPeriod">
                <el-col :span="1" :class="nodeTermClass==0?'colorHui':(nodeTermClass==1?'colorIng':(nodeTermClass==2?'colorSuccess':''))">
                  <!--  circularRed -->
                  <div class="circular circularRed colorGray">
                    <span class="iconfont icon-duigou"></span>
                    <span>{{details.projEventList.length+1}}</span>
                  </div>
                  <div class="verticalLine colorGrayLine"></div>
                </el-col>
                <el-col :span="23">
                  <p class="milepost">质保期</p>
                  <div>
                    <div class="serverJournal">
                      <span>结项提交：</span>
                      <button @click="clickToRouter(3)" v-if="userRole==1">
                        <span>提交</span>
                      </button>
                    </div>
                    <div class="assembly stageSubmit">
                      <div v-show="nodeTerm">
                        <div>
                          <span>项目结项验收确认书</span>
                          <div class="journal">
                            <div :class="nodeTerm.serverStatus==0?'待确认':(nodeTerm.serverStatus==1?'待审核':(nodeTerm.serverStatus==2?'已完成':''))"></div>
                            <span>{{nodeTerm.serverStatus==0?'待确认':(nodeTerm.serverStatus==1?'待审核':(nodeTerm.serverStatus==2?'已完成':''))}}</span>
                          </div>
                        </div>
                        <div>
                          <button @click="clickDetails(3,nodeTerm)">查看详情</button>
                          <div>
                            <span>2016-2-12</span>
                            ~
                            <span>2016-2-12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row class="secend_itemSubmission_threeOne secend_itemSubmission_WarrantyPeriod">
                <el-col :span="1" :class="allSubmissionOver==0?'colorHui':(allSubmissionOver==1?'colorIng':(allSubmissionOver==2?'colorSuccess':''))">
                  <!--  circularRed -->
                  <div class="circular circularRed colorGray">
                    <span class="iconfont icon-duigou"></span>
                    <span>{{details.projEventList.length+2}}</span>
                  </div>
                  <div class="verticalLine opacity0"></div>
                </el-col>
                <el-col :span="23">
                  <p class="milepost">结项</p>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </template>
  <script>
  import journals from './child/journal'
  import { 
    getServer1List,
    serverItem,
  } from "@/components/api/api";
  export default {
    data () {
      return {
        journalObjects:[],
        journalObjects2:[],
        transformX:0,
        contractId: this.$route.query.contractId,
        stage:this.$route.query.stage,
        details:{
          "projEventList":[{},{}]
        },
        userRole:"",
        allSubmitClass:0,
        nodeTermClass:0,
        overallSubmission:"",
        nodeTerm:"",
        allSubmissionOver:0
      }
    },
    components: {
      journals,
    },
    methods: {
      preView(index,e){
        switch (index) {
          case 1:
            if(this.transformX>0){
              this.transformX--
              e.currentTarget.parentElement.previousElementSibling.firstElementChild.style.transform = `translate(${-206*this.transformX}px,0)`
            }else{

            }
            break;
        
          default:
            if(this.transformX<this.journalObjects.length-5){
              this.transformX++
              e.currentTarget.parentElement.nextElementSibling.firstElementChild.style.transform = `translate(${-206*this.transformX}px,0)`
            }else{

            }
            break;
        }
      },
      clickToRouter(index,eventId,type,item){
        switch (index) {
          case 1:
            this.$router.push({path:'gyssubmievent',query:{"contractId":this.contractId,"stage":eventId,"type":index,"obj":item}})
            break;
          case 2:
            this.$router.push({path:'qualitySubmit',query:{"contractId":this.contractId,"stage":eventId,"type":index}})
            break;
          case 3:
            this.$router.push({path:'nodeTermSubmit',query:{"contractId":this.contractId,"stage":eventId,"type":index}})
            break;
          default:
            this.$router.push({path:'gysaddevent',query:{"contractId":this.contractId,"stage":eventId,"type":index,"obj":item}})
            break;
        }
      },
      clickDetails(index,i,title){
        if(i.serverId){
          this.$router.push({ path:'serverSubmissionDetails',query:{"serverId":i.serverId,"contractId":i.contractId,"title":title}})
        }else{
          this.$router.push({ path:'serverSubmissionDetails',query:{"serverId":i.eventId,"title":title}})
        }
      }
    },
    mounted () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.userRole=user.role
      getServer1List(user.role,this.contractId).then(res => {
        console.log(res.data.data)
        if (res.data.code === 200) {
          this.details=res.data.data
          for(var i=0;i<res.data.data.projEventList.length;i++){
            var arr=[]
            var arr2=[]
            if(res.data.data.projEventList[i]!=res.data.data.projEventList[i+1]&&res.data.data.projEventList[i+1]!=undefined){
              for(var j=0;j<res.data.data.transactionList.length;j++){
                if(res.data.data.projEventList[i].eventId==res.data.data.transactionList[j].eventId&&res.data.data.transactionList[j].thisType==0){
                  arr.push(res.data.data.transactionList[j])
                }
                if(res.data.data.projEventList[i].eventId==res.data.data.transactionList[j].eventId&&res.data.data.transactionList[j].thisType==1){
                  arr2.push(res.data.data.transactionList[j])
                }
              }
              this.journalObjects.push(arr)
              this.journalObjects2.push(arr2)
            }
            if(i<res.data.data.projEventList.length-1){
              if(res.data.data.projEventList[i].revision!=2){
                this.allSubmitClass=0;
              }else{
                this.allSubmitClass=1;
              }
            }
          }
          for(var i=0;i<res.data.data.transactionList.length;i++){
            if(res.data.data.transactionList[i].eventId==0&&res.data.data.transactionList[i].thisType==2){
              this.overallSubmission=res.data.data.transactionList[i]
              if(res.data.data.transactionList[i].serverStatus==2){
                this.allSubmitClass=2;
              }
            }
            
            if(res.data.data.transactionList[i].eventId==-1&&res.data.data.transactionList[i].thisType==3){
              this.nodeTerm=res.data.data.transactionList[i]
              if(res.data.data.transactionList[i].serverStatus==2){
                this.nodeTermClass=2;
              }
            }
            
          }
        }
      });
    },
    watch: {
      allSubmitClass(val){
        if(val==2&&this.nodeTermClass!=2){
          this.nodeTermClass=1
        }
      },
      nodeTermClass(val){
        if(val==2){
          this.allSubmissionOver=2
        }
      },
    },
    created () {
  
    },
  }
  </script>
  <style scoped>
    .itemSubmissionPar{
      width: 80%;
      height: auto;
      margin: 0 auto;
      padding-bottom: 4rem;
    }
    .first_itemSubmission{
      height: 80px;
    }
    .first_itemSubmission a{
      color: #9e0000;
      font-size: 18px;
    }
    .first_itemSubmission a>i{
      font-weight: bold;
    }
    .secend_itemSubmission{
      background-color: #fff;
    }
    .secend_itemSubmission_first{
      padding: 1rem 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .secend_itemSubmission_first>img{
      width: 28px;
    }
    .secend_itemSubmission_first>span{
      margin-left: 2rem;
      font-weight: bold;
    }
    .secend_itemSubmission_secend{
      padding: 0 0 2rem 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin: 0 auto;
    }
    .secend_itemSubmission_secend>div{
      width: calc(100%/3);
      height: 46px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-right: 2rem;
    }
    .secend_itemSubmission_secend>div>span{
      white-space: nowrap;
      line-height: 46px;
      color: #3d3d3d;
    }
    .secend_itemSubmission_secend>div>span:last-child{
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .colorRed{
      color: #9e0000 !important;
    }
    .interval{
      margin: 0 0.5rem;
    }
    .circular{
      width: 30px;
      height: 30px;
      border: 1px solid #9e0000;
      border-radius: 15px;
      color: #9e0000;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circularRed{
      background-color: #9e0000;
      color: #fff;
    }
    .verticalLine{
      width: 1px;
      height: 320px;
      background-color: #9e0000;
      margin-top: 0.5rem;
    }
    .secend_itemSubmission_threeOne{
      margin-bottom: 1rem;
    }
    .secend_itemSubmission_threeOne:last-child{
      margin-bottom: 0;
    }
    .secend_itemSubmission_threeOne>div:first-child{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .milepost{
      font-size: 18px;
      color: #333;
      padding: 0.25rem 0;
    }
    .serverJournal{
      padding: 0.25rem 0;
      padding-top: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 1rem;
    }
    .serverJournal>span{
      color: #333;
    }
    .serverJournal>button{
      width: 70px;
      height: 30px;
      border: 1px solid rgb(185, 185, 185);
      background-color: rgb(185, 185, 185);
      border-radius: 4px;
      display: flex;
      color: #fff;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 1rem;
    }
    .assembly{
      display: flex;
    }
    .assembly>div{
      width: 86%;
      overflow: hidden;
    }
    .assembly>div:first-child,.assembly>div:last-child{
      width: 7%;
      display: flex;
      align-items: center;
    }
    .assembly>div:first-child>i,.assembly>div:last-child>i{
      font-size: 38px;
      color: rgb(215, 215, 215);
      cursor: pointer;
      font-weight: bold;
    }
    .assembly>div:first-child{
      padding-right: 1rem;
      justify-content: flex-end;
    }
    .assembly>div:last-child{
      padding-left: 1rem;
      justify-content: flex-start;
    }
    .journal{
        width: auto;
        display: flex;
        align-items: center;
    }
    .journal>div{
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-right: 0.25rem;
    }
    .journal span{
        font-size: 14px;
        white-space: nowrap;
        color: #666;
    }
    .journal .已完成{
        background-color: rgb(8, 161, 8);
    }
    .stageSubmit{
      width: 86%;
      margin: 0 auto;
      padding-left: 1rem;
      box-sizing: border-box;
    }
    .stageSubmit>div{
      width: 310px !important;
      height: 66px;
      padding: 1rem 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between !important;
      border: 1px solid #0ed450;
      background-color: rgb(246, 255, 237);
    }
    .stageSubmit>div>div{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .stageSubmit button{
      border: 0;
      color: rgb(0, 197, 247);
      background-color: rgba(255, 255, 255, 0);
      cursor: pointer;
    }
    .stageSubmit>div>div>span{
      color: #333;
    }
    .stageSubmit>div>div:nth-child(2)>div>span{
      color: #999;
    }
    .serverJournalRed button{
      background-color: #9e0000;
      border: 1px solid #9e0000;
    }
    .opacity0{
      opacity: 0;
      pointer-events:none;
    }
    .secend_itemSubmission_WarrantyPeriod .verticalLine{
      height: 200px;
    }
    .colorGray{
      color: #999;
      background-color: #fff;
      border: 1px solid #999;
    }
    .colorGrayLine{
      background-color: #999;
    }
    .该里程碑完结+div button{
      pointer-events: none;
    }
    .colorHui>.circular{
      border-color: #999;
    }
    .colorHui>.verticalLine{
      background-color: #999;
    }
    .colorHui>.circular>span:first-child{
      display: none;
    }
    .colorHui>.circular>span{
      color: #999;
    }
    .colorSuccess>.circular{
      border-color: #9e0000;
    }
    .colorSuccess>.verticalLine{
      background-color: #9e0000;
    }
    .colorSuccess>.circular>span:last-child{
      display: none;
    }
    .colorSuccess>.circular>span{
      color: #9e0000;
    }
    .colorIng>.circular{
      border-color: #9e0000;
      background-color: #9e0000;
    }
    .colorIng>.verticalLine{
      background-color: #999;
    }
    .colorIng>.circular>span:first-child{
      display: none;
    }
    .colorIng>.circular>span{
      color: #fff;
    }
    .colorHui+div button,.colorSuccess+div button{
      /* pointer-events: none; */
    }
    /* button是否可点 */
    .secend_itemSubmission_three>.secend_itemSubmission_threeOne:first-child>.colorHui+div button{
      /* pointer-events: none; */
    }
    .journal .已完成{
        background-color: rgb(8, 161, 8);
    }
    .journal .待确认{
        background-color: rgb(255, 204, 51);
    }
    .journal .待审核{
        background-color: rgb(51, 153, 255);
    }
  </style>