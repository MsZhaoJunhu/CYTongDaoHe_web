<template>
  <div class="report_feedBack_complaint">
    <!-- 顶部router -->
    <div class="report_feedBack_complaint_router">
      <router-link to="/fun/funs">功能</router-link>
    </div>
    <div class="report_feedBack_complaint_all">
      <div class="tab">
        <span @click="clickToGetFeedBack(1)" :class="AllFeedBackType==1?'activeAllFeedBack':''">所有反馈</span>
        <span @click="clickToGetFeedBack(2)" :class="AllFeedBackType==2?'activeAllFeedBack':''">我的反馈</span>
      </div>
      <table class="feedbacktable">
        <tr>
          <td>编号</td>
          <td>反馈用户</td>
          <td>反馈类型</td>
          <td>主要行为</td>
          <td>反馈对象</td>
          <td>发起时间</td>
          <td>处理状态</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,index) of feedData"
            :key="index">
          <td>{{item.feedId}}</td>
          <td>{{item.feedUser}}</td>
          <td>{{item.feedType}}</td>
          <td>{{item.mainAct}}</td>
          <td>{{item.backUser}}</td>
          <td>{{item.feedTime}}</td>
          <!--  -->
          <td :class="item.feedStatus=='0'?'wcl':item.feedStatus=='1'?'ysl':'ycl'">{{item.feedStatus=='0'?'未受理':item.feedStatus=='1'?'已受理':'已处理'}}</td>
          <td @click="clickItemContent(item.feedId,item.feedStatus)">详情</td>
        </tr>
      </table>
      <p style="overflow:hidden;width:90%;height:1px;margin: 20px auto;background:#888;opacity:0.6"></p>
      <div class="pagebar">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="pagination"
          :page-size="10"
          :current-page.sync="userCurrentPage"
          @current-change="clickToSelectTableContents">
        </el-pagination>
      </div>
      <!-- 三个状态对应的drawer -->
      <!-- 已处理 -->
      <el-drawer :visible.sync="drawer1"
                 :direction="direction"
                 size="auto"
                 class="drawerbox"
                 style="width:60%;height:60%;margin:auto">
        <span>
          <span>反馈编号：</span>
          <span>{{this.itemContent.feedId}}</span>
        </span>
        <span>
          <span>受理部门：</span>
          <span>{{this.itemContent.acceptDepart}}</span>
        </span>
        <span>
          <span>受理期限：</span>
          <span>{{this.itemContentacceptTime}}天</span>
        </span>
        <span>
          <span>反馈用户：</span>
          <span>{{this.itemContent.feedUser}}</span>
        </span>
        <span>
          <span>反馈时间：</span>
          <span>{{this.itemContent.feedTime}}</span>
        </span>
        <span>
          <span>联系电话：</span>
          <span>{{this.itemContent.feedTel}}</span>
        </span>
        <span>
          <span>主要类型：</span>
          <span>{{this.itemContent.feedType}}</span>
        </span>
        <span>
          <span>主要行为：</span>
          <span>{{this.itemContent.mainAct}}</span>
        </span><br>
        <span>
          <span>反馈对象：</span>
          <span>{{this.itemContent.backUser}}</span>
        </span>
        <span>
          <span>处理状态：</span>
          <span style="color:#287fe2">已处理</span>
        </span><br>
        <div class="feedcentent" style="margin-top:16px;">
          <span>反馈内容：</span>
          <textarea class="mediaDIv" disabled>{{this.itemContent.feedBody}}</textarea>
        </div>
        <p style="overflow:hidden;display:block;width:90%;height:1px;margin:20px auto;background:#000;box-sizing:border-box;padding-left:24px;"></p>
        <div class="opinion">
          <span>受理部门意见：</span>
          <textarea disabled>{{this.itemContent.acceptIdea}}</textarea>
        </div>
        <div class="opinion">
          <span>处理结果：</span>
          <textarea disabled>{{this.itemContent.acceptResult}}</textarea>
        </div>
      </el-drawer>
      <!-- 已受理 -->
      <el-drawer :visible.sync="drawer2"
                 :direction="direction"
                 size="auto"
                 class="drawerbox"
                 style="width:60%;height:60%;margin:auto">
        <span>
          <span>反馈编号：</span>
          <span>{{this.itemContent.feedId}}</span>
        </span>
        <span>
          <span>受理部门：</span>
          <span>{{this.itemContent.acceptDepart}}</span>
        </span>
        <span>
          <span>受理期限：</span>
          <span>{{this.itemContentacceptTime}}天</span>
        </span>
        <span>
          <span>反馈用户：</span>
          <span>{{this.itemContent.feedUser}}</span>
        </span>
        <span>
          <span>反馈时间：</span>
          <span>{{this.itemContent.feedTime}}</span>
        </span>
        <span>
          <span>联系电话：</span>
          <span>{{this.itemContent.feedTel}}</span>
        </span>
        <span>
          <span>主要类型：</span>
          <span>{{this.itemContent.feedType}}</span>
        </span>
        <span>
          <span>主要行为：</span>
          <span>{{this.itemContent.mainAct}}</span>
        </span><br>
        <span>
          <span>反馈对象：</span>
          <span>{{this.itemContent.backUser}}</span>
        </span>
        <span>
          <span>处理状态：</span>
          <span style="color:#19ac92">已受理</span>
        </span><br>
        <p style="overflow:hidden;width:90%;height:1px;margin:20px auto;background:#000;"></p>
        <div class="feedcentent">
          <span>反馈内容：</span>
          <textarea class="mediaDIv" disabled>{{this.itemContent.feedBody}}</textarea>
        </div>
        <p style="overflow:hidden;width:90%;height:1px;margin:20px auto;background:#000;"></p>
        <div class="opinionysl">
          <span>受理部门意见：</span>
          <textarea disabled style="width:98%">{{this.itemContent.acceptIdea}}</textarea>
        </div>
      </el-drawer>
      <!-- 未处理 -->
      <el-drawer :visible.sync="drawer3"
                 :direction="direction"
                 size="auto"
                 class="drawerbox"
                 style="width:60%;height:60%;margin:auto">
        <span>
          <span>反馈编号：</span>
          <span>{{this.itemContent.feedId}}</span>
        </span>
        <span>
          <span>受理部门：</span>
          <span>{{this.itemContent.acceptDepart}}</span>
        </span>
        <span>
          <span>受理期限：</span>
          <span>{{this.itemContentacceptTime}}天</span>
        </span>
        <span>
          <span>反馈用户：</span>
          <span>{{this.itemContent.feedUser}}</span>
        </span>
        <span>
          <span>反馈时间：</span>
          <span>{{this.itemContent.feedTime}}</span>
        </span>
        <span>
          <span>联系电话：</span>
          <span>{{this.itemContent.feedTel}}</span>
        </span>
        <span>
          <span>主要类型：</span>
          <span>{{this.itemContent.feedType}}</span>
        </span>
        <span>
          <span>主要行为：</span>
          <span>{{this.itemContent.mainAct}}</span>
        </span><br>
        <span>
          <span>反馈对象：</span>
          <span>{{this.itemContent.backUser}}</span>
        </span>
        <span>
          <span>处理状态：</span>
          <span style="color:#9e0100">未处理</span>
        </span><br>
        <p style="overflow:hidden;width:90%;height:1px;margin:20px auto;background:#000;"></p>
        <div class="feedcentent">
          <span>反馈内容：</span>
          <textarea class="mediaDIv" disabled="true" v-model="itemContent.feedBody">{{this.itemContent.feedBody}}</textarea>
          <button @click="editingInfo($event)">编辑信息</button>
        </div>
        <p>
          <button @click="clickToDeleteFeedBack">撤回举报</button>
          <button @click="clickToUpdateFeedBack">确定修改</button>
        </p>
      </el-drawer>
    </div>
    <p class="bottomTip">关于同道通管理工具 丨 同道合平台 丨 联系客服 同道合 © 2019 渝IPC备XXXXXXXX号 重庆携同道合文化科技有限公司 © 2019 </p>
  </div>
</template>
<script>
import { getFeedbackList,sendFeedBack,updateFeedBack,revokeFeedBack } from "@/components/api/api"
export default {
  data () {
    return {
      direction: 'ttb',
      feedData: [],
      itemContent: {},
      drawer1:false,
      drawer2:false,
      drawer3:false,
      AllFeedBackType:1,
      // 分页时区分是所有还是我的
      paginationPar:"1",
      // 总个数
      pagination:12,
      // 页数
      userCurrentPage:1,

    }
  },
  mounted () {
    getFeedbackList({"pageNum":1}).then(res => {
      if (res.data.code === 200) {
        this.feedData = res.data.data.records
        this.pagination=res.data.data.total;
      }
    })
  },
  methods: {
    // 撤销举报
    clickToDeleteFeedBack(){
      revokeFeedBack(null,this.itemContent.feedId).then(res => {
        if (res.data.code === 200) {
          this.$notify({
            title: '',
            message: '撤销反馈成功！',
            position: 'top-left',
            type:"success"
          });
          this.$router.push('funs')
        }else{
          this.$notify({
            title: '',
            message: '撤销反馈失败！请重新登录后重试',
            position: 'top-left',
            type:"error"
          });
        }
      })
    },
    // 保存修改
    clickToUpdateFeedBack(){
      updateFeedBack(this.itemContent.feedBody,this.itemContent.feedId).then(res => {
          if (res.data.code === 200) {
            this.$notify({
              title: '',
              message: '修改反馈成功！',
              position: 'top-left',
              type:"success"
            });
            this.$router.push('funs')
          }else{
            this.$notify({
              title: '',
              message: '修改反馈失败！请重新登录后重试',
              position: 'top-left',
              type:"error"
            });
          }
      })
    },
    // 分页改变事件
    clickToSelectTableContents(val){
      switch (this.paginationPar) {
        case "2":
          // 我的分页请求
          getFeedbackList({"userName":user.userName,"pageNum":1}).then(res => {
            if (res.data.code === 200) {
              this.feedData = res.data.data.records
            }
          })
          break;
      
        default:
          // 所有的分页请求
          getFeedbackList({"pageNum":val}).then(res => {
            if (res.data.code === 200) {
              this.feedData = res.data.data.records
            }
          })
          break;
      }
    },
    // 点击编辑（未处理下可点）
    editingInfo(e){
      e.target.previousElementSibling.disabled=false;
    },
    // 点击所有（1）/我的（2）
    clickToGetFeedBack(typeId){
      let user=JSON.parse(sessionStorage.getItem("user"));
      switch (typeId) {
        case 1:
            getFeedbackList({"pageNum":1}).then(res => {
              if (res.data.code === 200) {
                this.feedData = res.data.data.records
                this.AllFeedBackType=1;
                this.userCurrentPage=1;
              }
            })
          break;
      
        default:
            getFeedbackList({"userName":user.userName,"pageNum":1}).then(res => {
              if (res.data.code === 200) {
                this.feedData = res.data.data.records
                this.AllFeedBackType=2;
                this.userCurrentPage=1;
                this.pagination=res.data.data.total;
              }
            })
          break;
      }
    },
    clickItemContent (feedId,feedStatus) {
        switch (feedStatus) {
            case "0":
                this.drawer3 = true;
                getFeedbackList({"feedId":feedId}).then(res => {
                    if (res.data.code === 200) {
                        this.itemContent = res.data.data.records[0]
                        this.itemContent.feedTel=this.itemContent.feedTel.substr(0,3)+"****"+this.itemContent.feedTel.substr(7);
                    }
                })
                break;
            case "1":
                this.drawer2 = true;
                getFeedbackList({"feedId":feedId}).then(res => {
                    if (res.data.code === 200) {
                        this.itemContent = res.data.data.records[0]
                        this.itemContent.feedTel=this.itemContent.feedTel.substr(0,3)+"****"+this.itemContent.feedTel.substr(7);
                    }
                })
                break;
        
            default:
                this.drawer1 = true;
                getFeedbackList({"feedId":feedId}).then(res => {
                    if (res.data.code === 200) {
                        this.itemContent = res.data.data.records[0]
                        this.itemContent.feedTel=this.itemContent.feedTel.substr(0,3)+"****"+this.itemContent.feedTel.substr(7);
                    }
                })
                break;
        }
    }
  },
}
</script>
<style scoped>
.report_feedBack_complaint {
  width: 100%;
  height: 100%;
  background: #fafafa;
}
.bottomTip {
  display: block;
  color: #bbbbbb;
  padding-top: 32px;
  text-align: center;
  background: #f9f9f9;
  margin: 0 auto;
}
.report_feedBack_complaint_router {
  width: 73%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  background: #fafafa;
}
.report_feedBack_complaint_router > a {
  color: #9e0100;
  font-weight: bolder;
}
.report_feedBack_complaint_router > a:before {
  content: "<";
  margin-right: 8px;
}
.report_feedBack_complaint_all {
  width: 73%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 60px 24px;
  box-sizing: border-box;
}
.report_feedBack_complaint_content_one {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.tab {
  width: 20%;
  margin: -40px 0 40px -30px;
  padding: 0px;
  display: flex;
  justify-content: space-around;
}
.tab > span {
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  margin: 0;
}
.tab > .activeAllFeedBack {
  border-bottom: 2px solid #9e0000;
}
.feedbacktable {
  border-collapse: collapse;
  width: 1300px;
  margin: 0 auto;
}
.feedbacktable tr {
  height: 60px;
}
.feedbacktable tr:first-child {
  background: #fafafa;
}
.feedbacktable tr td {
  padding-left: 20px;
}
.wcl {
  color: #9e0100;
}
.ysl {
  color: #19ac92;
}
.ycl {
  color: #287fe2;
}
.el-drawer__body > span {
  display: inline-block;
  width: 30%;
  padding-left: 24px;
  margin-top: 16px;
}
.el-drawer__body > span > span:first-child {
  color: #535353;
}
.el-drawer__body > span > span + span {
  color: #888888;
}
.feedcentent {
  display: inline-block;
  width: 90%;
  padding-left: 24px;
}
.feedcentent > span {
  display: block;
}
.feedcentent,
.mediaDIv {
  width: 98%;
}
.mediaDIv{
  margin: 12px 0;
  padding: 12px 0;
  text-indent: 2em;
  height: 120PX;
}
.opinion {
  float: left;
  width: 50%;
  padding-left: 24px;
  margin-bottom: 30px;
}
.opinion>textarea{
  width: 90%;
  max-width: 480px;
  margin-top: 12px;
  padding:12px 0;
  text-indent: 2em;
  height: 120px;
}
.opinion > span,
.opinionysl > span {
  display: block;
}
.opinionysl {
  float: left;
  width: 98%;
  padding-left: 24px;
  margin-bottom: 30px;
}
.opinionysl>textarea{
  margin-top: 12px;
  height: 120px;
  padding: 16px 0;
  text-indent: 2em;
}
.feedcentent button {
  padding: 5px;
}
.drawerbox p {
  width: 100%;
  text-align: center;
  margin: 20px 0;
}
.drawerbox p button {
  border-radius: 50px;
  border: 0;
  width: 180px;
  height: 40px;
  margin: 0 20px;
  color: #fff;
  font-size: 18px;
  background: #c95e5e;
}
.drawerbox p button:active ,.drawerbox p button:hover{
  box-shadow: 0 10px 15px #888;
  background: #9e0100;
}
.drawerbox::-webkit-scrollbar {
  width: 10px;
}
/* 滚动槽 */
.drawerbox::-webkit-scrollbar-track {
  border-radius: 8px;
  background: #999;
}
/* 滚动条滑块 */
.drawerbox::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid #ffffff;
  box-shadow: 8px 0 0 #fff inset;
  opacity: 1 !important;
}
.drawerbox::-webkit-scrollbar-thumb:hover {
  box-shadow: 8px 0 0 #666 inset;
  border: 2px solid #666;
}
.drawerbox::-webkit-scrollbar-thumb:window-inactive {
  display: none;
}
.drawerbox::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.drawerbox:hover::-webkit-scrollbar {
  width: 10px;
}
.drawerbox::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 2px solid #fafafa;
  box-shadow: 10px 0 0 #fafafa inset;
}
.drawerbox {
  overflow-y: overlay;
  word-wrap: break-word;
}
.drawerbox {
  margin-left: calc(100vw - 100%);
}
.pagebar ul {
  margin-left: 15px;
}
.pagebar ul li {
  float: left;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 20px;
  border-radius: 50%;
}
.pagebar ul li:first-child {
  background: #e6e6e6;
}
</style>