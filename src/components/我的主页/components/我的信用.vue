<template>
  <div class="我的信用"
       id="hyqy">
    <p class="wodexinyong_title">我的信用<span class="more">查看更多</span></p>

    <div class="info">
      <div class='left-part'>
        <div class="xyBox">
          <p>诚信分</p>
          <p style='color:#999999;font-size:12px;margin-bottom:30px'>您的诚信分为：</p>
          <div class="scoreBox">
            <span class='score'>{{xinyong||""}}</span><span class="score-unit">分</span>
            <div>
              <button class="xybtn"
                      @click="show1">
                扣分记录
              </button>
              <button class="xybtn"
                      @click="show2">
                考试成绩
              </button>
            </div>
          </div>
        </div>
        <div class='xyBox'>
          <p>信用等级</p>
          <p style='color:#999999;font-size:12px'>您的信用等级为：</p>
          <div class='rank'>
            <div>
              <img src="@/assets/imgs/moon.png"
                   alt="">
              <img src="@/assets/imgs/moon.png"
                   alt="">
              <img src="@/assets/imgs/wujiao.png"
                   alt="">
              <img src="@/assets/imgs/wujiao.png"
                   alt="">
            </div>
            <p style='color:#ce7f7f;padding-bottom:40px;font-size:20px;text-align:center'>{{xinyongLevel}}</p>
            <div style='margin-top:26px;text-align:center;'>
              <button class="xybtn"
                      @click="show3">
                成长记录
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class='right-part'>
        <div class="xyBox">
          <p>诚信保证金</p>
          <p style='color:#999999;font-size:12px;margin-bottom:8px'>基础额度：</p>
          <div class='base-money clearfix'>
            <div class='money-item'>
              <p style='color:#9e0100;font-weight:600;'>30000元</p>
              <p>(实缴部分)</p>
            </div>
            <div class='money-item'>
              <p style='color:#9e0100;font-weight:600;'>30000元</p>
              <p>(授信部分)</p>
            </div>

          </div>
          <p style='color:#999999;font-size:12px;margin-bottom:8px'>提升额度</p>
          <div class='promote-money'>
            <div class='money-item'>
              <p style='color:#9e0100;font-weight:600;padding-left:20px;'>0</p>
              <p>(实缴部分)</p>
            </div>
          </div>
          <div class="btnbox"
               style='padding-top:20px'>
            <button class="xybtn"
                    style='margin-right:10px'
                    @click="show4">
              扣款记录
            </button>
            <button class='xybtn'
                    @click="show5">
              补款记录
            </button>

          </div>
        </div>
        <div class="xyBox">
          <p>履约保证金</p>
          <div class="moneyBox">
            <div class='money-content'>
              <div class="money">
                <h5>保证余额：</h5>
                <p style='color:#9e0100'>30000元</p>
              </div>
              <div class='top-btn'>
                <button class='xybtn'
                        @click="show6">缴费记录</button>
                <button class='xybtn'
                        @click="show7">赔付记录</button>
              </div>
              <div class='mid-btn'>
                <button class='xybtn'
                        style='width:100%'
                        @click="show8">退款记录</button>
              </div>
              <hr class='division-line'
                  style=''>
              <div class='bottom-btn'>
                <button class='xybtn'
                        style='width:100%'
                        @click="show9">保证金缴纳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '../../../bus.js'
import toastJS from '../../../data/toast.js'

import { calcSplrLevel } from "@/components/api/api";
export default {
  data () {
    return {
      toastJS,
      xinyongLevel: "",
      xinyong: "",
    }
  },
  methods: {
    show1 () {
      Bus.$emit('arrs', toastJS.wdxy.arr)
      this.$store.commit("changeToastZjTrue")
    },
    show2 () {
      Bus.$emit('arrs', toastJS.wdxy.arr2)
      this.$store.commit("changeToastZjTrue")
    },
    show3 () {
      Bus.$emit('arrs', toastJS.wdxy.arr3)
      this.$store.commit("changeToastZjTrue")

    },
    show4 () {
      Bus.$emit('arrs', toastJS.wdxy.arr4)
      this.$store.commit("changeToastZjTrue")
    },
    show5 () {
      Bus.$emit('arrs', toastJS.wdxy.arr5)
      this.$store.commit("changeToastZjTrue")
    },
    show6 () {
      Bus.$emit('arrs', toastJS.wdxy.arr6)
      this.$store.commit("changeToastZjTrue")
    },
    show7 () {
      Bus.$emit('arrs', toastJS.wdxy.arr7)
      this.$store.commit("changeToastZjTrue")
    },
    show8 () {
      Bus.$emit('arrs', toastJS.wdxy.arr8)
      this.$store.commit("changeToastZjTrue")
    },
    show9 () {
      Bus.$emit('arrs', toastJS.wdxy.arr9)
      this.$store.commit("changeToastZjTrue")
    },
  },
  created () {
    let user = JSON.parse(sessionStorage.getItem("user"))
    calcSplrLevel({ "splrId": user.roleId }).then(res => {
      if (res.data.code === 200) {
        this.xinyong = res.data.type;
        if (this.xinyong >= 90) {
          this.xinyongLevel = "青铜高级"
        } else if (this.xinyong >= 80 && this.xinyong < 90) {
          this.xinyongLevel = "青铜中级"
        } else if (this.xinyong >= 70 && this.xinyong < 80) {
          this.xinyongLevel = "青铜级"
        } else if (this.xinyong >= 60 && this.xinyong < 70) {
          this.xinyongLevel = "黑铁初级"
        } else if (this.xinyong >= 50 && this.xinyong < 60) {
          this.xinyongLevel = "黑铁中级"
        } else {
          this.xinyongLevel = "黑铁初级"
        }
      }
    })
  },
}
</script>

<style scoped>
.我的信用 {
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  margin-bottom: 20px;
}

.wodexinyong_title {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #9e0100;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.wodexinyong_title span.more {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #cccccc;
}

.info {
  display: flex;

  /* border:1px solid #dddddd; */
}
.info .left-part {
  border: 1px solid #eeeeee;
  display: flex;
  margin-right: 16px;
}
.info .right-part {
  border: 1px solid #eeeeee;
  display: flex;
}

.info .xyBox {
  padding: 15px;
  /* padding-bottom: 0px; */
  box-sizing: border-box;
  /* background-color: #fafafa; */
  margin-right: 15px;
  width: 100%;
}

.info .xyBox:nth-of-type(1) {
  /* flex:2; */
  padding-right: 40px;
  border-right: 1px solid #dddddd;
}

.info .xyBox:nth-of-type(2) {
  padding-left: 20px;
  padding-right: 50px;
}
.info .xyBox:nth-of-type(3) {
  border-right: 1px solid #dddddd;
}

.info .xyBox:first-of-type {
  width: auto;
  flex-shrink: 0;
}

.info .xyBox:last-of-type {
  margin-right: 0;
}

.xyBox > p {
  margin-bottom: 20px;
}

.xybtn {
  padding: 3px 5px;
  background-color: #9e0100;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #fff;
  width: 75px;
  border: none;
}

.scoreBox {
  width: 100%;
  text-align: center;
}

.scoreBox span {
  font-weight: normal;
  font-stretch: normal;
  line-height: 35px;
  letter-spacing: 0px;
  color: #9e0100;
  margin-right: 15px;
}

.scoreBox .score {
  font-size: 58px;
  margin-right: 0;
}

.scoreBox .score-unit {
  font-size: 12px;
  color: #666666;
  margin-top: 20px;
}

.scoreBox div {
  /* padding-left: 15px; */
  /* border-left: 1px solid #dddddd; */
  /* display: flex;
        flex-direction: column; */
  margin-top: 60px;
}

.scoreBox .xybtn {
  /* padding-left:0px;  */
  margin-left: 10px;
}

.scoreBox div .xybtn {
  margin-bottom: 10px;
}

.scoreBox div .xybtn:last-of-type {
  margin-bottom: 0;
}

.rank {
  padding-left: 20px;
}
.rank > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.base-money {
  width: 100%;
  /* display: flex;
        justify-content: space-between;
        align-items: center; */
  padding-bottom: 10px;
  font-size: 13px;
}

.clearfix {
  clear: both;
  display: block;
  content: "";
  overflow: hidden;
}

.base-money .money-item {
  /* display: inline-block; */
  float: left;
  width: 40%;

  padding-bottom: 10px;
}

.promote-money {
  width: 100px;
  font-size: 13px;
}

.moneyBox {
  /* display: flex;
        flex-direction: column; */
}

.moneyBox .xybtn {
  margin-right: 10px;
}

/* .moneyBox>div{
        display: flex;
    } */
.money {
  min-width: 85px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #333333;
  margin-right: 10px;
}

.moneyBox p {
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}

.money-content .top-btn {
  margin-bottom: 20px;
}
.money-content .top-btn .xybtn {
  margin-right: 10px;
}
.money-content .bottom-btn {
}

.money-content .division-line {
  border: 0px;
  height: 1px;
  background: #eeeeee;
  width: 78%;
  margin: 20px 0;
}
@media screen and (max-width: 415px) {
  .我的信用 {
    padding: 8px;
  }
  .wodexinyong_title {
    margin: 0 0 16px 0 !important;
  }
  .info {
    display: flex;
    overflow-x: scroll;
  }
  .left-part,
  .right-part {
    flex-shrink: 0;
  }
}
</style>