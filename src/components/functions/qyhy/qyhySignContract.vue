<template>
  <div class="contract_details_par">
    <div class="contract_details_all">
      <div class="contract_details_all_title">
        <router-link :to="{path:'/fun/funs'}">合同签订</router-link>
      </div>
      <div class="contract_details_all_content">
        <div class="contract_details_all_content_changeTitle">
          <div class="contract_details_all_content_changeTitle_content">
            <div class="changeTitle_title"
                 @click="clickChangeTitle(0)"
                 :class="changeTitle==0?'titleActive':''">主体合同</div>
            <div class="changeTitle_title"
                 @click="clickChangeTitle(1)"
                 :class="changeTitle==1?'titleActive':''">补充合同</div>
          </div>
          <button class="changeTitle_button"
                  @click="clickToDownloadMore">批量下载</button>
        </div>
        <div>
          <!-- 主体 -->
          <div class="contract_details_all_content_changeContent">
            <!-- 填写范本 -->
            <!-- <div class="contract_div_con" @click="clickToContract">
                            <span class="iconfont icon-jiahao1"></span>
                            <p>合同范本填写</p>
                        </div> -->
            <!-- 列表显示 -->
            <div class="contract_div_arr"
                 v-for="(item,index) in contractArr"
                 :key="index">
              <div class="positionAbsoulte"
                   :class="item.contractStatus==0?'待确认':item.contractStatus==1?'待修改':item.contractStatus==2?'待审核':item.contractStatus==3?'已达成':item.contractStatus==4?'未通过':''">{{item.contractStatus==0?'待确认':item.contractStatus==1?'待修改':item.contractStatus==2?'待审核':item.contractStatus==3?'已达成':item.contractStatus==4?'未通过':''}}</div>
              <div class="selectMore"
                   @click="clickToSelectMore($event,item.contractStatus,item.contractId)">
                <span class="iconfont icon-duigou"></span>
              </div>
              <div>
                <img v-if="item.contractStatus==4"
                     src=".././../../assets/pdf1.png"
                     alt="">
                <img v-else
                     src=".././../../assets/pdf.png"
                     alt="">
                <p>{{item.corpName}}</p>
                <p>{{item.contractNo}}</p>
                <div class="bottom3Img">
                  <div @click="clickToPre(item.contractId)">
                    <span class="iconfont icon-changyongicon-"></span>
                  </div>
                  <div @click="clickToContract(item.contractId)" :class="item.contractStatus==1?'':'disabledP'">
                    <span class="iconfont icon-qianbi"></span>
                  </div>
                  <div @click="item.contractStatus==3?clickToDownload(item.contractId):''" :class="item.contractStatus==3?'':'disabledP'">
                    <span class="iconfont icon-xiazai"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="contract_footer_pagination">
            <el-pagination background
                           layout="prev, pager, next"
                           :page-size="10"
                           :total="totals">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getMyContract,
} from "@/components/api/api";
export default {
  data () {
    return {
      // 控制顶部title的变量
      changeTitle: 0,
      // 效果
      fillInModel: 1,
      fillInModelIce: 1,
      fillInModelPen: 1,
      fillInModelDown: 1,
      // 多选数组
      selectMoreArr: [],
      contractArr: [],
      totals: 1
    }
  },
  mounted () {
    this.preMounted();
  },
  methods: {
    // mounted 方法
    preMounted () {
      getMyContract(0, { "pageSize": 9, "pageNum": 1 }).then(res => {
        if (res.data.code == 200) {
          this.contractArr = res.data.data.records
          this.totals = res.data.data.total
        }
      })
    },
    // 控制顶部title
    clickChangeTitle (index) {
      this.changeTitle = index;
    },
    // 批量下载
    clickToDownloadMore () {
      if (this.selectMoreArr.length == 0) {
        this.$message({
          message: '请选择下载内容',
          type: 'warning'
        });
      } else {
        this.$message({
          message: '开始下载',
          type: 'success'
        });
        for (var i = 0; i < this.selectMoreArr.length; i++) {
          this.clickToDownload(this.selectMoreArr[i])
        }
      }
    },
    clickToDownload (id) {
      window.location.href = `http://42.51.16.10:8080/tdhms/contract/word/${id}`
    },
    // 跳转
    clickToContract () {
      // this.$router.push('/fun/qyhyFillSignContract')
    },
    // 多选
    clickToSelectMore (e, index, id) {
      if (e.target.nodeName == "SPAN" && index == 3) {
        if (this.selectMoreArr.length >= 1) {
          for (var i = 0; i < this.selectMoreArr.length; i++) {
            if (this.selectMoreArr[i] == id) {
              this.selectMoreArr.splice(i, 1)
            } else {
              this.selectMoreArr.push(id)
            }
          }
        } else {
          this.selectMoreArr.push(id)
        }
        this.addClass(e, 'active', index)
      }
    },
    // 判断是有已经有这个class
    hasClass (e, className) {
      var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
      return reg.test(e.target.className)
    },
    // 元素新增class
    addClass (e, className, index) {
      if (this.hasClass(e, 'active')) {
        var newClass = e.target.className.split(' ');
        for (var i = 0; i < newClass.length; i++) {
          if (newClass[i] == className) {
            newClass.splice(i, 1)
          }
        }
        e.target.className = newClass.join(' ');
      } else {
        var newClass = e.target.className.split(' ');
        newClass.push(className);
        e.target.className = newClass.join(' ');
      }
    },
    // 预览
    clickToPre (id) {
      this.$router.push({ path: '/fun/qyhyPreviewContract', query: { "id": id } })
    }
  },
}
</script>
<style scope>
@font-face {
  font-family: "iconfont"; /* project id 1257292 */
  src: url("//at.alicdn.com/t/font_1257292_1sw3tjus9dq.eot");
  src: url("//at.alicdn.com/t/font_1257292_1sw3tjus9dq.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1257292_1sw3tjus9dq.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1257292_1sw3tjus9dq.woff") format("woff"),
    url("//at.alicdn.com/t/font_1257292_1sw3tjus9dq.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1257292_1sw3tjus9dq.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.contract_details_all {
  width: 80%;
  margin: 0 auto;
}
.contract_details_all_title {
  padding: 46px 16px 16px 16px;
}
.contract_details_all_title,
.contract_details_all_title > a {
  color: #9e0100;
  font-weight: bold;
}
.contract_details_all_title:before {
  content: "<";
  margin-right: 8px;
}
.contract_details_all_content {
  padding: 28px;
  background: #fff;
  margin-bottom: 24px;
}
.contract_details_all_content_changeTitle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.contract_details_all_content_changeTitle_content {
  display: flex;
}
.changeTitle_title {
  min-width: 80px;
  height: 46px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #fff;
  margin: 0 4px;
}
.titleActive {
  border-color: #9e0100;
}
.changeTitle_button {
  height: 34px;
  background: #fafafa;
  border: 1px solid #999;
  padding: 0 4px;
  color: #666;
  white-space: nowrap;
}
.contract_details_all_content_changeContent {
  display: flex;
  flex-wrap: wrap;
}
.contract_div_con {
  border: 1px dashed #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: calc(90% / 5);
  margin-right: 2%;
  cursor: pointer;
  border-radius: 4px;
  height: 280px;
  padding-top: 0.75rem;
}
.contract_div_con:hover {
  border-color: #000;
}
.contract_div_con:hover > p {
  color: #000;
}
.contract_div_con:hover > span {
  color: rgb(65, 65, 65);
}
.contract_div_con > p {
  font-size: 28px;
  color: #999;
  margin-bottom: 0.5rem;
}
.contract_div_arr {
  width: calc(90% / 5);
  height: 280px;
  overflow: hidden;
  margin-right: 2%;
  position: relative;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contract_div_arr:nth-child(n + 6) {
  margin-top: 2rem;
}
.bottom3Img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 40px;
  margin-top: 0.5rem;
}
.bottom3Img > div {
  height: 40px;
  cursor: pointer;
}
.bottom3Img > div > img {
  height: 100%;
}
.bottom3Img > div > span {
  font-size: 28px;
  color: #999;
}
.bottom3Img > div:hover > span {
  color: #000;
}
.contract_div_arr:hover {
  border-color: #000;
}
.positionAbsoulte {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #fff;
}
.selectMore {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #fff;
  display: block;
  width: 12px;
  height: 12px;
  border: 1px solid #999;
}
.selectMore > span {
  color: #9e0100;
  font-size: 16px;
  opacity: 0;
}
.selectMore > .active {
  opacity: 1;
}
.contract_div_arr > div:nth-child(3) {
  width: 100%;
}
.contract_div_arr > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contract_div_arr > div > img {
  width: 120px;
  height: 120px;
}
.contract_div_arr > div > p {
  max-width: 250px;
  width: auto;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.5rem;
}
.contract_div_con > .icon-jiahao1 {
  font-size: 160px;
  color: #999;
}
.contract_footer_pagination {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.未通过 {
  width: 100px;
  height: 40px;
  background: #999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.待确认 {
  width: 100px;
  height: 40px;
  background: rgba(102, 153, 204, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.待修改 {
  width: 100px;
  height: 40px;
  background: rgba(255, 153, 51, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.已达成 {
  width: 100px;
  height: 40px;
  background: rgba(51, 153, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.待审核 {
  width: 100px;
  height: 40px;
  background: rgba(102, 51, 204, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.disabledP{
  pointer-events:none
}
</style>
<style>
.contract_footer_pagination
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #9e0100;
}
.contract_footer_pagination .el-pagination.is-background .el-pager li:hover {
  color: #9e0100;
}
</style>