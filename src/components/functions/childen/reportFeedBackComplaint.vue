<template>
  <div class="report_feedBack_complaint">
    <!-- 顶部router -->
    <div class="report_feedBack_complaint_router">
      <router-link to="/fun/funs">功能</router-link>
    </div>
    <div class="report_feedBack_complaint_all">
      <div class="report_feedBack_complaint_content_one">
        <p>
          <span>反馈用户:</span>
          <span>{{userInfo.userName}}</span>
        </p>
        <p>
          <span>反馈时间:</span>
          <span>{{userInfo.userTime}}</span>
        </p>
        <p>
          <span>联系电话:</span>
          <span>{{userInfo.userPhone}}</span>
        </p>
        <p>
          <span>项目名称:</span>
          <!-- <select v-model="userInfo.itemsValue">
            <option :value="item" v-for="item in userInfo.items">{{item}}</option>
          </select> -->
          <span>
            <input type="text"
                   placeholder="输入项目名称"
                   v-model="userInfo.itemsValue">
          </span>
        </p>
        <p>
          <span>反馈对象:</span>
          <span>
            <input type="text"
                   placeholder="输入对象名称"
                   v-model="userInfo.feedBackPerson">
          </span>
        </p>
        <p>
          <span>反馈方式:</span>
          <span class="selectDiv">
            <!--  @click="changeSelectDivActive(selectDivActive)" -->
            <div>
              <div v-if="selectDivActive"></div>
            </div>
            <!--  @click="changeSelectDivActive(selectDivActive)" -->
            <span>站内</span>
          </span>
        </p>
      </div>
      <div class="report_feedBack_complaint_content_two">
        <h6>请选择反馈类型</h6>
        <!-- 建议/申请时显示 -->
        <div v-if="userSelect=='3'">
          <p>
            <span>反馈类型</span>
            <select v-model="reportType"
                    @change="changeNum"
                    class="typelist">
              <option v-bind:value="item"
                      v-for="(item,i) in report.type"
                      :key="i">{{item}}</option>
            </select>
          </p>
          <p>
            <span>主要行为</span>
            <select v-model="userInfo.feedType"
                    class="typelist">
              <option value="其它"
                      v-show="reportType=='其它'?true:false">其它</option>
              <option v-bind:value="item.dictItemId"
                      v-for="(item,i) in report.typeList"
                      :key="i">{{item.itemName}}</option>
            </select>
          </p>
        </div>
        <!-- 投诉时显示 -->
        <div v-if="
                      userSelect=='1'">
          <p>
            <span>反馈类型</span>
            <span>{{complaint.type}}</span>
          </p>
          <p>
            <span>主要行为</span>
            <select v-model="
                      userInfo.feedType"
                    @change="chanegForTypelist"
                    class="typelist">
              <option v-bind:value="item.itemName"
                      :data-dictItemid="item.dictItemId"
                      v-for="(item,i) in complaint.typeList"
                      :key="i">{{item.itemName}}</option>
            </select>
            <select v-model="userInfo.feedType2"
                    v-show="feedBack.typeList2.length!=0">
              <option v-bind:value="item.itemName"
                      v-for="(item,i) in complaint.typeList2"
                      :key="i">{{item.itemName}}</option>
            </select>
          </p>
        </div>
        <!-- 举报时才显示 -->
        <div v-if="userSelect=='2'">
          <p>
            <span>反馈类型</span>
            <span>{{feedBack.type}}</span>
          </p>
          <p>
            <span>主要行为</span>
            <select v-model="userInfo.feedType"
                    @change="chanegForTypelist"
                    class="typelist">
              <option v-bind:value="item.itemName"
                      :data-dictItemid="item.dictItemId"
                      v-for="(item,i) in feedBack.typeList"
                      :key="i">{{item.itemName}}</option>
            </select>
            <select v-model="userInfo.feedType2"
                    v-show="feedBack.typeList2.length!=0">
              <option v-bind:value="item.itemName"
                      v-for="(item,i) in feedBack.typeList2"
                      :key="i">{{item.itemName}}</option>
            </select>
          </p>
        </div>
      </div>
      <div class="report_feedBack_complaint_content_three">
        <h6>反馈内容</h6>
        <textarea placeholder="请详细描述事件经过..."
                  v-model="feedBackContent"></textarea>
        <div v-if="userSelect=='1'">
          <el-upload class="upload-demo"
                     action="http://42.51.16.10:8080/myTest/upload/common/file"
                     :limit="3"
                     :on-success="successUpload"
                     :before-upload="beforeAvatarFileUpload"
                     :on-error="errorUpload"
                     :disabled="uploadFileList.length==3">
            <el-button slot="trigger"
                       size="small"
                       type="primary">
              <img src="../../../assets/imgs/upload.png"
                   alt="">
              <span>上传举证</span></el-button>
            <div slot="tip"
                 class="el-upload__tip">(上传要求:支持文档、图片、压缩文件，单个文件<3M，文件数量最大为3)</div> </el-upload>
                             </div>
                             <button
                             class="report_feedBack_complaint_content_confirm"
                             @click="confirmBtn">确认</button>
            </div>
            <div class="report_feedBack_complaint_content_four">
              <span>注意事项：</span>
              <div>
                <p>1.请您提供真实的举证材料证明您所反馈的问题；</p>
                <p>2.请正确选择反馈类型及主要行为，以便平台相关部门能第一时间针对您的反馈内容进行及时处理；</p>
                <p>3.请务必正确填写您的联系方式，以便我们能及时联系您（请不用担心您的个人信息会被公开，同道合平台绝不会泄露您的隐私）</p>
              </div>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服 同道合 © 2019 渝IPC备XXXXXXXX号 重庆携同道合文化科技有限公司 © 2019 </span>
      </div>
</template>
<script>
import {
  corpFinish,
  indivFinish,
  splrFinish,
  sendFeedBack,
  feed1,
  feed2,
  feed3,
} from "@/components/api/api";
export default {
  data () {
    return {
      // 获取传过来的参数 判断是否是建议/申请3，举报2，投诉1，反馈列表0
      userSelect: this.$route.query.userSelect,
      // 信息
      userInfo: {
        userName: "",
        userTime: "",
        userPhone: "",
        items: ["关联的项目1", "关联的项目2", "关联的项目3",],
        itemsValue: "",
        feedBackPerson: "",
        feedBackMode: "站内",
        feedType: "",
        feedType2: "",
      },
      selectDivActive: true,
      // 建议/申请/其他
      report: {
        type: [],
        typeList: [],
        selctedTypeLists: [],
        dictItemId: [],
      },
      reportType: "",
      // 投诉
      complaint: {
        type: "",
        typeList: [],
        typeList2: [],
      },
      // 举报
      feedBack: {
        type: "",
        typeList: [],
        typeList2: [],
      },
      // 反馈内容
      feedBackContent: "",
      // 上传文件
      fileList: [],
      // 选择举报的浅红色框框
      selectedType: 0,
      // 举报、投诉、还是申请
      reportFeedBackComplaint: "反馈",
      uploadFileList: []
    }
  },
  methods: {
    //三级
    chanegForTypelist () {
      let options = document.getElementsByClassName('typelist')
      let index = options[0].selectedIndex
      let dictItemId = options[0].options[index].getAttribute('data-dictitemid');
      feed3({ "itemId": dictItemId }).then(res => {
        if (res.data.code === 200) {
          this.complaint.typeList2 = res.data.data
          this.feedBack.typeList2 = res.data.data

        }
      })
    },
    changeNum () {
      feed1().then(res => {
        if (res.data.code === 200) {
          for (let i = 0; i <= 4; i++) {
            if (this.reportType == res.data.data[i].itemName) {
              let dicId = res.data.data[i].dictItemId
              feed2({ "itemId": dicId }).then(res => {
                if (res.data.code === 200) {
                  // this.report.typeList = res.data.data
                  this.report.typeList = res.data.data
                }
              })
            }
          }
        }
      })
    },

    // 点击发布
    confirmBtn () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      switch (this.userSelect) {
        case "1":
          if (this.userInfo.feedBackPerson == "" || this.feedBackContent == "" || this.complaint.type == "" || this.userInfo.itemsValue == "") {
            this.$notify({
              title: '失败',
              message: '反馈发布失败！您有必要信息未填写',
              position: 'top-left',
              type: "error"
            });
            break;
          }
          let feedType = this.userInfo.feedType + "" + this.userInfo.feedType2
          let par = {
            // 反馈对象
            "backUser": this.userInfo.feedBackPerson,
            // 反馈内容
            "feedBody": this.feedBackContent,
            // 上传文件
            "feedFileList": this.uploadFileList,
            // 反馈方式 站内 
            "feedMethod": this.userInfo.feedBackMode,
            // 电话
            "feedTel": this.userInfo.userPhone,
            // 时间
            "feedTime": this.userInfo.userTime,
            // 一级
            "feedType": this.complaint.type,
            "feedUser": this.userInfo.userName,
            "mainAct": feedType,
            "projName": this.userInfo.itemsValue,
            "userName": user.userName,
          }
          sendFeedBack(par).then(res => {
            if (res.code === 200) {
              this.$notify({
                title: '',
                message: '反馈发布成功！',
                position: 'top-left',
                type: "success"
              });
              this.$router.push('funs')
            } else {
              this.$notify({
                title: '',
                message: '反馈发布失败！请重新登录后重试',
                position: 'top-left',
                type: "error"
              });
            }
          })
          break;
        case "2":
          if (this.userInfo.feedBackPerson == "" || this.feedBackContent == "" || this.feedBack.type == "" || this.userInfo.itemsValue == "") {
            this.$notify({
              title: '失败',
              message: '反馈发布失败！您有必要信息未填写',
              position: 'top-left',
              type: "error"
            });
            break;
          }
          let JBfeedType = this.userInfo.feedType + "" + this.userInfo.feedType2
          let par2 = {
            "backUser": this.userInfo.feedBackPerson,
            "feedBody": this.feedBackContent,
            "feedFileList": this.uploadFileList,
            "feedMethod": this.userInfo.feedBackMode,
            "feedTel": this.userInfo.userPhone,
            "feedTime": this.userInfo.userTime,
            "feedType": this.feedBack.type,
            "feedUser": this.userInfo.userName,
            "mainAct": JBfeedType,
            "projName": this.userInfo.itemsValue,
            "userName": user.userName,
          }
          sendFeedBack(par2).then(res => {
            if (res.code === 200) {
              this.$notify({
                title: '',
                message: '反馈发布成功！',
                position: 'top-left'
              });
              this.$router.push('funs')
            } else {
              this.$notify({
                title: '',
                message: '反馈发布失败！请重新登录后重试',
                position: 'top-left',
                type: "error"
              });
            }
          })
          break;

        default:
          if (this.userInfo.feedBackPerson == "" || this.feedBackContent == "" || this.reportType == "" || this.userInfo.itemsValue == "") {
            this.$notify({
              title: '失败',
              message: '反馈发布失败！您有必要信息未填写',
              position: 'top-left',
              type: "error"
            });
            break;
          }
          let par3 = {
            "backUser": this.userInfo.feedBackPerson,
            "feedBody": this.feedBackContent,
            "feedFileList": [],
            "feedMethod": this.userInfo.feedBackMode,
            "feedTel": this.userInfo.userPhone,
            "feedTime": this.userInfo.userTime,
            "feedType": this.reportType,
            "feedUser": this.userInfo.userName,
            "mainAct": this.userInfo.feedType,
            "projName": this.userInfo.itemsValue,
            "userName": user.userName,
          }
          sendFeedBack(par3).then(res => {
            if (res.code === 200) {
              this.$notify({
                title: '',
                message: '反馈发布成功！',
                position: 'top-left'
              });
              this.$router.push('funs')
            } else {
              this.$notify({
                title: '',
                message: '反馈发布失败！请重新登录后重试',
                position: 'top-left',
                type: "error"
              });
            }
          })
          break;
      }

    },
    // 上传成功时的函数
    // 上传函数1
    successUpload (response) {
      if (this.uploadFileList.length == 3) {
        console.log("数量等于3")
      }
      // this.type1=response.type;
      this.uploadFileList.push(response.type)
      // this.fileName=response.type.match('[^/]+(?!.*/)');
      this.$confirm(`成功上传`);
    },
    // 上传函数2 限制
    beforeAvatarFileUpload: function (file) {
      //限制的上限为10M
      const isLt10M = file.size / 1024 / 1024 < 3;
      if (!isLt10M) {
        this.$confirm('上传文件大小不能超过 3MB!');
      }
      return isLt10M;
    },
    // 上传失败
    errorUpload (err) {
      this.$confirm(`上传失败，请重新登录再试！`);
    },
    // 选择站内
    changeSelectDivActive (bool) {
      this.selectDivActive = !bool;
    },
    // 选择举报类型
    selectedTypeClick (i) {
      this.selectedType = i;
    },
    // 获取时间
    getNowTime () {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
  },
  mounted () {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let nowTime = this.getNowTime();
    this.userInfo.userTime = nowTime
    switch (user.role) {
      // 企业会员
      case "0":
        corpFinish({ "corpId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.userInfo.userName = res.data.data[0].corpName
            this.userInfo.userPhone = res.data.data[0].corpPhoneno
          }
        })
        break;
      // 供应商
      case "1":
        splrFinish({ "splrId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.userInfo.userName = res.data.data[0].splrName
            this.userInfo.userPhone = res.data.data[0].splrPhoneno
          }
        })
        break;
      // 个人
      case "2":
        indivFinish({ "indivId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.userInfo.userName = res.data.data[0].actualName
            this.userInfo.userPhone = res.data.data[0].phoneNo
          }
        })
        break;
      // 共享
      default:
        break;
    }
    // complaint.type
    // typeList
    feed1().then(res => {
      if (res.data.code === 200) {
        if (this.userSelect == 1) {
          this.complaint.type = res.data.data[0].itemName
          // this.complaint.typeList
          feed2({ "itemId": res.data.data[0].dictItemId }).then(res => {
            if (res.data.code === 200) {
              this.complaint.typeList = res.data.data
            }
          })
        }
        if (this.userSelect == 2) {
          this.feedBack.type = res.data.data[1].itemName
          // this.complaint.typeList
          feed2({ "itemId": res.data.data[1].dictItemId }).then(res => {
            if (res.data.code === 200) {
              this.feedBack.typeList = res.data.data
            }
          })
        }
        if (this.userSelect == 3) {
          this.report.type[0] = res.data.data[2].itemName
          this.report.type[1] = res.data.data[3].itemName
          this.report.type[2] = res.data.data[4].itemName
          // feed2({ "itemId":  }).then(res => {
          //   if (res.data.code === 200) {
          //     this.report.typeList = res.data.data
          //   }
          // })
          // for (let i = 0; i <= 3; i++) {
          //   this.report.type[i] = res.data.data[i + 2].itemName
          //   this.report.dictItemId[i] = res.data.data[i + 2].dictItemId
          //   feed2({ "itemId": this.report.dictItemId[i] }).then(res => {
          //     if (res.data.code === 200) {
          //       this.report.typeList[i] = res.data.data
          //     }
          //   })
          // }
        }
      }
    })
  },
}
</script>
<style scoped>
.report_feedBack_complaint {
  width: 100%;
  background: #fafafa;
}
.report_feedBack_complaint > span:last-child {
  display: block;
  color: #bbbbbb;
  padding-top: 32px;
  text-align: center;
  background: #f9f9f9;
  margin: 0 auto;
  margin-bottom: 32px;
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
  height: auto;
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
.report_feedBack_complaint_content_one > p {
  width: 33.3%;
  height: auto;
  display: flex;
  align-items: center;
  user-select: none;
}
.report_feedBack_complaint_content_one > p:nth-child(n + 4) {
  margin-top: 38px;
}
.report_feedBack_complaint_content_one > p > span:first-child {
  display: inline-block;
  width: 23%;
  min-width: 85px;
}
.report_feedBack_complaint_content_one > p > span:last-child {
  display: inline-block;
  width: 77%;
  min-width: 160px;
}
.report_feedBack_complaint_content_one > p > select {
  width: 50%;
  min-width: 160px;
  padding: 4px 0;
  padding-left: 8px;
  background: #fafafa;
  outline: none;
}
.report_feedBack_complaint_content_one > p > span > input {
  width: 50%;
  min-width: 160px;
  padding: 4px 0 4px 8px;
  background: #fafafa;
  border: 1px solid #666666;
}
.report_feedBack_complaint_content_one > p > span > div {
  width: 12px;
  height: 12px;
  background: #f6f6f6;
  margin-right: 4px;
  display: inline-block;
}
.report_feedBack_complaint_content_one > p > span > div > div {
  width: 6px;
  height: 6px;
  margin: 0 auto;
  margin-top: 3px;
  background: #9e0100;
}
.report_feedBack_complaint_content_two {
  padding-bottom: 32px;
  margin: 32px 0 32px 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}
.report_feedBack_complaint_content_two,
.report_feedBack_complaint_content_three {
  width: 100%;
  height: auto;
}
.report_feedBack_complaint_content_two > h6,
.report_feedBack_complaint_content_three > h6 {
  font-size: 16px;
  margin-top: 38px;
}
.report_feedBack_complaint_content_two > h6:after,
.report_feedBack_complaint_content_three > h6:after {
  content: "*";
  color: #9e0100;
}
.report_feedBack_complaint_content_two > div,
.report_feedBack_complaint_content_three > div {
  margin-top: 38px;
}
.report_feedBack_complaint_content_two > div {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
}
.report_feedBack_complaint_content_two > div > p {
  width: 33.3%;
  height: auto;
  display: flex;
  align-items: center;
  user-select: none;
}
.report_feedBack_complaint_content_two > div > p > span:first-child {
  display: inline-block;
  width: 23%;
  min-width: 85px;
}
.report_feedBack_complaint_content_two > div > p > span:last-child {
  display: inline-block;
  width: 77%;
  min-width: 160px;
}
.report_feedBack_complaint_content_two > div > p > select {
  width: 50%;
  min-width: 160px;
  padding: 4px 0;
  padding-left: 8px;
  background: #fafafa;
  outline: none;
}
.report_feedBack_complaint_content_two > div > p > select + select {
  margin-left: 16px;
}
.report_feedBack_complaint_content_two > div > div {
  width: 20%;
  height: auto;
  min-width: 180px;
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.report_feedBack_complaint_content_two > div > div > span {
  width: 14%;
  min-width: 180px;
  text-align: center;
  padding: 8px 0;
  margin: 0 3%;
  color: #9e0100;
  border: 1px solid #fcf7f7;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
}
.report_feedBack_complaint_content_two > div > span:nth-child(n + 6) {
  margin-top: 16px;
}
.selectedType {
  border: 1px solid #9e0100 !important;
}
.report_feedBack_complaint_content_three > textarea {
  width: 100%;
  height: 210px;
  resize: none;
  background: #fafafa;
  margin-top: 32px;
  box-sizing: border-box;
  padding: 16px 8px;
}
.upload-demo button {
  background: #fafafa;
  border: 1px solid #dddddd;
  outline: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.upload-demo > div:nth-child(2) {
  display: inline-block;
  margin-left: 1rem;
}
.report_feedBack_complaint_content_four {
  margin-top: 2rem;
  display: flex;
  background: #fafafa;
  padding: 16px 4px;
}
.report_feedBack_complaint_content_four > span {
  color: #9e0100;
  font-size: 16px;
}
.report_feedBack_complaint_content_four > div > p {
  font-size: 14px;
  color: #555555;
}
.report_feedBack_complaint_all + span {
  display: block;
  color: #bbbbbb;
  padding-top: 32px;
  text-align: center;
  background: #f9f9f9;
  margin: 0 auto;
  margin-bottom: 32px;
}
.report_feedBack_complaint_content_confirm {
  width: 400px;
  height: 40px;
  display: block;
  margin: 0 auto;
  margin-top: 32px;
  background: #9e0100;
  border: 0;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
}
.report_feedBack_complaint {
  width: 100%;
  background: #fafafa;
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
  height: auto;
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
.report_feedBack_complaint_content_one > p {
  width: 33.3%;
  height: auto;
  display: flex;
  align-items: center;
  user-select: none;
}
.report_feedBack_complaint_content_one > p:nth-child(n + 4) {
  margin-top: 38px;
}
.report_feedBack_complaint_content_one > p > span:first-child {
  display: inline-block;
  width: 23%;
  min-width: 85px;
}
.report_feedBack_complaint_content_one > p > span:last-child {
  display: inline-block;
  width: 77%;
  min-width: 160px;
}
.report_feedBack_complaint_content_one > p > span + span {
  color: #666;
}
.report_feedBack_complaint_content_one > p > select {
  width: 50%;
  min-width: 160px;
  padding: 12px 16px;
  background: #fafafa;
  outline: none;
  border: 0;
  color: #666;
}
.report_feedBack_complaint_content_one > p > span > input {
  width: 50%;
  min-width: 160px;
  padding: 12px 16px;
  background: #fafafa;
  border: 0;
  color: #999999;
}
.report_feedBack_complaint_content_one > p > span > div {
  width: 12px;
  height: 12px;
  background: #f6f6f6;
  margin-right: 4px;
  display: inline-block;
}
.report_feedBack_complaint_content_one > p > span > div > div {
  width: 6px;
  height: 6px;
  margin: 0 auto;
  margin-top: 3px;
  background: #9e0100;
}
.report_feedBack_complaint_content_two {
  padding-bottom: 32px;
  margin: 32px 0 32px 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}
.report_feedBack_complaint_content_two,
.report_feedBack_complaint_content_three {
  width: 100%;
  height: auto;
}
.report_feedBack_complaint_content_two > h6,
.report_feedBack_complaint_content_three > h6 {
  font-size: 16px;
  margin-top: 38px;
}
.report_feedBack_complaint_content_two > h6:after,
.report_feedBack_complaint_content_three > h6:after {
  content: "*";
  color: #9e0100;
}
.report_feedBack_complaint_content_two > div,
.report_feedBack_complaint_content_three > div {
  margin-top: 38px;
}
.report_feedBack_complaint_content_two > div {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
}
.report_feedBack_complaint_content_two > div > p {
  width: 33.3%;
  height: auto;
  display: flex;
  align-items: center;
  user-select: none;
}
.report_feedBack_complaint_content_two > div > p > span:first-child {
  display: inline-block;
  width: 23%;
  min-width: 85px;
}
.report_feedBack_complaint_content_two > div > p > span:last-child {
  display: inline-block;
  width: 77%;
  min-width: 160px;
}
.report_feedBack_complaint_content_two > div > p > span + span {
  color: #666;
}
.report_feedBack_complaint_content_two > div > p > select {
  width: 50%;
  min-width: 160px;
  padding: 12px 16px;
  background: #fafafa;
  outline: none;
  border: 0;
  color: #666;
}
.report_feedBack_complaint_content_two > div > p > select + select {
  margin-left: 16px;
}
.report_feedBack_complaint_content_two > div > div {
  width: 20%;
  height: auto;
  min-width: 180px;
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.report_feedBack_complaint_content_two > div > div > span {
  width: 14%;
  min-width: 180px;
  text-align: center;
  padding: 8px 0;
  margin: 0 3%;
  background: #fcf7f7;
  color: #9e0100;
  border: 1px solid #fcf7f7;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
}
.report_feedBack_complaint_content_two > div > span:nth-child(n + 6) {
  margin-top: 16px;
}
.selectedType {
  border: 1px solid #9e0100 !important;
}
.report_feedBack_complaint_content_three > textarea {
  width: 100%;
  height: 210px;
  resize: none;
  background: #fafafa;
  margin-top: 32px;
  box-sizing: border-box;
  padding: 16px 8px;
}
.upload-demo button {
  background: #fafafa;
  border: 1px solid #dddddd;
  outline: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.upload-demo > div:nth-child(2) {
  display: inline-block;
  margin-left: 1rem;
}
.report_feedBack_complaint_content_four {
  margin-top: 2rem;
  display: flex;
  background: #fafafa;
  padding: 16px 4px;
}
.report_feedBack_complaint_content_four > span {
  color: #9e0100;
  font-size: 16px;
}
.report_feedBack_complaint_content_four > div > p {
  font-size: 14px;
  color: #555555;
}
.report_feedBack_complaint_all + span {
  display: block;
  color: #bbbbbb;
  padding-top: 32px;
  text-align: center;
  background: #f9f9f9;
  margin: 0 auto;
  margin-bottom: 32px;
}
.report_feedBack_complaint_content_confirm {
  width: 400px;
  height: 40px;
  display: block;
  margin: 0 auto;
  margin-top: 32px;
  background: #9e0100;
  border: 0;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
}
</style>