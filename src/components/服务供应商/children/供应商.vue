<template>
  <div class="内容">
    <div class="banner">
      <label>
        <h1>快速解决您的问题</h1>
        <input type="text"
               placeholder="输入关键字搜索">
        <img class="search"
             src="@/assets/imgs/search.png" />
      </label>
    </div>
    <div class="main_menu_all">
      <table class="main_menu">
        <tr>
          <td><a><img src="../../../assets/icon/main_icon (1).png"
                   alt="" />
              <p>公司战略</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (2).png"
                   alt="" />
              <p>股权激励</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (3).png"
                   alt="" />
              <p>人力资源</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (4).png"
                   alt="" />
              <p>生产管理</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (5).png"
                   alt="" />
              <p>团队培训</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (6).png"
                   alt="" />
              <p>猎头服务</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (7).png"
                   alt="" />
              <p>公司法务</p>
            </a></td>
        </tr>
        <tr>
          <td><a><img src="../../../assets/icon/main_icon (8).png"
                   alt="" />
              <p>私人律师</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (9).png"
                   alt="" />
              <p>纳税筹划</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (10).png"
                   alt="" />
              <p>外部审计</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (11).png"
                   alt="" />
              <p>行业研究</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (12).png"
                   alt="" />
              <p>品牌管理</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (13).png"
                   alt="" />
              <p>活动策划</p>
            </a></td>
          <td><a><img src="../../../assets/icon/main_icon (14).png"
                   alt="" />
              <p>专利布局</p>
            </a></td>
        </tr>
        <div class="main_media_menu">
          <div><a><img src="../../../assets/icon/main_icon (1).png"
                   alt="" />
              <p>公司战略</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (2).png"
                   alt="" />
              <p>股权激励</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (3).png"
                   alt="" />
              <p>人力资源</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (4).png"
                   alt="" />
              <p>生产管理</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (5).png"
                   alt="" />
              <p>团队培训</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (6).png"
                   alt="" />
              <p>猎头服务</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (7).png"
                   alt="" />
              <p>公司法务</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (8).png"
                   alt="" />
              <p>私人律师</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (9).png"
                   alt="" />
              <p>纳瑞筹划</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (10).png"
                   alt="" />
              <p>外部审计</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (11).png"
                   alt="" />
              <p>行业研究</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (12).png"
                   alt="" />
              <p>品牌管理</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (13).png"
                   alt="" />
              <p>活动策划</p>
            </a></div>
          <div><a><img src="../../../assets/icon/main_icon (14).png"
                   alt="" />
              <p>专利布局</p>
            </a></div>
        </div>
      </table>
    </div>
    <section>
      <h1 class="fwgys_title">
        <span @click="changeIf1($event)">服务商库</span> & <span @click="changeIf2($event)">案例库</span>
      </h1>
      <div class="model">
        <li>
          <div>
            <h3>服务类型</h3>
            <span :class="flag==true?'bx1':'bx'"
                  @click="bxSub()">不限</span>
            <div class="w1264">
              <span v-for="(item,index) in title101"
                    :key="index"
                    :class="num1==index?'selected':''"
                    @click="changeColor1(index,item.dictItemId,item.itemName)">{{item.itemName}}</span>
            </div>
            <button class="more_media_btn"
                    @click="show_more_menu($event)"><img src="../../../assets/toleft.png"
                   alt=""></button>
          </div>
        </li>
        <li>
          <div>
            <h3>细分领域</h3>
            <span :class="xfflag==true?'bx1':'bx'"
                  @click="bxSub1()">不限</span>
            <div class="w1264">
              <span class="changeHides"
                    v-for="(item,index) in title202"
                    :key="index"
                    :class="num2==index?'selected':''"
                    @click="changeColor2(index,item.dictItemId,item.itemName)">{{item.itemName}}</span>
            </div>
            <button class="more_media_btn"
                    @click="show_more_menu2($event)"><img src="../../../assets/toleft.png"
                   alt=""></button>
          </div>
          <button class="more_btn"
                  @click="changeHides($event)">更多</button>
        </li>
        <li v-show="tableShow">
          <div style="width:1304px;">
            <h3>行业选择</h3>
            <span :class="hyFlag==true?'bx1':'bx'"
                  @click="bxSub2()">不限</span>
            <div class="w1264">
              <span class="changeHide"
                    v-for="(item,index) in title303"
                    :key="index"
                    :class="num3==index?'selected':''"
                    @click="changeColor3(index,item.dictItemId,item.itemName)">{{item.itemName}}</span>
            </div>
            <button class="more_media_btn"
                    @click="show_more_menu3($event)"><img src="../../../assets/toleft.png"
                   alt=""></button>
          </div>
          <button class="more_btn"
                  @click="changeHide($event)">更多</button>
        </li>
        <li v-show="tableShow&&isAlk==0">
          <div style="width:1304px;">
            <h3>行业细分</h3>
            <span :class="hyxfflag==true?'bx1':'bx'"
                  @click="bxSub4()">不限</span>
            <div class="w1264">
              <span class="changeHidese"
                    v-for="(item,index) in title404"
                    :key="index"
                    :class="num8==index?'selected':''"
                    @click="changeColor4(index,item.dictItemId,item.itemName)">{{item.itemName}}</span>
            </div>
            <button class="more_media_btn"
                    @click="show_more_menu4($event)"><img src="../../../assets/toleft.png"
                   alt=""></button>
          </div>
          <button class="more_btn"
                  @click="changeHidese($event)">更多</button>
        </li>
        <li v-show="!flag1&&tableShow">
          <div>
            <h3>案例评价</h3>
            <span :class="pjFlag==true?'bx1':'bx'"
                  @click="bxSub3()">不限</span>
            <div class="w1264">
              <span v-for="(item,index) in title4"
                    :key="index"
                    :class="num7==index?'selected':''"
                    @click="changeColor7(index)">{{item}}</span>
            </div>
          </div>
        </li>

      </div>
      <div class="model_div_more">
        <span class="model_more"
              @click="model_more($event)">
          <span v-show="tableShow">隐藏</span>
          <span v-show="!tableShow">更多</span>
          <img :class="{xz180:tableShow}"
               src="@/assets/imgs/more.png" />
        </span>
      </div>
      <div class="tabbar">
        <div>
          <span v-for="(item,index) in title5"
                :key="index"
                :class="num3==index?'title6selected':''"
                @click="changeColor5(index,$event)"
                v-if="flag2">{{item}}<img src="@/assets/imgs/jiantou.png"
                 alt="" /></span>
          <span v-for="(item,index) in title6"
                :key="index"
                :class="num6==index?'title6selected':''"
                @click="changeColor6(index,$event)"
                v-if="flag1">{{item}}<img src="@/assets/imgs/jiantou.png"
                 alt="" /></span>
        </div>
        <!-- <label>
                    <em>
                        <i></i>
                    </em>
                    仅显示非投放类需求
                </label> -->
      </div>
      <div class="media_tabbar">
        <template>
          <el-select v-model="value"
                     placeholder="请选择筛选条件">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </template>
      </div>
      <div class="put_info">
        <template v-for="item in providerList"
                  v-if="flag1">
          <div class="box_parent">
            <gysbox :box-url="{path:'./fwgys_alny',query:{id:item.splrId}}"
                    boxWidth=""
                    :box-name="item.splrName"
                    :imgURL="item.logo"
                    :box-star="0"
                    :box-tags="item.tagList"
                    :goodQuality="item.qualityRating"
                    :creditRating="item.creditRating"
                    :surveyCustomerList="item.surveyCustomerList"></gysbox>
          </div>
        </template>
        <template v-for="item in custSplrCaseList"
                  v-if="flag2">
          <div class="box_parent">
            <gysboxt :box-url="{path:'./fwgys_ny',query:{splrCaseId:item.caseId}}"
                     boxWidth=""
                     :box-name="item.projectName"
                     :splrName="item.splrName"
                     :imgURL="item.logo"
                     :box-star="0"
                     :box-tags="item.splrTagList"
                     :goodQuality="item.qualityRating"
                     :creditRating="item.creditRating"
                     :surveyCustomerList="item.surveyCustomerList"></gysboxt>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import gysbox from '../../public/供应商盒子'
import gysboxt from '../../public/供应商盒子2.vue'
import { getBusinessList, getBusinessTowList, hyList, htListChildren, getProviderList, getSplrCase, getFertileSplrList } from '../../api/api'
export default {
  name: 'all_projects',
  data () {
    return {
      title1: ["管理咨询", "培训服务", "猎头服务", "法律咨询", "财税咨询", "市场研究", "营销策划", "知识产权", "知识产权", "知识产权", "管理咨询", "培训服务", "猎头服务", "法律咨询", "财税咨询", "市场研究", "营销策划", "知识产权", "知识产权", "知识产权", "其他"],
      title2: ["公司战略你妹", "企业文化你姐", "商业模式你把", "组织变革你妈", "企业改革你也", "企业改革你也", "企业改革你也", "股权激励", "管理体系", "人力资源", "生产管理", "成本控制", "成本控制", "公司战略", "企业文化", "商业模式", "组织变革", "企业改革", "股权激励", "管理体系", "人力资源", "生产管理", "成本控制", "成本控制"],
      title3: ["一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别", "一级行业类别"],
      title4: ["经典", "优秀", "良好", "一般"],
      title5: ["默认", "案例评价"],
      title6: ["默认", "成交量", "成交金额", "服务优质率", "信用等级"],
      num1: -1,
      num2: -1,
      num3: -1,
      num4: -1,
      num5: -1,
      num5Value: false,
      num5Value2: false,
      num6: 0,
      num6Value: false,
      num6Value2: false,
      num6Value3: false,
      num6Value4: false,
      num6Value5: false,
      num7: -1,
      num8: -1,
      flag: false,
      xfflag: false,
      hyFlag: false,
      hyxfflag: false,
      pjFlag: false,
      flag1: true,
      flag2: false,
      title101: "",
      title202: "",
      title303: "",
      title404: "",
      providerList: '',
      custSplrCaseList: '',
      //media screen在415时的菜单下标
      activeIndex: '1',
      options: [
        { value: '选项1', label: '综合' },
        { value: '选项2', label: '成交量' },
        { value: '选项3', label: '成交金额' },
        { value: '选项4', label: '服务优质率' },
        { value: '选项5', label: '信用等级' }
      ],
      value: '',
      tableShow: false,
      creditRating: {
        startNumber: [],
        mountNumber: [],
        sunNumber: [],
      },
      subIndustry: "",
      industryDetail: "",
      businessType: "",
      businessDetail: "",
      fwskAndAlk: 0,
      isAlk: 0,
    }
  },
  components: {
    gysbox,
    gysboxt
  },
  created () {
    this.$emit('select', 2),
    this.getBusinessList(),
    this.getBusinessTowList(),
    this.getHy(),
    this.getProviderList(),
    this.htListChildren();
  },
  methods: {
    //行业细分
    htListChildren () {
      htListChildren({ itemId: null }).then(res => {
        if (res.data.code === 200) {
          this.title404 = res.data.data
        }
      })
    },
    getProviderList () {
      getFertileSplrList().then(res => {
        if (res.data.code === 200) {
          this.providerList = res.data.data
        }
      })
    },
    changeHides (e) {
      var eHtml = e.target.innerHTML;
      var arr = document.getElementsByClassName("changeHides")
      if (eHtml == "更多") {
        for (var i = 11; i < arr.length - 1; i++) {
          arr[i].style.display = "block"
        }
        e.target.innerHTML = "隐藏"
      } else if (eHtml == "隐藏") {
        for (var i = 11; i < arr.length - 1; i++) {
          arr[i].style.display = "none"
        }
        e.target.innerHTML = "更多"
      }
    },
    changeHide (e) {
      var eHtml = e.target.innerHTML;
      var arr = document.getElementsByClassName("changeHide")
      if (eHtml == "更多") {
        for (var i = 6; i < arr.length - 1; i++) {
          arr[i].style.display = "block"
        }
        e.target.innerHTML = "隐藏"
      } else if (eHtml == "隐藏") {
        for (var i = 6; i < arr.length - 1; i++) {
          arr[i].style.display = "none"
        }
        e.target.innerHTML = "更多"
      }
    },
    changeHidese (e) {
      var eHtml = e.target.innerHTML;
      var arr = document.getElementsByClassName("changeHidese")
      if (eHtml == "更多") {
        for (var i = 6; i < arr.length - 1; i++) {
          arr[i].style.display = "block"
        }
        e.target.innerHTML = "隐藏"
      } else if (eHtml == "隐藏") {
        for (var i = 6; i < arr.length - 1; i++) {
          arr[i].style.display = "none"
        }
        e.target.innerHTML = "更多"
      }
    },
    bxSub () {
      this.flag = false;
      this.xfflag = false;
      this.hyFlag = false;
      this.hyxfflag = false;
      this.pjFlag = false;
      this.num1 = -1;
      this.num2 = -1;
      this.num3 = -1;
      this.num7 = -1;
      this.num8 = -1;
      getFertileSplrList({ "subIndustry": "", "industryDetail": "", "businessType": "", "businessDetail": "" }).then(res => {
        if (res.data.code === 200) {
          this.providerList = res.data.data
        }
      })
    },
    bxSub1 () {
      this.xfflag = false;
      this.hyFlag = false;
      this.hyxfflag = false;
      this.pjFlag = false;
      // this.num1=-1;
      this.num2 = -1;
      this.num3 = -1;
      this.num7 = -1;
      this.num8 = -1;
      getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": "", "businessType": "", "businessDetail": "" }).then(res => {
        if (res.data.code === 200) {
          this.providerList = res.data.data
        }
      })
    },
    //行业不限
    bxSub2 () {
      this.hyFlag = false;
      this.hyxfflag = false;
      this.pjFlag = false;
      this.num3 = -1;
      this.num7 = -1;
      this.num8 = -1;
      this.businessType=""
      getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": "", "businessDetail": "" }).then(res => {
        if (res.data.code === 200) {
          this.providerList = res.data.data
        }
      })
    },
    bxSub4 () {
      this.hyxfflag = false;
      this.num8 = -1;
      getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": "" }).then(res => {
        if (res.data.code === 200) {
          this.providerList = res.data.data
        }
      })
    },
    //评价
    bxSub3 () {
      this.pjFlag = false;
      this.num7 = -1;
    },
    getBusinessList () {
      getBusinessList().then(res => {
        this.title101 = res.data.data
      })
    },
    getHy () {
      hyList().then(res => {
        if (res.data.code === 200) {
          this.title303 = res.data.data;
        }
      })
    },
    getBusinessTowList () {
      getBusinessTowList({ itemId: null }).then(res => {
        if (res.data.code === 200) {
          this.title202 = res.data.data
        }
      })
    },
    //点击一行
    changeColor1 (index, e, name) {
      this.num1 = index;
      this.num2 = -1;
      //点击对应的根据模糊匹配对应字段
      this.flag = true;
      this.xfflag = false;
      getBusinessTowList({ itemId: e }).then(res => {
        if (res.data.code === 200) {
          this.title202 = res.data.data;
        }
      })
      this.subIndustry = name;
      if (this.fwskAndAlk == 0) {
        getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      } else {
        getSplrCase({ "subIndustry": this.businessType, "industryDetail": this.subIndustry, "businessType": this.industryDetail, "businessDetail": this.businessDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      }

    },
    changeColor2 (index, e, name) {
      this.num2 = index;
      this.xfflag = true;
      this.industryDetail = name;
      if (this.fwskAndAlk == 0) {
        getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      } else {
        getSplrCase({ "subIndustry": this.businessType, "industryDetail": this.subIndustry, "businessType": this.industryDetail, "businessDetail": this.businessDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      }
    },
    changeColor3 (index, e, name) {
      this.num3 = index;
      this.num8 = -1;
      //点击对应的匹配
      this.hyFlag = true;
      this.hyxfflag = false;
      htListChildren({ itemId: e }).then(res => {
        if (res.data.code === 200) {
          this.title404 = res.data.data;
        }
      })
      this.businessType = name;
      if (this.fwskAndAlk == 0) {
        getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      } else {
        getSplrCase({ "subIndustry": this.businessType, "industryDetail": this.subIndustry, "businessType": this.industryDetail, "businessDetail": this.businessDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      }
    },
    changeColor4 (index, e, name) {
      this.num8 = index;
      this.hyxfflag = true;
      this.businessDetail = name;
      if (this.fwskAndAlk == 0) {
        getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      } else {
        getSplrCase({ "subIndustry": this.businessType, "industryDetail": this.subIndustry, "businessType": this.industryDetail, "businessDetail": this.businessDetail }).then(res => {
          if (res.data.code === 200) {
            this.providerList = res.data.data
          }
        })
      }
    },
    changeColor5 (index, e) {
      switch (index) {
        case 0:
          getSplrCase({ "subIndustry": this.businessType, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 0, "order": this.num5Value }).then(res => {
            if (res.data.code === 200) {
              this.custSplrCaseList = res.data.data
            }
          })
          if (this.num5Value == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num5Value = !this.num5Value
          break;
        case 1:
          getSplrCase({ "subIndustry": this.businessType, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 1, "order": this.num5Value2 }).then(res => {
            if (res.data.code === 200) {
              this.custSplrCaseList = res.data.data
            }
          })
          if (this.num5Value2 == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num5Value2 = !this.num5Value2

          break;

        default:
          break;
      }
      this.num3 = index;
    },
    changeColor6 (index, e) {
      switch (index) {
        case 0:
          getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 0, "order": this.num6Value }).then(res => {
            if (res.data.code === 200) {
              this.providerList = res.data.data
            }
          })
          if (this.num6Value == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num6Value = !this.num6Value
          break;
        case 1:
          getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 1, "order": this.num6Value2 }).then(res => {
            if (res.data.code === 200) {
              this.providerList = res.data.data
            }
          })
          if (this.num6Value2 == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num6Value2 = !this.num6Value2

          break;
        case 2:
          getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 2, "order": this.num6Value3 }).then(res => {
            if (res.data.code === 200) {
              this.providerList = res.data.data
            }
          })
          if (this.num6Value3 == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num6Value3 = !this.num6Value3

          break;
        case 3:
          getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 3, "order": this.num6Value4 }).then(res => {
            if (res.data.code === 200) {
              this.providerList = res.data.data
            }
          })
          if (this.num6Value4 == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num6Value4 = !this.num6Value4

          break;
        case 4:
          getFertileSplrList({ "subIndustry": this.businessType, "industryDetail": this.businessDetail, "businessType": this.subIndustry, "businessDetail": this.industryDetail, "field": 4, "order": this.num6Value5 }).then(res => {
            if (res.data.code === 200) {
              this.providerList = res.data.data
            }
          })
          if (this.num6Value5 == false) {
            e.target.children[0].style.transform = "rotate(180deg) translateY(-2px)"
          } else {
            e.target.children[0].style.transform = "translateY(2px)"
          }
          this.num6Value5 = !this.num6Value5

          break;

        default:
          break;
      }
      this.num6 = index;
    },
    changeColor7 (index) {
      this.num7 = index;
      this.pjFlag = true
    },
    Initialization () {   //初始化
      this.num1 = -1;
      this.num2 = -1;
      this.num3 = -1;
      this.num4 = -1;
      this.num5 = -1;
      this.flag = false;
      this.xfflag = false;
      this.hyFlag = false;
      this.hyxfflag = false;
      this.pjFlag = false;
    },
    changeIf1 (e) {
      this.flag1 = true;
      this.flag2 = false;
      this.fwskAndAlk = 0;
      this.isAlk = 0;
      this.Initialization();
      e.target.nextElementSibling.style.color = "#000";
      e.target.style.color = "#9E0100";
    },
    changeIf2 (e) {
      this.flag1 = false;
      this.flag2 = true;
      this.fwskAndAlk = 1;
      this.isAlk = 1;
      this.Initialization();
      //请求数据接口
      getSplrCase().then(res => {
        if (res.data.code === 200) {
          this.custSplrCaseList = res.data.data;
        }
      })
      e.target.previousElementSibling.style.color = "#000";
      e.target.style.color = "#9E0100";
    },
    show_more_menu (e) {
      if (e.currentTarget.parentElement.style.height != "auto") {
        e.currentTarget.parentElement.style.height = "auto"
        e.currentTarget.previousElementSibling.style.height = "auto"
        e.target.style.transform = "rotate(92deg)"
      } else {
        e.currentTarget.parentElement.style.height = "35px"
        e.currentTarget.previousElementSibling.style.height = "35px"
        e.target.style.transform = "rotate(-92deg)"
      }
    },
    show_more_menu2 (e) {
      if (e.currentTarget.parentElement.style.height != "auto") {
        e.currentTarget.parentElement.style.height = "auto"
        e.currentTarget.previousElementSibling.style.height = "auto"
        e.target.style.transform = "rotate(92deg)"
      } else {
        e.currentTarget.parentElement.style.height = "35px"
        e.currentTarget.previousElementSibling.style.height = "35px"
        e.target.style.transform = "rotate(-92deg)"
      }
    },
    show_more_menu3 (e) {
      if (e.currentTarget.parentElement.style.height != "auto") {
        e.currentTarget.parentElement.style.height = "auto"
        e.currentTarget.previousElementSibling.style.height = "auto"
        e.target.style.transform = "rotate(92deg)"
      } else {
        e.currentTarget.parentElement.style.height = "35px"
        e.currentTarget.previousElementSibling.style.height = "35px"
        e.target.style.transform = "rotate(-92deg)"
      }
    },
    show_more_menu4 (e) {
      if (e.currentTarget.parentElement.style.height != "auto") {
        e.currentTarget.parentElement.style.height = "auto"
        e.currentTarget.previousElementSibling.style.height = "auto"
        e.target.style.transform = "rotate(92deg)"
      } else {
        e.currentTarget.parentElement.style.height = "35px"
        e.currentTarget.previousElementSibling.style.height = "35px"
        e.target.style.transform = "rotate(-92deg)"
      }
    },
    //media screen 415 菜单点击
    handleSelect (key, keyPath) {

    },
    model_more (e) {
      this.tableShow = !this.tableShow;
    }
  },
  mounted () {

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xz180 {
  transform: rotate(180deg);
  position: relative;
  top: -2px;
}

.内容 {
  width: 100%;
  background-color: #fafafa;
}
a {
  color: #666666;
}
body {
  background: #fff;
}
.banner {
  width: 100%;
  height: 361px;
  background-image: url(../../../assets/imgs/fabubanner.png);
  /* background-size: 100%; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
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
.main_menu_all {
  width: 100%;
  height: auto;
  background: #fff;
  padding-bottom: 2px;
  padding-top: 2px;
  box-sizing: border-box;
}
.main_menu {
  width: auto;
  margin: 60px auto;
  border-collapse: collapse;
  background: #fff;
}
.main_menu td {
  border: 1px solid #ebebeb;
  width: 200px;
  height: 186px;
}
.main_menu td a {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  padding-top: 45px;
  text-align: center;
  user-select: none;
}
.main_menu td a:hover:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid #9e0100;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
}
.main_menu td p {
  margin-top: 5px;
  font-size: 20px;
  color: #5a5a5a;
}
section {
  width: 73%;
  margin: 0 auto;
}
section > .fwgys_title {
  text-align: center;
  padding: 30px 0;
  font-size: 28px;
  user-select: none;
}
section > .fwgys_title > span {
  cursor: pointer;
  user-select: none;
}
section > .fwgys_title > span:hover {
  color: #9e0100;
}
section > .fwgys_title > span:first-child {
  color: #9e0100;
}
section .model li h3 {
  width: 120px;
  height: 35px;
  line-height: 35px;
  background-color: #ededed;
  font-size: 16px;
  color: #4a4a4a;
  text-align: center;
}
section .model {
  height: auto;
  overflow: hidden;
  transition: height 5s linear;
}
section .model li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}
section .model li div {
  width: 100%;
  display: flex;
  position: relative;
}
section .model li span {
  text-align: center;
  margin: 0;
  margin-right: 32px;
  user-select: none;
}
.bx {
  color: #9e0100;
  display: inline-block;
  width: 96px;
  line-height: 40px;
  font-size: 16px;
}
.bx1 {
  display: inline-block;
  width: 96px;
  line-height: 40px;
  font-size: 16px;
}

section .model li span:hover {
  color: #9e0100;
  cursor: pointer;
}
section .model li a {
  width: 65px;
  height: 25px;
  background-color: #e8e8e8;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  color: #949494;
}
section .model_div_more {
  margin-bottom: 55px;
  border-top: 1px solid #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
section .model_div_more .model_more {
  display: block;
  width: 60px;
  height: 25px;
  text-align: center;
  border: 1px solid #dddddd;
  border-top: 1px solid #fafafa;
  position: relative;
  top: -1px;
  color: #4a4a4a;
  padding-right: 10px;
  cursor: pointer;
}
.model_more img {
  margin-left: 4px;
  position: absolute;
  top: calc((100% - 8px) / 2);
}
.model_more > span {
  user-select: none;
  font-size: 14px;
}
section .tabbar {
  height: 40px;
  background: #9e0100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  color: #fff;
  margin-bottom: 47px;
}
section .tabbar > div {
  display: flex;
  align-items: center;
}
section .tabbar span {
  display: block;
  margin-right: 50px;
  opacity: 0.7;
  font-size: 16px;
}
section .tabbar span:hover {
  opacity: 1;
  cursor: pointer;
}
section .tabbar span.selected {
  opacity: 1;
  color: #9e0100 !important;
}
section .tabbar > div img {
  transform: translateY(1px);
  margin-left: 12px;
}
section .put_info {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.put_info > div {
  display: inline-block;
}
.box_parent {
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.w1264 {
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.w1264 > .selected {
  color: #9e0100;
}
.w1264 > span {
  line-height: 40px;
}
.changeHide:nth-child(n + 7) {
  display: none;
}
.changeHides:nth-child(n + 11) {
  display: none;
}
.changeHidese:nth-child(n + 11) {
  display: none;
}
.main_media_menu {
  display: none;
}
.more_media_btn {
  display: none;
}
.media_tabbar {
  display: none;
}
.more_btn {
  border: 1px solid #fafafa;
  background-color:#dfdfdf;
  color: #666666;
  width: 100px;
  min-width: 45px;
  line-height: 38px;
  height: 38px;
  box-sizing: border-box;
  cursor: pointer;
}
.title6selected {
  color: #fff;
  opacity: 1 !important;
}
</style>