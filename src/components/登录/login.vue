<template>
  <div>
    <header_ />
    <bg>
      <div class="erweima">
        <div>扫码登录更安全</div>
      </div>
      <template v-slot:topTab>
        <div class="newRight">
          <span @click="tabChange(0)">账号密码登录</span>
          <span @click="tabChange(1)">手机动态登录</span>
          <i id="after"
            :style="tabSelect==1?'left:310px':'left:0px'"></i>
        </div>
      </template>
      <transition mode="out-in">
        <div v-if="tabSelect==0"
             key="a1">
          <p>帐号</p>
          <input type="text" id="username" v-model="userName" @blur="cleanPassword" placeholder="请输入手机号/邮箱/用户名"><br />
          <p>密码</p>
          <input type="password"
                 id="password"
                 v-model="password"
                 @keyup.enter="logSubmit"
                 placeholder="请输入密码（6-16位字母/数字/符号"
                 maxlength="16"><img src="@/assets/imgs/ckmm.png"
               alt=""
               @click="ckmm($event)"><br />
          <label><input type="checkbox"
                   id="remember"
                   name="remember" />两周内自动登录</label>
          <a href="javascript:void(0);"
             style="float: right">
            <router-link to="/findPassword">忘记密码</router-link>
          </a>
          <input type="button"
                 @click="logSubmit"
                 class="loginbut"
                 value="登  录">
          <p>还没有帐号？<router-link to="/reg">点击注册</router-link>
          </p>
        </div>
        <div style="height:391px;"
             v-else
             key="a2">
          <p>帐号</p>
          <input type="text"
                 id="sjh"
                 placeholder="请输入手机号"
                 maxlength="11"
                 onkeyup="this.value=this.value.replace(/\D/g,'')"><br />
          <p>手机动态码</p>
          <div class="dtm">
            <input type="text"
                   id="dtmsrk"
                   placeholder="请输入6位动态码"
                   style="width: 300px"
                   step="1"
                   maxlength="6">
            <input type="button"
                   :class="{'hqdtmNew':isActive}"
                   @click="clickToGetPhoneDtm($event)"
                   :disabled="senMsg.countFlag"
                   class="hqdtm"
                   id="yxdtm"
                   :value="senMsg.btnMsg==null?+senMsg.countdown+'s后重新获取':senMsg.btnMsg" />
            <!-- <input type="button" class="hqdtm" @click="clickToGetPhoneDtm($event)" value="获取动态码"> -->
          </div>
          <label><input type="checkbox"
                   id="remember"
                   name="remember" />两周内自动登录</label>
          <a href="javascript:void(0);"
             style="float: right">
            <router-link to="/findPassword">忘记密码</router-link>
          </a>
          <input type="button"
                 class="loginbut"
                 @click="phoneMessageLogin"
                 value="登  录">
          <p>还没有帐号？<router-link to="/reg">点击注册</router-link>
          </p>
        </div>
      </transition>
      <ul class="zsyc_dsfdl">
        <li><a href="javascript:void(0);"><img src="@/assets/imgs/wb.png"
                 alt=""></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/imgs/qq.png"
                 alt=""></a></li>
        <li><a href="javascript:void(0);"><img src="@/assets/imgs/wx.png"
                 alt=""></a></li>
      </ul>

    </bg>
    <footer_ />
  </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import bg from '../../components/public/登录注册'
import ckmmc from '@/assets/imgs/ckmmc.png'
import ckmm from '@/assets/imgs/ckmm.png'
import { login, sendCode, phoneLogin } from '../api/api'

export default {
  components: {
    header_,
    footer_,
    bg
  },
  data () {
    return {
      tabSelect: 0,
      isLogin: false,
      userName: '',
      password: '',
      countFlag: false,
      btnMsg: "获取动态码",
      countdown: 60,
      //按钮样式
      isActive: false,
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
    }
  },
  methods: {
    tabChange: function (index) {
      this.tabSelect = index
      this.userName = ''

    },
    ckmm (e) {
      var el = e.target;
      var password = document.getElementById("password")
      if (el.src == ckmm && password.type == "password") {
        el.src = ckmmc
        password.type = ""
      } else if (el.src == ckmmc) {
        el.src = ckmm
        password.type = "password"
      }
    },
    logSubmit () {
      var logData = {
        userName: this.userName,
        password: this.password
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
          this.$router.push("/")
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: "error"
          });
        }
      })
    },
    clickToGetPhoneDtm (e) {
      if (this.senMsg.countFlag) {
        return false;
      }
      this.senMsg.btnMsg = null;
      this.isActive = !this.isActive;
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
      let sjh = document.getElementById('sjh')
      let reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
      if (sjh.value == "" || sjh.value == null) {
        this.$message({
          showClose: true,
          message: "请输入手机号码",
          type: "error"
        });
        return;
      }
      if (!reg.test(sjh.value)) {
        this.$message({
          showClose: true,
          message: "请输入正确的手机号码",
          type: "error"
        });
        this.senMsg.countFlag = true;
        return;
      }
      sendCode({ "phoneNo": sjh.value }).then(res => {
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "短信发送成功！",
            type: "success"
          })
        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "error"
          })
        }
      })
    },
    phoneMessageLogin () {
      let sjh = document.getElementById('sjh')
      let dtmsrk = document.getElementById('dtmsrk')
      // phoneLogin
      phoneLogin({ "code": dtmsrk.value, "phoneNo": sjh.value }).then(res => {
        if (res.code == 200) {
          this.$message({
            showClose: true,
            message: "登录成功！",
            type: "success"
          })
          let user = res.data;
          //seesion 对象
          let seesionData = {
            isLogin: true
          }
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("token", user.token);
          this.$emit('func', true)
          this.$router.push("/")
        } else {
          this.$message({
            showClose: true,
            message: "登录失败！",
            type: "error"
          })
        }
      })
    },
    cleanPassword () {
      if (this.userName == '') {
        this.password = ''
      }
    }
  }
}
</script>
<style scoped>
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
.erweima {
  width: 230px;
  height: 78px;
  background: url("../../assets/imgs/erweima.png") no-repeat top right;
  position: absolute;
  margin: 0;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: none;
}
.erweima > div {
  position: relative;
  top: 30px;
  left: 20px;
  width: 150px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 16px;
  color: #878787;
  background-color: #f2f2f2;
}

#after{
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
#password + img {
  position: relative;
  top: -60px;
  left: 350px;
  cursor: pointer;
}
input::-webkit-input-placeholder {
  color: #bdbdbd;
  opacity: 1;
}
.hqdtm {
  width: 111px;
}
#remember {
  width: 1rem;
  height: 1rem;
  position: relative;
  top: 4px;
}
.zsyc_dsfdl {
  display: none;
}
.newRight{
  margin-bottom: 4REM;
  border-bottom: 1px solid #d2d2d2;
}
@media screen and (max-width: 415px) {
  .erweima {
    background: url("");
  }
  .背景内容 {
    background: url("");
  }
  .bottom > div:nth-child(2) {
    margin-left: 0;
  }
  .bottom > div > input {
    border: 0;
  }
}
</style>