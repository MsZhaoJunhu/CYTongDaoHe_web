<template>
  <div class="我的信息">
    <p class="wodexinxi_title">我的信息</p>
    <div class="info">
      <div class="infoleft">
        <div class="img_lv">
          <div class="img_box">
            <a class="submitImgAsPersonbtn"
               @click="toggleShow"></a>
            <my-upload field="img"
                       @crop-success="cropSuccess"
                       v-model="show"
                       :width="200"
                       :height="200"
                       img-format="png"
                       :size="size"></my-upload>
            <span>
              <img :src="avatar"
                   style="width:60px;height:60px;border-radius:30px;"
                   alt="">
            </span>
          </div>
          <span>
            <i>{{this.userTypeName}}</i>
          </span>
        </div>
        <div class="name">
          <h4>欢迎您:</h4>
          <h3><span>{{dataList.title}}</span><img src="@/assets/imgs/pic1.png"
                 alt=""></h3>
        </div>
      </div>
      <div class='infomiddle'>
        <div class='complate_percent'>
          <div class='complate_percent_part1 part'><span>注册信息完成度</span></div>
          <div class='complate_percent_part2 part'>
            <span>
              <span class='num_large'>{{integrity}}</span>
              <span class='num_small'>%</span>
            </span>
          </div>
          <div class='complate_percent_part3 part'><span><img src="@/assets/imgs/complete_percent.png"
                   alt="">
              <span style='color:#bbbbbb;'
                    class="zcxxws"
                    @click="getMsg">注册信息完善</span></span>
            <!-- 企业会员 -->
            <el-drawer title="注册信息完善"
                       :visible.sync="drawer"
                       :direction="direction"
                       :before-close="handleClose"
                       size='100%'>
              <el-tabs type="border-card"
                       tab-position="left"
                       style="height:auto;">
                <el-tab-pane label="工商信息">
                  <el-form :model="enterpriseMemberForm[0]"
                           ref="enterpriseMemberForm.gongshangxinxi"
                           label-width="80px"
                           class="qiyehuiyuanxinxi">
                    <el-form-item label="">
                      <div>
                        <span>公司名称</span>
                        <el-input v-model="enterpriseMemberForm[0].corpName"
                                  placeholder="请输入公司名称"></el-input>
                      </div>

                      <div>
                        <span>公司地址</span>
                        <el-input v-model="enterpriseMemberForm[0].corpAdd"
                                  placeholder="请输入公司地址"></el-input>
                      </div>
                      <div>
                        <span>公司电话</span>
                        <el-input v-model="enterpriseMemberForm[0].corpPhoneno"
                                  placeholder="请输入公司电话"></el-input>
                      </div>
                      <div>
                        <span>公司邮箱</span>
                        <el-input v-model="enterpriseMemberForm[0].corpEmail"
                                  placeholder="请输入公司邮箱"></el-input>
                      </div>
                      <div>
                        <span>公司官网</span>
                        <el-input v-model="enterpriseMemberForm[0].corpWeb"
                                  placeholder="请输入公司官网"></el-input>
                      </div>
                      <div>
                        <span>注册资本</span>
                        <el-input v-model="enterpriseMemberForm[0].registerCapital"
                                  placeholder="请输入注册资本"></el-input>
                      </div>
                      <div>
                        <span>实缴资本</span>
                        <el-input v-model="enterpriseMemberForm[0].actualCapital"
                                  placeholder="请输入实缴资本"></el-input>
                      </div>
                      <div>
                        <span>经营状态</span>
                        <el-input v-model="enterpriseMemberForm[0].manageState"
                                  placeholder="请输入公司经营状态"></el-input>
                      </div>
                      <div>
                        <span>成立日期</span>
                        <el-date-picker type="date"
                                        v-model="enterpriseMemberForm[0].establishDate"
                                        placeholder="选择日期"
                                        class="datePickerDate">
                        </el-date-picker>
                      </div>
                      <div>
                        <span>核准日期</span>
                        <el-date-picker type="date"
                                        v-model="enterpriseMemberForm[0].approvalDate"
                                        placeholder="选择日期"
                                        class="datePickerDate">
                        </el-date-picker>
                      </div>
                      <div>
                        <span>注册类型</span>
                        <el-input v-model="enterpriseMemberForm[0].registerType"
                                  placeholder="请输入公司注册类型"></el-input>
                      </div>
                      <div>
                        <span>信用代码</span>
                        <el-input v-model="enterpriseMemberForm[0].creditCode"
                                  placeholder="请输入公司信用代码"></el-input>
                      </div>
                      <div>
                        <span>识别号</span>
                        <el-input v-model="enterpriseMemberForm[0].taxpayerNo"
                                  placeholder="请输入公司识别号"></el-input>
                      </div>
                      <div>
                        <span>注册号</span>
                        <el-input v-model="enterpriseMemberForm[0].registerNo"
                                  placeholder="请输入公司注册号"></el-input>
                      </div>
                      <div>
                        <span>机构代码</span>
                        <el-input v-model="enterpriseMemberForm[0].orgCode"
                                  placeholder="请输入机构代码"></el-input>
                      </div>
                      <div>
                        <span>登记机关</span>
                        <el-input v-model="enterpriseMemberForm[0].registerOffice"
                                  placeholder="请输入登记机关"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item label="">
                      <div>
                        <span>所属行业</span>
                        <el-select v-model="enterpriseMemberForm[0].subIndustry"
                                   @change="elSelectChangeEventA"
                                   placeholder="请选择属于行业">
                          <el-option v-for="(item,index) in industryA"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                        <el-select v-model="enterpriseMemberForm[0].industryDetail"
                                   @change="elSelectChangeEventB"
                                   placeholder="请选择属于行业">
                          <el-option v-for="(item,index) in industryB"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                    <el-form-item label="">
                      <div>
                        <span>所属区域</span>
                        <el-select v-model="enterpriseMemberForm[0].subArea1"
                                   @change="elSelectChangeCityEvent"
                                   placeholder="请选择所属区域">
                          <el-option v-for="(item,index) in cityA"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                        <el-select v-model="enterpriseMemberForm[0].subArea2"
                                   @change="elSelectChangeCityBEvent"
                                   placeholder="请选择所属区域">
                          <el-option v-for="(item,index) in cityB"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                        <el-select v-model="enterpriseMemberForm[0].subArea3"
                                   @change="elSelectChangeCityCEvent"
                                   placeholder="请选择所属区域">
                          <el-option v-for="(item,index) in cityC"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <div>
                        <span>经营范围</span>
                        <el-input v-model="enterpriseMemberForm[0].manageRange"
                                  placeholder="请输入经营范围"></el-input>
                      </div>
                    </el-form-item>
                  </el-form>
                  <el-button @click="corporateMembershipUpload(1)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="股东信息">
                  <el-form :model="enterpriseMemberForm[0]"
                           ref="enterpriseMemberForm.gudongxinxi"
                           :inline="true"
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi">
                      <div>股东信息</div>
                      <div>
                        <div>股东(自然人或法人)</div>
                        <div>持股比例</div>
                        <div>认缴出资(万元)</div>
                        <div>认缴日期</div>
                        <div>实缴出资(万元)</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in enterpriseMemberForm[0].custCorpShareholderList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.shareholder"
                                    placeholder="请输入名字" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.shareholdRatio"
                                    placeholder="请输入持股比例" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.admitPay"
                                    placeholder="请输入认缴金额(万元)" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-date-picker type="date"
                                          v-model="item.admitDate"
                                          placeholder="选择日期">
                          </el-date-picker>
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.actualPay"
                                    placeholder="请输入实缴金额(万元)" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(enterpriseMemberForm[0].custCorpShareholderList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow">新增属性</el-button>
                    </el-row>
                  </el-form>
                  <el-form :model="enterpriseMemberForm[0]"
                           :inline="true"
                           ref="enterpriseMemberForm.dongjiangaoxinxi"
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi dongjiangaoxinxi">
                      <div>董监高信息</div>
                      <div>
                        <div>姓名</div>
                        <div>职务</div>
                        <div>电话</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in enterpriseMemberForm[0].custCorpDirectorList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.name"
                                    placeholder="请输入姓名" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.post"
                                    placeholder="请输入职务" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.phone"
                                    placeholder="请输入电话" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button size="medium"
                                     @click="removeRow(enterpriseMemberForm[0].custCorpDirectorList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow2">新增属性</el-button>
                    </el-row>
                  </el-form>
                  <el-form :model="enterpriseMemberForm[0]"
                           :inline="true"
                           ref="enterpriseMemberForm.guanlicengxinxi"
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi guanlicengxinxi">
                      <div>管理层信息</div>
                      <div>
                        <div>姓名</div>
                        <div>部门</div>
                        <div>职务</div>
                        <div>电话</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in enterpriseMemberForm[0].custCorpManageList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.name"
                                    placeholder="请输入姓名" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.department"
                                    placeholder="请输入部门" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.post"
                                    placeholder="请输入职务" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.phone"
                                    placeholder="请输入电话" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(enterpriseMemberForm[0].custCorpManageList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow3">新增属性</el-button>
                    </el-row>
                  </el-form>
                  <el-button @click="corporateMembershipUpload(2)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="企业信息">
                  <el-form :model="enterpriseMemberForm[0]"
                           ref="enterpriseMemberForm.qiyexinxi"
                           label-width="80px"
                           class="qiyehuiyuanxinxi">
                    <el-form-item label="">
                      <div>
                        <span>组织架构</span>
                        <el-input v-model="enterpriseMemberForm[0].orgFramework"
                                  placeholder="请输入组织架构"></el-input>
                      </div>
                      <div>
                        <span>部门职责</span>
                        <el-input v-model="enterpriseMemberForm[0].departmentDuty"
                                  placeholder="请输入部门职责"></el-input>
                      </div>
                      <div>
                        <span>人员规模</span>
                        <el-input v-model="enterpriseMemberForm[0].personnelScale"
                                  placeholder="请输入人员规模"></el-input>
                      </div>
                      <div>
                        <span>参保人数</span>
                        <el-input v-model="enterpriseMemberForm[0].insuranceAmount"
                                  placeholder="请输入参保人数"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item label="">
                      <div>
                        <span>企业规模</span>
                        <el-select v-model="enterpriseMemberForm[0].corpScale"
                                   @change="elSelectScale"
                                   placeholder="请选择企业规模">
                          <el-option value="大型企业"></el-option>
                          <el-option value="中型企业"></el-option>
                          <el-option value="小型企业"></el-option>
                          <el-option value="微型企业"></el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>愿景</span>
                        <el-input v-model="enterpriseMemberForm[0].vision"
                                  type="textarea"
                                  placeholder="请输入愿景"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>使命</span>
                        <el-input v-model="enterpriseMemberForm[0].mission"
                                  type="textarea"
                                  placeholder="请输入使命"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>价值观</span>
                        <el-input v-model="enterpriseMemberForm[0].value"
                                  type="textarea"
                                  placeholder="请输入价值观"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>经营理念</span>
                        <el-input v-model="enterpriseMemberForm[0].idea"
                                  type="textarea"
                                  placeholder="请输入经营理念"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>企业简介</span>
                        <el-input v-model="enterpriseMemberForm[0].enterpriceIntro"
                                  type="textarea"
                                  placeholder="请输入企业简介"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemElButton clickToUploadImg spanNextImg">
                      <span>Logo</span>
                      <img :src="enterpriseMemberForm[0].logo"
                           alt="">
                      <el-upload action=''
                                 :accept="'image/*'"
                                 :show-file-list='false'
                                 :on-change="getFile"
                                 :limit="1"
                                 list-type="picture"
                                 :auto-upload="false">
                        <el-button size="small"
                                   type="primary">上传图片</el-button>
                      </el-upload>
                    </el-form-item>
                    <el-form :inline="true"
                             ref="formData3"
                             label-width="65px"
                             size="medium">
                      <div class="gaoguanxinxi guanlicengxinxi zhishichanquan">
                        <div>知识产权</div>
                        <div>
                          <div>产权类型</div>
                          <div>产权名称</div>
                          <div>发明人</div>
                          <div>专利号</div>
                          <div>专利申请日期</div>
                          <div>证书号</div>
                          <div>操作</div>
                        </div>
                        <el-row class="firstChildIsNone"
                                style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                                v-for="(item,index) in enterpriseMemberForm[0].custCorpIprList"
                                :key="index">
                          <el-form-item label="">
                            <el-select v-model="item.type"
                                       placeholder="请选择产权类型"
                                       :disabled='true'>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.iprName"
                                      placeholder="请输入产权名称"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.inventor"
                                      placeholder="请输入发明人名称"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.patentNo"
                                      placeholder="请输入专利号"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label="">
                            <el-date-picker type="date"
                                            placeholder="选择日期"
                                            v-model="item.patentDt"
                                            :disabled='true'>
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.certificateNo"
                                      placeholder="请输入证书号"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label=""
                                        class="editDeletePar">
                            <el-button type="danger"
                                       size="medium"
                                       @click="removeRow(enterpriseMemberForm[0].custCorpIprList,index)">删除</el-button>
                            <el-button type="danger"
                                       size="medium"
                                       @click="secendAddDrawer(index)">编辑</el-button>
                            <el-drawer title="新增知识产权"
                                       :visible.sync="drawer2"
                                       :direction="direction2"
                                       :before-close="handleClose2"
                                       size='50%'
                                       custom-class="drawer2">
                              <el-form-item label=""
                                            class="patentForm">
                                <div>
                                  <span>产权类型</span>
                                  <el-select v-model="custCorpIprListMy.type"
                                             @change="custCorpIprListMyType"
                                             placeholder="请选择产权类型">
                                    <el-option value="发明"></el-option>
                                    <el-option value="实用新型"></el-option>
                                    <el-option value="外观设计"></el-option>
                                  </el-select>
                                </div>
                                <div>
                                  <span>产权名称</span>
                                  <el-input v-model="custCorpIprListMy.iprName"
                                            placeholder="请输入产权名称" />
                                </div>
                                <div>
                                  <span>发明人</span>
                                  <el-input v-model="custCorpIprListMy.inventor"
                                            placeholder="请输入发明人名称" />
                                </div>
                                <div>
                                  <span>专利号</span>
                                  <el-input v-model="custCorpIprListMy.patentNo"
                                            placeholder="请输入专利号" />
                                </div>
                                <div>
                                  <span>申请日期</span>
                                  <el-date-picker type="date"
                                                  v-model="custCorpIprListMy.patentDt"
                                                  placeholder="选择日期">
                                  </el-date-picker>
                                </div>
                                <div>
                                  <span>专利权人</span>
                                  <el-input v-model="custCorpIprListMy.patentee"
                                            placeholder="请输入专利权人名称" />
                                </div>
                                <div>
                                  <span>地址</span>
                                  <el-input v-model="custCorpIprListMy.iprAdd"
                                            placeholder="请输入地址" />
                                </div>
                                <div>
                                  <span>公告日期</span>
                                  <el-date-picker type="date"
                                                  v-model="custCorpIprListMy.noticeDt"
                                                  placeholder="选择日期">
                                  </el-date-picker>
                                </div>
                                <div>
                                  <span>公告号</span>
                                  <el-input v-model="custCorpIprListMy.noticeNo"
                                            placeholder="请输入授权公众号" />
                                </div>
                                <div>
                                  <span>证书号</span>
                                  <el-input v-model="custCorpIprListMy.certificateNo"
                                            placeholder="请输入证书号" />
                                </div>
                                <div style="width:100%;"
                                     class="drawer2MyButton2">
                                  <el-button @click="preservationCustCorpIprListMy(index)">保存</el-button>
                                  <el-button @click="cancelCustCorpIprListMy">取消</el-button>
                                </div>
                              </el-form-item>
                            </el-drawer>
                          </el-form-item>
                        </el-row>
                      </div>
                      <el-row>
                        <el-button type="primary"
                                   size="medium"
                                   @click="addRow4()">新增知识产权</el-button>
                      </el-row>
                    </el-form>
                  </el-form>
                  <el-button @click="corporateMembershipUpload(3)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="经营情况">
                  <el-form ref=""
                           label-width="80px"
                           class="qiyehuiyuanxinxi">
                    <el-form-item label="">
                      <div>
                        <span>收入</span>
                        <el-input v-model="income"
                                  placeholder="请输入近三年收入"></el-input>
                        <el-input v-model="income2"
                                  placeholder="请输入近三年收入"></el-input>
                        <el-input v-model="income3"
                                  placeholder="请输入近三年收入）"></el-input>
                      </div>
                      <div>
                        <span>利润</span>
                        <el-input v-model="profit"
                                  placeholder="请输入近三年利润"></el-input>
                        <el-input v-model="profit2"
                                  placeholder="请输入近三年利润"></el-input>
                        <el-input v-model="profit3"
                                  placeholder="请输入近三年利润"></el-input>
                      </div>
                    </el-form-item>
                  </el-form>
                  <el-button @click="corporateMembershipUpload(4)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="业务情况">
                  <el-form ref=""
                           label-width="80px"
                           class="qiyehuiyuanxinxi">
                    <el-form-item label="">
                      <div>
                        <span>商业模式</span>
                        <el-input v-model="enterpriseMemberForm[0].commerceMd"
                                  placeholder="请输入商业模式"></el-input>
                      </div>
                      <div>
                        <span>业务模式</span>
                        <el-input v-model="enterpriseMemberForm[0].businessMd"
                                  placeholder="请输入业务模式"></el-input>
                      </div>
                      <div>
                        <span>利润来源</span>
                        <el-input v-model="enterpriseMemberForm[0].profitSource"
                                  placeholder="请输入利润来源"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>入门产品服务</span>
                        <el-input v-model="enterpriseMemberForm[0].priProd"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>标准产品服务</span>
                        <el-input v-model="enterpriseMemberForm[0].standardProd"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>利润产品服务</span>
                        <el-input v-model="enterpriseMemberForm[0].profitProd"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>竞争对手</span>
                        <el-input v-model="enterpriseMemberForm[0].competitor"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>竞争优势</span>
                        <el-input v-model="enterpriseMemberForm[0].advantage"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>市场前景</span>
                        <el-input v-model="enterpriseMemberForm[0].marketProspect"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                  </el-form>
                  <el-button @click="corporateMembershipUpload(5)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="发展规划">
                  <el-form ref=""
                           label-width="80px"
                           class="qiyehuiyuanxinxi">
                    <el-form-item label=""
                                  class="strategicTarget">
                      <span>战略目标</span>
                      <div>
                        <div>
                          <div>{{toDay}}年</div>
                          <div>{{toDay+1}}年</div>
                          <div>{{toDay+2}}年</div>
                        </div>
                        <div>
                          <el-input v-model="enterpriseMemberForm[0].strategyTarget"
                                    type="textarea"></el-input>
                          <el-input v-model="enterpriseMemberForm[0].strategyTarget2"
                                    type="textarea"></el-input>
                          <el-input v-model="enterpriseMemberForm[0].strategyTarget3"
                                    type="textarea"></el-input>
                        </div>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>开发计划</span>
                        <el-input v-model="enterpriseMemberForm[0].prodPlan"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <!-- <el-form-item class="elFormItemElButton">
                                            <span>战略目标文档</span><el-button>点击上传</el-button>
                                        </el-form-item>
                                        <el-form-item class="elFormItemElButton">
                                            <span>开发文档</span><el-button>点击上传</el-button>
                                        </el-form-item>
                                        <el-form-item class="elFormItemElButton">
                                            <span>服务文档</span><el-button>点击上传</el-button>
                                        </el-form-item> -->
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>研发计划</span>
                        <el-input v-model="enterpriseMemberForm[0].techPlan"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <!-- <el-form-item class="elFormItemElButton">
                                            <span>研发文档</span><el-button>点击上传</el-button>
                                        </el-form-item> -->
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>扩展计划</span>
                        <el-input v-model="enterpriseMemberForm[0].marketPlan"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <!-- <el-form-item class="elFormItemElButton">
                                            <span>扩展文档</span><el-button>点击上传</el-button>
                                        </el-form-item> -->
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>引进计划</span>
                        <el-input v-model="enterpriseMemberForm[0].talentPlan"
                                  type="textarea"></el-input>
                      </div>
                    </el-form-item>
                    <!-- <el-form-item class="elFormItemElButton">
                                            <span>引进文档</span><el-button>点击上传</el-button>
                                        </el-form-item> -->
                  </el-form>
                  <el-button @click="corporateMembershipUpload(6)">信息提交</el-button>
                </el-tab-pane>
              </el-tabs>
            </el-drawer>
            <!-- 服务供应商 -->
            <el-drawer title="注册信息完善"
                       :visible.sync="drawer3"
                       :direction="direction2"
                       :before-close="handleClose3"
                       size='100%'>
              <el-tabs type="border-card"
                       tab-position="left"
                       style="height:auto;">
                <el-tab-pane label="工商信息">
                  <el-form :model="serviceProviderForm[0]"
                           ref="serviceProviderForm.gongshangxinxi"
                           label-width="80px"
                           class="gongshangxinxi">
                    <el-form-item label="">
                      <div>
                        <span>公司名称</span>
                        <el-input v-model="serviceProviderForm[0].splrName"
                                  placeholder="请输入公司名称"></el-input>
                      </div>

                      <div>
                        <span>公司地址</span>
                        <el-input v-model="serviceProviderForm[0].splrAdd"
                                  placeholder="请输入公司地址"></el-input>
                      </div>
                      <div>
                        <span>公司电话</span>
                        <el-input v-model="serviceProviderForm[0].splrPhoneno"
                                  placeholder="请输入公司电话"></el-input>
                      </div>
                      <div>
                        <span>公司邮箱</span>
                        <el-input v-model="serviceProviderForm[0].splrEmail"
                                  placeholder="请输入公司邮箱"></el-input>
                      </div>
                      <div>
                        <span>公司官网</span>
                        <el-input v-model="serviceProviderForm[0].splrWeb"
                                  placeholder="请输入公司官网"></el-input>
                      </div>
                      <div>
                        <span>注册资本</span>
                        <el-input v-model="serviceProviderForm[0].registerCapital"
                                  placeholder="请输入注册资本"></el-input>
                      </div>
                      <div>
                        <span>实缴资本</span>
                        <el-input v-model="serviceProviderForm[0].actualCapital"
                                  placeholder="请输入实缴资本"></el-input>
                      </div>
                      <div>
                        <span>经营状态</span>
                        <el-input v-model="serviceProviderForm[0].manageState"
                                  placeholder="请输入公司经营状态"></el-input>
                      </div>
                      <div>
                        <span>成立日期</span>
                        <el-date-picker type="date"
                                        v-model="serviceProviderForm[0].establishDate"
                                        placeholder="选择日期"
                                        class="datePickerDate">
                        </el-date-picker>
                      </div>
                      <div>
                        <span>核准日期</span>
                        <el-date-picker type="date"
                                        v-model="serviceProviderForm[0].approvalDate"
                                        placeholder="选择日期"
                                        class="datePickerDate">
                        </el-date-picker>
                      </div>
                      <div>
                        <span>注册类型</span>
                        <el-input v-model="serviceProviderForm[0].registerType"
                                  placeholder="请输入公司注册类型"></el-input>
                      </div>
                      <div>
                        <span>信用代码</span>
                        <el-input v-model="serviceProviderForm[0].creditCode"
                                  placeholder="请输入公司信用代码"></el-input>
                      </div>
                      <div>
                        <span>识别号</span>
                        <el-input v-model="serviceProviderForm[0].taxpayerNo"
                                  placeholder="请输入公司识别号"></el-input>
                      </div>
                      <div>
                        <span>注册号</span>
                        <el-input v-model="serviceProviderForm[0].registerNo"
                                  placeholder="请输入公司注册号"></el-input>
                      </div>
                      <div>
                        <span>机构代码</span>
                        <el-input v-model="serviceProviderForm[0].orgCode"
                                  placeholder="请输入机构代码"></el-input>
                      </div>
                      <div>
                        <span>登记机关</span>
                        <el-input v-model="serviceProviderForm[0].registerOffice"
                                  placeholder="请输入登记机关"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item label="">
                      <div>
                        <span>所属行业</span>
                        <el-select v-model="serviceProviderForm[0].subIndustry"
                                   @change="elSelectChangeEventA"
                                   placeholder="请选择属于行业">
                          <el-option v-for="(item,index) in industryA"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                        <el-select v-model="serviceProviderForm[0].industryDetail"
                                   @change="elSelectChangeEventB"
                                   placeholder="请选择属于行业">
                          <el-option v-for="(item,index) in industryB"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                    <el-form-item label="">
                      <div>
                        <span>所属区域</span>
                        <el-select v-model="serviceProviderForm[0].subArea1"
                                   @change="elSelectChangeCityEvent"
                                   placeholder="请选择所属区域">
                          <el-option v-for="(item,index) in cityA"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                        <el-select v-model="serviceProviderForm[0].subArea2"
                                   @change="elSelectChangeCityBEvent"
                                   placeholder="请选择所属区域">
                          <el-option v-for="(item,index) in cityB"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                        <el-select v-model="serviceProviderForm[0].subArea3"
                                   @change="elSelectChangeCityCEvent"
                                   placeholder="请选择所属区域">
                          <el-option v-for="(item,index) in cityC"
                                     :key="index"
                                     :label="item.itemName"
                                     :value="item.dictItemId"></el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <div>
                        <span>经营范围</span>
                        <el-input v-model="serviceProviderForm[0].manageRange"
                                  placeholder="请输入经营范围"></el-input>
                      </div>
                    </el-form-item>
                  </el-form>
                  <el-button @click="serviceProviderFormUpload(1)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="高管信息">
                  <el-form :inline="true"
                           ref=""
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi">
                      <div>股东信息</div>
                      <div>
                        <div>姓名</div>
                        <div>持股比例</div>
                        <div>认缴出资</div>
                        <div>认缴日期</div>
                        <div>实缴出资</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in serviceProviderForm[0].custSplrShareholderList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.shareholder"
                                    placeholder="请输入姓名" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.shareholdRatio"
                                    placeholder="请输入持股比例" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.admitPay"
                                    placeholder="请输入出资金额" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-date-picker v-model="item.admitDate"
                                          type="date"
                                          placeholder="选择日期">
                          </el-date-picker>
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.actualPay"
                                    placeholder="请输入实缴金额" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(serviceProviderForm[0].custSplrShareholderList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow5">新增股东信息</el-button>
                    </el-row>
                  </el-form>
                  <el-form :inline="true"
                           ref=""
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi dongjiangaoxinxi">
                      <div>董监高信息</div>
                      <div>
                        <div>姓名</div>
                        <div>职务</div>
                        <div>电话</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in serviceProviderForm[0].custSplrDirectorList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.name"
                                    placeholder="请输入姓名" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.post"
                                    placeholder="请输入职务" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.phone"
                                    placeholder="请输入电话" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(serviceProviderForm[0].custSplrDirectorList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow6">新增董监高信息</el-button>
                    </el-row>
                  </el-form>
                  <el-form :inline="true"
                           ref=""
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi guanlicengxinxi">
                      <div>管理层信息</div>
                      <div>
                        <div>姓名</div>
                        <div>部门</div>
                        <div>职务</div>
                        <div>电话</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in serviceProviderForm[0].custSplrManageList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.name"
                                    placeholder="请输入姓名" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.department"
                                    placeholder="请输入部门" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.post"
                                    placeholder="请输入职务" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.phone"
                                    placeholder="请输入电话" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(serviceProviderForm[0].custSplrManageList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow7">新增管理层信息</el-button>
                    </el-row>
                  </el-form>
                  <el-button @click="serviceProviderFormUpload(2)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="企业信息">
                  <el-form ref=""
                           label-width="80px"
                           class="gongshangxinxi">
                    <el-form-item label="">
                      <div>
                        <span>组织架构</span>
                        <el-input v-model="serviceProviderForm[0].orgFramework"
                                  placeholder="请输入组织架构"></el-input>
                      </div>
                      <div>
                        <span>部门职责</span>
                        <el-input v-model="serviceProviderForm[0].departmentDuty"
                                  placeholder="请输入部门职责"></el-input>
                      </div>
                      <div>
                        <span>人员规模</span>
                        <el-input v-model="serviceProviderForm[0].personnelScale"
                                  placeholder="请输入人员规模"></el-input>
                      </div>
                      <div>
                        <span>参保人数</span>
                        <el-input v-model="serviceProviderForm[0].insuranceAmount"
                                  placeholder="请输入参保人数"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item label="">
                      <div>
                        <span>企业规模</span>
                        <el-select v-model="serviceProviderForm[0].splrScale"
                                   placeholder="请选择企业规模">
                          <el-option value="大型企业"></el-option>
                          <el-option value="中型企业"></el-option>
                          <el-option value="小型企业"></el-option>
                          <el-option value="微型企业"></el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>愿景</span>
                        <el-input v-model="serviceProviderForm[0].vision"
                                  type="textarea"
                                  placeholder="请输入愿景"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>使命</span>
                        <el-input v-model="serviceProviderForm[0].mission"
                                  type="textarea"
                                  placeholder="请输入使命"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>价值观</span>
                        <el-input v-model="serviceProviderForm[0].value"
                                  type="textarea"
                                  placeholder="请输入价值观"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>经营理念</span>
                        <el-input v-model="serviceProviderForm[0].idea"
                                  type="textarea"
                                  placeholder="请输入经营理念"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>简介</span>
                        <el-input v-model="serviceProviderForm[0].enterpriceIntro"
                                  type="textarea"
                                  placeholder="请输入公司简介"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemTextarea">
                      <div>
                        <span>荣誉称号</span>
                        <el-input v-model="serviceProviderForm[0].honorTitle"
                                  type="textarea"
                                  placeholder="请输入荣誉称号"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item class="elFormItemElButton">
                      <span>Logo</span>
                      <img :src="serviceProviderForm[0].logo"
                           alt="">
                      <el-upload action=''
                                 :accept="'image/*'"
                                 :show-file-list='false'
                                 :on-change="getFile2"
                                 :before-upload="beforeAvatarFileUpload"
                                 list-type="picture"
                                 :auto-upload="false">
                        <el-button size="small"
                                   type="primary">上传图片</el-button>
                      </el-upload>
                    </el-form-item>
                    <el-form :inline="true"
                             ref=""
                             label-width="65px"
                             size="medium">
                      <div class="gaoguanxinxi zizhizhengshu">
                        <div>资质证书</div>
                        <div>
                          <div>证书名称</div>
                          <div>资质水平</div>
                          <div>操作</div>
                        </div>
                        <el-row class="firstChildIsNone"
                                style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                                v-for="(item,index) in serviceProviderForm[0].custSplrQulificationList"
                                :key="index">
                          <el-form-item label="">
                            <el-input v-model="item.qualName"
                                      placeholder="请输入证书名称" />
                          </el-form-item>
                          <el-form-item label="">
                            <el-select v-model="item.qualLevel"
                                       @change="elSelectCustSplrQulificationList(val,index)"
                                       placeholder="请选择资质水平">
                              <el-option value="国家级"></el-option>
                              <el-option value="省部级"></el-option>
                              <el-option value="地区级"></el-option>
                              <el-option value="行业水平"></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="">
                            <el-button type="danger"
                                       size="medium"
                                       @click="removeRow(serviceProviderForm[0].custSplrQulificationList,index)">删除</el-button>
                          </el-form-item>
                        </el-row>
                        <el-button type="primary"
                                   class="newAddShuxing"
                                   size="medium"
                                   @click="addRow8()">新增资质证书</el-button>
                      </div>
                      <div class="gaoguanxinxi guanlicengxinxi">
                        <div>知识产权</div>
                        <div>
                          <div>产权类型</div>
                          <div>产权名称</div>
                          <div>发明人</div>
                          <div>专利号</div>
                          <div>专利申请日期</div>
                          <div>证书号</div>
                          <div>操作</div>
                        </div>
                        <el-row class="firstChildIsNone"
                                style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                                v-for="(item,index) in serviceProviderForm[0].custSplrIprList"
                                :key="index">
                          <el-form-item label="">
                            <el-select v-model="item.type"
                                       placeholder="请选择类型"
                                       :disabled='true'>
                              <el-option label="发明"></el-option>
                              <el-option label="实用新型"></el-option>
                              <el-option label="外观设计"></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.iprName"
                                      placeholder="请输入产权名称"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.inventor"
                                      placeholder="请输入发明人名称"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.patentNo"
                                      placeholder="请输入专利号"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label="">
                            <el-date-picker type="date"
                                            class="patentapplicationdate"
                                            v-model="item.patentDt"
                                            placeholder="选择日期"
                                            :disabled='true'>
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item label="">
                            <el-input v-model="item.certificateNo"
                                      placeholder="请输入证书号"
                                      :disabled='true' />
                          </el-form-item>
                          <el-form-item label=""
                                        class="twoButtonClass">
                            <el-button type="danger"
                                       size="medium"
                                       @click="removeRow(serviceProviderForm[0].custSplrIprList,index)">删除</el-button>
                            <el-button type="danger"
                                       size="medium"
                                       @click="secendAddDrawer(index)">编辑</el-button>
                            <el-drawer title="新增知识产权"
                                       :visible.sync="drawer2"
                                       :direction="direction2"
                                       :before-close="handleClose2"
                                       size='50%'
                                       custom-class="drawer2">
                              <el-form-item label=""
                                            class="patentForm">
                                <div>
                                  <span>产权类型</span>
                                  <el-select v-model="custCorpIprListMy.type"
                                             @change="custCorpIprListMyType"
                                             placeholder="请选择产权类型">
                                    <el-option value="发明"></el-option>
                                    <el-option value="实用新型"></el-option>
                                    <el-option value="外观设计"></el-option>
                                  </el-select>
                                </div>
                                <div>
                                  <span>产权名称</span>
                                  <el-input v-model="custCorpIprListMy.iprName"
                                            placeholder="请输入产权名称" />
                                </div>
                                <div>
                                  <span>发明人</span>
                                  <el-input v-model="custCorpIprListMy.inventor"
                                            placeholder="请输入发明人名称" />
                                </div>
                                <div>
                                  <span>专利号</span>
                                  <el-input v-model="custCorpIprListMy.patentNo"
                                            placeholder="请输入专利号" />
                                </div>
                                <div>
                                  <span>申请日期</span>
                                  <el-date-picker type="date"
                                                  v-model="custCorpIprListMy.patentDt"
                                                  placeholder="选择日期">
                                  </el-date-picker>
                                </div>
                                <div>
                                  <span>专利权人</span>
                                  <el-input v-model="custCorpIprListMy.patentee"
                                            placeholder="请输入专利权人名称" />
                                </div>
                                <div>
                                  <span>地址</span>
                                  <el-input v-model="custCorpIprListMy.iprAdd"
                                            placeholder="请输入地址" />
                                </div>
                                <div>
                                  <span>公告日期</span>
                                  <el-date-picker type="date"
                                                  v-model="custCorpIprListMy.noticeDt"
                                                  placeholder="选择日期">
                                  </el-date-picker>
                                </div>
                                <div>
                                  <span>公告号</span>
                                  <el-input v-model="custCorpIprListMy.noticeNo"
                                            placeholder="请输入授权公众号" />
                                </div>
                                <div>
                                  <span>证书号</span>
                                  <el-input v-model="custCorpIprListMy.certificateNo"
                                            placeholder="请输入证书号" />
                                </div>
                                <div style="width:100%;"
                                     class="drawer2MyButton2">
                                  <el-button @click="preservationCustCorpIprListMy(index)">保存</el-button>
                                  <el-button @click="cancelCustCorpIprListMy">取消</el-button>
                                </div>
                              </el-form-item>
                            </el-drawer>
                          </el-form-item>
                        </el-row>
                      </div>
                      <el-row>
                        <el-button type="primary"
                                   size="medium"
                                   @click="addRow9">新增知识产权</el-button>
                      </el-row>
                    </el-form>
                  </el-form>
                  <el-form :inline="true"
                           ref=""
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi yewugugan">
                      <div>业务骨干</div>
                      <div>
                        <div>姓名</div>
                        <div>部门</div>
                        <div>职务</div>
                        <div>个人简历</div>
                        <div>专业能力</div>
                        <div>专注行业</div>
                        <div>擅长领域</div>
                        <div>操作</div>
                      </div>
                      <el-row style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in serviceProviderForm[0].custSplrSkeletonList">
                        <el-form-item label="">
                          <el-input v-model="item.name"
                                    placeholder="请输入姓名" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.department"
                                    placeholder="请输入部门" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.post"
                                    placeholder="请输入职务" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.resume"
                                    placeholder="请输入个人简历" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.majorAbility"
                                    placeholder="请输入专业能力" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.fucosIndustry"
                                    placeholder="请输入专注行业" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.specialtyField"
                                    placeholder="请输入擅长领域" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(serviceProviderForm[0].custSplrSkeletonList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow10">新增业务骨干</el-button>
                    </el-row>
                  </el-form>
                  <el-button @click="serviceProviderFormUpload(3)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="经营情况">
                  <el-form ref=""
                           label-width="80px"
                           class="gongshangxinxi">
                    <el-form-item label="">
                      <div>
                        <span>收入</span>
                        <el-input v-model="income"
                                  placeholder="请输入近三年收入"></el-input>
                        <el-input v-model="income2"
                                  placeholder="请输入近三年收入"></el-input>
                        <el-input v-model="income3"
                                  placeholder="请输入近三年收入）"></el-input>
                      </div>
                      <div>
                        <span>利润</span>
                        <el-input v-model="profit"
                                  placeholder="请输入近三年利润"></el-input>
                        <el-input v-model="profit2"
                                  placeholder="请输入近三年利润"></el-input>
                        <el-input v-model="profit3"
                                  placeholder="请输入近三年利润"></el-input>
                      </div>
                    </el-form-item>
                  </el-form>
                  <el-button @click="serviceProviderFormUpload(4)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="业务情况">
                  <el-form ref=""
                           label-width="80px"
                           class="gongshangxinxi">
                    <el-form-item label="">
                      <div>
                        <span>主营范围</span>
                        <el-input v-model="serviceProviderForm[0].mainBusiness"
                                  placeholder="请输入主营范围"></el-input>
                      </div>
                      <div>
                        <span>竞争优势</span>
                        <el-input v-model="serviceProviderForm[0].advantage"
                                  placeholder="请输入竞争优势"></el-input>
                      </div>
                      <div>
                        <span>三年业务量</span>
                        <el-input v-model="serviceProviderForm[0].businessVolume"
                                  placeholder="请输入业务量"></el-input>
                      </div>
                    </el-form-item>
                    <div class="gaoguanxinxi guanlicengxinxi">
                      <div>产品&服务名称</div>
                      <div>
                        <div>名称</div>
                        <div>简介</div>
                        <div>主要效果</div>
                        <div>适用范围</div>
                        <div>操作</div>
                      </div>
                      <el-row class="firstChildIsNone"
                              style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in serviceProviderForm[0].custSplrProdList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.prodserName"
                                    placeholder="请输入名称" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.prodserIntro"
                                    placeholder="请输入简介" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.mainEffect"
                                    placeholder="请输入主要效果" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.applicationScope"
                                    placeholder="请输入适用范围" />
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(serviceProviderForm[0].custSplrProdList,index)">删除</el-button>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow11">+新增产品&服务名称</el-button>
                    </el-row>
                  </el-form>
                  <el-button @click="serviceProviderFormUpload(5)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="典型服务案例">
                  <el-form ref=""
                           label-width="80px"
                           class="gongshangxinxi">
                    <div class="gaoguanxinxi guanlicengxinxi">
                      <div>典型服务案例</div>
                      <div>
                        <div>项目名称</div>
                        <div>开始时间</div>
                        <div>结束时间</div>
                        <div>业务类型</div>
                        <div>操作</div>
                      </div>
                      <el-row class="firstChildIsNone"
                              style="border-bottom: 1px solid #f0f0f0;padding: 10px;"
                              v-for="(item,index) in serviceProviderForm[0].custSplrCaseList"
                              :key="index">
                        <el-form-item label="">
                          <el-input v-model="item.projectName"
                                    placeholder="请输入项目名称"
                                    :disabled="true" />
                        </el-form-item>
                        <el-form-item label=""
                                      class="selectStartTime">
                          <el-date-picker type="date"
                                          v-model="item.startDt"
                                          placeholder="选择日期"
                                          :disabled="true">
                          </el-date-picker>
                        </el-form-item>
                        <el-form-item label=""
                                      class="selectStartTime">
                          <el-date-picker type="date"
                                          v-model="item.endDt"
                                          placeholder="选择日期"
                                          :disabled="true">
                          </el-date-picker>
                        </el-form-item>
                        <el-form-item label="">
                          <el-select v-model="item.businessType"
                                     placeholder="请选择业务类型"
                                     :disabled="true">
                          </el-select>
                        </el-form-item>
                        <el-form-item label=""
                                      class="twoButtonClass">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(serviceProviderForm[0].custSplrCaseList,index)">删除</el-button>
                          <el-button type="danger"
                                     size="medium"
                                     @click="secendAddDrawer2(index)">编辑</el-button>
                          <el-drawer title="新增典型案例"
                                     :visible.sync="drawer5"
                                     :direction="direction2"
                                     :before-close="handleClose5"
                                     size='50%'
                                     custom-class="drawer2">
                            <el-form-item label=""
                                          class="patentForm">
                              <div>
                                <span>项目名称</span>
                                <el-input v-model="custSplrCaseListMy.projectName"
                                          placeholder="请输入项目名称"></el-input>
                              </div>
                              <div>
                                <span>开始时间</span>
                                <el-date-picker type="date"
                                                v-model="custSplrCaseListMy.startDt"
                                                placeholder="选择日期">
                                </el-date-picker>
                              </div>
                              <div>
                                <span>结束时间</span>
                                <el-date-picker type="date"
                                                v-model="custSplrCaseListMy.endDt"
                                                placeholder="选择日期">
                                </el-date-picker>
                              </div>
                              <div>
                                <span>业务类型</span>
                                <el-select v-model="custSplrCaseListMy.businessType"
                                           placeholder="请选择一级业务类型"
                                           id="changeFirstClassMenu"
                                           @change="changeFirstClassMenu()">
                                  <option v-for="item in firstClassMenu"
                                          :data-value="item.dictItemId">{{item.itemName}}</option>
                                </el-select>
                              </div>
                              <div>
                                <span>业务类型</span>
                                <el-select v-model="custSplrCaseListMy.businessDetail"
                                           placeholder="请选择二级业务类型"
                                           @change="changeSecendClassMenu()">
                                  <option v-for="item in secedClassMenu"
                                          :data-value="item.dictItemId">{{item.itemName}}</option>
                                </el-select>
                              </div>
                              <div>
                                <span>专业领域</span>
                                <el-input v-model="custSplrCaseListMy.field"
                                          placeholder="请输入专业领域"></el-input>
                              </div>
                              <div>
                                <span>所在行业</span>
                                <el-select v-model="custSplrCaseListMy.industry"
                                           @change="elSelectChangeEventDXAL"
                                           placeholder="请选择所在行业">
                                  <el-option v-for="(item,index) in industryA"
                                             :key="index"
                                             :label="item.itemName"
                                             :value="item.dictItemId"></el-option>
                                </el-select>
                              </div>
                              <div>
                                <span>背景描述</span>
                                <el-input v-model="custSplrCaseListMy.background"
                                          placeholder="请输入背景描述"></el-input>
                              </div>
                              <div>
                                <span>调研工具</span>
                                <el-input v-model="custSplrCaseListMy.surveyTool"
                                          placeholder="请输入调研工具"></el-input>
                              </div>
                              <div>
                                <span>调研方法</span>
                                <el-input v-model="custSplrCaseListMy.surveyMethod"
                                          placeholder="请输入调研方法"></el-input>
                              </div>
                              <div>
                                <span>调研结论</span>
                                <el-input v-model="custSplrCaseListMy.surveyResult"
                                          placeholder="请输入调研结论"></el-input>
                              </div>
                              <div>
                                <span>解决方案</span>
                                <el-input v-model="custSplrCaseListMy.solution"
                                          placeholder="请输入解决方案"></el-input>
                              </div>
                              <div>
                                <span>实施效果</span>
                                <el-input v-model="custSplrCaseListMy.effect"
                                          placeholder="请输入实施效果"></el-input>
                              </div>
                              <div class="licengbeishijian">
                                  <div>实施计划</div>
                                  <div>
                                      <div>里程碑事件</div>
                                      <div>主要内容</div>
                                      <div>服务开始时间</div>
                                      <div>服务结束时间</div>
                                      <div>操作</div>
                                  </div>
                                  <el-row class="firstChildIsNone" style="border-bottom: 1px solid #f0f0f0;padding: 10px;">
                                      <el-form-item label="">
                                          <el-input placeholder="请输入里程碑事件"/>
                                      </el-form-item>
                                      <el-form-item label="">
                                          <el-input placeholder="请输入主要内容"/>
                                      </el-form-item>
                                      <el-form-item label="">
                                          <el-date-picker
                                              type="date"
                                              placeholder="选择日期">
                                          </el-date-picker>
                                      </el-form-item>
                                      <el-form-item label="">
                                          <el-date-picker
                                              type="date"
                                              placeholder="选择日期">
                                          </el-date-picker>
                                      </el-form-item>
                                      <el-form-item label="">
                                          <el-button type="danger" size="medium" @click="removeRow(serviceProviderForm[0].custSplrProdList,index)">删除</el-button>
                                      </el-form-item>
                                  </el-row>
                              </div>
                              <el-row>
                                  <el-button type="primary" size="medium" @click="addRow10">+新增实施计划</el-button>
                              </el-row>
                              <div style="width:100%;"
                                   class="drawer2MyButton2">
                                <el-button @click="preservationCustSplrCaseListMy(index)">保存</el-button>
                                <el-button @click="cancelDXAL">取消</el-button>
                              </div>
                            </el-form-item>
                          </el-drawer>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow12">新增案例</el-button>
                    </el-row>
                  </el-form>
                  <el-button @click="serviceProviderFormUpload(6)">信息提交</el-button>
                </el-tab-pane>
              </el-tabs>
            </el-drawer>
          </div>
        </div>
      </div>
      <div class="inforight">
        <template v-for="item in iconList">
          <div class="details">
            <div class="icon">
              <img :src="item.iconSrc"
                   alt="">
            </div>
            <h4>
              {{item.title}}
            </h4>
            <p>{{item.content}}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {
  serverTender,
  file,
  changeAvatar,
  getMyInfo,
  calcCorpLevel,
  calcSplrLevel,
  corpFinish,
  hyList,
  htListChildren,
  getCity1,
  getCity2,
  getCity3,
  updateCorpInfo,
  updateCorpMainInfo,
  splrFinish,
  updateCorpMainManage,
  updateSplrInfo,
  updateSplrMainManage,
  updateSplrMainInfo,
  updateSplrBusinessInfo,
  getBusinessList,
  getBusinessTowList,
  updateSplrServiceInfo,
} from "@/components/api/api";
import base from "@/components/api/api";
import 'babel-polyfill'; // es6 shim
import myUpload from 'vue-image-crop-upload';
export default {
  name: 'myInfo',
  props: {
    dataList: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      iconList: [{
        title: '会员等级',
        content: '',
        iconSrc: require('@/assets/imgs/icon-list1.png')
      }, {
        title: '诚信分',
        content: "",
        iconSrc: require('@/assets/imgs/icon-list2.png')
      }, {
        title: '我的项目',
        content: '12',
        iconSrc: require('@/assets/imgs/icon-list3.png')
      }, {
        title: '我的活动',
        content: '12',
        iconSrc: require('@/assets/imgs/icon-list4.png')
      }, {
        title: '我的收藏',
        content: '102',
        iconSrc: require('@/assets/imgs/icon-list5.png')
      }],
      userTypeName: "",
      imageUrl: '',
      avatar: "",
      show: false,
      size: 2.1,
      integrity: "",
      drawer: false,
      drawer2: false,
      drawer3: false,
      drawer4: false,
      drawer5: false,
      drawer6: false,
      direction: 'btt',
      direction2: 'btt',
      // 企业会员信息
      enterpriseMemberForm: [{
        corpName: '',
        value: '',
      }],
      // 所属行业一级
      industryA: [
        { "dictItemId": null, }
      ],
      industryAValue: "",
      // 所属行业二级
      industryB: [
        { "dictItemId": null, }
      ],
      // 城市一级二级三级
      cityA: "",
      cityB: "",
      cityC: "",
      // 收入
      income: 0,
      income2: 0,
      income3: 0,
      // 利润
      profit: 0,
      profit2: 0,
      profit3: 0,
      // 企业会员知识产权
      custCorpIprListMy: {
        certificateNo: "",
        inventor: "",
        iprAdd: "",
        iprId: "",
        iprName: "",
        noticeDt: "",
        noticeNo: "",
        patentDt: "",
        patentNo: "",
        patentee: "",
        revision: "",
        type: "",
      },
      // 正在编辑知识产权的index
      custCorpIprListMyIndex: "",
      // 服务供应商信息
      serviceProviderForm: [{}],
      // 正在编辑典型案例的index
      custSplrCaseListMyIndex: "",
      // 典型案例临时对象
      custSplrCaseListMy: {
        background: "",
        businessDetail: "",
        businessType: "",
        caseId: "",
        createdBy: "",
        createdTime: "",
        effect: "",
        endDt: "",
        field: "",
        industry: "",
        projectName: "",
        revision: "",
        solution: "",
        splrId: "",
        splrName: "",
        splrTagList: "",
        startDt: "",
        surveyCustomer: "",
        surveyMethod: "",
        surveyResult: "",
        surveyTool: "",
        updatedBy: "",
        updatedTime: "",
      },
      // 典型案例 一级业务options
      firstClassMenu: "",
      // 一级的自定义属性
      firstClassMenuDataValue: "",
      // 典型案例 二级options
      secedClassMenu: "",
      // 二级的自定义属性
      secendClassMenuDataValue: "",
      form: {
        name: '',
        name2: "",
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      form2: {
        organizationalStructure: '',
        departmentalResponsibilities: "",
        personnelScale: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      patentForm: {
        patentType: '',
      },
      toDay: "",

    }
  },
  components: {
    "my-upload": myUpload
  },
  methods: {
    beforeAvatarFileUpload: function (file) {
      //限制的上限为10M
      const isLt10M = file.size / 1024 / 1024 < 1.5;
      if (!isLt10M) {
        this.$confirm('上传文件大小不能超过 1.5MB!');
      }
      return isLt10M;
    },
    // 转化为base64格式
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      })
    },
    getFile (file, fileList) {
      this.getBase64(file.raw).then(res => {
        this.enterpriseMemberForm[0].logo = res;
      });
    },
    getFile2 (file, fileList) {
      this.getBase64(file.raw).then(res => {
        this.serviceProviderForm[0].logo = res;
      });
    },
    elSelectScale (val) {
      this.enterpriseMemberForm[0].corpScale = val
    },
    serviceProviderFormUpload (index) {
      this.serviceProviderForm[0].income3years = this.income + "," + this.income2 + "," + this.income3;
      this.serviceProviderForm[0].profit3years = this.profit + "," + this.profit2 + "," + this.profit3;
      this.serviceProviderForm[0].subArea = this.serviceProviderForm[0].subArea1 + " " + this.serviceProviderForm[0].subArea2 + " " + this.serviceProviderForm[0].subArea3;
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.serviceProviderForm[0].splrId = user.roleId;
      let parameter = {};
      getMyInfo({ "userId": user.userId }).then(res => {
        if (res.data.code === 200) {
          this.integrity = res.data.data.integrity;
        }
      })
      switch (index) {
        case 1:
          parameter = this.certainFunction(this.serviceProviderForm[0], [
            "splrId",
            "splrName",
            "splrAdd",
            "splrPhoneno",
            "splrEmail",
            "splrWeb",
            "registerCapital",
            "actualCapital",
            "manageState",
            "establishDate",
            "approvalDate",
            "registerType",
            "creditCode",
            "taxpayerNo",
            "registerNo",
            "orgCode",
            "registerOffice",
            "subIndustry",
            "industryDetail",
            "subArea",
            "manageRange"
          ])
          updateSplrInfo(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 2:
          parameter = this.certainFunction(this.serviceProviderForm[0], [
            "custSplrShareholderList",
            "custSplrDirectorList",
            "custSplrManageList",
          ])
          updateSplrMainManage(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 3:
          let custSplr = this.certainFunction(this.serviceProviderForm[0], [
            "splrId",
            "orgFramework",
            "departmentDuty",
            "personnelScale",
            "insuranceAmount",
            "splrScale",
            "vision",
            "mission",
            "value",
            "idea",
            "enterpriceIntro",
            "honorTitle",
          ])
          let custSplrQulificationList = this.certainFunction(this.serviceProviderForm[0], [
            "custSplrQulificationList",
          ])
          let custSplrIprList = this.certainFunction(this.serviceProviderForm[0], [
            "custSplrIprList",
          ])

          let custSplrSkeletonList = this.certainFunction(this.serviceProviderForm[0], [
            "custSplrSkeletonList",
          ])
          for (let i = 0; i < custSplrQulificationList.custSplrQulificationList.length; i++) {
            custSplrQulificationList.custSplrQulificationList[i].splrId = user.roleId
          }
          for (let i = 0; i < custSplrIprList.custSplrIprList.length; i++) {
            custSplrIprList.custSplrIprList[i].splrId = user.roleId
          }
          for (let i = 0; i < custSplrSkeletonList.custSplrSkeletonList.length; i++) {
            custSplrSkeletonList.custSplrSkeletonList[i].splrId = user.roleId
          }
          let splrMainInfoDTO = {
            'custSplr': custSplr,
            'custSplrQulificationList': custSplrQulificationList.custSplrQulificationList,
            'custSplrIprList': custSplrIprList.custSplrIprList,
            'custSplrSkeletonList': custSplrSkeletonList.custSplrSkeletonList
          };
          updateSplrMainInfo(splrMainInfoDTO, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 4:
          parameter = this.certainFunction(this.serviceProviderForm[0], [
            "splrId",
            "income3years",
            "profit3years",
          ])
          updateSplrInfo(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 5:
          let custSplrVal = this.certainFunction(this.serviceProviderForm[0], [
            "splrId",
            "businessVolume",
            "advantage",
            "mainBusiness",
            "custSplrProdList",
          ])
          let custSplrProdListVal = this.certainFunction(this.serviceProviderForm[0], [
            "custSplrProdList",
          ])
          for (let i = 0; i < custSplrProdListVal.custSplrProdList.length; i++) {
            custSplrProdListVal.custSplrProdList[i].splrId = user.roleId
          }
          let splrBusinessInfoDTOVal = {
            "custSplr": custSplrVal,
            "custSplrProdList": custSplrProdListVal.custSplrProdList
          }
          updateSplrBusinessInfo(splrBusinessInfoDTOVal, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 6:
          let custSplrCaseListVal = this.certainFunction(this.serviceProviderForm[0], [
            "custSplrCaseList"
          ])
          for (let i = 0; i < custSplrCaseListVal.custSplrCaseList.length; i++) {
            custSplrCaseListVal.custSplrCaseList[i].splrId = user.roleId
          }
          updateSplrServiceInfo(custSplrCaseListVal.custSplrCaseList, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;

        default:
          break;
      }
    },
    corporateMembershipUpload (index) {
      this.enterpriseMemberForm[0].income3years = this.income + "," + this.income2 + "," + this.income3;
      this.enterpriseMemberForm[0].profit3years = this.profit + "," + this.profit2 + "," + this.profit3;
      this.enterpriseMemberForm[0].subArea = this.enterpriseMemberForm[0].subArea1 + " " + this.enterpriseMemberForm[0].subArea2 + " " + this.enterpriseMemberForm[0].subArea3;
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.enterpriseMemberForm[0].corpId = user.roleId;
      getMyInfo({ "userId": user.userId }).then(res => {
        if (res.data.code === 200) {
          this.integrity = res.data.data.integrity;
        }
      })
      let parameter = {};
      switch (index) {
        case 1:
          parameter = this.certainFunction(this.enterpriseMemberForm[0], [
            "actualCapital",
            "approvalDate",
            "corpAdd",
            "corpEmail",
            "corpName",
            "corpPhoneno",
            "corpWeb",
            "creditCode",
            "establishDate",
            "manageRange",
            "manageState",
            "orgCode",
            "registerCapital",
            "registerNo",
            "registerOffice",
            "registerType",
            "subArea",
            "subIndustry",
            "industryDetail",
            "taxpayerNo",
            "corpId"
          ])
          updateCorpInfo(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 2:
          parameter = this.certainFunction(this.enterpriseMemberForm[0], [
            "custCorpShareholderList",
            "custCorpDirectorList",
            "custCorpManageList",
            "corpId"
          ])
          updateCorpMainManage(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 3:
          let custCorp = this.certainFunction(this.enterpriseMemberForm[0], [
            "orgFramework",
            "departmentDuty",
            "personnelScale",
            "insuranceAmount",
            "vision",
            "mission",
            "value",
            "idea",
            "enterpriceIntro",
            "logo",
            "corpId",
            "corpScale"
          ])
          let custCorpIprList = this.certainFunction(this.enterpriseMemberForm[0], [
            "custCorpIprList",
          ])
          let newCustCorpIprList = []
          for (let i in custCorpIprList) {
            for (let j in custCorpIprList[i]) {
              custCorpIprList[i][j].corpId = user.roleId
              newCustCorpIprList.push(custCorpIprList[i][j])
            }
          }
          let corpMainInfoDTO = {
            'custCorp': custCorp,
            'custCorpIprList': newCustCorpIprList
          }
          updateCorpMainInfo(corpMainInfoDTO, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 4:
          parameter = this.certainFunction(this.enterpriseMemberForm[0], [
            "income3years",
            "profit3years",
            "corpId",
          ])
          updateCorpInfo(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 5:
          parameter = this.certainFunction(this.enterpriseMemberForm[0], [
            "commerceMd",
            "businessMd",
            "profitSource",
            "priProd",
            "standardProd",
            "profitProd",
            "competitor",
            "advantage",
            "marketProspect",
            "corpId",
          ])
          updateCorpInfo(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 6:
          parameter = this.certainFunction(this.enterpriseMemberForm[0], [
            "strategyTarget",
            "strategyTarget2",
            "strategyTarget3",
            "prodPlan",
            "techPlan",
            "marketPlan",
            "talentPlan",
            "corpId",
          ])
          updateCorpInfo(parameter, user.roleId).then(res => {
            if (res.data.code === 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;

        default:
          break;
      }
    },
    // 提取旧对象部分属性到新对象
    certainFunction (obj, keys) {
      return keys.reduce((result, key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }

        return result;
      }, {});
    },
    // 所属区域一级
    elSelectChangeCityEvent (val) {
      getCity2({ "itemId": val }).then(res => {
        if (res.data.code === 200) {
          this.cityB = res.data.data
          for (var i = 0; i < this.cityA.length; i++) {
            if (this.cityA[i].dictItemId == val) {
              this.enterpriseMemberForm[0].subArea1 = this.cityA[i].itemName
              this.serviceProviderForm[0].subArea1 = this.cityA[i].itemName
            }
          }
        }
      })
    },
    // 所属区域二级
    elSelectChangeCityBEvent (val) {
      getCity3({ "itemId": val }).then(res => {
        if (res.data.code === 200) {
          this.cityC = res.data.data
          for (var i = 0; i < this.cityB.length; i++) {
            if (this.cityB[i].dictItemId == val) {
              this.enterpriseMemberForm[0].subArea2 = this.cityB[i].itemName
              this.serviceProviderForm[0].subArea2 = this.cityB[i].itemName
            }
          }
        }
      })
    },
    // 所属区域三级
    elSelectChangeCityCEvent (val) {
      getCity3({ "itemId": val }).then(res => {
        if (res.data.code === 200) {
          this.cityC = res.data.data
          for (var i = 0; i < this.cityC.length; i++) {
            if (this.cityC[i].dictItemId == val) {
              this.enterpriseMemberForm[0].subArea3 = this.cityC[i].itemName
              this.serviceProviderForm[0].subArea3 = this.cityC[i].itemName
            }
          }
        }
      })
    },
    elSelectChangeEventA (val) {
      htListChildren({ "itemId": val }).then(res => {
        if (res.data.code === 200) {
          this.industryB = res.data.data
          for (var i = 0; i < this.industryA.length; i++) {
            if (this.industryA[i].dictItemId == val) {
              this.enterpriseMemberForm[0].subIndustry = this.industryA[i].itemName
              this.serviceProviderForm[0].subIndustry = this.industryA[i].itemName
            }
          }
        }
      })
    },
    elSelectChangeEventB (val) {
      for (var i = 0; i < this.industryB.length; i++) {
        if (this.industryB[i].dictItemId == val) {
          this.enterpriseMemberForm[0].industryDetail = this.industryB[i].itemName
          this.serviceProviderForm[0].industryDetail = this.industryB[i].itemName
        }
      }
    },
    elSelectChangeEventDXAL (val) {
      for (var i = 0; i < this.industryA.length; i++) {
        if (this.industryA[i].dictItemId == val) {
          this.custSplrCaseListMy.industry = this.industryA[i].itemName
        }
      }
    },
    // elSelectCustSplrQulificationList 修改供应商资质水平
    elSelectCustSplrQulificationList (val) {

    },
    getMsg () {
      // let user = JSON.parse(sessionStorage.getItem("user"));
      // if (user.role == 0) {
      //   this.drawer = true;
      // } else {
      //   this.drawer3 = true;
      // }
      // this.$router.push('/complete/complete_two?shenfen='+user.role+'&tabSelect=1');
      this.$router.push('/fun/perfectUserInfo');
    },
    oldgetMsg(){
      let user = JSON.parse(sessionStorage.getItem("user"));
      if (user.role == 0) {
        this.drawer = true;
      } else {
        this.drawer3 = true;
      }
      // this.$router.push('/complete/complete_two?shenfen='+user.role+'&tabSelect=1');
    },
    handleClose (done) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      getMyInfo({ "userId": user.userId }).then(res => {
        if (res.data.code === 200) {
          this.integrity = res.data.data.integrity;
        }
      })
      this.$confirm('是否退出？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleClose2 (done) {
      this.$confirm('是否确认退出？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleClose3 (done) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      getMyInfo({ "userId": user.userId }).then(res => {
        if (res.data.code === 200) {
          this.integrity = res.data.data.integrity;
        }
      })
      this.$confirm('是否确认退出？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleClose4 (done) {
      this.$confirm('您信息尚未保存，是否退出？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleClose5 (done) {
      this.$confirm('您信息尚未保存，是否退出？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 1-4是企业会员
    addRow () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.enterpriseMemberForm[0].custCorpShareholderList.push({
        actualPay: '',
        admitDate: '',
        admitPay: '',
        corpId: user.roleId,
        shareholdRatio: '',
        shareholder: '',
      });
    },
    addRow2 () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.enterpriseMemberForm[0].custCorpDirectorList.push({
        name: '',
        phone: '',
        post: '',
        corpId: user.roleId,
      });
    },
    addRow3 () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.enterpriseMemberForm[0].custCorpManageList.push({
        name: '',
        phone: '',
        post: '',
        department: '',
        corpId: user.roleId,
      });
    },
    addRow4 () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.enterpriseMemberForm[0].custCorpIprList.push({
        certificateNo: "",
        inventor: "",
        iprAdd: "",
        iprId: "",
        iprName: "",
        noticeDt: "",
        noticeNo: "",
        patentDt: "",
        patentNo: "",
        patentee: "",
        revision: "",
        type: "",
      });
    },
    // 在此以后是服务供应商
    addRow5 () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.serviceProviderForm[0].custSplrShareholderList.push({
        shareholder: "",
        shareholdRatio: "",
        admitPay: "",
        admitDate: "",
        actualPay: "",
        splrId: user.roleId,
      });
    },
    addRow6 () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.serviceProviderForm[0].custSplrDirectorList.push({
        name: "",
        post: "",
        phone: "",
        splrId: user.roleId,
      });
    },
    addRow7 () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.serviceProviderForm[0].custSplrManageList.push({
        name: "",
        department: "",
        post: "",
        phone: "",
        splrId: user.roleId,
      });
    },
    addRow8 () {
      this.serviceProviderForm[0].custSplrQulificationList.push({
        qualName: "",
        qualLevel: "",
        qualfiId: ""
      });
    },
    addRow9 () {
      this.serviceProviderForm[0].custSplrIprList.push({
        type: "",
        iprName: "",
        inventor: "",
        patentNo: "",
        patentDt: "",
        patentee: "",
        iprAdd: "",
        noticeDt: "",
        noticeNo: "",
        certificateNo: "",
      });
    },
    addRow10 () {
      this.serviceProviderForm[0].custSplrSkeletonList.push({
        name: "",
        department: "",
        post: "",
        resume: "",
        fucosIndustry: "",
        specialtyField: "",
        fucosIndustry: ""
      })
    },
    addRow11 () {
      this.serviceProviderForm[0].custSplrProdList.push({
        prodserName: "",
        prodserIntro: "",
        mainEffect: "",
        applicationScope: "",
      })
    },
    addRow12 () {
      this.serviceProviderForm[0].custSplrCaseList.push({
        custSplrCaseList: ""
      })
    },
    // 删除属性列
    removeRow (contentList, index) {
      contentList.splice(index, 1);
    },
    onSubmit () {
      console.log('submit!');
    },
    sutmitImgAsPersonHeader () {
      var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false;
      if (ie) {
        document.getElementById("file").click();
      } else {
        var a = document.createEvent("MouseEvents");//FF的处理 
        a.initEvent("click", true, true);
        document.getElementById("file").dispatchEvent(a);
      }
    },
    toggleShow () {
      this.show = !this.show;
    },
    cropSuccess (imgDataUrl) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      changeAvatar({ "avatar": imgDataUrl, "userId": user.userId }).then(res => {
        if (res.data.code == 200) {
          this.$confirm(res.data.msg);
          this.$router.push("funs")
        }
      })
    },
    // 新增知识产权
    secendAddDrawer (index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      if (user.role == 1) {
        this.custCorpIprListMy = this.serviceProviderForm[0].custSplrIprList[index]
      } else {
        this.custCorpIprListMy = this.enterpriseMemberForm[0].custCorpIprList[index]
      }
      this.drawer2 = true;
      this.custCorpIprListMyIndex = index;
    },
    // 选择知识产权类型
    custCorpIprListMyType (val) {
      this.custCorpIprListMy.type = val;
    },
    // 保存知识产权
    preservationCustCorpIprListMy (index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      if (user.role == 1) {
        this.serviceProviderForm[0].custSplrIprList[index] = this.custCorpIprListMy;
      } else {
        this.enterpriseMemberForm[0].custCorpIprList[index] = this.custCorpIprListMy;
      }
      this.drawer2 = false
    },
    // 取消保存知识产权
    cancelCustCorpIprListMy () {
      this.drawer2 = false;
    },
    // 编辑典型案例
    secendAddDrawer2 (index) {
      this.custSplrCaseListMy = this.serviceProviderForm[0].custSplrCaseList[index]
      this.drawer5 = true;
      this.custSplrCaseListMyIndex = index;
    },
    // 典型案例中需要的二级业务类型和一级
    changeFirstClassMenu () {
      let obj = document.getElementById("changeFirstClassMenu");
      let index = obj.selectedIndex;
      let store_num = obj.options[index].getAttribute("data-value");
      this.firstClassMenuDataValue = store_num;
      getBusinessTowList({ "itemId": store_num }).then(res => {
        if (res.data.code === 200) {
          this.secedClassMenu = res.data.data
        }
      });
    },
    // 二级
    changeSecendClassMenu () {
      let obj = document.getElementById("changeSecendClassMenu");
      let index = obj.selectedIndex;
      let store_num = obj.options[index].getAttribute("data-value");
      this.secendClassMenuDataValue = store_num;
    },
    // 保存典型案例
    preservationCustSplrCaseListMy (index) {
      this.serviceProviderForm[0].custSplrCaseList[index] = this.custSplrCaseListMy;
      this.drawer5 = false
    },
    // 取消保存典型案例
    cancelDXAL () {
      this.drawer5 = false;
    }
  },
  mounted () {
    var _this = this
    let user = JSON.parse(sessionStorage.getItem("user"));
    getMyInfo({ "userId": user.userId }).then(res => {
      if (res.data.code === 200) {
        this.integrity = res.data.data.integrity;
      }
    })
    switch (user.role) {
      case "0":
        _this.userTypeName = "企业会员"
        calcCorpLevel({ "corpId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.iconList[1].content = res.data.type + '分';
            if (this.iconList[1].content >= 90) {
              this.iconList[0].content = "青铜高级"
            } else if (this.iconList[1].content >= 80 && this.iconList[1].content < 90) {
              this.iconList[0].content = "青铜中级"
            } else if (this.iconList[1].content >= 70 && this.iconList[1].content < 80) {
              this.iconList[0].content = "青铜级"
            } else if (this.iconList[1].content >= 60 && this.iconList[1].content < 70) {
              this.iconList[0].content = "黑铁初级"
            } else if (this.iconList[1].content >= 50 && this.iconList[1].content < 60) {
              this.iconList[0].content = "黑铁中级"
            } else {
              this.iconList[0].content = "黑铁初级"
            }
          }
        })
        corpFinish({ "corpId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.enterpriseMemberForm = res.data.data
            let arr = this.enterpriseMemberForm[0].income3years.split(",");
            let arr2 = this.enterpriseMemberForm[0].profit3years.split(",");
            this.income = arr[0];
            this.income2 = arr[1];
            this.income3 = arr[2];
            this.profit = arr2[0];
            this.profit2 = arr2[1];
            this.profit3 = arr2[2];
            let arr3 = this.enterpriseMemberForm[0].subArea.split(" ");
            this.enterpriseMemberForm[0].subArea1 = arr3[0]
            this.enterpriseMemberForm[0].subArea2 = arr3[1]
            this.enterpriseMemberForm[0].subArea3 = arr3[2]
          }
        })
        hyList().then(res => {
          if (res.data.code === 200) {
            this.industryA = res.data.data
          }
        })
        getCity1().then(res => {
          if (res.data.code === 200) {
            this.cityA = res.data.data
          }
        })
        break;
      case "1":
        _this.userTypeName = "服务供应商"
        calcSplrLevel({ "splrId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.iconList[1].content = res.data.type + '分';
            if (this.iconList[1].content >= 90) {
              this.iconList[0].content = "青铜高级"
            } else if (this.iconList[1].content >= 80 && this.iconList[1].content < 90) {
              this.iconList[0].content = "青铜中级"
            } else if (this.iconList[1].content >= 70 && this.iconList[1].content < 80) {
              this.iconList[0].content = "青铜级"
            } else if (this.iconList[1].content >= 60 && this.iconList[1].content < 70) {
              this.iconList[0].content = "黑铁初级"
            } else if (this.iconList[1].content >= 50 && this.iconList[1].content < 60) {
              this.iconList[0].content = "黑铁中级"
            } else {
              this.iconList[0].content = "黑铁初级"
            }
          }
        })
        splrFinish({ "splrId": user.roleId }).then(res => {
          if (res.data.code === 200) {
            this.serviceProviderForm = res.data.data;
            let arr = this.serviceProviderForm[0].income3years.split(",");
            let arr2 = this.serviceProviderForm[0].profit3years.split(",");
            this.income = arr[0];
            this.income2 = arr[1];
            this.income3 = arr[2];
            this.profit = arr2[0];
            this.profit2 = arr2[1];
            this.profit3 = arr2[2];
            let arr3 = this.serviceProviderForm[0].subArea.split(" ");
            this.serviceProviderForm[0].subArea1 = arr3[0]
            this.serviceProviderForm[0].subArea2 = arr3[1]
            this.serviceProviderForm[0].subArea3 = arr3[2]
          }
        })
        hyList().then(res => {
          if (res.data.code === 200) {
            this.industryA = res.data.data
          }
        })
        getCity1().then(res => {
          if (res.data.code === 200) {
            this.cityA = res.data.data
          }
        })
        getBusinessList().then(res => {
          if (res.data.code === 200) {
            this.firstClassMenu = res.data.data
          }
        });
        break;
      case "2":
        _this.userTypeName = "个人会员"
        break;
      default:
        _this.userTypeName = "共享人才"
        break;
    }
    getMyInfo({ "userId": user.userId }).then(res => {
      if (res.data.code === 200) {
        this.avatar = res.data.data.avatar
      }
    })

    let nowDate = new Date();
    let date = {
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
      date: nowDate.getDate(),
    }
    this.toDay = date.year;
  },

}
</script>

<style scoped>
.我的信息 {
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  padding-bottom: 50px;
  margin-bottom: 20px;
}
.wodexinxi_title {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #9e0100;
  margin-bottom: 30px;
  width: 100%;
}
.info {
  display: flex;
}
.infoleft {
  display: flex;
  padding-right: 30px;
  align-items: center;
  position: relative;
  /* box-shadow: 1px 0 0 rgba(0,0,0,.1); */
  flex-shrink: 0;
}
.infoleft .img_lv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}
.infoleft .img_lv .img_box {
  width: 60px;
  height: 60px;
  /* background: #9e0000; */
  border-radius: 50%;
  position: relative;
  border: 1px solid #fafafa;
}
.infoleft .img_lv span i {
  font-style: normal;
  display: inline-block;
  padding: 2px 10px;
  background: #9e0000;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  margin-top: 5px;
}
.infoleft .name {
  font-family: HiraginoSansGB-W3;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
}
.infoleft h3 {
  font-size: 20px;
  font-weight: normal;
  color: #9e0100;
  margin: 5px 0;
}
.infoleft p {
  font-family: HiraginoSansGB-W3;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  color: #cccccc;
}
.infomiddle {
  display: flex;
  padding-right: 60px;
  padding-left: 50px;
  align-items: center;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
.infomiddle .complate_percent .part {
  padding-bottom: 10px;
}
.infomiddle .complate_percent .complate_percent_part1 {
}
.infomiddle .complate_percent .complate_percent_part2 {
  text-align: right;
}
.infomiddle .complate_percent .complate_percent_part2 .num_small {
  color: #9e0100;
}
.infomiddle .complate_percent .complate_percent_part2 .num_large {
  text-align: right;
  font-size: 34px;
  color: #9e0100;
  font-weight: 600;
}
.inforight {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 25px;
}
.inforight .details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inforight .details .icon {
  height: 30px;
  width: 30px;
  /* background: red; */
}
.inforight .details h4 {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
  margin: 8px 0;
}
.inforight .details p {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}
.zcxxws {
  cursor: pointer;
  position: relative;
  left: 8px;
  top: -1px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  position: absolute;
  top: 10%;
  left: 3%;
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 178px;
  text-align: center;
}
.el-icon-plus:before {
  display: none;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.submitImgAsPersonbtn {
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  border-radius: 30px;
}
@media screen and (max-width: 415px) {
  .我的信息 {
    padding: 8px;
  }
  .wodexinxi_title {
    margin: 0 0 16px 0;
  }
  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .info > div {
    margin-bottom: 16px;
  }
  .infoleft {
    width: 50%;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .img_box + span > i {
    padding: 4px 6px !important;
  }
  .infomiddle {
    width: 50%;
    width: auto;
    padding: 0;
    margin: 0 auto;
    box-shadow: 0px 0 0 rgba(0, 0, 0, 0.1);
  }
  .inforight > div {
    margin: 0 !important;
  }
  .inforight {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .inforight > div > h4 {
    margin: 8px 0 !important;
  }
  .inforight > div > p {
    text-align: center;
  }
  .name > h3 {
    display: flex;
  }
  .name > h3 > span {
    width: 96px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .name > h3 > img {
    height: 16px;
    position: relative;
    top: 4px;
  }
}
</style>
<style>
.el-drawer {
  overflow: scroll;
}
.el-drawer::-webkit-scrollbar {
  width: 10px;
}
/* 滚动槽 */
.el-drawer::-webkit-scrollbar-track {
  border-radius: 8px;
}
/* 滚动条滑块 */
.el-drawer::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 8px 0 0 green inset;
}
.el-drawer::-webkit-scrollbar-thumb:hover {
  box-shadow: 8px 0 0 #666 inset;
}
.el-drawer::-webkit-scrollbar-thumb:window-inactive {
  display: none;
}
.el-drawer::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.el-drawer:hover::-webkit-scrollbar {
  width: 10px;
}
.el-drawer::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 10px 0 0 #999 inset;
}
.el-drawer {
  overflow-y: overlay;
  word-wrap: break-word;
}
.el-drawer {
  margin-left: calc(100vw - 100%);
}
.el-button {
  display: block;
  margin: 48px auto;
  background: #9e0100;
  color: #fff;
  border: none;
}
.el-button:focus,
.el-button:hover {
  background: #9e0100;
  color: #fff;
  border: none;
}
.el-drawer.btt,
.el-drawer.ttb,
.el-drawer__container {
  right: 0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active,
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #9e0100;
}
.el-input__inner {
  width: auto;
}
.el-input__inner:focus {
  border-color: #9e0100;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #9e0100;
}
.qiyehuiyuanxinxi > div > div {
  display: flex;
  flex-wrap: wrap;
}
.qiyehuiyuanxinxi > div > div > div {
  display: flex;
  margin: 16px 0;
  margin-right: 24px;
}
.qiyehuiyuanxinxi span {
  display: inline-block;
  min-width: 96px;
  color: #333333;
}
.el-select {
  margin-right: 24px;
}
.gaoguanxinxi > div {
  color: #333333;
  border: 1px solid #e6e6e6;
}
.gaoguanxinxi > div:first-child {
  padding: 12px 0;
  padding-left: 8px;
  background: #f2f2f2;
}
.gaoguanxinxi > div:not(:first-child) {
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
}
.gaoguanxinxi > div:not(:first-child) > div {
  width: 16%;
  text-align: center;
}
.gaoguanxinxi > div:nth-child(2) > div:first-child {
  border-left: 0;
}
.gaoguanxinxi > .el-row {
  padding: 24px 0 !important;
}
.gaoguanxinxi .el-form-item {
  margin: 0;
}
.gaoguanxinxi > div:nth-child(2) {
  background: #f2f2f2;
}
.gaoguanxinxi > div:nth-child(2) > div {
  border: 1px solid #e6e6e6;
  border-top: 0;
  border-bottom: 0;
  padding: 12px 0;
}
.gaoguanxinxi > div:nth-child(2) > div + div {
  border-left: 0;
}
.gaoguanxinxi .el-button--medium {
  margin: 0;
}
.gaoguanxinxi .el-row + .el-row {
  border-top: 0;
}
.dongjiangaoxinxi > div:nth-child(2) > div {
  width: 25%;
}
.guanlicengxinxi > div:nth-child(2) > div {
  width: 20%;
}
.dongjiangaoxinxi > div:nth-child(2) > div:first-child {
  border-left: 0;
}
.dongjiangaoxinxi > div:nth-child(2) > div:last-child {
  border-right: 0;
}
.guanlicengxinxi > div:nth-child(2) > div:first-child {
  border-left: 0;
}
.guanlicengxinxi > div:nth-child(2) > div:last-child {
  border-right: 0;
}
.dongjiangaoxinxi > div:not(:first-child) > div {
  width: 25%;
}
.guanlicengxinxi > div:not(:first-child) > div {
  width: 20%;
  box-sizing: border-box;
}
textarea {
  margin-left: 0;
}
.elFormItemTextarea > div > div {
  width: 90%;
}
.elFormItemElButton button {
  margin: 0;
  color: #fff;
}
.elFormItemElButton button > span,
.firstChildIsNone button > span {
  color: #fff;
}
.guanlicengxinxi + .el-row button > span {
  color: #fff;
}
.drawer2 {
  width: 50% !important;
  margin: 0 auto;
  position: absolute;
  top: 10%;
}
.patentForm > div {
  display: flex;
  flex-wrap: wrap;
  padding-left: 16px;
}
.patentForm > div > div {
  display: flex;
  width: 50%;
  padding: 12px 0;
}
.patentForm > div > div > span {
  min-width: 94px;
}
.patentapplicationdate .el-icon-date:before {
  margin-left: -70px;
}
.el-message-box .el-message-box__btns {
  display: flex;
  justify-content: center;
}
.el-message-box .el-button {
  margin: 0;
}
.drawer2MyButton2 button {
  margin: 0;
}
.drawer2MyButton2 button:hover {
  background: #9e0100;
  color: #fff;
}
.strategicTarget > div > div {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.strategicTarget > div > div > div {
  display: flex;
  width: 100%;
}
.strategicTarget > div > div > div > div {
  width: 33.3333333%;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #dcdfe6;
}
.strategicTarget > div > div > div > div:nth-child(2),
.strategicTarget > div > div > div > div:nth-child(3) {
  border-left: 0;
}
.strategicTarget > div > div > div:nth-child(2) > div {
  border-top: 0px;
  padding: 16px 0;
}
.strategicTarget textarea {
  width: 80%;
  margin: 0 auto;
}
.strategicTarget textarea:focus {
  border-color: #9e0100;
}
.datePickerDate span {
  min-width: auto;
}
.datePickerDate > input {
  padding-right: 0 !important;
}
.gongshangxinxi .el-form-item__content > div {
  display: flex;
  align-items: center;
}
.licengbeishijian {
  width: 100% !important;
  display: block !important;
}
.licengbeishijian > div {
  width: 100%;
  display: flex;
}
.licengbeishijian > div:nth-child(n + 2) > div {
  width: 20%;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
}
.licengbeishijian .el-input__inner {
  width: 90%;
}
.licengbeishijian .firstChildIsNone {
  padding: 10px 0 !important;
}
.licengbeishijian + .el-row {
  width: 100%;
}
.licengbeishijian + .el-row > button {
  margin: 24px auto;
}
.licengbeishijian .el-form-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.licengbeishijian .el-button {
  margin: 0 auto !important;
}
.zhishichanquan > div:nth-child(3) > div {
  width: calc(100% / 7);
}
.zhishichanquan > div:nth-child(3) > div > div > div > input,
.zhishichanquan > div:nth-child(3) > div > div > div > div > input {
  width: 80%;
}
.zhishichanquan .el-input__suffix,
.zhishichanquan .el-input__suffix-inner {
  min-width: 40px;
}
.zhishichanquan .el-input__prefix {
  min-width: 30px;
}
.clickToUploadImg > div {
  display: flex;
  align-items: center;
}
.clickToUploadImg > div > * {
  flex-shrink: 0;
}
.clickToUploadImg > div > button {
  flex-shrink: 0;
  width: 136px;
  height: 40px;
  margin-left: 24px;
}
.editDeletePar > div {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}
.editDeletePar > div > button {
  width: 40%;
  min-width: 48px;
  height: 38px;
  padding: 0;
}
.editDeletePar > div > button > span {
  min-width: 100%;
  text-align: center;
}
.el-form-item + .el-button > span {
  color: #fff;
}
.newAddShuxing {
  margin: 48px auto !important;
}
.newAddShuxing > span {
  color: #fff !important;
}
.zizhizhengshu > div:nth-child(2) > div {
  width: calc(100% / 3) !important;
}
.zizhizhengshu > div:nth-child(n + 3) > div {
  width: calc(100% / 3) !important;
}
.spanNextImg > div > img {
  width: 120px;
  height: 80px;
  margin-right: 24px;
}
.twoButtonClass > div {
  width: 100%;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 0 !important;
}
.twoButtonClass > div > button {
  width: 40%;
}
.twoButtonClass > div > button span {
  min-width: auto;
}
.selectStartTime input + span {
  min-width: auto;
}
</style>
