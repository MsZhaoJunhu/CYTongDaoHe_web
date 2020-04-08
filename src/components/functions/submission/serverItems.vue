<template>
    <div style=""
         class="qyhy_fwjy">
      <div style="width:100%;padding: 16px 0 16px 0px;margin-top:32px;">
        <router-link to="/fun/funs" class="qyhy_fwjy_top_title">功能</router-link>
      </div>
      <div class="qyhy_fwjy_publishing">
        <div class="qyhy_fwjy_publishing_content">
          <div class="qyhy_fwjy_div"
               v-for="(item,index) in arrSUXQ" :key="index">
            <div>
              <img src="../../../assets/itemSubmission/contrantLogo.png"
                   alt="">
            </div>
            <div>
              <div>
                <p>{{item.projType||"暂无"}}</p>
                <p>
                  <span>合同编号：{{item.contractNo||"暂无"}}</span>
                </p>
                <div>
                  <img v-if="item" :src="item.userBanner.logo" alt="">
                  <p>
                    <span v-if="userRole==0">{{item.userBanner.splrName||"暂无"}}</span>
                    <span v-if="userRole==1">{{item.userBanner.corpName||"暂无"}}</span v-if="">
                  </p>
                </div>
              </div>
              <div>
                <p :class="item.tradeState">
                  <span v-show="item.contractStatus==3" class="服务中">服务中</span>
                </p>
                <button @click="checkMore(item.contractId)" class="currpoint">查看详情</button>
              </div>
            </div>
          </div>
        </div>
        <div class="publishing_content_fy">
          <span>共有{{allProjNumber}}个项目</span>
          <el-pagination
              background
              layout="prev, pager, next"
              :total="allProjNumber"
              :page-size="8"
              @current-change="sizeChange"
              >
          </el-pagination>
        </div>
      </div>
      <span>关于同道通管理工具 丨 同道合平台 丨 联系客服 同道合 © 2019 渝IPC备XXXXXXXX号 重庆携同道合文化科技有限公司 © 2019 </span>
    </div>
  </template>
  <script>
  import moment from 'moment'
  import { 
    getProjDetailByCorp,
    getServerList,
  } from "@/components/api/api";
  export default {
    data () {
      return {
        arrSUXQ: [
          {
            // img
            projLogo: "",
            // 名称
            corpName: "",
            // 状态
            tradeState: "",
            // 项目标签
            splrList: "",
            // 发布开始时间
            releaseStart: "",
            // 项目
            projId: "",
            userRole:"",
            userBanner:{
              "logo":""
            }
          }
        ],
        allProjNumber:8,
        userRole:""
      }
    },
    methods: {
      // 查看详情
      checkMore (projId) {
        this.$router.push({path:'itemSubmission', query: { "contractId": projId }})
      },
      sizeChange(val){
        let user = JSON.parse(sessionStorage.getItem("user"));
        getServerList(user.role,{"pageNum":val}).then(res => {
          if (res.data.code === 200) {
            this.arrSUXQ = res.data.data.records;
            this.allProjNumber=res.data.data.total;
          }
        });
      },
    },
    mounted () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.userRole=user.role
      //数据渲染
      getServerList(user.role,{"pageNum":1}).then(res => {
        if (res.data.code === 200) {
          this.arrSUXQ = res.data.data.records;
          this.allProjNumber=res.data.data.total;
        }
      });
    },
    created () {
  
    },
  }
  </script>
  <style scoped>
  .qyhy_fwjy {
    background: #fafafa;
    width: 80%;
    margin: 0 auto;
  }
  .qyhy_fwjy > div:not(:first-child) {
    background: #fff;
  }
  .qyhy_fwjy_top_title:before {
    content: "<";
    margin-right: 8px;
  }
  .qyhy_fwjy_top_title {
    display: block;
    width: auto;
    color: #9e0100;
    font-weight: bolder;
    box-sizing: border-box;
    width: 80px;
  }
  .qyhy_fwjy_publishing {
    width: 100%;
    height: auto;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 16px 28px;
  }
  .qyhy_fwjy_publishing + span {
    display: block;
    color: #bbbbbb;
    padding: 32px 0;
    text-align: center;
    background: #f9f9f9;
  }
  .qyhy_fwjy_publishing_content {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
  .qyhy_fwjy_div {
    width: calc(92%/4);
    margin: 0 1%;
    box-sizing: border-box;
    border: 1px solid #ededed;
    display: flex;
    flex-direction: column;
  }
  .qyhy_fwjy_div:hover {
    box-shadow: 0 3px 9px #f3b4b4;
  }
  .qyhy_fwjy_div:hover>div > div:first-child > p:nth-child(2) > span{
    background: #f3b4b4;
    color: #9e0100;
  }
  .qyhy_fwjy_div:nth-child(n + 5) {
    margin-top: 16px;
  }
  .qyhy_fwjy_div > div {
    width: 100%;
  }
  .qyhy_fwjy_div > div:first-child {
    height: auto;
  }
  .qyhy_fwjy_div > div > img {
    width: 100%;
    height: 100%;
  }
  .qyhy_fwjy_div > div:last-child {
    display: flex;
    justify-content: space-between;
  }
  .qyhy_fwjy_div > div > div {
    width: 60%;
    height: auto;
    margin-bottom: 14px;
    padding-left: 0.5rem;
  }
  .qyhy_fwjy_div > div > div:last-child {
    width: 36%;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.5rem 0 0;
  }
  .qyhy_fwjy_div > div > div:first-child > p {
    /* padding-left: 14px; */
    width: 100%;
  }
  .qyhy_fwjy_div > div > div:first-child > p:nth-child(2) > span {
    font-size: 14px;
    display: inline-block;
    background: #f2f4f7;
    color: #b7c1c8;
    padding: 4px 6px;
    margin-bottom: 6px;
    width: 100%;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .qyhy_fwjy_div > div > div:first-child > p:nth-child(2) > span:nth-child(2n) {
    margin-left: 8px;
  }
  .qyhy_fwjy_div > div > div > p:first-child {
    margin: 16px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qyhy_fwjy_div > div > div > p:last-child {
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qyhy_fwjy_div > div > div:first-child > div:last-child {
    font-size: 14px;
    color: #bbbbbb;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .qyhy_fwjy_div > div > div:first-child > div:last-child>p{
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qyhy_fwjy_div > div > div:first-child > div:last-child>img{
    width: 24px;
    border-radius: 12px;
  }
  .qyhy_fwjy_div > div > div:last-child > button:last-child {
    font-size: 14px;
    display: block;
    height: auto;
    width: 100%;
    padding: 6px 14px;
    color: #fff;
    background: #9e0100;
    float: right;
    border: 0;
    border-radius: 14px;
  }
  .招标中 {
    color: #64d1d8;
  }
  .选标中 {
    color: #64d1d8;
  }
  .已成交 {
    color: #64d1d8;
  }
  .已终止 {
    color: #64d1d8;
  }
  .服务中{
    color: #64d1d8;
  }
  .publishing_content_fy{
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .currpoint{
    cursor: pointer;
  }
  .publishing_content_fy>span{
    font-size: 14px;
    color: rgb(71, 71, 71);
  }
  </style>
  <style>
    .el-pager .active{
      background-color: #9e0100 !important;
    }
    .el-pager .number:hover,.el-pager .more:hover{
      color: #9e0100 !important;
    }
    .el-pager .active:hover{
      color: #fff !important;
    }
  </style>