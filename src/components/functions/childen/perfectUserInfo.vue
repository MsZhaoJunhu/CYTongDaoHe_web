<template>
  <div style="background:#fafafa;">
    <div class="improve_registration_information">
      <!-- <router-link :to="{path:'/fun/home_',query:{'userInfo':userInfo}}" class="improve_registration_information_a">完善信息</router-link> -->
      <div class="improve_registration_information_div">
        <div class="improve_registration_information_left">
          <ul>
            <li @click="cancelSubmit">
              <a>返回个人中心</a>
            </li>
            <!-- 个人 -->
            <template v-if="role==2">
              <li :class="step==1?'active':''"
                  @click="step=1">基本信息</li>
              <li :class="step==2?'active':''"
                  @click="step=2">人才信息</li>
              <!-- <li :class="step==3?'active':''"
                  @click="step=3">专家认证</li> -->
            </template>
            <!-- 企业 -->
            <template v-if="role==0"> 
              <li :class="step==1?'active':''"
                  @click="step=1">工商信息</li>
              <li :class="step==2?'active':''"
                  @click="step=2">治理结构</li>
              <li :class="step==3?'active':''"
                  @click="step=3">企业信息</li>
              <li :class="step==4?'active':''"
                  @click="step=4">经营情况</li>
              <li :class="step==5?'active':''"
                  @click="step=5">业务情况</li>
              <li :class="step==6?'active':''"
                  @click="step=6">发展规划</li>
            </template>
            <!-- 供应商 -->
            <template v-if="role==1">
              <li :class="step==1?'active':''"
                  @click="step=1">工商信息</li>
              <li :class="step==2?'active':''"
                  @click="step=2">治理结构</li>
              <li :class="step==3?'active':''"
                  @click="step=3">企业信息</li>
              <li :class="step==4?'active':''"
                  @click="step=4">经营情况</li>
              <li :class="step==5?'active':''"
                  @click="step=5">业务情况</li>
              <li :class="step==6?'active':''"
                  @click="step=6">典型服务案例</li>
            </template>
            <!-- 共享人才 -->
            <template v-if="role==3">
              <li :class="step==1?'active':''"
                  @click="step=1">基本信息</li>
              <li :class="step==2?'active':''"
                  @click="step=2">教育经历</li>
              <li :class="step==3?'active':''"
                  @click="step=3">项目经验</li>
              <li :class="step==4?'active':''"
                  @click="step=4">服务意愿</li>
              <li :class="step==5?'active':''"
                  @click="step=5">资质证书</li>
              <li :class="step==6?'active':''"
                  @click="step=6">自我评价</li>
            </template>
          </ul>
        </div>
        <div class="improve_registration_information_right">
          <!-- 个人会员 -->
          <div class="improve_registration_information_rightContent"
               v-if="role==2">
            <!-- 基本信息 -->
            <div v-show="role==2&&step==1">
              <p class="titleOfPersonDetails">个人头像</p>
              <div class="improve_registration_information_uploadImg">
                <div class="improve_registration_information_img" :class="avatar=='improve_registration_information_imgBorder'?'':''">
                  <img :src="avatar"
                       style="border-radius:50%;"
                       alt="">
                  <my-upload field="img"
                             @crop-success="cropSuccess"
                             v-model="show"
                             :width="200"
                             :height="200"
                             img-format="png"
                             :size="size"></my-upload>
                </div>
                <button @click="show=true">
                  <img src="../../../assets/icon/upload.png"
                       alt="">
                  <span>上传头像</span>
                </button>
              </div>
              <p class="titleOfPersonDetails">个人信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">姓名</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.actualName">
                  <p :class="aggregate.actualName==''||aggregate.actualName==null?'':'opacity0'">请输入姓名</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">电话号码</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                  <p :class="aggregate.phoneNo==''||aggregate.phoneNo==null?'':'opacity0'">请输入电话号码</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>昵称</p>
                  <input type="text"
                         placeholder="请输入昵称"
                         v-model="aggregate.nickname">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>邮箱地址</p>
                  <input type="text"
                         placeholder="请输入邮箱地址"
                         v-model="aggregate.emailAdd"
                         @blur="blurInput($event,2,aggregate.emailAdd)">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>身份证号</p>
                  <input type="text"
                         placeholder="请输入身份证号"
                         v-model="aggregate.idNo"
                         @blur="blurInput($event,3,aggregate.idNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>联系地址</p>
                  <input type="text"
                         placeholder="请输入联系地址"
                         v-model="aggregate.contactAdd">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>微信号</p>
                  <input type="text"
                         placeholder="请输入微信号"
                         v-model="aggregate.wechatNo">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>QQ号</p>
                  <input type="text"
                         placeholder="请输入QQ号"
                         v-model="aggregate.qqNo">
                </div>
              </div>
              <p class="titleOfPersonDetails">关联公司信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p>公司名称</p>
                  <input type="text"
                         placeholder="请输入公司名称"
                         v-model="aggregate.associatedCo">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>岗位名称</p>
                  <input type="text"
                         placeholder="请输入岗位名称"
                         v-model="aggregate.postName">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>职务</p>
                  <select v-model="aggregate.corpPost">
                    <option style="display:none;">请选择职务</option>
                    <option value="实际控制人">实际控制人</option>
                    <option value="董事长">董事长</option>
                    <option value="董事">董事</option>
                    <option value="监事">监事</option>
                    <option value="高管">高管</option>
                    <option value="中干">中干</option>
                    <option value="基干">基干</option>
                    <option value="员工">员工</option>
                  </select>
                </div>
              </div>
              <p class="titleOfPersonDetails">个人资源</p>
              <table class="personalResources">
                <tr>
                  <td>资源类型</td>
                  <td>资源等级</td>
                  <td>资源标准</td>
                  <td>资源描述</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in aggregate.custIndivResourceList"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.resourceType}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.resourceLevel}}</option>
                    </select></td>
                  <td>
                    <select disabled>
                      <option selected>{{item.levelStandard}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.resourceDesc}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custIndivResourceList,index)">删除</button>
                    <button @click="updateRow(aggregate.custIndivResourceList,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updateRow(aggregate.custIndivResourceList,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawer"
                          :direction="direction"
                          :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>资源类型:</span>
                    <el-select v-model="arrContent.resourceType"
                              @change="changeResourceType"
                              placeholder="请选择资源类型">
                      <el-option v-for="(item,index) in primaryResources"
                                :key="index"
                                :label="item.itemName"
                                :value="item.dictItemId"></el-option>
                    </el-select>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>资源等级:</span>
                    <el-select v-model="arrContent.resourceLevel"
                              @change="changeResourceLevel"
                              placeholder="请选择资源登记">
                      <el-option v-for="(item,index) in twoTierResources"
                                :key="index"
                                :label="item.itemName"
                                :value="item.itemCode"></el-option>
                    </el-select>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>资源标准:</span>
                    <el-input v-model="arrContent.levelStandard"
                              placeholder="请选择资源标准"
                              :disabled="true"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>资源描述:</span>
                    <el-input type="textarea"
                              v-model="arrContent.resourceDesc"></el-input>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(2,1)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 人才信息 -->
            <div v-show="role==2&&step==2">
              <p class="titleOfPersonDetails">工作信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">经营状态</p>
                  <select v-model="aggregate.corpPost">
                    <option value="实际控制人">在职-咨询行业</option>
                    <option value="董事长">在职-其他行业</option>
                    <option value="董事">自由职业-咨询业务为主</option>
                    <option value="监事">自由职业-其他业务为主</option>
                    <option value="高管">企业家-咨询行业</option>
                    <option value="中干">企业家-其他行业</option>
                    <option value="基干">短期离职</option>
                    <option value="员工">其他</option>
                  </select>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">工作年限</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">资讯年限</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input improve_registration_information_rightContentAll_input_AllHang">
                  <p>工作描述</p>
                  <el-input type="textarea" resize="noresize"
                              v-model="arrContent.resourceDesc"></el-input>
                </div>
              </div>
              <p class="titleOfPersonDetails">个人经历</p>
              <p class="titleOfPersonDetails titleOfPersonDetailsTwo">教育经历</p>
              <table class="personalResources personalResourcesTS">
                <tr>
                  <td>学校名称</td>
                  <td>起止时间</td>
                  <td>所学专业</td>
                  <td>是否统招</td>
                  <td>学历</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in educationExperience"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.name}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.time}}</option>
                    </select>
                  <td>
                    <select disabled>
                      <option selected>{{item.pro}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.tongZhao}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.xueli}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(educationExperience,index)">删除</button>
                    <button @click="updateeducation(educationExperience,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updateeducation(educationExperience,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawereducation"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>学校名称:</span>
                    <el-input v-model="arrContent.name"
                              placeholder="请选择学校名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>起止时间:</span>
                    <el-date-picker
                      v-model="arrContent.time"
                      type="monthrange"
                      range-separator="至"
                      start-placeholder="开始月份"
                      end-placeholder="结束月份">
                  </el-date-picker>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>所学专业:</span>
                    <el-input v-model="arrContent.pro" placeholder="请输入所学专业"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>是否统招:</span>
                    <el-radio v-model="arrContent.tongZhao" label="是">是</el-radio>
                    <el-radio v-model="arrContent.tongZhao" label="否">否</el-radio>
                  </div>
                  <div class="arrContentAllParent">
                    <span>学历:</span>
                  <el-select v-model="arrContent.xueli" placeholder="请选择">
                    <el-option
                      label="硕士"
                      value="硕士">
                    </el-option>
                    <el-option
                      label="本科"
                      value="本科">
                    </el-option>
                    <el-option
                      label="专科"
                      value="专科">
                    </el-option>
                  </el-select>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <p class="titleOfPersonDetails titleOfPersonDetailsTwo">培训经历</p>
              <table class="personalResources">
                <tr>
                  <td>培训机构</td>
                  <td>培训课程</td>
                  <td>起止时间</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in trainExperience"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.name}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.curriculum}}</option>
                    </select></td>
                  <td>
                    <select disabled>
                      <option selected>{{item.time}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(trainExperience,index)">删除</button>
                    <button @click="updateTrain(trainExperience,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updateTrain(trainExperience,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawerTrain"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>培训机构:</span>
                    <el-input v-model="arrContent.name"
                              placeholder="请输入培训机构名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>培训课程:</span>
                    <el-input v-model="arrContent.curriculum"
                              placeholder="请输入培训课程名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>起止时间:</span>
                    <el-date-picker
                      v-model="arrContent.time"
                      type="monthrange"
                      range-separator="至"
                      start-placeholder="开始月份"
                      end-placeholder="结束月份">
                    </el-date-picker>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <p class="titleOfPersonDetails titleOfPersonDetailsTwo">专业能力</p>
              <table class="personalResources">
                <tr>
                  <td>擅长专业</td>
                  <td>擅长行业</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in power"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.name1}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.name2}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(power,index)">删除</button>
                    <button @click="updatePower(power,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updatePower(power,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawerPower"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>擅长专业:</span>
                    <el-input v-model="arrContent.name1"
                              placeholder="请输入擅长专业"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>擅长行业:</span>
                    <el-input v-model="arrContent.name2"
                              placeholder="请输入擅长行业"
                    ></el-input>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel()">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <p class="titleOfPersonDetails titleOfPersonDetailsTwo">工作经验</p>
              <table class="personalResources">
                <tr>
                  <td>公司名称</td>
                  <td>公司性质</td>
                  <td>公司规模</td>
                  <td>最高职位</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in experience"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.name}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.type}}</option>
                    </select></td>
                  <td>
                    <select disabled>
                      <option selected>{{item.number}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.industry}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(experience,index)">删除</button>
                    <button @click="updateExperience(experience,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updateExperience(experience,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawerExperience"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>公司名称:</span>
                    <el-input v-model="arrContent.name"
                              placeholder="请输入公司名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>公司性质:</span>
                    <select v-model="arrContent.type">
                      <option value="发明" :select="arrContent.type=='发明'">发明</option>
                      <option value="开发" :select="arrContent.type=='开发'">开发</option>
                      <option value="注册" :select="arrContent.type=='注册'">注册</option>
                    </select>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>公司规模:</span>
                    <select v-model="arrContent.number">
                      <option value="100-1000" :select="arrContent.number=='100-1000'">100-1000</option>
                      <option value="50-100" :select="arrContent.number=='50-100'">50-100</option>
                      <option value="50人以下" :select="arrContent.number=='50人以下'">50人以下</option>
                    </select>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>发展阶段:</span>
                    <select v-model="arrContent.stage">
                      <option value="起步" :select="arrContent.stage=='起步'">起步</option>
                      <option value="发展中" :select="arrContent.stage=='发展中'">发展中</option>
                      <option value="成熟" :select="arrContent.stage=='成熟'">成熟</option>
                    </select>
                  </div>
                  <div class="arrContentAllParent">
                    <span>所属行业:</span>
                    <select v-model="arrContent.industry">
                      <option value="软件行业" :select="arrContent.industry=='软件行业'">软件行业</option>
                      <option value="医疗行业" :select="arrContent.industry=='医疗行业'">医疗行业</option>
                      <option value="通信行业" :select="arrContent.industry=='通信行业'">通信行业</option>
                    </select>
                  </div>
                  <div class="arrContentAllParent">
                    <span>最高职位:</span>
                    <el-input v-model="arrContent.position"
                              placeholder="请输入最高职位"
                    ></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>在职起止时间:</span>
                    <el-date-picker
                      v-model="arrContent.time"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                  </div>
                  <div class="arrContentAllParent">
                    <span>工作描述:</span>
                    <el-input type="textarea"
                              v-model="arrContent.work"></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>工作业绩:</span>
                    <el-input type="textarea"
                              v-model="arrContent.achievement"></el-input>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <p class="titleOfPersonDetails titleOfPersonDetailsTwo">项目经验</p>
              <table class="personalResources">
                <tr>
                  <td>客户公司名称</td>
                  <td>客户公司性质</td>
                  <td>客户公司规模</td>
                  <td>客户发展阶段</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in projectExperience"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.name}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.type}}</option>
                    </select></td>
                  <td>
                    <select disabled>
                      <option selected>{{item.number}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.stage}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(projectExperience,index)">删除</button>
                    <button @click="updatePro(projectExperience,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updatePro(projectExperience,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawerPro"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>客户公司名称:</span>
                    <el-input v-model="arrContent.name"
                              placeholder="请输入客户公司名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>客户公司性质:</span>
                    <select v-model="arrContent.type">
                      <option value="发明" :select="arrContent.type=='发明'">发明</option>
                      <option value="开发" :select="arrContent.type=='开发'">开发</option>
                      <option value="注册" :select="arrContent.type=='注册'">注册</option>
                    </select>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>客户公司规模:</span>
                    <select v-model="arrContent.number">
                      <option value="100-1000" :select="arrContent.number=='100-1000'">100-1000</option>
                      <option value="50-100" :select="arrContent.number=='50-100'">50-100</option>
                      <option value="50人以下" :select="arrContent.number=='50人以下'">50人以下</option>
                    </select>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>客户发展阶段:</span>
                    <select v-model="arrContent.stage">
                      <option value="起步" :select="arrContent.stage=='起步'">起步</option>
                      <option value="发展中" :select="arrContent.stage=='发展中'">发展中</option>
                      <option value="成熟" :select="arrContent.stage=='成熟'">成熟</option>
                    </select>
                  </div>
                  <div class="arrContentAllParent">
                    <span>客户所属行业:</span>
                    <select v-model="arrContent.industry">
                      <option value="软件行业" :select="arrContent.industry=='软件行业'">软件行业</option>
                      <option value="医疗行业" :select="arrContent.industry=='医疗行业'">医疗行业</option>
                      <option value="通信行业" :select="arrContent.industry=='通信行业'">通信行业</option>
                    </select>
                  </div>
                  <div class="arrContentAllParent">
                    <span>客户需求:</span>
                    <el-input v-model="arrContent.demand"
                              placeholder="请输入客户需求"
                    ></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>项目名称:</span>
                    <el-input v-model="arrContent.proName"
                              placeholder="请输入项目名称"
                    ></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>项目类型:</span>
                    <select v-model="arrContent.proType">
                      <option value="食品类型" :select="arrContent.proType=='食品类型'">软件行业</option>
                      <option value="交流类型" :select="arrContent.proType=='交流类型'">医疗行业</option>
                      <option value="通信类型" :select="arrContent.proType=='通信类型'">通信行业</option>
                    </select>
                  </div>
                  <div class="arrContentAllParent">
                    <span>其他描述:</span>
                    <el-input v-model="arrContent.proOther"
                              placeholder="请输入项目其他描述"
                    ></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>项目总费用:</span>
                    <el-input v-model="arrContent.proAllPrice"
                              placeholder="请输入项目总费用"
                    ></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>服务起止时间:</span>
                    <el-date-picker
                      v-model="arrContent.time"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                  </div>
                  <div class="arrContentAllParent">
                    <span>岗位名称:</span>
                    <el-input v-model="arrContent.post"
                              placeholder="请输入岗位名称"
                    ></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>服务简介:</span>
                    <el-input type="textarea"
                              v-model="arrContent.server"></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>工作职责:</span>
                    <el-input type="textarea"
                              v-model="arrContent.work"></el-input>
                  </div>
                  <div class="arrContentAllParent">
                    <span>主要业绩:</span>
                    <el-input type="textarea"
                              v-model="arrContent.achievement"></el-input>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <p class="titleOfPersonDetails titleOfPersonDetailsTwo">资质证书</p>
              <table class="personalResources">
                <tr>
                  <td>资质名称</td>
                  <td>证书名称</td>
                  <td>获得时间</td>
                  <td>操作</td>
                </tr>
                <tr class="personalResources_input"
                    v-for="(item,index) in qualifications"
                    :key="index">
                  <td>
                    <select disabled>
                      <option selected>{{item.name1}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.name2}}</option>
                    </select>
                  </td>
                  <td>
                    <select disabled>
                      <option selected>{{item.time}}</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(qualifications,index)">删除</button>
                    <button @click="updateQualifications(qualifications,index)">编辑</button>
                  </td>
                </tr>
                <div class="addItemParent">
                  <span @click="updateQualifications(qualifications,'')">+&nbsp;新增</span>
                </div>
                <el-drawer :visible.sync="drawerQualifications"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>资质名称:</span>
                    <el-input v-model="arrContent.name1"
                              placeholder="请输入资质名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>证书名称:</span>
                    <el-input v-model="arrContent.name2"
                              placeholder="请输入证书名称"
                    ></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>获得时间:</span>
                    <el-date-picker
                      v-model="arrContent.time"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
              </table>
              <p class="titleOfPersonDetails">服务意愿</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_inputSF">
                  <p>愿意承接咨询项目:</p>
                  <div>
                    <el-radio v-model="radio" label="是">是</el-radio>
                    <el-radio v-model="radio" label="否">否</el-radio>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_inputSF">
                  <p>意愿担任项目组员:</p>
                  <div>
                    <el-radio v-model="radio2" label="是">是</el-radio>
                    <el-radio v-model="radio2" label="否">否</el-radio>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_inputSF">
                  <p>能否独立完成项目:</p>
                  <div>
                    <el-radio v-model="radio3" label="是">是</el-radio>
                    <el-radio v-model="radio3" label="否">否</el-radio>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_inputSF">
                  <p>适应外地出差:</p>
                  <div>
                    <el-radio v-model="radio4" label="是">是</el-radio>
                    <el-radio v-model="radio4" label="否">否</el-radio>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_inputSF">
                  <p>意愿担任项目经理:</p>
                  <div>
                    <el-radio v-model="radio5" label="是">是</el-radio>
                    <el-radio v-model="radio5" label="否">否</el-radio>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_inputSF">
                  <p>收费标准:</p>
                  <el-input v-model="arrContent.levelStandard"
                            placeholder=""
                            type="number"
                            :disabled="false"></el-input>
                </div>
              </div>
              <p class="titleOfPersonDetails">自我评价</p>
              <div class="improve_registration_information_rightContentAll_input improve_registration_information_rightContentAll_input_AllHang">
                  <p>评价内容</p>
                  <el-input type="textarea" resize="noresize"
                              v-model="arrContent.resourceDesc"></el-input>
                </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(2,1)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 专家认证 -->
            <!-- <div v-show="role==2&&step==3">
              <p class="titleOfPersonDetails">专家信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p>最高学历</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>职称</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>职务</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>工作单位</p>
                  <input type="text"
                         placeholder="请输入"
                         v-model="aggregate.phoneNo"
                         @blur="blurInput($event,1,aggregate.phoneNo)">
                </div>
                <div class="improve_registration_information_rightContentAll_input improve_registration_information_rightContentAll_input_AllHang">
                  <p>名誉头衔</p>
                  <el-input type="textarea" resize="noresize"
                              v-model="arrContent.resourceDesc"></el-input>
                </div>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(2,1)">提&nbsp;交</button>
                </div>
              </div>
            </div> -->
          </div>
          <!--  企业会员-->
          <div class="improve_registration_information_rightContent"
               v-if="role==0">
            <!-- 工商信息 -->
            <div v-show="role==0&&step==1">
              <p class="titleOfPersonDetails">工商信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="importTitle">公司名称</p>
                  <input type="text"
                         v-model="aggregate.corpName"
                         placeholder="请输入公司名称">
                  <p :class="aggregate.corpName==''||aggregate.corpName==null?'':'opacity0'">请输入公司名称</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="importTitle">公司地址</p>
                  <input type="text"
                         v-model="aggregate.corpAdd"
                         placeholder="请输入公司地址">
                  <p :class="aggregate.corpAdd==''||aggregate.corpAdd==null?'':'opacity0'">请输入公司名称</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="importTitle">公司电话</p>
                  <input type="text"
                         v-model="aggregate.corpPhoneno"
                         placeholder="请输入公司电话">
                  <p :class="aggregate.corpPhoneno==''||aggregate.corpPhoneno==null?'':'opacity0'">请输入公司电话</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>公司邮箱</p>
                  <input type="text"
                         v-model="aggregate.corpEmail"
                         placeholder="请输入公司邮箱">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>公司官网</p>
                  <input type="text"
                         v-model="aggregate.corpWeb"
                         placeholder="请输入公司官网">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>注册资本</p>
                  <input type="text"
                         v-model="aggregate.registerCapital"
                         placeholder="请输入注册资本">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>实缴资本</p>
                  <input type="text"
                         v-model="aggregate.actualCapital"
                         placeholder="请输入实缴资本">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>经营状态</p>
                  <!-- <input type="text"
                         v-model="aggregate.manageState"
                         placeholder="请输入经营状态"> -->
                  <el-select v-model="aggregate.manageState" placeholder="请输入经营状态">
                    <el-option value="续存"></el-option>
                    <el-option value="在业"></el-option>
                    <el-option value="注销"></el-option>
                    <el-option value="吊销"></el-option>
                  </el-select>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>成立日期</p>
                  <el-date-picker v-model="aggregate.establishDate"
                                  value-format=""
                                  placeholder="请选择成立日期">
                  </el-date-picker>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>统一社会信用代码</p>
                  <input type="text"
                         v-model="aggregate.creditCode"
                         placeholder="请输入经营状态">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>纳税人识别号</p>
                  <input type="text"
                         v-model="aggregate.taxpayerNo"
                         placeholder="请输入经营状态">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>工商注册号</p>
                  <input type="text"
                         v-model="aggregate.registerNo"
                         placeholder="请输入经营状态">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>企业类型</p>
                  <el-select v-model="aggregate.registerType" placeholder="请选择企业类型">
                    <el-option value="有限责任公司"></el-option>
                    <el-option value="股份有限责任公司"></el-option>
                    <el-option value="个人独资企业"></el-option>
                    <el-option value="合伙企业"></el-option>
                    <el-option value="个体工商户"></el-option>
                  </el-select>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>组织机构代码</p>
                  <input type="text"
                         v-model="aggregate.orgCode"
                         placeholder="请输入经营状态">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>核准日期</p>
                  <el-date-picker v-model="aggregate.approvalDate"
                                  value-format=""
                                  placeholder="请选择核准日期">
                  </el-date-picker>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>登记机关</p>
                  <input type="text"
                         v-model="aggregate.registerOffice"
                         placeholder="请输入经营状态">
                </div>
                
                <div class="improve_registration_information_rightContentAll_input_selectare">
                  <p>所属行业</p>
                  <div class="improve_registration_information_rightContentAll_input_select">
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subIndustry"
                              @change="elSelectChangeEventA($event)">
                        <option v-for="(item,index) in industryA"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.industryDetail"
                              @change="elSelectChangeEventB"
                              placeholder="请选择属于行业">
                        <option v-for="(item,index) in industryB"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <!-- <el-select v-model="aggregate.subIndustry" @change="elSelectChangeEventA" placeholder="请选择属于行业">
                    <el-option v-for="(item,index) in industryA" :key="index" :label="item.itemName" :value="item.dictItemId">{{item.itemName}}</el-option>
                  </el-select>
                  <el-select v-model="aggregate.industryDetail" @change="elSelectChangeEventB" placeholder="请选择属于行业">
                    <el-option v-for="(item,index) in industryB" :key="index" :label="item.itemName" :value="item.dictItemId">{{item.itemName}}</el-option>
                  </el-select> -->
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_selectare">
                  <p>所属区域</p>
                  <div class="improve_registration_information_rightContentAll_input_select">
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subArea1"
                              @change="elSelectChangeCityAEvent"
                              placeholder="请选择所属区域">
                        <option v-for="(item,index) in cityA"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subArea2"
                              @change="elSelectChangeCityBEvent"
                              placeholder="请选择所属区域">
                        <option v-for="(item,index) in cityB"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subArea3"
                              @change="elSelectChangeCityCEvent"
                              placeholder="请选择所属区域">
                        <option v-for="(item,index) in cityC"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>经营范围</p>
                  <textarea placeholder="请输入使命"
                            v-model="aggregate.manageRange"
                            type="textarea"
                            cols="200"
                            rows="3" />
                  </div>
                <div class="submitParent">
                  <div class="submits">
                    <button class="cancel"
                            @click="cancelSubmit">取&nbsp;消</button>
                    <button class="infosubmit"
                            @click="updateSubmit(0,1)">提&nbsp;交</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 治理结构 -->
            <div v-show="role==0&&step==2">
              <p class="titleOfPersonDetails">治理结构</p>
              <div class="personTitle">
                <p>股东信息</p>
              </div>
              <table class="gdResources">
                <tr>
                  <td>股东(自然人或法人)</td>
                  <td>持股比例</td>
                  <td>认缴出资(万元)</td>
                  <td>认缴日期</td>
                  <td>实缴出资(万元)</td>
                  <td>操作</td>
                </tr>
                <tr class="gdResources_input"
                    v-for="(item,index) in aggregate.custCorpShareholderList"
                    :key="index">
                  <td>
                    <input type="text"
                           v-model="item.shareholder"
                           placeholder="股东(自然人或法人)"
                           disabled>
                  </td>
                  <td>
                    <input type="text"
                           v-model="item.shareholdRatio"
                           placeholder="持股比例"
                           disabled>
                  </td>
                  <td>
                    <input type="text"
                           v-model="item.admitPay"
                           placeholder="认缴出资(万元)"
                           disabled>
                  </td>
                  <td>
                    <el-date-picker v-model="item.admitDate"
                                    value-format=""
                                    placeholder="认缴日期"
                                    :disabled="true">
                    </el-date-picker>
                  </td>
                  <td>
                    <input type="text"
                           v-model="item.actualPay"
                           placeholder="实缴出资(万元)"
                           disabled>
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custCorpShareholderList,index)">删除</button>
                    <button @click="updateShareholders(aggregate.custCorpShareholderList,index)">编辑</button>
                  </td>
                </tr>
                <el-drawer :visible.sync="drawerShareholders"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>资源类型:</span>
                    <el-input v-model="arrContent.shareholder"
                              placeholder="股东(自然人或法人)"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>持股比例:</span>
                    <el-input v-model="arrContent.shareholdRatio"
                              placeholder="持股比例"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>认缴出资(万元):</span>
                    <el-input v-model="arrContent.admitPay"
                              placeholder="认缴出资(万元)"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>认缴日期:</span>
                    <el-date-picker v-model="arrContent.admitDate"
                                    placeholder="认缴日期"
                                    :disabled="false"></el-date-picker>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>实缴出资(万元):</span>
                    <el-input v-model="arrContent.actualPay"
                              placeholder="实缴出资(万元)"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
                <div class="addItemParent">
                  <span @click="updateShareholders(aggregate.custCorpShareholderList,'')">+&nbsp;新增</span>
                </div>
              </table>
              <!-- 董监高信息 -->
              <div class="personTitle">
                <p>董监高信息</p>
              </div>
              <table class="gdResources">
                <tr>
                  <td>姓名</td>
                  <td>职务</td>
                  <td>电话</td>
                  <td>操作</td>
                </tr>
                <tr class="gdResources_input"
                    v-for="(item,index) in aggregate.custCorpDirectorList"
                    :key="index">
                  <td>
                    <input type="text"
                           v-model="item.name"
                           placeholder="姓名">
                  </td>
                  <td>
                    <input type="text"
                           v-model="item.post"
                           placeholder="职务">
                  </td>
                  <td>
                    <input type="text"
                           v-model="item.phone"
                           placeholder="电话">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custCorpDirectorList,index)">删除</button>
                    <button @click="updateDirectors(aggregate.custCorpDirectorList,index)">编辑</button>
                  </td>
                </tr>
                <el-drawer :visible.sync="drawerDirectors"
                           :direction="direction"
                           :before-close="handleClose">
                  <div class="arrContentAllParent">
                    <span>姓名:</span>
                    <el-input v-model="arrContent.name"
                              placeholder="姓名"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>职务:</span>
                    <el-input v-model="arrContent.post"
                              placeholder="职务"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="arrContentAllParent">
                    <span>电话:</span>
                    <el-input v-model="arrContent.phone"
                              placeholder="电话"
                              :disabled="false"></el-input>
                  </div>
                  <br>
                  <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                </el-drawer>
                <div class="addItemParent">
                  <span @click="updateDirectors(aggregate.custCorpDirectorList,'')">+&nbsp;新增</span>
                </div>
              </table>
              <!-- 管理层信息-->
              <div>
                <div class="personTitle">
                <p>管理层信息</p>
                </div>
                <table class="gdResources">
                  <tr>
                    <td>姓名</td>
                    <td>部门</td>
                    <td>职务</td>
                    <td>电话</td>
                    <td>操作</td>
                  </tr>
                  <tr class="gdResources_input"
                      v-for="(item,index) in aggregate.custCorpManageList"
                      :key="index">
                    <td>
                      <input type="text"
                             v-model="item.name"
                             placeholder="姓名">
                    </td>
                    <td>
                      <input type="text"
                             v-model="item.department"
                             placeholder="部门">
                    </td>
                    <td>
                      <input type="text"
                             v-model="item.post"
                             placeholder="职务">
                    </td>
                    <td>
                      <input type="text"
                             v-model="item.phone"
                             placeholder="电话">
                    </td>
                    <td>
                      <button @click="removeRow(aggregate.custCorpManageList,index)">删除</button>
                      <button @click="updateManages(aggregate.custCorpManageList,index)">编辑</button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="drawerManages"
                             :direction="direction"
                             :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>姓名:</span>
                      <el-input v-model="arrContent.name"
                                placeholder="姓名"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>部门:</span>
                      <el-input v-model="arrContent.department"
                                placeholder="部门"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>职务:</span>
                      <el-input v-model="arrContent.post"
                                placeholder="职务"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>电话:</span>
                      <el-input v-model="arrContent.phone"
                                placeholder="电话"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit"
                                   @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel"
                                   @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                  <div class="addItemParent">
                    <span @click="updateManages(aggregate.custCorpManageList,'')">+&nbsp;新增</span>
                  </div>
                </table>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(0,2)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 企业信息 -->
            <div v-show="role==0&&step==3">
              <p class="titleOfPersonDetails">企业信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input_row">
                  <div style="display:inline-block;margin-right:30px;">
                    <span>企业LOGO</span>
                    <div class="imgUpload">
                      <img :src="aggregate.logo" alt="">
                      <el-upload action=''
                                  :accept="'image/*'"
                                  :show-file-list='false'
                                  :limit="1"
                                  :on-change="getFile"
                                  list-type="picture"
                                  :auto-upload="false">
                          <el-button size="small"
                                    type="primary">更换头像</el-button>
                      </el-upload>
                    </div>
                  </div>
                  <div style="display:inline-block">
                    <span>组织架构图</span>
                    <div class="imgUpload">
                      <img style="display:block;width:200px;height:200px;" :class="corpOrganizationname==''?'border1':''" :src="'http://42.51.16.10:8080/file/'+ corpOrganizationname"  alt="">
                      <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  :accept="'image/*'"
                                  :show-file-list='false'
                                  :limit="1"
                                  :on-success="corpOrgsuccess"
                                  :auto-upload="true">
                        <el-button size="small"
                                    type="primary">更换图片</el-button>
                      </el-upload>
                    </div>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>企业简介</p>
                  <textarea placeholder="请输入企业简介" v-model="aggregate.enterpriceIntro"
                            rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>组织架构</p>
                  <textarea placeholder="请输入组织架构" v-model="aggregate.enterpriceIntro"
                    rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>部门职责</p>
                  <textarea placeholder="请输入部门职责" v-model="aggregate.enterpriceIntro"
                    rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>企业规模</p>
                  <select style="width"
                          v-model="aggregate.corpScale"
                          placeholder="请选择企业规模">
                    <option style="display:none">请选择企业规模</option>
                    <option value="">大型企业</option>
                    <option value="">中型企业</option>
                    <option value="">小型企业</option>
                    <option value="">微型企业</option>
                  </select>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>人员规模</p>
                  <input type="text"
                         v-model="aggregate.personnelScale"
                         placeholder="请输入人员规模">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>参保人数</p>
                  <input type="text"
                         v-model="aggregate.insuranceAmount"
                         placeholder="请输入参保人数">
                </div>
                <div class="personTitle">
                <p>企业文化</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>愿景</p>
                  <textarea placeholder="请输入愿景"
                            v-model="aggregate.vision"
                            rows="5" />
                  </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>使命</p>
                  <textarea placeholder="请输入使命" v-model="aggregate.mission"
                                    type="textarea"
                            rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>价值观</p>
                  <textarea placeholder="请输入价值观" v-model="aggregate.value"
                            rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>经营理念</p>
                  <textarea placeholder="请输入经营理念" v-model="aggregate.idea"
                            rows="5" />
                </div>
                <!-- 知识产权 -->
                <div class="personTitle">
                <p>知识产权</p>
                </div>
                <table class="zlResources">  
                  <tr>
                    <td>产权类型</td>
                    <td>产权名称</td>
                    <td>发明人</td>
                    <td>专利号</td>
                    <td>专利申请日期</td>
                    <td>证书号</td>
                    <td>操作</td>
                  </tr>
                  <tr class="zlResources_input" v-for="(item,index) in aggregate.custCorpIprList" :key="index">
                    <td>
                      <input type="text" v-model="item.type" disabled placeholder="请输入产权类型">
                    </td>
                    <td>
                      <input type="text" v-model="item.iprName" disabled placeholder="请输入产权名称">
                    </td>
                    <td>
                      <input type="text" v-model="item.inventor" disabled placeholder="请输入发明人">
                    </td>
                    <td>
                      <input type="text" v-model="item.patentNo" disabled placeholder="请输入专利号">
                    </td>
                    <td>
                      <el-date-picker type="date"
                                            placeholder="选择日期"
                                            v-model="item.patentDt"
                                            :disabled='true'>
                            </el-date-picker>
                    </td>
                    <td>
                      <input type="text" v-model="item.certificateNo" disabled placeholder="请输入证书号">
                    </td>
                    <td>
                      <button @click="removeRow(aggregate.custCorpIprList,index)">删除</button>
                      <button @click="updateCorpIprs(aggregate.custCorpIprList,index)">编辑</button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="drawerCorpIprs"
                           :direction="direction"
                           :before-close="handleClose">
                    <div class="arrContentAllParent">
                    <span>产权类型:</span>
                    <el-input v-model="arrContent.type"
                              placeholder="请选择产权类型"
                              :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                    <span>产权名称:</span>
                    <el-input v-model="arrContent.iprName"
                              placeholder="请输入产权名称"
                              :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>发明人:</span>
                      <el-input v-model="arrContent.inventor"
                                placeholder="请输入发明人名称"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专利号:</span>
                      <el-input v-model="arrContent.patentNo"
                                placeholder="请输入专利号"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专利申请日期:</span>
                      <el-date-picker type="date"
                                      placeholder="选择日期"
                                      v-model="arrContent.patentDt"
                                      :disabled='true'>
                      </el-date-picker>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>证书号:</span>
                      <el-input v-model="arrContent.certificateNo"
                                placeholder="请输入证书号"
                                :disabled="false"></el-input>
                    </div>
                    <br>
                    <div class="preservationParent">
                    <div>
                      <el-button class="form-btn infosubmit"
                                 @click="onePersonPreservation">保存</el-button>
                      <el-button class="form-btn cancel"
                                 @click="onePersonCansel">取消</el-button>
                    </div>
                  </div>
                  </el-drawer>
                  <div class="addItemParent">
                    <span @click="updateCorpIprs(aggregate.custCorpIprList,'')">+&nbsp;新增</span>
                  </div>
                </table>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(0,3)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 经营情况 -->
            <div v-show="role==0&&step==4">
              <p class="titleOfPersonDetails">经营情况</p>
              <div class="improve_registration_information_rightContentAll">
                <div style="margin-right:20px;" class="improve_registration_information_rightContentAll_input_row">
                  <p>近三年营业收入</p>
                  <div class="incomeInput">
                    <input type="text" v-model="income"
                        placeholder="请输入前年收入">
                  <input type="text" v-model="income2"
                        placeholder="请输入去年收入">
                  <input type="text" v-model="income3"
                        placeholder="请输入今年收入">
                  </div>
                </div>
                <div style="margin-right:20px;" class="improve_registration_information_rightContentAll_input_row">
                  <p>近三年利润</p>
                  <div class="incomeInput">
                    <input type="text" v-model="profit"
                        placeholder="请输入前年利润">
                    <input type="text" v-model="profit2"
                        placeholder="请输入去年利润">
                    <input type="text" v-model="profit3"
                        placeholder="请输入今年利润">
                  </div>
                  
                </div>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(0,4)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 业务情况 -->
            <div v-show="role==0&&step==5">
              <p class="titleOfPersonDetails">业务情况</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>商业模式</p>
                  <textarea placeholder="请输入商业模式" v-model="aggregate.commerceMd"
                            cols="150"
                            rows="4" />
                  <div class="uploadFile">
                    <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  accept=".rar,.zip,.doc,.docx,.pdf,.jpg"
                                  :show-file-list='true'
                                  :limit="1"
                                  :on-success="comsuccess"
                                  list-type="text"
                                  :auto-upload="true">
                          <el-button size="small"
                                    type="primary">上传文件</el-button>
                      </el-upload>
                      <i v-if="commerceFilename!==''"  style="margin:20px 0" class="uploadicon el-icon-document">&nbsp&nbsp{{commerceFilename}}</i>
                      <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>业务模式</p>
                  <textarea placeholder="请输入商业模式" v-model="aggregate.businessMd"
                            cols="150"
                            rows="4" />
                </div>
                <p class="improve_registration_information_rightContentAll_input_row" style="font-size:14px;">服务&产品链</p>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>入门产品服务</p>
                  <textarea placeholder="请输入入门产品服务" v-model="aggregate.priProd"
                            cols="150"
                            rows="4" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>标准产品服务</p>
                  <textarea placeholder="请输入标准产品服务" v-model="aggregate.standardProd"
                            cols="150"
                            rows="4" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>利润产品服务</p>
                  <textarea placeholder="请输入利润产品服务" v-model="aggregate.profitProd"
                            cols="150"
                            rows="4" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>利润来源</p>
                  <textarea placeholder="请输入商业模式" v-model="aggregate.profitSource"
                            cols="150"
                            rows="4" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>竞争对手</p>
                  <textarea placeholder="请输入竞争对手" v-model="aggregate.competitor"
                            cols="150"
                            rows="4" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>竞争优势</p>
                  <textarea placeholder="请输入竞争优势" v-model="aggregate.advantage"
                            cols="150"
                            rows="4" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>市场前景</p>
                  <textarea placeholder="请输入市场前景" v-model="aggregate.marketProspect"
                            cols="150"
                            rows="4" />
                </div>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(0,5)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 发展规划 -->
            <div v-show="role==0&&step==6">
              <p class="titleOfPersonDetails">发展规划</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>公司战略目标</p>
                  <table class="zlmbResources">
                    <tr>
                      <td>{{toDay}}年</td>
                      <td>{{toDay+1}}年</td>
                      <td>{{toDay+2}}年</td>
                    </tr>
                    <tr>
                      <td>
                        <textarea  rows="4" v-model="aggregate.strategyTarget" placeholder="请输入"/>
                      </td>
                      <td>
                        <textarea  rows="4" v-model="aggregate.strategyTarget2" placeholder="请输入"/>
                      </td>
                      <td>
                        <textarea  rows="4" v-model="aggregate.strategyTarget3" placeholder="请输入"/>
                      </td>
                    </tr>
                  </table>
                  <div class="uploadFile">
                    <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  accept=".rar,.zip,.doc,.docx,.pdf,.jpg"
                                  :show-file-list='true'
                                  :limit="1"
                                  list-type="text"
                                  :on-success="strsuccess"
                                  :auto-upload="true">
                          <el-button size="small"
                                    type="primary">上传文件</el-button>
                      </el-upload>
                      <i v-if="strategyFilename!==''"  style="margin:20px 0" class="uploadicon el-icon-document">&nbsp&nbsp{{strategyFilename}}</i>
                      <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>产品&服务开发计划</p>
                  <textarea placeholder="请输入开发计划" v-model="aggregate.prodPlan"
                            
                            rows="3" />
                  <div class="uploadFile">
                    <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  accept=".rar,.zip,.doc,.docx,.pdf,.jpg"
                                  :show-file-list='true'
                                  :limit="1"
                                  list-type="text"
                                  :on-success="prodsuccess"
                                  :auto-upload="true">
                          <el-button size="small"
                                    type="primary">上传文件</el-button>
                      </el-upload>
                      <i v-if="prodFilename!==''"  style="margin:20px 0" class="uploadicon el-icon-document">&nbsp&nbsp{{prodFilename}}</i>
                      <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>技术研发计划</p>
                  <textarea placeholder="请输入研发计划" v-model="aggregate.techPlan"
                            rows="3" />
                    <div class="uploadFile">
                    <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  accept=".rar,.zip,.doc,.docx,.pdf,.jpg"
                                  :show-file-list='true'
                                  :limit="1"
                                  list-type="text"
                                  :on-success="techsuccess"
                                  :auto-upload="true">
                          <el-button size="small"
                                    type="primary">上传文件</el-button>
                      </el-upload>
                      <i v-if="techFilename!==''"  style="margin:20px 0" class="uploadicon el-icon-document">&nbsp&nbsp{{techFilename}}</i>
                      <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>市场拓展计划</p>
                  <textarea placeholder="请输入扩展计划" v-model="aggregate.marketPlan"
                            rows="3" />
                    <div class="uploadFile">
                    <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  accept=".rar,.zip,.doc,.docx,.pdf,.jpg"
                                  :show-file-list='true'
                                  :limit="1"
                                  list-type="text"
                                  :on-success="marketsuccess"
                                  :auto-upload="true">
                          <el-button size="small"
                                    type="primary">上传文件</el-button>
                      </el-upload>
                      <i v-if="marketFilename!==''"  style="margin:15px 0" class="uploadicon el-icon-document">&nbsp&nbsp{{marketFilename}}</i>
                      <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>人才引进计划</p>
                  <textarea placeholder="请输入引进计划" v-model="aggregate.talentPlan"
                            rows="3" />
                    <div class="uploadFile">
                    <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  accept=".rar,.zip,.doc,.docx,.pdf,.jpg"
                                  :show-file-list='true'
                                  :limit="1"
                                  list-type="text"
                                  :on-success="talensuccess"
                                  :auto-upload="true">
                          <el-button size="small"
                                    type="primary">上传文件</el-button>
                      </el-upload>
                      <i v-if="talentFilename!==''"  style="margin:20px 0" class="uploadicon el-icon-document">&nbsp&nbsp{{talentFilename}}</i>
                      <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                  </div>
                </div>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel"
                          @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit"
                          @click="updateSubmit(0,6)">提&nbsp;交</button>
                </div>
              </div>
            </div>
          </div>
          <!-- 供应商 -->
          <div class="improve_registration_information_rightContent"
              v-if="role==1">
            <!-- 工商信息 -->
            <div v-show="role==1&&step==1">
              <p class="titleOfPersonDetails">工商信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">公司名称</p>
                  <input type="text" v-model="aggregate.splrName" placeholder="请输入公司名称">
                  <p v-if="aggregate.splrName==''||aggregate.splrName==null" :class="aggregate.splrName==''||aggregate.splrName==null?'':'opacity0'">请输入公司名称</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">公司地址</p>
                  <input type="text" v-model="aggregate.splrAdd" placeholder="请输入公司地址">
                  <p :class="aggregate.splrAdd==''||aggregate.splrAdd==null?'':'opacity0'">请输入公司地址</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p class="beforeP">公司电话</p>
                  <input type="text" v-model="aggregate.splrPhoneno" placeholder="请输入公司电话">
                  <p :class="aggregate.splrPhoneno==''||aggregate.splrPhoneno==null?'':'opacity0'">请输入公司电话</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>公司邮箱</p>
                  <input type="text" v-model="aggregate.splrEmail" placeholder="请输入公司邮箱">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>公司官网</p>
                  <input type="text" v-model="aggregate.splrWeb" placeholder="请输入公司官网">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>注册资本</p>
                  <input type="number" v-model="aggregate.registerCapital" placeholder="请输入注册资本">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>实缴资本</p>
                  <input type="number" v-model="aggregate.actualCapital" placeholder="请输入实缴资本">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>经营状况</p>
                  <input type="text" v-model="aggregate.manageState" placeholder="请输入经营状况">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>成立日期</p>
                  <input type="date"
                         v-model="aggregate.establishDate"
                         placeholder="请输入成立日期">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>核准日期</p>
                  <input type="date"
                         v-model="aggregate.approvalDate"
                         placeholder="请输入成立日期">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>注册类型</p>
                  <input type="text" v-model="aggregate.registerType" placeholder="请输入注册类型">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>信用代码</p>
                  <input type="text" v-model="aggregate.creditCode" placeholder="请输入社会信用代码">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>识别号</p>
                  <input type="text" v-model="aggregate.taxpayerNo" placeholder="请输入纳税人识别号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>注册号</p>
                  <input type="text" v-model="aggregate.registerNo" placeholder="请输入注册号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>机构代码</p>
                  <input type="text" v-model="aggregate.orgCode" placeholder="请输入机构代码">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>登记机关</p>
                  <input type="text" v-model="aggregate.registerOffice" placeholder="请输入登记机关名称">
                </div>
                <div style="margin-top:10px;" class="improve_registration_information_rightContentAll_input_selectare">
                  <p>所属行业</p>
                  <div class="improve_registration_information_rightContentAll_input_select">
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subIndustry"
                              @change="elSelectChangeEventA($event)">
                        <option value="222"
                                selected="selected"
                                style="display:none;">2222</option>
                        <option v-for="(item,index) in industryA"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.industryDetail"
                              @change="elSelectChangeEventB"
                              placeholder="请选择属于行业">
                        <option v-for="(item,index) in industryB"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <!-- <el-select v-model="aggregate.subIndustry" @change="elSelectChangeEventA" placeholder="请选择属于行业">
                    <el-option v-for="(item,index) in industryA" :key="index" :label="item.itemName" :value="item.dictItemId">{{item.itemName}}</el-option>
                  </el-select>
                  <el-select v-model="aggregate.industryDetail" @change="elSelectChangeEventB" placeholder="请选择属于行业">
                    <el-option v-for="(item,index) in industryB" :key="index" :label="item.itemName" :value="item.dictItemId">{{item.itemName}}</el-option>
                  </el-select> -->
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_selectare">
                  <p>所属区域</p>
                  <div class="improve_registration_information_rightContentAll_input_select">
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subArea1"
                              @change="elSelectChangeCityAEvent"
                              placeholder="请选择所属区域">
                        <option v-for="(item,index) in cityA"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subArea2"
                              @change="elSelectChangeCityBEvent"
                              placeholder="请选择所属区域">
                        <option v-for="(item,index) in cityB"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                    <div class="improve_registration_information_rightContentAll_input">
                      <select class="improve_registration_information_rightContentAll_input_selectd"
                              v-model="aggregate.subArea3"
                              @change="elSelectChangeCityCEvent"
                              placeholder="请选择所属区域">
                        <option v-for="(item,index) in cityC"
                                :key="index">{{item.itemName}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                <p>经营范围</p>
                <textarea placeholder="请输入使命"
                          v-model="aggregate.manageRange"
                          type="textarea"
                          rows="3" />
                </div>
                <div class="submitParent">
                  <div class="submits">
                    <button class="cancel" @click="cancelSubmit">取&nbsp;消</button>
                    <button class="infosubmit" @click="updateSubmit(1,1)">提&nbsp;交</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 股东信息 -->
            <div v-show="role==1&&step==2">
              <p class="titleOfPersonDetails">股东信息</p>
              <table class="gdResources">
                <tr>
                  <td>股东(自然人或法人)</td>
                  <td>持股比例</td>
                  <td>认缴出资(万元)</td>
                  <td>认缴日期</td>
                  <td>实缴出资(万元)</td>
                  <td>操作</td>
                </tr>
                <tr class="gdResources_input" v-for="(item,index) in aggregate.custSplrShareholderList" :key="index">
                  <td>
                    <input type="text" v-model="item.shareholder" disabled placeholder="股东(自然人或法人)">
                  </td>
                  <td>
                    <input type="text" v-model="item.shareholdRatio" disabled placeholder="持股比例">
                  </td>
                  <td>
                    <input type="text" v-model="item.admitPay" disabled placeholder="认缴出资(万元)">
                  </td>
                  <td>
                    <el-date-picker v-model="item.admitDate" type="date" :disabled="true" placeholder="选择日期"></el-date-picker>
                  </td>
                  <td>
                    <input type="text" v-model="item.actualPay" disabled placeholder="实缴出资(万元)">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrShareholderList,index)">删除</button>
                    <button @click="updateShareholder(aggregate.custSplrShareholderList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawer"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>股东名字:</span>
                      <el-input v-model="arrContent.shareholder" placeholder="请输入股东名字" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>持股比例:</span>
                      <el-input v-model="arrContent.shareholdRatio" placeholder="请输入持股比例" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>认缴金额:</span>
                      <el-input v-model="arrContent.admitPay" placeholder="请输入认缴金额" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>认缴日期:</span>
                      <el-date-picker type="date"  v-model="arrContent.admitDate" placeholder="选择日期"> </el-date-picker>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>实缴金额:</span>
                      <el-input v-model="arrContent.actualPay" placeholder="请输入实缴金额(万元)" />
                    </div>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateShareholder(aggregate.custSplrShareholderList,'')">+&nbsp;新增</span>
              </div>
              <!-- 董监高信息 -->
              <p>董监高信息</p>
              <table class="gdResources">
                <tr>
                  <td>姓名</td>
                  <td>职务</td>
                  <td>电话</td>
                  <td>操作</td>
                </tr>
                <tr class="gdResources_input" v-for="(item,index) in aggregate.custSplrDirectorList" :key="index">
                  <td>
                    <input type="text" v-model="item.name" disabled placeholder="姓名">
                  </td>
                  <td>
                    <input type="text" v-model="item.post" disabled placeholder="职务">
                  </td>
                  <td>
                    <input type="text" v-model="item.phone" disabled placeholder="电话">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrDirectorList,index)">删除</button>
                    <button @click="updateDirector(aggregate.custSplrDirectorList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawerDirector"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>姓名:</span>
                      <el-input v-model="arrContent.name" placeholder="请输入姓名" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>职务:</span>
                      <el-input v-model="arrContent.post" placeholder="请输入职务" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>电话:</span>
                      <el-input v-model="arrContent.phone" placeholder="请输入电话" />
                    </div>
                    <br>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateDirector(aggregate.custSplrDirectorList,'')">+&nbsp;新增</span>
              </div>
              <!-- 管理层信息-->
              <div>
                <p>管理层信息
                </p>
                <table class="gdResources">
                  <tr>
                    <td>姓名</td>
                    <td>部门</td>
                    <td>职务</td>
                    <td>电话</td>
                    <td>操作</td>
                  </tr>
                  <tr class="gdResources_input" v-for="(item,index) in aggregate.custSplrManageList" :key="index">
                    <td>
                      <input type="text" v-model="item.name" disabled placeholder="请输入姓名">
                    </td>
                    <td>
                      <input type="text"  v-model="item.department" disabled placeholder="请输入部门">
                    </td>
                    <td>
                      <input type="text"  v-model="item.post" disabled placeholder="请输入职务">
                    </td>
                    <td>
                      <input type="text"  v-model="item.phone" disabled placeholder="请输入电话">
                    </td>
                    <td>
                      <button @click="removeRow(aggregate.custSplrManageList,index)">删除</button>
                      <button @click="updateManage(aggregate.custSplrManageList,index)">编辑</button>
                    </td>
                    <el-drawer :visible.sync="drawerManage"
                              :direction="direction"
                              :before-close="handleClose">
                      <div class="arrContentAllParent">
                        <span>姓名:</span>
                        <el-input v-model="arrContent.name" placeholder="请输入姓名" />
                      </div>
                      <br>
                      <div class="arrContentAllParent">
                        <span>职务:</span>
                        <el-input v-model="arrContent.department" placeholder="请输入职务" />
                      </div>
                      <br>
                      <div class="arrContentAllParent">
                        <span>职务:</span>
                        <el-input v-model="arrContent.post" placeholder="请输入职务" />
                      </div>
                      <br>
                      <div class="arrContentAllParent">
                        <span>电话:</span>
                        <el-input v-model="arrContent.phone" placeholder="请输入电话" />
                      </div>
                      <br>
                      <div class="preservationParent">
                        <div>
                          <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                          <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                        </div>
                      </div>
                    </el-drawer>
                  </tr>
                </table>
              <div class="addItemParent">
                <span @click="updateManage(aggregate.custSplrManageList,'')">+&nbsp;新增</span>
              </div>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel" @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit" @click="updateSubmit(1,2)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 企业信息 -->
            <div v-show="role==1&&step==3">
              <p class="titleOfPersonDetails">企业信息</p>
              <div class="improve_registration_information_rightContentAll">
                                <div class="improve_registration_information_rightContentAll_input_row">
                  <div style="display:inline-block;margin-right:30px;">
                    <span>企业LOGO</span>
                    <div class="imgUpload">
                      <img :src="aggregate.logo" alt="">
                      <el-upload action=''
                                  :accept="'image/*'"
                                  :show-file-list='false'
                                  :limit="1"
                                  :on-change="getFile2"
                                  list-type="picture"
                                  :auto-upload="false">
                          <el-button size="small"
                                    type="primary">上传图片</el-button>
                      </el-upload>
                    </div>
                  </div>
                  <div style="display:inline-block">
                    <span>组织架构图</span>
                    <div class="imgUpload">
                      <img style="width:200px;height:200px;" :src="'http://42.51.16.10:8080/file/'+ corpOrganizationname"  alt="">
                      <el-upload action='http://42.51.16.10:8080/myTest/upload/common/file'
                                  :accept="'image/*'"
                                  :show-file-list='false'
                                  :limit="1"
                                  :on-success="corpOrgsuccess"
                                  :auto-upload="true">
                        <el-button size="small"
                                    type="primary">上传图片</el-button>
                      </el-upload>
                    </div>
                  </div>
                </div>
                                <div class="improve_registration_information_rightContentAll_input">
                  <p>企业简介</p>
                  <textarea placeholder="请输入企业简介" v-model="aggregate.enterpriceIntro"
                            rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>组织架构</p>
                  <textarea placeholder="请输入组织架构" v-model="aggregate.enterpriceIntro"
                    rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>部门职责</p>
                  <textarea placeholder="请输入部门职责" v-model="aggregate.enterpriceIntro"
                    rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>企业规模</p>
                  <select style="width"
                          v-model="aggregate.corpScale"
                          placeholder="请选择企业规模">
                    <option style="display:none">请选择企业规模</option>
                    <option value="">大型企业</option>
                    <option value="">中型企业</option>
                    <option value="">小型企业</option>
                    <option value="">微型企业</option>
                  </select>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>人员规模</p>
                  <input type="text"
                         v-model="aggregate.personnelScale"
                         placeholder="请输入人员规模">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>参保人数</p>
                  <input type="text"
                         v-model="aggregate.insuranceAmount"
                         placeholder="请输入参保人数">
                </div>
                <div class="personTitle">
                <p>企业文化</p>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>愿景</p>
                  <textarea placeholder="请输入愿景"
                            v-model="aggregate.vision"
                            rows="5" />
                  </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>使命</p>
                  <textarea placeholder="请输入使命" v-model="aggregate.mission"
                                    type="textarea"
                            rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>价值观</p>
                  <textarea placeholder="请输入价值观" v-model="aggregate.value"
                            rows="5" />
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>经营理念</p>
                  <textarea placeholder="请输入经营理念" v-model="aggregate.idea"
                            rows="5" />
                </div>
                <!-- <div class="improve_registration_information_rightContentAll_input">
                  <p>组织架构</p>
                  <input type="text" v-model="aggregate.orgFramework" placeholder="请输入组织架构">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>部门职责</p>
                  <input type="text" v-model="aggregate.departmentDuty" placeholder="请输入部门职责">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>人员规模</p>
                  <input type="text" v-model="aggregate.personnelScale" placeholder="请输入人员规模">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>参保人数</p>
                  <input type="text" v-model="aggregate.insuranceAmount" placeholder="请输入参保人数">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>荣誉称号</p>
                  <input type="text" v-model="aggregate.honorTitle" placeholder="请输入荣誉称号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>企业规模</p>
                  <select v-model="aggregate.splrScale">
                    <option style="display:none;">请选择企业规模</option>
                    <option value="大型企业">大型企业</option>
                    <option value="中型企业">中型企业</option>
                    <option value="小型企业">小型企业</option>
                    <option value="微型企业">微型企业</option>
                  </select>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>愿景</p>
                  <textarea placeholder="请输入愿景" cols="110" rows="4" v-model="aggregate.vision" />
                  </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>使命</p>
                  <textarea placeholder="请输入使命" cols="110" rows="4" v-model="aggregate.mission" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>价值观</p>
                  <textarea placeholder="请输入价值观" cols="110" rows="4" v-model="aggregate.value" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>经营理念</p>
                  <textarea placeholder="请输入经营理念" cols="110" rows="4" v-model="aggregate.idea" />
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>企业简介</p>
                  <textarea placeholder="请输入企业简介" cols="110" rows="4" v-model="aggregate.enterpriceIntro" />
                </div> -->

                <!-- <div class="improve_registration_information_rightContentAll_input_row">
                  <p>logo</p>
                  <img :src="aggregate.logo" style="width:120px;height:80px;" alt="">
                  <el-upload action='' :accept="'image/*'" :show-file-list='false' :on-change="getFile2" :before-upload="beforeAvatarFileUpload" list-type="picture" :auto-upload="false">
                      <el-button size="small"
                                  type="primary">上传图片</el-button>
                    </el-upload>
                </div> -->
              </div>
              <!-- 资质证书 -->
              <p class="titleOfPersonDetails">资质证书</p>
              <table class="zlResources">  
                <tr>
                  <td>证书名称</td>
                  <td>资质水平</td>
                  <td>操作</td>
                </tr>
                <tr class="zlResources_input" v-for="(item,index) in aggregate.custSplrQulificationList" :key="index">
                  <td>
                    <input type="text" v-model="item.qualName" disabled placeholder="证书名称">
                  </td>
                  <td>
                    <select v-model="item.qualLevel" disabled>
                      <option style="display:none;">请选择资质水平</option>
                      <option value="国家级">国家级</option>
                      <option value="省部级">省部级</option>
                      <option value="地区级">地区级</option>
                      <option value="行业水平">行业水平</option>
                    </select>
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrQulificationList,index)">删除</button>
                    <button @click="updateQulification(aggregate.custSplrQulificationList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawerQulification"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>证书名称:</span>
                      <el-input v-model="arrContent.qualName" placeholder="请输入名称" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>资质水平:</span>
                      <select v-model="arrContent.qualLevel">
                        <option style="display:none;">请选择资质水平</option>
                        <option value="国家级">国家级</option>
                        <option value="省部级">省部级</option>
                        <option value="地区级">地区级</option>
                        <option value="行业水平">行业水平</option>
                      </select>
                    </div>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateQulification(aggregate.custSplrQulificationList,'')">+&nbsp;新增</span>
              </div>
               <div style="width:96%" class="improve_registration_information_rightContentAll_input_row">
                  <p>荣誉称号</p>
                  <textarea placeholder="请输入使命"
                            v-model="aggregate.honorTitle"
                            type="textarea"
                            rows="3" />
                </div>
              <!-- 知识产权 -->
              <p class="titleOfPersonDetails">知识产权</p>
              <table class="zlResources">  
                <tr>
                  <td>产权类型</td>
                  <td>产权名称</td>
                  <td>发明人</td>
                  <td>专利号</td>
                  <td>证书号</td>
                  <td>操作</td>
                </tr>
                <tr class="zlResources_input" v-for="(item,index) in aggregate.custSplrIprList" :key="index">
                  <td>
                    <input type="text" v-model="item.type" disabled placeholder="请输入产权类型">
                  </td>
                  <td>
                    <input type="text" v-model="item.iprName" disabled placeholder="请输入产权名称">
                  </td>
                  <td>
                    <input type="text" v-model="item.inventor" disabled placeholder="请输入发明人">
                  </td>
                  <td>
                    <input type="text" v-model="item.patentNo" disabled placeholder="请输入专利号">
                  </td>
                  <td>
                    <input type="text" v-model="item.certificateNo" disabled placeholder="请输入证书号">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrIprList,index)">删除</button>
                    <button @click="updateIpr(aggregate.custSplrIprList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawerIpr"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>产权类型:</span>
                      <select v-model="arrContent.type">
                        <option style="display:none;">请选择产权类型</option>
                        <option value="发明">发明</option>
                        <option value="实用新型">实用新型</option>
                        <option value="外观设计">外观设计</option>
                      </select>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>产权名称:</span>
                      <el-input v-model="arrContent.iprName" placeholder="请输入产权名称" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>发明人:</span>
                      <el-input v-model="arrContent.inventor" placeholder="请输入发明人名称" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专利号:</span>
                      <el-input v-model="arrContent.patentNo" placeholder="请输入专利号" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>申请日期:</span>
                      <el-date-picker type="date" v-model="arrContent.patentDt" placeholder="选择日期"></el-date-picker>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专利权人:</span>
                      <el-input v-model="arrContent.patentee" placeholder="请输入专利权人名称" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>地址:</span>
                      <el-input v-model="arrContent.iprAdd"
                                placeholder="请输入地址" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>公告日期:</span>
                      <el-date-picker type="date" v-model="arrContent.noticeDt" placeholder="选择日期">
                      </el-date-picker>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>公告号:</span>
                      <el-input v-model="arrContent.noticeNo" placeholder="请输入授权公众号" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>证书号:</span>
                      <el-input v-model="arrContent.certificateNo" placeholder="请输入证书号" />
                    </div>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateIpr(aggregate.custSplrIprList,'')">+&nbsp;新增</span>
              </div>
              <!-- 业务骨干 -->
              <p class="titleOfPersonDetails">业务骨干</p>
              <table class="ywggResources">  
                <tr>
                  <td>姓名</td>
                  <td>部门</td>
                  <td>职务</td>
                  <td>个人简历</td>
                  <td>专业能力</td>
                  <td>专注行业</td>
                  <td>擅长领域</td>
                  <td>操作</td>
                </tr>
                <tr class="zlResources_input" v-for="(item,index) in aggregate.custSplrSkeletonList" :key="index">
                  <td>
                    <input type="text" v-model="item.name" disabled placeholder="姓名">
                  </td>
                  <td>
                    <input type="text" v-model="item.department" disabled placeholder="部门">
                  </td>
                  <td>
                    <input type="text" v-model="item.post" disabled placeholder="职务">
                  </td>
                  <td>
                    <input type="text" v-model="item.resume" disabled placeholder="个人简历">
                  </td>
                  <td>
                    <input type="text" v-model="item.majorAbility" disabled placeholder="专业能力">
                  </td>
                  <td>
                    <input type="text" v-model="item.fucosIndustry" disabled placeholder="专注行业">
                  </td>
                  <td>
                    <input type="text" v-model="item.specialtyField" disabled placeholder="擅长领域">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrSkeletonList,index)">删除</button>
                    <button @click="updateSkeleton(aggregate.custSplrSkeletonList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawerSkeleton"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>姓名:</span>
                      <el-input v-model="arrContent.name" placeholder="请输入姓名" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>部门:</span>
                      <el-input v-model="arrContent.department" placeholder="请输入部门" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>职务:</span>
                      <el-input v-model="arrContent.post" placeholder="请输入职务" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>个人简历:</span>
                      <el-input v-model="arrContent.resume" placeholder="请输入个人简历" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专业能力:</span>
                      <el-input v-model="arrContent.majorAbility" placeholder="请输入专业能力" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专注行业:</span>
                      <el-input v-model="arrContent.fucosIndustry" placeholder="请输入专注行业" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>擅长领域:</span>
                      <el-input v-model="arrContent.specialtyField" placeholder="请输入擅长领域" />
                    </div>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateSkeleton(aggregate.custSplrSkeletonList,'')">+&nbsp;新增</span>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel" @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit" @click="updateSubmit(1,3)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 经营情况 -->
            <div class="jyqk" v-show="role==1&&step==4">
              <p class="titleOfPersonDetails">经营情况</p>
              <div class="improve_registration_information_rightContentAll">
                <div style="margin-right:20px;" class="improve_registration_information_rightContentAll_input_row">
                  <p>近三年营业收入</p>
                  <div class="incomeInput">
                    <input type="text" v-model="income"
                        placeholder="请输入前年收入">
                  <input type="text" v-model="income2"
                        placeholder="请输入去年收入">
                  <input type="text" v-model="income3"
                        placeholder="请输入今年收入">
                  </div>
                </div>
                <div style="margin-right:20px;" class="improve_registration_information_rightContentAll_input_row">
                  <p>近三年利润</p>
                  <div class="incomeInput">
                    <input type="text" v-model="profit"
                        placeholder="请输入前年利润">
                    <input type="text" v-model="profit2"
                        placeholder="请输入去年利润">
                    <input type="text" v-model="profit3"
                        placeholder="请输入今年利润">
                  </div>
                  
                </div>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel" @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit" @click="updateSubmit(1,4)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 业务情况 -->
            <div class="ywqk" v-show="role==1&&step==5">
              <p class="titleOfPersonDetails">业务情况</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p>主营范围</p>
                  <input type="text" v-model="aggregate.mainBusiness" placeholder="请输入主营范围">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>竞争优势</p>
                  <input type="text" v-model="aggregate.advantage" placeholder="请输入竞争优势">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>三年业务量</p>
                  <input type="text" v-model="aggregate.businessVolume" placeholder="请输入三年业务量">
                </div>
              </div>
              <!-- 产品&服务名称 -->
              <p class="titleOfPersonDetails">产品&服务名称</p>
              <table class="zlResources">  
                <tr>
                  <td>名称</td>
                  <td>简介</td>
                  <td>主要效果</td>
                  <td>适用范围</td>
                  <td>操作</td>
                </tr>
                <tr class="zlResources_input" v-for="(item,index) in aggregate.custSplrProdList" :key="index">
                  <td>
                    <input type="text" v-model="item.prodserName" disabled placeholder="请输入名称">
                  </td>
                  <td>
                    <input type="text" v-model="item.prodserIntro" disabled placeholder="请输入简介">
                  </td>
                  <td>
                    <input type="text" v-model="item.mainEffect" disabled placeholder="请输入主要效果">
                  </td>
                  <td>
                    <input type="text" v-model="item.applicationScope" disabled placeholder="请输入适用范围">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrProdList,index)">删除</button>
                    <button @click="updateProd(aggregate.custSplrProdList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawerProd"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>名称:</span>
                      <el-input v-model="arrContent.prodserName" placeholder="请输入名称" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>简介:</span>
                      <el-input v-model="arrContent.prodserIntro" placeholder="请输入简介" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>主要效果:</span>
                      <el-input v-model="arrContent.mainEffect" placeholder="请输入主要效果" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>适用范围:</span>
                      <el-input v-model="arrContent.applicationScope" placeholder="请输入适用范围" />
                    </div>
                    <br>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateProd(aggregate.custSplrProdList,'')">+&nbsp;新增</span>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel" @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit" @click="updateSubmit(1,5)">提&nbsp;交</button>
                </div>
              </div>
            </div>
            <!-- 典型服务案例-->
            <div class="dxfwal" v-show="role==1&&step==6">
              <p class="titleOfPersonDetails">典型服务案例</p>
              <table class="zlResources">  
                <tr>
                  <td>项目名称</td>
                  <td>开始时间</td>
                  <td>结束时间</td>
                  <td>业务类型</td>
                  <td>操作</td>
                </tr>
                <tr class="zlResources_input" v-for="(item,index) in aggregate.custSplrCaseList" :key="index">
                  <td>
                    <input type="text" v-model="item.projectName" disabled placeholder="请输入项目名称">
                  </td>
                  <td>
                    <el-date-picker v-model="item.startDt" type="date" :disabled="true" placeholder="选择日期"></el-date-picker>
                  </td>
                  <td>
                    <el-date-picker v-model="item.endDt" type="date" :disabled="true" placeholder="选择日期"></el-date-picker>
                  </td>
                  <td>
                    <input type="text" v-model="item.businessType" disabled placeholder="请输入业务类型">
                  </td>
                  <td>
                    <button @click="removeRow(aggregate.custSplrCaseList,index)">删除</button>
                    <button @click="updateResource(aggregate.custSplrCaseList,index)">编辑</button>
                  </td>
                  <el-drawer :visible.sync="drawerResource"
                            :direction="direction"
                            :before-close="handleClose">
                    <div class="arrContentAllParent">
                      <span>项目名称:</span>
                      <el-input v-model="arrContent.projectName" placeholder="请输入名称" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>开始时间</span>
                      <el-date-picker type="date" v-model="arrContent.startDt" placeholder="选择日期"></el-date-picker>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>结束时间</span>
                      <el-date-picker type="date" v-model="arrContent.endDt" placeholder="选择日期"></el-date-picker>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>业务类型</span>
                      <el-select v-model="arrContent.businessType" @change="changeFirstClassMenu" placeholder="请选择属于行业">
                        <el-option v-for="(item,index) in firstClassMenu" :key="index" :label="item.itemName" :value="item.dictItemId">{{item.itemName}}</el-option>
                      </el-select>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>业务类型</span>
                      <el-select v-model="arrContent.businessDetail" @change="changeSecendClassMenu" placeholder="请选择属于行业">
                        <el-option v-for="(item,index) in secedClassMenu" :key="index" :label="item.itemName" :value="item.dictItemId">{{item.itemName}}</el-option>
                      </el-select>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>专业领域:</span>
                      <el-input v-model="arrContent.field" placeholder="请输入专业领域" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>所在行业</span>
                      <el-select v-model="arrContent.industry" @change="elSelectChangeEventDXAL" placeholder="请选择所在行业">
                        <el-option v-for="(item,index) in industryA" :key="index" :label="item.itemName" :value="item.dictItemId"></el-option>
                      </el-select>
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>背景描述:</span>
                      <el-input v-model="arrContent.background" placeholder="请输入背景描述" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>调研工具:</span>
                      <el-input v-model="arrContent.surveyTool" placeholder="请输入调研工具" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>调研方法:</span>
                      <el-input v-model="arrContent.surveyMethod" placeholder="请输入调研方法" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>调研结论:</span>
                      <el-input v-model="arrContent.surveyResult" placeholder="请输入调研结论" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>解决方案:</span>
                      <el-input v-model="arrContent.solution" placeholder="请输入解决方案" />
                    </div>
                    <br>
                    <div class="arrContentAllParent">
                      <span>实施效果:</span>
                      <el-input v-model="arrContent.effect" placeholder="请输入实施效果" />
                    </div>
                    <div class="preservationParent">
                      <div>
                        <el-button class="form-btn infosubmit" @click="onePersonPreservation">保存</el-button>
                        <el-button class="form-btn cancel" @click="onePersonCansel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </tr>
              </table>
              <div class="addItemParent">
                <span @click="updateResource(aggregate.custSplrCaseList,'')">+&nbsp;新增</span>
              </div>
              <div class="submitParent">
                <div class="submits">
                  <button class="cancel" @click="cancelSubmit">取&nbsp;消</button>
                  <button class="infosubmit" @click="updateSubmit(1,6)">提&nbsp;交</button>
                </div>
              </div>
            </div>
          </div>
          <!-- 共享人才 -->
          <div class="improve_registration_information_rightContent" v-if="role==3">
            <!-- 基本信息 -->
            <div class="jbxx" v-show="role==3&&step==1">
              <p>基本信息</p>
              <div class="improve_registration_information_rightContentAll">
                <div class="improve_registration_information_rightContentAll_input">
                  <p>姓名</p>
                  <input type="text"
                        placeholder="请输入姓名">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>年龄</p>
                  <input type="text"
                        placeholder="请输入年龄">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>身份证号</p>
                  <input type="text"
                        placeholder="请输入身份证号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>省份</p>
                  <input type="text"
                        placeholder="请输入省份">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>城市</p>
                  <input type="text"
                        placeholder="请输入城市">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>手机号</p>
                  <input type="text"
                        placeholder="请输入手机号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>注册邮箱</p>
                  <input type="text"
                        placeholder="请输入注册邮箱">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>微信号</p>
                  <input type="text"
                        placeholder="请输入微信号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>QQ号</p>
                  <input type="text"
                        placeholder="请输入QQ号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>微博账号</p>
                  <input type="text"
                        placeholder="请输入微博账号">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>工作年限</p>
                  <input type="text"
                        placeholder="请输入工作年限">
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>咨询年限</p>
                  <input type="text"
                        placeholder="请输入咨询年限">
                </div>
                <div class="improve_registration_information_rightContentAll_input_select">
                  <p>性别</p>
                  <select style="width">
                    <option style="display:none;">请选择性别</option>
                    <option value="男">男</option>
                    <option value="女">女</option>
                  </select>
                </div>
                <div class="improve_registration_information_rightContentAll_input_select">
                  <p>工作状态</p>
                  <select>
                    <option style="display:none;">请选择工作状态</option>
                    <option value="">实际控制人</option>
                    <option value="">董事长</option>
                    <option value="">懂事</option>
                  </select>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>工作描述</p>
                  <textarea placeholder="请输入工作描述"
                            cols="35"
                            rows="4" />
                </div>
                <div style="width:100%;margin:20px 0;text-align: center;">
                  <button class="newbtn">信息提交</button>
                </div>
              </div>
            </div>
            <!-- 教育经历 -->
            <div class="jyjj" v-show="role==3&&step==2">
              <!-- 教育经历 -->
              <p>教育经历</p>
              <table class="ywggResources">
                <tr>
                  <td>学校名称</td>
                  <td>开始时间</td>
                  <td>结束时间</td>
                  <td>所学专业</td>
                  <td>是否统招</td>
                  <td>学历</td>
                  <td>操作</td>
                </tr>
                <tr class="ywggResources_input">
                  <td>
                    <input type="text"
                          placeholder="学校名称">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="开始时间">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="结束时间">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="所学专业">
                  </td>
                  <td>
                  <select>
                    <option style="display:none;">是否统招</option>
                    <option value="">是</option>
                    <option value="">否</option>
                  </select>
                  </td>
                  <td>
                  <select>
                    <option style="display:none;">请选择学历</option>
                    <option value="">中技</option>
                    <option value="">高中</option>
                    <option value="">本科</option>
                    <option value="">博士</option>
                  </select>
                  </td>
                  <td>
                    <button>删除</button>
                  </td>
                </tr>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
              <!-- 培训经历 -->
              <p>培训经历</p>
              <table class="ywggResources">
                <tr>
                  <td>开始时间</td>
                  <td>结束时间</td>
                  <td>培训机构</td>
                  <td>培训课程</td>
                  <td>操作</td>
                </tr>
                <tr class="ywggResources_input">
                  <td>
                    <input type="text"
                          placeholder="开始时间">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="结束时间">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="培训机构">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="培训课程">
                  </td>
                  <td>
                    <button>删除</button>
                  </td>
                </tr>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
              <!-- 培训专业能力经历 -->
              <p>培训经历</p>
              <table class="ywggResources">
                <tr>
                  <td>擅长专业</td>
                  <td>擅长行业</td>
                  <td>操作</td>
                </tr>
                <tr class="ywggResources_input">
                  <td>
                    <textarea placeholder="请输入擅长专业"
                              cols="30"
                              rows="3" />
                  </td>
                  <td>
                    <textarea placeholder="请输入擅长行业"
                              cols="30"
                              rows="3" />
                  </td>
                  <td>
                    <button>删除</button>
                  </td>
                </tr>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
              <!-- 工作经验 -->
              <p>工作经验</p>
              <table class="ywggResources">
                <tr>
                  <td>公司名称</td>
                  <td>公司性质</td>
                  <td>公司规模</td>
                  <td>最高职位</td>
                  <td>操作</td>
                </tr>
                <tr class="ywggResources_input">
                  <td>
                    <input type="text"
                          placeholder="公司名称">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="公司性质">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="公司规模">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="最高职位">
                  </td>
                  <td>
                    <button>删除</button>
                  </td>
                </tr>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
            </div>
            <!-- 项目经验 -->
            <div class="xmjy" v-show="role==3&&step==3">
              <!-- 培训经历 -->
              <p>培训经历</p>
              <table class="ywggResources">
                <tr>
                  <td>开始时间</td>
                  <td>结束时间</td>
                  <td>培训机构</td>
                  <td>培训课程</td>
                  <td>操作</td>
                </tr>
                <tr class="ywggResources_input">
                  <td>
                    <input type="text"
                          placeholder="开始时间">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="结束时间">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="培训机构">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="培训课程">
                  </td>
                  <td>
                    <button>删除</button>
                  </td>
                </tr>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
            </div>
            <!-- 服务意愿 -->
            <div class="fwyy" v-show="role==3&&step==4">
              <p>服务意愿</p>
              <div class="improve_registration_information_rightContentAll"> 
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>承接咨询项目</p>
                  <label><input name="t1" type="radio">是</label>
                  <label><input name="t1" type="radio">否</label>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>适应外地出差</p>
                  <label><input name="t2" type="radio">是</label>
                  <label><input name="t2" type="radio">否</label>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>意愿担当项目经理</p>
                  <label><input name="t3" type="radio">是</label>
                  <label><input name="t3" type="radio">否</label>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>意愿担当项目组员</p>
                  <label><input name="t4" type="radio">是</label>
                  <label><input name="t4" type="radio">否</label>
                </div>
                <div class="improve_registration_information_rightContentAll_input_row">
                  <p>独立完成项目</p>
                  <label><input name="t5" type="radio">是</label>
                  <label><input name="t5" type="radio">否</label>
                </div>
                <div class="improve_registration_information_rightContentAll_input">
                  <p>收费标准</p>
                  <textarea placeholder="请输入收费标准(单位元)"
                            cols="35"
                            rows="4" />
                </div>
                <div style="width:100%;margin:20px 0;text-align: center;">
                  <button class="newbtn">信息提交</button>
                </div>
              </div>
            </div>
            <!-- 资质证书 -->
            <div class="zzzs" v-show="role==3&&step==5">
              <p>资质证书</p>
              <table class="ywggResources">
                <tr>
                  <td>资质名称</td>
                  <td>证书名称</td>
                  <td>获得时间</td>
                  <td>操作</td>
                </tr>
                <tr class="ywggResources_input">
                  <td>
                    <input type="text"
                          placeholder="资质名称">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="证书名称">
                  </td>
                  <td>
                    <input type="text"
                          placeholder="获得时间">
                  </td>
                  <td>
                    <button>删除</button>
                  </td>
                </tr>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
            </div>
            <!-- 自我评价 -->
            <div class="zwpj" v-show="role==3&&step==6">
              <p>自我评价</p>
              <table class="ywggResources">
                <td>
                  <textarea placeholder="请输入自我评价"
                            cols="140"
                            rows="3" />
                </td>
              </table>
              <div style="width:100%;margin:20px 0;text-align: center;">
                <button class="newbtn">新增属性</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  updateIndivInfo,
  indivFinish,
  corpFinish,
  serverTender,
  htListChildren,
  file,
  hyList,
  getCity1,
  getCity2,
  getCity3,
  changeAvatar,
  getMyInfo,
  calcIndivResource,
  updateIndivResource,
  resources,
  resourcesEr,
  splrFinish,
  updateSplrInfo,
  updateCorpInfo,
  updateSplrMainManage,
  updateCorpMainManage,
  updateCorpMainInfo,
  updateSplrBusinessInfo,
  getBusinessTowList,
  getBusinessList,
  updateSplrServiceInfo,
  updateSplrMainInfo
} from "@/components/api/api";
import myUpload from 'vue-image-crop-upload';
export default {
  data () {
    return {
      userInfo: "",
      role: 2,
      step: this.$route.query.step || 1,
      // 用于信息回显
      aggregate: [{
        corpName: '',
        value: '',
      }
      ],
      drawer: false,
      drawerShareholders: false,
      drawerDirector: false,
      drawerDirectors: false,
      drawerManages: false,
      drawerCorpIprs: false,
      direction: 'btt',
      // 放入弹窗的对象 个人会员
      arrContent: {
        resourceType: '',
        resourceLevel: '',
        levelStandard: '',
        resourceDesc: '',
        // //updateShareholders
        // shareholder: '',
        // shareholdRatio: '',
        // admitPay: '',
        // admitDate: '',
        // actualPay: '',
        // //updateDirector
        // name: '',
        // post: '',
        // phone: '',
        // //updateManageList
        // name: '',
        // department: '',
        // post: '',
        // phone: '',
      },
      // 企业会员信息
      enterpriseMemberForm: [
        {
          corpName: '',
          value: '',
        }
      ],
      // 所属行业一级
      industryA: [
        { "dict ItemId": null, }
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
      toDay: "",
      // 一级资源
      primaryResources: "",
      // 二级资源
      twoTierResources: "",
      // 保存选择二级时的val
      twoTierResourcesVal: "",
      // 三级资源
      threeTierResources: "",
      // 头像
      avatar: "",
      // 头像上传的显示
      show: false,
      // 头像size
      size: 2.1,
      drawerDirector: false,
      drawerManage: false,
      income: "",
      income2: "",
      income3: "",
      profit: "",
      profit2: "",
      profit3: "",
      drawerProd: false,
      drawerResource: false,
      // 典型案例 一级业务options
      firstClassMenu: [{ "dictItemId": 1, "itemName": "nimei" }],
      // 一级的自定义属性
      firstClassMenuDataValue: "",
      // 典型案例 二级options
      secedClassMenu: [],
      drawerQulification: false,
      drawerIpr: false,
      drawerSkeleton: false,
      // 上传文件
      fileList: [],
      corpOrganizationname: '',
      commerceFilename: '',
      strategyFilename: '',
      prodFilename: '',
      techFilename: '',
      marketFilename: '',
      talentFilename: '',
      // 是否选项
      radio:"",
      radio2:"",
      radio3:"",
      radio4:"",
      radio5:"",
      // 教育经历
      educationExperience:[
        {name:"野鸡大学",time:"2018-2020",pro:"电工",tongZhao:"是",xueli:"本科"}
      ],
      drawereducation:false,
      trainExperience:[
        {name:"野鸡培训",curriculum:"如何长大",time:"2020-02-10"}
      ],
      drawerTrain:false,
      power:[
        {name1:"专业",name2:"行业"}
      ],
      drawerPower:false,
      qualifications:[
        {name1:"资质",name2:"证书",time:"2020-10-2"}
      ],
      drawerQualifications:false,
      experience:[
        {name:"公司名称",type:"发明",number:"100-1000",stage:"起步",industry:"软件行业",position:"董事",time:['2020/01/02'-'2020/02/02'],work:"工作描述",achievement:"工作业绩" }
      ],
      drawerExperience:false,
      projectExperience:[
        {name:"公司名称",type:"发明",number:"100-1000",stage:"起步",industry:"软件行业",demand:"客户需求",proName:"项目名称",proType:"食品",proOther:"其他描述",proAllPrice:"50000",time:['2020/01/02'-'2020/02/02'],post:"项目经理",server:"服务简介",work:"工作职责",achievement:"主要业绩" }
      ],
      drawerPro:false,
    }
  },
  components: {
    "my-upload": myUpload
  },
  watch: {

  },
  mounted () {
    this.mountedInfo();
    this.primaryResourcesFun();
    this.getBusinessList();
  },
  methods: {
    // mounted中执行的封装
    mountedInfo () {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.userInfo = user;
      // this.role = user.role;
      // 获取头像
      getMyInfo({ "userId": user.userId }).then(res => {
        if (res.data.code === 200) {
          this.avatar = res.data.data.avatar
        }
      })
      switch (this.role) {
        // 企业会员
        case "0":
          corpFinish({ "corpId": user.roleId }).then(res => {
            if (res.data.code === 200) {
              this.aggregate = res.data.data[0]
              if(this.aggregate.income3years){
                let arr = this.aggregate.income3years.split(",");
                this.income = arr[0];
                this.income2 = arr[1];
                this.income3 = arr[2];
              }
              if(this.aggregate.profit3years){
                let arr2 = this.aggregate.profit3years.split(",");
                this.profit = arr2[0];
                this.profit2 = arr2[1];
                this.profit3 = arr2[2];
              }
              if(this.aggregate.subArea){
                let arr3 = this.aggregate.subArea.split(" ");
                this.aggregate.subArea1 = arr3[0]
                this.aggregate.subArea2 = arr3[1]
                this.aggregate.subArea3 = arr3[2]
              }
              this.getCity2();
              if(this.aggregate.corpOrganization){
                this.corpOrganizationname = this.aggregate.corpOrganization.match('[^/]+(?!.*/)')[0]
              }
              if(this.aggregate.commerceFilename){
                this.commerceFilename = this.aggregate.commerceFile.match('[^/]+(?!.*/)')[0]
              }
              if(this.aggregate.strategyFile){
                this.strategyFilename = this.aggregate.strategyFile.match('[^/]+(?!.*/)')[0]
              }
              if(this.aggregate.prodFile){
                this.prodFilename = this.aggregate.prodFile.match('[^/]+(?!.*/)')[0]
              }
              if(this.aggregate.techFile){
                this.techFilename = this.aggregate.techFile.match('[^/]+(?!.*/)')[0]
              }
              if(this.aggregate.talentFile){
                this.talentFilename = this.aggregate.talentFile.match('[^/]+(?!.*/)')[0]
              }
              // this.marketFilename = this.aggregate.marketFile.match('[^/]+(?!.*/)')[0]
              hyList().then(res => {
                if (res.data.code === 200) {
                  this.industryA = res.data.data
                  this.htListChildren();
                }
              })
              getCity1().then(res => {
                if (res.data.code === 200) {
                  this.cityA = res.data.data
                  this.getCity2();
                }
              })
            }
          })
          let nowDate = new Date();
          let date = {
            year: nowDate.getFullYear(),
            month: nowDate.getMonth() + 1,
            date: nowDate.getDate(),
          }
          this.toDay = date.year;
          break;
        // 服务供应商
        case "1":
          splrFinish({ "splrId": user.roleId }).then(res => {
            if (res.data.code === 200) {
              this.aggregate = res.data.data[0];
              if(this.aggregate.income3years){
                let arr = this.aggregate.income3years.split(",");
                this.income = arr[0];
                this.income2 = arr[1];
                this.income3 = arr[2];
              }
              if(this.aggregate.profit3years){
                let arr2 = this.aggregate.profit3years.split(",");
                this.profit = arr2[0];
                this.profit2 = arr2[1];
                this.profit3 = arr2[2];
              }
              if(this.aggregate.subArea){
                let arr3 = this.aggregate.subArea.split(" ");
                this.aggregate.subArea1 = arr3[0]
                this.aggregate.subArea2 = arr3[1]
                this.aggregate.subArea3 = arr3[2]
              }
              if(this.aggregate.corpOrganization){
                this.corpOrganizationname = this.aggregate.corpOrganization.match('[^/]+(?!.*/)')[0]
              }
              hyList().then(res => {
                if (res.data.code === 200) {
                  this.industryA = res.data.data
                  this.htListChildren();
                }
              })
              getCity1().then(res => {
                if (res.data.code === 200) {
                  this.cityA = res.data.data
                  this.getCity2();
                }
              })
            }
          })
          break;
        // 
        case "2":
          indivFinish({ "indivId": user.roleId }).then(res => {
            if (res.data.code === 200) {
              this.aggregate = res.data.data[0]
            }
          })
          break;

        default:
          break;
      }
    },
    // 过滤对象属性方法
    certainFunction (obj, keys) {
      return keys.reduce((result, key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
        return result;
      }, {});
    },
    // 取消或者返回上一级
    cancelSubmit () {
      let userInfo = JSON.parse(sessionStorage.getItem("user"));
      switch (userInfo.role) {
        case "0": {
          this.$router.push({ path: "/fun/home_", query: { "userInfo": userInfo } })
          return "";
        }
        case "1": {
          this.$router.push({ path: "/fun/homeFw", query: { "userInfo": userInfo } });
          return "";
        }
        case "2": {
          this.$router.push({ path: "/fun/homeGr", query: { "userInfo": userInfo } });
          return "";
        }
        case "3": {
          this.$router.push({ path: "/fun/homeGx", query: { "userInfo": userInfo } });
          return "";
        }
        default: {
          this.$notify({
            title: '操作失败',
            message: '您登录信息已失效，请重新登录后重试！',
            type: 'error',
            position: 'top-left'
          });
        }
      }
    },
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
    //企业会员logo
    getFile (file, fileList) {
      this.getBase64(file.raw).then(res => {
        this.aggregate.logo = res;
      });
    },
    // getFilecorpOrg (file, fileList) {
    //   this.getBase64(file.raw).then(res => {
    //     this.aggregate.corpOrganization = res;
    //   });
    // },
    //上传文件
    //企业会员组织架构
    corpOrgsuccess (res) {
      this.aggregate.corpOrganization = res.type
    },
    //企业会员商业模式
    comsuccess (res) {
      this.aggregate.commerceFile = res.type
      this.commerceFilename = ''
      // aggregate.commerceFile.match('[^/]+(?!.*/)')[0]
    },
    //企业会员公司战略
    strsuccess (res) {
      this.aggregate.strategyFile = res.type
      this.strategyFilename = ''
    },
    //企业会员产品&服务
    prodsuccess (res) {
      this.aggregate.prodFile = res.type
      this.prodFilename = ''
    },
    //企业会员技术研发计划
    techsuccess (res) {
      this.aggregate.techFile = res.type
      this.techFilename = ''
    },
    //企业会员市场扩展计划
    marketsuccess (res) {
      this.aggregate.marketFile = res.type
      this.marketFilename = ''
    },
    //企业会员人才引进
    talensuccess (res) {
      this.aggregate.talentFile = res.type
      this.talentFilename = ''
    },
    // 提交
    updateSubmit (role, step) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      let parameter = {};
      if (role == 2) {
        this.aggregate.indivId = user.roleId;
        switch (step) {
          case 1:
            parameter = this.certainFunction(this.aggregate, [
              "actualName",
              "nickname",
              "phoneNo",
              "emailAdd",
              "idNo",
              "contactAdd",
              "wechatNo",
              "qqNo",
              "microblogNo",
              "associatedCo",
              "postName",
              "corpPost",
              "indivId",
            ])
            updateIndivInfo(parameter, user.roleId).then(res => {
              if (res.data.code == 200) {
                this.$message.success("修改成功!");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 2:
            parameter = this.certainFunction(this.aggregate, [
              "custIndivResourceList",
            ])
            for (let i in parameter) {
              for (let j in parameter[i]) {
                parameter[i][j].indivId = user.roleId
              }
            }
            updateIndivResource(parameter.custIndivResourceList, user.roleId).then(res => {
              if (res.data.code == 200) {
                this.$message.success("修改保存成功！");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;

          default:
            this.$notify({
              title: '操作失败',
              message: '您登录信息已失效，请重新登录后重试！',
              type: 'error',
              position: 'top-left'
            });
            break;
        }
      }else if (role == 1) {
        this.aggregate.splrId = user.roleId;
        switch (step) {
          case 1:
            if(this.aggregate.subArea1==null){
              this.aggregate.subArea = null
            }else if(this.aggregate.subArea2==null){
              this.aggregate.subArea = this.aggregate.subArea1;
            }else{
              this.aggregate.subArea = this.aggregate.subArea1 + " " + this.aggregate.subArea2;
            }
            parameter = this.certainFunction(this.aggregate, [
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
            updateSplrInfo(parameter,user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 2:
            parameter = this.certainFunction(this.aggregate, [
              "custSplrShareholderList",
              "custSplrDirectorList",
              "custSplrManageList",
            ])
            updateSplrMainManage(parameter, user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 3:
            parameter = this.certainFunction(this.aggregate, [
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
              "corpOrganization"
            ])
            let custSplrQulificationList = this.certainFunction(this.aggregate, [
              "custSplrQulificationList",
            ])
            let custSplrIprList = this.certainFunction(this.aggregate, [
              "custSplrIprList",
            ])
            let custSplrSkeletonList = this.certainFunction(this.aggregate, [
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
              'custSplr': parameter,
              'custSplrQulificationList': custSplrQulificationList.custSplrQulificationList,
              'custSplrIprList': custSplrIprList.custSplrIprList,
              'custSplrSkeletonList': custSplrSkeletonList.custSplrSkeletonList
            };
            updateSplrMainInfo(splrMainInfoDTO, user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 4:
            this.aggregate.income3years = this.income + "," + this.income2 + "," + this.income3;
            this.aggregate.profit3years = this.profit + "," + this.profit2 + "," + this.profit3;
            parameter = this.certainFunction(this.aggregate, [
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
            let custSplrVal = this.certainFunction(this.aggregate, [
              "splrId",
              "businessVolume",
              "advantage",
              "mainBusiness",
              "custSplrProdList",
            ])
            let custSplrProdListVal = this.certainFunction(this.aggregate, [
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
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 6:
            let custSplrCaseListVal = this.certainFunction(this.aggregate, [
              "custSplrCaseList"
            ])
            for (let i = 0; i < custSplrCaseListVal.custSplrCaseList.length; i++) {
              custSplrCaseListVal.custSplrCaseList[i].splrId = user.roleId
            }
            updateSplrServiceInfo(custSplrCaseListVal.custSplrCaseList, user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          default:
            break;
        }
      } else if (role == 0) {
        this.aggregate.corpId = user.roleId;
        switch (step) {
          case 1:
            if(this.aggregate.subArea1==null){
              this.aggregate.subArea = null
            }else if(this.aggregate.subArea2==null){
              this.aggregate.subArea = this.aggregate.subArea1;
            }else{
              this.aggregate.subArea = this.aggregate.subArea1 + " " + this.aggregate.subArea2 + " " + this.aggregate.subArea3;
            }
            parameter = this.certainFunction(this.aggregate, [
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
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 2:
            parameter = this.certainFunction(this.aggregate, [
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
            parameter = this.certainFunction(this.aggregate, [
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
              "corpScale",
              "corpOrganization"
            ])
            let custCorpIprList = this.certainFunction(this.aggregate, [
              "custCorpIprList",
            ])
            for (let i = 0; i < custCorpIprList.custCorpIprList.length; i++) {
              custCorpIprList.custCorpIprList[i].splrId = user.roleId
            }
            let corpMainInfoDTO = {
              'custCorp': parameter,
              'custCorpIprList': custCorpIprList.custCorpIprList
            }
            updateCorpMainInfo(corpMainInfoDTO, user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              } else {
                this.$notify({
                  title: '操作失败',
                  message: '您登录信息已失效，请重新登录后重试！',
                  type: 'error',
                  position: 'top-left'
                });
              }
            })
            break;
          case 4:
            this.aggregate.income3years = this.income + "," + this.income2 + "," + this.income3;
            this.aggregate.profit3years = this.profit + "," + this.profit2 + "," + this.profit3;
            parameter = this.certainFunction(this.aggregate, [
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
            parameter = this.certainFunction(this.aggregate, [
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
              "commerceFile"
            ])
            updateCorpInfo(parameter, user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              }
            })
            break;
          case 6:
            parameter = this.certainFunction(this.aggregate, [
              "strategyTarget",
              "strategyTarget2",
              "strategyTarget3",
              "prodPlan",
              "techPlan",
              "marketPlan",
              "talentPlan",
              "corpId",
              "strategyFile",
              "prodFile",
              "techFile",
              "marketFile",
              "talentFile",
            ])
            updateCorpInfo(parameter, user.roleId).then(res => {
              if (res.data.code === 200) {
                this.$message.success("修改保存成功！");
              }
            })
            break;
          default:
            this.$notify({
              title: '操作失败',
              message: '您登录信息已失效，请重新登录后重试！',
              type: 'error',
              position: 'top-left'
            });
            break;
        }
      }
    },
    // 删除
    removeRow (arr, index) {
      arr.splice(index, 1);
    },
    // 个人会员编辑或者新增
    updateRow (arr, index) {
      this.drawer = true;
      if (index === '') {
        arr.push({
          resourceType: '',
          resourceLevel: '',
          levelStandard: '',
          resourceDesc: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 教育经历新增
    updateeducation (arr, index) {
      this.drawereducation = true;
      if (index === '') {
        arr.push({
          name: '',
          time: '',
          pro: '',
          tongZhao: '',
          xueli: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 培训经历新增
    updateTrain (arr, index) {
      this.drawerTrain = true;
      if (index === '') {
        arr.push({
          name: '',
          curriculum: '',
          time: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 专业能力新增
    updatePower (arr, index) {
      this.drawerPower = true;
      if (index === '') {
        arr.push({
          name1: '',
          name2: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 工作经验新增
    updateExperience (arr, index) {
      this.drawerExperience = true;
      if (index === '') {
        arr.push({
          name: '',
          type: '',
          number: '',
          stage: '',
          industry: '',
          position: '',
          time: '',
          work: '',
          achievement: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 项目经验新增
    updatePro (arr, index) {
      this.drawerPro = true;
      if (index === '') {
        arr.push({
          name: '',
          type: '',
          number: '',
          stage: '',
          industry: '',
          demand: '',
          proName: '',
          proType: '',
          proOther: '',
          proAllPrice: '',
          time: '',
          post: '',
          work: '',
          achievement: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 资质证书
    updateQualifications (arr, index) {
      this.drawerQualifications = true;
      if (index === '') {
        arr.push({
          name1: '',
          name2: '',
          time: '',
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    //企业会员股东新增
    updateShareholders (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerShareholders = true;
      if (index === '') {
        arr.push({
          shareholder: '',
          shareholdRatio: '',
          admitPay: '',
          admitDate: '',
          actualPay: '',
          corpId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 服务供应商新增
    updateShareholder (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawer = true;
      if (index === '') {
        arr.push({
          shareholder: "",
          shareholdRatio: "",
          admitPay: "",
          admitDate: "",
          actualPay: "",
          splrId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    //企业会员董监高新增
    updateDirectors (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerDirectors = true;
      if (index === '') {
        arr.push({
          name: "",
          post: "",
          phone: "",
          corpId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 新增董监高
    updateDirector (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerDirector = true;
      if (index === '') {
        arr.push({
          name: "",
          post: "",
          phone: "",
          splrId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    //企业会员专利信息新增
    updateCorpIprs (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerCorpIprs = true;
      if (index === '') {
        arr.push({
          type: "",
          iprName: "",
          inventor: "",
          patentNo: "",
          patentDt: "",
          certificateNo: "",
          corpId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    //企业会员管理层新增
    updateManages (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerManages = true;
      if (index === '') {
        arr.push({
          name: '',
          department: '',
          post: '',
          phone: '',
          corpId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 新增管理层
    updateManage (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerManage = true;
      if (index === '') {
        arr.push({
          name: "",
          department: "",
          post: "",
          phone: "",
          splrId: user.roleId,
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 新增产品服务
    updateProd (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerProd = true;
      if (index === '') {
        arr.push({
          prodserName: "",
          prodserIntro: "",
          mainEffect: "",
          applicationScope: "",
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 典型服务案例
    updateResource (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerResource = true;
      if (index === '') {
        arr.push({
          custSplrCaseList: ""
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
        for (var i = 0; i < this.firstClassMenu.length; i++) {
          if (this.firstClassMenu[i].itemName == this.arrContent.businessType) {
            // dictItemId
            getBusinessTowList({ "itemId": this.firstClassMenu[i].dictItemId }).then(res => {
              if (res.data.code === 200) {
                this.secedClassMenu = res.data.data
              }
            });
          }
        }
      }
    },
    // 资质证书
    updateQulification (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerQulification = true;
      if (index === '') {
        arr.push({
          qualName: "",
          qualLevel: "",
          qualfiId: ""
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 新增知识产权
    updateIpr (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerIpr = true;
      if (index === '') {
        arr.push({
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
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 业务骨干
    updateSkeleton (arr, index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.drawerSkeleton = true;
      if (index === '') {
        arr.push({
          name: "",
          department: "",
          post: "",
          resume: "",
          fucosIndustry: "",
          specialtyField: "",
          fucosIndustry: ""
        });
        this.arrContent = arr[arr.length - 1];
      } else {
        this.arrContent = arr[index];
      }
    },
    // 编辑或者新增的退出
    handleClose (done) {
      this.$confirm('是否确认退出？')
        .then(_ => {
          done();
          this.mountedInfo();
        })
        .catch(_ => { });
    },
    // 获取一级资源
    primaryResourcesFun () {
      resources().then(res => {
        if (res.data.code === 200) {
          this.primaryResources = res.data.data
        }
      });
    },
    getBusinessList () {
      getBusinessList().then(res => {
        if (res.data.code === 200) {
          this.firstClassMenu = res.data.data
        }
      });
    },
    // 根据选择的一级资源获取二级
    changeResourceType (val) {
      // 匹配选择的项的中文名称
      for (var i in this.primaryResources) {
        if (this.primaryResources[i].dictItemId == val) {
          this.arrContent.resourceType = this.primaryResources[i].itemName
        }
      }
      resourcesEr({ "dictItemId": val }).then(res => {
        if (res.data.code === 200) {
          this.twoTierResources = res.data.data
          this.twoTierResourcesVal = val;
        }
      });
    },
    // 根据二级资源自动获取三级
    changeResourceLevel (val) {
      for (var i in this.twoTierResources) {
        if (this.twoTierResources[i].itemCode == val) {
          this.arrContent.resourceLevel = this.twoTierResources[i].itemName
        }
      }
      resourcesEr({ "dictItemId": this.twoTierResourcesVal, "itemCode": val }).then(res => {
        if (res.data.code === 200) {
          this.arrContent.levelStandard = res.data.data[0].itemValue1;
        }
      });
    },
    // 新增或者编辑的取消
    onePersonCansel () {
      this.drawer = false;
      this.drawerShareholders = false;
      this.drawerManages = false;
      this.drawerDirectors = false;
      this.drawerDirector = false;
      this.drawerCorpIprs = false;
      this.drawerManage = false;
      this.drawerProd = false;
      this.drawerResource = false;
      this.drawerQulification = false;
      this.drawerIpr = false;
      this.drawerSkeleton = false;
      this.drawereducation = false;
      this.drawerTrain = false;
      this.drawerPower = false;
      this.drawerQualifications = false;
      this.drawerExperience = false;
      this.drawerPro = false;
      this.mountedInfo();
    },
    // 新增或者编辑的保存
    onePersonPreservation () {
      this.drawer = false;
      this.drawerShareholders = false;
      this.drawerManages = false;
      this.drawerDirector = false;
      this.drawerDirectors = false;
      this.drawerProd = false;
      this.drawerCorpIprs = false;
      this.drawerResource = false;
      this.drawerQulification = false;
      this.drawerIpr = false;
      this.drawerSkeleton = false;
      this.drawereducation = false;
      this.drawerTrain = false;
      this.drawerPower = false;
      this.drawerQualifications = false;
      this.drawerExperience = false;
      this.drawerPro = false;
    },
    // 验证
    blurInput (e, index, content) {
      let reg = ""
      switch (e, index) {
        // 验证电话
        case 1:
          reg = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
          if (reg.test(content)) {
            e.target.nextElementSibling.style.opacity = "0"
          } else {
            e.target.nextElementSibling.style.opacity = "1"
          }
          break;
        // 验证邮箱
        case 2:
          reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          if (reg.test(content)) {
            e.target.nextElementSibling.style.opacity = "0"
          } else {
            e.target.nextElementSibling.style.opacity = "1"
          }
          break;
        // 验证身份证
        case 3:
          reg = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;
          if (reg.test(content)) {
            e.target.nextElementSibling.style.opacity = "0"
          } else {
            e.target.nextElementSibling.style.opacity = "1"
          }
          break;

        default:
          break;
      }
    },
    // 上传头像
    cropSuccess (imgDataUrl) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      changeAvatar({ "avatar": imgDataUrl, "userId": user.userId }).then(res => {
        if (res.data.code == 200) {
          this.$confirm(res.data.msg);
          this.mountedInfo();
        }
      })
    },
    // 请求行业2 用于初始化页面时，可以选择直接选择二级
    htListChildren () {
      let val = ""
      for (var i = 0; i < this.industryA.length; i++) {
        if (this.industryA[i].itemName == this.aggregate.subIndustry) {
          val = this.industryA[i].dictItemId
          htListChildren({ "itemId": val }).then(res => {
            if (res.data.code === 200) {
              this.industryB = res.data.data
            }
          })
        }
      }
    },
    // 选择行业1
    elSelectChangeEventA (val) {
      this.aggregate.industryDetail = "";
      let itemval = "";
      for (let j in this.industryA) {
        if (val.target.value == this.industryA[j].itemName) {
          this.itemval = this.industryA[j].dictItemId
        }
      }
      htListChildren({ "itemId": this.itemval }).then(res => {
        if (res.data.code === 200) {
          this.industryB = res.data.data
          for (var i = 0; i < this.industryA.length; i++) {
            if (this.industryA[i].dictItemId == this.itemval) {
              this.aggregate.subIndustry = this.industryA[i].itemName
            }
          }
        }
      })
    },
    // 选择行业2
    elSelectChangeEventB (val) {
      for (var i = 0; i < this.industryB.length; i++) {
        if (this.industryB[i].dictItemId == val) {
          this.aggregate.industryDetail = this.industryB[i].itemName
        }
      }
    },
    // 请求地区2 用于初始化页面时 可以直接选择二级
    getCity2 () {
      let val = ""
      for (var i = 0; i < this.cityA.length; i++) {
        if (this.cityA[i].itemName == this.aggregate.subArea1) {
          val = this.cityA[i].dictItemId
          getCity2({ "itemId": val }).then(res => {
            if (res.data.code === 200) {
              this.cityB = res.data.data
              this.getCity3();
            }
          })
        }
      }
    },
    // 请求城市 用于初始化页面时 可以直接选择三级
    getCity3 () {
      let val = ""
      for (var i = 0; i < this.cityB.length; i++) {
        if (this.cityB[i].itemName == this.aggregate.subArea2) {
          val = this.cityB[i].dictItemId
          getCity3({ "itemId": val }).then(res => {
            if (res.data.code === 200) {
              this.cityC = res.data.data
            }
          })
        }
      }
    },
    // 所属区域一级
    elSelectChangeCityAEvent (val) {
      this.aggregate.subArea2 = ''
      this.aggregate.subArea3 = ''
      let itemval = "";
      for (let j in this.cityA) {
        if (val.target.value == this.cityA[j].itemName) {
          this.itemval = this.cityA[j].dictItemId
        }
      }
      getCity2({ "itemId": this.itemval }).then(res => {
        if (res.data.code === 200) {
          this.cityB = res.data.data
          for (var i = 0; i < this.cityA.length; i++) {
            if (this.cityA[i].dictItemId == this.itemval) {
              this.aggregate.subArea1 = this.cityA[i].itemName
            }
          }
        }
      })
    },
    // 所属区域二级
    elSelectChangeCityBEvent (val) {
      this.aggregate.subArea3 = ''
      let itemval = "";
      for (let j in this.cityB) {
        if (val.target.value == this.cityB[j].itemName) {
          this.itemval = this.cityB[j].dictItemId
        }
      }
      getCity3({ "itemId": this.itemval }).then(res => {
        if (res.data.code === 200) {
          this.cityC = res.data.data
          for (var i = 0; i < this.cityB.length; i++) {
            if (this.cityB[i].dictItemId == this.itemval) {
              this.aggregate.subArea2 = this.cityB[i].itemName

            }
          }
        }
      })
    },
    // 所属区域三级
    elSelectChangeCityCEvent (val) {
      for (var i = 0; i < this.cityC.length; i++) {
        if (this.cityC[i].dictItemId == this.itemval) {
          this.aggregate.subArea3 = this.cityC[i].itemName
        }
      }
    },
    // 供应商LOGO
    getFile2 (file, fileList) {
      this.getBase64(file.raw).then(res => {
        this.aggregate.logo = res;
      });
    },
    // 供应商上传LOGO
    beforeAvatarFileUpload: function (file) {
      //限制的上限为10M
      const isLt10M = file.size / 1024 / 1024 < 1.5;
      if (!isLt10M) {
        this.$confirm('上传文件大小不能超过 1.5MB!');
      }
      return isLt10M;
    },
    // 典型案例中一级
    changeFirstClassMenu (val) {
      getBusinessTowList({ "itemId": val }).then(res => {
        if (res.data.code === 200) {
          this.secedClassMenu = res.data.data
          for (var i = 0; i < this.firstClassMenu.length; i++) {
            if (this.firstClassMenu[i].dictItemId == val) {
              this.arrContent.businessType = this.firstClassMenu[i].itemName
            }
          }
        }
      });
    },
    // 典型案例二级
    changeSecendClassMenu () {
      for (var i = 0; i < this.secedClassMenu.length; i++) {
        if (this.secedClassMenu[i].dictItemId == val) {
          this.arrContent.businessDetail = this.secedClassMenu[i].itemName
        }
      }
    },
    // 典型案例额外一级
    elSelectChangeEventDXAL (val) {
      for (var i = 0; i < this.industryA.length; i++) {
        if (this.industryA[i].dictItemId == val) {
          this.arrContent.industry = this.industryA[i].itemName
        }
      }
    },
  }
}
</script>
<style scope>
input::-webkit-inner-spin-button, /*date默认样式 */
input::-webkit-clear-button {
  display: none;
}
input::-webkit-calendar-picker-indicator {
  margin-right: 10px;
  width: 25px;
  height: 15px;
}
input {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #c0c4cc;
}
select {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #c0c4cc;
}
td input {
  text-align: center;
  border: #fff;
  background: #fff;
}
select {
  outline: none;
  color: #c0c4cc;
}
textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px #c0c4cc solid;
  resize: none;
  color: #c0c4cc;
}
textarea::-webkit-scrollbar {
  width: 10px;
}
/* 滚动槽 */
textarea::-webkit-scrollbar-track {
  border-radius: 8px;
}
/* 滚动条滑块 */
textarea::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 8px 0 0 #e4e7ed inset;
}
.improve_registration_information {
  width: 84%;
  margin: 0 auto !important;
  padding: 32px 12px !important;
}
.improve_registration_information_a {
  color: #9e0100;
  font-weight: bolder;
}
.improve_registration_information_a:before {
  content: "<";
  margin-right: 8px;
}
.improve_registration_information_div {
  margin-top: 24px;
  background: #fafafa;
  padding: 16px;
  display: flex;
  justify-content: space-around;
}
.improve_registration_information_left {
  width: 20%;
  min-width: 200px;
  border: 1px solid #fafafa;
  background-color: #fff;
}
.improve_registration_information_right {
  width: 68%;
  min-width: 560px;
  border: 1px solid #fafafa;
  background-color: #fff;
  padding: 0 0 24px 0;
}
.improve_registration_information_left > ul {
  padding: 8px 0;
}
.improve_registration_information_left > ul > li {
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  border-right: 3px solid #fff;
}
.improve_registration_information_left > ul > li:hover,
.improve_registration_information_left > ul > .active {
  background: #fcc6c6;
  color: #9e0100;
}
.improve_registration_information_left > ul > li:hover{
  border-right: 3px solid #fcc6c6;
}
.improve_registration_information_left > ul > .active {
  border-right: 3px solid #9e0100 !important;
}
.improve_registration_information_rightContent {
  padding: 0 0 0 16px;
}
.improve_registration_information_rightContent > p {
  font-size: 18px;
  padding: 16px 0;
}
.improve_registration_information_uploadImg {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.improve_registration_information_img {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.improve_registration_information_imgBorder{
  border: 1px solid #999;
}
.improve_registration_information_img > img {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}
.improve_registration_information_img + button {
  border: 1px solid #999;
  background: #fff;
  width: 120px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}
.improve_registration_information_img + button > img {
  margin-right: 4px;
}
.improve_registration_information_rightContentAll {
  width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
}
.improve_registration_information_rightContentAll_input,.improve_registration_information_rightContentAll_inputSF{
  width: calc(100% / 3);
  min-width: 270px;
  /* margin: 0 30px; */
  padding: 0 30px;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.improve_registration_information_rightContentAll_input textarea{
  border-radius: 0;
}
.improve_registration_information_rightContentAll_inputSF{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0;
}
.improve_registration_information_rightContentAll_inputSF p{
  white-space: nowrap;
}
.improve_registration_information_rightContentAll_inputSF div{
  margin-left: 0.5rem;
}
/* .improve_registration_information_rightContentAll_inputSF /deep/ .is-checked .el-radio__inner{
  background-color: red;
  border-color: red;
}
.improve_registration_information_rightContentAll_inputSF /deep/ .is-checked+.el-radio__label{
  color: red;
} */
.improve_registration_information_rightContentAll_input_AllHang{
  width:100%;
}
.improve_registration_information_rightContentAll_input p {
  margin-bottom: 10px;
}
.improve_registration_information_rightContentAll_input /deep/ .el-textarea__inner{
  border-radius: 0;
}
.improve_registration_information_rightContentAll_input /deep/ .el-textarea__inner:focus{
  border-color: red;
} 
.improve_registration_information_rightContentAll_input_select {
  width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
}
.improve_registration_information_rightContentAll_input_row {
  width: 100%;
  margin-left: 30px;
  margin-bottom: 8px;
}
.improve_registration_information_rightContentAll_input_row > p {
  line-height: 30px;
}
.improve_registration_information_rightContentAll_input_row > textarea {
  padding: 10px;
  line-height: 30px;
  font-size: 14px;
  width: 96%;
  border-radius: 0;
}
.improve_registration_information_rightContentAll_input_selectare {
  width: 100%;
  margin-bottom: 40px;
}
.improve_registration_information_rightContentAll_input_selectare > p {
  margin: 0 0 20px 30px;
}
.improve_registration_information_rightContentAll_input_select > select {
  width: 28.5%;
  height: 36px;
  padding-left: 8px;
  margin-right: 60px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #666;
}
.improve_registration_information_rightContentAll_input_select
  > select:last-child {
  margin-right: 0;
}
.improve_registration_information_rightContentAll_input > p,
.improve_registration_information_rightContentAll_input_select > p {
  /* line-height: 30px; */
}
.improve_registration_information_rightContentAll_input textarea {
  width: 100%;
  box-sizing: border-box;
}
.zlmbResources textarea {
  width: 94%;
  box-sizing: border-box;
  border-radius: 0;
}
.zlmbResources tr td {
  width: 10%;
}
.improve_registration_information_rightContentAll_input > select{
  cursor: pointer;
}
.improve_registration_information_rightContentAll_input > input,
.improve_registration_information_rightContentAll_input > select {
  width: 100%;
  height: 36px;
  padding-left: 8px;
  box-sizing: border-box;
  border: 1px solid #c0c4cc;
  outline: none;
}
.improve_registration_information_rightContentAll_input_row .incomeInput {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.improve_registration_information_rightContentAll_input_row input {
  width: 30%;
  height: 36px;
  padding-left: 8px;
  margin: 4px 0;
  box-sizing: border-box;
  border: 1px solid #c0c4cc;
  outline: none;
}
.improve_registration_information_rightContentAll_input > input {
  margin: 4px 0;
}
.improve_registration_information_rightContentAll_input > input:focus,
.improve_registration_information_rightContentAll_input > select:focus,
.improve_registration_information_rightContentAll_input_row input:focus,
.improve_registration_information_rightContentAll_input_select select:focus {
  border-color: red;
}
.improve_registration_information_rightContentAll_input > p:not(:first-child) {
  color: red;
}
.imgUpload {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin: 30px 20px;
}
.imgUpload img {
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}
.personalResources {
  width: 100%;
}
.personalResources tr {
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #999;
}
.personalResources tr:first-child {
  background: #f2f2f2;
  font-weight: bold;
}
.personalResources td {
  width: 150px;
  text-align: center;
  font-size: 14px
}
.personalResourcesTS td{
  width: calc(100%/6);
}
.personalResources td > select {
  width: 140px;
  height: 36px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
}
.personalResources td > button,
.gdResources td > button {
  box-sizing: border-box;
  border-radius: 6px;
  height: 36px;
  line-height: 36px;
  padding: 0 8px;
  background: #9e0100;
  color: #fff;
  border: 0;
}
.personalResources td > button + button,
.gdResources td > button + button {
  margin-left: 10px;
}
.gdResources,
.qyResources,
.zlResources,
.ywggResources {
  width: 100%;
}
.zlResources td > select {
  height: 36px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
}
.gdResources tr {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  height: 36px;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #999;
}

.gdResources tr:first-child {
  background: #f2f2f2;
}
.gdResources td {
  width: 16%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gdResources td > button,
.zlResources td > button,
.ywggResources td > button {
  box-sizing: border-box;
  border-radius: 6px;
  height: 36px;
  padding: 0 15px;
  background: #9e0100;
  color: #fff;
}
.newbtn {
  box-sizing: border-box;
  border-radius: 6px;
  height: 36px;
  padding: 0 15px;
  background: #9e0100;
  color: #fff;
}
.zlResources tr {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  height: 36px;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #999;
}
.zlResources tr:first-child {
  background: #f2f2f2;
}
.zlResources td {
  width: 13%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zlResources td input {
  height: 36px;
  width: 100%;
  padding-left: 8px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fff;
  border: 0px solid #e4e7ed;
}
.zlResources td > button {
  box-sizing: border-box;
  border-radius: 6px;
  height: 36px;
  padding: 0 15px;
  background: #9e0100;
  color: #fff;
  border: 1px solid #9e0100;
}
.zlResources td > button + button {
  margin-left: 10px;
}
.ywggResources tr {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  height: 36px;
  display: flex;
  padding: 10px 0;
}
.ywggResources tr:first-child {
  background: #f2f2f2;
}
.ywggResources td {
  width: 12%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ywggResources td input,
.gdResources td input {
  height: 36px;
  width: 80%;
  padding-left: 8px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fff;
  border: 0px solid #e4e7ed;
}
.ywggResources td > button {
  box-sizing: border-box;
  border-radius: 6px;
  height: 36px;
  padding: 0 15px;
  background: #9e0100;
  color: #fff;
  border: 1px solid #9e0100;
}
.ywggResources td > button + button {
  margin-left: 4px;
}
.submitParent {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.submits > button {
  padding: 4px 10px;
  margin: 0 8px;
  font-size: 16px;
  border: 1px solid #999;
  cursor: pointer;
}
.cancel {
  background-color: #fff;
}
.infosubmit {
  background-color: #9e0100;
  color: #fff;
}
.titleOfPersonDetails {
  margin: 20px 0;
  font-weight: bold;
}
.titleOfPersonDetailsTwo{
  font-size: 14px;
  padding-left: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #999;
  margin-bottom: 1rem;
}
.addItemParent {
  width: 96%;
  height: 36px;
  margin: 16px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #999;
  border-radius: 6px;
}
.addItemParent > span {
  color: #666;
  cursor: pointer;
}
.beforeP {
  position: relative;
}
.beforeP:before {
  content: "*";
  color: red;
  margin-right: 4px;
  position: relative;
  top: 4px;
}
.tdOfDelete {
  border: 1px solid #9e0100;
}
.arrContentAllParent {
  /* width: 400px;
  margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.arrContentAllParent > select {
  width: 300px;
  height: 40px;
  padding: 0 15px;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  outline: none;
}
.arrContentAllParent > span {
  width: 120px;
  margin-right: 16px;
  text-align: right;
  /* white-space: nowrap; */
}
.arrContentAllParent + br{
  display: none;
}
.personTitle {
  width: 100%;
  margin: 10px 0;
  padding: 10px 0 10px 20px;
  border-bottom: #e9e9e9 solid 1px;
}
.personTitle p {
  font-weight: bold;
}
.uploadFile {
  margin: 20px 0;
}
.uploadFile el-upload {
  margin: 10px 0;
}
.uploadFile /deep/ .el-button{
  margin: 0;
}
.uploadicon {
  line-height: 30px;
  color: #909399;
}
.uploadicon::before {
  font-size: 30px;
}
.importTitle::before {
  content: " * ";
  color: red;
}
@media screen and (max-width: 1366px) {
  .zlmbResources textarea {
    border: 2px solid #c0c4cc;
  }
  .improve_registration_information_rightContentAll_input_selectd {
    border: 2px solid #c0c4cc !important;
  }
}
</style>
<!-- 领出来单独修改element-ui中drawer样式 -->
<style>
@media screen and (max-width: 1366px) {
  .ywggResources td input,
  .gdResources td input,
  .zlResources td input {
    height: 50px;
  }
  .ywggResources tr,
  .gdResources tr,
  .zlResources tr {
    height: 50px;
  }
  .improve_registration_information .el-input {
    border: 0px solid #e4e7ed;
    border-radius: 6px;
  }
  .gdResources .el-input.is-disabled .el-input__inner,
  .zlResources .el-input.is-disabled .el-input__inner {
    width: 100% !important;
    background-color: #fff;
  }
  .improve_registration_information_rightContentAll_input input,
  .improve_registration_information_rightContentAll_input_row input,
  .improve_registration_information_rightContentAll_input > select {
    height: 50px;
  }
  .improve_registration_information_rightContentAll_input_select > select {
    height: 50px;
  }
}
.gdResources .el-input.is-disabled .el-input__inner,
.zlResources .el-input.is-disabled .el-input__inner {
  width: 100% !important;
  background-color: #fff;
}
.el-drawer {
  width: 500px !important;
  height: 60% !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;
}
.el-drawer.btt{
  bottom: auto !important;
}
.el-drawer__container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dialog__wrapper{
  /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
  -ms-overflow-style:none;
  /*火狐下隐藏滚动条*/
  overflow:-moz-scrollbars-none;
}
.el-dialog__wrapper::-webkit-scrollbar{
    display:none;
}
.arrContentAllParent .el-select,
.arrContentAllParent .el-input,
.arrContentAllParent .el-input__inner,
.arrContentAllParent .el-textarea {
  min-width: 300px;
  width: 100% !important;
}
.preservationParent {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #999;
  margin: 40px 0;
}
.preservationParent > div {
  width: 400px;
  display: flex;
  flex-direction: row-reverse;
}
.preservationParent .el-button {
  margin: 0 12px;
  margin-top: 20px;
  padding: 8px 20px;
}
.preservationParent .cancel {
  background: none;
  color: #000;
  border-color: #999;
}
.preservationParent .infosubmit {
  background: #9e0100;
  color: #fff;
  border-color: #999;
}
.opacity0 {
  /* opacity: 0; */
  display: none;
}
.datePickerDate {
  width: 270px !important;
}
.datePickerDate > input {
  height: 36px;
  border: 1px solid #666;
  color: #000;
}
.datePickerDate > input:focus {
  border-color: red;
}
.improve_registration_information_rightContentAll_input_select > .el-select {
  width: 270px !important;
}
.improve_registration_information_rightContentAll_input_select
  > .el-select
  .el-input__inner {
  width: 100%;
}
.improve_registration_information_rightContentAll_input_select
  > .el-select
  .el-input__inner {
  height: 36px;
  border-color: #666;
  color: #000;
}
.improve_registration_information_rightContentAll_input_select
  > .el-select
  .el-input__inner:focus {
  border-color: red;
}
.improve_registration_information_rightContentAll_input_select
  > .el-select
  + .el-select {
  margin-left: 30px;
}
.el-button--primary {
  background: #9e0100 !important;
  color: #fff;
  border: 1px solid #9e0100 !important;
}
.el-button--primary:hover {
  background: #9e0100;
  color: #fff;
  border: 1px solid #9e0100;
}
.el-input__inner:focus {
  border-color: #9e0100;
}
.zlResources_input .el-date-editor.el-input,
.zlResources_input .el-date-editor.el-input__inner {
  width: auto;
}
.zlResources .el-input__icon {
  line-height: 190%;
}
.el-drawer__body {
  height: auto;
  overflow-y: scroll;
}
/* 设置滚动条的样式 */
.el-drawer__body::-webkit-scrollbar {
  width: 10px;
}
/* 滚动槽 */
.el-drawer__body::-webkit-scrollbar-track {
  border-radius: 8px;
}
/* 滚动条滑块 */
.el-drawer__body::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 8px 0 0 #666 inset;
}
.improve_registration_information .el-upload-list--text {
  width: 330px;
}
.improve_registration_information .el-upload--text {
  height: 45px;
}
.improve_registration_information_rightContentAll_input /deep/ .el-input__inner{
  border-radius: 0px !important;
}
.improve_registration_information_rightContentAll_input /deep/ .el-select .el-input.is-focus .el-input__inner,.improve_registration_information_rightContentAll_input /deep/ .el-select .el-input__inner:focus{
  border-color: #9e0100;
}
/deep/ .selected{
  color: #9e0100 !important;
}
.border1{
  border: 1px solid rgb(189, 189, 189);
}
</style>
