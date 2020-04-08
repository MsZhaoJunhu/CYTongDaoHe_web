<template>
  <div class="内容">
    <header_ :select_index="0" />
    <xfc></xfc>
    <!-- 轮播图 -->
    <el-row class="index_banner headerswiper" type="flex" justify="center" align="middle">
      <el-col :span="24">
        <el-carousel>
          <el-carousel-item v-for="item in bannerArrTop"
                            :key="item">
            <img :src="item"
                 alt="">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="24" class="index_banner_bottom">
        <el-row class="index_banner_bottom_all" type="flex" justify="center" align="middle">
          <el-col :span="2" class="index_banner_bottom_title">
            <p>
              <span>大</span>
              <span>数</span>
              <span>据</span>
              <span>搜</span>
              <span>索</span>
            </p>
            <p>
              <span>即</span>
              <span>刻</span>
              <span>搜</span>
              <span>寻</span>
              <span>您</span>
              <span>所</span>
              <span>需</span>
              <span>内</span>
              <span>容</span>
            </p>
          </el-col>
          <el-col :span="12" class="index_banner_bottom_content">
            <div class="index_banner_bottom_content_searchInputAll">
              <input type="text"
                     v-model="searchInputInnerHtml"
                     id="index_banner_bottom_content_input_search"
                     placeholder="请输入您要搜索的内容">
              <div>
                <img src="../assets/icon/indexSearch.png"
                     alt="">
              </div>
            </div>
            <ul class="index_banner_bottom_content_ul"
                @click="clickChangeInputInnerHtml($event)">
              <span>热门搜索</span>
              <li>管理咨询</li>
              <li>财税管理</li>
              <li>法律咨询</li>
              <li>知识产权</li>
            </ul>
            <img src="../assets/icon/indexClose.png" @click="closeIndexSearch" class="index_banner_bottom_closeImg">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="18"
              class="new_index_menu_section">
        <div class="index_menu_all">
          <div v-for="(item,key) in firstClass"
               :key="key"
               :class="topIconIndex==key?'new_menu_icon_div':''"
               @click="clickChangeColorAndImg($event,key,item.itemCode)">
            <img :src="item.itemValue1"
                 :class="topIconIndex==key?'new_menu_icon_div_img':'new_menu_icon_div_img_none'"
                 alt="">
            <img :src="item.itemValue2"
                 :class="topIconIndex==key?'new_menu_icon_div_img_none':'new_menu_icon_div_img'"
                 alt="">
            <p>{{item.itemName}}</p>
          </div>
        </div>
        <div id="index_all_menu_icon">
          <div class="index_secend_menu_all">
            <div class="index_secend_menu_all_content"
                 v-for="(item,k) in secendWidthChild"
                 :key="k">
              <div>
                <span>{{item.itemName}}</span>
              </div>
              <div>
                <ul>
                  <li v-for="(itemChild,index) in item.child"
                      :key="index">{{itemChild.itemName}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="index_secend_icon_all">
            <div>
              <img src="../assets/icon/ggw01.png"
                   alt="">
            </div>
            <div>
              <img src="../assets/icon/ggw02.png"
                   alt="">
            </div>
            <div>
              <img src="../assets/icon/ggw03.png"
                   alt="">
            </div>
            <div>
              <img src="../assets/icon/ggw04.png"
                   alt="">
            </div>
            <div>
              <img src="../assets/icon/ggw05.png"
                   alt="">
            </div>
            <div>
              <img src="../assets/icon/ggw06.png"
                   alt="">
            </div>
          </div>
        </div>
        <div @click="clickChange($event)"
             class="unfold">
          <div :class="{'unfold2':new_index_button}">∟</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="new_index_personNumber_all">
      <div class="new_index_personNumber_content">
        <div>
          <number-scroll-component v-bind:number="attendanceNumber"
                                   :maxlen="4"
                                   :n="2"></number-scroll-component>
          <p>注册用户</p>
        </div>
        <div>
          <number-scroll-componenttt v-bind:number="serviceProvider"
                                     :maxlen="3"
                                     :n="3">
          </number-scroll-componenttt>
          <p>服务供应商</p>
        </div>
        <div>
          <number-scroll-componenttt v-bind:number="projectNumber"
                                     :maxlen="3"
                                     :n="5">
          </number-scroll-componenttt>
          <p>项目数</p>
        </div>
        <div>
          <number-scroll-componentt v-bind:number="contractAmount"
                                    :maxlen="8"
                                    :n="35256">
          </number-scroll-componentt>
          <p>合同金额</p>
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic">
      <div class="new_index_content_all">
        <div class="new_index_content_all_title">
          <h3>需求动态</h3>
          <p>动态需求互联 供需精准对接</p>
        </div>
        <div class="new_index_demand_dynamic_content">
          <table>
            <tr>
              <td v-for="(item,k) in ProjList"
                  :key="k">
                <router-link :to="{path:'/zyfw/my_projects_require',query:{id:item.projId}}">
                  <div>
                    <span>{{item.businessType+item.field||'暂无'}}</span>
                    <span style="border-radius: 2px;height: 20px;line-height: 20px;"
                          :style="{background:colors[k]}">{{item.field||'暂无'}}</span>
                  </div>
                  <div>
                    <span>项目预算:</span>
                    <span style="font-weight:700">￥{{+item.costBudget||'待商议'}}</span>
                  </div>
                </router-link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic"
            style="position:relative;padding-bottom: 120px;">
      <div class="new_index_content_all"
           style="position:relative;overflow:hidden;">
        <div class="new_index_content_all_title">
          <h3>优质服务商</h3>
          <p>同道合官方合作伙伴</p>
        </div>
        <div class="mew_index_good_store_person_all"
             style="position:relative">
          <div class="mew_index_good_store_person_content_left">
            <div class="mew_index_good_store_person_content_left_bottomDiv"></div>
            <img src="../assets/icon/GoodStoePersonBottom.png" class="mew_index_good_store_person_content_left_bottomImg">
            <div class="mew_index_good_store_person_content_left_middle">
              <div v-for="(item,k) in providerLists" :key="k" @click="mouseEnterChange($event,k)">
                <img :src="item.logo" style="pointer-events: none;">
              </div>
            </div>
            <div class="mew_index_good_store_person_content_left_top">
              <img :src="providerListContents.logo" class="mew_index_good_store_person_content_left_top_img">
            </div>
          </div>
          <transition name="fade">
            <div class="mew_index_good_store_person_content_right mew_index_good_store_person_content_right_tr3"
                 ref="myAnimate"
                 :class="show==true?'animated slideInRight':''">
              <div class="mew_index_good_store_person_content_right_title">
                <img :src="providerListContents.logo">
                <span>{{providerListContents.splrName}}</span>
              </div>
              <p class="mew_index_good_store_person_content_right_word">
                {{providerListContents.enterpriceIntro}}
              </p>
              <div class="mew_index_good_store_person_content_right_content_yzl ">
                <div class="mew_index_good_store_person_content_right_content_yzl_nr">
                  <div>
                    <p>服务项目</p>
                    <p>
                      <span style="font-weight:700">9</span>
                      <span>个</span>
                    </p>
                  </div>
                  <div>
                    <p>服务优质率</p>
                    <p>
                      <span style="font-weight:700">{{providerListContents.qualityRating}}</span>
                      <span>%</span>
                    </p>
                  </div>
                </div>
                <router-link :to="{path:'/fwgys/fwgys_alny',query:{'id':providerListContents.splrId}}">
                  <span>了解{{providerListContents.splrName}}</span>
                  <span>&gt;</span>
                </router-link>
                <button @click="submitXQYz">定向发布</button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic"
            style="background:#f6f6f6">
      <div class="new_index_content_all">
        <div class="new_index_content_all_title">
          <h3>经典案例</h3>
          <p>云集各领域经典案例 满足企业全方位需要</p>
        </div>
      </div>
      <div class="new_index_content_content_jdal">
        <div class="new_index_content_content_jdal_content backgroundsize"
             v-for="(item,k) in custSplrCaseList"
             :key="k"
             @click="routerLinkToAlkNy(item.caseId)"
             :style="{background: 'url('+ jdProListImgs[k] +')',backgroundSize:'100% 480px' ,backgroundRepeat: 'no-repeat' }">
          <div class="new_index_content_content_jdal_content_al">
            <p>{{item.projectName}}</p>
            <div>
              <div>
                <img :src="personHeaderLink[0]"
                     alt="">
              </div>
              <span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
                    :title="item.splrName">{{item.splrName}}</span>
            </div>
            <div>
              <span v-for="(itemChild,index) in item.splrTagList"
                    :key="index"
                    v-if="itemChild!=''">{{itemChild}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic new_index_chat_dongtai_background"
            style="padding-bottom: 50px;">
      <div class="new_index_content_all">
        <div class="new_index_content_all_title">
          <h3 style="color:#fff;">资讯动态</h3>
          <p>海量资讯汇聚 信息动态呈现</p>
        </div>
      </div>
      <div class="new_index_chat_dongtai_all">
        <div class="new_index_chat_dongtai_all_swiper">
          <!-- 轮播 -->
          <el-carousel class="myCarousel">
            <el-carousel-item v-for="(item,key) in changeOnePCaseList1"
                              :key="key">
              <img src="../assets/imgs/newsBanner1.jpg"
                   style="width:100%;height:100%;cursor:pointer;"
                   alt=""
                   @click="routerLinkToNewsNy(item.newsId,item.newsType)">
              <span class="new_index_chat_dongtai_all_swiper_title"
                    style="cursor:pointer;"
                    @click="routerLinkToNewsNy(item.newsId,item.newsType)">{{item.newsTitle}}</span>
            </el-carousel-item>
          </el-carousel>
          <!-- <span class="new_index_chat_dongtai_all_swiper_title">标题标题标题标题</span> -->
        </div>
        <div class="new_index_chat_dongtai_all_right_content">
          <div class="new_index_chat_dongtai_all_right_content_all"
               v-for="(item,i) in changeOnePCaseList2"
               :key="i"
               @click="routerLinkToNewsNy(item.newsId,item.newsType)">
            <div class="new_index_chat_dongtai_all_right_content_img">
              <img src="../assets/imgs/xy_06.png"
                   alt="">
            </div>
            <div class="new_index_chat_dongtai_all_right_content_title">
              <p>{{item.newsTitle}}</p>
              <p>{{changeOnePCaseList2[i].newsContent}}</p>
              <!-- 小图标 -->
              <div class="new_index_chat_dongtai_all_right_content_title_icon">
                <div>
                  <img src="../assets/icon/newIndexNewsIcon1.png"
                       alt="">
                  <span>{{item.visitorNumber}}</span>
                </div>
                <div>
                  <img src="../assets/icon/newIndexNewsIcon2.png"
                       alt="">
                  <span>896</span>
                </div>
                <div>
                  <img src="../assets/icon/newIndexNewsIcon3.png"
                       alt="">
                  <span>{{item.newsDt}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new_index_button_swiper_all">
        <button class="new_index_button_swiper"
                @click="changeOneP">
          <span>换一批</span>
          <img src="../assets/icon/buttonShuffle.png"
               alt="">
        </button>
      </div>
    </el-row>
    <!-- <el-row style="padding-bottom:50px"
            class="new_index_demand_dynamic">
      <div class="new_index_content_all">
        <div class="new_index_content_all_title"
             style="padding:40px 0 0 0;">
          <h3>活动/招商报名</h3>
          <p>商机活力无限 报名一步到位</p>
        </div>
        <div class="new_index_content_active_baoming_swiper">
          <el-carousel height="540px"
                       width="100%">
            <el-carousel-item v-for="item in 4"
                              :key="item">
              <div class="new_index_content_active_baoming">
                <div>
                  <img src="../assets/icon/newIndexActive1.png"
                       style="width:100%;"
                       alt="">
                  <p>活动标题</p>
                  <p>2019.04.15--2019.04.22</p>
                  <p>活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题</p>
                  <div class="new_index_content_active_baoming_button">
                    <router-link tag="button"
                                 :to="{path:'/signUpContent'}">查看详情</router-link>
                    <router-link tag="button"
                                 :to="{path:'/signUp',query:{'newsId':6}}">立即报名</router-link>
                  </div>
                </div>
              </div>
              <div class="new_index_content_active_baoming">
                <div>
                  <img src="../assets/icon/newIndexActive2.png"
                       style="width:100%;"
                       alt="">
                  <p>活动标题</p>
                  <p>2019.04.15--2019.04.22</p>
                  <p>活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题</p>
                  <div class="new_index_content_active_baoming_button">
                    <router-link tag="button"
                                 :to="{path:'/signUpContent'}">查看详情</router-link>
                    <router-link tag="button"
                                 :to="{path:'/signUp',query:{'newsId':6}}">立即报名</router-link>
                  </div>
                </div>
              </div>
              <div class="new_index_content_active_baoming">
                <div>
                  <img src="../assets/icon/newIndexActive3.png"
                       style="width:100%;"
                       alt="">
                  <p>活动标题</p>
                  <p>2019.04.15--2019.04.22</p>
                  <p>活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题</p>
                  <div class="new_index_content_active_baoming_button">
                    <button>查看详情</button>
                    <button>立即报名</button>
                  </div>
                </div>
              </div>
              <div class="new_index_content_active_baoming">
                <div>
                  <img src="../assets/icon/newIndexActive4.png"
                       style="width:100%;"
                       alt="">
                  <p>活动标题</p>
                  <p>2019.04.15--2019.04.22</p>
                  <p>活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动标题</p>
                  <div class="new_index_content_active_baoming_button">
                    <router-link tag="button"
                                 :to="{path:'/signUpContent'}">查看详情</router-link>
                    <router-link tag="button"
                                 :to="{path:'/signUp',query:{'newsId':6}}">立即报名</router-link>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-row> -->
    <el-row style="background:#f6f6f6;padding-bottom:50px"
            class="new_index_demand_dynamic">
      <div class="new_index_content_all_title">
        <h3>专家智库</h3>
        <p>智力资源聚合 专家智慧共享</p>
      </div>
      <div class="new_index_expert_think_tank">
        <div v-for="(item,k) in getProfsListNewList"
             :key="k">
          <div class="new_index_expert_think_tank_content">
            <span>{{item.profName}}</span>
            <p>{{item.profHonor}}</p>
            <p>{{item.profAchieve}},{{item.profResume}}</p>
            <button @click="routerLinkToZhuanJZK(item.profId)">MORE</button>
          </div>
          <div>
            <img :src="item.profAvatar"
                 alt="">
          </div>
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic"
            style="paddingBottom:80px;">
      <div class="new_index_content_all_title">
        <h3>服务流程</h3>
        <p>SERVICE PROCESS</p>
      </div>
      <div class="new_index_content_all_fuwuliucheng">
        <div @mouseenter="changeNthChildP($event)"
             @mouseleave="changeNthChildPL($event)">
          <img src="../assets/take_a_note_2.png"
               alt="">
          <!-- 身后伪元素也是hover时触发 -->
          <p>需求发布</p>
          <!-- 鼠标进入时显示 -->
          <!-- <p>需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述</p> -->
        </div>
        <div @mouseenter="changeNthChildP($event)"
             @mouseleave="changeNthChildPL($event)">
          <img src="../assets/take_a_note_22.png"
               alt="">
          <!-- 身后伪元素也是hover时触发 -->
          <p>精准对接</p>
          <!-- 鼠标进入时显示 -->
          <!-- <p>需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述</p> -->
        </div>
        <div @mouseenter="changeNthChildP($event)"
             @mouseleave="changeNthChildPL($event)">
          <img src="../assets/take_a_note_23.png"
               alt="">
          <!-- 身后伪元素也是hover时触发 -->
          <p>交易达成</p>
          <!-- 鼠标进入时显示 -->
          <!-- <p>需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述</p> -->
        </div>
        <div @mouseenter="changeNthChildP($event)"
             @mouseleave="changeNthChildPL($event)">
          <img src="../assets/take_a_note_24.png"
               alt="">
          <!-- 身后伪元素也是hover时触发 -->
          <p>专业服务</p>
          <!-- 鼠标进入时显示 -->
          <!-- <p>需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述</p> -->
        </div>
        <div @mouseenter="changeNthChildP($event)"
             @mouseleave="changeNthChildPL($event)">
          <img src="../assets/take_a_note_25.png"
               alt="">
          <!-- 身后伪元素也是hover时触发 -->
          <p>服务监理</p>
          <!-- 鼠标进入时显示 -->
          <!-- <p>需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述</p> -->
        </div>
        <div @mouseenter="changeNthChildP($event)"
             @mouseleave="changeNthChildPL($event)">
          <img src="../assets/take_a_note_26.png"
               alt="">
          <!-- 身后伪元素也是hover时触发 -->
          <p>服务结项</p>
          <!-- 鼠标进入时显示 -->
          <!-- <p>需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述需求发布的简要概述</p> -->
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic new_index_demand_zhuanyebaozhang"
            style="paddingBottom:80px;">
      <div class="new_index_content_all_title">
        <h3 style="color:#fff;">专业保障</h3>
        <p>PROFESSIONAL GUARANTEE</p>
      </div>
      <div class="new_index_demand_zhuanyebaozhang_content">
        <div class="trans">
          <img src="../assets/icon/newIndexZhuanYeBaoZhangSearch.png"
               alt="">
          <p>服务商甄选</p>
          <p>平台依靠海量的专业服务供应商数据库，通过专业筛选、资质甄选、行业匹配，保证为客户推荐最适合的专业服务供应商。</p>
        </div>
        <div class="trans">
          <img src="../assets/icon/newIndexZhuanYeBaoZhangSearch.png"
               alt="">
          <p>PMA模式</p>
          <p>平台对需求分析、服务交易、专业服务、服务评价、服务反馈、费用支付等过程环节进行全面监管。</p>
        </div>
        <div class="trans">
          <img src="../assets/icon/newIndexZhuanYeBaoZhangSearch.png"
               alt="">
          <p>服务费用托管</p>
          <p>平台用户支付的服务费用由第三方托管，平台根据服务进度向专业服务供应商支付费用，保证用户资金安全，保障专业服务供应商合理权益。</p>
        </div>
        <div class="trans">
          <img src="../assets/icon/newIndexZhuanYeBaoZhangSearch.png"
               alt="">
          <p>全面应用体系</p>
          <p>平台设置诚信分、诚信保证金、履约保证金、信用等级，以完善的管理规则和服务协议为基础，对平台用户不诚信的行为进行处罚，展示用户信用优劣，警示交易风险。</p>
        </div>
        <div class="trans">
          <img src="../assets/icon/newIndexZhuanYeBaoZhangSearch.png"
               alt="">
          <p>服务商评价</p>
          <p>平台设置服务优质率，由客户对专业服务供应商项目服务质量进行评价，通过固定的计算公式生成服务优质率，帮助客户在甄选决策过程中更加高效，并形成优胜劣汰机制。</p>
        </div>
        <div class="trans">
          <img src="../assets/icon/newIndexZhuanYeBaoZhangSearch.png"
               alt="">
          <p>专家组评审</p>
          <p>平台对于服务成果的争议及纠纷，由三人专家组通过客观、公正、专业的评定标准，采用一审终审的评审方式，解决争议纠纷。</p>
        </div>
      </div>
    </el-row>
    <el-row class="new_index_demand_dynamic"
            style="paddingBottom:80px;">
      <div class="new_index_content_all_title">
        <h3>企业会员&战略合作伙伴</h3>
        <p>合作共享 务实创新 协同共生 互助成长</p>
      </div>
      <div class="nwe_index_content_qyhy_huoban">
        <div v-for="item in providerList">
          <router-link :to="{path:'/fwgys/fwgys_alny',query:{id:item.splrId}}">
            <img :src="item.logo" />
          </router-link>
        </div>
        <div v-for="item in custCorpList">
          <router-link :to="{path:'company/company_int',query:{id:item.corpId}}">
            <img :src="item.logo" />
          </router-link>
        </div>
      </div>
    </el-row>
    <el-row style="background:#fafafa;">
      <section class="khjz"
               style="background:#fafafa;">
        <div class="fwnr_title">
          <h3>客户见证</h3>
          <p>CUSTOMER TESTIMONY</p>
        </div>
        <div class="chang">
          <div class="chang_wrap">
            <div class="chang_item"
                 v-for="(item,i) in customerList"
                 :key="i">
              <img :src="item.custLogo" />
              <p>{{item.custBody}}</p>
              <img class="last"
                   src="../assets/imgs/nextkhjz.png" />
            </div>
          </div>
        </div>
        <div class="control">
          <span>
            <img src="../assets/imgs/syg.png"
                 @click="clickToRefreshClick(1)" />
          </span>
          <span>
            <img src="../assets/imgs/zj.png" />
          </span>
          <span>
            <img src="../assets/imgs/xyg.png"
                 @click="clickToRefreshClick(2)" />
          </span>
        </div>
      </section>
    </el-row>
    <footer_ />
  </div>
</template>

<script>
import header_ from "@/components/public/头部";
import footer_ from "@/components/public/底部";
import imgUrl from "../assets/imgs/hzhb_logo/company2.jpg";
import {
  getMembership,
  getProviderList,
  getBusinessList,
  getBusinessTowWithChild,
  getProjs,
  getFertileSplrList,
  getSplrCase,
  changeOneP,
  getProfsList,
  getTestimony,
  getTopSplr
} from "../components/api/api";
import Swiper from "swiper";
import { type } from "os";
import xfc from "@/components/public/悬浮窗.vue";
import lbDiv from "@/components/public/轮播div.vue";
import lbDivt from "@/components/public/轮播div2.vue";
import NumberScrollComponent from '@/components/public/数字滚动效果';
import NumberScrollComponentt from '@/components/public/数字滚动效果2';
import NumberScrollComponenttt from '@/components/public/数字滚动效果3';
export default {
  name: "index",
  components: {
    header_,
    footer_,
    xfc,
    lbDiv,
    lbDivt,
    NumberScrollComponent,
    NumberScrollComponentt,
    NumberScrollComponenttt
  },
  data () {
    return {
      attendanceNumber: 2645,
      serviceProvider: 425,
      projectNumber: 145,
      contractAmount: 23452639,
      //会员企业
      custCorpList: "",
      tests: [1, 2, 3],
      flag: true,
      isshow: false,
      unfold_zt: false,
      arrAllzjzk: [],
      mediaArrAllzjzk: [],
      isLogin: '',
      userRole: '',
      // 下方是原生轮播图的东西
      timer: null, //定时器 
      mark: 0, //比对图片索引的变量
      mark2: 2,
      screenWidth: window.innerWidth,
      bannerArrTop: [
        require('../assets/imgs/banner1.png'),
        require('../assets/imgs/banner2.jpg'),
        require('../assets/imgs/banner3.jpg'),
        require('../assets/imgs/banner4.png'),
        require('../assets/imgs/banner5.png'),
      ],
      searchInputInnerHtml: "",
      new_index_button: false,
      avatarLink: [
        require('../assets/imgs/newsBanner1.jpg'),
        require('../assets/imgs/banner2.png'),
        require('../assets/imgs/AboutUs_JoinUs2.png'),
        require('../assets/imgs/AboutUs_JoinUs1.png'),
      ],
      personHeaderLink: [
        require('../assets/imgs/user.png'),
        require('../assets/imgs/user.png'),
        require('../assets/imgs/user.png'),
        require('../assets/imgs/user.png'),
      ],
      hiddenArrDivHeight: [],
      topIconIndex: 0,
      // 业务一级
      firstClass: [],
      secendWidthChild: [],
      ProjList: [],
      providerList: [],
      providerListContent: [],
      custSplrCaseList: [],
      changeOnePCaseList1: [],
      changeOnePCaseList2: [],
      getProfsListNewList: [],
      providerListNew: [],
      providerListnewAll: [],
      jdProListImgs: [
        require('../assets/images/jdProListImgs1.png'),
        require('../assets/images/jdProListImgs2.png'),
        require('../assets/images/jdProListImgs3.png'),
        require('../assets/images/jdProListImgs4.png'),
        require('../assets/images/jdProListImgs5.png'),
        require('../assets/images/jdProListImgs6.png'),
      ],
      ProjListBackgroundColor: [],
      show: false,
      pageNum: 1,
      nums: 1,
      customerList: [],
      show: false,
      colors: ['#d32828', '#6c28d3', '#2844d3', '#d38428', '#28c1d3', '#e97e5d', '#28d395', '#b0b85b', '#89c4d7'],
      providerLists:[],
      providerListContents:""
    };
  },
  mounted () {
    let interVal = setInterval(() => {
      this.attendanceNumber += Math.floor(Math.random() * 10)
      this.serviceProvider += Math.floor(Math.random() * 10)
      this.projectNumber += Math.floor(Math.random() * 10)
      this.contractAmount += Math.floor(Math.random() * 10)
    }, 5000);
    // 顶部轮播
    new Swiper(".one", {
      pagination: {
        el: ".one_pagination"
      },
      navigation: {
        nextEl: ".one_next",
        prevEl: ".one_prev"
      },
      autoplay: {
        delay: 2500, //时间 毫秒
        disableOnInteraction: false //用户操作之后是否停止自动轮播默认true
      },
      loop: true //循环 最后面一个往后面滑动会滑到第一个
    });
    setTimeout(() => {
      this.contractAmount += 5000;
    }, 500);
    this.getProviderLists();
  },
  created () {
    // 原生轮播图调用
    this.play();
    this.getMembershipData();
    this.getBusinessList();
    getBusinessTowWithChild({ "itemId": 'A' }).then(res => {
      this.secendWidthChild = res.data.data
    })
    this.getProjList();
    this.getSplrCase();
    this.changeOneP();
    this.getProfsListNew();
    this.getProviderListnewAll();
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.isLogin = !this.isLogin;
      this.userRole = user.role
    };
    this.clickToRefresh();
  },
  methods: {
    clickToRefreshClick (num) {
      switch (num) {
        case 2:
          if (this.pageNum < this.nums) {
            this.pageNum++
            getTestimony({ "pageNum": this.pageNum }).then(res => {
              if (res.data.code === 200) {
                this.customerList = res.data.data.records;
              }
            });
          } else {
            console.log("超出数据库长度的请求")
          }
          break;

        default:
          if (this.pageNum > 1 && this.pageNum <= this.nums) {
            this.pageNum--
            getTestimony({ "pageNum": this.pageNum }).then(res => {
              if (res.data.code === 200) {
                this.customerList = res.data.data.records;
              }
            });
          } else {
            console.log("超出数据库长度的请求")
          }
          break;
      }
    },
    // 底部客户见证
    clickToRefresh () {
      getTestimony({ "pageNum": this.pageNum }).then(res => {
        if (res.data.code === 200) {
          this.customerList = res.data.data.records;
          this.nums = parseInt(res.data.data.total / 3)
        }
      });
    },
    submitXQYz () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      if (user) {
        switch (user.role) {
          case "0":
            this.$router.push("/fun/releaseFB")
            break;
          case "2":
            this.$router.push("/fun/releaseFBGR")
            break;
          default:
            this.$message({
              showClose: true,
              message: "您暂无此权限！",
              type: "error"
            });
            break;
        }
      }
    },
    routerLinkToZhuanJZK (profId) {
      this.$router.push('/zjzk' + "?profId=" + profId);
    },
    routerLinkToZhuanJZK (profId) {
      this.$router.push('/zjzk' + "?profId=" + profId);
    },
    routerLinkToNewsNy (newsId, newsType) {
      this.$router.push({ path: "/zxsdinside", query: { "newsId": newsId, "newsType": newsType } })
    },
    routerLinkToAlkNy (id) {
      this.$router.push({ path: '/fwgys/fwgys_ny', query: { "splrCaseId": id } })
    },
    getProviderListnewAll () {
      getProviderList().then(res => {
        if (res.data.code === 200) {
          this.providerListnewAll = res.data.data;
        }
      })
        ;
    },
    getProfsListNew () {
      getProfsList().then(res => {
        if (res.data.code === 200) {
          this.getProfsListNewList = res.data.data
        }
      });
    },
    changeOneP () {
      changeOneP().then(res => {
        this.changeOnePCaseList1 = [];
        this.changeOnePCaseList2 = [];
        if (res.data.code === 200) {
          this.changeOnePCaseList = res.data.data;
          for (var i = 0; i < res.data.data.length; i++) {
            if (i <= 3) {
              this.changeOnePCaseList1.push(res.data.data[i])
            } else {
              this.changeOnePCaseList2.push(res.data.data[i])
            }
          }
          for (var i = 0; i < this.changeOnePCaseList2.length; i++) {
            this.changeOnePCaseList2[i].newsContent = this.changeOnePCaseList2[i].newsContent.replace(new RegExp("\S&nbsp;?|<(\S*?)[^>]*>.*?|<.*? />|&nbsp;|&gt;", 'g'), '')
          }
        }
      })
    },
    getSplrCase () {
      getSplrCase().then(res => {
        if (res.data.code === 200) {
          for (var i = 0; i < 6; i++) {
            this.custSplrCaseList.push(res.data.data[i])
          }
        }
      })
    },
    getProviderLists () {
      getTopSplr().then(res => {
        if (res.data.code === 200) {
          // for (var i = 0; i < 4; i++) {
          //   this.providerList.push(res.data.data[i])
          // }
          // this.providerListContent = this.providerList[0]
          this.providerLists=res.data.data;
          this.providerListContents=res.data.data[0]
        }
      })
    },
    getProjList () {
      getProjs({ "pageSize": 6, "pageNum": 1, "order": true }).then(res => {
        if (res.data.code === 200) {
          for (var i = 0; i < res.data.data.records.length; i++) {
            if (i < 9) {
              this.ProjList.push(res.data.data.records[i])
            } else {
              break;
            }
          }
          for (i in this.ProjList) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgb = '(' + r + ',' + g + ',' + b + ')';
            this.ProjListBackgroundColor.push('rgba' + rgb)
          }
        }
      });
    },
    getBusinessTowWithChild (itemId) {
      getBusinessTowWithChild({ "itemId": itemId }).then(res => {
        this.secendWidthChild = res.data.data
      })
    },
    getBusinessList () {
      getBusinessList().then(res => {
        this.firstClass = res.data.data
      })
    },
    getMembershipData () {
      getMembership().then(res => {
        if (res.data.code === 200) {
          this.custCorpList = res.data.data;
        }
      });
    },
    changeColorHyZl (e) {
      var el = e.target;
      if (el.innerHTML == "会员企业") {
        this.flag = true;
        el.className = "selected";
        el.nextElementSibling.className = "";
      } else if (el.innerHTML == "战略伙伴") {
        this.flag = false;
        el.className = "selected";
        el.previousElementSibling.className = "";
      }
    },
    filter_array (aa) {
      let newArr = []
      let b = []
      for (let i in aa) {
        b.push(aa[i])
        if (i % 4 == 3) {
          newArr.push(b)
          b = []
        }
        if (aa.length % 4 != 0) {
          if (i >= (aa.length - aa.length % 4) && i == aa.length - 1) {
            newArr.push(b)
          }
        }
      }
      return newArr
    },

    getProfsList () {
      getProfsList().then(res => {
        if (res.data.code === 200) {
          this.arrAllzjzk = this.filter_array(res.data.data)
          for (var i = 0; i < this.arrAllzjzk.length; i++) {
            for (var j = 0; j < this.arrAllzjzk[i].length; j++) {
              this.mediaArrAllzjzk.push(this.arrAllzjzk[i][j])
            }
          }
          if (this.screenWidth == 414) {
            this.mark2 = this.mediaArrAllzjzk.length
          } else {
            this.mark2 = this.arrAllzjzk.length
          }
        } else {
          console.log("数据错误");
        }
      });
    },
    // 原生轮播图事件
    autoPlay () {
      this.mark++;
      if (this.mark === this.mark2) { //当遍历到最后一张图片置零 
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 5000)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 5000)
    },
    clickChangeInputInnerHtml (e) {
      let searchInput = document.getElementById('index_banner_bottom_content_input_search')

      if (e.target.tagName == 'LI') {
        this.searchInputInnerHtml = e.target.innerHTML
      }
    },
    closeIndexSearch () {
      let div = document.getElementsByClassName('index_banner_bottom')
      div[0].style.display = "none"
    },
    clickChangeColorAndImg (e, number5, itemCode) {
      this.topIconIndex = number5
      this.getBusinessTowWithChild(itemCode);
      let menuIconAll = document.getElementById('index_all_menu_icon');
      let div1 = document.getElementsByClassName('index_secend_menu_all')
      let div2 = document.getElementsByClassName('index_secend_icon_all')
      let allHeight = div1[0].offsetHeight + div2[0].offsetHeight
      menuIconAll.style.height = allHeight;
    },
    clickChange (e) {
      this.new_index_button = !this.new_index_button;
      let menuIconAll = document.getElementById('index_all_menu_icon');
      let height = menuIconAll.offsetHeight;
      menuIconAll.style.height = `${menuIconAll.offsetHeight}px`;
      let div1 = document.getElementsByClassName('index_secend_menu_all')
      let div2 = document.getElementsByClassName('index_secend_icon_all')
      let allHeight = div1[0].offsetHeight + div2[0].offsetHeight
      if (!this.new_index_button) {
        let newHeight = 0;
        var setTime2 = setInterval(function () {
          newHeight += 4;
          menuIconAll.style.height = `${newHeight}px`;
          if (newHeight > allHeight) {
            clearInterval(setTime2)
          }
        }, 1);
      } else if (this.new_index_button) {
        let newHeight1 = allHeight
        var setTime = setInterval(function () {
          newHeight1 -= 4;
          menuIconAll.style.height = `${newHeight1}px`;
          if (newHeight1 == 0) {
            clearInterval(setTime)
          }
        }, 1);
      }
    },
    mouseEnterChange (e, number1) {
      let right = document.getElementsByClassName('mew_index_good_store_person_content_right');
      right[0].className = "mew_index_good_store_person_content_right mew_index_good_store_person_content_right_tr32"
      let number = number1
      if (number1 == 2) {
        number = 3;
      } else if (number1 == 3) {
        number = 2
      }
      let div = document.getElementsByClassName('mew_index_good_store_person_content_left_bottomDiv')
      let myDeg = number * 90
      div[0].style.transform = `rotate(${myDeg}deg)`
      let myImg = document.getElementsByClassName('mew_index_good_store_person_content_left_top_img');
      myImg[0].src = e.target.firstElementChild.src
      this.providerListContents = this.providerLists[number1]
      right[0].className = "mew_index_good_store_person_content_right mew_index_good_store_person_content_right_tr3"

      this.show = true;
      const that = this
      setTimeout(function () {
        that.show = false;
      }, 250);
    },
    changeNthChildP (e) {
      
    },
    changeNthChildPL (e) {
      
    },
    changeZhuanYeBaoZhangE (e) {
      let newHeight = 160;
      var setTime2 = setInterval(function () {
        newHeight -= 2;
        e.target.children[2].style.transform = `translateY(${newHeight}px)`
        if (newHeight == 0) {
          clearInterval(setTime2)
        }
      }, 0.8);
    },
    changeZhuanYeBaoZhangL (e) {
      let newHeight = 0;
      var setTime2 = setInterval(function () {
        newHeight += 2;
        e.target.children[2].style.transform = `translateY(${newHeight}px)`
        if (newHeight == 160) {
          clearInterval(setTime2)
        }
      }, 1);
    }
  }
};
</script>
<style scoped>
.index_banner_bottom {
  height: 130px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.39);
  display: flex;
  justify-content: center;
}
.index_banner_bottom_all {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
}
.index_banner_bottom * {
  color: #fff;
}
.index_banner_bottom_title {
  width: 260px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.index_banner_bottom_title > p {
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
}
.index_banner_bottom_title > p:last-child {
  font-size: 14px;
}
.index_banner_bottom_title > p > span {
  display: block;
}
.index_banner_bottom_content {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 12;
}
.index_banner_bottom_content_searchInputAll {
  width: 80%;
  height: auto;
  display: flex;
}
#index_banner_bottom_content_input_search {
  width: 90%;
  color: #000 !important;
  height: 40px;
  padding-left: 10px;
}
#index_banner_bottom_content_input_search + div {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #da251d;
  cursor: pointer;
}
#index_banner_bottom_content_input_search + div > img {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
.index_banner_bottom_content_ul {
  /* width: 700px; */
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}
.index_banner_bottom_content_ul > * {
  font-size: 14px;
}
.index_banner_bottom_content_ul > span {
  color: #da251d;
  user-select: none;
}
.index_banner_bottom_content_ul > li {
  cursor: pointer;
  margin-left: 24px;
}
.index_banner_bottom_bigImg {
  width: 380px !important;
  height: 260px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  transform: translateX(60px);
}
.index_banner_bottom_closeImg {
  width: 18px !important;
  height: 18px;
  flex-shrink: 0;
  position: absolute;
  right: 0;
  top: -18px;
  z-index: 10;
}
.new_index_menu_section {
  padding: 0;
}
.index_menu_all,
.index_secend_menu_all_content {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.index_menu_all > div {
  width: calc(100%/4);
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #444444;
  border-bottom: 4px solid #fff;
}
.index_menu_all > .new_menu_icon_div {
  border-bottom: 4px solid #da251d;
  color: #da251d;
}
.index_menu_all > div > * {
  flex-shrink: 0;
  font-weight: bold;
  user-select: none;
}
.index_menu_all > div > p {
  margin-top: 8px;
}
.index_secend_menu_all {
  width: 100%;
  height: auto;
  background: #f6f6f6;
  overflow: hidden;
}
.index_secend_menu_all_content:first-child {
  padding-top: 40px;
}
.index_secend_menu_all_content:last-child {
  padding-bottom: 40px;
}
.index_secend_menu_all_content + .index_secend_menu_all_content {
  padding-top: 10px;
}
.index_secend_menu_all_content > div {
  height: 100%;
}
.index_secend_menu_all_content > div:first-child {
  width: 16%;
}
.index_secend_menu_all_content > div:nth-child(2) {
  width: 84%;
}
.index_secend_menu_all_content > div:first-child > span {
  display: block;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  color: #da251d;
  border-right: 2px solid #da251d;
  line-height: 24px;
  user-select: none;
  text-align: right;
  box-sizing: border-box;
  padding-right: 24px;
}
.index_secend_menu_all_content > div:nth-child(2) > ul {
  display: flex;
  flex-wrap: wrap;
}
.index_secend_menu_all_content > div:nth-child(2) > ul > li {
  margin-right: 24px;
  line-height: 24px;
  color: #666666;
  user-select: none;
}
.index_secend_icon_all {
  height: auto;
  margin: 0 auto;
  display: flex;
  padding: 40px 0 20px 0;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.index_secend_icon_all > div {
  width: calc(100% / 3);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
}
.index_secend_icon_all img {
  /* width: 260px;
  height: 110px; */
  width: 95%;
}
.index_secend_button_all > span {
  transform: rotate(90deg);
}
#index_all_menu_icon {
  height: auto;
  overflow: hidden;
}
.new_index_personNumber_all {
  background: url("../assets/icon/personNumberImg.png");
  width: 100%;
  height: 140px;
  margin-top: 24px;
}
.new_index_personNumber_content {
  width: 60%;
  min-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new_index_personNumber_content > div {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.new_index_personNumber_content > div > p {
  user-select: none;
}
.new_index_personNumber_content > div > p:first-child {
  font-size: 46px;
  color: #fff;
}
.new_index_personNumber_content > div > p:last-child {
  color: #fff;
}
.new_index_demand_dynamic {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.new_index_content_all {
  width: 60%;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.new_index_content_all_title {
  padding: 40px 0;
  padding-top: 80px;
}
.new_index_content_all_title > h3 {
  font-size: 34px;
  color: #333333;
  font-weight: 800;
  text-align: center;
  user-select: none;
}
.new_index_content_all_title > p {
  font-size: 14px;
  color: #999999;
  text-align: center;
  user-select: none;
  margin-top: 8px;
}
.new_index_demand_dynamic_content {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
.new_index_demand_dynamic_content > table {
  width: 100%;
  border-collapse: collapse;
}
.new_index_demand_dynamic_content > table > tr {
  display: flex;
  flex-wrap: wrap;
  border-collapse: collapse;
}
.new_index_demand_dynamic_content > table > tr > td {
  width: calc(100% / 3);
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-collapse: collapse;
  padding: 30px 20px;
  background: #fff;
  transition: all 0.1s;
  -webkit-transition: all 0.1s; /* Safari */
}
.new_index_demand_dynamic_content > table > tr > td > a > div {
  display: flex;
  justify-content: space-between;
}
.new_index_demand_dynamic_content > table > tr > td:hover {
  cursor: pointer;
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -moz-transform: scale(1.1); /* Firefox */
  -webkit-transform: scale(1.1); /* Safari 和 Chrome */
  -o-transform: scale(1.1);
}
.new_index_demand_dynamic_content > table > tr > td > a > div:last-child {
  justify-content: flex-start;
}
.new_index_demand_dynamic_content > table > tr > td > a > div > * {
  line-height: 30px;
}
.new_index_demand_dynamic_content > table > tr > td > a > div > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.new_index_demand_dynamic_content
  > table
  > tr
  > td
  > a
  > div:first-child
  > span:first-child {
  font-size: 17px;
  color: #333333;
  display: inline-block;
  width: 260px;
}
.new_index_demand_dynamic_content
  > table
  > tr
  > td
  > a
  > div:first-child
  > span:last-child {
  font-size: 14px;
  display: inline-block;
  padding: 0 4px;
  color: #fff;
}
.单一来源 {
  background: rgba(38, 212, 147, 1);
}
.竞争性谈判 {
  background: rgba(233, 126, 94, 1);
}
.委托代理 {
  background: rgba(184, 147, 91, 1);
}
.招投标 {
  background: rgba(40, 193, 211, 1);
}
.new_index_demand_dynamic_content
  > table
  > tr
  > td
  > a
  > div:last-child
  > span:first-child {
  font-size: 14px;
  color: #666666;
  display: inline-block;
  width: 60px;
}
.new_index_demand_dynamic_content
  > table
  > tr
  > td
  > a
  > div:last-child
  > span:last-child {
  font-size: 22px;
  color: #9e0000;
  display: inline-block;
  width: 270px;
}
.mew_index_good_store_person_all {
  width: 60%;
  min-width: 1200px;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.mew_index_good_store_person_content_left {
  width: 487px;
  height: 477px;
  overflow: hidden;
  position: relative;
  background: #cccccc;
}
.mew_index_good_store_person_content_left_bottomDiv {
  width: 260px;
  height: 260px;
  background: #9e0000;
  position: absolute;
  z-index: 2;
  transform-origin: right bottom;
  transition: all 0.3s;
}
.mew_index_good_store_person_content_left_bottomImg {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
}
.mew_index_good_store_person_content_left_middle {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
}
.mew_index_good_store_person_content_left_middle > div {
  width: 50%;
  height: 50%;
  box-sizing: border-box;
}
.mew_index_good_store_person_content_left_middle > div > img {
  width: 65px;
  height: 26px;
}
.mew_index_good_store_person_content_left_middle > div:first-child > img {
  position: relative;
  top: 25%;
  left: 25%;
  width: 60px;
  height: 40px;
}
.mew_index_good_store_person_content_left_middle > div:nth-child(2) > img {
  position: relative;
  top: 20%;
  left: 57%;
  width: 60px;
  height: 60px;
}
.mew_index_good_store_person_content_left_middle > div:nth-child(3) > img {
  position: relative;
  top: 60%;
  left: 25%;
  width: 60px;
  height: 40px;
}
.mew_index_good_store_person_content_left_middle > div:last-child > img {
  position: relative;
  top: 60%;
  left: 57%;
  width: 60px;
  height: 40px;
}
.mew_index_good_store_person_content_left_top {
  position: absolute;
  z-index: 6;
  top: 42%;
  left: 40%;
}
.mew_index_good_store_person_content_left_top_img {
  width: 120px;
  height: 80px;
  pointer-events: none;
}
.mew_index_good_store_person_content_right {
  width: 680px;
  height: auto;
  position: absolute;
  right: -680px;
  transition: all 0.2s;
}
.mew_index_good_store_person_content_right_tr3 {
  right: 0px;
}
.mew_index_good_store_person_content_right_tr32 {
  right: -680px;
}
.mew_index_good_store_person_content_right_title > img {
  width: 120px;
  height: 80px;
}
.mew_index_good_store_person_content_right_title > span {
  margin-left: 20px;
  font-size: 25px;
  color: #444444;
}
.mew_index_good_store_person_content_right_word {
  color: #444444;
  font-size: 18px;
  line-height: 30px;
  margin: 20px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.mew_index_good_store_person_content_right_content_yzl_nr {
  width: 230px;
  height: 160px;
  display: flex;
  padding: 20px 0;
  padding-top: 0;
}
.mew_index_good_store_person_content_right_content_yzl_nr > div {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.mew_index_good_store_person_content_right_content_yzl_nr > div > p,
.mew_index_good_store_person_content_right_tr3 p,
.mew_index_good_store_person_content_right_tr3 span,
.new_index_demand_dynamic span,
.new_index_demand_dynamic p {
  user-select: none;
}
.mew_index_good_store_person_content_right_content_yzl_nr
  > div
  > p:first-child {
  font-size: 16px;
  color: #999999;
}
.mew_index_good_store_person_content_right_content_yzl_nr
  > div:first-child
  > p:last-child {
  border-right: 1px solid #bbbbbb;
  width: 80%;
}
.mew_index_good_store_person_content_right_content_yzl_nr
  > div
  > p:last-child
  > span:first-child {
  font-size: 44px;
  color: #9e0000;
}
.mew_index_good_store_person_content_right_content_yzl_nr
  > div
  > p:last-child
  > span:last-child {
  margin-left: 8px;
  color: #9e0000;
}
.mew_index_good_store_person_content_right_content_yzl > a {
  display: block;
  margin-bottom: 20px;
  cursor: pointer;
}
.mew_index_good_store_person_content_right_content_yzl > a > span {
  display: inline-block;
  color: #333333;
}
.mew_index_good_store_person_content_right_content_yzl > a > span:last-child {
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 1px solid #333333;
  text-align: center;
  line-height: 18px;
  box-sizing: border-box;
  margin-left: 10px;
}
.mew_index_good_store_person_content_right_content_yzl > button {
  width: 120px;
  height: 40px;
  border: 0px;
  /* 9e0000 9e2900 */
  /* background: #000; */
  background: -webkit-linear-gradient(left, #9e0000, #9e2900);
  color: #fff;
}
.new_index_content_content_jdal {
  width: 100%;
  min-width: 1200px;
  height: auto;
  overflow: hidden;
  display: flex;
}
.new_index_content_content_jdal_content {
  /* width: 320px; */
  width: calc(100% / 6);
  height: 480px;
  overflow: hidden;
  position: relative;
  background: -webkit-linear-gradient(
    bottom,
    rgba(164, 13, 14, 1),
    rgba(175, 60, 58, 0.01)
  );
  cursor: pointer;
}
.new_index_content_content_jdal_content
  + .new_index_content_content_jdal_content {
  border-left: 1px solid #fff;
}
.new_index_content_content_jdal_content:hover
  .new_index_content_content_jdal_content_al {
  padding: 100px 24px 0 24px;
  bottom: 0;
  top: auto;
}
.new_index_content_content_jdal_content_al {
  position: absolute;
  top: 75%;
  bottom: -100px;
  width: 100%;
  height: auto;
  padding: 50px 24px 40px 24px;
  box-sizing: border-box;
  transition: all 0.2s;
  background: -webkit-linear-gradient(bottom,rgba(164, 13, 14, 1),rgba(175, 60, 58, 0.01));
  cursor: pointer;
}
.new_index_content_content_jdal_content_al > p {
  color: #fff;
  font-size: 19px;
  line-height: 36px;
}
.new_index_content_content_jdal_content_al > div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 4px 0;
}
.new_index_content_content_jdal_content_al > div > span {
  color: #fff;
  margin-left: 16px;
}
.new_index_content_content_jdal_content_al > div > div {
  width: 24px;
  height: 24px;
  border-radius: 12px;
}
.new_index_content_content_jdal_content_al > div > div > img {
  width: 24px;
  height: 24px;
}
.new_index_content_content_jdal_content_al > div:last-child {
  display: flex;
  flex-wrap: wrap;
}
.new_index_content_content_jdal_content_al > div:last-child > span {
  display: inline-block;
  box-sizing: border-box;
  width: calc(97%/3);
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 15px;
  line-height: 30px;
  padding: 0 4px;
  margin: 4px 0.5%;
  font-size: 14px;
}
.new_index_chat_dongtai_background {
  width: 100%;
  height: 880px;
  background: url("../assets/icon/newIndexSwiperBackgroundImg.png");
}
.new_index_chat_dongtai_all {
  width: 60%;
  min-width: 1200px;
  height: auto;
  display: flex;
}
.new_index_chat_dongtai_all_swiper {
  width: 55%;
  height: 540px;
  position: relative;
}
.myCarousel {
  height: 100%;
}
.new_index_chat_dongtai_all_right_content {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.new_index_chat_dongtai_all_right_content > div:hover {
  background: #3f3a3a;
}
.new_index_chat_dongtai_all_right_content > div {
  width: 100%;
  height: calc(98% / 3);
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  cursor: pointer;
}
.new_index_chat_dongtai_all_right_content_img {
  width: 40%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.new_index_chat_dongtai_all_right_content_img > img {
  width: 190px;
  height: 150px;
  flex-shrink: 0;
}
.new_index_chat_dongtai_all_right_content_title {
  width: 55%;
}
.new_index_chat_dongtai_all_right_content_title > p {
  font-size: 24px;
  color: #fff;
  width: 100%;
  overflow: hidden;
  line-height: 36px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.new_index_chat_dongtai_all_right_content_title > p:first-child {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.new_index_chat_dongtai_all_right_content_title > p:nth-child(2) {
  font-size: 14px;
  line-height: 25px;
}
.new_index_chat_dongtai_all_right_content_title_icon {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 4px;
}
.new_index_chat_dongtai_all_right_content_title_icon img {
  width: 15px;
  height: 13px;
}
.new_index_chat_dongtai_all_right_content_title_icon span {
  color: #fff;
}
.new_index_chat_dongtai_all_right_content_title_icon > div {
  margin-right: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.new_index_chat_dongtai_all_right_content_title_icon > div > * {
  flex-shrink: 0;
  margin: 0 4px;
}
.new_index_button_swiper_all {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.new_index_button_swiper {
  width: 132px;
  height: 32px;
  border: 1px solid #805a57;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #49110f;
  border-radius: 16px;
  cursor: pointer;
}
.new_index_button_swiper > span {
  color: #fff;
  font-size: 16px;
  margin-right: 14px;
}
.new_index_chat_dongtai_all_swiper_title {
  position: absolute;
  z-index: 20;
  bottom: 5%;
  left: 5%;
  color: #fff;
  font-size: 28px;
}
.new_index_content_active_baoming {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.new_index_content_active_baoming {
  width: 23%;
  height: 440px;
  margin: 0 1%;
}
.new_index_content_active_baoming > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.new_index_content_active_baoming_swiper {
  width: 100%;
  height: 100%;
}
.new_index_content_active_baoming > div > p:nth-child(2) {
  font-size: 23px;
  line-height: 50px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.new_index_content_active_baoming > div > p:nth-child(3) {
  font-size: 12px;
  color: #a0a0a0;
  line-height: 32px;
}
.new_index_content_active_baoming > div > p:nth-child(4) {
  font-size: 16px;
  color: #999999;
  line-height: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.new_index_content_active_baoming_button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}
.new_index_content_active_baoming_button > button {
  width: 45%;
  height: 35px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
}
.new_index_content_active_baoming_button > button:first-child {
  border: 1px solid #9e0000;
  color: #9e0000;
  background: none;
}
.new_index_content_active_baoming_button > button:last-child {
  border: 1px solid #9e0000;
  color: #fff;
  background: #9e0000;
}
.new_index_expert_think_tank {
  width: 60%;
  min-width: 1200px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.new_index_expert_think_tank > div {
  width: 48%;
  height: 320px;
  margin: 12px 1%;
  background: -webkit-linear-gradient(top, #030415, #23285a);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.new_index_expert_think_tank > div:nth-child(n + 5) {
  display: none;
}
.new_index_expert_think_tank_content {
  width: 48%;
  height: 320px;
  box-sizing: border-box;
  padding: 64px 40px;
  position: absolute;
  z-index: 2;
}
.new_index_expert_think_tank_content + div {
  width: 48%;
  /* height: 48%; */
  height: 320px;
  position: absolute;
  z-index: 1;
  overflow: hidden;
}
.new_index_expert_think_tank_content + div > img {
  position: absolute;
  right: -2px;
  height: 347px;
}
.new_index_expert_think_tank_content > span {
  font-size: 28px;
  color: #fff;
  position: relative;
  top: -24px;
}
.new_index_expert_think_tank_content > span::before {
  content: url("../assets/images/leftTop.png");
  position: relative;
  top: -20px;
}
.new_index_expert_think_tank_content > span::after {
  content: url("../assets/images/rightBottom.png");
  position: relative;
  top: 20px;
}
.new_index_expert_think_tank_content > p {
  color: #fff;
  font-size: 14px;
  line-height: 32px;
  width: 55%;
  overflow: hidden;
}
.new_index_expert_think_tank_content > p:nth-child(3) {
  width: 50%;
  line-height: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.new_index_expert_think_tank_content > button {
  width: 64px;
  height: 28px;
  border: 1px solid #cccccc;
  color: #ffffff;
  background: #141736;
  cursor: pointer;
  margin-top: 20px;
}
.new_index_content_all_fuwuliucheng {
  width: 60%;
  min-width: 1200px;
  height: auto;
  display: flex;
}
.new_index_content_all_fuwuliucheng > div:hover {
  cursor: pointer;
  transform: scale(1.2);
  -ms-transform: scale(1.2); /* IE 9 */
  -moz-transform: scale(1.2); /* Firefox */
  -webkit-transform: scale(1.2); /* Safari 和 Chrome */
  -o-transform: scale(1.2);
  border: 1px solid #9e0000;
}
.new_index_content_all_fuwuliucheng > div:hover > img {
  width: 153px;
  height: 127px;
}
.new_index_content_all_fuwuliucheng > div {
  width: calc(100% / 6);
  height: 260px;
  background: #fcf7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.1s;
}
.new_index_content_all_fuwuliucheng > div > img {
  width: 153px;
  height: 127px;
}
.new_index_content_all_fuwuliucheng > div > p:nth-child(2) {
  font-size: 21px;
  color: #333333;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
}
.new_index_content_all_fuwuliucheng > div > p:nth-child(3):before {
  content: "";
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: #9e0000;
  margin: 0 auto;
}
.new_index_content_all_fuwuliucheng > div > p:nth-child(3) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 14px;
  color: #666666;
  padding: 0 12px;
  box-sizing: border-box;
  display: none;
}
/* newIndexZhuanYeBaoZhang.png */
.new_index_demand_zhuanyebaozhang {
  background: url("../assets/icon/newIndexZhuanYeBaoZhang.png");
}
.new_index_demand_zhuanyebaozhang_content {
  width: 60%;
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
  background: url("../assets/icon/newIndexZhuanYBZICon.png");
}
.new_index_demand_zhuanyebaozhang_content > div {
  width: calc(100% / 3);
  height: 325px;
  box-sizing: border-box;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* padding-top: 9%; */
  background: rgba(50, 50, 50, 0.3);
  /* 646464 */
  /* background: url('../assets/icon/newIndexZhuanYBZICon.png') */
  position: relative;
}
.new_index_demand_zhuanyebaozhang_content > div:hover {
  background: rgba(50, 50, 50, 0.9);
}
.new_index_demand_zhuanyebaozhang_content > div > p:nth-child(2):before {
  content: "";
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: #9e0000;
  margin: 0 auto;
  margin-bottom: 10px;
}
.new_index_demand_zhuanyebaozhang_content > div > p {
  color: #fff;
  font-size: 22px;
  line-height: 36px;
}
.new_index_demand_zhuanyebaozhang_content > div > p:last-child {
  width: 100%;
  font-size: 16px;
  color: #dddddd;
  padding: 0 40px;
  opacity: 0;
  box-sizing: border-box;
  /* transform: translateY(20px); */
  position: absolute;
  top: 90%;
  bottom: -100px;
}
.nwe_index_content_qyhy_huoban {
  width: 60%;
  min-width: 1200px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid #9e0100; */
}
.nwe_index_content_qyhy_huoban > div {
  width: calc(100% / 6);
  height: 110px;
  border: 1px solid #ece9e9;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 8px 19px; */
}
.nwe_index_content_qyhy_huoban > div > a > img {
  /* width:100%;height:100%; */
  flex-shrink: 0;
  width: 120px;
  height: 80px;
}
.new_menu_icon_div_img {
  display: block;
}
.new_menu_icon_div_img_none {
  display: none;
}
.内容 {
  position: relative;
  /* min-width: 1400px; */
}
.index_banner img {
  width: 100%;
}
section {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 0;
}
.fwnr_title {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  text-align: center;
  align-items: center;
}
.fwnr_title:after {
  content: "";
  display: inline-block;
  width: 41px;
  height: 1px;
  background-color: #d91f1e;
}
.fwnr_title h3 {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0px;
  color: #353535;
  user-select: none;
}
.fwnr_title p {
  font-size: 18px;
  letter-spacing: 0px;
  color: #353535;
  padding: 17px 0 21px 0;
  user-select: none;
}
.content_title {
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
}
.section_content {
  border-bottom: none !important;
}
.content_title div h2 {
  margin-top: 10%;
  margin-bottom: 10px;
  font-size: 22px;
  height: 44px;
  color: #353535;
  display: flex;
  align-items: center;
  user-select: none;
}
.content_title div h2 img {
  margin-right: 10px;
}
.content_title div p {
  line-height: 24px;
  color: #999999;
  font-size: 14px;
  user-select: none;
}
.content_title div {
  position: relative;
  padding: 0 30px;
  box-sizing: border-box;
  border-right: 1px solid #cecece;
  margin-bottom: 30px;
  height: 155px;
}
.content_title div:nth-child(4n + 1) {
  padding-left: 0;
  width: 384px;
}
.content_title div:nth-child(4n) {
  padding-right: 0;
  max-width: 387px;
  border-right: 0;
}
.content_title div:nth-child(3n) {
  width: 387px;
}
.content_title div:nth-child(2n) {
  width: 387px;
}
.content p {
  font-size: 14px;
  color: #999999;
}
.content_title .service {
  position: absolute;
  width: 118px;
  height: 31px;
  background-color: #ffffff;
  border: solid 1px #434343;
  bottom: 0;
  text-align: center;
  line-height: 31px;
  color: #434343;
}
.fwlc,
.zlhb {
  width: 100% !important;
  max-width: 100% !important;
  background: #fbfbfb;
}
.fwlc_content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fwlc_content > div {
  width: 177px;
  height: 180px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #5a5a5a;
  font-size: 20px;
  user-select: none;
}
.fwlc_content > div img {
  height: 60px;
  margin-bottom: 12px;
}
.fwlc_content > img {
  width: 33px;
  height: 14px;
  margin: 0 17px;
}
.zybz_content {
  display: flex;
  justify-content: space-between;
}
.zybz {
  padding-bottom: 80px;
}
.zybz_item {
  width: 182px;
  height: auto;
  min-height: 120px;
}
.zybz_item h4 {
  font-size: 18px;
  color: #5a5a5a;
  display: flex;
  font-weight: 600;
  user-select: none;
}
.zybz_item > h4 img {
  display: block;
  height: 30px;
  margin-right: 10px;
}
.zybz_item p {
  margin-top: 5px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #969696;
  user-select: none;
}
.zlhb .title:after {
  content: none;
}
.zlhb .title p {
  font-size: 16px;
}
.zlhb .title p span {
  margin: 0 5px;
}
.zlhb button {
  width: 120px;
  height: 33px;
  background-color: #999999;
  border: none;
  color: #fff;
  font-size: 16px;
  margin: 10px;
}
.zlhb button.selected {
  background-color: #9e0100;
  box-shadow: none;
}
.zlhb_content {
  max-width: 1400px !important;
  margin: 0 auto;
  box-sizing: border-box;
}

.zlhb_item {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: flex-start;
}
.zlhb_item a {
  border: 1px solid #ece9e9;
  display: flex;
  width: auto;
  background-color: #ffffff;
  border: solid 1px #ece9e9;
  margin: 0 10px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
}
.zlhb_item span im {
  display: block;
  width: 211px;
  height: 97px;
}
.khjz .chang_wrap {
  display: flex;
  justify-content: space-between;
}
.khjz .chang_item {
  box-sizing: border-box;
  padding: 0 23px;
  text-align: center;
  width: 409px;
  height: 214px;
  background-color: #ffff;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #5a5a5a;
  position: relative;
}
.khjz .chang_item img {
  margin-top: 30px;
}
.khjz .chang_item > img:first-child {
  width: 150px;
  height: 80px;
  margin-top: 14px;
}
.khjz .chang_item p {
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
  color: #5a5a5a;
  user-select: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.khjz .chang_item img.last {
  position: absolute;
  bottom: 0;
  right: 0;
}
.control {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.control span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 51px;
  background-color: #f7f7f7;
  border-radius: 3px;
  margin: 0 5px;
}
.control span:nth-of-type(2) {
  width: 92px;
}
.zhanWeiFuMedia {
  display: none;
}
.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.swiper-pagination-bullet-active {
  background-color: #9e0100;
}

.limit_row {
  -webkit-line-clamp: 4;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 7.1875rem !important;
  text-overflow: ellipsis;
  overflow: hidden;
}
.unfold {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto 0;
  height: 3.125rem;
  width: 4rem;
}
.unfold > div {
  text-align: center;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #9e0100;
  transform: rotate(135deg);
  cursor: pointer;
  user-select: none;
  transition: 0.25s;
  font-weight: bolder;
}
.unfold2 {
  transform: rotate(-45deg) !important;
}

.zybz_item > p {
  font-size: 0.9375rem;
  line-height: 1.875rem;
  color: #7c7c7c;
  height: 330px;
  transition: 0.25s;
  overflow: hidden; /*visible 显示*/
  position: relative;
}
.swper_lb {
  width: 100%;
  height: 400px;
}
.change,
.mediaChange {
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
/* 修改专家智库的样式 */
.change .swiper-pagination,
.mediaChange .swiper-pagination {
  /* transform: translateY(-30px); */
  z-index: 999;
  position: absolute;
  height: 30px;
}
.swiper-container {
  padding-bottom: 25px;
}
.one_pagination {
  transform: translateY(-30px);
}
.index_banner {
  position: relative;
}
.change {
  display: block;
}
.mediaChange {
  display: none;
}
.new_index_chat_dongtai_all_right_content_all {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.headerswiper /deep/.el-carousel__container {
  height: 600px;
}
/* 原生轮播图样式 */
.lunbotu_slide {
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
.lunbotu_slideshow {
  width: 100%;
  height: 460px;
  margin: 0 auto;
}
.lunbotu_slideshow > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.lunbotu_slide li {
  position: absolute;
  margin: 0 auto;
}
.lunbotu_bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.lunbotu_bar span {
  width: 20px;
  height: 5px;
  background: #999;
  display: inline-block;
  margin-right: 10px;
}
.lunbotu_active {
  background: #9e0100 !important;
}
.image-enter-active {
  transform: translateX(0);
  transition: all 0.5s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 0.5s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
.trans {
  transform: translateX(0);
  transition: transform 0.8s;
}
.trans:hover img {
  transform: translateY(-60px);
  transition: transform 0.8s;
}
.trans:hover > p {
  transform: translateY(-60px);
  transition: transform 0.8s;
}
.trans:hover p:last-child {
  opacity: 1;
  transform: translateY(-130px);
  transition: transform 0.8s;
}
@media screen and (max-width: 1500px) {
  .new_index_content_content_jdal_content:hover
  .new_index_content_content_jdal_content_al {
    padding: 60px 10px 0 10px;
    bottom: 0;
    top: auto;
  }
  .new_index_content_content_jdal_content{
    height: 340px;
  }
  .new_index_content_content_jdal_content_al {
    position: absolute;
    top: 66%;
    bottom: -100px;
    width: 100%;
    height: auto;
    padding: 50px 10px 40px 10px;
    box-sizing: border-box;
    transition: all 0.2s;
    background: -webkit-linear-gradient(bottom,rgba(164, 13, 14, 1),rgba(175, 60, 58, 0.01));
  }
  .new_index_content_content_jdal_content_al > p{
    font-size: 16px !important;
  }
  .new_index_content_content_jdal_content_al > div{
    display: flex;
    align-items: center;
  }
  .new_index_content_content_jdal_content_al > div span{
    font-size: 14px !important;
  }
  .new_index_content_content_jdal_content_al > div:last-child > span{
    line-height: 22px;
  }
  .headerswiper /deep/.el-carousel__container{
    height: 400px;
  }
}
</style>
<style>
.animated {
  animation-duration: 1s;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #8c98a7;
}
.index_banner img {
  height: 100%;
}
.is-active > button {
  background: #9e0100;
}
.new_index_content_active_baoming_swiper .el-carousel__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
}
.new_index_content_active_baoming_swiper
  .el-carousel__indicator
  > .el-carousel__button {
  background: #666;
}
.new_index_content_active_baoming_swiper .is-active > .el-carousel__button {
  background: #9e0000;
}
.new_index_content_active_baoming_swiper .el-carousel__item {
  opacity: 0;
}
.new_index_content_active_baoming_swiper .is-active {
  opacity: 1;
}
.el-carousel__item {
  cursor: pointer;
}
.myCarousel > div {
  height: 100%;
}
.new_index_content_active_baoming_swiper .is-active .el-carousel__button {
  width: 26px;
}
.new_index_content_active_baoming_swiper .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
</style>
