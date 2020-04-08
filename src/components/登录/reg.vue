<template>
<div>
  <header_ />
  <bg>
    <template v-slot:topTab>
      <div class="newRight">
        <span @click="tabChange(0)" :class="tabSelect==0?'reg-title selectlogin':'reg-title'">邮箱注册</span>
        <span @click="tabChange(1)" :class="tabSelect==1?'reg-title selectlogin':'reg-title'">手机注册</span>
        <i id="after" :style="tabSelect==1?'left:309px':'left:0px'"></i>
      </div>
    </template>
    <transition mode="out-in">
      <div class="form_reg">
        <!-- 邮箱注册 -->
        <div v-if="tabSelect==0" key="a1">
          <p>邮箱</p>
          <input
            type="text"
            class="srk"
            id="email"
            v-model="emailForm.email"
            placeholder="请输入邮箱"
            @blur="youxiang_yz"
          />
          <br />
          <p>验证码</p>
          <div class="dtm">
            <input
              type="number"
              class="srk"
              id="email_yzm"
              @blur="sendCode"
              v-model="emailForm.email_yzm"
              placeholder="请输入邮箱验证码"
              style="width: 322px"
            />
            <input
              type="button"
              :class="{'hqdtmNew':isActive}"
              @click="sendEm"
              :disabled="senMsg.countFlag"
              class="hqdtm"
              id="yxdtm"
              :value="senMsg.btnMsg==null?+senMsg.countdown+'s后重新获取':senMsg.btnMsg"
            />
          </div>
          <p>密码</p>
          <input
            type="password"
            class="srk"
            id="email_pwd"
            v-model="emailForm.email_pwd"
            placeholder="请输入密码（6-16位字母/数字/符号）"
          />
          <br />
          <p>确认密码</p>
          <input
            type="password"
            class="srk"
            v-model="emailForm.email_newPwd"
            id="email_Newpwd"
            @blur="checkPassword"
            placeholder="请输入密码（6-16位字母/数字/符号）"
          />
          <br />
          <p>身份选择</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option value="个人用户">个人用户</el-option>
            <el-option value="企业用户">企业用户</el-option>
          </el-select>
          <br />
          <label class="reg-label">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              @change="changeClick($event)"
              alt="未选中"
            />
            <font>我已阅读并同意</font>
            <a href="javascript:void(0);" @click="protocol($event)">平台服务协议</a>
            <font>、</font>
            <a href="javascript:void(0);" @click="protocol($event)">用户平台入驻协议</a>
            <font>、</font>

            <a href="javascript:void(0);" @click="protocol($event)">隐私保护协议</a>
            <font>、</font>
            <a href="javascript:void(0);" @click="protocol($event)">法律声明</a>
          </label>
          <el-drawer
              :title="xytitle"
              :visible.sync="drawer"
              :direction="direction"
              size="100%"
              height="505"
            >
            <div class="qqq">
              <div v-html="ptXy" class="ljj_drawer"></div>
            </div>
          </el-drawer>
          <!-- <el-dialog :title="xytitle" :visible.sync="dialogVisible" height="50%">
            <div class="el-dialog-div" v-html="ptXy"></div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog> -->
          <input
            type="submit"
            @click="regsubmit"
            id="email_login"
            class="loginbut"
            value="注 册"
            disabled
          />
          <p>
            已有帐号？
            <router-link to="/login">登录</router-link>
          </p>
        </div>
        <!-- 手机注册 -->
        <div v-else key="a2">
          <p>帐号</p>
          <input
            type="text"
            class="srk"
            id="sj"
            v-model="phoneForm.phone"
            placeholder="请输入手机号"
            maxlength="11"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
            @blur="testPhoneNumber()"
          />
          <br />
          <p>验证码</p>
          <div class="dtm">
            <input
              type="number"
              class="srk"
              id="sj_yzm"
              @blur="sendCode2"
              v-model="phoneForm.sj_yzm"
              placeholder="请输入手机验证码"
              style="width: 322px"
            />
            <!-- 
              maxlength="1"
              :disabled="senMsg.countFlag" -->
            <input
              type="button"
              :class="{'hqdtmNew':isActive}"
              @click="sendEm2"
              :disabled="senMsg.countFlag"
              class="hqdtm"
              :value="senMsg.btnMsg==null?+senMsg.countdown+'s后重新获取':senMsg.btnMsg"
            />
          </div>
          <p>密码</p>
          <input
            type="password"
            class="srk"
            id="sj_pwd"
            v-model="phoneForm.sj_pwd"
            placeholder="请输入密码（6-16位字母/数字/符号）"
          />
          <br />
          <p>确认密码</p>
          <input
            type="password"
            class="srk"
            id="sj_pwdNew"
            v-model="phoneForm.sj_pwdNew"
            @blur="checkPassword2"
            placeholder="请输入密码（6-16位字母/数字/符号）"
          />
          <br />
          <p>身份选择</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option value="个人用户">个人用户</el-option>
            <el-option value="企业用户">企业用户</el-option>
          </el-select>
          <br />
          <label class="reg-label">
            <input type="checkbox" id="agreement" name="agreement"
              @change="changeClick2($event)"
              alt="未选中" />
            <font>我已阅读并同意</font>
            <a href="javascript:void(0);" @click="protocol($event)">平台服务协议</a>
            <font>、</font>
            <a href="javascript:void(0);" @click="protocol($event)">用户平台入驻协议</a>
            <font>、</font>

            <a href="javascript:void(0);" @click="protocol($event)">隐私保护协议</a>
            <font>、</font>
            <a href="javascript:void(0);" @click="protocol($event)">法律声明</a>
          </label>
          <el-drawer
              :title="xytitle"
              :visible.sync="drawer"
              :direction="direction"
              size="100%"
              height="505"
            >
            <div class="qqq">
              <div v-html="ptXy" class="ljj_drawer"></div>
            </div>
          </el-drawer>
          <input type="submit" id="sj_login" class="loginbut" @click="regsubmit2" value="注 册" />
          <p>
            已有帐号？
            <router-link to="/login">登录</router-link>
          </p>
        </div>
      </div>
    </transition>
  </bg>
  <footer_ />
  </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import bg from "../../components/public/登录注册";
import {
  getMembership,
  getEmail,
  repeatName,
  postReg,
  getNewPtInfo,
  checkPhone,
  phone,
  shenfenXz,
  login
} from "../api/api";
import { setInterval, clearInterval } from "timers";
export default {
  components: {
    bg,
    header_,
    footer_,
  },
  data() {
    return {
      dialogVisible: false,
      drawer:false,
      direction:"btt",
      xytitle: "",
      ptXy: "",
      user: {},
      tabSelect: 0,
      //按钮样式
      isActive: false,
      //邮箱数据
      emailForm: {
        email: "",
        email_yzm: "",
        email_pwd: "",
        email_newPwd: ""
      },
      //按钮倒计时 60 秒
      senMsg: {
        //倒计时间
        countdown: 60,
        //设置是否可点击
        countFlag: false,
        //设置发送信息
        btnMsg: "获取动态码",
        //定时器
        intervalBtn: {},
        //验证码
        code: ""
      },
      //手机号注册数据
      phoneForm: {
        phone: "",
        sj_yzm: "",
        sj_pwd: "",
        sj_pwdNew: ""
      },
      sendEmail: {
        //倒计时间
        countdown: 60,
        //设置是否可点击
        countFlag: false,
        //设置发送信息
        btnMsg: "获取动态码",
        //定时器
        intervalBtn: {}
      },
      checkPasswordValue:false,
      value:""
    };
  },
  methods: {
    //平台协议
    protocol(e) {
      let xyName = e.target.innerHTML;
      //获取协议
      getNewPtInfo({ xyName }).then(res => {
        if (res.data.code === 200) {
          this.ptXy = res.data.data.newsContent; //HTML片段
          this.drawer = true;
          this.xytitle = xyName;
        } else {
          console.log("错误显示!");
        }
      });
    },
    tabChange: function(index) {
      this.tabSelect = index;
    },
    //邮箱验证
    youxiang_yz() {
      setTimeout(() => {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (this.emailForm.email === "") {
          this.$message({
            showClose: true,
            message: "请输入账号",
            type: "error"
          });
          this.senMsg.countFlag = true;
          return;
        }
        if (!reg.test(this.emailForm.email)) {
          this.$message({
            showClose: true,
            message: "请输入正确的邮箱",
            type: "error"
          });
          this.senMsg.countFlag = true;
          return;
        }
        repeatName({ email: this.emailForm.email }).then(res => {
          var $this = this;
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: "success"
            });
            this.senMsg.countFlag = false;
            return;
          } else {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: "error"
            });
            this.senMsg.countFlag = true;
            return;
          }
        }, 1000);
      });
    },
    //倒计时
    sendEm() {
      if (this.senMsg.countFlag) {
        return false;
      }
      //把异步执行的代码放到这里去
      if (this.emailForm.email == "") {
        alert("邮箱不能为空");
        return false;
      }
      this.senMsg.btnMsg = null;
      this.isActive = !this.isActive;
      this.senMsg.countFlag = !this.senMsg.countFlag;
      this.senMsg.intervalBtn = setInterval(() => {
        if (this.senMsg.countdown <= 0) {
          //可以点击
          this.senMsg.countFlag = !this.senMsg.countFlag;
          //改变样式
          this.isActive = !this.isActive;
          //清除定时器
          clearInterval(this.senMsg.intervalBtn);
          //设置发送时间
          this.senMsg.countdown = 60;
          this.senMsg.btnMsg = "获取动态码";
        }
        //定时器
        this.senMsg.countdown--;
      }, 1000);
      var letx = { email: this.emailForm.email };
      //发送邮箱接口
      getEmail(letx)
        .then(res => {
          if (res.data.code === 200) {
            this.senMsg.code = res.data.data;
            console.log(res.data.data)
          }
        })
        .catch(res => {
          this.$message({
            showClose: true,
            message: "接口异常",
            center: true
          });
        });
    },
    sendCode() {
      if (this.emailForm.email_yzm !== this.senMsg.code) {
        this.$message({
          showClose: true,
          message: "验证码输入错误请重新输入",
          type: "error"
        });
      }
    },
    //注册按钮 type=0 邮件注册！
    regsubmit() {
      if(this.value){
        postReg({
          type: 0,
          email: this.emailForm.email,
          password: this.emailForm.email_pwd
        }).then(res => {
          if (res.code === 200) {
            this.$message({
              showClose: true,
              message: "注册成功",
              type: "success"
            });
            sessionStorage.setItem("user", res.data);
            let that=this;
            var shenfenData={
                username:this.emailForm.email,
                shenType:this.value=="个人用户"?'2':'0'
            }
            shenfenXz(shenfenData).then(res => {
                if (res.code === 200) {
                  // 自动登录
                  var logData = {
                    userName: this.emailForm.email,
                    password: this.emailForm.email_pwd,
                  }
                  login(logData).then(res => {
                    if (res.code === 200) {
                      this.$message({
                        showClose: true,
                        message: "登录成功！",
                        type: "success"
                      });
                      let user = res.data;
                      //seesion 对象
                      let seesionData = {
                        isLogin: true
                      }
                      sessionStorage.setItem("user", JSON.stringify(user));
                      sessionStorage.setItem("token", user.token);
                      this.$emit('func', true)
                      this.$router.push("/newFillInfo")
                    } else {
                      this.$message({
                        showClose: true,
                        message: res.msg,
                        type: "error"
                      });
                    }
                  })
                } else {
                  this.$message({
                    showClose: true,
                    message: res.msg,
                    type: "error"
                });
              }
            });
            // this.$store.commit('setuserName', that.emailForm.email)
            // this.$store.commit('setuserPassword', that.emailForm.email_pwd)
            // this.$router.push("/complete");
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error"
            });
          }
        });
      }else{
        this.$message({
          showClose: true,
          message: "您尚未选择身份，请选择身份后重试!",
          type: "error"
        });
      }
    },
    changeClick(e) {
      var el = e.target;
      var submit = document.getElementById("email_login");
      if (el.alt == "未选中") {
        el.alt = "已选中";
        if(this.checkPasswordValue){
          submit.disabled = false;
          submit.style.backgroundColor = "#9e0100";
          submit.style.boxShadow = "0 3px 9px #dd7272";
        }
      } else {
        submit.style.backgroundColor = "#666";
        submit.style.boxShadow = "0 3px 9px #666";
        submit.disabled = true;
        el.alt = "未选中";
      }
    },
    checkPassword(){
      var submit = document.getElementById("email_login");
      if(this.emailForm.email_newPwd==this.emailForm.email_pwd){
        this.checkPasswordValue=true
        let el=document.getElementById('agreement').alt
        if(el=="已选中"){
          submit.disabled = false;
          submit.style.backgroundColor = "#9e0100";
          submit.style.boxShadow = "0 3px 9px #dd7272";
        }
      }else{
        this.$message({
          showClose: true,
          message: "两次输入密码不一致，请重新输入",
          type: "error"
        });
        document.getElementById('email_Newpwd').value="";
        submit.style.backgroundColor = "#666";
        submit.style.boxShadow = "0 3px 9px #666";
        submit.disabled = true;
      }
    },
    checkPassword2(){
      var submit = document.getElementById("sj_login");
      if(this.phoneForm.sj_pwd==this.phoneForm.sj_pwdNew){
        this.checkPasswordValue=true
        let el=document.getElementById('agreement').alt
        if(el=="已选中"){
          submit.disabled = false;
          submit.style.backgroundColor = "#9e0100";
          submit.style.boxShadow = "0 3px 9px #dd7272";
        }
      }else{
        this.$message({
          showClose: true,
          message: "两次输入密码不一致，请重新输入",
          type: "error"
        });
        document.getElementById('sj_pwdNew').value="";
        submit.style.backgroundColor = "#666";
        submit.style.boxShadow = "0 3px 9px #666";
        submit.disabled = true;
      }
    },
    testPhoneNumber(){
      setTimeout(() => {
        var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
        if (this.phoneForm.phone === "") {
          this.$message({
            showClose: true,
            message: "请输入账号",
            type: "error"
          });
          this.senMsg.countFlag = true;
          return;
        }
        if (!reg.test(this.phoneForm.phone)) {
          this.$message({
            showClose: true,
            message: "请输入正确的手机号码",
            type: "error"
          });
          this.senMsg.countFlag = true;
          return;
        }
        checkPhone({ phone: this.phoneForm.phone }).then(res => {
          var $this = this;
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: res.data.data,
              type: "success"
            });
            this.senMsg.countFlag = false;
            return;
          } else {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: "error"
            });
            this.senMsg.countFlag = true;
            return;
          }
        }, 1000);
      });
    },
    sendEm2(){
      if (this.senMsg.countFlag) {
        return false;
      }
      //把异步执行的代码放到这里去
      if (this.phoneForm.phone == "") {
        alert("手机号码不能为空");
        return false;
      }
      this.senMsg.btnMsg = null;
      this.isActive = !this.isActive;
      this.senMsg.countFlag = !this.senMsg.countFlag;
      this.senMsg.intervalBtn = setInterval(() => {
        if (this.senMsg.countdown <= 0) {
          //可以点击
          this.senMsg.countFlag = !this.senMsg.countFlag;
          //改变样式
          this.isActive = !this.isActive;
          //清除定时器
          clearInterval(this.senMsg.intervalBtn);
          //设置发送时间
          this.senMsg.countdown = 60;
          this.senMsg.btnMsg = "获取动态码";
        }
        //定时器
        this.senMsg.countdown--;
      }, 1000);
      var letx = { phone: this.phoneForm.phone };
      phone(letx)
        .then(res => {
          if (res.data.code === 200) {
            this.senMsg.code = res.data.data;
            consoel.log(res.data.data)
          }else{
            this.$message({
              showClose: true,
              message: res.data.data,
              type: "error"
            });
          }
        })
        // .catch(res => {
        //   this.$message({
        //     showClose: true,
        //     message: "接口异常",
        //     center: true
        //   });
        // });

    },
    sendCode2() {
      if (this.phoneForm.sj_yzm !== this.senMsg.code) {
        this.$message({
          showClose: true,
          message: "验证码输入错误请重新输入",
          type: "error"
        });
      }
    },
    regsubmit2() {
      if(this.phoneForm.phone!=""||this.phoneForm.sj_yzm!=""||this.phoneForm.sj_pwd!=""||this.phoneForm.sj_pwdNew!=""||this.value!=""){
        if(this.phoneForm.sj_pwd==this.phoneForm.sj_pwdNew){
          postReg({
            type: 1,
            phoneNo: this.phoneForm.phone,
            password: this.phoneForm.sj_pwd
          }).then(res => {
            if (res.code === 200) {
              this.$message({
                showClose: true,
                message: "注册成功",
                type: "success"
              });
              sessionStorage.setItem("user", res.data);
              let that=this;
              var shenfenData={
                username:this.phoneForm.phone,
                shenType:this.value=="个人用户"?'2':'0'
              }
              shenfenXz(shenfenData).then(res => {
                if (res.code === 200) {
                  // 自动登录
                  var logData = {
                    userName: this.phoneForm.phone,
                    password: this.phoneForm.sj_pwd,
                  }
                  login(logData).then(res => {
                    if (res.code === 200) {
                      this.$message({
                        showClose: true,
                        message: "登录成功！",
                        type: "success"
                      });
                      let user = res.data;
                      //seesion 对象
                      let seesionData = {
                        isLogin: true
                      }
                      sessionStorage.setItem("user", JSON.stringify(user));
                      sessionStorage.setItem("token", user.token);
                      this.$emit('func', true)
                      this.$router.push("/newFillInfo")
                    } else {
                      this.$message({
                        showClose: true,
                        message: res.msg,
                        type: "error"
                      });
                    }
                  })
                } else {
                  this.$message({
                    showClose: true,
                    message: res.msg,
                    type: "error"
                  });
                }
              });
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error"
              });
            }
          });
        }else{
          this.$message({
            showClose: true,
            message: "两次输入密码不一致",
            type: "error"
          });
        }
      }else{
        this.$message({
          showClose: true,
          message: "您有必要信息尚未正确输入或身份未选择",
          type: "error"
        });
      }
      
    },
    changeClick2(e) {
      var el = e.target;
      var submit = document.getElementById("sj_login");
      if (el.alt == "未选中") {
        el.alt = "已选中";
        if(this.checkPasswordValue){
          submit.disabled = false;
          submit.style.backgroundColor = "#9e0100";
          submit.style.boxShadow = "0 3px 9px #dd7272";
        }
      } else {
        submit.style.backgroundColor = "#666";
        submit.style.boxShadow = "0 3px 9px #666";
        submit.disabled = true;
        el.alt = "未选中";
      }
    },
  },
  mounted() {
  },
  watch: {},
};
</script>

<style scoped>
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button,
input[type="number"] {
  appearance: none;
}

.el-dialog-div {
  height: 60vh;
  overflow: auto;
}

.ptxy {
  width: 850px !important;
  height: 500px !important;
  overflow: auto !important;
}
.reg-title {
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #bbbbbb;
}
.selectlogin {
  color: #353535 !important;
}
.bottom_reg {
  font-size: 16px;
  color: #777;
  margin-top: 40px;
}
.bottom_reg > div {
  margin-top: 60px;
  width: 418px;
}
.form_reg {
  width: 418px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.srk {
  font-size: 15px;
  margin: 1rem 0 1.5rem 0;
  padding-left: 20px;
  width: 100%;
  height: 47px;
  background-color: #ffffff;
  border: solid 1px #e6e6e6;
  outline-color: #9e0100;
  box-sizing: border-box;
}

.reg-label,
.reg-label font,
.reg-label a {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #979797;
}
.reg-label a {
  text-decoration: underline;
}
.reg-label a:hover {
  color: #9e0100;
}
input[name="agreement"] {
  margin-right: 5px;
}
.loginbut {
  font-size: 18px;
  color: #fff;
  height: 51px;
  background-color: #666;
  border-radius: 26px;
  border: 0;
  outline: none;
  margin: 1rem 0;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 3px 9px #666;
}
.bottom_reg p:last-of-type {
  text-align: center;
}
.hqdtm {
  color: #fff;
  height: 49px;
  background-color: #9e0100;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 96px;
}
.hqdtmNew {
  color: #fff;
  height: 49px;
  background-color: #979797;
  border: 0;
  outline: none;
  width: 96px;
}
#after {
  transition: 0.5s;
}

.v-enter-active {
  transition: 0.3s ease;
}
.v-leave-active {
  transition: 0.3s ease;
}
.v-enter,
.v-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
#rkdjGridapp .el-dialog__body {
  height: 600px;
}
#after,
#after2 {
  transition: 0.5s;
}
.qqq{
  width: 100%;
  height: 800px;
  overflow-y: scroll;
}
.ljj_drawer{
  height: 100%;
  display: block;
}
.el-drawer__body{
  overflow: scroll;
}
/deep/ .el-select{
  margin: 1rem 0 1.5rem 0;
  width: 100% !important;
}
/deep/ .el-input__inner{
  border-radius: 0;
}
/deep/ .el-select .el-input.is-focus .el-input__inner{
  border-color: #9e0100;
}
/deep/ .el-select .el-input__inner:focus{
  border-color: #9e0100;
}
.el-select-dropdown__item.selected{
  color: #9e0100;
}
.newRight{
  border-bottom: 1px solid #d2d2d2;
}
@media screen and (max-width: 1500px) {
  .hqdtm{
    width: auto;
    padding: 0 4px;
  }
  #agreement{
    width: 20px;
    height: 20px;
  }
}
@media screen and (max-width: 415px) {
  #agreement{
    position: relative;
    top: 1px;
  }        
  .背景内容{
    background: url('')
  }
  .form_reg{
    margin-left:0;
  }
  .bottom>div>input{
    border: 0;
  }
}
</style>