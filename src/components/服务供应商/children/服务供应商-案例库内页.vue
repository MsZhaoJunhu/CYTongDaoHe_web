<template>
  <div>
    <div class="banner">
      <label>
        <h1>快速解决您的问题</h1>
        <div class="containSearch">
          <input type="text"
                 placeholder="输入关键字搜索">
          <img class="search"
               src="../../../assets/icon/search.png" />
        </div>
      </label>
    </div>
    <div class="xmbj">
      <div class="first">
        <span>项目背景</span>
        <i></i>
      </div>
      <div class="secend">
        <div class="contant">
          <div>
            <img src="../../../assets/imgs/hzhb_logo_hover/logo27.png"
                 alt="">
          </div>
          <div>
            <span>{{splrCaseList.pojectName}}
              <span>
                <img src="@/assets/imgs/jingdian.png"
                     alt="">
                <!--经典、优秀、良好、一般
                                <img src="../../assets/imgs/yoouxiu.png" alt="">
                                <img src="../../assets/imgs/lianghao.png" alt="">
                                <img src="../../assets/imgs/yiban.png" alt="">-->
              </span>
            </span>
            <!-- <span class="public-hezi">服务客户：<span>服务客户1</span></span>
                        <span class="public-hezi">服务时间：<span>2019.07.28 -- 2019.09.28</span></span> -->
            <span class="public-hezi">业务类型：<span>{{splrCaseList.businessType||"暂无"}}</span></span>
            <span class="public-hezi">所在行业：<span>{{splrCaseList.industry||"暂无"}}</span></span>
            <span class="public-hezi">
              <span>项目背景：</span>
              <span>{{splrCaseList.background||"暂无"}}</span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="xcdy"
         style="background:#fff;">
      <div class="first">
        <span>现场调研</span>
        <i></i>
      </div>
      <div class="secend">
        <p>
          调研工具:
          <span>{{splrCaseList.surveyTool}}</span>
        </p>
        <p>
          调研方法:
          <span>{{splrCaseList.surveyMethod}}</span>
        </p>
        <p>
          调研结论:
          <span>{{splrCaseList.surveyResult}}</span>
        </p>
      </div>
    </div>
    <div class="xmgh">
      <div class="first">
        <span>解决方案</span>
        <i></i>
      </div>
      <div class="secendL">
        <div>
          <span>{{splrCaseList.solution}}</span>
        </div>
      </div>
    </div>
    <div class="line_mk_pre">
      <div class="line_mk"></div>
    </div>
    <div class="xmgh">
      <div class="first">
        <span>实施计划</span>
        <i></i>
      </div>
      <div class="secend flex">
        <template v-for="(item,key) in splrCaseList.custSplrEvents">
          <div class="borderRight">
            <p>
              里程碑事件{{key+1}}:
              <span>{{item.milestoneEvent}}</span>
            </p>
            <p>
              主要内容:
              <span>{{item.mainContent}}</span>
            </p>
            <p>
              服务起止时间:
              <span>{{item.startDt}} - {{item.endDt}}</span>
            </p>
          </div>
        </template>
        <!-- <div class="borderRight">
                    <p>
                        里程碑事件一:
                        <span>事件名称</span>
                    </p>
                    <p>
                        主要内容: 
                        <span>事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述</span>
                    </p>
                    <p>
                        服务起止时间: 
                        <span>2019.04.25 - 2019.06.22</span>
                    </p>
                </div>
                <div>
                    <p>
                        里程碑事件二:
                        <span>事件名称</span>
                    </p>
                    <p>
                        主要内容: 
                        <span>事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述</span>
                    </p>
                    <p>
                        服务起止时间: 
                        <span>2019.04.25 - 2019.06.22</span>
                    </p>
                </div>
                <div class="borderRight paddingTop">
                    <p>
                        里程碑事件三:
                        <span>事件名称</span>
                    </p>
                    <p>
                        主要内容: 
                        <span>事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述</span>
                    </p>
                    <p>
                        服务起止时间: 
                        <span>2019.04.25 - 2019.06.22</span>
                    </p>
                </div>
                <div class="paddingTop">
                    <p>
                        里程碑事件四:
                        <span>事件名称</span>
                    </p>
                    <p>
                        主要内容: 
                        <span>事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述，事件内容的描述事件内容的描述</span>
                    </p>
                    <p>
                        服务起止时间: 
                        <span>2019.04.25 - 2019.06.22</span>
                    </p> 
                </div> -->
      </div>
    </div>
    <div class="line_mk_pre">
      <div class="line_mk"></div>
    </div>
    <div class="xmgh">
      <div class="first">
        <span>实施效果</span>
        <i></i>
      </div>
      <div class="secendr">
        <div class="secendr-two">
          <span>{{splrCaseList.solution}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getSplrCaseInfo } from '../../api/api'
export default {
  data () {
    return {
      splrCaseList: ''
    }
  },
  components: {

  },
  created () {
    this.getSplrCaseInfo();
  },
  methods: {
    getSplrCaseInfo () {
      getSplrCaseInfo({ splrCaseId: this.$route.query.splrCaseId }).then(res => {
        if (res.data.code === 200) {
          this.splrCaseList = res.data.data;
        }
      })
    }
  }
}
</script>

<style scoped>
* {
  line-height: 24px;
}
body {
  background: #fbfbfb;
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
  right: 14px;
  cursor: pointer;
}
.xcdy,
.xmgh {
  width: 100%;
  background: #fafafa;
}
.xmbj {
  background-color: rgba(248, 246, 246, 0.6) !important;
  padding-bottom: 40px;
}
.xmbj > div,
.xcdy > div,
.xmgh > div {
  margin: 0 auto;
  width: 100%;
}
.first {
  display: flex;
  flex-direction: column;
  max-width: 88rem;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
  align-items: center;
  position: relative;
}
.first > * {
  position: relative;
  z-index: 2;
}
.first > span {
  font-size: 3rem;
  line-height: 3rem;
  color: #353535;
  padding-bottom: 5px;
  padding-bottom: 16px;
}
.first > i {
  height: 1px;
  width: 145px;
  margin-top: 16px;
  background-color: #000;
}
.secend > .contant {
  width: 58%;
  height: 10rem;
  margin: 0 auto;
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;
}
.secend > .contant > div:first-child {
  width: 35%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #dddddd;
}
.secend > .contant > div:last-child {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.secend > .contant > div:last-child > span {
  font-size: 1rem;
  margin-top: 0.25rem;
}
.secend > .contant > div:last-child > span > span {
  color: #999999;
  display: inline-block;
}
.secend > .contant > div:last-child > span:first-child {
  font-size: 1.5rem;
  line-height: 2rem;
  color: #9e0000;
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
}
/* .secend>.contant>div:last-child>span:nth-child(4){
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    } */
.posi + img {
  width: 2.5rem;
}
.posi {
  font-size: 1rem;
  color: #fff;
  position: relative;
  left: 2.3rem;
  top: -1rem;
}
.xcdy > .first {
  padding-top: 4rem;
}
.xcdy > .secend {
  width: 1400px;
  overflow: hidden;
  margin-top: 3rem;
  padding: 0px 165px;
  box-sizing: border-box;
  padding-bottom: 60px;
  border-bottom: 1px solid #ddd;
}
.xcdy > .secend > p {
  color: #333333;
  margin-top: 0.5rem;
  font-weight: bold;
}
.xcdy > .secend > p > span {
  color: #666666;
  font-weight: normal;
}
.xmgh > .first,
.xmgh > .secend,
.xmgh > .secendLast,
.xmgh > .secendL,
.secendr {
  width: 73%;
  margin: 0 auto;
}
.xmgh > .first > p {
  text-indent: 2em;
  text-align: left;
  margin-top: 34px;
}
.xmgh > .secend {
  width: 65%;
  display: flex;
  padding-left: 10%;
  justify-content: space-between;
  flex-flow: row wrap;
}
.xmgh > .secend > div {
  width: 30rem;
}
.xmgh > .secend > .borderRight {
  width: 40%;
  border-right: 1px solid #eeeeee;
  padding-right: 1.5rem;
}
.xmgh > .secend > .borderRight:nth-child(n + 3) {
  padding-top: 2rem;
}
.xmgh > .secend > .borderRight:nth-child(even) {
  border: 0px;
}
.xmgh > .secend > .paddingTop {
  padding-top: 2rem;
}
.xmgh > .secend > div > p:not(:first-child) {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0rem;
  color: #333333;
  margin-top: 0.5rem;
}
.xmgh > .secend > div > p > span {
  color: #8a8a8a;
}
.xmgh > .secend > div > p:first-child {
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2rem;
  letter-spacing: 0rem;
  color: #333333;
}
.secendLast {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.secendLast > div {
  width: 14rem;
}
.secendLast p {
  color: #666666;
  line-height: 30px;
}
.secendLast span {
  color: #999999;
  font-size: 16px;
}
.secendLast > div:nth-child(n + 5) {
  padding-top: 3rem;
}
.secendL {
  padding-bottom: 2rem;
  padding-top: 4rem;
  height: auto;
  background: url(../../../assets/imgs/jl.png) no-repeat left top;
}
.secendL > div:last-child {
  width: 36rem;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem 2rem 3rem 2rem;
  box-sizing: border-box;
  margin-left: 40%;
}
.secendL > div:last-child > span {
  width: 32rem;
  height: auto;
  left: 16rem;
  font-size: 1rem;
  line-height: 30px;
  color: #666666;
}
.public-hezi {
  color: #666;
  font-size: 14px;
}
.public-hezi:last-child {
  display: flex;
}
.public-hezi:last-child > span:first-child {
  color: #666 !important;
  white-space: nowrap;
}
.public-hezi span {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #999999;
}
.secendr {
  width: 73% !important;
  height: auto;
  margin: 0 auto;
  margin-bottom: 50px !important;
  padding-bottom: 4rem;
  background: url("../../../assets/imgs/AboutUs_JoinUs2.png") no-repeat right
    bottom;
}
.secendr .secendr-two {
  width: 36rem;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem 2rem 3rem 2rem;
  box-sizing: border-box;
}
.secendr-two > span {
  color: #666;
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
  position: relative;
  z-index: 2;
}
.xmgh,
.xmgh + .line_mk_pre,
.xmgh + .line_mk_pre > .line_mk {
  background: #fff !important;
}
.containSearch{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>