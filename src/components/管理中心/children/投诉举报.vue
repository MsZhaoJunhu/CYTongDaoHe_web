<template>
    <div class="fksq_content">
        <div class="tab" @click="changeFlag($event)">
            <span :class="true==flag1?'selected':''" style="display:none;">反馈/申请</span>
            <span :class="true==flag2?'selected':''">所有反馈</span>
            <span :class="true==flag3?'selected':''">我的反馈</span>
        </div>
        <div class="nr" v-show=flag1>
            <div class="syfk" style="display: none">
                <table>
                    <tr>
                        <td>举报号</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td>处理状态</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td class="red">未处理</td>
                        <td><a href="">详情</a></td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td class="green">已受理</td>
                        <td><a href="">详情</a></td>
                    </tr>
                </table>
                <div class="page">
                    <ul>
                        <li class="number">1</li>
                        <li class="number">2</li>
                        <li class="number">3</li>
                        <li class="number">4</li>
                        <li class="number">5</li>
                    </ul>
                </div>
            </div>
            <div class="wyfk">
                <div class="fkxx">
                    <div>
                        反馈用户<span class="red">*</span><input type="text" class="fkinput" placeholder="默认当前用户" id="fkyh">
                    </div>
                    <div>
                        反馈时间<span class="red">*</span>
                        <div class="riqiSelect">
                            <el-date-picker
                            @change="change"
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </div>
                    <div>
                        项目名称<span class="red">*</span>
                        <select name="" id="" class="fkinput" @change="changeSelect($event)">
                            <option style="display:none;">请选择项目</option>
                            <option>项目名称1</option>
                            <option>项目名称2</option>
                            <option>项目名称3</option>
                        </select>
                    </div>
                    <div>
                        反馈对象<span class="red">*</span><input type="text" class="fkinput" placeholder="输入对象名称" id="fkdx">
                    </div>
                    <div>
                        联系电话<span class="red">*</span><input type="text" class="fkinput" placeholder="12345678901" id="fkdh">
                    </div>
                    <div>
                        反馈方式<span class="red">*</span>
                        <label><input type="radio" class="fkradio" name="fkfs" checked>来访</label>
                        <label><input type="radio" class="fkradio" name="fkfs">站内</label>
                        <label><input type="radio" class="fkradio" name="fkfs">其他</label>
                    </div>
                </div>
                <div class="fklx">
                    <p>请选择反馈类型<span class="red">*</span></p>
                    <div class="fkxx">
                        <div>
                            反馈类型<span class="red">*</span>
                            <select name="" id="" class="fkinput" @change="changeSelect($event)">
                                <option style="display:none;">请选择举报类型</option>
                                <option>举报</option>
                                <option>投诉</option>
                                <option>律师函</option>
                            </select>
                        </div>
                        <div>
                            主要行为<span class="red">*</span>
                            <select name="" id="" class="fkinput" @change="changeSelect($event)">
                                <option style="display:none;">请选择投诉类型</option>
                                <option>非专业类投诉</option>
                                <option>专业类投诉</option>
                            </select>
                        </div>
                    </div>
                    <div class="lx">
                        <div class="xx">无理要求（买方）</div>
                        <div class="xx">拖延支付（买方）</div>
                        <div class="xx">无理增加费用（卖方）</div>
                        <div class="xx">不履行保质期服务（卖方）</div>
                        <div class="xx">消息服务（卖方）</div>
                        <div class="xx">拒绝提供已承诺服务（卖方）</div>
                        <div class="xx">拒不修改方案（卖方）</div>
                        <div class="xx">未按时完成（卖方）</div>
                        <div class="xx">诱导选标、付款（卖方）</div>
                        <div class="xx">服务商失联（卖方）</div>
                        <div class="xx">专业类投诉1</div>
                        <div class="xx">专业类投诉2</div>
                        <div class="xx">专业类投诉3</div>
                    </div>
                    
                </div>
                <div class="fknr">
                    <p>请描述反馈内容<span class="red">*</span></p>
                    <textarea name="fknr" class="fkinput fkarea" placeholder="请详细描述事件经过..."></textarea>
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <div slot="tip" class="el-upload__tip">(上传要求：支持文档、图片、压缩文件，单个文件＜20M，文件数量≤10个)</div>
                        <el-button size="small" type="primary"><img src="../../../assets/icon/upload.png" style="vertical-align: middle;">&nbsp;上传举证*</el-button>
                    </el-upload>
                </div>
                <div class="fk_qr">
                    确认
                </div>
                <div class="fkbotton">
                    <div>注意事项：</div>
                    <div>
                        <p>1、请您提供真实的举证材料证明您所反馈的问题;</p>
                        <p>2、请正确选择反馈类型及主要行为，以便平台相关部门能第一时间针对您的反馈内容进行及时处理</p>
                        <p>3、请务必正确填写您的联系方式，以便我们能及时联系您（请不用担心您的个人信息会被公开，同道合平台绝不会泄露您的隐私）</p>
                    </div>
                </div>
            </div>
            <div class="wdfk" style="display: none">
                <table>
                    <tr>
                        <td>举报号</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td>处理状态</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td class="red">未处理</td>
                        <td><a href="">详情</a></td>
                    </tr>
                    <tr>
                        <td>004</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td class="green">已受理</td>
                        <td><a href="">详情</a></td>
                    </tr>
                </table>
                <div class="page">
                    <ul>
                        <li class="number">1</li>
                        <li class="number">2</li>
                        <li class="number">3</li>
                        <li class="number">4</li>
                        <li class="number">5</li>
                    </ul>
                </div>
            </div>
            <div class="wxgdfk" style="display: none">

                <table>
                    <tr>
                        <td>举报号</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td>处理状态</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>005</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td class="red">未处理</td>
                        <td><a href="">详情</a></td>
                    </tr>
                    <tr>
                        <td>006</td>
                        <td>举报类型</td>
                        <td>举报对象</td>
                        <td>被举报信息</td>
                        <td>发起时间</td>
                        <td class="green">已受理</td>
                        <td><a href="">详情</a></td>
                    </tr>
                </table>

                <div class="page">
                    <ul>
                        <li class="number">1</li>
                        <li class="number">2</li>
                        <li class="number">3</li>
                        <li class="number">4</li>
                        <li class="number">5</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="sy" v-show=flag2>
            <el-table
                :data="tableData"
                style="width: 100%"
                height="550"
                :cell-style="preprocessing">
                    <el-table-column
                        fixed
                        prop="number"
                        label="编号"
                        width="80"
                        align="center"
                        style="margin-left:2px;">
                    </el-table-column>
                    <el-table-column
                        prop="feedback"
                        label="反馈用户"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="反馈类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="behavior"
                        label="主要行为"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="object"
                        label="反馈对象"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="发起时间"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        label="处理状态"
                        width="80"
                        >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">
                                详情
                            </el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <el-drawer
                title="详情"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
                :size="flag==3?'130%':'100%'">
                <span>
                    <span>反馈编号：</span>
                    <span>{{this.msg.number}}</span>
                </span>
                <span>
                    <span>受理部门中心：</span>
                    <span>同道合服务中心</span>
                </span>
                <span>
                    <span>受理期限：</span>
                    <span>3天内</span>
                </span>
                <span>
                    <span>反馈用户：</span>
                    <span>{{this.msg.feedback}}</span>
                </span>
                <span>
                    <span>反馈时间：</span>
                    <span>{{this.msg.time}}</span>
                </span>
                <span>
                    <span>联系电话：</span>
                    <span>18*******14</span>
                </span>
                <span>
                    <span>主要类型：</span>
                    <span>{{this.msg.type}}</span>
                </span>
                <span>
                    <span>主要行为：</span>
                    <span>{{this.msg.behavior}}</span>
                </span>
                <span>
                    <span>反馈对象：</span>
                    <span>{{this.msg.object}}</span>
                </span>
                <span>
                    <span>处理状态：</span>
                    <span :class="flag==1?'ycl':flag==2?'wcl':'ysl'">{{this.msg.state}}</span>
                </span>
                <div>
                    <span>反馈内容：</span>
                    <textarea class="mediaDIv" disabled>涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易</textarea>
                </div>
                <div v-if="flag==2">
                    <el-button @click="changeTextarea($event)">编辑信息</el-button>
                    <div class="mediaButtonTwo">
                        <el-button @click="fun">撤回举报</el-button>
                        <el-button @click="changeTextarea($event)">确认修改</el-button>
                    </div>
                </div>
                <div v-if="flag==3" class="yclLastDiv">
                    <p>受理部门意见：</p>
                    <p>受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见</p>
                    <p>处理结果：</p>
                    <p>处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果</p>
                </div>
            </el-drawer>
            <table>
                <tr>
                    <td>编号</td>
                    <td>反馈用户</td>
                    <td>反馈类型</td>
                    <td>主要行为</td>
                    <td>反馈对象</td>
                    <td>发起时间</td>
                    <td>处理状态</td>
                    <!-- <td>操作</td> -->
                </tr>
                <tr v-for="(item,index) of tableData" :key="index">
                    <td>{{item.feedId}}</td>
                    <td>{{item.feedUser}}</td>
                    <td>{{item.feedType}}</td>
                    <td>{{item.mainAct}}</td>
                    <td>{{item.backUser}}</td>
                    <td>{{item.feedTime}}</td>
                    <td class="ycl">已处理</td>
                    <!-- <td @click="show($event,item.feedId)">详情</td> -->
                </tr>
            </table>
        </div>
        <div id="wd" v-show=flag3>
            <el-table
                :data="tableData"
                style="width: 100%"
                height="550"
                :cell-style="preprocessing">
                    <el-table-column
                        fixed
                        prop="number"
                        label="编号"
                        width="80"
                        align="center"
                        style="margin-left:2px;">
                    </el-table-column>
                    <el-table-column
                        prop="feedback"
                        label="反馈用户"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="反馈类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="behavior"
                        label="主要行为"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="object"
                        label="反馈对象"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="发起时间"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        label="处理状态"
                        width="80"
                        >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)"
                                >
                                详情
                            </el-button>
                        </template>
                    </el-table-column>
            </el-table>
            <el-drawer
                title="详情"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
                :size="flag==3?'130%':'100%'">
                <span>
                    <span>反馈编号：</span>
                    <span>{{this.msg.number}}</span>
                </span>
                <span>
                    <span>受理部门中心：</span>
                    <span>同道合服务中心</span>
                </span>
                <span>
                    <span>受理期限：</span>
                    <span>3天内</span>
                </span>
                <span>
                    <span>反馈用户：</span>
                    <span>{{this.msg.feedback}}</span>
                </span>
                <span>
                    <span>反馈时间：</span>
                    <span>{{this.msg.time}}</span>
                </span>
                <span>
                    <span>联系电话：</span>
                    <span>18*******14</span>
                </span>
                <span>
                    <span>主要类型：</span>
                    <span>{{this.msg.type}}</span>
                </span>
                <span>
                    <span>主要行为：</span>
                    <span>{{this.msg.behavior}}</span>
                </span>
                <span>
                    <span>反馈对象：</span>
                    <span>{{this.msg.object}}</span>
                </span>
                <span>
                    <span>处理状态：</span>
                    <span :class="flag==1?'ycl':flag==2?'wcl':'ysl'">{{this.msg.state}}</span>
                </span>
                <div>
                    <span>反馈内容：</span>
                    <textarea class="mediaDIv" disabled>涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易涉嫌与某某用户进行虚假交易</textarea>
                </div>
                <div v-if="flag==2">
                    <el-button @click="changeTextarea($event)">编辑信息</el-button>
                    <div class="mediaButtonTwo">
                        <el-button @click="fun">撤回举报</el-button>
                        <el-button @click="changeTextarea($event)">确认修改</el-button>
                    </div>
                </div>
                <div v-if="flag==3" class="yclLastDiv">
                    <p>受理部门意见：</p>
                    <p>受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见受理部门的意见</p>
                    <p>处理结果：</p>
                    <p>处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果处理结果</p>
                </div>
            </el-drawer>
            <table>
                <tr>
                    <td>编号</td>
                    <td>反馈用户</td>
                    <td>反馈类型</td>
                    <td>主要行为</td>
                    <td>反馈对象</td>
                    <td>发起时间</td>
                    <td>处理状态</td>
                    <!-- <td>操作</td> -->
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {
getFeedbackList
} from "@/components/api/api";
    export default {
        data() {
            return {
                flag1:false,
                flag2:true,
                flag3:false,
                value1:"",
                fileList:[],
                drawer: false,
                direction: 'ttb',
                msg:"",
                flag:1,/*  1：已处理 2：未处理 3：已受理*/
                tableData:[]
            }
        },
        mounted() {
            this.$emit('updatetitle','5');
            getFeedbackList().then(res =>{
                if (res.data.code === 200) {
                    for(var i in res.data.data.records){
                        this.tableData.push(res.data.data.records[i]);
                    }
                }
            })
        },
        methods: {
            changeFlag(e){
                let user=JSON.parse(sessionStorage.getItem("user"));
                var el=e.target
                if(el.innerHTML=="反馈/申请"){
                    this.flag1=true;
                    this.flag2=false;
                    this.flag3=false;
                }else if(el.innerHTML=="所有反馈"){
                    this.flag1=false;
                    this.flag2=true;
                    this.flag3=false;
                    this.tableData=[];
                    getFeedbackList().then(res =>{
                        if (res.data.code === 200) {
                            for(var i in res.data.data.records){
                                this.tableData.push(res.data.data.records[i]);
                            }
                        }
                    })
                }else if(el.innerHTML=="我的反馈"){
                    this.flag1=false;
                    this.flag2=false;
                    this.flag3=true;
                    this.tableData=[];
                    if(user==null){
                        this.$notify({
                            title: "操作失败",
                            message: "您尚未登录！请登陆后重试！",
                            type: 'error',
                            position: 'top-left'
                        });
                        this.$router.push('/login')
                    }else{
                        getFeedbackList({"userName":user.userName,"pageNum":1}).then(res => {
                            if (res.data.code === 200) {
                                for(var i in res.data.data.records){
                                    this.tableData.push(res.data.data.records[i]);
                                }
                            }
                        })
                    }
                }
            },
            show(e){
                var el=e.target;
                if(el.previousSibling.innerHTML=="已处理"){
                    this.$store.commit("changeTrueToast4")
                }else if(el.previousSibling.innerHTML=="未处理"){
                    this.$store.commit("changeTrueToast43")
                }else if(el.previousSibling.innerHTML=="已受理"){
                    this.$store.commit("changeTrueToast42")
                }
            },
            //日历
            change() {
            },
            changeSelect(e){
                var el=e.target;
                el.style.color="#000"
            },
            handleRemove(file, fileList) {},
            handlePreview(file) {},
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file,fileList) {},
            // handleEdit(index, row) {
            //     this.drawer=true;
            //     this.msg=row;
            //     if(row.state=="已处理"){
            //         this.flag=1;
            //     }else if(row.state=="未处理"){
            //         this.flag=2;
            //     }else{
            //         this.flag=3;
            //     }
            // },
            handleClose(done) {
                done();
            },
            preprocessing ({row, column, rowIndex, columnIndex}) {
                if (row.state === '未处理' && columnIndex == 6) {
                    return {
                        color: '#9e0100'
                    }
                }else if(row.state === '已处理' && columnIndex == 6){
                    return {
                        color: '#287fe2'
                    }
                }else if(row.state === '已受理' && columnIndex == 6){
                    return {
                        color: '#19ac92'
                    }
                }
            },
            changeTextarea(e){
                var textarea=document.getElementsByClassName("mediaDIv")
                if(e.target.innerHTML=="编辑信息"){
                    textarea[1].disabled=false;
                    textarea[1].focus();
                }else{
                    textarea[1].disabled=true;
                }
            },
            fun(){

            }
        },
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        /* min-width: 1400px; */
        position: relative;
    }
    .banner img{
        width: 100%;
    }
    .banner>.text{
        color: #d1d1d2;
        left: 260px;
        bottom: 55px;
        position: absolute;
    }
    .banner>.text>p{
        font-family: '华文细黑';
        font-size: 18px;
    }
    .banner>.text>h1{
        letter-spacing:4px;
        font-size: 56px;
    }
    .main{

        width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .bjs{
        background: #fbfbfb;
        padding: 50px;
    }
    .xlm{
        height: 100px;
        line-height: 100px;
    }
    .xlm>div{
        width: 1400px;
        margin: 0 auto;
    }
    .xlm span{
        background: url(../../../assets/imgs/xjt.png) no-repeat;
        padding:0 15px 0 5px;
        background-position:right;
    }
    .xlm span:last-of-type{
        background:rgba(255, 255, 255, 0);
    }
    .title{
        width: 315px;
        height: 480px;
        background-color: #ffffff;
        padding: 31px 15px;
        box-sizing: border-box;
    }
    .title h3{
        font-size: 24px;
        color: #9e0100;
        margin-bottom:40px;
        font-weight: normal
    }
    .title p{
        font-size: 18px;
        color: #676767;
        margin-bottom:40px;
        display: flex;
    }
    .title p.selected{
        color: #9e0100 !important;
    }
    .title p i{
        display: block;
        height: 22px;
        width: 22px;
        background: url(../../../assets/imgs/glzx_.png) no-repeat;
        margin: 2px 14px 0 0;

    }
    .title p:nth-of-type(2) i{
        background-position:0 -54px;
    }
    .title p:nth-of-type(3) i{
        background-position:0 -108px;
    }
    .title p:nth-of-type(4) i{
        background-position:0 -162px;
    }
    .title p:nth-of-type(5) i{
        background-position:0 -214px;
    }
    .title p:nth-of-type(6) i{
        background-position:0 -270px;
    }
    .tsslfw{
        margin-top: 30px;
        padding: 10px;
        box-sizing: border-box;
        width: 315px;
        background-color: #ffffff;
    }
    .tsslfw>p{
        font-size: 20px;
        color: #9e0100;
        text-align: center;
        margin: 20px 0;
    }
    .tsslfw>p:last-of-type{
        height: 16px;
        line-height: 16px;
        margin-bottom: 10px;
    }
    .tsslfw>.slfw{
        margin: 13px 0;
    }
    .slfw>.slfw_p{
        margin-bottom:5px;
        background: url(../../../assets/icon/plus-symbol.png) no-repeat right;
        cursor:pointer;
    }
    .slfw>.slfw_p.selected{
        background: url(../../../assets/icon/minus-symbol.png) no-repeat right;
    }
    .tsslfw>.slfw>p:nth-of-type(2){
        padding:0 2em;
        font-size: 14px;
        line-height: 24px;
        color: #676767;
        display: none;
    }
    .tsslfw>.slfw>p.selected+p{
        display: block;
    }
    .fksq_content{
        width: 100%;
        padding:25px;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    .wdfk,.syfk,.wsddjb,.wyfk{
        margin-top:30px;
    }
    #sy>table,#wd>table{
        width: 100%;
        margin-top:30px;
        border-collapse: collapse;
    }
    table td{
        height: 45px;
        text-align: center;
        border: 0;
        color: #999;
        font-size: 18px;
    }
    .red{
        color: #9e0100 !important;
    }
    .green{
        color:#47bda8 !important;
    }
    td a{
        color: #999;
        text-decoration:none;
    }
    table tr:nth-of-type(1) td{
        background: #fafafa;
        color: #555;
    }
    .main>p{
        padding: 0 10px;
        font-size: 17px;
        line-height: 30px;
    }
    .tab>span{
        font-size: 20px;
        line-height: 28px;
        color: #dddddd;
        margin-right: 25px;
        cursor: pointer;
    }
    .tab>span.selected{
        color: #9e0100;
    }
    .tab{
        padding-top: 16px;
    }
    .fkinput{
        width: 180px;
        height: 38px;
        background-color: #fafafa;
        border-radius: 1px;
        border: none ;
        box-shadow: none ;
        margin-left: 20px;
        padding: 5px;
        box-sizing: border-box;
        font-size: 14px;
        outline-color: #00000024;
        outline: none;
    }
    .fkarea{
        margin: 20px 0 15px 0 ;
        padding: 15px;
        box-sizing: border-box;
        height: 200px;
        resize: none;
        width:100%;
    }
    #fkTime{
        cursor: pointer;
    }
    .fkxx{
        display: flex;
        flex-wrap: wrap;
    }
    .fkxx>div{
        margin: 15px 0;
        width: 32%;
    }
    .fkxx>div:nth-child(2){
        display: flex;
        line-height: 38px;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 180px !important;
        margin-left: 20px;
        height: 38px;
    }
    .fkxx label{
        margin: 0 20px 0 10px;
        color: #999;
    }
    .fkxx input[type=radio]{
        margin-right:5px;
        width: 12px;
        height: 12px;
        background-color: #f6f6f6;
        border:0;
        border-radius:0;
        -webkit-appearance: none;
        outline:none;
        position: relative;
    }
    .fkxx input[type=radio]:checked:before{
        display: block;
        content: "";
        margin: 0;
        top:3px;
        left: 3px;
        width: 50%;
        height: 50%;
        background-color: #9e0100;
        position: absolute;
    }
    .fknr .fkbut{
        background-color: #fafafa;
        border-radius: 1px;
        border: solid 1px #dddddd;
        width: 115px;
        height: 32px;
        margin-left:0;
        color: #666666;
        line-height: 18x;
        display: inline-block;
        cursor: pointer;
    }
    .fknr span{
        font-size: 14px;
        color: #bbbbbb;
    }
    .fk_qr{
        margin: 30px auto 20px auto;
        width: 220px;
        height: 51px;
        background-color: #9e0100;
        border-radius: 26px;
        line-height: 51px;
        text-align: center;
        font-size: 18px;
        color: #ffffff;
        box-shadow: 0 3px 9px #dd7272;
        cursor:pointer;
    }
    .fkbotton{
        width: 1005px;
        background-color: #fcf7f7;
        padding: 15px;
        box-sizing: border-box;
        display:flex;
        font-size: 13px;
    }
    .fkbotton>div{
        display: inline-block;
        color: #555;
    }
    .fkbotton>div:first-child{
        width: 90px;
    }
    .fkbotton>div>p{
        margin-top: 5px;
    }
    .fkbotton>div:nth-of-type(1){
        color: #9e0100;
    }
    .fklx>.lx{
        margin-top: 20px;
        width:100% ;
        display: flex;
        flex-wrap:wrap;
    }
    .fklx>.lx>.xx{
        font-size: 14px;
        width: 187px;
        height: 40px;
        line-height: 40px;
        color: #9e0100;
        font-weight: bold;
        background-color: #fcf7f7;
        text-align: center;
        margin: 6px 12px 6px 0;
        cursor: pointer;
    }
    .fklx>.lx>.xx.selected{
        background-color: #9e010016;
        border: 1px solid #9e0100;
    }
    .fklx{
        padding: 20px 0;
        margin: 20px 0;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
    }
    .lx{
        display: flex;
        flex-wrap: wrap;
    }
    .page{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-top:#dedede solid 1px;
        margin-top:50px;
    }
    .page ul{
        margin: 30px 0;
        height: 30px;
        line-height: 30px;
    }
    .page ul>li{
        margin-right:15px;
        list-style: none;
        float: left;
        text-align: center;
    }
    .number{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .number:first-of-type{
        background: #e6e6e6;
    }
    .ysl{
        color: #19ac92;
    }
    .ycl{
        color: #287fe2;
    }
    .wcl{
        color: #9e0100;
    }
    select{
        color: #999;
    }
    select option{
        color:#000;
    }
    .el-button--primary{
        color: #000;
        background-color: #fafafa;
        border: 1px solid #ddd;
        width: 115px;
        float: left;
    }
    .el-button--primary img{
        position: relative;
        top: -2px;
    }
    .el-upload__tip{
        color: #bbbbbb;
        margin-left: 16px;
    }
    .el-table{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .tab,.nr,.fkbotton{
            width: 100% !important;
        }
        .fksq_content{
            width: 415px !important;
            padding: 0px 24px !important;
            height:auto;
        }
        .tab{
            padding: 0px;
            display: flex;
            justify-content: space-around;
        }
        .tab>span{
            font-size: 16px;
            margin: 0;
        }
        .wyfk{
            margin: 0px;
        }
        .fkxx{
            display: flex;
            flex-direction: column;
            font-size: 14px;
        }
        .fkxx>div{
            width: auto !important;
            margin: 8px 0px;
            width: 100%;
        }
        .fkxx>div input,.fkxx>div select{
            height: 30px;
        }
        .fklx>.lx{
            margin: 0px;
        }
        .fklx>.lx>.xx{
            margin-right: 2px;
            width: 180px;
        }
        label{
            margin-left: 20px !important;
        }
        label:not(:first-child){
            margin-right: 0px;
            margin-left: 22px !important;
        }
        .fk_qr{
            width: 120px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
        .fknr .fkbut,.fknr .fkbut+span{
            display: none;
        }
        .fkbotton{
            display: flex;
            flex-direction: column;
        }
        .fkbotton>div>p{
            text-indent:1em;
        }
        #sy>table,#wd>table{
            display: none;
        }
        .el-table{
            display: block;
        }
        .el-popup-parent--hidden{
            overflow-y: scroll;
        }
        .el-popup-parent--hidden>div#app{
            overflow: scroll;
        }
        .el-drawer__body>span,.el-drawer__body>div{
            display: block;
            padding-left: 24px;
            margin-top: 16px;
        }
        .el-drawer__body>div>span{
            display: block;
        }
        .mediaTextarea{
            padding: 8px;
            margin: 16px 16px 0 16px;
            box-sizing: border-box;
        }
        .mediaButtonTwo{
            margin-top: 16px;
        }
        .mediaButtonTwo>button{
            border-radius: 20px;
            background-color: #9e0100;
            color: #fff;
        }
        .mediaButtonTwo>button:first-child{
            margin-left: 20%;
        }
        .yclLastDiv>p:nth-child(odd){
            margin-top: 16px;
        }
        .yclLastDiv>p:nth-child(even){
            text-indent: 2em;
            margin-top: 16px;
            margin-right: 16px;
        }
        .mediaDIv{
            width: 90%;
            height: 100px;
            overflow: scroll;
            margin-top: 16px;
            text-indent: 2em;
            background-color: #fff;
            border: 0;
            margin-bottom: 10%;
        }
    }
</style>