<template>
  <div class="背景内容">
    <div class="dlzcwrap_select">
      <img src="@/assets/imgs/loginleft.png" />
      <div class="right_login_com_select">
        <div class="top_select">
          <div>
            <span>选择注册身份</span>
            <!-- <span>完善注册信息</span>
            <span>完善安全设置</span>
            <span>注册成功</span> -->
          </div>
        </div>
        <div v-if="tabSelect==0" class="bottom_login_com">
          <div class="xzzcsf" key="a1">
            <div>
              <img
                data-identity="企业会员"
                data-id="0"
                @click="sfChange(0)"
                :class="shenfen==0?'selected':''"
                src="@/assets/imgs/qyhy.png"
                alt
              />
              <img
                data-identity="服务供应商"
                data-id="1"
                @click="sfChange(1)"
                :class="shenfen==1?'selected':''"
                src="@/assets/imgs/grhy.png"
                alt
              />
              <img
                data-identity="人才会员"
                data-id="2"
                @click="sfChange(2)"
                :class="shenfen==2?'selected':''"
                src="@/assets/imgs/fwgys.png"
                alt
              />
              <img
                data-identity="共享人才"
                data-id="3"
                @click="sfChange(3)"
                :class="shenfen==3?'selected':''"
                src="@/assets/imgs/gxrc.png"
                alt
              />
            </div>
            <article class="login-complete-article">
              <i></i>
              <button class="btn" @click="next()">下一步</button>
              <!-- <router-link class="btn" to="/complete/complete_two">下一步</router-link> -->
            </article>
          </div>
        </div>
        <div v-else class="completed">
          <div class="comleted_one">
            <img src="../../../assets/imgs/login_complete.png" class="comleted_img" />
            <div class="completed_right">
              <div class="completed_login">
                <div class="circle_onee">
                  <canvas id="completed_canvas_one"></canvas>
                  <div class="circle_twoe">{{login_info.value}}%</div>
                </div>
                <div class="completed_public">
                  <div class="completed_login_title">注册信息完成度</div>
                  <div class="completed_login_content">
                    您的注册信息完成度
                    <font>{{login_info.name}}</font>
                    ，请立即到“我的主页”中继续完善注册信息
                  </div>
                </div>
              </div>

              <div class="completed_login">
                <div class="circle_onee">
                  <canvas id="completed_canvas_two"></canvas>
                  <div class="circle_twoe">{{safe_info.value}}%</div>
                </div>
                <div class="completed_public">
                  <div class="completed_login_title">安全设置完成度</div>
                  <div class="completed_login_content">
                    您的安全设置完成度
                    <font>{{safe_info.name}}</font>
                    ，请立即到“我的主页”中继续完善安全设置，以免影响用户安全
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article class="complete-article">
            <button class="firstbtn btn" @click="next1()">立即体验</button>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shenfenXz,login } from "../../api/api";
export default {
  data() {
    return {
      //外步骤条初始坐标(0,1,2,3----选择注册身份，完善注册信息，完善安全设置，注册完成)
      tabSelect: 0,
      shenfen: 0,
      login_info: { value: 60, name: "一般" },
      safe_info: { value: 20, name: "较差" },
      username: ""
    };
  },
  methods: {
    sfChange: function(a) {
      this.shenfen = a;
    },
    next1(){
      this.$router.push("/");
    },
    next: function() {
      var shenfenData={
          username:sessionStorage.getItem("username"),
          shenType:this.shenfen
      }
      shenfenXz(shenfenData).then(res => {
          if (res.code === 200) {
            // 自动登录
            var logData = {
              userName: this.$store.getters.getuserName,
              password: this.$store.getters.getuserPassword
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
                this.$router.push("/fun/perfectUserInfo")
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
    },
    canvas_circle(k, Idname, style) {
      var element = document.getElementById(Idname);
      var canvas = element.getContext("2d");
      element.width = element.height = style.width;
      canvas.fillStyle = style.banck;
      var step = 1;
      var time = 10;
      var i = 0,
        rage = 360 * k;
      var srage = -Math.PI * 0.5; //90°（90度）
      var use = function() {
        i = i + step;
        if (i <= rage) {
          canvas.beginPath();
          canvas.moveTo(54, 54);
          canvas.arc(54, 54, 54, srage, Math.PI * 2 * (i / 360) + srage);
          canvas.fill();
          setTimeout(use, time);
        }
      };
      use();
    }
  },
  created() {
    this.shenfen =
      this.$route.query.shenfen != undefined ? this.$route.query.shenfen : 0;
       this.tabSelect =
      this.$route.query.tabSelect != undefined
        ? this.$route.query.tabSelect
        : 0;
  },
  mounted() {
    var k1 = this.login_info.value / 100;
    var k2 = this.safe_info.value / 100;
    this.canvas_circle(k1, "completed_canvas_one", {
      width: 108,
      banck: "#9e0000"
    });
    this.canvas_circle(k2, "completed_canvas_two", {
      width: 108,
      banck: "#9e0000"
    });
  }
};
</script>

<!--这个style是单独拎出来修改父级样式的-->
<style>
.背景内容 {
  background-image: url(../../../assets/imgs/loginba.png);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.dlzcwrap_select {
  width: 1200px;
  height: 807px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  position: relative;
  overflow: hidden;
}
.dlzcwrap_select > img {
  flex-shrink: 0;
}
.dlzcwrap_select > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top_select{
  width: 80%;
}
.right_login_com_select > .top_select div {
  text-align: center;
  width: 100%;
  font-size: 24px;
  color: #353535;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  position: relative;
}
.right_login_com_select > .top_select div span {
  display: block;
  padding: 32px 0;
  width: 50%;
  box-sizing: border-box;
  cursor: pointer;
  padding-top: 0px;
}
.right_login_com_select > .top_select #after,.right_login_com_select > .top_select #after2 {
  content: "";
  display: block;
  width: 209px;
  height: 1px;
  background: #9e0100;
  position: absolute;
  bottom: -1px;
  left: 0;
}
.right_login_com_select > .top_select #after2 {
  width: 110px;
}
.bottom_login_com {
  font-size: 16px;
  color: #777;
  margin-top: 10px;
}
.bottom_login_com > div {
  margin-top: 60px;
  width: 418px;
}

#username,
#password,
#sjh,
#dtmsrk {
  font-size: 15px;
  margin: 15px 0 25px 0;
  padding-left: 20px;
  width: 411px;
  height: 47px;
  background-color: #ffffff;
  border: solid 1px #e6e6e6;
  width: 400px;
  outline-color: #9e0100;
}
 .bottom_login_com a {
  text-decoration: none;
  color: #9e0100;
} 
.loginbut {
  font-size: 18px;
  color: #fff;
  height: 51px;
  background-color: #9e0100;
  border-radius: 26px;
  border: 0;
  outline: none;
  margin: 30px 0;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 3px 9px #dd7272;
}
 .bottom_login_com p:last-of-type {
  text-align: center;
}
.bottom_login_com ul {
  margin-top: 35px;
  padding-left: 70px;
}
.bottom_login_com ul > li {
  list-style: none;
  float: left;
  margin: 0 20px;
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
.dtm {
  display: flex;
}
.dtm > .hqdtm {
  margin: 15px 0 25px 0;
}

@media screen and (max-width: 1400px) {
  .dlzcwrap_select {
    width: 1000px;
    height: 660px;
  }
  .dlzcwrap_select > img {
    width: 300px;
  }
 .bottom_login_com > div {
    margin-top: 20px;
  } 
}

.right_login_com_select > .top div {
  text-align: center;
  width: 779px;
  font-size: 24px;
  color: #353535;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  position: relative;
}
 .bottom_login_com > div {
  display: flex;
  height: 100%;
  width: 780px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.bottom_login_com {
  height: 600px;
  display: flex;
  margin-bottom: 15px;
} 
.xzzcsf div {
  justify-content: space-between;
  flex-wrap: wrap;
}
/* 
.bottom > div > div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
} */

.submit {
  right: 0;
  position: absolute;
  bottom: -100px;
}

hr {
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background: #8a8a8a;
  opacity: 0.1;
}
select,
option {
  outline: none;
  width: 321px;
  height: 44px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 10px;
}
article {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.login-complete-article {
  justify-content: center !important;
}
.login-complete-article .btn {
  width: 420px !important;
  color: #fff !important;
  text-align: center;
  line-height: 51px;
}
.xzzcsf > div img {
  opacity: 0.2;
  transition: 0.2s;
}
.xzzcsf > div img:hover {
  opacity: 1;
  transform: translateY(-10px);
}
.xzzcsf > div img.selected {
  opacity: 1;
  animation: mymove 0.5s infinite alternate;
}
@keyframes mymove {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-10px);
  }
}

.completed {
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 780px;
  justify-content: space-between;
}
.comleted_one {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-top: 125px;
}
.comleted_img {
  display: block;
}
.completed_right {
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  justify-content: space-between;
}
.completed_login {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.completed_public {
  width: 240px;
  margin-top: -10px;
}
.completed_login_title {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #999999;
  margin-bottom: 15px;
}
.completed_login_content {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #555555;
}
.completed_login_content font {
  color: #9e0000;
}
.circle_onee {
  width: 108px;
  height: 108px;
  line-height: 108px;
  text-align: center;
  border: 1px solid #dcdada;
  border-radius: 108px;
  font-size: 30px;
  color: #9e0100;
  /* overflow: hidden; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle_twoe {
  z-index: 2;
  width: 103px;
  height: 103px;
  background-color: #fff;
  border-radius: 50%;
}
#completed_canvas_one,
#completed_canvas_two {
  width: 108px;
  height: 108px;
  position: absolute;
  top: 0;
  left: 0;
}
.complete-article {
  display: flex;
  justify-content: center;
}
.complete-article .btn {
  margin: 0 15px;
}
.firstbtn {
  width: 410px;
  height: 51px;
  background-color: #9e0100;
  border-radius: 26px;
}
#after2{
  display: none !important;
}
@media screen and (max-width: 415px) {
  .complete{
    height:auto;
  }
  #after{
    display: none !important;
  }
  #after2{
    display: block !important;
  }
  .背景内容{
    width: 100%;
  }
  .背景内容>.dlzcwrap_select{
    height: 100%;
    height: auto;
    border-radius: 0;
  }
  .背景内容>.dlzcwrap_select>img{
    display: none;
  }
  .背景内容>.dlzcwrap_select>.right_login_com_select>.top_select{
    width: 100%;
  }
  .top_select>div{
    width: auto !important;
    display: flex;
    justify-content: space-evenly;
  }
  .top_select>div>span{
    width: auto !important;
    font-size: 16px;
  }
  .bottom_login_com > div {
    display: block;
  }
  .bottom_login_com{
    width: 100%;
    height: auto;
  }
  .xzzcsf{
    width: 100% !important;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .xzzcsf>div>img{
    width: 100%;
  }
  .login-complete-article .btn{
    margin-top: 16px;
    width: 50% !important;
    margin: 0 auto;
    margin-bottom: 16px;
  }
}


  @media screen and (max-width: 415px) {
    .背景内容{
      background: url('');
      padding: 0;
    }
    .top_select>div,.completed{
      width: 100%;
      height: auto;
    }
    .comleted_one{
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      height: auto;
    }
    .comleted_one>div{
      margin-top: 16px;
      padding-top: 8px;
      height: auto;
    }
    .completed_right>div:nth-child(2){
      margin-top: 16px;
    }
    .complete-article{
        width: 100%;
    }
    .complete-article>.btn{
        width: 50%;
        height: 42px;
        margin-top: 32px;
    }
    .right_login_com_select > .top_select div span{
      padding: 0;
      line-height: 46px;
    }
  }
</style>