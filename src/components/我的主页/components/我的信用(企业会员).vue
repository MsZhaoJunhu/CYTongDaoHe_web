<template>
  <div class="我的信用"
       id="hyqy">
    <p class="wodexinyong_qiye_title">我的信用
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
                  扣分列表
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
                <img src='@/assets/imgs/credit-rank.png'>
              </div>
              <p style='color:#ce7f7f;font-size:20px;text-align:center'>{{xinyongLevel}}</p>
              <div style='margin-top:20px;text-align:center;'>
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
                      style='margin-right:10px'>
                扣款记录
              </button>
              <button class='xybtn'>
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
                  <button class='xybtn'>缴费记录</button>
                  <button class='xybtn'>赔付记录</button>
                </div>
                <div class='mid-btn'>
                  <button class='xybtn'
                          style='width:100%'>退款记录</button>
                </div>
                <hr class='division-line'
                    style=''>
                <div class='bottom-btn'>
                  <button class='xybtn'
                          style='width:100%'>保证金缴纳</button>
                </div>
              </div>
            </div>
          </div>
          <div class='cover-white'>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Bus from '../../../bus.js'
import toastJS from '../../../data/toast.js'
import { calcCorpLevel } from "@/components/api/api";
export default {
  data () {
    return {
      toastJS,
      xinyong: "",
      xinyongLevel: "",
    }
  },
  methods: {
    show1 () {
      Bus.$emit('arrs', toastJS.wdxy_qyhy.arr)
      this.$store.commit("changeToastZjTrue")
    },
    show2 () {
      Bus.$emit('arrs', toastJS.wdxy_qyhy.arr2)
      this.$store.commit("changeToastZjTrue")
    },
    show3 () {
      Bus.$emit('arrs', toastJS.wdxy_qyhy.arr3)
      this.$store.commit("changeToastZjTrue")

    },
  },
  created () {
    let user = JSON.parse(sessionStorage.getItem("user"));
    calcCorpLevel({ "corpId": user.roleId }).then(res => {
      if (res.data.code === 200) {
        this.xinyong = res.data.type;
        if (this.xinyong >= 90) {
          this.xinyongLevel = "青铜高级"
        } else if (this.xinyong >= 80 && this.xinyong < 90) {
          this.xinyongLevel = "青铜中级"
        } else if (this.xinyong >= 70 && this.xinyong < 80) {
          this.xinyongLevel = "青铜高级"
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

.wodexinyong_qiye_title {
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

.wodexinyong_qiye_title span.more {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #cccccc;
}

.info {
  display: flex;
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
.right-part {
  /* width:100%; */
  position: relative;
}
.right-part .cover-white {
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  height: 100%;
  flex-shrink: 0;
  width: 100%;
}
@media screen and (max-width: 415px) {
  .我的信用 {
    padding: 8px;
  }
  .wodexinyong_qiye_title {
    margin: 0 0 16px 0 !important;
  }
  .info {
    display: flex;
    overflow-x: scroll;
  }
  .left-part {
    flex-shrink: 0;
  }
}
</style>