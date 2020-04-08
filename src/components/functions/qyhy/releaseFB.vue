<template>
    <div style="background:#fafafa;" class="qyhy_xqfb_a">
        <div class="tdt_qyhy_top_title_par">
            <router-link to="/fun/funs" class="tdt_qyhy_top_title">需求发布</router-link>
        </div>
        <div class="publishing">
            <div class="publishing_nav">
                <ul class="publishing_nav_title">
                    <li v-for="(item,index) in publishing_title" :class="publishing_selectd==index?'publishing_selected':''" >
                        <font @click="changepPublishing(index)" :class="publishing_selectd==index?'publishing_selected_fontBloder':'publishing_selected_font'">{{item}}</font>
                    </li>
                </ul>
                <p class="publishing_right_wh" @click="drawer = true">
                    <img src="../../../assets/imgs/wenhao.png" alt="">
                    <span>关于交易模式</span>
                </p>
            </div>
            <div class="publishing_content" v-show="publishing_selectd==0">
                <p>
                    <span>公司名称</span>
                    <input type="text" placeholder="需求公司名称" v-model="dnlySj.personName" disabled>
                    <span>联系电话</span>
                    <input type="text" placeholder="需求公司电话" v-model="fDylySj.personPhone" @blur.prevent="checkPhoneNumber">
                </p>
                <p>
                    <span>项目类型</span>
                    <select v-model="dnlySj.businessType" id="changeFirstClassMenu2" @change="changeFirstClassMenu2()">
                        <option style="display:none;">请选择一级项目类型</option>
                        <option v-for="item in firstClassMenu" :data-value="item.dictItemId">{{item.itemName}}</option>
                    </select>
                    <select v-model="dnlySj.field" :placeholder="fDylySj.field">
                        <option style="display:none;">请选择二级项目类型</option>
                        <option v-for="item in secedClassMenu">{{item.itemName}}</option>
                    </select>
                </p>
                <p>
                    <span>主要需求</span>
                    <textarea cols="30" rows="20" placeholder="详细的描述" v-model="dnlySj.mainRequire"></textarea>
                </p>
                <p>
                    <span>服务内容及要求</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="dnlySj.serveContent"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>预期效果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="dnlySj.resultExpect"></textarea>
                    <span>输出成果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="dnlySj.resultOutput"></textarea>
                </p>
                
                <p>
                    <span>指定商家</span>
                    <!-- <input type="text" placeholder="指定商家名称" v-model="dnlySj.splrId"> -->
                    <el-autocomplete
                    v-model="dnlySj.splrId"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入内容"
                    @select="handleSelect"
                    ></el-autocomplete>
                </p>
                <p>
                    <span>费用预算</span>
                    <input type="number" v-model="dnlySj.costBudget"><i>元</i>
                </p>
                <p>
                    <span>发布期限</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    :default-value="value1"
                    :readonly="true"
                    :disabled="true">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                     @change="checkDate">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(从发布当日开始,最长90天)</span>
                </p>
                <p>
                    <span>投标期限</span>
                    <el-date-picker
                    v-model="value3"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value4"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions2"
                    @change="checkDate2">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
                </p>
                <p>
                    <span>邮箱验证</span>
                    <input
                    type="text"
                    id="email"
                    v-model="userEmail"
                    placeholder="请输入邮箱"
                    @blur="youxiang_yz"/>
                    <input
                    type="text"
                    id="email_yzm"
                    @blur="sendCode"
                    v-model="userEmailYZX"
                    placeholder="请输入邮箱验证码"/>
                    <input
                    class="shouye_p_button_hqyzm"
                    type="button"
                    @click="sendEm"
                    :disabled="userDisable" 
                    value="获取验证码"/>
                </p>
                <button @click="dylyFbXq" class="button1">发布需求</button>
            </div>
            <div class="publishing_content" v-show="publishing_selectd==1">
                <p>
                    <span>公司名称</span>
                    <input type="text" placeholder="需求公司名称" v-model="fDylySj.personName" disabled>
                    <span>联系电话</span>
                    <input type="text" placeholder="公司电话" v-model="fDylySj.personPhone" @blur.prevent="checkPhoneNumber">
                </p>
                <p>
                    <span>项目类型</span>
                    <select v-model="fDylySj.businessType" id="changeFirstClassMenu" @change="changeFirstClassMenu()">
                        <option style="display:none;">请选择一级项目类型</option>
                        <option v-for="item in firstClassMenu" :data-value="item.dictItemId">{{item.itemName}}</option>
                    </select>
                    <select v-model="fDylySj.field" :placeholder="fDylySj.field">
                        <option style="display:none;">请选择二级项目类型</option>
                        <option v-for="item in secedClassMenu">{{item.itemName}}</option>
                    </select>
                </p>
                <p>
                    <span>主要需求</span>
                    <textarea cols="30" rows="20" placeholder="详细的描述" v-model="fDylySj.mainRequire"></textarea>
                </p>
                <p>
                    <span>服务内容及要求</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.serveContent"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>预期效果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultExpect"></textarea>
                    <span>输出成果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultOutput"></textarea>
                </p>
                <p class="textarea_tb">
                    <span class="noneicon">资质证书名称</span>
                    <input type="text" class="zzzsmc" placeholder="资质证书名称">
                    <span class="noneicon">资质水平</span>
                    <input type="text" class="sjdzzsp" placeholder="商家的资质水平">
                </p>
                <p>
                    <span>费用预算</span>
                    <input type="number" v-model.number="fDylySj.costBudget" ><i>元</i>
                </p>
                <p>
                    <span>发布期限</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    format="yyyy-MM-dd"
                    :default-value="value1"
                    :disabled="true">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value2"
                    type="date"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                     @change="checkDate">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(从发布当日开始,最长90天)</span>
                </p>
                <p>
                    <span>投标期限</span>
                    <el-date-picker
                    v-model="value3"
                    type="date"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                    :default-value="value1"
                    :disabled="true"
                    :picker-options="pickerOptions1">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value4"
                    type="date"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                    :picker-options="pickerOptions2"
                    @change="checkDate2">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(开始时间可为发布后的10天,截止日期由发布者选择,投标期限最长不超过15天)</span>
                </p>
                <p>
                    <span>邮箱验证</span>
                    <input
                    type="text"
                    id="email"
                    v-model="userEmail"
                    placeholder="请输入邮箱"
                    @blur="youxiang_yz"/>
                    <input
                    type="text"
                    id="email_yzm"
                    @blur="sendCode"
                    v-model="userEmailYZX"
                    placeholder="请输入邮箱验证码"/>
                    <input
                    class="shouye_p_button_hqyzm"
                    type="button"
                    @click="sendEm"
                    :disabled="userDisable" 
                    :value="countDownValue"/><span v-if="countDownValue<'61'" class="s">s</span>
                </p>
                <button v-if="isReview==1" class="button1"  @click="fdylyFbXq" :disabled="isReview==1?false:true">发布需求</button>
                <button v-else-if="!isReview==1" class="button2"  @click="fdylyFbXq" :disabled="isReview==1?false:true">发布需求</button>
            </div>
            <div class="publishing_content" v-show="publishing_selectd==2">
                <p>
                    <span>公司名称</span>
                    <input type="text" v-model="fDylySj.personName" disabled>
                    <span>联系电话</span>
                    <input type="text" v-model="fDylySj.personPhone" @blur.prevent="checkPhoneNumber">
                </p>
                <p>
                    <span>项目类型</span>
                    <select v-model="fDylySj.businessType" id="changeFirstClassMenu3" @change="changeFirstClassMenu3()">
                        <option style="display:none;">请选择一级项目类型</option>
                        <option v-for="(item,index) in firstClassMenu" :key="index" :data-value="item.dictItemId">{{item.itemName}}</option>
                    </select>
                    <select v-model="fDylySj.field" :placeholder="fDylySj.field">
                        <option style="display:none;">请选择二级项目类型</option>
                        <option v-for="(item,index) in secedClassMenu" :key="index">{{item.itemName}}</option>
                    </select>
                </p>
                <p>
                    <span>主要需求</span>
                    <textarea cols="30" rows="20" placeholder="详细的描述" v-model="fDylySj.mainRequire"></textarea>
                </p>
                <p>
                    <span>服务内容及要求</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.serveContent"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>预期效果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultExpect"></textarea>
                    <span>输出成果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultOutput"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>资质证书名称</span>
                    <input type="text" placeholder="资质证书名称">
                    <span>资质水平</span>
                    <input type="text" placeholder="商家的资质水平">
                </p>
                <p>
                    <span>费用预算</span>
                    <input type="number" v-model="fDylySj.costBudget"><i>元</i>
                </p>
                <p>
                    <span>发布期限</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    :default-value="value1"
                    :readonly="true"
                    :disabled="true">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                     @change="checkDate">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(从发布当日开始,最长90天)</span>
                </p>
                <p>
                    <span>投标期限</span>
                    <el-date-picker
                    v-model="value3"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value4"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions2"
                    @change="checkDate2">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
                </p>
                <p>
                    <span>邮箱验证</span>
                    <input
                    type="text"
                    id="email"
                    v-model="userEmail"
                    placeholder="请输入邮箱"
                    @blur="youxiang_yz"/>
                    <input
                    type="number"
                    id="email_yzm"
                    @blur="sendCode"
                    v-model="userEmailYZX"
                    placeholder="请输入邮箱验证码"/>
                    <input
                    class="shouye_p_button_hqyzm"
                    type="button"
                    @click="sendEm"
                    :disabled="userDisable" 
                    value="获取验证码"/>
                </p>
                <button @click="fdylyFbXq" disabled class="button1">发布需求</button>
            </div>
            <div class="publishing_content" v-show="publishing_selectd==3">
                <p>
                    <span>公司名称</span>
                    <input type="text" placeholder="需求公司名称" v-model="fDylySj.personName" disabled>
                    <span>联系电话</span>
                    <input type="text" placeholder="需求公司电话" v-model="fDylySj.personPhone" @blur.prevent="checkPhoneNumber">
                </p>
                <p>
                    <span>项目类型</span>
                    <select v-model="fDylySj.businessType" id="changeFirstClassMenu4" @change="changeFirstClassMenu4()">
                        <option style="display:none;">请选择一级项目类型</option>
                        <option v-for="(item,index) in firstClassMenu" :key="index" :data-value="item.dictItemId">{{item.itemName}}</option>
                    </select>
                    <select v-model="fDylySj.field" :placeholder="fDylySj.field">
                        <option style="display:none;">请选择二级项目类型</option>
                        <option v-for="(item,index) in secedClassMenu" :key="index">{{item.itemName}}</option>
                    </select>
                </p>
                <p>
                    <span>主要需求</span>
                    <textarea cols="30" rows="20" placeholder="详细的描述" v-model="fDylySj.mainRequire"></textarea>
                </p>
                <p>
                    <span>服务内容及要求</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.serveContent"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>预期效果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultExpect"></textarea>
                    <span>输出成果</span>
                    <textarea cols="30" rows="30" placeholder="详细的描述" v-model="fDylySj.resultOutput"></textarea>
                </p>
                <p class="textarea_tb">
                    <span>资质证书名称</span>
                    <input type="text" placeholder="资质证书名称">
                    <span>资质水平</span>
                    <input type="text" placeholder="商家的资质水平">
                </p>
                <p>
                    <span>费用预算</span>
                    <input type="number" v-model="fDylySj.costBudget"><i>元</i>
                </p>
                <p>
                    <span>发布期限</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    :default-value="value1"
                    :readonly="true"
                    :disabled="true">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    @change="checkDate">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(从发布当日开始,最长90天)</span>
                </p>
                <p>
                    <span>投标期限</span>
                    <el-date-picker
                    v-model="value3"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
                    </el-date-picker>
                    <i>至</i>
                    <el-date-picker
                    v-model="value4"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions2"
                    @change="checkDate2">
                    </el-date-picker>
                    <span class="qc_dyh_span_yx">(开始时间可为发布后当日,截止日期由发布者选择,投标期限最长不超过15天)</span>
                </p>
                <p>
                    <span>邮箱验证</span>
                    <input
                    type="text"
                    id="email"
                    v-model="userEmail"
                    placeholder="请输入邮箱"
                    @blur="youxiang_yz"/>
                    <input
                    type="number"
                    id="email_yzm"
                    @blur="sendCode"
                    v-model="userEmailYZX"
                    placeholder="请输入邮箱验证码"/>
                    <input
                    class="shouye_p_button_hqyzm"
                    type="button"
                    @click="sendEm"
                    value="获取验证码"
                    v-show="!countDown"/>
                    <span class="countDown" v-show="countDown">{{countDownValue}}秒后重新获取</span>
                </p>
                <button @click="fdylyFbXq" disabled class="button1">发布需求</button>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>   
        <el-drawer
            title="关于交易模式"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
            class="drawerClass">
            <p>1.单一来源：交易双方私下已确定合作，按平台要求签订相应的服务协议的交易模式</p>
            <p>2.招投标：买方发出招标需求，邀请符合条件的所有供应商参加，招标信息的全部内容在平台公开展示，供应商在规定的时间内按照一定的程序进行投标，由买方择优选择适合的供应商的交易模式</p>
            <p>3.竞争性谈判：买方发出购买服务的需求，并对供应商的企业规模、资质能力、服务水平等进行严格要求，需求信息的部分内容在平台公开展示，平台供应商数据库系统根据具体要求筛选3-5家符合条件的供应商推送给买方，买方进行初步筛选择优选择适合供应商的交易模式</p>
            <p>4.委托代理：买方向平台发出购买服务的需求，需求信息的内容不在平台公开展示，由平台协助买方进行需求梳理，并根据具体要求甄选3-5家合适的供应商推荐给买方，买方进行初步筛选择优选择适合的供应商的交易模式。</p>
        </el-drawer>     
    </div>
</template>
<script>
import moment from 'moment'
import { 
    publishProjsNeed,
    getBusinessList,
    getBusinessTowList,
    corpFinish,
    splrFinish,
    getProjDetailByCorp,
    corpChangeNeed,
    getFertileSplrList,
    getEmail
    } from '../../api/api'
export default {
    data(){
        return {
          endDateStr:"",
          countDownValue:"",
            publishing_title:["单一来源","招投标","竞争性谈判","委托代理"],
            publishing_title_alue:"招投标",
            publishing_selectd:1,
            value1:moment(new Date(),"YYYY-MM-DD HH:mm:ss").valueOf(),
            value2:"",
            value3:"",
            value4:"",
            pickerOptions:{
                disabledDate: (time) => {
                    return time.getTime() < Date.now() 
                },
            },
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            pickerOptions2:{
                disabledDate: (time) => {
                    return time.getTime() < Date.now()
                },
            },
            // 两队时间是否正确
            time1Correct:0,
            time2Correct:0,
            userEmail:"",
            userEmailYZX:"",
            userEmailYZXXt:"",
            userDisable:true,
            dnlySj:{
                // 公司名称`
                personName:"",
                // 项目id
                projId:null,
                // 企业会员id
                corpId:null,
                // 供应商id  指定商家 1
                splrId:null,
                // 会员企业名称
                corpName:null,
                // 供应商名称
                splrName:null,
                // 项目logo
                projLogo:null,
                // 合同编号
                contractNo:null,
                // 项目状态
                projState:null,
                // 终止原因
                terminReason:null,
                // 交易状态
                tradeState:null,
                // 交易模式
                tradeMode:null,
                // 交易进程
                tradeProcess:null,
                // 项目类型 1
                businessType:null,
                // 细分领域 1
                field:null,
                // 主要需求 1
                mainRequire:null,
                // 服务内容及要求 1
                serveContent:null,
                // 预期效果 1
                resultExpect:null,
                // 输出成果 1
                resultOutput:null,
                // 供应商资格
                qualLevel:null,
                // 费用预算 1
                costBudget:null,
                // 发布期限开始 1
                releaseStart:null,
                // 发布期限结束 1
                releaseEnd:null,
                // 投标期限开始 1
                bidStart:null,
                // 投标期限结束 1
                bidEnd:null,
                //验证邮箱 1
                checkEmail:null,
                // 验证码 1
                checkCode:null,
                token:null
            },
            fDylySj:{
                // 公司名称
                personName:"",
                // 企业会员id
                corpId:null,
                // 项目类型 1
                businessType:null,
                // 细分领域 1
                field:null,
                // 主要需求 1
                mainRequire:null,
                // 服务内容及要求 1
                serveContent:null,
                // 预期效果 1
                resultExpect:null,
                // 输出成果 1
                resultOutput:null,
                // 费用预算 1
                costBudget:null,
                // 发布期限开始 1
                releaseStart:null,
                // 发布期限结束 1
                releaseEnd:null,
                // 投标期限开始 1
                bidStart:null,
                // 投标期限结束 1
                bidEnd:null,
            },
            firstClassMenu:[],
            firstClassMenuDataValue:"",
            secedClassMenu:[],
            // 获取href传过来的参数
            projId:this.$route.query.projId,
            restaurants: [],
            state: '',
            timeout:  null,
            countDownValue:"获取验证码",
            countDown:false,
            isReview:"",
            endDateStr:'',
            drawer: false,
            direction: 'btt',
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            price:""
        }
    },
    watch: {
        price(){
            this.price=this.fDylySj.costBudget=this.format(this.price)
        }
    },
    methods: {

        // 模糊搜索指定商家
        loadAll() {
            return [
                
            ];
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
        // 检查手机号码是否正确
        checkPhoneNumber(){
            let reg =  /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
            if (this.fDylySj.personPhone === "") {
                this.$message({
                    showClose: true,
                    message: "请输入手机号码",
                    type: "error"
                });
                return;
            }else if (!reg.test(this.fDylySj.personPhone)) {
                this.$message({
                    showClose: true,
                    message: "请输入正确的手机号码",
                    type: "error"
                });
                return;
            }
        },
        checkDate(){
            var newTime1= this.value1;
            var newTime2= moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            if(newTime2-newTime1>7776000000){
                this.$message.error('选择时间超过90天,将不能发布哦！');
                this.time1Correct=0;
            }else if(newTime2-newTime1<0){
                this.$message.error('选择时间错误,将不能发布哦！');
                this.time1Correct=0;
            }else{
                this.time1Correct=1;
            }
        },
        checkDate2(){
            var newTime1= moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            var newTime2= moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            if(newTime2-newTime1>1296000000){
                this.$message.error('选择时间超过15天,将不能发布哦！');
                this.time2Correct=0;
            }else if(newTime2-newTime1<0){
                this.$message.error('选择时间错误,将不能发布哦！');
                this.time2Correct=0;
            }else{
                this.time2Correct=1;
            }

        },
        youxiang_yz() {
            var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (!reg.test(this.userEmail)) {
                console.log("邮箱错误")
                this.userDisable=true;
            }else{
                console.log("邮箱正确")
                this.userDisable=false;
            }
        },
        sendCode(){
        },
        sendEm() {
            this.countDownValue=60;
            let that=this;
            let myVar = setInterval(function(){ 
                that.countDownValue=that.countDownValue-1;
                that.userDisable=true;
                if(that.countDownValue==0){
                    clearInterval(myVar);
                    that.userDisable=false;
                    that.countDownValue="获取验证码";
                }
            }, 1000);
            getEmail({email:that.userEmail}).then(res => {
                if (res.data.code === 200) {
                    this.$message({
                        showClose: true,
                        message: "验证码已发送",
                        type: "success"
                    });
                    this.userEmailYZXXt=res.data.data
                    console.log(res.data.data)
                }else{
                    console.log(res)
                    this.$message({
                        showClose: true,
                        message: "验证码发送失败，请重新登录后再试！",
                        type: "error"
                    });
                }
            });
        },
        // 选择四个模式
        changepPublishing(index){
            this.publishing_selectd=index;
            this.publishing_title_alue=this.publishing_title[index];
            this.countDown=false;
            // this.countDownValue=60;
            if(index==2||index==3){
                this.$notify({
                    title: '暂停使用',
                    message: '该功能暂停使用了！',
                    type: 'error',
                    position: 'top-left'
                });
            }
        },
        //调用接口发布需求单一来源
        dylyFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.dnlySj.releaseStart=this.value1;
            this.dnlySj.releaseEnd=this.value2;
            this.dnlySj.bidStart=this.value3;
            this.dnlySj.bidEnd=this.value4;
            this.dnlySj.checkEmail=this.userEmail;
            this.dnlySj.checkCode=this.userEmailYZX;
            this.dnlySj.token=user.token;
            this.dnlySj.tradeMode="单一来源";
            publishProjsNeed(this.dnlySj).then(res=>{
                if(res.data.msg=="发布企业需求成功"&&res.status==200){
                    this.open1();
                    this.$router.push("/fun/funs")
                }else{
                    this.open2();
                    this.$router.push("/fun/funs")
                }
            });
        },
        fdylyFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.fDylySj.releaseStart=this.value1;
            this.fDylySj.releaseEnd=moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidStart=moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidEnd=moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.corpName=this.fDylySj.personName;
            this.fDylySj.corpId=user.roleId;
            this.fDylySj.role=user.role;
            switch (this.publishing_selectd==1) {
                case 1:
                    this.dnlySj.tradeMode="招投标";
                    break;
                case 2:
                    this.dnlySj.tradeMode="竞争性谈判";
                    break;
                case 3:
                    this.dnlySj.tradeMode="委托代理";
                    break;
                default:
                    break;
            }
            let reg =  /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
            if (this.fDylySj.personPhone === "") {
                this.$message({
                    showClose: true,
                    message: "请输入手机号码",
                    type: "error"
                });
                return;
            }else if (!reg.test(this.fDylySj.personPhone)) {
                this.$message({
                    showClose: true,
                    message: "请输入正确的手机号码",
                    type: "error"
                });
                return;
            }else if(this.fDylySj.personName==null||this.fDylySj.personPhone==null||this.fDylySj.businessType==null||this.fDylySj.field==null||this.fDylySj.mainRequire==null||this.fDylySj.serveContent==null||this.fDylySj.resultExpect==null||this.fDylySj.resultOutput==null||this.fDylySj.costBudget==null||this.fDylySj.releaseStart==""||this.fDylySj.releaseEnd==""||this.fDylySj.bidStart==""||this.fDylySj.bidEnd==""){
                this.$notify({
                    title: '发布失败',
                    message: '您有必填信息未填写，请重试!',
                    type: 'error',
                    position: 'top-left'
                });
            }else{
                if(this.time1Correct=="0"||this.time2Correct=="0"){
                    this.$notify({
                        title: '发布失败',
                        message: '您发布期限或投标期限选择错误，请重试!',
                        type: 'error',
                        position: 'top-left'
                    });
                }else if(this.time1Correct=="1"&&this.time2Correct=="1"){
                    if(this.userEmailYZXXt==this.userEmailYZX){
                       publishProjsNeed(
                            {
                            "bidEnd": this.fDylySj.bidEnd,
                            "bidStart": this.fDylySj.bidStart,
                            "businessType": this.fDylySj.businessType,
                            "field": this.fDylySj.field,
                            "corpId": this.fDylySj.corpId,
                            "corpName": this.fDylySj.corpName,
                            "mainRequire": this.fDylySj.mainRequire,
                            "releaseEnd": this.fDylySj.releaseEnd,
                            "releaseStart": this.fDylySj.releaseStart,
                            "resultExpect": this.fDylySj.resultExpect,
                            "resultOutput": this.fDylySj.resultOutput,
                            "costBudget":this.fDylySj.costBudget,
                            "serveContent":this.fDylySj.serveContent,
                            "role":this.fDylySj.role,
                            }
                            ).then(res=>{
                            if(res.data.msg=="发布企业需求成功"&&res.status==200){
                                this.open1();
                                this.$router.push("/fun/funs")
                            }else{
                                this.open2();
                                this.$router.push("/fun/funs")
                            }
                        }); 
                    }else{
                        this.$message({
                            showClose: true,
                            message: "验证码填写错误",
                            type: "error"
                        });
                    }
                }
            }
        },
        fdylyUpdateFbXq(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            this.fDylySj.releaseStart=this.value1;
            this.fDylySj.releaseEnd=moment(this.value2,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidStart=moment(this.value3,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.bidEnd=moment(this.value4,"YYYY-MM-DD HH:mm:ss").valueOf();
            this.fDylySj.corpName=this.fDylySj.personName;
            this.fDylySj.corpId=user.roleId;
            this.fDylySj.role=user.role;
            this.checkDate();
            this.checkDate2();
            switch (this.publishing_selectd==1) {
                case 1:
                    this.dnlySj.tradeMode="招投标";
                    break;
                case 2:
                    this.dnlySj.tradeMode="竞争性谈判";
                    break;
                case 3:
                    this.dnlySj.tradeMode="委托代理";
                    break;
                default:
                    break;
            }
            if(this.fDylySj.personName==null||this.fDylySj.personPhone==null||this.fDylySj.businessType==null||this.fDylySj.field==null||this.fDylySj.mainRequire==null||this.fDylySj.serveContent==null||this.fDylySj.resultExpect==null||this.fDylySj.resultOutput==null||this.fDylySj.costBudget==null||this.fDylySj.releaseStart==""||this.fDylySj.releaseEnd==""||this.fDylySj.bidStart==""||this.fDylySj.bidEnd==""){
                
                this.$notify({
                    title: '修改失败',
                    message: '您有必填信息未填写，请重试',
                    type: 'success',
                    position: 'top-left'
                });
            }else{
                if(this.time1Correct=="0"||this.time2Correct=="0"){
                    this.$notify({
                        title: '修改失败',
                        message: '您有信息填写错误，请重试',
                        type: 'success',
                        position: 'top-left'
                    });
                }else if(this.time1Correct=="1"&&this.time2Correct=="1"){
                    let par={
                                "bidEnd": this.fDylySj.bidEnd,
                                "bidStart": this.fDylySj.bidStart,
                                "businessType": this.fDylySj.businessType,
                                "field": this.fDylySj.field,
                                "corpId": this.fDylySj.corpId,
                                "corpName": this.fDylySj.corpName,
                                "mainRequire": this.fDylySj.mainRequire,
                                "releaseEnd": this.fDylySj.releaseEnd,
                                "releaseStart": this.fDylySj.releaseStart,
                                "resultExpect": this.fDylySj.resultExpect,
                                "resultOutput": this.fDylySj.resultOutput,
                                "costBudget":this.fDylySj.costBudget,
                                "serveContent":this.fDylySj.serveContent,
                                "role":this.fDylySj.role,
                            }
                    corpChangeNeed(par,this.projId).then(res=>{
                        if(res.status==200){
                            this.$notify({
                                title: '修改成功',
                                message: '修改企业需求成功',
                                type: 'success',
                                position: 'top-left'
                            });
                            this.$router.push("/fun/funs")
                        }else{
                            this.$notify({
                                title: '警告',
                                message: '修改企业需求失败',
                                type: 'warning',
                                position: 'top-left'
                            });
                            this.$router.push("/fun/funs")
                        }
                    });
                }
            }
        },
        // 发布成功
        open1() {
            this.$notify({
                title: '发布成功',
                message: '企业需求发布成功',
                type: 'success',
                position: 'top-left'
            });
        },
        // 发布失败
        open2() {
            this.$notify({
                title: '警告',
                message: '企业需求发布失败',
                type: 'warning',
                position: 'top-left'
            });
        },
        // 获取子二级options
        changeFirstClassMenu(){
            let obj = document.getElementById("changeFirstClassMenu")
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value")
            this.firstClassMenuDataValue=store_num;
            getBusinessTowList({"itemId":store_num}).then(res => {
                if (res.data.code === 200) {
                    this.secedClassMenu=res.data.data
                }
            });
        },
        // 获取子二级options
        changeFirstClassMenu2(){
            let obj = document.getElementById("changeFirstClassMenu2")
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value")
            this.firstClassMenuDataValue=store_num;
            getBusinessTowList({"itemId":store_num}).then(res => {
                if (res.data.code === 200) {
                    this.secedClassMenu=res.data.data
                }
            });
        },
        // 获取子二级options
        changeFirstClassMenu3(){
            let obj = document.getElementById("changeFirstClassMenu3")
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value")
            this.firstClassMenuDataValue=store_num;
            getBusinessTowList({"itemId":store_num}).then(res => {
                if (res.data.code === 200) {
                    this.secedClassMenu=res.data.data
                }
            });
        },
        // 获取子二级options
        changeFirstClassMenu4(){
            let obj = document.getElementById("changeFirstClassMenu4")
            let index = obj.selectedIndex;
            let store_num = obj.options[index].getAttribute("data-value")
            this.firstClassMenuDataValue=store_num;
            getBusinessTowList({"itemId":store_num}).then(res => {
                if (res.data.code === 200) {
                    this.secedClassMenu=res.data.data
                }
            });
        },
        // format (num) {  
        //     let val=num.replace(',','')
        //     var reg=/\d{1,3}(?=(\d{3})+$)/g;   
        //     return (val).replace(reg, '$&,');  
        // },
    },
    created() {
      //现在时间+10天
      const that = this;
      var nowDateObj = new Date();
      var nowTimeStem = nowDateObj.getTime();
      var endTimeStem = nowTimeStem + 24*60*60*1000*10;
      var endDateObj = new Date(endTimeStem);
      var month = endDateObj.getMonth() + 1;
      month = month>10?month:'0'+month;
      var day = endDateObj.getDate();
      day = day>10?day:'0'+day;
      that.endDateStr = endDateObj.getFullYear() +'-'+month+'-'+day;
      console.log(that.endDateStr)
      that.value3=that.endDateStr
        // 模糊搜索
        this.restaurants = this.loadAll();
        let originUser = JSON.parse(sessionStorage.getItem("user"));
        this.dnlySj.personPhone = originUser.phoneNo; 
        this.fDylySj.personPhone = originUser.phoneNo;
        if(this.projId==undefined){
            getBusinessList().then(res => {
                if (res.data.code === 200) {
                    this.firstClassMenu=res.data.data
                }
            });
            switch (originUser.role) {
                case "0":
                    corpFinish({"corpId": originUser.roleId}).then(res => {
                        if (res.data.code === 200) {
                                this.dnlySj.personName=res.data.data[0].corpName;
                                this.fDylySj.personName = res.data.data[0].corpName;
                                this.isReview=res.data.data[0].isReview
                                if(this.isReview==0){
                                    this.$message.error("您尚未进行企业认证，请前往我的->我的账户->企业认证中认证后方可发布需求");
                                }
                            }
                        })
                    break;
                default:
                    this.dnlySj.personName = originUser.userName;
                    this.fDylySj.personName = originUser.userName;
                    break;
            }
        }else{
            getBusinessList().then(res => {
                if (res.data.code === 200) {
                    this.firstClassMenu=res.data.data
                    for(var i=0;i<this.firstClassMenu.length;i++){
                        if(this.firstClassMenu[i].itemName==this.fDylySj.businessType){
                            getBusinessTowList({"itemId":this.firstClassMenu[i].dictItemId}).then(res => {
                                if (res.data.code === 200) {
                                    this.secedClassMenu=res.data.data
                                }
                            });
                        }
                    }
                }
            });
            getProjDetailByCorp({projId:this.projId}).then(res => {
                if (res.data.code === 200) {
                    this.fDylySj.personName=res.data.data.corpName;
                    this.fDylySj.businessType=res.data.data.businessType;
                    this.fDylySj.field=res.data.data.field;
                    this.fDylySj.mainRequire=res.data.data.mainRequire;
                    this.fDylySj.serveContent=res.data.data.serveContent;
                    this.fDylySj.resultExpect=res.data.data.resultExpect;
                    this.fDylySj.resultOutput=res.data.data.resultOutput;
                    this.fDylySj.costBudget=res.data.data.costBudget;
                    this.fDylySj.releaseStart=this.value1=res.data.data.releaseStart;
                    this.fDylySj.releaseEnd=this.value2=res.data.data.releaseEnd;
                    this.fDylySj.bidStart=this.value3=res.data.data.bidStart;
                    this.fDylySj.bidEnd=this.value4=res.data.data.bidEnd;
                }
            })
        }
    },
}
</script>
<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
} 
    .countDown{
        margin: 0 !important;
        margin-left: 16px !important;
        display: block;
        width: 180px !important;
        height: 38px;
        box-sizing: border-box;
        border: 1px solid #9e0100;
        text-align: center;
    }
    .countDown:after{
        content: "" !important;
    }
    .tdt_qyhy_top_title_par{
        width: 74%;
        margin: 0 auto;
        padding: 45px 0 26px 16px;
    }
    .publishing{
        width: 73%;
        height: auto;
        background-color:#fff;
        margin: 0 auto;
        border: none;
        padding-bottom: 16px;
        padding-top: 16px;
    }
    .publishing input{
        background-color: #fff;
        color: #999999;
        font-size: 14px
    }
    .publishing_nav{
        width: calc(100% - 40px);
        display: flex;
        border-bottom: 2px solid #fff;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        margin:0 20px;
        
    }
    .publishing_nav_title{
        display: flex;
        width:auto;
        justify-content: space-between;
        height: 100%;
        align-items: center;
    }
    .publishing_nav_title li{
        height: 100%;
    }
    .publishing_nav_title li:not(:first-child){
        margin-left: 24px;
    }
    .publishing_nav_title li font{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333333;
        height: 100%;
    }
    .publishing_nav_title .publishing_selected font{
        border-bottom:2px solid #9e0100; 
    }
    .publishing_content{
        width: 100%;
        height: auto;
        margin-top: 16px;
        padding: 0 16px;
        box-sizing: border-box;
    }
    .publishing_content>p{
        display: flex;
        flex-wrap: wrap;
        min-height: 38px;
        margin: 16px 0 0 0;
    }
    .publishing_content>p:nth-child(8)>*{
        display: inline-block;
    }
    .publishing_content>p>.qc_dyh_span_yx{
        width: auto;
    }
    .publishing_content>p>span{
        display: inline-block;
        width: 10%;
        margin-right: 16px;
        font-size: 16px;
        line-height: 38px;
        color: #666666;
        user-select: none;
    }
    .publishing_content>p>span:after{
        content: "*";
        color: #9e0100;
        line-height: 18px;
    }
    .publishing_content>p>input{
        width:188px ;
        height: 38px;
        border: 0;
        padding-left: 16px;
        box-sizing: border-box;
        background: #f6f6f6;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .publishing_content>p>input+span{
        margin-left: 5%;
    }
    .publishing_content>p>select{
        width: 180px;
        height: 38px;
        padding-left: 8px;
        margin-right: 16px;
        border: 0;
        outline: none;
        background: #f6f6f6;
    }
    .publishing_content>.textarea_tb>textarea{
        width: 35%;
    }
    .publishing_content>.textarea_tb>textarea+span{
        margin-left: 5%;
    }
    .publishing_content>p>textarea{
        margin: 0;
        width: 86%;
        height: 80px;
        padding: 8px;
        resize:none;
        box-sizing: border-box;
        background: #f6f6f6;
        border: 0;
    }
    .publishing_content>p:nth-child(3)>span:nth-child(3),.publishing_content>p:nth-child(4)>span:nth-child(3){
        margin-left: 16px;
    }
    .publishing_content>p:nth-child(3)>*:nth-child(n+5){
        margin-top: 16px;
    }
    .publishing_content>p>input+i{
        font-style: normal;
        line-height: 38px;
        margin-left: 8px;
    }
    .publishing_content>p>div+i{
        font-style: normal;
        margin: 0 8px;
        line-height: 38px;
    }
    .publishing_content>p>div+span{
        margin: 0 0 0 16px;
        font-size: 16px;
        color: #999999;
    }
    .publishing_content>p>div+span:after{
        content: ""
    }
    .publishing_content>p>input+input{
        margin-left: 16px;
    }
    
    .publishing+span{
        display: block;
        color: #bbbbbb;
        padding: 32px 0;
        text-align: center;
        background: #f9f9f9;
    }
    .tdt_qyhy_top_title{
        margin: 0 auto;
        color: #9e0100;
        font-weight: bolder;
        box-sizing: border-box;
    }
    .tdt_qyhy_top_title:before{
        content: '<';
        margin-right: 8px;
    }
    .publishing_selected_fontBloder{
        font-weight: bolder;
        cursor: pointer;
        user-select: none;
    }
    .publishing_selected_font{
        user-select: none;
        color: #cfcfcf !important;
        cursor: pointer;
    }
    .publishing_right_wh{
        display: flex;
        width: 120px;
        height:32px;
       align-items: center;
        color: #9e0100;
        text-align: center;
        line-height: 32px;
        border-radius: 4px;
        font-size: 14px;
        margin-top: 10px;
    }
    .publishing_right_wh>img{
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }
    .publishing_content>p>.shouye_p_button_hqyzm{
        background: none;
        color: #9e0100;
        font-weight: bolder;
        border: 1px solid #9e0100;
        padding: 0;
    }
    @media screen and (max-width: 415px) {
        .publishing{
            width: 100%;
            padding: 16px 24px !important;
            margin: 0;
            box-sizing: border-box;
        }
        .publishing_nav{
            width: 100%;
            margin: 0;
        }
        .publishing_nav>ul>li>font{
            font-size: 14px;
        }
        .publishing_nav>a{
            width: 20px;
            overflow: hidden;
        }
        .publishing_content>p>select+select,.publishing_content>p>input+input{
            margin-left: 28%;
            margin-top: 16px;
        }
        .publishing_content>p:nth-child(3)>span{
            margin: 0;
        }
        .publishing_content>p>textarea{
            width: 100%;
            margin-top: 8px;
        }
        .publishing_content>p:nth-child(7),.publishing_content>p:nth-child(8){
            display: flex;
            flex-direction: column;
        }
    }
    .button2{
        width: 220px;
        height: 50px;
        border: 0;
        border-radius: 20px;
        background: #a8a8a8;
        color: #fff;
        font-size: 18px;
        display: block;
        margin: 32px auto;
    }
    .button1{
        width: 220px;
        height: 50px;
        border: 0;
        border-radius: 20px;
        background: #9e0100;
        color: #fff;
        font-size: 18px;
        display: block;
        margin: 32px auto;
    }
    .shouye_p_button_hqyzm{
      width: 188px;
    }
    .zzzsmc,.sjdzzsp{
      width: 35% !important;
    }
    .s{
      position: relative;
      right: 135px;
      color: #9e0100;
    }
    .s:after{
      content:"" !important;
    }
    .qyhy_xqfb_a{
        position: relative;
    }
    .drawerClass{
        width: 600px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-300px,-200px);
    }
    .drawerClass>div,.drawerClass /deep/ .el-drawer{
        width: 100%;
        height: 100% !important;
    }
    .drawerClass /deep/ .el-drawer__body{
        padding: 0 1rem;
        padding-bottom: 2rem;
        overflow-y: scroll;
    }
    .drawerClass /deep/ .el-drawer__body p{
        text-indent: 2em;
        font-size: 15px;
        color: #111111;
        line-height: 36px;
    }
    .drawerClass /deep/ .el-drawer__body::-webkit-scrollbar {
        /*滚动条整体样式*/
        width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
        .drawerClass /deep/ .el-drawer__body::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
    border-radius   : 10px;
    background-color: #9e0100;
    background-image: -webkit-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent
        );
    }
    .drawerClass /deep/ .el-drawer__body::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #ededed;
        border-radius: 10px;
    }
    .noneicon::after{
      content: ""!important;
    }
</style>
<style>
  .el-input--prefix .el-input__inner{
    padding: 0;
    padding-left: 30px;
    box-sizing: border-box;
    width: 100%;
  }
</style>