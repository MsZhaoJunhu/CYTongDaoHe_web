<template>
  <div class="mo"
       v-show="$store.getters.getToast3Flag1">
    <!--人才注册-->
    <div class="contents"
         v-show="$store.getters.getToast3Flag2">
      <div class="topname">
        <span>
          <span></span>人才注册
        </span>
        <div>
          <img src="../../../assets/close.png"
               alt="close"
               @click="next3()">
        </div>
      </div>
      <div class="bottom">
        <img src="../../../assets/imgLeft.png"
             alt="">
        <div>
          <p>邮箱/手机号</p>
          <input type="text"
                 placeholder="请输入邮箱/手机号">
          <p>验证码</p>
          <div>
            <input type="text"><button>获取动态码</button>
          </div>
          <p>密码</p>
          <input type="password"
                 placeholder="请输入密码（6-16位字母/数字/符号）">
          <p>确认密码</p>
          <input type="password"
                 class="mb"
                 placeholder="请输入密码（6-16位字母/数字/符号）">
          <div class="ft12">
            <input type="radio"
                   class="radio">我已阅读并同意平台服务协议、平台隐私保护政策、法律声明
          </div>
          <button @click="next1()">
            <span>注</span>
            <span>册</span>
          </button>
        </div>
      </div>
    </div>
    <!--人才注册-信息完善-->
    <div class="contents"
         v-show="$store.getters.getToast3Flag6">
      <div class="topname">
        <span>
          <span></span>人才注册-信息完善
        </span>
        <div>
          <img src="../../../assets/close.png"
               alt="close"
               @click="next3()">
        </div>
      </div>
      <div class="bottom3">
        <p>完善更多信息有助于我们更加了解你！</p>
        <slot name="topTab"></slot>
        <slot></slot>
        <button class="TJ"
                @click="next2()">提交</button>
      </div>
    </div>
    <!--人才注册失败-->
    <div class="contents"
         v-show="$store.getters.getToast3Flag3">
      <div class="topname">
        <span>
          <span></span>人才注册
        </span>
        <div>
          <img src="../../../assets/close.png"
               alt="close"
               @click="next3()">
        </div>
      </div>
      <div class="bottom2">
        <div>
          <img src="../../../assets/registSb.png"
               alt="">
        </div>
        <p>注册失败,请您再次注册！</p>
        <button @click="closeToast()">确定</button>
      </div>
    </div>
    <!--人才注册成功-->
    <div class="contents"
         v-show="$store.getters.getToast3Flag5">
      <div class="topname">
        <span>
          <span></span>人才注册
        </span>
        <div>
          <img src="../../../assets/close.png"
               alt="close"
               @click="next3()">
        </div>
      </div>
      <div class="bottom2">
        <div>
          <img src="../../../assets/registCg.png"
               alt="">
        </div>
        <p>注册成功，恭喜您进入平台共享人才库！</p>
        <button @click="closeToast()">完成</button>
      </div>
    </div>
    <!--人才注册提示-->
    <div class="contents"
         v-show="$store.getters.getToast3Flag4">
      <div class="topname">
        <span>
          <span></span>人才注册
        </span>
        <div>
          <img src="../../../assets/close.png"
               alt="close"
               @click="next3()">
        </div>
      </div>
      <div class="bottom2">
        <div>
          <img src="../../../assets/registTs.png"
               alt="">
        </div>
        <p>确定要退出注册吗？</p>
        <div>
          <button @click="next4()">继续注册</button>
          <button style="background-color:#bbbbbb;"
                  @click="fail()">退出注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 1,
    }
  },
  methods: {
    closeToast () {
      this.$store.commit("changeFalse");
    },
    next1 () {
      /* 点击注册后需更新session */
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.$router.push('/complete/complete_two?shenfen=' + user.role + '&tabSelect=1');
      // this.$store.commit("changeTrueToast32");
    },

    next2 () {
      this.$store.commit("changeTrueToast33");
    },

    next3 () {
      this.$store.commit("changeTrueToast34");
    },
    next4 () {
      this.$store.commit("changeTrueToast32");
    },
    fail () {
      this.$store.commit('changSB')
    }
  },
}
</script>
<style scoped>
.mo {
  width: 100%;
  height: 100%;
  background-color: rgba(00, 00, 00, 0.7);
  box-sizing: border-box;
  padding-top: 10%;
}
.contents {
  width: 720px;
  height: 560px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
  opacity: 1;
  background-color: #fff;
}
.contents:nth-child(2) > .bottom3 {
  height: 600px;
}
.contents:nth-child(2) > .bottom3 > .TJ {
  margin-top: 16px;
}
.topname {
  width: 100%;
  height: 43px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
}
.topname > span {
  margin-left: 16px;
  line-height: 43px;
}
.topname > div {
  padding-top: 14.5px;
  padding-right: 16px;
  cursor: pointer;
}
.topname > span > span {
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #9e0100;
  position: relative;
  top: 2px;
  margin-right: 8px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  padding: 32px 64px 40px 64px;
}
.bottom2 {
  padding: 64px 64px 40px 76px;
}
.bottom2 > div {
  padding-left: 196.5px;
  margin-bottom: 14px;
}
.bottom2 > p {
  font-size: 23px;
  color: #9e0100;
  text-align: center;
  margin-bottom: 38px;
}
.bottom2 > button {
  width: 410px;
  height: 42px;
  border: 0;
  border-radius: 21px;
  background-color: #9e0100;
  color: #fff;
  margin-left: 70px;
  cursor: pointer;
}
.bottom2 > div:last-child {
  padding: 0;
  margin: 0;
  display: flex;
}
.bottom2 > div > button {
  width: 200px;
  height: 42px;
  border: 0;
  border-radius: 21px;
  background-color: #9e0100;
  color: #fff;
  cursor: pointer;
}
.bottom2 > div > button:first-child {
  margin-left: 60px;
  margin-right: 40px;
}
.bottom > div {
  margin-left: 40px;
}
.bottom > div > p {
  margin-bottom: 13px;
  font-size: 1rem;
  color: #9a9a9a;
}
.bottom > div > p:not(:first-child) {
  margin-top: 17px;
}
.bottom > div > input {
  width: 365px;
  height: 40px;
  padding-left: 16px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
}
.mb {
  margin-bottom: 12px;
}
.bottom > div > div > input {
  width: 256px;
  height: 40px;
  padding-left: 16px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-right: 0;
}
.bottom > div > div > button {
  width: 110px;
  height: 42px;
  border: 0;
  background-color: #9e0100;
  color: #fff;
}
.radio {
  width: 16px !important;
  height: 15px !important;
}
.ft12 {
  font-size: 12px;
  color: #aeaeae;
  margin-bottom: 36px;
}
.bottom > div > button:last-child {
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 25px;
  color: #fff;
  background-color: #9e0100;
}
.bottom > div > button:last-child > span:first-child {
  margin-right: 10px;
}
.bottom > div > button:last-child > span + span {
  margin-left: 10px;
}
.bottom3 {
  height: 570px;
  background-color: #fff;
}
.bottom3 > p:first-child {
  font-size: 18px;
  color: #9e0100;
  padding-left: 15px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 30px;
}
.bottom3 .tabbar {
  width: 104px;
  height: 30px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
  background-color: #eeeeee;
  color: #bbbbbb;
  cursor: pointer;
}
.bottom3 .first {
  margin-left: 16px;
}
.bottom3 .selected {
  background-color: #9e0100;
  color: #fff;
}
.bottom3 .tabbar + .tabbar {
  margin-left: 35px;
}
.bottom3 .tabbar + img {
  position: relative;
  top: 3px;
  left: 16px;
}
.bottom3 #after {
  width: 95%;
  height: 1px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #9a9a9a;
}
.bottom3 #after + div {
  padding-left: 16px;
  padding-top: 32px;
}
.bottom3 #after + div .xh {
  color: #9e0000;
}
.bottom3 #after + div .fontTwo {
  padding-right: 64px;
}
.bottom3 #after + div .fontFive {
  padding-right: 17px;
}
.bottom3 #after + div .fontFour {
  margin-right: 33px;
}
.bottom3 #after + div .fontFourTB {
  margin-right: 40px;
}
.bottom3 #after + div .fontFour + input,
.bottom3 #after + div .fontFourTB + input {
  margin-bottom: 32px;
}
.bottom3 #after + div .fontFive + input {
  width: 154px;
  margin-right: 47px;
  margin-bottom: 32px;
}
.bottom3 input {
  height: 24px;
  box-sizing: border-box;
}
.bottom3 .xm {
  width: 154px;
  margin-right: 47px;
}
.bottom3 .xb {
  width: 88px;
  margin-right: 30px;
}
.bottom3 .xb2 {
  width: 88px;
}
.bottom3 .xb3 {
  width: 88px;
  margin-left: 20px;
  margin-right: 8px;
}
.bottom3 .pr0 {
  margin-left: 0px;
  margin-top: 32px;
  margin-bottom: 32px;
}
.bottom3 #after + div .tz {
  padding-right: 16px;
}
.bottom3 .TJ {
  width: 410px;
  height: 42px;
  border-radius: 21px;
  border: 0px;
  display: block;
  margin: 0 auto;
  color: #fff;
  background-color: #9e0100;
}
</style>