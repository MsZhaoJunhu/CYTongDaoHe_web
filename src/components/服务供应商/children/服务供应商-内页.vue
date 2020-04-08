<template>
  <div>
    <div class="banner">
      <label>
        <h1>快速解决您的问题</h1>
        <input type="text"
               placeholder="输入关键字搜索">
        <img class="search"
             src="../../../assets/icon/search.png" />
      </label>
    </div>
    <div class="xmbj">
      <div>
        <div>
          <img :src="custSplrInfoVo.logo"
               alt="">
        </div>
        <p>{{custSplrInfoVo.splrName}}</p>
        <p><span>
            <template>
              <i class="star">
                <img v-for="(itemsun,index) in creditRatings.sunNumber"
                     :key="index"
                     src="../../../assets/icon/ri.png"
                     alt="">
              </i>
              <i class="star">
                <img v-for="(itemmount,index) in creditRatings.mountNumber"
                     :key="index"
                     src="../../../assets/imgs/mount-y.png"
                     alt="">
              </i>
              <i class="star">
                <img v-for="(itemstart,index) in creditRatings.startNumber"
                     :key="index"
                     src="../../../assets/imgs/star-y.png"
                     alt="">
              </i>
            </template>
            中和初级</span><span>服务优质率:<span>{{custSplrInfoVo.qualityRating}}%</span></span></p>
        <p>{{custSplrInfoVo.enterpriceIntro}}</p>
      </div>
    </div>
    <div class="xcdy xcdys">
      <div class="first">
        <span>产品展示</span>
      </div>
      <div class="secend secends">
        <template v-for="(item,index) in custSplrInfoVo.custSplrProds">
          <div class="cpzxParent"
               :key="index">
            <div class="cpzs">
              <div>
                <p style="height:auto;">{{item.prodserName}}</p>
                <p>{{item.applicationScope}}</p>
              </div>
              <p>
                <span>产品简介: </span>
                <span> {{item.prodserIntro}}</span>
              </p>
              <div class="line"></div>
              <p>
                <span>主要效果: </span>
                <span> {{item.mainEffect}}</span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="line_mk_pre">
      <div class="line_mk"></div>
    </div>
    <div class="xcdy xcdy2">
      <div class="first">
        <span>案例实施</span>
      </div>
      <template>
        <div class="secend">
          <section>
            <div class="put_info">
              <template v-for="(item,index) in custSplrInfoVo.cases">
                <div style="width:calc(100%/3);"
                     :key="index">
                  <gysbox :box-url="{path:'./fwgys_ny',query:{splrCaseId:item.caseId}}"
                          boxWidth=""
                          :box-name="item.projectName"
                          :startTim="item.startDt"
                          :endTim="item.endDt"
                          :box-star="3"
                          :box-tags="['商超/食品/日化','整合营销','金融/科技/数码','政府/公益/社团','线下活动策划']"></gysbox>
                </div>
              </template>
            </div>
          </section>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import gysbox from '../../public/供应商盒子3'
import { getCustSplrInfoVo } from '../../api/api'
export default {
  name: 'all_projects',
  data () {
    return {
      custSplrInfoVo: "",
      creditRating: 0,
      creditRatings: {
        startNumber: [],
        mountNumber: [],
        sunNumber: [],
      },
    }
  },
  components: {
    gysbox
  },
  methods: {
    getCustSplrInfoVo () {
      getCustSplrInfoVo({ splrId: this.$route.query.id }).then(res => {
        if (res.data.code === 200) {
          this.custSplrInfoVo = res.data.data;
          if (this.custSplrInfoVo.qualityRating == null) {
            this.custSplrInfoVo.qualityRating = 0
          }
          this.creditRating = res.data.data.creditRating;
        }
      })
    }
  },
  watch: {
    creditRating () {
      this.creditRatings = {
        startNumber: [],
        mountNumber: [],
        sunNumber: [],
      };
      var level = this.creditRating
      if (0 <= level && level < 4) {
        // 这里只有星星
        for (var i = 0; i < level; i++) {
          this.creditRatings.startNumber.push("level");
        }
      } else if (4 <= level && level < 16) {
        // 有星星 有月亮
        for (var i = 0; i < level % 4; i++) {
          this.creditRatings.startNumber.push("level");
        }
        for (var i = 0; i < parseInt(level / 4); i++) {
          this.creditRatings.mountNumber.push("level");
        }
      } else if (16 <= level) {
        // 有星星 有月亮 有太阳
        for (var i = 0; i < level % 4; i++) {
          this.creditRatings.startNumber.push("level");
        }
        for (var i = 0; i < parseInt(level / 4); i++) {
          this.creditRatings.mountNumber.push("level");
        }
        for (var i = 0; i < parseInt(parseInt(level / 4) / 4); i++) {
          this.creditRatings.sunNumber.push("level");
        }
      }
    }
  },
  mounted () {
    var level = this.creditRating
    if (0 <= level && level < 4) {
      // 这里只有星星
      for (var i = 0; i < level; i++) {
        this.creditRatings.startNumber.push("level");
      }
    } else if (4 <= level && level < 16) {
      // 有星星 有月亮
      for (var i = 0; i < level % 4; i++) {
        this.creditRatings.startNumber.push("level");
      }
      for (var i = 0; i < parseInt(level / 4); i++) {
        this.creditRatings.mountNumber.push("level");
      }
    } else if (16 <= level) {
      // 有星星 有月亮 有太阳
      for (var i = 0; i < level % 4; i++) {
        this.creditRatings.startNumber.push("level");
      }
      for (var i = 0; i < parseInt(level / 4); i++) {
        this.creditRatings.mountNumber.push("level");
      }
      for (var i = 0; i < parseInt(parseInt(level / 4) / 4); i++) {
        this.creditRatings.sunNumber.push("level");
      }
    }
  },
  created () {
    this.$emit('select', 2);
    this.getCustSplrInfoVo();
    var level = this.creditRating
    if (0 <= level && level < 4) {
      // 这里只有星星
      for (var i = 0; i < level; i++) {
        this.creditRatings.startNumber.push("level");
      }
    } else if (4 <= level && level < 16) {
      // 有星星 有月亮
      for (var i = 0; i < level % 4; i++) {
        this.creditRatings.startNumber.push("level");
      }
      for (var i = 0; i < parseInt(level / 4); i++) {
        this.creditRatings.mountNumber.push("level");
      }
    } else if (16 <= level) {
      // 有星星 有月亮 有太阳
      for (var i = 0; i < level % 4; i++) {
        this.creditRatings.startNumber.push("level");
      }
      for (var i = 0; i < parseInt(level / 4); i++) {
        this.creditRatings.mountNumber.push("level");
      }
      for (var i = 0; i < parseInt(parseInt(level / 4) / 4); i++) {
        this.creditRatings.sunNumber.push("level");
      }
    }
  },
}
</script>

<style scoped>
a {
  color: #666666;
}
body {
  background: #f5f5f5;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0rem;
}
.banner {
  width: 100%;
  height: 361px;
  background-image: url(../../../assets/imgs/fabubanner.png);
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner label {
  height: 120px;
  position: relative;
}
.banner label h1 {
  transform: translateY(-24px);
  text-align: center;
  font-size: 26px;
  color: #ffffff;
  opacity: 0.8;
}
.banner label input {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 50px;
  width: 640px;
  height: 55px;
  background-color: #ffffff;
  border-radius: 10px;
  opacity: 0.8;
  border: none;
  font-size: 16px;
}
label .search {
  content: "";
  height: 21px;
  width: 21px;
  position: absolute;
  right: 15px;
  z-index: 9;
  bottom: 47px;
  cursor: pointer;
}
.xmbj,
.xcdy2 {
  width: 100%;
  background-color: rgba(248, 246, 246, 0.6);
  padding-bottom: 30px;
}
.xcdy {
  width: 100%;
  background-color: #fafafa;
  padding-bottom: 50px;
}

.xmbj > div,
.xcdy > div,
.xmgh > div {
  margin: 0 auto;
}
.xmbj {
  padding-top: 5rem;
  background: #fff;
}
.xmbj > div {
  width: 50%;
}
.xmbj > div > div {
  width: 18rem;
  height: auto;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xmbj > div > div > img {
  flex-shrink: 0;
  height: 100%;
}
.xmbj > div > p {
  text-align: center;
  font-size: 18px;
}
.xmbj > div > p:nth-child(3) > span {
  font-size: 16px;
}
.xmbj > div > p + p {
  margin-top: 0.5rem;
}
.xmbj > div > p:last-child {
  font-size: 14px;
  line-height: 1.5rem;
  color: #666666;
}
.xmbj > div > p > span {
  color: #bbbbbb;
}
.xmbj > div > p > span + span {
  margin-left: 2rem;
}
.xmbj > div > p > span > span {
  margin-left: 0.5rem;
  color: #9e0000;
}
.first {
  max-width: 88rem;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.first > span {
  font-size: 42px;
  line-height: 3rem;
  color: #353535;
  border-bottom: 1px solid #000;
  padding-bottom: 16px;
}
section {
  width: 68%;
  margin: 0 auto;
}
section .put_info {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.xcdy > .secends {
  width: 73%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
}
.xcdys > .secends {
  flex-direction: row;
}
.xcdy > .secends > .cpzxParent {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  padding: 0 2%;
  box-sizing: border-box;
}
.xcdy > .secends > .cpzxParent > .cpzs,
.xcdy > .secends > .cpzs {
  width: 360px;
  height: auto;
  box-sizing: border-box;
  padding-bottom: 0.5rem;
  overflow: hidden;
  background-color: #ffffff;
}
.xcdy > .secends > .cpzxParent > .cpzs > div:first-child > p:first-child,
.xcdy > .secends > .cpzs > div:first-child > p:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 22px;
  user-select: none;
}
.xcdy > .secends > .cpzxParent > .cpzs > div:first-child > p:first-child + p,
.xcdy > .secends > .cpzs > div:first-child > p:first-child + p {
  font-size: 14px;
  user-select: none;
}

.xcdy > .secends > .cpzxParent > .cpzs > p,
.xcdy > .secends > .cpzs > p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  padding: 12px;
  background-color: #ffffff;
  user-select: none;
}
.xcdy > .secends > .cpzxParent > .cpzs > div:first-child,
.xcdy > .secends > .cpzs > div:first-child {
  width: 100%;
  height: auto;
  background: url("../../../assets/icon/bg1.png") no-repeat;
  /* height: 8rem; */
}
.xcdy > .secends > .cpzxParent > .cpzs > p > span:first-child,
.xcdy > .secends > .cpzs > p > span:first-child {
  line-height: 30px;
  color: #333333;
  font-size: 16px;
  user-select: none;
}
.xcdy > .secends > .cpzxParent > .cpzs > p > span:last-child,
.xcdy > .secends > .cpzs > p > span:last-child {
  line-height: 1.5rem;
  color: #999999;
  font-size: 16px;
  user-select: none;
}
.xcdy > .secends > .cpzxParent > .cpzs > div > p,
.xcdy > .secends > .cpzs > div > p {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #bbbbbb;
  padding: 0 12px;
  padding-top: 4px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.xcdy > .secends > .cpzxParent > .cpzs > div > p:first-child,
.xcdy > .secends > .cpzs > div > p:first-child {
  width: 6rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: #9e0000;
  padding-top: 30px;
}
.line {
  width: 370px;
  margin: 10px auto;
  height: 1px;
  background-color: #999999;
}
.line_mk_pre {
  width: 100%;
  height: auto;
  background: #fafafa;
}
.line_mk {
  width: 70%;
  margin: 0 auto;
  height: 1px;
  padding: 16px 0;
  border-bottom: 1px solid #999;
  background: #fafafa;
}
</style>