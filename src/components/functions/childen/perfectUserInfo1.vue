<template>
  <el-row type="flex" class="perfect-user-info" justify="center" :gutter="40">
    <el-col :sm="7" :md="6" :lg="5" :xl="4">
      <div class="grid-content bg-purple">
        <ul class="right-ul">
          <li @click="clickMenu">
            <span>基本信息</span>
          </li>
          <li class="li-active">
            <span>我的简历</span>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :sm="15" :md="14" :lg="13" :xl="12">
      <div class="grid-content bg-purple-light">
        <div class="left-div-par">
          <div>
            <div class="surface-content-par" v-show="!personBool">
              <div class="surface-edit" @click="openDrawer1">
                <i class="el-icon-edit-outline"></i>
                编辑
              </div>
              <img :src="avatar||defaultImg" alt="">
              <div class="surface-userInfo">
                <div style="align-items: center;">
                  <h3>{{aggregate.actualname||'暂无'}}</h3>
                  <span class="inline-block-span" v-if="aggregate.workState=='在职'">在职</span>
                  <span class="inline-block-span" v-if="aggregate.workState=='离职'">离职</span>
                  <span class="inline-block-span" v-if="aggregate.workState=='自由职业'">自由职业</span>
                  <span class="inline-block-span" v-if="aggregate.workState==null">暂无状态</span>
                </div>
                <div>
                  <span>{{aggregate.gender||'暂无'}}</span>
                  <span v-if="aggregate.age">{{ageValue}}岁</span>
                  <span v-if="!aggregate.age">暂无</span>
                  <span>{{workYearsValue||' '}}年工作经验</span>
                </div>
                <div>
                  <div>
                    <i class="el-icon-mobile-phone"></i>
                    <span>{{aggregate.phoneNo||'暂无'}}</span>
                  </div>
                  <div>
                    <i class="el-icon-message"></i>
                    <span>{{aggregate.registerEmail||'暂无'}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="personBool" class="personBool-par">
              <p>个人信息</p>
              <div class="head-portrait-par">
                <div class="head-portrait-img">
                  <img :src="avatar||defaultImg">
                  <my-upload field="img" @crop-success="cropSuccess" v-model="show" :width="200" :height="200" img-format="png" :size="size"></my-upload>
                </div>
                <button @click="show=true" :class="avatar==''?'':'opacity0'" class="update-img-button">
                  <img src="../../../assets/icon/upload.png" style="margin-right:0.5rem;">
                  <span>上传头像</span>
                </button>
              </div>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>姓名:</p>
                  <el-input v-model="aggregate.actualname" placeholder="请输入姓名"></el-input>
                </div>
                <div class="fixed-div">
                  <p>性别:</p>
                  <el-radio v-model="aggregate.gender" label="女" border>女</el-radio>
                  <el-radio v-model="aggregate.gender" label="男" border>男</el-radio>
                </div>
                <div class="fixed-div">
                  <p>出生日期:</p>
                  <el-date-picker v-model="aggregate.age" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择出生日期"> </el-date-picker>
                </div>
                <div class="fixed-div fixed-div-select">
                  <p>现居地址:</p>
                  <div class="fixed-div-selectPar">
                    <el-select v-model="aggregate.province" @change="selectCity" placeholder="请选择省份">
                      <el-option
                        v-for="item in adress1"
                        :key="item.dictItemId"
                        :label="item.itemName"
                        :value="item.itemName"
                        >
                      </el-option>
                    </el-select>
                    <el-select v-model="aggregate.city" placeholder="请选择城市">
                      <el-option
                        v-for="item in adress2"
                        :key="item.dictItemId"
                        :label="item.itemName"
                        :value="item.itemName">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="fixed-div">
                  <p>联系方式:</p>
                  <el-input v-model="aggregate.phoneNo" placeholder="请输入联系方式"></el-input>
                </div>
                <div class="fixed-div">
                  <p>电子邮箱:</p>
                  <el-input v-model="aggregate.registerEmail" placeholder="请输入电子邮箱"></el-input>
                </div>
                <div class="fixed-div">
                  <p>参加工作时间:</p>
                  <el-date-picker v-model="aggregate.workYears" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择参加工作时间"> </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>当前工作状态:</p>
                  <el-radio v-model="aggregate.workState" label="在职" border>在职</el-radio>
                  <el-radio v-model="aggregate.workState" label="离职" border>离职</el-radio>
                  <el-radio v-model="aggregate.workState" label="自由职业" border>自由职业</el-radio>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update1">保存并更新</el-button>
                <el-button @click="personBool=!personBool">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personWork">
              <p>工作经历</p>
              <div class="experience-par" v-for="(item,ke) in workExp" :key="ke">
                <div class="experience-edit" @click="openDrawer2(ke)">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
                <div class="font-18 width100" >
                  <span>{{item.corpName}}丨（{{item.startDt}}—{{item.endDt}}）</span>
                </div>
                <div class="width50">
                  <span>公司行业：</span>
                  {{item.industry}}
                </div>
                <div class="width50">
                  <span>公司性质：</span>
                  {{item.corpNature}}
                </div>
                <div class="width50">
                  <span>公司规模：</span>
                  {{item.corpScale}}
                </div>
                <div class="width50">
                  <span>发展阶段：</span>
                  {{item.devStage}}
                </div>
                <div class="width100" style="white-space: pre-wrap;">
                  <span>工作描述：</span>
                  <i style="font-style: normal;">{{item.workDesc}}</i>
                </div>
                <div class="width100" style="white-space: pre-wrap;">
                  <span>工作业绩：</span>
                  <i style="font-style: normal;">{{item.achievement}}</i>
                </div>
              </div>
              <button class="workExpBtn" @click="openDrawer2">+&nbsp;添加工作经历</button>
            </div>
            <div v-show="personWork" class="personBool-par not-first-par">
              <p>工作经历</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>公司名称:</p>
                  <el-input v-model="work.corpName" placeholder="请输入公司名称"></el-input>
                </div>
                <div class="fixed-div fixed-div-select">
                  <p>所属行业:</p>
                  <div class="fixed-div-selectPar">
                    <el-select v-model="work.industry" @change="changeCustIndustry2" placeholder="请选择所属行业">
                      <el-option
                        v-for="item in hyList"
                        :key="item.itemName"
                        :label="item.itemName"
                        :value="item.itemName">
                      </el-option>
                    </el-select>
                    <el-select v-model="work.industryDetail" placeholder="请选择所属行业">
                      <el-option
                        v-for="item in industryB"
                        :key="item.itemName"
                        :label="item.itemName"
                        :value="item.itemName">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="fixed-div">
                  <p>公司性质:</p>
                  <el-select v-model="work.corpNature" placeholder="请选择公司性质">
                    <el-option
                      v-for="item in patentType"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>公司规模:</p>
                  <el-select v-model="work.corpScale" placeholder="请选择公司规模">
                    <el-option
                      v-for="item in compenyNumer"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>发展阶段:</p>
                  <el-select v-model="work.devStage" placeholder="请选择发展阶段">
                    <el-option
                      v-for="item in compenyFz"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>职位名称:</p>
                  <el-input v-model="work.topPosition" placeholder="请输入职位名称"></el-input>
                </div>
                <div class="fixed-div">
                  <p>在职开始时间:</p>
                  <el-date-picker
                    v-model="work.startDt"
                    type="date"
                    placeholder="选择日期" 
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>在职结束时间:</p>
                  <el-date-picker
                    v-model="work.endDt"
                    type="date"
                    placeholder="选择日期" 
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>工作描述:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 40}" maxlength="1000" placeholder="请输入工作描述(总字数不能超过1000个字)" v-model="work.workDesc"></el-input>
                </div>
                <div class="fixed-div">
                  <p>工作业绩:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 40}" maxlength="1000" placeholder="请输入工作业绩(总字数不能超过1000个字)" v-model="work.achievement"></el-input>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update2">保存并更新</el-button>
                <el-button @click="personWork=!personWork">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personPro">
              <p>项目经验</p>
              <div class="experience-par" v-for="(item,index) in proExp" :key="index">
                <div class="experience-edit" @click="openDrawer3(index)">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
                <div class="font-18 width100">
                  <span>{{item.projectName}} 丨 {{item.jobName}}（{{item.startDt}}—{{item.endDt}}）</span>
                </div>
                <div class="width50">
                  <span>客户名称：</span>
                  {{item.custcoName}}
                </div>
                <div class="width50">
                  <span>公司行业：</span>
                  {{item.custIndustry}}
                </div>
                <div class="width50">
                  <span>公司性质：</span>
                  {{item.custcoNature}}
                </div>
                <div class="width50">
                  <span>公司规模：</span>
                  {{item.custcoScale}}
                </div>
                <div class="width50">
                  <span>发展阶段：</span>
                  {{item.custdevStage}}
                </div>
                <div class="width50">
                  <span>项目费用：</span>
                  {{item.projectCost}}
                </div>
                <div class="width100" style="white-space: pre-wrap;">
                  <span>客户需求：</span>
                  <i style="font-style: normal;">{{item.custDemand}}</i>
                </div>
                <div class="width100" style="white-space: pre-wrap;">
                  <span>服务简介：</span>
                  <i style="font-style: normal;">{{item.serIntro}}</i>
                </div>
                <div class="width100" style="white-space: pre-wrap;">
                  <span>工作职责：</span>
                  <i style="font-style: normal;">{{item.jobDuty}}</i>
                </div>
                <div class="width100" style="white-space: pre-wrap;">
                  <span>工作业绩：</span>
                  <i style="font-style: normal;">{{item.achievement}}</i>
                </div>
              </div>
              <button class="workExpBtn" @click="openDrawer3">+&nbsp;添加项目经验</button>
            </div>
            <div v-show="personPro" class="personBool-par not-first-par">
              <p>项目经验</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>客户公司:</p>
                  <el-input v-model="pro.custcoName" placeholder="请输入客户公司"></el-input>
                </div>
                <div class="fixed-div fixed-div-select">
                  <p>所属行业:</p>
                  <div class="fixed-div-selectPar">
                    <el-select v-model="pro.custIndustry" @change="changeCustIndustry" placeholder="请选择所属行业">
                      <el-option
                        v-for="item in hyList"
                        :key="item.itemName"
                        :label="item.itemName"
                        :value="item.itemName">
                      </el-option>
                    </el-select>
                    <el-select v-model="pro.industryDetail" placeholder="请选择所属行业">
                      <el-option
                        v-for="item in industryB1"
                        :key="item.itemName"
                        :label="item.itemName"
                        :value="item.itemName">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="fixed-div">
                  <p>公司性质:</p>
                  <el-select v-model="pro.custcoNature" placeholder="请选择公司性质">
                    <el-option
                      v-for="item in patentType"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>公司规模:</p>
                  <el-select v-model="pro.custcoScale" placeholder="请选择公司规模">
                    <el-option
                      v-for="item in compenyNumer"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>发展阶段:</p>
                  <el-select v-model="pro.custdevStage" placeholder="请选择发展阶段">
                    <el-option
                      v-for="item in compenyFz"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>项目名称:</p>
                  <el-input v-model="pro.projectName" placeholder="请输入项目名称"></el-input>
                </div>
                <div class="fixed-div">
                  <p>项目类型:</p>
                  <el-select v-model="pro.projectType" v-show="custIndustry2Bool" @change="selectCustIndustry2" placeholder="请选择所属行业">
                    <el-option
                      v-for="item in hyList2"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                  <el-input v-model="pro.projectType" v-show="!custIndustry2Bool" ref="custIndustry2Id" placeholder="请输入"></el-input>
                </div>
                <div class="fixed-div">
                  <p>项目总费用:</p>
                  <el-input v-model="pro.projectCost" placeholder="请输入项目总费用"></el-input>
                </div>
                <div class="fixed-div">
                  <p>服务开始时间:</p>
                  <el-date-picker
                    v-model="pro.startDt"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>服务结束时间:</p>
                  <el-date-picker
                    v-model="pro.endDt"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>岗位名称:</p>
                  <el-input v-model="pro.jobName" placeholder="请输入岗位名称"></el-input>
                </div>
                <div class="fixed-div">
                  <p>客户需求:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 20}" maxlength="500" placeholder="请输入客户需求(总字数不能超过500个字)" v-model="pro.custDemand"></el-input>
                </div>
                <div class="fixed-div">
                  <p>服务简介:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 20}" maxlength="500" placeholder="请输入服务简介(总字数不能超过500个字)" v-model="pro.serIntro"></el-input>
                </div>
                <div class="fixed-div">
                  <p>工作职责:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 40}" maxlength="1000" placeholder="请输入工作职责(总字数不能超过1000个字)" v-model="pro.jobDuty"></el-input>
                </div>
                <div class="fixed-div">
                  <p>工作业绩:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 40}" maxlength="1000" placeholder="请输入工作业绩(总字数不能超过1000个字)" v-model="pro.achievement"></el-input>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update3">保存并更新</el-button>
                <el-button @click="personPro=!personPro">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personEducation">
              <p>教育经历</p>
              <div class="experience-par educationClass" v-for="(item,i) in eduExp" :key="i">
                <div class="width50">
                  <span>学校名称：</span>
                  {{item.schoolName}}
                </div>
                <div class="width50">
                  <span>就读时间：</span>
                  {{item.startDt}}--{{item.endDt}}
                </div>
                <div class="width50">
                  <span>所学专业：</span>
                  {{item.schoolMajor}}
                </div>
                <div class="width50">
                  <span>最高学历：</span>
                  {{item.eduDegree}}
                </div>
                <div class="width100">
                  <span>是否统招：</span>
                  {{item.unifiedBachelor}}
                </div>
                <div class="experience-edit" @click="openDrawer4(i)">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
              </div>
              <button class="workExpBtn" @click="openDrawer4">+&nbsp;添加教育经历</button>
            </div>
            <div v-show="personEducation" class="personBool-par not-first-par">
              <p>教育经历</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>学校名称:</p>
                  <el-input v-model="edu.schoolName" placeholder="请输入学校名称"></el-input>
                </div>
                <div class="fixed-div">
                  <p>开始时间:</p>
                  <el-date-picker
                    v-model="edu.startDt"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>结束时间:</p>
                  <el-date-picker
                    v-model="edu.endDt"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>是否统招:</p>
                  <el-radio v-model="edu.unifiedBachelor" label="是">是</el-radio>
                  <el-radio v-model="edu.unifiedBachelor" label="否">不是</el-radio>
                </div>
                <div class="fixed-div">
                  <p>所学专业:</p>
                  <el-input v-model="edu.schoolMajor" placeholder="请输入所学专业"></el-input>
                </div>
                <div class="fixed-div">
                  <p>学历:</p>
                  <el-select v-model="edu.eduDegree" placeholder="请选择">
                    <el-option
                      v-for="item in eduDegreeList"
                      :key="item.name"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update4">保存并更新</el-button>
                <el-button @click="personEducation=!personEducation">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personTrain">
              <p>培训经历</p>
              <div class="experience-par educationClass" v-for="(item,i) in trainExp" :key="i">
                <div class="width50">
                  <span>机构名称：</span>
                  {{item.trainMechanism}}
                </div>
                <div class="width50">
                  <span>培训时间：</span>
                  {{item.startDt}} - {{item.endDt}}
                </div>
                <div class="width100">
                  <span>培训科目：</span>
                  {{item.trainCourse}}
                </div>
                <div class="experience-edit" @click="openDrawer5(i)">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
              </div>
              <button class="workExpBtn" @click="openDrawer5">+&nbsp;添加培训经历</button>
            </div>
            <div v-show="personTrain" class="personBool-par not-first-par">
              <p>培训经历</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>机构名称:</p>
                  <el-input v-model="train.trainMechanism" placeholder="请输入学校名称"></el-input>
                </div>
                <div class="fixed-div">
                  <p>开始时间:</p>
                  <el-date-picker
                    v-model="train.startDt"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>结束时间:</p>
                  <el-date-picker
                    v-model="train.endDt"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>培训课程:</p>
                  <el-input v-model="train.trainCourse" placeholder="请输入培训课程"></el-input>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update5">保存并更新</el-button>
                <el-button @click="personTrain=!personTrain">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personMajor">
              <p>专业能力</p>
              <div class="experience-edit" @click="openDrawer6">
                <i class="el-icon-edit-outline"></i>
                编辑
              </div>
              <div class="experience-par pwoerClass">
                <div>
                  <span>擅长专业1：</span>
                  {{aggregate.specialityMajor1||'暂无'}}
                </div>
                <div>
                  <span>专业细分1：</span>
                  {{aggregate.majorDetail1||'暂无'}}
                </div>
                <div>
                  <span>擅长专业2：</span>
                  {{aggregate.specialityMajor2||'暂无'}}
                </div>
                <div>
                  <span>专业细分2：</span>
                  {{aggregate.majorDetail2||'暂无'}}
                </div>
                <div>
                  <span>擅长专业3：</span>
                  {{aggregate.specialityMajor3||'暂无'}}
                </div>
                <div>
                  <span>专业细分3：</span>
                  {{aggregate.majorDetail3||'暂无'}}
                </div>
              </div>
              <div class="experience-par pwoerClass">
                <div>
                  <span>擅长行业1：</span>
                  {{aggregate.specialityIndustry1||'暂无'}}
                </div>
                <div>
                  <span>专业细分1：</span>
                  {{aggregate.industryDetail1||'暂无'}}
                </div>
                <div>
                  <span>擅长行业2：</span>
                  {{aggregate.specialityIndustry2||'暂无'}}
                </div>
                <div>
                  <span>专业细分2：</span>
                  {{aggregate.industryDetail2||'暂无'}}
                </div>
                <div>
                  <span>擅长行业3：</span>
                  {{aggregate.specialityIndustry3||'暂无'}}
                </div>
                <div>
                  <span>专业细分3：</span>
                  {{aggregate.industryDetail3||'暂无'}}
                </div>
              </div>
            </div>
            <div v-show="personMajor" class="personBool-par not-first-par">
              <p>专业能力</p>
              <div class="fixed-div-par personMajorClass">
                <div class="fixed-div">
                  <p>擅长专业1:</p>
                  <el-select v-model="aggregate.specialityMajor1" @change="selectMajor1" placeholder="请选择">
                    <el-option
                      v-for="item in zyList"     
                      :key="item.INDUSTRY_NAME"
                      :label="item.INDUSTRY_NAME"
                      :value="item.INDUSTRY_ID">
                    </el-option>
                  </el-select>
                  <el-select v-model="aggregate.majorDetail1" v-show="selectMajor1Bool" placeholder="请选择">
                    <el-option
                      v-for="item in zyListChildren1"     
                      :key="item.INDUSTRY_NAME"
                      :label="item.INDUSTRY_NAME"
                      :value="item.INDUSTRY_ID">
                    </el-option>
                  </el-select>
                  <el-input v-model="aggregate.majorDetail1" class="selectMajor1Class" v-show="!selectMajor1Bool" ref="selectMajor1Id" placeholder="请输入"></el-input>
                </div>
                <div class="fixed-div">
                  <p>擅长专业2:</p>
                  <el-select v-model="aggregate.specialityMajor2" @change="selectMajor2" placeholder="请选择">
                    <el-option
                      v-for="item in zyList"     
                      :key="item.INDUSTRY_NAME"
                      :label="item.INDUSTRY_NAME"
                      :value="item.INDUSTRY_ID">
                    </el-option>
                  </el-select>
                  <el-select v-model="aggregate.majorDetail2" v-show="selectMajor2Bool" placeholder="请选择">
                    <el-option
                      v-for="item in zyListChildren2"     
                      :key="item.INDUSTRY_NAME"
                      :label="item.INDUSTRY_NAME"
                      :value="item.INDUSTRY_ID">
                    </el-option>
                  </el-select>
                  <el-input v-model="aggregate.majorDetail2" class="selectMajor1Class" v-show="!selectMajor2Bool" ref="selectMajor2Id" placeholder="请输入"></el-input>
                </div>
                <div class="fixed-div">
                  <p>擅长专业3:</p>
                  <el-select v-model="aggregate.specialityMajor3" @change="selectMajor3" placeholder="请选择">
                    <el-option
                      v-for="item in zyList"     
                      :key="item.INDUSTRY_NAME"
                      :label="item.INDUSTRY_NAME"
                      :value="item.INDUSTRY_ID">
                    </el-option>
                  </el-select>
                  <el-select v-model="aggregate.majorDetail3" v-show="selectMajor3Bool" placeholder="请选择">
                    <el-option
                      v-for="item in zyListChildren3"     
                      :key="item.INDUSTRY_NAME"
                      :label="item.INDUSTRY_NAME"
                      :value="item.INDUSTRY_ID">
                    </el-option>
                  </el-select>
                  <el-input v-model="aggregate.majorDetail3" class="selectMajor1Class" v-show="!selectMajor3Bool" ref="selectMajor3Id" placeholder="请输入"></el-input>
                </div>
                <div class="fixed-div">
                  <p>擅长行业1:</p>
                  <el-select v-model="aggregate.specialityIndustry1" @change="selectIndustry1" placeholder="请选择">
                    <el-option
                      v-for="item in hyList"
                      :key="item.itemName"
                      :label="item.itemName"
                      :value="item.itemName">
                    </el-option>
                  </el-select>
                  <el-select v-model="aggregate.industryDetail1" placeholder="请选择">
                    <el-option
                      v-for="item in hyListChildren1"
                      :key="item.itemName"
                      :label="item.itemName"
                      :value="item.itemName">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>擅长行业2:</p>
                  <el-select v-model="aggregate.specialityIndustry2" @change="selectIndustry2" placeholder="请选择">
                    <el-option
                      v-for="item in hyList"
                      :key="item.itemName"
                      :label="item.itemName"
                      :value="item.itemName">
                    </el-option>
                  </el-select>
                  <el-select v-model="aggregate.industryDetail2" placeholder="请选择">
                    <el-option
                      v-for="item in hyListChildren2"
                      :key="item.itemName"
                      :label="item.itemName"
                      :value="item.itemName">
                    </el-option>
                  </el-select>
                </div>
                <div class="fixed-div">
                  <p>擅长行业3:</p>
                  <el-select v-model="aggregate.specialityIndustry3" @change="selectIndustry3" placeholder="请选择">
                    <el-option
                      v-for="item in hyList"
                      :key="item.itemName"
                      :label="item.itemName"
                      :value="item.itemName">
                    </el-option>
                  </el-select>
                  <el-select v-model="aggregate.industryDetail3" placeholder="请选择">
                    <el-option
                      v-for="item in hyListChildren3"
                      :key="item.itemName"
                      :label="item.itemName"
                      :value="item.itemName">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update6">保存并更新</el-button>
                <el-button @click="personMajor=!personMajor">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personQualifications">
              <p>资质证书</p>
              <div class="experience-par educationClass" v-for="(item,i) in qulificationExp" :key="i">
                <div class="experience-edit" @click="openDrawer7(i)" >
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
                <div class="width50">
                  <span>证书名称：</span>
                  {{item.credName}}
                </div>
                <div class="width50">
                  <span>获得时间：</span>
                  {{item.gainDt}}
                </div>
                <div class="width100">
                  <span>资质名称：</span>
                  {{item.qualName}}
                </div>
              </div>
              <button class="workExpBtn" @click="openDrawer7">+&nbsp;添加资质证书</button>
            </div>
            <div v-show="personQualifications" class="personBool-par not-first-par">
              <p>资质证书</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>证书名称:</p>
                  <el-input v-model="qulification.credName" placeholder="请输入证书名称"></el-input>
                </div>
                <div class="fixed-div">
                  <p>获得时间:</p>
                  <el-date-picker
                    v-model="qulification.gainDt"
                    type="date"
                    placeholder="选择日期" 
                    format="yyyy-MM-dd" 
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="fixed-div">
                  <p>资质名称:</p>
                  <el-input v-model="qulification.qualName" placeholder="请输入资质名称"></el-input>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update7">保存并更新</el-button>
                <el-button @click="personQualifications=!personQualifications">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personDesire">
              <p>服务意愿</p>
              <div class="experience-par educationClass">
                <div class="width50">
                  <span class="more-p">愿意承接项目：</span>
                  {{aggregate.presentConsul||'暂无'}}
                </div>
                <div class="width50">
                  <span class="more-p">愿意担任项目组员：</span>
                  {{aggregate.projectMember||'暂无'}}
                </div>
                <div class="width50">
                  <span class="more-p">能否独自完成项目：</span>
                  {{aggregate.indcompProject||'暂无'}}
                </div>
                <div class="width50">
                  <span class="more-p">适应外地出差：</span>
                  {{aggregate.businessTravel||'暂无'}}
                </div>
                <div class="width50">
                  <span class="more-p">意愿担任项目经理：</span>
                  {{aggregate.projectManager||'暂无'}}
                </div>
                <div class="width50">
                  <span class="more-p">收费标准：</span>
                  {{aggregate.feeStandard||' '}}元/天
                </div>
                <div class="experience-edit" @click="openDrawer8">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
              </div>
            </div>
            <div v-show="personDesire" class="personBool-par not-first-par">
              <p>服务意愿</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p class="more-p">愿意承接项目:</p>
                  <el-radio v-model="aggregate.presentConsul" label="是" border>是</el-radio>
                  <el-radio v-model="aggregate.presentConsul" label="否" border>否</el-radio>
                </div>
                <div class="fixed-div">
                  <p class="more-p">愿意担任项目组员:</p>
                  <el-radio v-model="aggregate.projectMember" label="是" border>是</el-radio>
                  <el-radio v-model="aggregate.projectMember" label="否" border>否</el-radio>
                </div>
                <div class="fixed-div">
                  <p class="more-p">能否独自完成项目:</p>
                  <el-radio v-model="aggregate.indcompProject" label="是" border>是</el-radio>
                  <el-radio v-model="aggregate.indcompProject" label="否" border>否</el-radio>
                </div>
                <div class="fixed-div">
                  <p class="more-p">适应外地出差:</p>
                  <el-radio v-model="aggregate.businessTravel" label="是" border>是</el-radio>
                  <el-radio v-model="aggregate.businessTravel" label="否" border>否</el-radio>
                </div>
                <div class="fixed-div">
                  <p class="more-p">意愿担任项目经理:</p>
                  <el-radio v-model="aggregate.projectManager" label="是" border>是</el-radio>
                  <el-radio v-model="aggregate.projectManager" label="否" border>否</el-radio>
                </div>
                <div class="fixed-div">
                  <p class="more-p">收费标准:</p>
                  <el-input v-model="aggregate.feeStandard" placeholder="请输入收费标准,以天为单位"></el-input>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update8">保存并更新</el-button>
                <el-button @click="personDesire=!personDesire">取消</el-button>
              </div>
            </div>
            <div class="surface-content-par experience-all-par" v-show="!personEvaluate">
              <p>自我评价</p>
              <div class="experience-par">
                <div style="white-space: pre-wrap;">
                  <i style="font-style: normal;">{{aggregate.selfEvaluation||'暂无'}}</i>
                </div>
                <button  @click="openDrawer9" v-show="aggregate.selfEvaluation==null">+&nbsp;添加自我评价</button>
                <div class="experience-edit" @click="openDrawer9" style="top:-2.2rem;" v-show="aggregate.selfEvaluation">
                  <i class="el-icon-edit-outline"></i>
                  编辑
                </div>
              </div>
            </div>
            <div v-show="personEvaluate" class="personBool-par not-first-par">
              <p>自我评价</p>
              <div class="fixed-div-par">
                <div class="fixed-div">
                  <p>评价内容:</p>
                  <el-input type="textarea" :autosize="{ minRows: 4,maxRows: 40}" maxlength="1000" placeholder="请输入评价内容(总字数不能超过1000个字)" v-model="aggregate.selfEvaluation"></el-input>
                </div>
              </div>
              <div class="btns-par">
                <el-button type="primary" plain @click="update9">保存并更新</el-button>
                <el-button @click="personEvaluate=!personEvaluate">取消</el-button>
              </div>
            </div>
          </div>
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
    getCity2,
    getCity3,
    getTalent,
    putTalent,
    getTalentWork,
    zyList,
    zyListChildren,
    htListChildren,
    putTalentWork,
    talentWork,
    getProject,
    updateProject,
    addProject,
    addEdu,
    getEdu,
    updateEdu,
    addTrain,
    getTrain,
    updateTrain,
    addQulification,
    getQulification,
    updateQulification,
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
        aggregate:{},
        workIndex:"",
        workExp:"",
        work:{
          corpName:"",
          industry:"",
          corpNature:"",
          corpScale:"",
          devStage:"",
          topPosition:"",
          startDt:"",
          endDt:"",
          workDesc:"",
          achievement:""
        },
        proIndex:"",
        proExp:"",
        pro:{
          projectName:"",
          jobName:"",
          startDt:"",
          endDt:"",
          custDemand:"",
          projectCost:"",
          serIntro:"",
          jobDuty:"",
          achievement:"",
          custcoName:"",
          custIndustry:"",
          custcoNature:"",
          custcoScale:"",
          custdevStage:"",
        },
        eduIndex:"",
        eduExp:"",
        edu:{
          schoolName:"",
          schoolMajor:"",
          eduDegree:"",
          unifiedBachelor:"",
          startDt:"",
          endDt:"",
        },
        trainIndex:"",
        trainExp:"",
        train:{
          schoolName:"",
          schoolMajor:"",
          eduDegree:"",
          unifiedBachelor:"",
          startDt:"",
          endDt:"",
        },
        qulificationIndex:"",
        qulificationExp:"",
        qulification:{
          credName:"",
          gainDt:"",
          qualName:"",
        },
        eduDegreeList:[
          {name:"博士"},
          {name:"EMBA"},
          {name:"MBA"},
          {name:"硕士"},
          {name:"本科"},
          {name:"大专"},
          {name:"中专"},
          {name:"高中"},
          {name:"中技"},
          {name:"其他"},
        ],
        personBool:false,
        personWork:false,
        personPro:false,
        personEducation:false,
        personTrain:false,
        personMajor:false,
        personQualifications:false,
        personDesire:false,
        personEvaluate:false,
        value: '',
        talentId:"",
        adress1:[],
        adress2:[],
        adress3:[],
        hyList:[],
        patentType:[
          {name:"国有企业"},
          {name:"集体企业"},
          {name:"私营企业"},
          {name:"台资企业"},
          {name:"外商独资"},
          {name:"政府机构"},
          {name:"事业单位"},
          {name:"公益组织"},
        ],
        compenyNumer:[
          {name:"大型企业"},
          {name:"中型企业"},
          {name:"小型企业"},
          {name:"微型企业"},
        ],
        compenyFz:[
          {name:"初创期"},
          {name:"成长期"},
          {name:"高速发展期"},
          {name:"成熟期"},
          {name:"转型期"},
        ],
        zyList:[],
        zyListChildren1:[],
        zyListChildren2:[],
        zyListChildren3:[],
        hyListChildren1:[],
        hyListChildren2:[],
        hyListChildren3:[],
        defaultImg:require('../../../assets/funsIcon/userTX.png'),
        hyList2:[
          {name:"人力资源管理"},
          {name:"战略规划"},
          {name:"商业模式"},
          {name:"公司治理"},
          {name:"财税管理"},
          {name:"市场营销"},
          {name:"供应链管理"},
          {name:"生产管理"},
          {name:"培训教育"},
          {name:"企业信息化"},
          {name:"其他"},
        ],
        custIndustry2Bool:true,
        ageValue:"",
        workYearsValue:"",
        industryB:"",
        industryB1:"",
        selectMajor1Bool:true,
        selectMajor2Bool:true,
        selectMajor3Bool:true,
      }
    },
    components: {
      myUpload,
    },
    created () {
      getCity1().then(res => {
        if (res.data.code === 200) {
          this.adress1=res.data.data;
        }
      });
      hyList().then(res => {
        if (res.data.code === 200) {
          this.hyList=res.data.data;
        }
      });
      zyList().then(res => {
        if (res.data.code === 200) {
          this.zyList=res.data.data;
          for(var i=0;i<this.zyList.length;i++){
            if(this.zyList[i].INDUSTRY_ID==this.aggregate.specialityMajor1){
              zyListChildren({pid:this.zyList[i].INDUSTRY_ID}).then(res => {
                if (res.data.code === 200) {
                  this.zyListChildren1=res.data.data;
                }
              });
            }
            if(this.zyList[i].INDUSTRY_ID==this.aggregate.specialityMajor2){
              zyListChildren({pid:this.zyList[i].INDUSTRY_ID}).then(res => {
                if (res.data.code === 200) {
                  this.zyListChildren1=res.data.data;
                }
              });
            }
            if(this.zyList[i].INDUSTRY_ID==this.aggregate.specialityMajor3){
              zyListChildren({pid:this.zyList[i].INDUSTRY_ID}).then(res => {
                if (res.data.code === 200) {
                  this.zyListChildren1=res.data.data;
                }
              });
            }
          }
        }
      });
    },
    mounted () {
      this.primaryResourcesFun(); 
      this.mountedInfo();
    },
    methods: {
      mountedInfo () {
        let user = JSON.parse(sessionStorage.getItem("user"));
        // 获取头像
        getMyInfo({ "userId": user.userId }).then(res => {
          if (res.data.code === 200) {
            this.avatar = res.data.data.avatar
          }
        });
        // 获取个人信息
        getTalent(user.roleId).then(res => {
            if (res.data.code == 200) {
              this.aggregate=res.data.data[0]
              for(var i=0;i<this.zyList.length;i++){
                if(this.zyList[i].INDUSTRY_ID==this.aggregate.specialityMajor1){
                  zyListChildren({pid:this.aggregate.specialityMajor1}).then(res => {
                    if (res.data.code === 200) {
                      this.zyListChildren1=res.data.data;
                      for(var i=0;i<this.zyListChildren1.length;i++){
                        if( this.zyListChildren1[i].INDUSTRY_ID==this.aggregate.majorDetail1){
                          this.aggregate.majorDetail1=this.zyListChildren1[i].INDUSTRY_NAME
                        }
                      }
                    }
                  });
                  this.aggregate.specialityMajor1=this.zyList[i].INDUSTRY_NAME
                }
                if(this.zyList[i].INDUSTRY_ID==this.aggregate.specialityMajor2){
                  zyListChildren({pid:this.aggregate.specialityMajor2}).then(res => {
                    if (res.data.code === 200) {
                      this.zyListChildren2=res.data.data;
                      for(var i=0;i<this.zyListChildren2.length;i++){
                        if( this.zyListChildren2[i].INDUSTRY_ID==this.aggregate.majorDetail2){
                          this.aggregate.majorDetail2=this.zyListChildren2[i].INDUSTRY_NAME
                        }
                      }
                    }
                  });
                  this.aggregate.specialityMajor2=this.zyList[i].INDUSTRY_NAME
                }
                if(this.zyList[i].INDUSTRY_ID==this.aggregate.specialityMajor3){
                  zyListChildren({pid:this.aggregate.specialityMajor3}).then(res => {
                    if (res.data.code === 200) {
                      this.zyListChildren3=res.data.data;
                      for(var i=0;i<this.zyListChildren1.length;i++){
                        if( this.zyListChildren3[i].INDUSTRY_ID==this.aggregate.majorDetail3){
                          this.aggregate.majorDetail3=this.zyListChildren3[i].INDUSTRY_NAME
                        }
                      }
                    }
                  });
                  this.aggregate.specialityMajor3=this.zyList[i].INDUSTRY_NAME
                }
              }
              this.selectCity(this.aggregate.province)
              this.talentId=res.data.data[0].talentId
              const that = this;
              if(that.talentId!=''){
                getTalentWork(that.talentId).then(res => {
                  that.workExp = res.data.data
                  console.log(that.workExp)
                  for(let j in this.hyList){
                    if (that.proExp == this.hyList[j].itemName) {
                      htListChildren({ "itemId": this.hyList[j].dictItemId }).then(res => {
                        if (res.data.code === 200) {
                          this.industryB1 = res.data.data
                        }
                      })
                    }
                  }
                });
                getProject(that.talentId).then(res => {
                  that.proExp = res.data.data
                  for(let j in this.hyList){
                    if (that.proExp == this.hyList[j].itemName) {
                      htListChildren({ "itemId": this.hyList[j].dictItemId }).then(res => {
                        if (res.data.code === 200) {
                          this.industryB = res.data.data
                        }
                      })
                    }
                  }
                });
                getEdu(that.talentId).then(res => {
                  that.eduExp = res.data.data
                });
                getTrain(that.talentId).then(res => {
                  that.trainExp = res.data.data
                });
                getQulification(that.talentId).then(res => {
                  that.qulificationExp = res.data.data
                });
              }
              if(this.aggregate.age){
                this.ageValue=this.getAge(this.aggregate.age)
              }
              if(this.aggregate.workYears){
                this.workYearsValue=this.getAge(this.aggregate.workYears)
              }
            }
        })
        
      },
      primaryResourcesFun () {
        resources().then(res => {
          if (res.data.code === 200) {
            this.primaryResources = res.data.data
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
      update1(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        this.aggregate.talentId=this.talentId
        putTalent(this.talentId,this.aggregate).then(res => {
          if (res.data.code == 200) {
            this.$message({
                type: 'success',
                message: res.data.msg
            });
            getTalent(user.roleId).then(res => {
                if (res.data.code == 200) {
                  this.aggregate=res.data.data[0]
                  this.talentId=res.data.data[0].talentId
                  if(this.aggregate.age){
                    this.ageValue=this.getAge(this.aggregate.age)
                  }
                  if(this.aggregate.workYears){
                    this.workYearsValue=this.getAge(this.aggregate.workYears)
                  }
                }
            });
          }
        })
        this.personBool=!this.personBool;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
      },
      update2(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        if(this.workIndex===''){
          this.work.talentId=this.talentId
          talentWork(this.work).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.work={
                corpName:"",
                industry:"",
                industryDetail:"",
                corpNature:"",
                corpScale:"",
                devStage:"",
                topPosition:"",
                startDt:"",
                endDt:"",
                workDesc:"",
                achievement:""
              },
              getTalentWork(this.talentId).then(res => {
                this.workExp = res.data.data
              });
            }
          })
        }else{
          putTalentWork(this.work.expId,this.work).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.work={
                corpName:"",
                industry:"",
                corpNature:"",
                corpScale:"",
                devStage:"",
                topPosition:"",
                startDt:"",
                endDt:"",
                workDesc:"",
                achievement:""
              },
              getTalentWork(this.talentId).then(res => {
                this.workExp = res.data.data
              });
            }
          })
        }
        this.personBool=false;
        this.personWork=!this.personWork;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
        this.workIndex='';
      },
      update3(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        if(this.proIndex===''){
          this.pro.talentId=this.talentId
          addProject(this.pro).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.pro={
                projectName:"",
                jobName:"",
                startDt:"",
                endDt:"",
                custDemand:"",
                projectCost:"",
                serIntro:"",
                jobDuty:"",
                achievement:"",
                custcoName:"",
                custIndustry:"",
                industryDetail:"",
                custcoNature:"",
                custcoScale:"",
                custdevStage:"",
              },
              getProject(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.proExp = res.data.data
                  }
              });
            }
          })
        }else{
          updateProject(this.pro.proexpId,this.pro).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.pro={
                projectName:"",
                jobName:"",
                startDt:"",
                endDt:"",
                custDemand:"",
                projectCost:"",
                serIntro:"",
                jobDuty:"",
                achievement:"",
                custcoName:"",
                custIndustry:"",
                custcoNature:"",
                custcoScale:"",
                custdevStage:"",
              },
              getProject(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.proExp = res.data.data
                  }
              });
            }
          })
        }
        this.personBool=false;
        this.personWork=false;
        this.personPro=!this.personPro;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
      },
      update4(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        if(this.eduIndex===''){
          this.edu.talentId=this.talentId
          addEdu(this.edu).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.edu={
                schoolName:"",
                schoolMajor:"",
                eduDegree:"",
                unifiedBachelor:"",
                startDt:"",
                endDt:"",
              },
              getEdu(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.eduExp = res.data.data
                  }
              });
            }
          })
        }else{
          updateEdu(this.edu.eduId,this.edu).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.edu={
                schoolName:"",
                schoolMajor:"",
                eduDegree:"",
                unifiedBachelor:"",
                startDt:"",
                endDt:"",
              },
              getEdu(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.eduExp = res.data.data
                  }
              });
            }
          })
        }
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=!this.personEducation
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
      },
      update5(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        if(this.trainIndex===''){
          this.train.talentId=this.talentId
          addTrain(this.train).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.train={
                schoolName:"",
                schoolMajor:"",
                eduDegree:"",
                unifiedBachelor:"",
                startDt:"",
                endDt:"",
              },
              getTrain(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.trainExp = res.data.data
                  }
              });
            }
          })
        }else{
          updateTrain(this.train.trainId,this.train).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.train={
                schoolName:"",
                schoolMajor:"",
                eduDegree:"",
                unifiedBachelor:"",
                startDt:"",
                endDt:"",
              },
              getTrain(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.trainExp = res.data.data
                  }
              });
            }
          })
        }
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=!this.personTrain
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
      },
      update6(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        this.aggregate.talentId=this.talentId
        putTalent(this.talentId,this.aggregate).then(res => {
          if (res.data.code == 200) {
            this.$message({
                type: 'success',
                message: res.data.msg
            });
            this.mountedInfo();
          }
        })
        this.personMajor=!this.personMajor
      },
      update7(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        if(this.qulificationIndex===''){
          this.qulification.talentId=this.talentId
          addQulification(this.qulification).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.qulification={
                credName:"",
                gainDt:"",
                qualName:"",
              },
              getQulification(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.qulificationExp = res.data.data
                  }
              });
            }
          })
        }else{
          updateQulification(this.qulification.qualfiId,this.qulification).then(res => {
            if (res.data.code == 200) {
              this.$message({
                  type: 'success',
                  message: res.data.msg
              });
              this.qulification={
                credName:"",
                gainDt:"",
                qualName:"",
              },
              getQulification(this.talentId).then(res => {
                  if (res.data.code == 200) {
                    this.qulificationExp = res.data.data
                  }
              });
            }
          })
        }
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=!this.personQualifications
        this.personDesire=false;
        this.personEvaluate=false;
      },
      update8(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        this.aggregate.talentId=this.talentId
        putTalent(this.talentId,this.aggregate).then(res => {
          if (res.data.code == 200) {
            this.$message({
                type: 'success',
                message: res.data.msg
            });
            getTalent(user.roleId).then(res => {
                if (res.data.code == 200) {
                  this.aggregate=res.data.data[0]
                  this.talentId=res.data.data[0].talentId
                }
            });
          }
        })
        this.personDesire=!this.personDesire
      },
      update9(){
        let user = JSON.parse(sessionStorage.getItem("user"));
        this.aggregate.talentId=this.talentId
        putTalent(this.talentId,this.aggregate).then(res => {
          if (res.data.code == 200) {
            this.$message({
                type: 'success',
                message: res.data.msg
            });
            getTalent(user.roleId).then(res => {
                if (res.data.code == 200) {
                  this.aggregate=res.data.data[0]
                  this.talentId=res.data.data[0].talentId
                }
            });
          }
        })
        this.personEvaluate=!this.personEvaluate
      },
      openDrawer1(){
        this.personBool=!this.personBool;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
      },
      openDrawer2(i){
        this.personBool=false;
        this.personWork=!this.personWork;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
        if(i>=0){
          this.workIndex=i;
          this.work=this.workExp[i];
        }else{
          this.workIndex=''
        }
      },
      openDrawer3(index){
        this.personBool=false;
        this.personWork=false;
        this.personPro=!this.personPro;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
        if(index>=0){
          this.proIndex=index;
          this.pro=this.proExp[index];
        }
      },
      openDrawer4(i){
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=!this.personEducation;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
        if(i>=0){
          this.eduIndex=i;
          this.edu=this.eduExp[i];
        }
      },
      openDrawer5(i){
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=!this.personTrain;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
        if(i>=0){
          this.trainIndex=i;
          this.train=this.trainExp[i];
        }
      },
      openDrawer6(){
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=!this.personWork;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=false;
      },
      openDrawer7(i){
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=!this.personQualifications;
        this.personDesire=false;
        this.personEvaluate=false;
        if(i>=0){
          this.qulificationIndex=i;
          this.qulification=this.qulificationExp[i];
        }
      },
      openDrawer8(){
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=!this.personDesire;
        this.personEvaluate=false;
      },
      openDrawer9(){
        this.personBool=false;
        this.personWork=false;
        this.personPro=false;
        this.personEducation=false;
        this.personTrain=false;
        this.personMajor=false;
        this.personQualifications=false;
        this.personDesire=false;
        this.personEvaluate=!this.personEvaluate;
      },
      clickMenu(){
        this.$router.push('editFillInfo')
      },
      selectCity(value){
        for(var i=0;i<this.adress1.length;i++){
          if(this.adress1[i].itemName==value){
            getCity2({ "itemId": this.adress1[i].dictItemId}).then(res => {
              if (res.data.code === 200) {
                this.adress2 = res.data.data
              }
            })
          }
        }
      },
      selectMajor1(value){
        if(value===12){
          this.aggregate.majorDetail1=""
          this.selectMajor1Bool=false;
          this.$nextTick(() => {
            this.$refs.selectMajor1Id.$refs.input.focus()
          });
        }else{
          this.aggregate.majorDetail1=""
          this.selectMajor1Bool=true;
          zyListChildren({pid:value}).then(res => {
            if (res.data.code === 200) {
              this.zyListChildren1=res.data.data;
            }
          });
        }
      },
      selectMajor2(value){
        if(value===12){
          this.aggregate.majorDetail2=""
          this.selectMajor2Bool=false;
          this.$nextTick(() => {
            this.$refs.selectMajor2Id.$refs.input.focus()
          });
        }else{
          this.aggregate.majorDetail2=""
          this.selectMajor1Bool=true;
          zyListChildren({pid:value}).then(res => {
            if (res.data.code === 200) {
              this.zyListChildren2=res.data.data;
            }
          });
        }
      },
      selectMajor3(value){
        if(value===12){
          this.aggregate.majorDetail3=""
          this.selectMajor3Bool=false;
          this.$nextTick(() => {
            this.$refs.selectMajor3Id.$refs.input.focus()
          });
        }else{
          this.aggregate.majorDetail3=""
          this.selectMajor3Bool=true;
          zyListChildren({pid:value}).then(res => {
            if (res.data.code === 200) {
              this.zyListChildren3=res.data.data;
            }
          });
        }
      },
      selectIndustry1(value){
        this.aggregate.industryDetail1=""
        for(var i=0;i<this.hyList.length;i++){
          if(this.hyList[i].itemName==value){
            htListChildren({itemId:this.hyList[i].dictItemId}).then(res => {
              if (res.data.code === 200) {
                this.hyListChildren1=res.data.data;
              }
            });
          }
        }
      },
      selectIndustry2(value){
        this.aggregate.industryDetail2=""
        for(var i=0;i<this.hyList.length;i++){
          if(this.hyList[i].itemName==value){
            htListChildren({itemId:this.hyList[i].dictItemId}).then(res => {
              if (res.data.code === 200) {
                this.hyListChildren2=res.data.data;
              }
            });
          }
        }
      },
      selectIndustry3(value){
        this.aggregate.industryDetail3=""
        for(var i=0;i<this.hyList.length;i++){
          if(this.hyList[i].itemName==value){
            htListChildren({itemId:this.hyList[i].dictItemId}).then(res => {
              if (res.data.code === 200) {
                this.hyListChildren3=res.data.data;
              }
            });
          }
        } 
      },
      selectCustIndustry2(value){
        if(value=="其他"){
          this.custIndustry2Bool=!this.custIndustry2Bool
          this.$nextTick(() => {
            this.$refs.custIndustry2Id.$refs.input.focus()
          });
        }
      },
      getAge(teacherBirthday){
        let birthdays = new Date(teacherBirthday.replace(/-/g, "/"));
        let d = new Date();
        let age =d.getFullYear() - birthdays.getFullYear() - (d.getMonth() < birthdays.getMonth() || (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
            ? 1
            : 0);
         return age;
      },
      changeCustIndustry(value){
        for (let j in this.hyList) {
          if (value == this.hyList[j].itemName) {
            htListChildren({ "itemId": this.hyList[j].dictItemId }).then(res => {
              if (res.data.code === 200) {
                this.industryB = res.data.data
              }
            })
          }
        }
      },
      changeCustIndustry2(value){
        for (let j in this.hyList) {
          if (value == this.hyList[j].itemName) {
            htListChildren({ "itemId": this.hyList[j].dictItemId }).then(res => {
              if (res.data.code === 200) {
                this.industryB1 = res.data.data
              }
            })
          }
        }
      },
    },
  }
</script>
<style scoped>
  .perfect-user-info{
    padding-top: 3rem;
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
    padding-top: 1.5rem;
  }
  .left-div-par>div>p{
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  .head-portrait-par{
    padding-left: 6.5rem;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 1rem;
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
    width: 8rem;
    height: 2rem;
    border-radius: 0.2rem;
    border: 1px solid #999;
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 17.5rem;
    transform: translateY(-1rem);
  }
  .fixed-div-par{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    /* padding-left: 2rem; */
    width: auto;
  }
  .fixed-div{
    width: auto;
    height: auto;
    margin: 0.5rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .fixed-div p{
    white-space: nowrap;
    margin-right: 0.5rem;
    text-align: left;
    min-width: 7rem;
  }
  .surface-content-par{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .surface-edit{
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  .surface-content-par img{
    width: 8rem;
    height: 8rem;
  }
  .surface-userInfo{
    margin-left: 2rem;
  }
  .surface-userInfo>div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .surface-userInfo>div+div{
    margin-top: 0.9rem;
  }
  .inline-block-span{
    display: inline-block;
    border: 1px solid #9e0000;
    border-radius: 1rem;
    padding: 0 1rem;
    font-size: 14px;
    color: #9e0000;
    transform: translateX(2rem);
  }
  .surface-userInfo h3{
    font-size: 34px;
  }
  .surface-userInfo span+span::before{
    content: '|';
    display: inline-block;
    margin: 0 0.75rem;
    color: #999;
  }
  .surface-userInfo /deep/ .el-icon-mobile-phone,
  .surface-userInfo /deep/ .el-icon-message{
    font-size: 30px;
  }
  .surface-userInfo>div div+div{
    margin-left: 0.5rem;
  }
  .surface-userInfo>div div{
    display: flex;
    align-items: flex-end;
  }
  .surface-userInfo>div div span{
    margin: 0 1rem;
  }
  .opacity0{
    opacity: 1;
  }
  .personBool-par{
    background: #fafafa;
    margin-right: 1.5rem;
    padding: 1.5rem;
  }
  .not-first-par{
    margin-top: 3rem;
  }
  .personBool-par>p{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .btns-par{
    width: 31.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .experience-all-par{
    flex-direction: column;
    margin-top: 3rem;
  }
  .experience-all-par>p{
    font-size: 20px;
    font-weight: 600;
  }
  .experience-par{
    width: 100%;
    padding-right: 1rem;
    box-sizing: border-box;
    position: relative;
  }
  .experience-par div{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1rem;
    color: #555;
  }
  .experience-par div span{
    display: inline-block;
    white-space: nowrap;
    color: #444;
  }
  .experience-par>.font-18>span{
    font-size: 20px;
  }
  .experience-par button,.workExpBtn{
    width: 100%;
    margin-top: 2rem;
    height: 40px;
    border: 1px dashed #666;
    background: #fff;
    cursor: pointer;
  }
  .experience-par{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .experience-par .width100{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .experience-par .width50{
    width: 50%;
    display: flex;
    align-items: center;
  }
  .experience-par .experience-edit{
    margin-top: 1rem;
  }
  .experience-edit{
    position: absolute;
    top: 0rem;
    right: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
  }
  .experience-edit /deep/ .el-icon-edit-outline{
    margin-right: 0.25rem;
  }
  .personMajorClass .fixed-div /deep/ .el-select{
    width: 12rem;
  }
  .personMajorClass .fixed-div /deep/ .el-input{
    width:100%
  }
  .educationClass>div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .fixed-div .more-p,.experience-par .more-p{
    min-width: 10rem;
  }
  .left-div-par /deep/ input,.left-div-par /deep/ textarea{
    border-radius: 0;
    margin-left: 0;
  }
  .left-div-par /deep/ input:hover,.left-div-par /deep/ input:focus,.left-div-par /deep/ .is-checked,.left-div-par /deep/ textarea:hover,.left-div-par /deep/ textarea:focus{
    border-color: #9e0000;
  }
  .left-div-par /deep/ .is-checked span{
    color: #9e0000;
  }
  .left-div-par /deep/ .is-checked .el-radio__inner{
    background-color: #9e0000;
    border-color: #9e0000;
  }
  .left-div-par /deep/ .el-input,.left-div-par /deep/ textarea{
    width: 24rem;
  }
  .fixed-div-selectPar{
    display: flex;
  }
  .fixed-div-select /deep/ .el-input,.fixed-div-select /deep/ textarea{
    width: 12rem;
  }
  .left-div-par /deep/ .el-button{
    margin: 0;
  }
  .left-div-par /deep/ .el-button+.el-button{
    margin-left: 10px;
    border: 1px solid #666;
    background: #fff;
    color: #666;
  }
  .left-div-par /deep/ .el-button:hover{
    background: #fff !important;
    border-color:#666 !important;
    color: #666 !important;
  }
  .left-div-par /deep/ .el-button:first-child{
    background: #9e0000 !important;
    color: #fff !important;
    border-color: #9e0000 !important;
  }
  .pwoerClass{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .pwoerClass div{
    display: block;
    width: 50%;
  }
  .fixed-div-selectPar /deep/ .el-select{
    margin: 0;
  }
  .left-div-par /deep/ .selectMajor1Class{
    width: 12rem !important;
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
  .left-div-par /deep/ .el-input__inner{
    width: 100%;
  }
</style>