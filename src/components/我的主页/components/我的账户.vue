<template>
  <div class="我的账户"
       id="tggs">
    <p class="wodezhanghu_title">我的账户</p>
    <div class="info">
      <div>
        <h5>您目前账户余额为</h5>
        <p><span class="money">22500元</span></p>
      </div>
      <template>
        <div>
          <h5>绑定邮箱</h5>
          <p>{{emilInfo}}<span @click="showSy($event)">修改</span></p>
        </div>
        <div>
          <h5>认证手机</h5>
          <p>t****3@gmail.com<span @click="showSy($event)">修改</span></p>
        </div>
        <div>
          <h5>银行卡</h5>
          <p>t****3@gmail.com<span @click="showSy($event)">修改</span></p>
        </div>
      </template>
    </div>
    <div class="btnBox">
      <button @click="show1">账户充值</button>
      <button @click="show2">余额提现</button>
      <button @click="show3">交易记录</button>
      <button @click="show4">安全设置</button>
      <button @click="show55"
              v-if="userRole==0||userRole==1">企业认证</button>
    </div>
    <div class="bck"
         v-show="show555">
      <div class="enterprisEcertification">
        <div class="topentrt">
          <span>
            <span></span>企业认证
          </span>
          <div>
            <img src="../../../assets/tc/close.png"
                 alt="close"
                 @click="closeenter()">
          </div>
        </div>
        <div class="enterprisContent">
          <span>证照审核:</span>
          <ul>
            <li>
              <el-upload action="http://42.51.16.10:8080/myTest/upload/common/file"
                         :accept="'image/*'"
                         list-type="picture-card"
                         :limit="1"
                         :on-success="successUpload"
                         :before-upload="beforeAvatarFileUpload"
                         :on-error="errorUpload">
                <img src="../../../assets/imgs/myzhuye-enterprisEcertification.png"
                     alt="">
              </el-upload>
              <span class="img-titles">工商营业执照</span>
            </li>
            <li>
              <el-upload action="http://42.51.16.10:8080/myTest/upload/common/file"
                         :accept="'image/*'"
                         list-type="picture-card"
                         :limit="1"
                         :on-success="successUpload2"
                         :before-upload="beforeAvatarFileUpload"
                         :on-error="errorUpload">
                <img src="../../../assets/imgs/myzhuye-enterprisEcertification.png"
                     alt="">
              </el-upload>
              <span class="img-titles">组织机构代码</span>
            </li>
            <li>
              <el-upload action="http://42.51.16.10:8080/myTest/upload/common/file"
                         :accept="'image/*'"
                         list-type="picture-card"
                         :limit="1"
                         :on-success="successUpload3"
                         :before-upload="beforeAvatarFileUpload"
                         :on-error="errorUpload">
                <img src="../../../assets/imgs/myzhuye-enterprisEcertification.png"
                     alt="">
              </el-upload>
              <span class="img-titles">税务登记证</span>
            </li>
            <li>
              <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                         :accept="'image/*'"
                         list-type="picture-card"
                         :limit="1"
                         :on-success="successUpload4"
                         :before-upload="beforeAvatarFileUpload"
                         :on-error="errorUpload">
                <img src="../../../assets/imgs/myzhuye-enterprisEcertification.png"
                     alt="">
              </el-upload>
              <span class="img-titles">法人身份证</span>
            </li>
          </ul>
        </div>
        <div class="careful">
          <span>注意</span>
          <span>为确保注册用户的真实性和合法性，有效保障交易双方的合法权益，根据平台入驻协议的相关要求，注册用户应向平台提供线上所有交易、支付活动所需的证照或相关文件，平台审核后，注册用户完成平台资质认证，享有经营权限及平台相关服务。特别说明：未通过审核的注册用户，不能发起需求或提供服务。</span>
        </div>
        <div class="updata-btn">
          <button @click="clickToUploadImgArr">提交</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {
  uploadCorpLicense,
  uploadSplrLicense,
  splrFinish,
  corpFinish
} from "@/components/api/api";
import Bus from '../../../bus.js'
import img from "../../../assets/tc/close.png";
import imgwx from "../../../assets/tc/wx.png";
import imgyhk from "../../../assets/tc/yhk.png";
import imgzfb from "../../../assets/tc/zfb.png";
import imgCzWc from "../../../assets/tc/bitcoin_3.png"
export default {
  data () {
    return {
      //账户充值
      arr: [
        // 账户充值
        [
          720,
          405,
          "账户充值",
          [
            { name: 1, title: "用户提示：", fontSize: "fontFour", answer: "用户名称" },
            { name: 2, title: "手机号码：", fontSize: "fontFour", format: "text", placeholder: "输入验证手机号码" },
            { name: 3, title: "充值方式：", fontSize: "fontFour", imgArr: [{ url: imgyhk, explain: "某某银行(2333)" }, { url: imgwx, explain: "微信支付" }, { url: imgzfb, explain: "支付宝支付" }], },
            { name: 2, title: "充值金额：", fontSize: "fontFour", format: "text", class: "srje" },
            {              name: 17, title: "快捷选择：", fontSize: "fontFour", class: "inputjes", inputs: [
                "5000元",
                "2000元",
                "500元",
              ]            },
            { name: 4, title: "验证码：", fontSize: "fontThree", format: "text", hide: 0, hideText: "获取验证码" },
            { name: 5, title: "充值" },
          ],
        ],
        //选择支付方式  此处已删除
        // [
        //     720,
        //     235,
        //     "账户充值",
        //     [
        //         {name:3,title:"充值方式：",fontSize:"fontFour",imgArr:[{url:imgyhk,explain:"某某银行(2333)"},{url:imgwx,explain:"微信支付"},{url:imgzfb,explain:"支付宝支付"}],},
        //         {name:17,title:"充值金额：",fontSize:"fontFour",class:"iNpUT",inputs:[
        //             "10000元",
        //             "5000元",
        //             "2000元",
        //             "500元",
        //             "自定义额度",
        //         ],input:"null"},
        //         {name:5,title:"确认支付"},
        //     ], 
        // ],
        //身份验证
        [
          720,
          275,
          "账户充值-身份验证",
          [
            { name: 2, title: "手机号码：", fontSize: "fontFour", format: "text", placeholder: "输入验证手机号码" },
            { name: 4, title: "验证码：", fontSize: "fontThree", format: "text", hide: 0, hideText: "1324" },
            { name: 4, title: "手机验证码：", fontSize: "fontFive", format: "text", hide: 0, hideText: "发送验证短信" },
            { name: 5, title: "下一步" },
          ],
        ],
        //充值结果  
        [
          720,
          325,
          "账户充值-充值结果",
          [
            { name: 5, title: "完成" },
          ],
          "",
          "",
          [],
          "",
          [],
          "",
          false,
          true,
          imgCzWc,
          "恭喜您,充值失败!"
        ],
        //充值结果  
        [
          720,
          325,
          "账户充值-充值结果",
          [
            { name: 5, title: "完成" },
          ],
          "",
          "",
          [],
          "",
          [],
          "",
          false,
          true,
          imgCzWc,
          "恭喜您,充值成功!"
        ]
      ],
      //余额提现1
      arr2: [
        //余额提现
        [
          720,
          455,
          "余额提现",
          [

            { name: 1, title: "用户提示：", fontSize: "fontFour", answer: "用户名称" },
            { name: 2, title: "手机号码：", fontSize: "fontFour", format: "text", placeholder: "输入验证手机号码" },
            { name: 1, title: "账户余额：", fontSize: "fontFour", fontColor: "ColorRed", answer: "256312", answer2: "元" },
            { name: 2, title: "提现金额：", fontSize: "fontFour", format: "text" },
            { name: 3, title: "交易账号：", fontSize: "fontFour", imgArr: [{ url: imgyhk, explain: "某某银行(2333)" }], },
            { name: 4, title: "验证码：", fontSize: "fontThree", format: "text", hide: 0, hideText: "获取验证码" },
            { name: 2, title: "安全密码：", fontSize: "fontFour", format: "password" },
            { name: 5, title: "提现" },
          ]
        ],
        //提现结果
        [
          720,
          335,
          "账户充值-提现结果",
          [
            { name: 5, title: "完成" },
          ],
          "",
          "",
          [],
          "",
          [],
          "",
          false,
          true,
          imgCzWc,
          "恭喜您,提现成功"
        ]
      ],
      //交易记录
      arr3: [
        [
          720,
          555,
          "我的账户-交易记录",
          [],
          "table",
          310,
          [
            { vx: "序", xmmc: "交易时间", gsmc: "交易类型", jxsj: "交易方", tksj: "交易金额(元)" },
            { vx: "1", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "2", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "3", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "4", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "5", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "5", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "5", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
            { vx: "5", xmmc: "2015.05.01 8:00", gsmc: "账户充值", jxsj: "同道合平台", tkje: "5000元" },
          ],
          "btn",
          ["上一页", "下一页"],
          8,
          true
        ]
      ],
      drawer: false,
      direction: "btt",
      show555: false,
      uploadFileList: [
        { name: "", img: "" },
        { name: "", img: "" },
        { name: "", img: "" },
        { name: "", img: "" }
      ],
      userRole: "",
      userRoleId: "",
      isReview:null
    }
  },
  props: { emilInfo: String },
  mounted () {
    this.preMounted();
  },
  methods: {
    preMounted(){
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.userRole = user.role
      this.userRoleId = user.roleId
      switch (this.userRole) {
        case "0":
          corpFinish({ "corpId": user.roleId }).then(res => {
            if (res.data.code === 200) {
              this.isReview=res.data.data[0].isReview
              // console.log(this.isReview)
            }
          })
          break;
        case "1":
          splrFinish({ "splrId": user.roleId }).then(res => {
            if (res.data.code === 200) {
              this.isReview=res.data.data[0].isReview
            }
          })
          break;
      
        default:
          break;
      }
    },
    // 上传
    clickToUploadImgArr () {
      let arr = []
      for (var i in this.uploadFileList) {
        if (this.uploadFileList[i].name !== "") {
          arr.push(this.uploadFileList[i])
        }
      }
      let par = JSON.stringify(arr)
      switch (this.userRole) {
        case '0':
          uploadCorpLicense(arr).then(res => {
            if (res.data.code === 200) {
              this.$message.success("上传企业认证成功！");
              this.preMounted();
              this.show555=false;
            } else {
              this.$message.error("上传企业认证失败！请重新登录再试！");
              this.preMounted();
              this.show555=false;
            }
          })
          break;

        default:
          uploadSplrLicense(arr).then(res => {
            if (res.data.code === 200) {
              this.$message.success("上传企业认证成功！");
              this.preMounted();
              this.show555=false;
            } else {
              this.$message.error("上传企业认证失败！请重新登录再试！");
              this.preMounted();
              this.show555=false;
            }
          })
          break;
      }
    },
    // 上传失败
    errorUpload (err) {
      this.$confirm(`上传失败，请重新登录再试！`);
    },
    beforeAvatarFileUpload: function (file) {
      //限制的上限为10M
      const isLt10M = file.size / 1024 / 1024 < 3;
      if (!isLt10M) {
        this.$confirm('上传文件大小不能超过 3MB!');
      }
      return isLt10M;
    },
    successUpload (response) {
      this.uploadFileList[0] = {
        "name": "工商营业执照",
        "img": response.type
      }
    },
    successUpload2 (response) {
      this.uploadFileList[1] = {
        "name": "组织机构代码",
        "img": response.type
      }
    },
    successUpload3 (response) {
      this.uploadFileList[2] = {
        "name": "税务登记证",
        "img": response.type
      }
    },
    successUpload4 (response) {
      this.uploadFileList[3] = {
        "name": "法人身份证",
        "img": response.type
      }
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    show1 () {
      // 传数组到bus仓库并起姓名字
      Bus.$emit('arrs', this.arr)
      this.$store.commit("changeToastZjTrue")
    },
    show2 () {
      // 传数组到bus仓库并起姓名字
      Bus.$emit('arrs', this.arr2)
      this.$store.commit("changeToastZjTrue")
    },
    show3 () {
      // 传数组到bus仓库并起姓名字
      Bus.$emit('arrs', this.arr3)
      this.$store.commit("changeToastZjTrue")
    },
    show4 () {
      //修改vuex公共数据的状态
      this.$store.commit("changeSixToast4")
      // this.drawer=true;
    },
    show55 () {
      if(this.isReview==null){

      }else if(this.isReview==1){
        this.$message.success("您已上传企业认证！");
      }else{
        this.show555 = true;
      }
    },
    closeenter () {
      this.show555 = false;
    }
    ,
    showSy (e) {
      var el = e.target;
      if (el.parentNode.parentNode.firstChild.innerHTML == "绑定邮箱") {
        this.$store.commit("changeSixToast9")
      } else if (el.parentNode.parentNode.firstChild.innerHTML == "认证手机") {
        this.$store.commit("changeSixToast10")
      } else if (el.parentNode.parentNode.firstChild.innerHTML == "银行卡") {
        this.$store.commit("changeSixToast11")
      }
    }
  }
}
</script>

<style scoped>
.我的账户 {
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  margin-bottom: 20px;
}
.wodezhanghu_title {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #9e0100;
  margin-bottom: 30px;
}
.info {
  display: flex;
  /*justify-content: space-between;*/
}
.info h5 {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #555555;
}
.info > div {
  width: calc(100%/4)
}
.info p {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}
.info p span {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #9e0100;
  margin-left: 10px;
}
.info p span.money {
  font-size: 20px;
  margin-left: 0;
}
.btnBox {
  margin-top: 20px;
}
.btnBox button {
  margin-right: 10px;
  width: 120px;
  height: auto;
  padding: 4px 0;
  background-color: #9e0100;
  border-radius: 2px;
  border: solid 1px #9e0100;
  color: #fff;
  font-size: 12px;
}
.bck {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(00, 00, 00, 0.7);
}
.enterprisEcertification {
  /* z-index: 999;
  position: fixed;
  top: 10%;
  left: 40%;
  width: 720px;
  height: auto;
  margin: 0 auto;
  background-color: #fff; */

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 720px;
  height: 500px;
  margin: 10% auto;
  background-color: #fff;
}
.topentrt {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
}
.topentrt > span {
  margin-left: 16px;
  line-height: 20px;
  line-height: 40px;
}
.topentrt > div {
  padding-top: 4px;
  padding-right: 16px;
  cursor: pointer;
}
.topentrt > span > span {
  display: inline-block;
  width: 4px;
  height: 15px;
  line-height: 40px;
  background-color: #9e0100;
  position: relative;
  top: 2px;
  margin-right: 8px;
}
.enterprisContent {
  display: inline-block;
}
.enterprisContent > span {
  display: inline-block;
  margin-left: 25px;
  margin-top: 25px;
}
.enterprisContent ul {
  margin-left: 100px;
  margin-top: -20px;
}
.enterprisContent ul li {
  position: relative;
  float: left;
  width: 100px;
  height: 140px;
  line-height: 20px;
  font-size: 14px;
  color: #aaaaaa;
  text-align: center;
  margin-right: 40px;
}
.img-titles {
  position: absolute;
  display: inline-block;
  width: 90px;
  text-align: center;
  left: 5px;
  top: 100px;
}
.careful {
  display: flex;
  padding: 0 25px;
}
.careful span:first-child {
  display: block;
  width: 150px;
  padding-left: 20px;
  color: #9e0000;
  font-weight: 800;
}
.careful span:last-child {
  display: inline-block;
  padding: 0 65px 0 20px;
}
.updata-btn {
  width: 100%;
  text-align: center;
}
.updata-btn button {
  width: 410px;
  height: 40px;
  text-align: center;
  border-radius: 30px;
  margin: 50px auto;
  background: #9e0100;
  color: #fff;
}
.enterprisContent /deep/.el-upload--picture-card,
.enterprisContent /deep/.el-upload-list__item {
  width: 96px;
  height: 96px;
  border: 0;
}
.enterprisContent /deep/.el-upload--picture-card {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.enterprisContent /deep/ .is-success,
.enterprisContent /deep/ .el-upload-list__item {
  z-index: 5;
}
@media screen and (max-width: 415px) {
  #tggs {
    padding: 8px;
  }
  .wodezhanghu_title {
    margin: 0 0 16px 0;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .info > div {
    display: flex;
    justify-content: space-between;
  }
  .btnBox {
    margin: 16px 0 0 0;
  }
  .btnBox > button {
    width: 22.5%;
  }
  .btnBox > button:last-child {
    margin: 0;
  }
}
</style>