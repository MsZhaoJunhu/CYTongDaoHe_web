<template>
  <div class="gys_details_all">
    <div class="gys_details_all_title">
      <router-link :to="{path:'/fun/myFillBid',query:{projId:this.projId}}">服务交易</router-link>
    </div>
    <div class="gys_details_all_content">
      <h5>基本信息</h5>
      <p>
        <span>公司名称：</span>
        <span>{{arrQXUE.splrName}}</span>
      </p>
      <div class="gys_details_all_div">
        <div>
          <span>信用等级：</span>
          <div>
            <img v-for="itemsun in sunNumber"
                 src="../../../assets/icon/ri.png"
                 alt="">
            <img v-for="itemmount in mountNumber"
                 src="../../../assets/imgs/mount-y.png"
                 alt="">
            <img v-for="itemstart in startNumber"
                 src="../../../assets/imgs/star-y.png"
                 alt="">
          </div>
        </div>
        <div>
          <span>服务优质率：</span>
          <span>{{arrQXUE.qualityRating}}%</span>
        </div>
      </div>
      <p class="gys_details_all_p">
        <span>公司简介：</span>
        <span>{{arrQXUE.enterpriceIntro}}</span>
      </p>
      <h5>产品展示</h5>
      <table class="gys_details_all_table">
        <tr>
          <td>产品名称</td>
          <td>适用范围</td>
          <td>产品简介</td>
          <td>主要效果</td>
        </tr>
        <tr v-for="item in arrQX">
          <td>{{item.prodserName}}</td>
          <td>{{item.applicationScope}}</td>
          <td>{{item.prodserIntro}}</td>
          <td>{{item.mainEffect}}</td>
        </tr>
      </table>
      <h5>实施案例</h5>
      <table class="gys_details_all_table2">
        <tr>
          <td>项目名称</td>
          <td>业务类型</td>
          <td>专业领域</td>
          <td>客户名称</td>
          <td>所在行业</td>
          <td>操作</td>
        </tr>
        <tr v-for="item in arrQXU">
          <td>{{item.projectName}}</td>
          <td>{{item.businessType}}</td>
          <td>{{item.field}}</td>
          <td>{{item.surveyCustomer}}</td>
          <td>{{item.industry}}</td>
          <td class="gys_details_table_button_style">
            <router-link target="_blank"
                         :to="{path:'/fwgys/fwgys_ny',query:{'splrCaseId':item.splrId}}">浏览</router-link>
            <button @click="clickNoticto">修改/删除</button>
          </td>
        </tr>
      </table>
      <el-dialog title="提示"
                 :visible.sync="dialogVisible"
                 width="30%"
                 :before-close="handleClose">
        <span>修改/删除/新增请移至我的 -> 我的信息 -> 注册信息完善 -> 典型服务案例中修改、删除或新增！</span>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="clickNoticFalse">取 消</el-button>
          <el-button type="primary"
                     @click="clickNoticTrue">确 定</el-button>
        </span>
      </el-dialog>
      <button class="gys_details_button_style"
              @click="clickNoticto">
        <img src="../../../assets/icon/plus.png"
             alt="">
        <span>&nbsp;新增实施案例</span>
      </button>
      <h5>投标信息</h5>
      <div class="gys_details_div_style">
        <span>项目报价：</span>
        <input type="number"
               class="moneyNumber">
        <span>元</span>
      </div>
      <div class="gys_details_div_div_style">
        <div>
          <span>附件上传</span>
        </div>
        <div>
          <div>
            <span>分项报价明细表上传</span>
            <el-upload class="upload-demo"
                       action="http://42.51.16.10:8080/myTest/upload/common/file"
                       :limit="1"
                       :on-success="successUpload"
                       :before-upload="beforeAvatarFileUpload"
                       :on-error="errorUpload">
              <el-button size="small"
                         type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <div>
            <span>整体解决方案上传</span>
            <el-upload class="upload-demo"
                       action="http://42.51.16.10:8080/myTest/upload/common/file"
                       :limit="1"
                       :on-success="successUpload2"
                       :before-upload="beforeAvatarFileUpload"
                       :on-error="errorUpload">
              <el-button size="small"
                         type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <span>特别说明：整体解决方包括项目规划、实施计划、输出成果、实施效果、团队成员等</span>
        </div>
      </div>
      <div class="gys_details_button_tj_qx_style">
        <button v-if="tid==''"
                @click="serverTenderSubmit()">提交</button>
        <button v-if="tid!=''"
                @click="serverTenderSubmit()">再次投标</button>
        <button v-if="tid==''"
                @click="cancelRouterBack">取消</button>
      </div>
    </div>

  </div>
</template>
<script>
import {
  file,
  downloadFile,
  downloadFileNotCareful,
  serverTender,
  getProjList,
  getSplrDetailWithTender,
  getOldTender,
  getSplrCaseInfo
} from "@/components/api/api";
import base from "@/components/api/api";
export default {
  data () {
    return {
      type1: "",
      type2: "",
      projId: this.$route.query.projId,
      arrQXUE: "",
      arrQXU: "",
      arrQX: "",
      startNumber: 0,
      mountNumber: 0,
      sunNumber: 0,
      tid: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done){
      this.$confirm('确认关闭？')
          .then(_ => {
              done();
          })
      .catch(_ => {});
    },
    clickNoticFalse () {
      this.dialogVisible = false;
    },
    clickNoticTrue () {
      this.dialogVisible = false;
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.$router.push({ path: 'homeFw', query: { 'userInfo': user } })
    },
    clickNotic () {
      this.dialogVisible = true;
    },
    clickNoticto () {
      this.$router.push({ path: '/fun/perfectUserInfo', query: { 'step': 6 } })
    },
    beforeAvatarFileUpload: function (file) {
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$confirm('上传文件大小不能超过 10MB!');
      }
      return isLt10M;
    },
    successUpload (response) {
      this.type1 = response.type;
      // this.fileName=response.type.match('[^/]+(?!.*/)');
      this.$confirm(`成功上传`);
    },
    successUpload2 (response) {
      this.type2 = response.type;
      // this.fileName=response.type.match('[^/]+(?!.*/)');
      this.$confirm(`成功上传`);
    },
    errorUpload (err) {
      this.$confirm(`上传失败，请重新登录再试！`);
    },
    serverTenderSubmit () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      // 项目报价
      let moneyNumber = document.getElementsByClassName("moneyNumber")
      if (moneyNumber[0].value == "" || this.type1 == "" || this.type2 == "") {
        this.$notify({
          title: "提交失败！",
          message: "您有信息未填写或填写有误！请检查重新再试！",
          type: 'error',
          position: 'top-left'
        });
      } else {
        if (this.tid == "") {
          serverTender({ "projId": this.projId, "splrId": user.roleId, "projMoney": moneyNumber[0].value, "moneyDetailFile": this.type1, "overallSolutionFile": this.type2, "splrName": this.arrQXUE.splrName }).then(res => {
            if (res.data.code == 200) {
              this.$notify({
                title: "提交成功！",
                message: res.data.msg,
                type: 'success',
                position: 'top-left'
              });
              this.$router.push("funs")
            }
          })
        } else {
          serverTender({ "projId": this.projId, "splrId": user.roleId, "projMoney": moneyNumber[0].value, "moneyDetailFile": this.type1, "overallSolutionFile": this.type2, "splrName": this.arrQXUE.splrName, "tid": this.tid }).then(res => {
            if (res.data.code == 200) {
              this.$notify({
                title: "提交成功！",
                message: res.data.msg,
                type: 'success',
                position: 'top-left'
              });
              this.$router.push("funs")
            }
          })
        }
      }
    },
    cancelRouterBack () {
      this.$router.push("funs")
    },
  },
  mounted () {
    let user = JSON.parse(sessionStorage.getItem("user"));
    getSplrDetailWithTender({ "splrId": user.roleId }).then(res => {
      if (res.data.code == 200) {
        this.arrQXUE = res.data.data.custSplr;
        this.arrQXU = res.data.data.custSplrCaseList;
        this.arrQX = res.data.data.custSplrProdList;
        // 信用等级计算 每个星星一级 一个月亮四级  一个太阳四级
        let level = res.data.data.custSplr.creditRating;
        if (0 <= level && level < 4) {
          // 这里只有星星
          this.startNumber = level;
        } else if (4 <= level && level < 16) {
          // 有星星 有月亮
          this.startNumber = level % 4
          this.mountNumber = parseInt(level / 4)
        } else if (16 <= level) {
          // 有星星 有月亮 有太阳
          this.sunNumber = parseInt(parseInt(level / 4) / 4);
          this.startNumber = level % 4
          this.mountNumber = parseInt(level / 4)
        }
      }
    })
    getOldTender({ "projId": this.projId }).then(res => {
      if (res.data.code == 200) {
        this.tid = res.data.data.tid
      }
    })
  }
}
</script>
<style scoped>
.gys_details_all {
  width: 73%;
  margin: 32px auto;
  box-sizing: border-box;
  background: #fff;
}
.gys_details_all_title {
  line-height: 5rem;
  background: #fafafa;
}
.gys_details_all_title > a:before {
  content: "<";
  margin-right: 8px;
  color: #9e0100;
}
.gys_details_all_title > a {
  color: #9e0100;
}
.gys_details_all_content {
  width: 96%;
  height: auto;
  margin: 0 auto;
}
.gys_details_all_content > h5 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  line-height: 4rem;
}
.gys_details_all_content > p > span:first-child {
  font-size: 16px;
  color: #666666;
  width: 10%;
  white-space: nowrap;
}
.gys_details_all_content > p > span:last-child {
  font-size: 16px;
  color: #999999;
}
.gys_details_all_div {
  display: flex;
  padding: 2rem 0;
  align-items: center;
}
.gys_details_all_div > div {
  width: 50%;
  display: flex;
  align-items: center;
}
.gys_details_all_div > div > span:last-child {
  color: #9e0100;
}
.gys_details_all_p {
  display: flex;
}
.gys_details_all_p>span:first-child{
  white-space: nowrap;
}
.gys_details_all_p > span:last-child {
  display: inline-block;
  width: auto;
}
.gys_details_all_content > table {
  width: 100%;
  background: rgb(250, 250, 250);
  padding: 1rem;
}
.gys_details_all_content > table td {
  text-align: center;
  line-height: 2rem;
}
.gys_details_all_table td {
  width: 25%;
}
.gys_details_all_table2 td {
  width: 16.5%;
}
.gys_details_all_content > table td:first-child {
  text-align: left;
}
.gys_details_all_content > table td:last-child {
  text-align: right;
}
.gys_details_table_button_style > button {
  border: 0;
  background: none;
  color: #9e0100;
  flex-shrink: 0;
  margin: 0 1rem;
  font-size: 14px;
  cursor: pointer;
}
.gys_details_table_button_style > a {
  font-size: 14px;
  color: #9e0100;
}
.gys_details_table_button_style > button:last-child {
  margin-right: 0;
}
.gys_details_button_style {
  width: 150px;
  height: 38px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  border: 1px solid #999;
  vertical-align: middle;
}
.gys_details_button_style > span {
  font-size: 16px;
}
.gys_details_button_style > span:first-child {
  font-size: 22px;
}
.gys_details_div_style {
  line-height: 4rem;
}
.gys_details_div_style > span:first-child {
  color: #666666;
}
.gys_details_div_style > input {
  border: 0;
  background: #f6f6f6;
  padding-left: 8px;
  box-sizing: border-box;
  height: 30px;
  margin-right: 0.5rem;
}
.gys_details_div_div_style {
  display: flex;
}
.gys_details_div_div_style > div:first-child {
  width: 10%;
}
.gys_details_div_div_style > div:last-child > div {
  display: flex;
}
.gys_details_div_div_style > div > div + div {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.gys_details_div_div_style > div > div > span:first-child {
  color: #999999;
  display: inline-block;
  width: 30%;
}
.gys_details_div_div_style > div:last-child > span:last-child {
  color: #9e0100;
}
.gys_details_button_tj_qx_style {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
.gys_details_button_tj_qx_style > button {
  width: 240px;
  height: 42px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: #9e0100;
  border: 0;
  border-radius: 21px;
  margin: 0 1rem;
}
</style>
<style>
.upload-demo .el-button {
  background: #9e0100 !important;
  border: 0;
  outline: none;
}
</style>