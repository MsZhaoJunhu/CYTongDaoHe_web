<template>
  <div class="我的权益"
       id="fwxy">
    <div class="info">
      <div class="xsqy">
        <div class="xs_qyjs">
          <p class="bt">我的权益</p>
          <div class="icos">
            <div class="row"
                 @click="changeWidth($event)">
              <div>
                <div><i></i></div>
                <p>官网制作<br />（模板）</p>
              </div>
              <div>
                <div><i></i></div>
                <p>在线推广</p>
              </div>
              <div>
                <div><i></i></div>
                <p>在线交易</p>
              </div>
              <div>
                <div><i></i></div>
                <p>佣金减免</p>
              </div>
              <div>
                <div><i></i></div>
                <p>微信公众号及小程序代申请</p>
              </div>
            </div>
            <span class="Details">
              <div v-if="tabFirstJS==1">
                <span style="left:45px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i></i>
                  </div>
                  <div>
                    <h2>官网制作（模板）</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==2">
                <span style="left:225px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 655px 0;"></i>
                  </div>
                  <div>
                    <h2>在线推广</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==3">
                <span style="left:405px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 451px 0;"></i>
                  </div>
                  <div>
                    <h2>在线交易</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==4">
                <span style="left:585px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 250px 0;"></i>
                  </div>
                  <div>
                    <h2>佣金减免</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==5">
                <span style="left:765px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 53px 0;"></i>
                  </div>
                  <div>
                    <h2>微信公众号及小程序代申请</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
            </span>
            <div class="row"
                 @click="changeWidth($event)">
              <div>
                <div><i></i></div>
                <p>微官网制作（模板）</p>
              </div>
              <div>
                <div><i></i></div>
                <p>小程序制作（模板）</p>
              </div>
              <div>
                <div><i></i></div>
                <p>域名、网站空间申请、托管</p>
              </div>
              <div>
                <div><i></i></div>
                <p>网站日常运营维护</p>
              </div>
              <div>
                <div><i></i></div>
                <p>云之家企业APP开通</p>
              </div>
            </div>
            <span class="Details">
              <div v-if="tabFirstJS==6">
                <span style="left:45px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 2px -175px;"></i>
                  </div>
                  <div>
                    <h2>微官网制作（模板）</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==7">
                <span style="left:225px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 655px -175px;"></i>
                  </div>
                  <div>
                    <h2>在线推广</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==8">
                <span style="left:405px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 451px -175px;"></i>
                  </div>
                  <div>
                    <h2>在线交易</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==9">
                <span style="left:585px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 250px -175px;"></i>
                  </div>
                  <div>
                    <h2>佣金减免</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
              <div v-if="tabFirstJS==10">
                <span style="left:765px;"></span>
                <p>权益介绍:</p>
                <div>
                  <div>
                    <i style="background-position: 53px -175px;"></i>
                  </div>
                  <div>
                    <h2>微信公众号及小程序代申请</h2>
                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                    <p class="red"
                       style="color: #9e0100;font-weight: bold;">
                      权益对象：携行会员、同进会员、道至会员、合众会员</p>
                  </div>
                </div>
                <div>
                  <p>权益说明：</p>
                  <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                  </p>
                </div>
              </div>
            </span>
            <div class="rowMedia">
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">官网制作<br />（模板）</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">在线推广</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">在线交易</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">佣金减免</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">微信公众号及小程序代申请</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">微官网制作<br />（模板）</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">小程序制作<br />（模板）</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">域名、网站空间申请、托管</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">网站日常运营维护</p>
              </el-button>
              <el-button type="text"
                         @click="open($event)">
                <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">云之家企业APP开通</p>
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-equity',
  data () {
    return {
      tabFirstJS: 1,

    }
  },
  methods: {
    changeWidth (e) {
      if ((e.target.tagName == "I")) {
        if (e.target.parentElement.nextElementSibling.textContent == "官网制作（模板）") {
          this.tabFirstJS = 1;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "在线推广") {
          this.tabFirstJS = 2;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "在线交易") {
          this.tabFirstJS = 3;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "佣金减免") {
          this.tabFirstJS = 4;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "微信公众号及小程序代申请") {
          this.tabFirstJS = 5;
        } else if (e.target.parentElement.nextElementSibling.textContent == "微官网制作（模板）") {
          this.tabFirstJS = 6;
        } else if (e.target.parentElement.nextElementSibling.textContent == "小程序制作（模板）") {
          this.tabFirstJS = 7;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "域名、网站空间申请、托管") {
          this.tabFirstJS = 8;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "网站日常运营维护") {
          this.tabFirstJS = 9;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "云之家企业APP开通") {
          this.tabFirstJS = 10;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "合规性诊断") {
          this.tabFirstJS2 = 11;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "企业结构诊断") {
          this.tabFirstJS2 = 12;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "融资需求分析") {
          this.tabFirstJS2 = 13;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "政策配套") {
          this.tabFirstJS2 = 14;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "企业深度调研") {
          this.tabFirstJS2 = 15;
        } else if (e.target.parentElement.nextElementSibling.textContent == "OTC上市辅助") {
          this.tabFirstJS2 = 16;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "商业路演") {
          this.tabFirstJS2 = 17;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "产业对接会") {
          this.tabFirstJS2 = 18;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "私董会") {
          this.tabFirstJS2 = 19;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "企业家学习") {
          this.tabFirstJS2 = 20;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "团队培训") {
          this.tabFirstJS2 = 21;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "专题讲座") {
          this.tabFirstJS2 = 22;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "携同拓展") {
          this.tabFirstJS2 = 23;
        } else if (e.target.parentElement.nextElementSibling.innerHTML == "国内外游学") {
          this.tabFirstJS2 = 24;
        }
      }
    },
    open (e) {
      var el = e.target;
      if (el.tagName == "I") {
        var datailHY = el.parentElement.getAttribute("data-detailHY")
        var datailNR = el.parentElement.nextElementSibling.getAttribute("data-detailNR")
        this.$alert(datailNR, datailHY);
      } else if (el.tagName == "DIV") {
        var datailHY = el.getAttribute("data-detailHY")
        var datailNR = el.nextElementSibling.getAttribute("data-detailNR")
        this.$alert(datailNR, datailHY);
      } else if (el.tagName == "P") {
        var datailHY = el.previousElementSibling.getAttribute("data-detailHY")
        var datailNR = el.getAttribute("data-detailNR")
        this.$alert(datailNR, datailHY);
      }
    },
  },
}
</script>

<style scoped>
.我的权益 {
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  margin-bottom: 20px;
}
.title {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #9e0100;
  margin-bottom: 30px;
}

* {
  margin: 0;
  padding: 0;
}
.banner img {
  width: 100%;
}

.banner > .text > p {
  font-family: "华文细黑";
  font-size: 18px;
}
.banner > .text > h1 {
  letter-spacing: 4px;
  font-size: 56px;
}
.xlm > div {
  width: 1400px;
  margin: 0 auto;
}
.xlm span {
  background: url(../../../assets/imgs/xjt.png) no-repeat;
  padding: 0 15px 0 5px;
  background-position: right;
}
.xlm span:last-of-type {
  background: rgba(255, 255, 255, 0);
}
.title h3 {
  font-size: 24px;
  color: #9e0100;
  margin-bottom: 40px;
  font-weight: normal;
}
.title p {
  font-size: 18px;
  color: #676767;
  margin-bottom: 40px;
  display: flex;
}
.title p.selected {
  color: #9e0100 !important;
}
.title p i {
  display: block;
  height: 22px;
  width: 22px;
  background: url(../../../assets/imgs/glzx_.png) no-repeat;
  margin: 2px 14px 0 0;
}
.title p:nth-of-type(2) i {
  background-position: 0 -54px;
}
.title p:nth-of-type(3) i {
  background-position: 0 -108px;
}
.title p:nth-of-type(4) i {
  background-position: 0 -162px;
}
.title p:nth-of-type(5) i {
  background-position: 0 -214px;
}
.title p:nth-of-type(6) i {
  background-position: 0 -270px;
}
.dqhydj p {
  font-weight: bold;
}
span.red {
  color: #9e0100;
}
.jdt > div {
  width: 255px;
  height: 10px;
  background: #9e000010;
}
.jdt > div:nth-child(1) {
  background: #9e0000;
}
.dqhydj ul li {
  list-style-type: none;
  float: left;
  margin: 25px 250px 0 0;
  z-index: 10;
}
.dqhydj ul li img {
  position: absolute;
  z-index: 9;
}
.xsqy,
.xxqy,
.tqfb {
  box-sizing: border-box;
  background: #ffffff;
}
.xsqy i {
  display: block;
  width: 40px;
  height: 44px;
  background: url(../../../assets/imgs/icon.png);
}
.xxqy i {
  display: block;
  width: 45px;
  height: 46px;
  background: url(../../../assets/imgs/icon2.png);
}

.xsqy .icos > .row:nth-of-type(1) > div:nth-of-type(2) i {
  background-position: 534px 0;
}
.xsqy .icos > .row:nth-of-type(1) > div:nth-of-type(3) i {
  background-position: 370px 0;
  width: 42px;
}
.xsqy .icos > .row:nth-of-type(1) > div:nth-of-type(4) i {
  background-position: 205px 0;
}
.xsqy .icos > .row:nth-of-type(1) > div:nth-of-type(5) i {
  background-position: 44px 0;
}
.xsqy .icos > .row:nth-of-type(1) > div:nth-of-type(6) i {
  background-position: 0 44px;
  width: 34px;
  height: 44px;
}
.xsqy .icos > .row:last-of-type > div:nth-of-type(1) i {
  background-position: 535px 44px;
}
.xsqy .icos > .row:last-of-type > div:nth-of-type(2) i {
  background-position: 370px 44px;
  width: 42px;
  height: 44px;
}
.xsqy .icos > .row:last-of-type > div:nth-of-type(3) i {
  background-position: 205px 44px;
}
.xsqy .icos > .row:last-of-type > div:nth-of-type(4) i {
  width: 42px;
  height: 44px;
  background-position: 43px 44px;
}

.xxqy .icos > .row:nth-of-type(1) > div:nth-of-type(2) i,
.rowMediaTwo > .el-button:nth-of-type(2) i {
  background-position: 537px 0;
}
.xxqy .icos > .row:nth-of-type(1) > div:nth-of-type(3) i,
.rowMediaTwo > .el-button:nth-of-type(3) i {
  background-position: 372px 0;
}
.xxqy .icos > .row:nth-of-type(1) > div:nth-of-type(4) i,
.rowMediaTwo > .el-button:nth-of-type(4) i {
  background-position: 209px 0;
}
.xxqy .icos > .row:nth-of-type(1) > div:nth-of-type(5) i,
.rowMediaTwo > .el-button:nth-of-type(5) i {
  background-position: 47px 0;
}
.xxqy .icos > .row:nth-of-type(2) > div:nth-of-type(1) i,
.rowMediaTwo > .el-button:nth-of-type(6) i {
  background-position: 0 -144px;
}
.xxqy .icos > .row:nth-of-type(2) > div:nth-of-type(2) i,
.rowMediaTwo > .el-button:nth-of-type(7) i {
  background-position: 537px -144px;
}
.xxqy .icos > .row:nth-of-type(2) > div:nth-of-type(3) i,
.rowMediaTwo > .el-button:nth-of-type(8) i {
  background-position: 372px -144px;
}
.xxqy .icos > .row:nth-of-type(2) > div:nth-of-type(4) i,
.rowMediaTwo > .el-button:nth-of-type(9) i {
  background-position: 209px -144px;
}
.xxqy .icos > .row:nth-of-type(2) > div:nth-of-type(5) i,
.rowMediaTwo > .el-button:nth-of-type(10) i {
  background-position: 47px -144px;
}
.xxqy .icos > .row:nth-of-type(3) > div:nth-of-type(1) i,
.rowMediaTwo > .el-button:nth-of-type(11) i {
  background-position: 0 -288px;
}
.xxqy .icos > .row:nth-of-type(3) > div:nth-of-type(2) i,
.rowMediaTwo > .el-button:nth-of-type(12) i {
  background-position: 537px -288px;
}
.xxqy .icos > .row:nth-of-type(3) > div:nth-of-type(3) i,
.rowMediaTwo > .el-button:nth-of-type(13) i {
  background-position: 373px -288px;
}
.xxqy .icos > .row:nth-of-type(3) > div:nth-of-type(4) i,
.rowMediaTwo > .el-button:nth-of-type(14) i {
  background-position: 209px -288px;
}

p.bt {
  font-size: 20px;
  color: #9e0100;
}
.row {
  margin: 20px 0;
  display: flex;
  /*justify-content: space-between;*/
}
.row p {
  margin-top: 15px;
  text-align: center;
}
.row > div {
  width: 25%;
  display: inline-block;
}
.row > div:last-of-type {
  margin-right: 0px;
}
.row > div > div {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 72px;
  background-color: #9e010010;
}
.xs_qyjs .row div,
.xx_qyjs .row div {
  background-color: #ffffff00;
}
.Details {
  display: block;
  height: auto;
}
.Details > div {
  position: relative;
  margin-top: 15px;
  height: auto;
  background-color: #f6f6f6;
  padding: 15px;
  box-sizing: border-box;
}
.Details > div > span {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 10px solid #f6f6f6;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  top: -10px;
  left: 45px;
}
.Details > div > div:nth-of-type(1) {
  margin: 25px 0;
  display: flex;
}
.xxqy .Details > div:nth-of-type(1) > div i {
  width: 55px;
  height: 56px;
  background-size: 850px;
}
.xsqy .Details > div:nth-of-type(1) > div i {
  width: 49px;
  height: 52px;
  background-size: 850px;
}
.Details > div h2 {
  font-size: 20px;
  color: #555;
  font-weight: normal;
}
.Details > div > div > div:nth-of-type(2) p {
  font-size: 14px;
  color: #888;
}
.Details > div > div > div:nth-of-type(2) > p:nth-last-of-type(2) {
  margin: 10px 0;
}
.Details > div > div:nth-of-type(1) > div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-color: #9e010010;
  margin-right: 20px;
}
p.red {
  color: #9e0100;
  font-weight: bold;
}
.Details > div > div:nth-of-type(2) {
  height: auto;
  border-top: 1px #ddd solid;
}
.Details > div > div:nth-of-type(2) {
  display: flex;
  height: auto;
  padding-top: 10px;
}
.Details > div > div:nth-of-type(2) > p {
  display: inline-block;
}
.Details > div > div:nth-of-type(2) > p:nth-of-type(2) {
  font-size: 14px;
  color: #888;
  width: 80%;
  height: auto;
}
.tqfb > table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}
.tqfb > table tr:nth-of-type(1) td {
  background-color: #faf2f2;
  color: #333;
  font-size: 18px;
  border: 0;
}
.tqfb > table td {
  border: 1px solid #eee;
  text-align: center;
  color: #555;
  font-size: 16px;
  height: 45px;
  width: 190px;
}
.tqfb > table td:nth-of-type(1) {
  width: 265px;
}
.tqfb > table td.hook {
  background: url(../../../assets/icon/hook.png) no-repeat;
  background-position: center;
}
.rowMedia,
.rowMediaTwo {
  width: 350px;
  display: none;
  margin-top: 10px;
}
.el-button p {
  white-space: pre-wrap;
  color: #000;
  margin-top: 4px;
}
@media screen and (max-width: 415px) {
  .我的权益 {
    padding: 8px;
    padding-bottom: 24px;
  }
  .Details,
  .row {
    display: none;
  }
  .rowMedia,
  .rowMediaTwo {
    display: block;
    display: flex;
    flex-wrap: wrap;
  }
  .rowMedia > .el-button,
  .rowMediaTwo > .el-button {
    width: 110px;
    height: 50px;
    box-sizing: border-box;
    margin: 0 4px 5% 0;
  }
  .rowMedia > .el-button:nth-child(n + 4),
  .rowMediaTwo > .el-button:nth-child(n + 4) {
    margin-top: 16px;
  }
  .rowMedia > .el-button:not(:nth-child(n + 4)),
  .rowMediaTwo > .el-button:not(:nth-child(n + 4)) {
    margin-top: 4px;
  }
  .el-button > span > div > i {
    margin: 0 auto;
  }
  .el-button p {
    white-space: pre-wrap;
    color: #000;
    margin-top: 4px;
  }
}
</style>