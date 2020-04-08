 <template>
    <div class="我的信息">
        <p class="gongxiangrencai_title">我的信息</p>
        <div class="info">
            <div class="infoleft">
                <div class="img_lv">
                    <div class="img_box">
                      <a class="submitImgAsPersonbtn" @click="toggleShow"></a>
                        <my-upload field="img" @crop-success="cropSuccess" v-model="show" :width="200" :height="200" img-format="png" :size="size"></my-upload>
                      <!-- <span><img src="../../../assets/imgs/profile_photo.png" alt=""></span> -->
                        <span>
                            <img :src="avatar" style="width:60px;height:60px;border-radius:30px;" alt="" >
                        </span>
                    </div>
                    <span>
                        <!-- <i>个人会员</i> -->
                        <i>{{this.userTypeName}}</i>
                    </span>
                </div>
                <div class="name">
                    <h4>欢迎您:</h4>
                    <h3><span>{{dataList.title}}</span><img src="@/assets/imgs/pic1.png" alt=""></h3>
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
                    <div class='complate_percent_part3 part'><span><img src="@/assets/imgs/complete_percent.png" alt="">
                        <span style='color:#bbbbbb' @click="getMsg">&nbsp;&nbsp;注册信息完善</span></span>
                        <el-drawer
                            title="注册信息完善"
                            :visible.sync="drawer"
                            :direction="direction"
                            :before-close="handleClose"
                            size='100%'>
                            <el-tabs type="border-card" tab-position="left" style="height:auto;">
                                <el-tab-pane label="基本信息">
                                    <el-form ref="form" :model="form" label-width="80px" class="gongxiangrencai" >
                                        <el-form-item label="">
                                            <div>
                                                <span>姓名</span><el-input v-model="form.corporateName" placeholder="请输入真实姓名"></el-input>
                                            </div>
                                            <div>
                                                <span>年龄</span><el-input v-model="form.corporateAdress" placeholder="请输入年龄"></el-input>
                                            </div>
                                            <div>
                                                <span>身份证号</span><el-input v-model="form.corporatePhone" placeholder="请输入身份证号"></el-input>
                                            </div>
                                            <div>
                                                <span>省份</span><el-input v-model="form.corporateEmail" placeholder="请输入省份"></el-input>
                                            </div>
                                            <div>
                                                <span>城市</span><el-input v-model="form.corporateEmail" placeholder="请输入省份"></el-input>
                                            </div>
                                            <div>
                                                <span>手机号</span><el-input v-model="form.corporateWeb" placeholder="请输入手机号"></el-input>
                                            </div>
                                            <div>
                                                <span>注册邮箱</span><el-input v-model="form.corporaterRegisterMoney" placeholder="请输入注册邮箱"></el-input>
                                            </div>
                                            <div>
                                                <span>微信号</span><el-input v-model="form.corporaterRegisterMoney" placeholder="请输入微信号"></el-input>
                                            </div>
                                            <div>
                                                <span>QQ号</span><el-input v-model="form.corporaterManagement" placeholder="请输入QQ号"></el-input>
                                            </div>
                                            <div>
                                                <span>微博账号</span><el-input v-model="form.corporaterRegisterType" placeholder="请输入微博账号"></el-input>
                                            </div>
                                            <div>
                                                <span>工作年限</span><el-input v-model="form.corporaterCredit" placeholder="请输入工作年限"></el-input>
                                            </div>
                                            <div>
                                                <span>咨询年限</span><el-input v-model="form.corporaterIdentification" placeholder="请输入咨询年限"></el-input>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <div>
                                                <span>性别</span>
                                                <el-select v-model="form.region" placeholder="请选择性别">
                                                    <el-option label="" value="">男</el-option>
                                                    <el-option label="" value="">女</el-option>
                                                </el-select>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <div>
                                                <span>工作状态</span>
                                                <el-select v-model="form.region" placeholder="请选择工作状态">
                                                    <!-- 后台获取数据在渲染出来 -->
                                                    <el-option label="" value="">在职-咨询行业</el-option>
                                                    <el-option label="" value="">在职-其他行业</el-option>
                                                    <el-option label="" value="">自有职业-咨询业务为主</el-option>
                                                    <el-option label="" value="">自有职业-其他业务为主</el-option>
                                                    <el-option label="" value="">企业家-咨询行业</el-option>
                                                    <el-option label="" value="">企业家-其他行业</el-option>
                                                    <el-option label="" value="">短期离职</el-option>
                                                    <el-option label="" value="">其他</el-option>
                                                </el-select>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="">
                                            <div>
                                                <span>工作描述</span>
                                                <el-input type="textarea" placeholder="请输入工作描述"></el-input>
                                            </div>
                                        </el-form-item>
                                        <el-button>信息提交</el-button>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="教育经历">
                                    <el-form :model="formData3" :inline="true" ref="formData3" label-width="65px" size="medium">
                                        <div class="gongxiangrencai_xz">
                                            <div style="padding: 10px 0px 10px 10px;">教育经历</div>
                                            <div>
                                                <div>学校名称</div>
                                                <div>开始时间</div>
                                                <div>结束时间</div>
                                                <div>所学专业</div>
                                                <div>是否统招</div>
                                                <div>学历</div>
                                            </div>
                                            <el-row v-for="(item,index) in formData3.powerAttrList" :key="index" style="border-bottom: 1px solid #f0f0f0;">
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入学校名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入所学专业"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-select v-model="form.region" placeholder="请选择">
                                                        <el-option label="" value="">是</el-option>
                                                        <el-option label="" value="">否</el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-select v-model="form.region" placeholder="请选择">
                                                        <el-option label="" value="">中技</el-option>
                                                        <el-option label="" value="">高中</el-option>
                                                        <el-option label="" value="">中专</el-option>
                                                        <el-option label="" value="">大专</el-option>
                                                        <el-option label="" value="">本科</el-option>
                                                        <el-option label="" value="">硕士</el-option>
                                                        <el-option label="" value="">MBA</el-option>
                                                        <el-option label="" value="">EMBA</el-option>
                                                        <el-option label="" value="">博士</el-option>
                                                        <el-option label="" value="">其他</el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-button type="danger" v-if="formData3.powerAttrList.length > 1" size="medium" @click="removeRow(index)">删除</el-button>
                                                </el-form-item>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
                                        </el-row>
                                        <div class="gongxiangrencai_xz gongxiangrencai_xz_peixun">
                                            <div style="padding: 10px 0px 10px 10px;">培训经历</div>
                                            <div>
                                                <div>开始时间</div>
                                                <div>结束时间</div>
                                                <div>培训机构</div>
                                                <div>培训课程</div>
                                            </div>
                                            <el-row v-for="(item,index) in formData3.powerAttrList2" :key="index" style="border-bottom: 1px solid #f0f0f0;">
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入培训机构名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入培训课程名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-button type="danger" v-if="formData3.powerAttrList2.length > 1" size="medium" @click="removeRow(index)">删除</el-button>
                                                </el-form-item>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
                                        </el-row>
                                        <div class="gongxiangrencai_xz gongxiangrencai_xz_peixunZy">
                                            <div style="padding: 10px 0px 10px 10px;">培训专业能力经历</div>
                                            <div>
                                                <div>擅长专业</div>
                                                <div>擅长行业</div>
                                                <div>操作</div>
                                            </div>
                                            <el-row v-for="(item,index) in formData3.powerAttrList3" :key="index" style="border-bottom: 1px solid #f0f0f0;">
                                                <el-form-item label="">
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-button type="danger" v-if="formData3.powerAttrList3.length > 1" size="medium" @click="removeRow(index)">删除</el-button>
                                                </el-form-item>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
                                        </el-row>
                                        <div class="gongxiangrencai_xz">
                                            <div style="padding: 10px 0px 10px 10px;">工作经验</div>
                                            <div>
                                                <div>公司名称</div>
                                                <div>公司性质</div>
                                                <div>公司规模</div>
                                                <div>最高职位</div>
                                                <div>操作</div>
                                            </div>
                                            <el-row v-for="(item,index) in formData3.powerAttrList4" :key="index" style="border-bottom: 1px solid #f0f0f0;">
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入学校名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入所学专业"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-select v-model="form.region" placeholder="请选择">
                                                        <el-option label="" value="">是</el-option>
                                                        <el-option label="" value="">否</el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-select v-model="form.region" placeholder="请选择">
                                                        <el-option label="" value="">中技</el-option>
                                                        <el-option label="" value="">高中</el-option>
                                                        <el-option label="" value="">中专</el-option>
                                                        <el-option label="" value="">大专</el-option>
                                                        <el-option label="" value="">本科</el-option>
                                                        <el-option label="" value="">硕士</el-option>
                                                        <el-option label="" value="">MBA</el-option>
                                                        <el-option label="" value="">EMBA</el-option>
                                                        <el-option label="" value="">博士</el-option>
                                                        <el-option label="" value="">其他</el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-button type="danger" v-if="formData3.powerAttrList4.length > 1" size="medium" @click="removeRow(index)">删除</el-button>
                                                </el-form-item>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="secendAddDrawer">新增属性</el-button>
                                        </el-row>
                                        <el-drawer
                                            title="新增知识产权"
                                            :visible.sync="drawer2"
                                            :direction="direction"
                                            :before-close="handleClose2"
                                            size='50%'
                                            custom-class="drawer2">
                                            <el-form-item label="" class="patentForm">
                                                <div>
                                                    <span>公司名称</span><el-input v-model="patentForm.patentName" placeholder="请输入公司名称"></el-input>
                                                </div>
                                                <div>
                                                    <span>公司性质</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择公司性质">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">国有企业</el-option>
                                                        <el-option label="" value="">集体企业</el-option>
                                                        <el-option label="" value="">私营企业</el-option>
                                                        <el-option label="" value="">台资企业</el-option>
                                                        <el-option label="" value="">外商独资</el-option>
                                                        <el-option label="" value="">政府机构</el-option>
                                                        <el-option label="" value="">事业单位</el-option>
                                                        <el-option label="" value="">公益组织</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>公司规模</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择公司性质">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">大型企业</el-option>
                                                        <el-option label="" value="">中型企业</el-option>
                                                        <el-option label="" value="">小型企业</el-option>
                                                        <el-option label="" value="">微型企业</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>发展阶段</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择公司性质">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">初创期</el-option>
                                                        <el-option label="" value="">成长期</el-option>
                                                        <el-option label="" value="">高速发展期</el-option>
                                                        <el-option label="" value="">成熟期</el-option>
                                                        <el-option label="" value="">转型期</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>所属行业</span><el-input v-model="patentForm.patentName" placeholder="请输入公司名称"></el-input>
                                                </div>
                                                <div>
                                                    <span>开始时间</span>
                                                    <!-- 
                                                        v-model="" -->
                                                    <el-date-picker
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </div>
                                                <div>
                                                    <span>结束世间</span>
                                                    <!-- 
                                                        v-model="" -->
                                                    <el-date-picker
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>工作描述</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>工作业绩</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;" class="drawer2MyButton2">
                                                    <el-button>保存</el-button>
                                                    <el-button>取消</el-button>
                                                </div>
                                            </el-form-item>
                                        </el-drawer>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="项目经验">
                                    <el-form :model="formData3" :inline="true" ref="formData3" label-width="65px" size="medium">
                                        <div class="gongxiangrencai_xz gongxiangrencai_xz_peixun">
                                            <div style="padding: 10px 0px 10px 10px;">培训经历</div>
                                            <div>
                                                <div>开始时间</div>
                                                <div>结束时间</div>
                                                <div>培训机构</div>
                                                <div>培训课程</div>
                                                <div>操作</div>
                                            </div>
                                            <el-row v-for="(item,index) in formData3.powerAttrList2" :key="index" style="border-bottom: 1px solid #f0f0f0;">
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入培训机构名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入培训课程名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-button type="danger" v-if="formData3.powerAttrList2.length > 1" size="medium" @click="removeRow(index)">删除</el-button>
                                                </el-form-item>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="secendAddDrawer2">新增属性</el-button>
                                        </el-row>
                                        <el-drawer
                                            title="新增知识产权"
                                            :visible.sync="drawer3"
                                            :direction="direction"
                                            :before-close="handleClose2"
                                            size='50%'
                                            custom-class="drawer2">
                                            <el-form-item label="" class="patentForm">
                                                <div>
                                                    <span>公司性质</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择公司性质">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">国有企业</el-option>
                                                        <el-option label="" value="">集体企业</el-option>
                                                        <el-option label="" value="">私营企业</el-option>
                                                        <el-option label="" value="">台资企业</el-option>
                                                        <el-option label="" value="">外商独资</el-option>
                                                        <el-option label="" value="">政府机构</el-option>
                                                        <el-option label="" value="">事业单位</el-option>
                                                        <el-option label="" value="">公益组织</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>公司规模</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择公司性质">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">大型企业</el-option>
                                                        <el-option label="" value="">中型企业</el-option>
                                                        <el-option label="" value="">小型企业</el-option>
                                                        <el-option label="" value="">微型企业</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>发展阶段</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择公司性质">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">初创期</el-option>
                                                        <el-option label="" value="">成长期</el-option>
                                                        <el-option label="" value="">高速发展期</el-option>
                                                        <el-option label="" value="">成熟期</el-option>
                                                        <el-option label="" value="">转型期</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>项目类型</span>
                                                    <el-select v-model="patentForm.patentType" placeholder="请选择">
                                                        <!-- 后台获取数据在渲染出来 -->
                                                        <el-option label="" value="">人力资源管理</el-option>
                                                        <el-option label="" value="">战略规划</el-option>
                                                        <el-option label="" value="">商业模式</el-option>
                                                        <el-option label="" value="">公司治理</el-option>
                                                        <el-option label="" value="">财税管理</el-option>
                                                    </el-select>
                                                </div>
                                                <div>
                                                    <span>公司名称</span><el-input v-model="patentForm.patentName" placeholder="请输入公司名称"></el-input>
                                                </div>
                                                <div>
                                                    <span>项目名称</span><el-input v-model="patentForm.patentPerson" placeholder="请输入最高职位"></el-input>
                                                </div>
                                                <div>
                                                    <span>总费用</span><el-input v-model="patentForm.patentPerson" placeholder="请输入最高职位"></el-input>
                                                </div>
                                                <div>
                                                    <span>岗位名称</span><el-input v-model="patentForm.patentPerson" placeholder="请输入最高职位"></el-input>
                                                </div>
                                                <div>
                                                    <span>开始时间</span>
                                                    <!-- 
                                                        v-model="" -->
                                                    <el-date-picker
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </div>
                                                <div>
                                                    <span>结束时间</span>
                                                    <!-- 
                                                        v-model="" -->
                                                    <el-date-picker
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>客户需求</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>其他类型</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>服务简介</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>工作职责</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;">
                                                    <span>主要业绩</span>
                                                    <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                                </div>
                                                <div style="width:100%;" class="drawer2MyButton2">
                                                    <el-button>保存</el-button>
                                                    <el-button>取消</el-button>
                                                </div>
                                            </el-form-item>
                                        </el-drawer>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="服务意愿">
                                    <el-form ref="form" :model="form" label-width="80px" class="fuwuyiyuan" >
                                        <el-form-item label="">
                                            <div>
                                                <span>承接咨询项目</span>
                                                <!-- v-model="radio" -->
                                                <el-radio label="1">是</el-radio>
                                                <el-radio label="2">否</el-radio>
                                            </div>
                                            <div>
                                                <span>适应外地出差</span>
                                                <!-- v-model="radio" -->
                                                <el-radio label="1">是</el-radio>
                                                <el-radio label="2">否</el-radio>
                                            </div>
                                            <div>
                                                <span>意愿担当项目经理</span>
                                                <!-- v-model="radio" -->
                                                <el-radio label="1">是</el-radio>
                                                <el-radio label="2">否</el-radio>
                                            </div>
                                            <div>
                                                <span>意愿担当项目组员</span>
                                                <!-- v-model="radio" -->
                                                <el-radio label="1">是</el-radio>
                                                <el-radio label="2">否</el-radio>
                                            </div>
                                            <div>
                                                <span>独立完成项目</span>
                                                <!-- v-model="radio" -->
                                                <el-radio label="1">是</el-radio>
                                                <el-radio label="2">否</el-radio>
                                            </div>
                                            <div>
                                                <span>收费标准</span><el-input v-model="form.corporaterIdentification" placeholder="请输入收费标准（单位元）"></el-input>
                                            </div>
                                        </el-form-item>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="资质证书">
                                    <el-form :model="formData3" :inline="true" ref="formData3" label-width="65px" size="medium">
                                        <div class="gongxiangrencai_xz gongxiangrencai_xz_peixun3">
                                            <div style="padding: 10px 0px 10px 10px;">资质证书</div>
                                            <div>
                                                <div>资质名称</div>
                                                <div>证书名称</div>
                                                <div>获得时间</div>
                                                <div>操作</div>
                                            </div>
                                            <el-row v-for="(item,index) in formData3.powerAttrList2" :key="index" style="border-bottom: 1px solid #f0f0f0;">
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入培训机构名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-input v-model="item.shareholderName" placeholder="请输入培训机构名称"/>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-date-picker
                                                        v-model="item.shareholderActualCapital"
                                                        type="date"
                                                        placeholder="选择日期">
                                                    </el-date-picker>
                                                </el-form-item>
                                                <el-form-item label="">
                                                    <el-button type="danger" v-if="formData3.powerAttrList2.length > 1" size="medium" @click="removeRow(index)">删除</el-button>
                                                </el-form-item>
                                            </el-row>
                                        </div>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
                                        </el-row>
                                    </el-form>
                                </el-tab-pane>
                                <el-tab-pane label="资质证书">
                                    <el-form :model="formData3" :inline="true" ref="formData3" label-width="65px" size="medium">
                                        <el-form-item label="" class="thisIsMy">
                                            <span>自我评价</span>
                                            <el-input type="textarea" v-model="form.resourceDescribe"></el-input>
                                        </el-form-item>
                                        <el-row>
                                            <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
                                        </el-row>
                                    </el-form>
                                </el-tab-pane>
                            </el-tabs>
                        </el-drawer>
                    </div>
                </div>
            </div>
            <div class="inforight">
                <template v-for="(item,index) in iconList" >
                    <div v-if='index ===1 ' class="details">
                        <span v-for='item2 in item.cards'>
                            <img :src="item2.cardsrc" alt="">
                            {{item2.cardnum}}
                        </span>
                    </div>
                    <div v-else class="details" >
                        <div class="icon">
                           <img :src="item.iconSrc" alt="">
                        </div>
                        <h4>
                            <!-- 会员等级 -->
                            {{item.title}}
                        </h4>
                        <!-- <p>大合高级</p> -->
                        <p>{{item.content}}</p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { serverTender,file,changeAvatar,getMyInfo,calcCorpLevel,calcSplrLevel } from "@/components/api/api";
import myUpload from 'vue-image-crop-upload';

    export default {
        name:'my-infoP',
        props:{
           dataList:{
               type:Object,
            //    required:true,
           }
        },
        components:{
            "my-upload": myUpload
        },
       data() {
           return {
                iconList:this.dataList.simData.iconList1,
                userTypeName:"",
                imageUrl: '',
                avatar:"",
                show: false,
                size:2.1,
                integrity:"",
                drawer:false,
                direction: 'btt',
                form: {
                    name: '',
                    name2:"",
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formData3: {
                    powerAttrList: [{
                        shareholderName: '',
                        shareholderProportion: '',
                        shareholderCapital: '',
                        shareholderDate: '',
                        shareholderActualCapital: '',
                    }],
                    powerAttrList2: [{
                        shareholderName: '',
                        shareholderProportion: '',
                        shareholderCapital: '',
                        shareholderDate: '',
                        shareholderActualCapital: '',
                    }],
                    powerAttrList3: [{
                        shareholderName: '',
                        shareholderProportion: '',
                        shareholderCapital: '',
                        shareholderDate: '',
                        shareholderActualCapital: '',
                    }],
                    powerAttrList4: [{
                        shareholderName: '',
                        shareholderProportion: '',
                        shareholderCapital: '',
                        shareholderDate: '',
                        shareholderActualCapital: '',
                    }],
                },
                drawer2:false,
                patentForm:{
                    patentType:'',

                },
                drawer3:false,
           }
       },
       methods: {
           
            handleClose2(done) {
                this.$confirm('是否确认退出？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            secendAddDrawer(){
                this.drawer2=true;
            },
            secendAddDrawer2(){
                this.drawer2=true;
            },
            // 删除属性列
            removeRow(index) {
                this.formData3.powerAttrList.splice(index, 1);
            },
            addRow() {
                this.formData3.powerAttrList.push({
                    shareholderName: '',
                    shareholderProportion: '',
                    shareholderCapital: '',
                    shareholderDate: '',
                    shareholderActualCapital: '',
                });
            },
            handleClose(done) {
                let user = JSON.parse(sessionStorage.getItem("user"));
                getMyInfo({"userId": user.userId}).then(res => {
                    if (res.data.code === 200) {
                        this.integrity=res.data.data.integrity;
                    }
                })
                this.$confirm('是否确认退出？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            getMsg(){
                let user=JSON.parse(sessionStorage.getItem("user"));
                // this.$router.push('/complete/complete_two?shenfen='+user.role+'&tabSelect=1');
                this.drawer=true;
            },
            sutmitImgAsPersonHeader(){
                var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false; 
            　　if(ie){ 
            　　　　document.getElementById("file").click(); 
            　　}else{
            　　　　var a=document.createEvent("MouseEvents");//FF的处理 
            　　　　a.initEvent("click", true, true);  
            　　　　document.getElementById("file").dispatchEvent(a); 
            　　} 
            },

            toggleShow() {
                this.show = !this.show;
            },
            cropSuccess(imgDataUrl) {
                let user=JSON.parse(sessionStorage.getItem("user"));
                changeAvatar({"avatar": imgDataUrl,"userId": user.userId}).then(res => {
                    if(res.data.code==200){
                        this.$confirm(res.data.msg);
                        this.$router.push("funs")
                    }
                })
            }
       },
       mounted() {
                var _this=this
                let user=JSON.parse(sessionStorage.getItem("user"));
                this.integrityres=user.integrity;
                switch (user.role) {
                    case "0":
                        _this.userTypeName="企业会员"
                        break;
                    case "1":
                        _this.userTypeName="服务供应商"
                        break;
                    case "2":
                        _this.userTypeName="个人会员"
                        break;
                    default:
                        _this.userTypeName="共享人才"
                        break;
                }
                getMyInfo({"userId": user.userId}).then(res => {
                    if (res.data.code === 200) {
                        this.avatar=res.data.data.avatar
                    }
                })
       },
    }
</script>

<style scoped>
    .我的信息{
        background: #fff;
        box-sizing: border-box;
        padding: 25px;
        padding-bottom:50px;
        margin-bottom: 20px;
    }
    .gongxiangrencai_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100;
        margin-bottom: 30px;
    }
    .info{
        display: flex;
    }
    .infoleft{
        display: flex;
        padding-right: 30px;
        align-items: center;
        /* box-shadow: 1px 0 0 rgba(0,0,0,.1); */
        flex-shrink: 0;
    }
    .infoleft .img_lv {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }
    .infoleft .img_lv .img_box{
        width:60px;
        height: 60px;
        /* background: #9e0000; */
        border-radius: 50%;
        position: relative;

    }
    .infoleft .img_lv span i{
        font-style: normal;
        display:inline-block;
        padding: 2px 10px;
        background: #9e0000;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        margin-top: 5px;
    }
    .infoleft .name{
        font-family: HiraginoSansGB-W3;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        color: #333333;
    }
    .infoleft h3{
        font-size: 20px;
        font-weight: normal;
        color: #9e0100;
        margin: 5px 0;
    }
    .infoleft p{
        font-family: HiraginoSansGB-W3;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        color: #cccccc;
    }
    .infomiddle{
        display: flex;
        padding-right: 60px;
        padding-left:50px;
        align-items: center;
        box-shadow: 1px 0 0 rgba(0,0,0,.1);
        flex-shrink: 0;
    }
    .infomiddle .complate_percent .part{
        padding-bottom: 10px;
    }
    .infomiddle .complate_percent .complate_percent_part1{

    }
    .infomiddle .complate_percent .complate_percent_part2 { text-align: right}
    .infomiddle .complate_percent .complate_percent_part2 .num_small{ color:#9e0100}
    .infomiddle .complate_percent .complate_percent_part2 .num_large{
         text-align: right;
         font-size:34px;
         color:#9e0100;
         font-weight: 600;
     }
    .inforight{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 25px;
    }
    .inforight .details{
        margin-right: 30px;
    }
    .inforight .details:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;  
    }
    .inforight .details:nth-of-type(2) span {
        margin-left:10px;
        color:#999999;
    }
    .inforight .details .icon{
        height: 30px;
        width: 30px;
        /* background: red; */
    }
    .inforight .details h4{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        color: #333333;
        margin: 16px 0;
    }
    .inforight .details p{
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #999999;
    }
    .submitImgAsPersonbtn{
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
        .我的信息{
            padding: 8px;
        }
        .gongxiangrencai_title{
            margin:0 0 16px 0;
        }
        .info{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .info>div{
            margin-bottom: 16px;
        }
        .infoleft{
            width: 50%;
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
        .img_box+span>i{
            padding: 4px 6px !important;
        }
        .infomiddle{
            width: 50%;
            width: auto;
            padding: 0;
            margin: 0 auto;
            box-shadow: 0px 0 0 rgba(0,0,0,.1);
        }
        .inforight{
            width: 100%;
            box-sizing: border-box;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
        }
        .inforight>div{
            margin: 0 36px 0 0 !important;
        }
        .inforight>div>h4{
            margin: 8px 0 !important;
        }
        .inforight>div>p{
            text-align: center;
        }
        .name>h3{
            display: flex;
        }
        .name>h3>span{
            width: 96px;
            flex-shrink: 0;
            overflow: hidden;
            text-overflow:ellipsis; 
            white-space:nowrap; 
        }
        .name>h3>img{
            height: 16px;
            position: relative;
            top: 4px;
        }
    }

</style>
<style>
    .el-drawer{
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
        border: 2px solid rgba(0,0,0,0);
        box-shadow: 10px 0 0 #999 inset;
    } 
    .el-drawer {
        overflow-y: overlay;
        word-wrap: break-word;
    }
    .el-drawer {
        margin-left: calc(100vw - 100%);
    }
    .gongxiangrencai>div>div{
        display: flex;
        flex-wrap: wrap;
    }
    .gongxiangrencai>div>div>div{
        display: flex;
        margin: 16px 0;
        margin-right: 24px;
    }
    .gongxiangrencai span{
        display: inline-block;
        min-width: 96px;
    }
    .gongxiangrencai_xz{
        border: 1px solid #e6e6e6;
    }
    .gongxiangrencai_xz>div{
        border-bottom: 1px solid #e6e6e6;
    }
    .gongxiangrencai_xz>div:first-child{
        background: #f2f2f2;
    }
    .gongxiangrencai_xz>div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f2f2f2;
    }
    .gongxiangrencai_xz>div:nth-child(2)>div{
        width: calc(100%/7);
        border:1px solid #e6e6e6;
        padding: 10px;
        border-top: 0;
        border-bottom: 0;
        border-left: 0;
        text-align: center;
    }
    .gongxiangrencai_xz_peixun>div:nth-child(2)>div{
        width: calc(100%/5);
    }
    .gongxiangrencai_xz_peixunZy>div:nth-child(2)>div{
        width: calc(100%/3);
    }
    .gongxiangrencai_xz_peixun3>div:nth-child(2)>div{
        width: calc(100%/4);
    }
    .gongxiangrencai_xz>div:nth-child(2)>div:last-child{
        border-right: 0;
    }
    .gongxiangrencai_xz>.el-row{
        padding: 24px 0 !important;
        display: flex;
    }
    .gongxiangrencai_xz .el-form-item{
        margin: 0;
        width: calc(100%/7);
        display: flex;
        justify-content: space-between;
    }
    .gongxiangrencai_xz_peixun .el-form-item{
        width: calc(100%/5);
    }
    .gongxiangrencai_xz_peixunZy .el-form-item{
        width: calc(100%/3);
    }
    .gongxiangrencai_xz_peixun3 .el-form-item{
        width: calc(100%/4);
    }
    .gongxiangrencai_xz+.el-row{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0 10px 0;
    }
    .el-button:focus, .el-button:hover {
        background: #9e0100;
        color: #fff;
        border: none;
    }
    .el-button {
        display: block;
        margin: 48px auto;
        background: #9e0100;
        color: #fff;
        border: none;
    }
    .gongxiangrencai_xz .el-button{
        margin: 0;
    }
    
    .patentForm>div{
        display: flex;
        flex-wrap: wrap;
        padding-left: 16px;
    }
    .patentForm>div>div{
        display: flex;
        width: 50%;
        padding: 12px 0;
    }
    .patentForm>div>div>span{
        min-width: 94px;
    }
    
    .drawer2MyButton2 button{
        margin: 0;
    }
    .drawer2MyButton2 button:hover{
        background: #9e0100;
        color: #fff;
    }
    
    .drawer2{
        width: 50% !important;
        margin: 0 auto;
        position: absolute;
        top: 10%;
    }
    .patentForm>div>div{
        width: 50%;
    }
    .patentForm>div>div>div{
        width: auto;
    }
    .fuwuyiyuan>div>div>div>span{
        display: inline-block;
        width: 150px;
    }
    .fuwuyiyuan>div>div>div:last-child{
        width: 20%;
        min-width: 340px;
        display: flex;
    }
    .fuwuyiyuan>div>div>div:last-child>div{
        min-width: 220px;
    }
    .thisIsMy,.thisIsMy>div{
        width: 100%;
        display: flex;

    }
    .thisIsMy>div>span{
        display: inline-block;
        min-width: 120px;

    }
    .thisIsMy>div{
        display: flex;
        flex-direction: row;
    }
    .thisIsMy>div>div{
        width: 60%;
    }
</style>
<style>
    .el-textarea__inner{
        margin: 0 !important;
    }
    .el-message-box .el-message-box__btns {
        display: flex;
        justify-content: center;
    }
    .el-message-box .el-button {
        margin: 0;
    }
</style>