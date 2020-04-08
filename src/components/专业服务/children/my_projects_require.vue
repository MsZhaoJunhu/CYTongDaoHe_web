<template>
  <div class="my-project-require">
    <xfc></xfc>
    <div class="project-introduce">
      <div class="introduce-content">
        <div class="left-part part">
          <img :src="pitem.projLogo" style="width:100%;height:100%;" />
        </div>
        <div class="right-part part">
          <div>
            <div class="project-title">
              <span class="essential-point">{{pitem.corpName}}</span>
              <span class="project-duration">{{pitem.releaseStart}} —— {{pitem.releaseEnd}}</span>
            </div>
            <div class="project-property">
              <span>项目费用</span>
              <span class="color-red">￥ {{pitem.costBudget}}</span>
              <span class="unit">元</span>
              <span>{{pitem.businessType}} | {{pitem.field}}</span>
              <span style="float:right"
                    v-if="pitem.projState=='需求中'">
                <img src="@/assets/imgs/servers/project-status-require.png"
                     alt />
              </span>
              <span style="float:right"
                    v-if="pitem.projState=='服务中'">
                <img src="@/assets/imgs/servers/project-status-running.png"
                     alt />
              </span>
              <span style="float:right"
                    v-if="pitem.projState=='已终止'||pitem.projState=='已结项'">
                <img src="@/assets/imgs/servers/project-status-ending.png"
                     alt />
              </span>
            </div>
            <div class="c-box">
              <span class="essential-point">主要需求：</span>
              <p class="box_content">{{pitem.mainRequire}}</p>
            </div>
            <div class="c-box">
              <span class="essential-point">服务内容及要求：</span>
              <p class="box_content">{{pitem.serveContent}}</p>
            </div>
            <div class="c-box">
              <span class="essential-point">预期效果：</span>
              <p class="box_content">{{pitem.resultExpect}}</p>
            </div>
            <div class="c-box">
              <p class="essential-point">交易模式：</p>
              <p class="box_content text-red">{{pitem.tradeMode}}</p>
            </div>
            <div class="c-box">
              <p class="essential-point">合同编号：</p>
              <p class="box_content">{{pitem.contractNo}}</p>
            </div>
            <div class="c-box">
              <p class="essential-point">发布日期：</p>
              <p class="box_content">{{pitem.createdTime}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="project-progress">
        <p class="box_title">交易进程</p>
        <div class="progress-one progress-item">
          <!-- <p class='progress-one-title p-title'>第一次招标</p> -->
          <div class="progress-content">
            <p class>
              <span class="text"
                    :class="{'background-red':step1}">甄选</span>
              <span class="circle-dot"
                    :class="{'step-complete':step2}">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </p>
            <p>
              <span class="text"
                    :class="{'background-red':step2}">投标</span>
              <span class="circle-dot"
                    :class="{'step-complete':step3}">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </p>
            <p>
              <span class="text"
                    :class="{'background-red':step3}">选标</span>
              <span class="circle-dot"
                    :class="{'step-complete':step4}">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </p>
            <p>
              <span class="text"
                    :class="{'background-red':step4}">中标</span>
              <span class="circle-dot"
                    :class="{'step-complete':step5}">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </p>
            <p class="last-step"
               style="cursor: pointer;"
               :class="{'background-red':step5}">
              <span class="text"
                    @click="show2">成交</span>
            </p>
            <p @click="show1"
               class="wytb">
              <img src="../../../assets/tc/auction.png"
                   alt />
              我要投标
            </p>
          </div>
          <div class="progress-pattern">
            <p>
              <span class="color-dark-grey">交易模式：</span>
              <span>{{pitem.tradeMode}}</span>
            </p>
            <p>
              <span class="color-dark-grey">交易起止日期：</span>
              <span>{{pitem.bidStart}} ———— {{pitem.bidEnd}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="media_progress_pattern">
      <span>交易进程</span>
      <div>
        <p>
          <span>交易模式：</span>
          <span>竞争性谈判</span>
        </p>
        <p>
          <span>交易起止时间：</span>
          <span>2019.04.05——2019.06.25</span>
        </p>
      </div>
      <el-steps :active="2"
                align-center>
        <el-step title="甄选"
                 description></el-step>
        <el-step title="投标"
                 description></el-step>
        <el-step title="选标"
                 description></el-step>
        <el-step title="中标"
                 description></el-step>
        <el-step title="成交"
                 description></el-step>
      </el-steps>
      <el-drawer title="成交"
                 :visible.sync="drawer"
                 :direction="direction"
                 :before-close="handleClose"
                 size="100%">
        <h3 class="media_cjxy_h3">
          请仔细阅读
          <span>专业服务网络交易协议</span>后完成交易
        </h3>
        <div class="media_cjxy"
             @scroll="Tscroll">
          <p>专业服务网络交易协议</p>
          <span>
            本协议由甲方（需求方）和乙方（专业服务供应商）在线签订，请甲方仔细阅读协议内容，请务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。甲方点击接受本协议，即意味着已阅读、理解并接受本协议所有条款，并对本协议条款的含义及相应的法律后果已全部知晓并充分认可。甲方点击确认本协议后，本协议即产生法律约束力。
            甲方在阅读本协议的过程中，如不同意本协议或其中任何条款约定，应拒绝接受本协议所约定的内容，甲方有权自主选择拒绝与乙方达成合作。
            第一章 定义
            除非本协议另有约定，在本协议中所用下列术语定义如下:
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            本协议由甲方（需求方）和乙方（专业服务供应商）在线签订，请甲方仔细阅读协议内容，请务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。甲方点击接受本协议，即意味着已阅读、理解并接受本协议所有条款，并对本协议条款的含义及相应的法律后果已全部知晓并充分认可。甲方点击确认本协议后，本协议即产生法律约束力。
            甲方在阅读本协议的过程中，如不同意本协议或其中任何条款约定，应拒绝接受本协议所约定的内容，甲方有权自主选择拒绝与乙方达成合作。
            第一章 定义
            除非本协议另有约定，在本协议中所用下列术语定义如下:
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务
            第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户
          </span>
        </div>
        <button class="media_wcjy"
                disabled
                @click="media_jycg">完成交易</button>
      </el-drawer>
      <div>
        <button @click="wytbS"
                class="media_wytbs">我要投标</button>
      </div>
      <el-drawer title="我要投标"
                 :visible.sync="drawer2"
                 :direction="direction"
                 :before-close="handleClose"
                 size="100%">
        <div class="drawer_body_media">
          <p>
            <span>公司名称：</span>
            <input type="text" />
          </p>
          <p>
            <span>需求内容：</span>
            <textarea name
                      id
                      cols="35"
                      rows="13"></textarea>
          </p>
          <p>
            <span>服务计划：</span>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       multiple
                       :limit="3"
                       :file-list="fileList">
              <el-button size="small"
                         type="primary">点击上传</el-button>
            </el-upload>
          </p>
          <p>
            <span>投标文件：</span>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       multiple
                       :limit="3"
                       :file-list="fileList2">
              <el-button size="small"
                         type="primary">点击上传</el-button>
            </el-upload>
          </p>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <button @click="media_click_tb"
                  class="media_wytbs">投标</button>
        </div>
      </el-drawer>
      <el-drawer title="第一次投标"
                 :visible.sync="drawer3"
                 :direction="direction"
                 :before-close="handleClose"
                 size="100%">
        <div class="drawer3_body_media">
          <p>服务商名称</p>
          <div>
            <span>公司简介：</span>
            <div>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</div>
          </div>
          <p>
            <span>诚信分数：</span>
            <span>100分</span>
          </p>
          <p>
            <span>投标日期：</span>
            <span>2019.03.31</span>
            <span>截止日期：2019.05.31</span>
          </p>
          <div>
            <span>计划文件：</span>
            <div>
              <span>
                <span>计划1</span>
                <a href="#">下载</a>
              </span>
              <span>
                <span>计划2</span>
                <a href="#">下载</a>
              </span>
            </div>
          </div>
          <div>
            <span>投标文件：</span>
            <div>
              <span>
                <span>投标1</span>
                <a href="#">下载</a>
              </span>
              <span>
                <span>投标2</span>
                <a href="#">下载</a>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <button @click="media_click_dyctb"
                  class="media_wytbs">投标</button>
        </div>
      </el-drawer>
      <el-drawer title="查看投标"
                 :visible.sync="drawer4"
                 :direction="direction"
                 :before-close="handleClose"
                 size="100%">
        <div class="drawer3_body_media">
          <p>服务商名称</p>
          <div>
            <span>公司简介：</span>
            <div>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</div>
          </div>
          <p>
            <span>诚信分数：</span>
            <span>100分</span>
          </p>
          <p>
            <span>投标日期：</span>
            <span>2019.03.31</span>
          </p>
          <div>
            <span>计划文件：</span>
            <div>
              <span>
                <span>计划1</span>
                <a href="#">下载</a>
              </span>
              <span>
                <span>计划2</span>
                <a href="#">下载</a>
              </span>
            </div>
          </div>
          <div>
            <span>投标文件：</span>
            <div>
              <span>
                <span>投标1</span>
                <a href="#">下载</a>
              </span>
              <span>
                <span>投标2</span>
                <a href="#">下载</a>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <div>
            <span>案例实施：</span>
            <div>
              <img src="../../../assets/tc/alss.png"
                   alt />
              <span>
                案例项目名称
                <span></span>
              </span>
            </div>
          </div>
          <button @click="media_click_cktb"
                  class="media_wytbs">投标</button>
        </div>
      </el-drawer>
    </div>
    <toast :arrs="arrsdata"
           class="toast"></toast>
  </div>
</template>
<script>
import Bus from "../../../bus.js";
import imgAlss from "../../../assets/tc/alss.png";
import imgGSJJ from "../../../assets/tc/gsjj.png";
import jsFH from "./components/xy.js";
import toast from "../../弹窗/toastPublic1.vue";
import xfc from "@/components/public/悬浮窗.vue";
import { getProjs } from "@/components/api/api";
export default {
  data () {
    return {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      isshow: false,
      title: "投标服务商详情——第一次投标",
      jsFH,
      shijian: 1,
      arrsdata: [],
      drawer: false,
      drawer2: false,
      drawer3: false,
      drawer4: false,
      direction: "btt",
      pitem: {},
      fileList: [],
      fileList2: [],
      arr: [
        //我要投标
        [
          720,
          550,
          "我要投标",
          [
            {
              name: 2,
              title: "公司名称：",
              fontSize: "fontFour",
              format: "text"
            },
            {
              name: 16,
              title: "需求内容：",
              fontSize: "fontFour",
              width: 550,
              height: 96
            },
            { name: 18, title: "服务计划：", fontSize: "fontFour" },
            { name: 18, title: "投标文件：", fontSize: "fontFour" },
            { name: "borderTop", borderTop: "borderTop" },
            {
              name: 19,
              mc: "案例实施：",
              fontSize: "fontFour",
              w: 188,
              h: 144,
              alssSZ: [
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" }
              ]
            },
            { name: 5, title: "投标" }
          ]
        ],
        //投标后查看投标
        [
          720,
          600,
          "投标服务商详情-第一次投标",
          [
            {
              name: 20,
              title: "服务商的名称",
              jj: "公司简介：",
              jjFontSize: "fontFour",
              jjContent:
                "公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容",
              cxfs: "诚信分数：",
              CxFontSize: "fontFour",
              cxfsContent: "100分",
              img: imgGSJJ
            },
            { name: "borderTop", borderTop: "borderTop" },
            {
              name: 21,
              title: "投标时间：",
              FontSize: "fontFour",
              answer: "2019.03.31",
              bzAnswer: "截至日期2019.04.06"
            },
            {
              name: 22,
              title: "服务计划：",
              FontSize: "fontFour",
              wj: [
                { title: "服务计划1", lj: "www.baidu.com" },
                { title: "服务计划2", lj: "www.baidu.com" }
              ]
            },
            {
              name: 22,
              title: "投标文件：",
              FontSize: "fontFour",
              wj: [
                { title: "报价表", lj: "www.baidu.com" },
                { title: "附件", lj: "www.baidu.com" }
              ]
            },
            {
              name: 19,
              mc: "案例实施：",
              fontSize: "fontFour",
              w: 188,
              h: 144,
              alssSZ: [
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" }
              ]
            },
            { name: 5, title: "修改投标信息" }
          ]
        ],
        //他人查看投标
        [
          720,
          600,
          "投标服务商详情-第一次投标",
          [
            {
              name: 20,
              title: "服务商的名称",
              jj: "公司简介：",
              jjFontSize: "fontFour",
              jjContent:
                "公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容公司简介的内容",
              cxfs: "诚信分数：",
              CxFontSize: "fontFour",
              cxfsContent: "100分",
              img: imgGSJJ
            },
            { name: "borderTop", borderTop: "borderTop" },
            {
              name: 21,
              title: "投标时间：",
              FontSize: "fontFour",
              answer: "2019.03.31"
            },
            {
              name: 22,
              title: "服务计划：",
              FontSize: "fontFour",
              wj: [
                { title: "服务计划1", lj: "www.baidu.com" },
                { title: "服务计划2", lj: "www.baidu.com" }
              ]
            },
            {
              name: 22,
              title: "投标文件：",
              FontSize: "fontFour",
              wj: [
                { title: "报价表", lj: "www.baidu.com" },
                { title: "附件", lj: "www.baidu.com" }
              ]
            },
            {
              name: 19,
              mc: "案例实施：",
              fontSize: "fontFour",
              w: 188,
              h: 144,
              alssSZ: [
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" },
                { imgURL: imgAlss, title: "案例项目名称" }
              ]
            },
            { name: 5, title: "修改投标信息" }
          ]
        ]
      ],
      arrTwo: [
        //成交信息
        [
          720,
          660,
          "成交",
          [
            {
              name: 23,
              titleA: "请仔细阅读",
              titleRed: "专业服务网络交易协议",
              titleB: "后完成交易",
              Nr: "内容：",
              fontSize: "fontTwo",
              contentTitle: "专业服务网络协议",
              contentTitleColor: "ColorRed",
              content: [{ htmls: jsFH.Phtml }]
            }
          ]
        ]
      ]
    };
  },
  methods: {
    show1 () {
      this.arrsdata = this.arr;
      this.$store.commit("changeToastZjTrue");
    },
    show2 () {
      this.arrsdata = this.arrTwo;
      this.$store.commit("changeToastZjTrue");
    },
    handleClose (done) {
      done();
    },
    wytbS () {
      this.drawer2 = true;
    },
    Tscroll ($even) {
      var wcjy = document.getElementsByClassName("media_wcjy");
      if ($even.target.scrollHeight - $even.target.scrollTop < 600) {
        wcjy[0].disabled = false;
        wcjy[0].style.backgroundColor = "#9e0100";
        wcjy[0].style.color = "#fff";
      } else {
        wcjy[0].disabled = true;
        wcjy[0].style.backgroundColor = "#dddddd";
        wcjy[0].style.color = "#ccc";
      }
    },
    media_jycg () {
      location.reload();
    },
    media_click_tb () {
      this.drawer3 = true;
      // location.reload()
    },
    media_click_dyctb () {
      this.drawer4 = true;
      // location.reload()
    },
    media_click_cktb () {
      location.reload();
    },
    getProj (id) {
      getProjs({ projId: id }).then(res => {
        console.log(res.data.data.records[0].tradeMode)
        if (res.data.code === 200) {
          this.pitem = res.data.data.records[0];
          if(this.pitem.tradeMode=='竞争性谈判'||this.pitem.tradeMode=='委托代理'){
            
          }
          if(this.pitem.bidStart){
            this.pitem.bidStart = /\d{4}-\d{1,2}-\d{1,2}/g.exec(this.pitem.bidStart)[0]
          }
          if(this.pitem.bidEnd){
            this.pitem.bidEnd = /\d{4}-\d{1,2}-\d{1,2}/g.exec(this.pitem.bidEnd)[0]
          }
          this.showTheProcess(res.data.data.records[0].tradeProcess);
        }
      });
    },
    showTheProcess: function (e) {

      switch (e) {
        case '甄选': {
          this.step1 = true;
        }
          break;
        case '投标': {
          this.step1 = true;
          this.step2 = true;
        }
          break;
        case '选标': {
          this.step1 = true;
          this.step2 = true;
          this.step3 = true;
        }
          break;
        case '中标': {
          this.step1 = true;
          this.step2 = true;
          this.step3 = true;
          this.step4 = true;
        }
          break;
        case '成交': {
          this.step1 = true;
          this.step2 = true;
          this.step3 = true;
          this.step4 = true;
          this.step5 = true;
        }
          break;
        default:
      }
    }
  },
  components: {
    toast,
    xfc
  },
  mounted () {
    var cj = document.getElementsByClassName("el-step__title");
    cj[cj.length - 1].addEventListener(
      "click",
      function () {
        this.drawer = true;
      }.bind(this)
    );
    this.getProj(this.$route.query.id);
  },
};
</script>

<style scoped>
.my-project-require {
  background: #fbfbfb;
}
.navigation-line {
  padding-top: 100px;
  width: 1400px;
  margin: 0 auto;
}

.navigation-line span {
  margin-right: 15px;
}

.text-red {
  color: #9e0100;
  font-weight: 600;
}
.project-introduce {
  padding: 100px 0;
  width: 73%;
  margin: 0 auto;
  position: relative;
}
.project-introduce::after {
  clear: both;
  display: block;
  content: "";
}

.project-introduce .introduce-content {
  display: flex;
  justify-content: space-between;
  height: auto;
}

.project-introduce .part:nth-of-type(2) {
  width: 70%;
}

.project-introduce .left-part {
  width: 278px;
  height: 273px;
}

.project-introduce .right-part .c-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #666666;
  margin-bottom: 20px;
}

.project-introduce .right-part .c-box .essential-point {
  display: inline-block;
  width: 14%;
}

.project-introduce .right-part .c-box .box_content {
  flex: 3;
  width: 60%;
  line-height: 24px;
}

.right-part .project-title .essential-point {
  font-size: 20px;
  color: #666666;
  font-weight: 600;
  margin-right: 10px;
}

.right-part .project-title .project-duration {
  color: #999999;
  font-size: 13px;
}

.right-part .project-property {
  padding: 20px 0;
  color: #999999;
}
.right-part .project-property span {
  margin-right: 20px;
  font-size: 18px;
}
.right-part .project-property span:nth-of-type(2) {
  margin-right: 10px;
}
.right-part .project-property .color-red {
  color: #9e0100;
  font-size: 30px;
  font-weight: 600;
}
.project-progress {
  width: 70%;
  float: right;
  margin-top: 30px;
  background: #fff;
}
.project-progress .box_title {
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
}
.progress-item {
  padding: 40px 10px;
}
.project-progress .progress-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.progress-content p {
  width: 20%;
  display: flex;
  justify-content: space-around;
}
.progress-content .last-step {
  width: 20%;
  display: flex;
  justify-content: flex-start;
}
.progress-content p .text {
  background: #f6f6f6;
  color: #9e0100;
  padding: 5px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  width: 80px;
}
.progress-content p .background-red {
  background: #9e0100;
  color: #f6f6f6;
  text-align: center;
}
.progress-content p .circle-dot {
  /* margin-left: 40px; */
  width: 48px;
}
.progress-content p .circle-dot span {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #dddddd;
  margin: 24% 5px;
}
.progress-content p .step-complete span {
  background: #9e0100;
}
.wytb {
  width: 92px;
  height: 27px;
  color: #fff;
  line-height: 27px;
  border-radius: 4px;
  background-color: #9e0100;
  cursor: pointer;
  display: none !important;
}
.wytb > img {
  position: relative;
  top: 2px;
  left: 2px;
}
.progress-pattern {
  margin-top: 30px;
  color: #999999;
}
.progress-pattern p {
  display: inline-block;
  margin-right: 40px;
}
.progress-pattern p:nth-of-type(1) {
  width: 25%;
}
.color-dark-grey {
  color: #666666;
}
.toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.media_progress_pattern {
  display: none;
}
@media screen and (max-width: 415px) {
  .project-introduce {
    width: 100%;
    padding: 16px 0;
  }
  .introduce-content {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
  }
  .introduce-content > .left-part,
  .introduce-content > .right-part {
    width: 100% !important;
    height: auto;
  }
  .introduce-content > .right-part {
    padding: 0 13px;
    box-sizing: border-box;
    margin-top: 16px;
  }
  .introduce-content > .right-part .project-title {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .introduce-content > .right-part .project-title > span {
    width: 100% !important;
    margin: 0;
    padding: 0;
  }
  .introduce-content > .right-part .project-title > span:first-child {
    font-size: 18px;
  }
  .introduce-content > .right-part .project-property {
    height: auto;
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
  }
  .progress-content p .text {
    padding: 5px 10px;
  }
  .progress-content p .circle-dot {
    margin-left: 0px;
  }
  .progress-content p .circle-dot span:last-child {
    display: none;
  }
  .progress-item {
    padding: 0 10px;
  }
  .progress-pattern {
    display: flex;
    flex-direction: column;
  }
  .progress-pattern > p {
    width: 100% !important;
  }
  .introduce-content > .right-part .project-property > span {
    font-size: 16px;
  }
  .introduce-content > .right-part .project-property > span:first-child {
    margin-bottom: 16px;
  }
  .introduce-content > .right-part .project-property > span:last-child {
    position: absolute;
    left: 70%;
    top: 88%;
  }
  .c-box {
    display: flex;
  }
  .c-box > span,
  .c-box > p {
    width: auto !important;
  }
  .c-box:nth-child(n + 6) {
    display: flex;
    flex-direction: row;
    margin: 0 !important;
  }
  .project-introduce .right-part .c-box {
    margin-bottom: 20px !important;
  }
  .media_progress_pattern {
    display: none;
    width: 100%;
  }
  .media_progress_pattern > span {
    font-size: 18px;
    color: #666;
    font-weight: bold;
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
  }
  .media_progress_pattern > div:nth-child(2) {
    width: 100%;
    padding: 0 16px;
  }
  .media_progress_pattern > div > p > span {
    font-size: 14px;
  }
  .media_progress_pattern > div > p:last-child {
    margin: 16px 0;
  }
  .el-steps {
    width: 100%;
    margin-bottom: 16px;
  }
  .media_cjxy_h3 {
    font-size: 16px;
    padding: 0 16px;
  }
  .media_cjxy {
    width: 92%;
    height: 48%;
    padding: 0 16px;
    overflow: scroll;
    border: 1px solid #ccc;
    margin: 16px auto;
    box-sizing: border-box;
  }
  .media_cjxy > p {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 16px 0;
    color: #9e0100;
  }
  .media_cjxy > span {
    display: inline-block;
    text-indent: 2em !important;
  }
  .media_wcjy {
    width: 100px;
    height: 32px;
    margin-left: 38%;
    border: 0;
    color: #ccc;
  }
  .media_wytbs {
    width: 100px;
    height: 32px;
    margin: 16px 0px 16px 130px;
    border: 0px;
    color: #fff;
    line-height: 32px;
    border-radius: 4px;
    background-color: #9e0100;
  }
  .drawer_body_media,
  .drawer3_body_media {
    width: 100%;
    padding: 0 24px;
    height: 660px;
    display: block;
    overflow-y: scroll;
  }
  .drawer_body_media > p:not(:first-child) {
    margin-top: 16px;
    height: auto;
  }
  .drawer_body_media > p:first-child {
    height: 40px;
    line-height: 40px;
  }
  .drawer_body_media > p > input {
    border: 1px solid #999;
    padding: 4px;
    padding-left: 8px;
    box-sizing: border-box;
    width: 253px;
  }
  .drawer_body_media > p:nth-child(2) > span {
    float: left;
  }
  .drawer_body_media > p:nth-child(2) > textarea {
    border: 1px solid #999;
    margin: 0;
  }
  .drawer_body_media > p:nth-child(3) > span,
  .drawer_body_media > p:nth-child(4) > span {
    float: left;
    line-height: 32px;
  }
  .drawer_body_media > div:nth-child(n + 5) {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    margin-top: 16px;
  }
  .drawer_body_media > div:nth-child(n + 5) > div {
    width: auto;
    display: flex;
    flex-direction: column;
  }
  .drawer_body_media > div:nth-child(n + 5) > div > span {
    margin-top: 8px;
  }
  .drawer3_body_media > p:first-child {
    font-size: 20px;
    color: #9e0100;
    font-weight: bold;
  }
  .drawer3_body_media > div:nth-child(2) {
    margin-top: 16px;
    display: flex;
  }
  .drawer3_body_media > div:nth-child(2) > span {
    min-width: 80px;
  }
  .drawer3_body_media > p:nth-child(3),
  .drawer3_body_media > p:nth-child(4),
  .drawer3_body_media > div:nth-child(n + 5) {
    margin-top: 16px;
  }
  .drawer3_body_media > p:nth-child(4) > span:nth-child(2) {
    margin-right: 16px;
  }
  .drawer3_body_media > p:nth-child(4) > span:nth-child(3) {
    color: #9e0100;
    font-weight: bold;
  }
  .drawer3_body_media > div:nth-child(5),
  .drawer3_body_media > div:nth-child(6) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  .drawer3_body_media > div:nth-child(5) > span,
  .drawer3_body_media > div:nth-child(6) > span {
    width: 80px;
  }
  .drawer3_body_media > div:nth-child(5) > div,
  .drawer3_body_media > div:nth-child(6) > div {
    width: 280px;
  }
  .drawer3_body_media > div:nth-child(5) > div > span,
  .drawer3_body_media > div:nth-child(6) > div > span {
    margin-right: 16px;
  }
  .drawer3_body_media > div:nth-child(5) > div a,
  .drawer3_body_media > div:nth-child(6) > div a {
    margin-left: 2px;
  }
  .drawer3_body_media > div:nth-child(n + 7) {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    margin-top: 16px;
  }
  .drawer3_body_media > div:nth-child(n + 7) > div {
    width: auto;
    display: flex;
    flex-direction: column;
  }
  .drawer3_body_media > div:nth-child(n + 7) > div > span {
    margin-top: 8px;
  }
}
@media screen and (max-width: 1024px) {
  .essential-point {
    width: 20% !important;
  }
  .box_content {
    width: 80% !important;
    line-height: 28px !important;
    height: 100%;
    vertical-align: bottom;
  }
}
</style>