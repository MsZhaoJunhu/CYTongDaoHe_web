<template>
    <el-row type="flex" class="perfect-user-info" justify="center" :gutter="40">
      <el-col :sm="7" :md="6" :lg="5" :xl="4">
        <div class="grid-content bg-purple">
          <ul class="right-ul">
            <li>
              <a href="javascript:;">返回个人中心</a>
            </li>
            <template v-if="role=='2'">
              <li @click="step=1" :class="step=='1'?'li-active':''">
                <span>基本信息</span>
              </li>
              <li @click="step=2" :class="step=='2'?'li-active':''">
                <span>人才信息</span>
              </li>
            </template>
            <template v-if="role=='0'">
              <li>
                <span>工商信息</span>
              </li>
              <li>
                <span>治理结构</span>
              </li>
              <li>
                <span>企业信息</span>
              </li>
              <li>
                <span>经营情况</span>
              </li>
              <li>
                <span>业务情况</span>
              </li>
              <li>
                <span>发展规划</span>
              </li>
            </template>
          </ul>
        </div>
      </el-col>
      <el-col :sm="15" :md="14" :lg="13" :xl="12">
        <div class="grid-content bg-purple-light">
          <div class="left-div-par">
            <!-- 个人会员 -->
            <template v-if="role=='2'">
              <div v-show="step==1">
                <p>个人头像</p>
                <div class="head-portrait-par">
                  <div class="head-portrait-img">
                    <img :src="avatar">
                    <my-upload field="img" @crop-success="cropSuccess" v-model="show" :width="200" :height="200" img-format="png" :size="size"></my-upload>
                  </div>
                  <button @click="show=true" class="update-img-button">
                    <img src="../../../assets/icon/upload.png">
                    <span>上传头像</span>
                  </button>
                </div>
                <p>个人信息</p>
                <div class="fixed-div-par">
                  <div class="fixed-div">
                    <p>姓名</p>
                    <el-input v-model="aggregate.actualName" placeholder="请输入名字"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>电话号码</p>
                    <el-input v-model="aggregate.phoneNo" placeholder="请输入电话号码"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>昵称</p>
                    <el-input v-model="aggregate.nickname" placeholder="请输入昵称"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>邮箱地址</p>
                    <el-input v-model="aggregate.emailAdd" placeholder="请输入邮箱地址"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>身份证号</p>
                    <el-input v-model="aggregate.idNo" placeholder="请输入身份证号"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>联系地址</p>
                    <el-input v-model="aggregate.contactAdd" placeholder="请输入联系地址"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>微信号</p>
                    <el-input v-model="aggregate.wechatNo" placeholder="请输入微信号"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>QQ号</p>
                    <el-input v-model="aggregate.qqNo" placeholder="请输入QQ号"></el-input>
                  </div>
                </div>
                <p>关联公司信息</p>
                <div class="fixed-div-par">
                  <div class="fixed-div">
                    <p>公司名称</p>
                    <el-input v-model="aggregate.associatedCo" placeholder="请输入公司名称"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>岗位名称</p>
                    <el-input v-model="aggregate.postName" placeholder="请输入岗位名称"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>职务</p>
                    <el-select v-model="aggregate.corpPost" placeholder="请选择职务">
                      <el-option label="实际控制人" value="实际控制人"></el-option>
                      <el-option label="董事长" value="董事长"></el-option>
                      <el-option label="董事" value="董事"></el-option>
                      <el-option label="监事" value="监事"></el-option>
                      <el-option label="高管" value="高管"></el-option>
                      <el-option label="基干" value="基干"></el-option>
                      <el-option label="员工" value="员工"></el-option>
                    </el-select>
                  </div>
                </div>
                <p>个人资源</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>资源类型</td>
                    <td>资源等级</td>
                    <td>资源标准</td>
                    <td>资源描述</td>
                    <td>操作</td>
                  </tr>
                  <tr class="table-td-5" v-for="(item,index) in aggregate.custIndivResourceList" :key="index">
                    <td>
                      <el-input v-model="item.resourceType" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.resourceLevel" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.levelStandard" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.resourceDesc" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updatePersonalResources(aggregate.custIndivResourceList,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.custIndivResourceList,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="personalResources" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>资源类型</p>
                        <el-select v-model="item.resourceType" @change="changeResourceType" placeholder="请选择资源类型">
                          <el-option v-for="(item,index) in primaryResources" :key="index" :label="item.itemName" :value="item.dictItemId"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>资源等级</p>
                        <el-select v-model="item.resourceLevel" @change="changeResourceLevel" placeholder="请选择资源登记">
                          <el-option v-for="(item,index) in twoTierResources" :key="index" :label="item.itemName" :value="item.itemCode"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>资源标准</p>
                        <el-input v-model="item.levelStandard" placeholder="请选择资源等级" :disabled="true"></el-input>
                      </div>
                      <div>
                        <p>资源描述</p>
                        <el-input type="textarea" placeholder="请输入对资源的描述" v-model="item.resourceDesc"></el-input>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.custIndivResourceList)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updatePersonalResources(aggregate.custIndivResourceList,'')">新增</div>
              </div>
              <div v-show="step==2">
                <p>工作信息</p>
                <div class="fixed-div-par">
                  <div class="fixed-div">
                    <p>经营状态</p>
                    <el-select v-model="aggregate.corpPost" placeholder="请选择职务">
                      <el-option label="在职-咨询行业" value="在职-咨询行业"></el-option>
                      <el-option label="在职-其他行业" value="在职-其他行业"></el-option>
                      <el-option label="自由职业-咨询业务为主" value="自由职业-咨询业务为主"></el-option>
                      <el-option label="自由职业-其他业务为主" value="自由职业-其他业务为主"></el-option>
                      <el-option label="企业家-咨询行业" value="企业家-咨询行业"></el-option>
                      <el-option label="企业家-其他行业" value="企业家-其他行业"></el-option>
                      <el-option label="短期离职" value="短期离职"></el-option>
                      <el-option label="其他" value="其他"></el-option>
                    </el-select>
                  </div>
                  <div class="fixed-div">
                    <p>工作年限</p>
                    <el-input v-model="aggregate.phoneNo" placeholder="请输入工作年限"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>资讯年限</p>
                    <el-input v-model="aggregate.phoneNo" placeholder="请输入资讯年限"></el-input>
                  </div>
                </div>
                <div style="box-sizing: border-box; padding: 0 4rem;">
                  <p style="margin-bottom: 0.5rem;">工作描述</p>
                  <el-input type="textarea" placeholder="请输入对工作的描述" v-model="arrContent.resourceDesc"></el-input>
                </div>
                <p>个人经历</p>
                <p class="small-title">教育经历</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>学校名称</td>
                    <td>起止时间</td>
                    <td>所学专业</td>
                    <td>是否统招</td>
                    <td>学历</td>
                    <td>操作</td>
                  </tr>
                  <tr class="table-td-6" v-for="(item,index) in aggregate.educationExperience" :key="index">
                    <td>
                      <el-input v-model="item.name" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.time" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.pro" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.tongZhao" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.xueli" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updateEducation(aggregate.educationExperience,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.educationExperience,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="education" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>学校名称</p>
                        <el-input type="textarea" placeholder="请输入学校名称" v-model="item.name"></el-input>
                      </div>
                      <div>
                        <p>起止时间</p>
                        <el-date-picker
                          v-model="arrContent.time"
                          type="monthrange"
                          range-separator="至"
                          start-placeholder="开始月份"
                          end-placeholder="结束月份">
                        </el-date-picker>
                      </div>
                      <div>
                        <p>所学专业</p>
                        <el-input v-model="arrContent.pro" placeholder="请输入所学专业"></el-input>
                      </div>
                      <div>
                        <p>是否统招</p>
                        <el-radio v-model="arrContent.tongZhao" label="是">是</el-radio>
                        <el-radio v-model="arrContent.tongZhao" label="否">否</el-radio>
                      </div>
                      <div>
                        <p>学历</p>
                        <el-select v-model="arrContent.xueli" placeholder="请选择">
                          <el-option label="硕士" value="硕士"></el-option>
                          <el-option label="本科" value="本科"></el-option>
                          <el-option label="专科" value="专科"></el-option>
                        </el-select>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.educationExperience)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updateEducation(aggregate.educationExperience,'')">新增</div>
                <p class="small-title">培训经历</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>培训机构</td>
                    <td>培训课程</td>
                    <td>起止时间</td>
                    <td style="width: calc(100%/6);">操作</td>
                  </tr>
                  <tr class="table-td-4" v-for="(item,index) in aggregate.trainExperience" :key="index">
                    <td>
                      <el-input v-model="item.name" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.curriculum" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.time" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updatetrainExperience(aggregate.trainExperience,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.trainExperience,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="trainExperience" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>培训机构</p>
                        <el-input type="textarea" placeholder="请输入培训机构名称" v-model="item.name"></el-input>
                      </div>
                      <div>
                        <p>培训课程</p>
                        <el-input type="textarea" placeholder="请输入培训课程名称" v-model="item.curriculum"></el-input>
                      </div>
                      <div>
                        <p>起止时间</p>
                        <el-date-picker
                          v-model="arrContent.time"
                          type="monthrange"
                          range-separator="至"
                          start-placeholder="开始月份"
                          end-placeholder="结束月份">
                        </el-date-picker>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.trainExperience)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updatetrainExperience(aggregate.trainExperience,'')">新增</div>
                <p class="small-title">专业能力</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>擅长专业</td>
                    <td>擅长行业</td>
                    <td style="width: calc(100%/6);">操作</td>
                  </tr>
                  <tr class="table-td-3" v-for="(item,index) in aggregate.power" :key="index">
                    <td>
                      <el-input v-model="item.name1" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.name2" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updatePower(aggregate.power,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.power,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="power" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>擅长专业</p>
                        <el-input type="textarea" placeholder="请输入擅长专业名称" v-model="item.name"></el-input>
                      </div>
                      <div>
                        <p>擅长行业</p>
                        <el-input type="textarea" placeholder="请输入擅长行业名称" v-model="item.curriculum"></el-input>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.power)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updatePower(aggregate.power,'')">新增</div>
                <p class="small-title">工作经验</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>公司名称</td>
                    <td>公司性质</td>
                    <td>公司规模</td>
                    <td>最高职位</td>
                    <td style="width: calc(100%/6);">操作</td>
                  </tr>
                  <tr class="table-td-5" v-for="(item,index) in aggregate.experience" :key="index">
                    <td>
                      <el-input v-model="item.name" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.type" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.number" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.industry" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updateExperience(aggregate.experience,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.experience,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="experience" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>公司名称</p>
                        <el-input type="textarea" placeholder="请输入公司名称" v-model="item.name"></el-input>
                      </div>
                      <div>
                        <p>公司性质</p>
                        <el-select v-model="item.type" placeholder="请选择">
                          <el-option label="发明" value="发明"></el-option>
                          <el-option label="开发" value="开发"></el-option>
                          <el-option label="注册" value="注册"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>公司规模</p>
                        <el-select v-model="item.number" placeholder="请选择">
                          <el-option label="100-1000" value="100-1000"></el-option>
                          <el-option label="50-100" value="50-100"></el-option>
                          <el-option label="50人以下" value="50人以下"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>发展阶段</p>
                        <el-select v-model="item.stage" placeholder="请选择">
                          <el-option label="起步" value="起步"></el-option>
                          <el-option label="发展中" value="发展中"></el-option>
                          <el-option label="成熟" value="成熟"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>所属行业</p>
                        <el-select v-model="item.industry" placeholder="请选择">
                          <el-option label="软件行业" value="软件行业"></el-option>
                          <el-option label="医疗行业" value="医疗行业"></el-option>
                          <el-option label="通信行业" value="通信行业"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>最高职位</p>
                        <el-input type="textarea" placeholder="请输入最高职位名称" v-model="item.name2"></el-input>
                      </div>
                      <div>
                        <p>在职起止时间:</p>
                        <el-date-picker
                          v-model="item.time"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.experience)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updateExperience(aggregate.experience,'')">新增</div>
                <p class="small-title">项目经验</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>客户公司名称</td>
                    <td>客户公司性质</td>
                    <td>客户公司规模</td>
                    <td>客户发展阶段</td>
                    <td style="width: calc(100%/6);">操作</td>
                  </tr>
                  <tr class="table-td-5" v-for="(item,index) in aggregate.proExperience" :key="index">
                    <td>
                      <el-input v-model="item.name" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.type" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.number" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.industry" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updateproExperience(aggregate.proExperience,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.proExperience,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="proExperience" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>客户公司名称</p>
                        <el-input placeholder="请输入客户公司名称" v-model="item.name"></el-input>
                      </div>
                      <div>
                        <p>客户公司性质</p>
                        <el-select v-model="item.type" placeholder="请选择">
                          <el-option label="发明" value="发明"></el-option>
                          <el-option label="开发" value="开发"></el-option>
                          <el-option label="注册" value="注册"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>客户公司规模</p>
                        <el-select v-model="item.number" placeholder="请选择">
                          <el-option label="100-1000" value="100-1000"></el-option>
                          <el-option label="50-100" value="50-100"></el-option>
                          <el-option label="50人以下" value="50人以下"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>客户发展阶段</p>
                        <el-select v-model="item.stage" placeholder="请选择">
                          <el-option label="起步" value="起步"></el-option>
                          <el-option label="发展中" value="发展中"></el-option>
                          <el-option label="成熟" value="成熟"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>客户所属行业</p>
                        <el-select v-model="item.industry" placeholder="请选择">
                          <el-option label="软件行业" value="软件行业"></el-option>
                          <el-option label="医疗行业" value="医疗行业"></el-option>
                          <el-option label="通信行业" value="通信行业"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>客户需求</p>
                        <el-input type="textarea" placeholder="请输入客户需求" v-model="item.xuqiu"></el-input>
                      </div>
                      <div>
                        <p>项目名称</p>
                        <el-input placeholder="请输入项目名称" v-model="item.name2"></el-input>
                      </div>
                      <div>
                        <p>项目类型</p>
                        <el-select v-model="item.name2Type" placeholder="请选择">
                          <el-option label="软件" value="软件"></el-option>
                          <el-option label="医疗" value="医疗"></el-option>
                          <el-option label="通信" value="通信"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <p>其他描述</p>
                        <el-input type="textarea" placeholder="请输入其他描述" v-model="item.miaoShu"></el-input>
                      </div>
                      <div>
                        <p>项目总费用</p>
                        <el-input type="number" placeholder="请输入项目总费用" v-model="item.price"></el-input>
                      </div>
                      <div>
                        <p>服务起止时间:</p>
                        <el-date-picker
                          v-model="item.time"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                      </div>
                      <div>
                        <p>岗位名称</p>
                        <el-input placeholder="请输入岗位名称" v-model="item.gangWei"></el-input>
                      </div>
                      <div>
                        <p>服务简介</p>
                        <el-input type="textarea" placeholder="请输入服务简介" v-model="item.server"></el-input>
                      </div>
                      <div>
                        <p>工作职责</p>
                        <el-input type="textarea" placeholder="请输入工作职责" v-model="item.workZe"></el-input>
                      </div>
                      <div>
                        <p>主要业绩</p>
                        <el-input type="textarea" placeholder="请输入主要业绩" v-model="item.zhuYao"></el-input>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.proExperience)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updateproExperience(aggregate.proExperience,'')">新增</div>
                <p class="small-title">资质证书</p>
                <table style="margin-right:1.5rem;width: 100%;">
                  <tr class="table-fir-tr">
                    <td>资质名称</td>
                    <td>证书名称</td>
                    <td>获得时间</td>
                    <td style="width: calc(100%/6);">操作</td>
                  </tr>
                  <tr class="table-td-5" v-for="(item,index) in aggregate.qualifications" :key="index">
                    <td>
                      <el-input v-model="item.name1" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.name2" disabled ></el-input>
                    </td>
                    <td>
                      <el-input v-model="item.time" disabled ></el-input>
                    </td>
                    <td class="table-td-operation">
                      <el-button type="primary" icon="el-icon-edit" circle @click="updateQualifications(aggregate.qualifications,index)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(aggregate.qualifications,index)"></el-button>
                    </td>
                  </tr>
                  <el-drawer :visible.sync="qualifications" size="100%" direction="btt" :before-close="handleClose">
                    <div class="drawer-div-par" v-for="(item,index) in arrContent" :key="index">
                      <div>
                        <p>资质名称</p>
                        <el-input placeholder="请输入客户公司名称" v-model="item.name1"></el-input>
                      </div>
                      <div>
                        <p>证书名称</p>
                        <el-input placeholder="请输入客户公司名称" v-model="item.name2"></el-input>
                      </div>
                      <div>
                        <p>获得时间:</p>
                        <el-date-picker
                          v-model="item.time"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                      </div>
                      <div class="submit-btns-par">
                        <el-button class="form-btn infosubmit" @click="preservation(aggregate.proExperience)">保存</el-button>
                        <el-button class="form-btn cancel" @click="cancel">取消</el-button>
                      </div>
                    </div>
                  </el-drawer>
                </table>
                <div class="add-table-tr" @click="updateQualifications(aggregate.qualifications,'')">新增</div>
                <p>服务意愿</p>
                <div>
                  <div class="fixed-div-par margin-1rem">
                    <p>愿意承接咨询项目:</p>
                    <div>
                      <el-radio v-model="aggregate.radio" label="是">是</el-radio>
                      <el-radio v-model="aggregate.radio" label="否">否</el-radio>
                    </div>
                  </div>
                  <div class="fixed-div-par margin-1rem">
                    <p>意愿担任项目组员:</p>
                    <div>
                      <el-radio v-model="aggregate.radio2" label="是">是</el-radio>
                      <el-radio v-model="aggregate.radio2" label="否">否</el-radio>
                    </div>
                  </div>
                  <div class="fixed-div-par margin-1rem">
                    <p>能否独立完成项目:</p>
                    <div>
                      <el-radio v-model="aggregate.radio3" label="是">是</el-radio>
                      <el-radio v-model="aggregate.radio3" label="否">否</el-radio>
                    </div>
                  </div>
                  <div class="fixed-div-par margin-1rem">
                    <p>适应外地出差:</p>
                    <div>
                      <el-radio v-model="aggregate.radio4" label="是">是</el-radio>
                      <el-radio v-model="aggregate.radio4" label="否">否</el-radio>
                    </div>
                  </div>
                  <div class="fixed-div-par margin-1rem">
                    <p>意愿担任项目经理:</p>
                    <div>
                      <el-radio v-model="aggregate.radio5" label="是">是</el-radio>
                      <el-radio v-model="aggregate.radio5" label="否">否</el-radio>
                    </div>
                  </div>
                  <div class="fixed-div-par margin-1rem">
                    <p style="margin-bottom: 1rem;">收费标准:</p>
                    <el-input v-model="aggregate.levelStandard" type="number"></el-input>
                  </div>
                </div>
                <p>自我评价</p>
                <div class="fixed-div-par margin-1rem">
                    <p style="margin-bottom: 1rem;">评价内容</p>
                    <el-input type="textarea" resize="noresize" v-model="aggregate.resourceDesc"></el-input>
                </div>
              </div>
            </template>
          </div>
        </div>
      </el-col>
    </el-row>
  </template>
  <script>
    
    import {
      changeAvatar,
      resources,
      resourcesEr,
      getMyInfo,
      indivFinish,
      corpFinish,
      hyList,
      getCity1,
    } from "@/components/api/api";
    import myUpload from 'vue-image-crop-upload';
    export default{
      data () {
        return {
          role:"2",
          step:1,
          avatar: "",
          show: false,
          size: 2.1,
          primaryResources:"",
          twoTierResources:"",
          threeTierResources:"",
          aggregate:{
            actualName:"",
            phoneNo:"",
            nickname:"",
            emailAdd:"",
            idNo:"",
            contactAdd:"",
            wechatNo:"",
            associatedCo:"",
            postName:"",
            corpPost:"",
            custIndivResourceList:[
              {resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},
            ],
            educationExperience:[
              {name:"",time:"",pro:"",tongZhao:"",xueli:""}
            ],
            trainExperience:[
              {name:"",curriculum:"",time:""}
            ],
            power:[
              {name1:"",name2:""}
            ],
            experience:[
              {name:"",type:"",number:"",stage:"",industry:"",name2:"",time:""}
            ],
            proExperience:[
              {name:"",type:"",number:"",stage:"",industry:"",xuqiu:"",name2:"",name2Type:"",miaoShu:"",price:"",time:"",gangWei:"",server:"",workZe:"",zhuYao:""}
            ],
            qualifications:[
              {name1:"",name2:"",time:""}
            ],
            radio:"",
            radio2:"",
            radio3:"",
            radio4:"",
            radio5:"",
            levelStandard:"",
            resourceDesc:"",
          },
          arrContent:[],
          arrIndex:"",
          personalResources:false,
          education:false,
          trainExperience:false,
          power:false,
          experience:false,
          proExperience:false,
          qualifications:false,
        }
      },
      components: {
        myUpload,
      },
      created () {
        this.primaryResourcesFun();  
        // this.mountedInfo();
      },
      methods: {
        mountedInfo () {
          let user = JSON.parse(sessionStorage.getItem("user"));
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
            // 个人会员
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
        primaryResourcesFun () {
          resources().then(res => {
            if (res.data.code === 200) {
              this.primaryResources = res.data.data
            }
          });
        },
        changeResourceType (val) {
          // 匹配选择的项的中文名称
          for (var i in this.primaryResources) {
            if (this.primaryResources[i].dictItemId == val) {
              this.arrContent[0].resourceType = this.primaryResources[i].itemName
            }
          }
          resourcesEr({ "dictItemId": val }).then(res => {
            if (res.data.code === 200) {
              this.twoTierResources = res.data.data
              this.twoTierResourcesVal = val;
            }
          });
        },
        changeResourceLevel (val) {
          for (var i in this.twoTierResources) {
            if (this.twoTierResources[i].itemCode == val) {
              this.arrContent[0].resourceLevel = this.twoTierResources[i].itemName
            }
          }
          resourcesEr({ "dictItemId": this.twoTierResourcesVal, "itemCode": val }).then(res => {
            if (res.data.code === 200) {
              this.arrContent[0].levelStandard = res.data.data[0].itemValue1;
            }
          });
        },
        cropSuccess (imgDataUrl) {
          let user = JSON.parse(sessionStorage.getItem("user"));
          changeAvatar({ "avatar": imgDataUrl, "userId": user.userId }).then(res => {
            if (res.data.code == 200) {
              this.$confirm(res.data.msg);
              this.mountedInfo();
            }
          })
        },
        handleClose (done) {
          this.$confirm('是否确认退出？')
            .then(_ => {
              done();
              // this.mountedInfo();
            })
            .catch(_ => { });
        },
        // 通用删除
        remove(arr,index){
          arr.splice(index, 1);
        },
        // 通用取消
        cancel(){
          this.personalResources=false;
          this.education=false;
          this.trainExperience=false;
          this.power=false;
          this.experience=false;
          this.proExperience=false;
          this.qualifications=false;
        },
        // 通用保存
        preservation(arr){
          const that = this;
          that.cancel();
          if(this.arrIndex==''){
            arr.push(that.arrContent[0])   
            that.arrContent=[]   
          }else{
            arr[this.arrIndex]=this.arrContent[0]
            that.arrContent=[]    
          }
        },
        updatePersonalResources(arr,index){
          this.personalResources=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              resourceType: '',
              resourceLevel: '',
              levelStandard: '',
              resourceDesc: '',
            });
          }else{
            this.arrContent=arr[index]
          }
        },
        updateEducation(arr,index){
          this.education=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              name: '',
              time: '',
              pro: '',
              tongZhao: '',
              xueli: '',
            });
          }else{
            this.arrContent=arr[index]
          }
        },
        updatetrainExperience(arr,index){
          this.trainExperience=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              name: '',
              curriculum: '',
              time: '',
            });
          }else{
            this.arrContent=arr[index]
          }
        },
        updatePower(arr,index){
          this.power=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              name1: '',
              name2: '',
            });
          }else{
            this.arrContent=arr[index]
          }
        },
        updateExperience(arr,index){
          this.experience=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              name: '',
              type: '',
              number: '',
              stage: '',
              industry: '',
              name2: '',
              time: '',
            });
          }else{
            this.arrContent=arr[index]
          }
        },
        updateproExperience(arr,index){
          this.proExperience=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              name:"",
              type:"",
              number:"",
              stage:"",
              industry:"",
              xuqiu:"",
              name2:"",
              name2Type:"",
              miaoShu:"",
              price:"",
              time:"",
              gangWei:"",
              server:"",
              workZe:"",
              zhuYao:""
            });
          }else{
            this.arrContent=arr[index]
          }
        },
        updateQualifications(arr,index){
          this.qualifications=true;
          this.arrIndex=index;
          if(index==''){
            this.arrContent.push({
              name1:"",
              name2:"",
              time:"",
            });
          }else{
            this.arrContent=arr[index]
          }
        },
      },
      
    }
  </script>
  <style scoped>
    .perfect-user-info{
      margin-top: 3rem;
    }
    .right-ul li{
      width: 100%;
      padding: 0.25rem 0;
      box-sizing: border-box;
      background: #fff;
      line-height: 40px;
      text-align: center;
      border-right: 3px solid #fff;
      cursor: pointer;
    }
    .right-ul li *{
      color: #000;
    }
    .right-ul li:hover{
      background: #fcc6c6;
      border-right-color: #9e0100;
    }
    .right-ul li:hover *{
      color: #9e0100;
    }
    .right-ul .li-active,.right-ul .li-active span{
      background: #fcc6c6;
      color: #9e0100;
      border-right-color: #9e0100;
    }
    .left-div-par{
      background: #fff;
      box-sizing: border-box;
      padding-left: 1.5rem;
      padding-bottom: 2rem;
    }
    .left-div-par>div>p{
      font-size: 1rem;
      font-weight: bold;
      padding: 1rem 0;
    }
    .head-portrait-par{
      padding-left: 4rem;
    }
    .head-portrait-img{
      width: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .head-portrait-img img{
      display: block;
      width: 8rem;
      height: 8rem;
      background: #fafafa;
    }
    .update-img-button{
      width: 10rem;
      margin-top: 1rem;
      padding: 0.4rem 0;
      border-radius: 0.2rem;
      border: 1px solid #999;
      background: #fff;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fixed-div-par{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      padding-left: 4rem;
    }
    .fixed-div{
      width: auto;
      height: auto;
      margin: 0.5rem 0;
      margin-right: 3rem;
    }
    .fixed-div p{
      margin-bottom: 0.5rem;
    }
    table{
      border-collapse:separate; 
      border-spacing:0px 1rem;
    }
    .table-fir-tr{
      background: #f2f2f2;
      border-bottom: 1px solid #444;
    }
    .table-fir-tr td{
      text-align: center;
      padding: 0.75rem 0;
    }
    .table-td-3 td{
      width: calc(100%/3);
    }
    .table-td-4 td{
      width: calc(100%/4);
    }
    .table-td-5 td{
      width: calc(100%/5);
    }
    .table-td-6 td{
      width: calc(100%/6);
    }
    .left-div-par .table-td-operation{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 2rem;
      box-sizing: border-box;
    }
    .table-td-operation /deep/ .el-button{
      display: block;
    }
    .add-table-tr{
      padding: 0.5rem 0;
      font-size: 1rem;
      text-align: center;
      border: 1px dashed #999;
      cursor: pointer;
      margin-right: 1.5rem;
    }
    .drawer-div-par{
      width: 50rem;
      height: 40rem;
      background: #e7e7e7;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 2rem 0;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .drawer-div-par p{
      margin: 1rem 0 0.5rem 0;
    }
    .submit-btns-par{
      margin-top: 2rem;
    }
    .left-div-par .small-title{
        font-weight: normal;
        font-size: 1rem;
        padding-left: 2rem;
    }
    .margin-1rem{
      margin: 0.5rem 0;
      padding-right: 4rem;
    }
    .margin-1rem p{
      width: 10rem;
      display: block;
    }
  </style>
  <style>
    .el-drawer{
      background: #fafafa;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-drawer__header{
      width: 50rem;
    }
    .left-div-par /deep/ .el-input__inner:focus,
    .left-div-par /deep/ .el-select .el-input.is-focus .el-input__inner,
    .drawer-div-par /deep/ .el-input__inner:focus,
    .drawer-div-par /deep/ .el-textarea__inner:focus,
    .drawer-div-par /deep/ .el-select .el-input.is-focus .el-input__inner{
      border-color: #9e0100;
    }
    .drawer-div-par /deep/ .el-input__inner,.drawer-div-par /deep/ .el-textarea__inner{
      width: 220px;
    }
  </style>