<template>
  <div class="gys_details_all">
    <div class="gys_details_all_title">
      <router-link :to="{path:'/fun/checkDetails',query:{projId:projId}}">服务交易</router-link>
    </div>
    <div class="gys_details_all_content">
      <h5>基本信息</h5>
      <p>
        <span>公司名称：</span>
        <span>{{arrQXUE.splrName}}</span>
      </p>
      <div class="gys_details_all_div">
        <div>
          <span>信用等级：</span>
          <div>
            <img v-for="itemsun in sunNumber"
                 src="../../../assets/icon/ri.png"
                 alt="">
            <img v-for="itemmount in mountNumber"
                 src="../../../assets/imgs/mount-y.png"
                 alt="">
            <img v-for="itemstart in startNumber"
                 src="../../../assets/imgs/star-y.png"
                 alt="">
          </div>
        </div>
        <div>
          <span>服务优质率：</span>
          <span>{{arrQXUE.qualityRating}}%</span>
        </div>
      </div>
      <p class="gys_details_all_p">
        <span>公司简写：</span>
        <span>{{arrQXUE.enterpriceIntro}}</span>
      </p>
      <h5>产品展示</h5>
      <table class="gys_details_all_table">
        <tr>
          <td>产品名称</td>
          <td>适用范围</td>
          <td>产品简介</td>
          <td>主要效果</td>
        </tr>
        <tr v-for="item in arrQX">
          <td>{{item.prodserName}}</td>
          <td>{{item.applicationScope}}</td>
          <td>{{item.prodserIntro}}</td>
          <td>{{item.mainEffect}}</td>
        </tr>
      </table>
      <h5>实施案例</h5>
      <table class="gys_details_all_table2">
        <tr>
          <td>项目名称</td>
          <td>业务类型</td>
          <td>专业领域</td>
          <td>客户名称</td>
          <td>所在行业</td>
          <td>操作</td>
        </tr>
        <tr v-for="item in arrQXU">
          <td>{{item.projectName}}</td>
          <td>{{item.businessType}}</td>
          <td>{{item.field}}</td>
          <td>{{item.surveyCustomer}}</td>
          <td>{{item.industry}}</td>
          <td class="gys_details_table_button_style">
            <router-link target="_blank"
                         :to="{path:'/fwgys/fwgys_ny',query:{'splrCaseId':item.splrId}}">浏览</router-link>
          </td>
        </tr>
      </table>
      <h5>投标信息</h5>
      <div class="gys_details_div_style">
        <span>项目报价：</span>
        <input type="number"
               disabled
               :value="arrQ.projMoney">
        <span>元</span>
      </div>
      <div class="gys_details_div_div_style">
        <div>
          <span>附件上传</span>
        </div>
        <div>
          <div>
            <img src="../../../assets/funsIcon/word.png"
                 alt="">
            <span>{{aHrefName1[0]}}</span>
            <button style="white-space: nowrap;"
                    class="clickToDownload">
              <a v-if="aHrefName1[0]!='暂无'"
                 :href="base+aHrefName1[0]">下载...</a>
              <a v-if="aHrefName1[0]=='暂无'"
                 @click="zanwuXiaZai">下载...</a>
            </button>
          </div>
          <div>
            <img src="../../../assets/funsIcon/word.png"
                 alt="">
            <span>{{aHrefName2[0]}}</span>
            <button style="white-space: nowrap;"
                    class="clickToDownload">
              <a v-if="aHrefName2[0]!='暂无'"
                 :href="base+aHrefName2[0]">下载...</a>
              <a v-if="aHrefName2[0]=='暂无'"
                 @click="zanwuXiaZai">下载...</a>
            </button>
          </div>
          <span>特别说明：整体解决方案包裹项目规划、实施计划、输出成果、实施效果、团队成员等</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { getSplrDetailWithTender } from "@/components/api/api";
// import base from "@/components/api/api";
export default {
  data () {
    return {
      // 获取href传过来的参数
      projId: this.$route.query.projId,
      splrId: this.$route.query.splrId,
      arrQXUE: "",
      arrQXU: "",
      arrQX: "",
      arrQ: "",
      startNumber: 0,
      mountNumber: 0,
      sunNumber: 0,
      aHrefName1: ["暂无"],
      aHrefName2: ["暂无"],
      base: "http://42.51.16.10:8080/file/",
    }
  },
  methods: {
    zanwuXiaZai () {
      this.$notify({
        title: '下载失败',
        message: '对方没有上传文件，下载失败！',
        type: 'error',
        position: 'top-left'
      });
    }
  },
  mounted () {
    getSplrDetailWithTender({ projId: this.projId, splrId: this.splrId }).then(res => {
      if (res.data.code == 200) {
        this.arrQXUE = res.data.data.custSplr;
        this.arrQXU = res.data.data.custSplrCaseList;
        this.arrQX = res.data.data.custSplrProdList;
        this.arrQ = res.data.data.splrProjinfo;
        if (this.arrQ.moneyDetailFile != "") {
          this.aHrefName1 = this.arrQ.moneyDetailFile.match('[^/]+(?!.*/)');
        }
        if (this.arrQ.overallSolutionFile != "") {
          this.aHrefName2 = this.arrQ.overallSolutionFile.match('[^/]+(?!.*/)');
        }
        // 信用等级计算 每个星星一级 一个月亮四级  一个太阳四级
        let level = res.data.data.custSplr.creditRating;
        if (0 <= level && level < 4) {
          // 这里只有星星
          this.startNumber = level;
        } else if (4 <= level && level < 16) {
          // 有星星 有月亮
          this.startNumber = level % 4
          this.mountNumber = parseInt(level / 4)
        } else if (16 <= level) {
          // 有星星 有月亮 有太阳
          this.sunNumber = parseInt(parseInt(level / 4) / 4);
          this.startNumber = level % 4
          this.mountNumber = parseInt(level / 4)
        }
        // this.base=base.base;
      }
    })
  }
}
</script>
<style scoped>
.gys_details_all {
  width: 73%;
  margin: 32px auto;
  box-sizing: border-box;
  background: #fff;
  padding-bottom: 32px;
}
.gys_details_all_title {
  line-height: 5rem;
  background: #fafafa;
}
.gys_details_all_title > a:before {
  content: "<";
  margin-right: 8px;
  color: #9e0100;
}
.gys_details_all_title > a {
  color: #9e0100;
}
.gys_details_all_content {
  width: 96%;
  height: auto;
  margin: 0 auto;
}
.gys_details_all_content > h5 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  line-height: 4rem;
}
.gys_details_all_content > p > span:first-child {
  font-size: 16px;
  color: #666666;
  width: 10%;
}
.gys_details_all_content > p > span:last-child {
  font-size: 16px;
  color: #999999;
}
.gys_details_all_div {
  display: flex;
  padding: 2rem 0;
  align-items: center;
}
.gys_details_all_div > div {
  width: 50%;
  display: flex;
  align-items: center;
}
.gys_details_all_div > div > span:last-child {
  color: #9e0100;
}
.gys_details_all_p {
  display: flex;
}
.gys_details_all_p > span:last-child {
  display: inline-block;
  width: auto;
}
.gys_details_all_content > table {
  width: 100%;
}
.gys_details_all_content > table td {
  text-align: center;
  line-height: 2rem;
}
.gys_details_all_table,.gys_details_all_table2{
  background:#e2e2e2;
}
.gys_details_all_table td {
  width: 25%;
  vertical-align: top;
}
.gys_details_all_table2 td {
  width: 16.5%;
}
.gys_details_all_table > tr:nth-child(n + 2) > td:last-child {
  text-align: left;
  text-indent: 2em;
}
.gys_details_all_content > table td:first-child {
  width: 10%;
  text-align: left;
}
.gys_details_all_content > table td:last-child {
  text-align: right;
}
.gys_details_table_button_style > button {
  border: 0;
  background: #fff;
  flex-shrink: 0;
  margin: 0 1rem;
}
.gys_details_table_button_style > a {
  font-size: 14px;
  color: #000;
}
.gys_details_table_button_style > button:last-child {
  margin-right: 0;
}
.gys_details_button_style {
  width: 150px;
  height: 38px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gys_details_button_style > span {
  font-size: 16px;
}
.gys_details_button_style > span:first-child {
  font-size: 22px;
}
.gys_details_div_style {
  line-height: 4rem;
}
.gys_details_div_style > span:first-child {
  color: #666666;
}
.gys_details_div_style > input {
  border: 0;
  background: #f6f6f6;
  padding-left: 8px;
  box-sizing: border-box;
  height: 30px;
  margin-right: 0.5rem;
}
.gys_details_div_div_style {
  display: flex;
}
.gys_details_div_div_style > div:first-child {
  width: 10%;
}
.gys_details_div_div_style > div > div + div {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.gys_details_div_div_style > div > div > span:first-child {
  color: #999999;
  display: inline-block;
  width: 30%;
  overflow: hidden;
}
.gys_details_div_div_style > div:last-child > span:last-child {
  color: #9e0100;
}
.gys_details_button_tj_qx_style {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
.gys_details_button_tj_qx_style > button {
  width: 240px;
  height: 42px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: #9e0100;
  border: 0;
  border-radius: 21px;
  margin: 0 1rem;
}
.clickToDownload {
  width: 60px;
  margin-left: 12px;
  padding: 2px 4px;
  background: #fafafa;
  border: 1px solid #999;
}
.clickToDownload > a {
  color: #000;
}
</style>