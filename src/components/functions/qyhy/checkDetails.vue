<template>
    <div class="qyhy_details_all">
        <div class="qyhy_details_all_title">
            <router-link to="/fun/serviceTransaction">服务交易</router-link>
        </div>
        <div class="qyhy_details_all_content">
            <div>
                <img src="../../../assets/imgs/images/cy2_05.jpg" alt="">
            </div>
            <div>
                <!-- 顶部title -->
                <div class="right_content_title">
                    <div>
                        <p>
                            <span>{{businessType||"暂无"}}{{field||"暂无"}}</span>
                            <span>{{createdTime}}—{{overTime}}</span>
                        </p>
                        <p>
                            <span>
                                预算
                                <span>￥{{costBudget}}</span>
                                元
                            </span>
                            <span>{{type1||"暂无"}}</span>
                            <span>{{type2||"暂无"}}</span>
                        </p>
                    </div>
                    <button :class="tradeState">{{tradeState}}</button>
                </div>
                <!-- 中部内容 -->
                <div class="right_content_body">
                    <p>
                        <span>主要需求：</span>
                        <span>{{mainRequire}}</span>
                    </p>
                    <p>
                        <span>服务内容及要求：</span>
                        <span>{{serveContent}}</span>
                    </p>
                    <p>
                        <span>预期效果：</span>
                        <span>{{resultExpect}}</span>
                    </p>
                    <p>
                        <span>交易模式：</span>
                        <span :class="allStatus">{{allStatus}}</span>
                    </p>
                    <div :class="isAlongToClick==true&&tradeState!='已终止'?'sendTimeDiv':'sendTimeDiv2'">
                        <font style="display:block;margin-bottom:24px;">
                          <span>发布日期：</span>
                          <span>{{FBcreatedTime}}</span>
                        </font>
                        <font v-if="!(isAlongToClick==true&&tradeState!='已终止')">
                          <span>终止原因：</span>
                          <span>{{terminReason}}</span>
                        </font>
                        <font v-if="isAlongToClick==true&&tradeState!='已终止'">
                            <button @click="demandClose(0)" style="background:#9e0100 ">
                                <img src="../../../assets/closeIcon2.png" alt="">
                                <span>需求关闭</span>
                            </button>
                            <div class="bck"
                                v-show="demandClosevalue">
                                <div class="enterprisEcertification">
                                    <div class="topentrt">
                                        <span>
                                            <span></span>结束交易
                                        </span>
                                        <div>
                                            <img src="../../../assets/tc/close.png"
                                                alt="close"
                                                @click="closedemandClose()">
                                        </div>
                                    </div>
                                    <div class="toContentPre">
                                        <img src="../../../assets/icon/over.png" alt="图片">
                                        <span>是否终止需求</span>
                                        <input type="text" class="closeReason" v-if="reasonType!=3" v-model="reason" placeholder="请输入终止原因">
                                    </div>
                                    <div class="updata-btn">
                                        <button @click="closedemandClose()">取消</button>
                                        <button @click="realyDemandClose()">确定</button>
                                    </div>
                                </div>
                            </div>
                            <div class="bck"
                                v-show="demandClosevalues">
                                <div class="enterprisEcertification">
                                    <div class="topentrt">
                                        <span>
                                            <span></span>结束交易
                                        </span>
                                        <div>
                                            <img src="../../../assets/tc/close.png"
                                                alt="close"
                                                @click="closedemandCloses()">
                                        </div>
                                    </div>
                                    <div class="toContentPre">
                                        <img src="../../../assets/icon/over.png" alt="图片">
                                        <span>交易已结束</span>
                                    </div>
                                    <div class="updata-btn">
                                        <button @click="realyDemandCloses()">确定</button>
                                    </div>
                                </div>
                            </div>
                            <button @click="demandModify" style="background:#9e0100 ">
                                <img src="../../../assets/closeIcon.png" alt="">
                                <span>需求修改</span>
                            </button>
                        </font>
                    </div>
                    <!-- 第一次流程 -->
                    <div class="jylcClassDiv" v-if="historyProcess.length>=1">
                        <span>交易进程</span>
                        <p style="color:#666666;">第一次招标</p>
                        <div :class="historyProcess.length>=1&&historyProcess[1]!=undefined?'选标':tradeProcess">
                            <!-- 流程 -->
                            <div>投标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>选标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>中标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>成交</div>
                        </div>
                        <p>
                            <span>交易模式：</span>
                            <span>{{historyProcess[0].mode}}</span>
                            <span class="jyqzTime">交易起止时间：</span>
                            <span>{{historyProcess[0].time}} —— <span v-if="historyProcess[1]!=undefined">{{historyProcess[1].time}}</span><span v-if="historyProcess[1]==undefined">{{updatedTime}}</span></span>
                        </p>
                    </div>
                    <!-- 第二次 -->
                    <div class="jylcClassDiv" v-if="historyProcess.length>=2">
                        <span>交易进程</span>
                        <p style="color:#666666;">第二次招标</p>
                        <div :class="historyProcess.length>=2&&historyProcess[2]!=undefined?'选标':tradeProcess">
                            <!-- 流程 -->
                            <div>投标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>选标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>中标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>成交</div>
                        </div>
                        <p>
                            <span>交易模式：</span>
                            <span>{{historyProcess[1].mode}}</span>
                            <span class="jyqzTime">交易起止时间：</span>
                            <span>{{historyProcess[1].time}} —— <span v-if="historyProcess[2]!=undefined">{{historyProcess[2].time}}</span><span v-if="historyProcess[2]==undefined&&tradeState=='已成交'">{{updatedTime}}</span></span>
                        </p>
                    </div>
                    <!-- 第三次 -->
                    <div class="jylcClassDiv thirdJylcClassDiv" v-if="historyProcess.length>=3">
                        <span>交易进程</span>
                        <p style="color:#666666;">第三次招标</p>
                        <div :class="tradeProcess">
                            <!-- 流程 -->
                            <div>需求流转</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>投标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>选标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>中标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>成交</div>
                        </div>
                        <p>
                            <span>交易模式：</span>
                            <span>{{historyProcess[2].mode}}</span>
                            <span class="jyqzTime">交易起止时间：</span>
                            <span>{{historyProcess[2].time}} —— <span v-if="tradeState=='已成交'">{{updatedTime}}</span&&tradeState=='已成交'></span>
                        </p>
                    </div>
                    <!-- 多出甄选的交易进程 -->
                    <div class="jylcClassDiv" v-if="false">
                        <span>交易进程，后边的是交易进程的状态{{tradeProcess}}</span>
                        <p style="color:#666666;">第一次招标</p>
                        <div :class="tradeProcess">
                            <!-- 流程 -->
                            <div>甄选</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>投标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>选标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>中标</div>
                            <span class="clircl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div>成交</div>
                        </div>
                        <p>
                            <span>交易模式：</span>
                            <span>{{allStatus}}</span>
                            <span class="jyqzTime">交易起止时间：</span>
                            <span>{{bidEnd}}————{{bidStart}}</span>
                        </p>
                    </div>
                    <span class="box_all_div_title" v-if="false">第一次招标</span>
                    <span class="box_all_div_title" v-if="false">参与投标的服务供应商</span>
                    <!-- 参与投标参与投标的服务供应商 状态为招标中显示  -->
                    <div  class="box_all_div_title_right"  v-if="tradeState=='招标中'&&islianggePerson==true">
                        <span class="box_all_div_title" >参与投标的服务供应商</span>
                        <button @click="selectedAlignBid" :disabled="this.splrList.length<1?true:false" :class="this.splrList.length>0?'':'colorbbbbbb'">
                            <img src="../../../assets/funsIcon/iconZaiCiZhaoBiao.png" alt="图">
                            <span>再次投标</span>
                        </button>
                    </div>
                    <!-- 参与投标参与投标的服务供应商 状态为招标中时显示 -->
                    <div class="box_all_div" v-if="tradeState=='招标中'&&islianggePerson==true">
                        <!-- 盒子壳 -->
                        <div class="qyhy_jyms_box_content" v-for="(item,index) in splrList" :key="index" style="position:relative;">
                            <div class="qyhy_jyms_box_content_ZCTBZ" v-for="(items,indexs) in item.tagList" :key="indexs" v-if="items==1">
                                再次投标中
                            </div>
                            <!-- 简易盒子 -->
                            <div>
                                <!-- 头部 -->
                                <div class="qyhy_jyms_box_content_header">
                                    <img :src="item.logo" alt="" @click="changrRouterLinkTo(item.splrId,projId)">
                                    <el-tooltip class="item" effect="light" content="需要再次投标的服务供应商" placement="top-start">
                                      <div @click="selecteToTBSelectedMore($event,item.splrId)">
                                          <span style="display:none">√</span>
                                      </div>
                                    </el-tooltip>
                                </div>
                                <!-- 身体 -->
                                <div class="qyhy_jyms_box_content_body">
                                    <div>
                                        <p>{{item.splrName}}</p>
                                        <p :alt="item.creditRating">
                                            <img v-for="(itemsun,index) in item.sunNumber" :key="index" src="../../../assets/icon/ri.png" alt="">
                                            <img v-for="(itemmount,index1) in item.mountNumber" :key="index1" src="../../../assets/imgs/mount-y.png" alt="">
                                            <img v-for="(itemstart,index2) in item.startNumber" :key="index2" src="../../../assets/imgs/star-y.png" alt="">
                                        </p>
                                    </div>
                                    <div>
                                        <p><span>{{item.qualityRating}}</span>%</p>
                                        <p>服务优质率</p>
                                    </div>
                                </div>
                                <!-- 尾巴 -->
                                <div class="qyhy_jyms_box_content_wb">
                                    <!-- title -->
                                    <div>
                                        <div class="qyhy_jyms_box_content_wb_acitve" @mouseenter="change('服务标签',$event)">服务标签</div>
                                        <div class="" @mouseenter="change('服务客户',$event)">服务客户</div>
                                    </div>
                                    <div style="visibility:visible;" class="qyhy_jyms_box_content_sjbq">
                                        <span v-for="(items,index) in item.tagList" :key="index" v-if="items!=null&&items!=''" :class="items==1?'qyhy_jyms_box_content_fwkh_active':items==0?'qyhy_jyms_box_content_fwkh_error':''">{{items==1?'再次投标中':items}}</span>
                                    </div>
                                    <div style="visibility:hidden;display:none;" class="qyhy_jyms_box_content_fwkh">
                                        <p v-for="(items,index) in item.surveyCustomerList" :key="index">{{items}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="box_all_div_title"  v-if="tradeProcess=='中标'&&nextStep2==1&&islianggePerson==true&&tradeState!='已终止'&&yehyGys[0]==0" >中标的服务供应商</span>
                    <div class="box_all_div" v-if="tradeProcess=='中标'&&nextStep2==1&&islianggePerson==true&&tradeState!='已终止'&&yehyGys[0]==0">
                        <!-- 盒子壳 -->
                        <div class="qyhy_jyms_box_content" v-for="(item,index) in splrList" :key="index">
                            <!-- 简易盒子 -->
                            <div >
                                <!-- 头部 -->
                                <div class="qyhy_jyms_box_content_header">
                                    <img :src="item.logo" alt="" @click="changrRouterLinkTo(item.splrId,projId)">
                                    <div>
                                        <span>√</span>
                                    </div>
                                </div>
                                <!-- 身体 -->
                                <div class="qyhy_jyms_box_content_body">
                                    <div>
                                        <p>{{item.splrName}}</p>
                                        <p :alt="item.creditRating">
                                            <img v-for="(itemsun,index) in item.sunNumber" :key="index" src="../../../assets/icon/ri.png" alt="">
                                            <img v-for="(itemmount,index1) in item.mountNumber" :key="index1" src="../../../assets/imgs/mount-y.png" alt="">
                                            <img v-for="(itemstart,index2) in item.startNumber" :key="index2" src="../../../assets/imgs/star-y.png" alt="">
                                        </p>
                                    </div>
                                    <div>
                                        <p><span>{{item.qualityRating}}</span>%</p>
                                        <p>服务优质率</p>
                                    </div>
                                </div>
                                <!-- 尾巴 -->
                                <div class="qyhy_jyms_box_content_wb">
                                    <!-- title -->
                                    <div>
                                        <div class="qyhy_jyms_box_content_wb_acitve" @mouseenter="change('服务标签',$event)">服务标签</div>
                                        <div class="" @mouseenter="change('服务客户',$event)">服务客户</div>
                                    </div>
                                    <div style="visibility:visible;" class="qyhy_jyms_box_content_sjbq">
                                        <span v-for="(items,index) in item.tagList" :key="index" v-if="items!=null" :class="items==1?'qyhy_jyms_box_content_fwkh_active':''">{{items==1?'再次招标中':items}}</span>
                                    </div>
                                    <div style="visibility:hidden;display:none;" class="qyhy_jyms_box_content_fwkh">
                                        <p v-for="(items,index) in item.surveyCustomerList" :key="index">{{items}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="box_all_div_title" v-if="tradeProcess=='成交'&&islianggePerson==true&&tradeState!='已终止'" >中标服务供应商信息</span>
                    <div class="gys_details_all_content" v-show="tradeProcess=='成交'&&islianggePerson==true&&tradeState!='已终止'" v-for="(item,index0) in splrList" :key="index0" >
                        <p>
                            <span>公司名称：</span>
                            <span>{{splrList[0].splrName||"暂无"}}</span>
                        </p>
                        <div class="gys_details_all_div">
                            <div>
                                <span>信用等级：</span>
                                <div>
                                    <img v-for="(itemsun,index) in item.sunNumber" :key="index" src="../../../assets/icon/ri.png" alt="">
                                    <img v-for="(itemmount,index2) in item.mountNumber" :key="index2" src="../../../assets/imgs/mount-y.png" alt="">
                                    <img v-for="(itemstart,index3) in item.startNumber" :key="index3" src="../../../assets/imgs/star-y.png" alt="">
                                </div>
                            </div>
                            <div>
                                <span>服务优质率：</span>
                                <span>{{splrList[0].qualityRating||"暂无"}}%</span>
                            </div>
                        </div>
                        <p class="gys_details_all_p">
                            <span>公司简介：</span>
                            <span>{{splrList[0].enterpriceIntro||"暂无"}}</span>
                        </p>
                    </div>
                    <!-- 选择一个供应商使其中标 -->
                    <div class="box_all_div" v-if="tradeProcess=='选标'&&islianggePerson==true&&tradeState!='已终止'">
                        <!-- 盒子壳 -->
                        <div class="qyhy_jyms_box_content" v-for="(item,index) in splrList" :key="index">
                            <!-- 简易盒子 -->
                            <div>
                                <!-- 头部 -->
                                <div class="qyhy_jyms_box_content_header">
                                    <img :src="item.logo" alt="" @click="changrRouterLinkTo(item.splrId,projId)">
                                    <div @click="selecteToTB($event,item.splrId)">
                                        <span style="display:none">√</span>
                                    </div>
                                </div>
                                <!-- 身体 -->
                                <div class="qyhy_jyms_box_content_body">
                                    <div>
                                        <p>{{item.splrName}}</p>
                                        <p :alt="item.creditRating">
                                            <img v-for="(itemsun,index) in item.sunNumber" :key="index" src="../../../assets/icon/ri.png" alt="">
                                            <img v-for="(itemmount,index1) in item.mountNumber" :key="index1" src="../../../assets/imgs/mount-y.png" alt="">
                                            <img v-for="(itemstart,index2) in item.startNumber" :key="index2" src="../../../assets/imgs/star-y.png" alt="">
                                        </p>
                                    </div>
                                    <div>
                                        <p><span>{{item.qualityRating}}</span>%</p>
                                        <p>服务优质率</p>
                                    </div>
                                </div>
                                <!-- 尾巴 -->
                                <div class="qyhy_jyms_box_content_wb">
                                    <!-- title -->
                                    <div>
                                        <div class="qyhy_jyms_box_content_wb_acitve" @mouseenter="change('服务标签',$event)">服务标签</div>
                                        <div class="" @mouseenter="change('服务客户',$event)">服务客户</div>
                                    </div>
                                    <div style="visibility:visible;" class="qyhy_jyms_box_content_sjbq">
                                        <span v-for="(items,index) in item.tagList" :key="index" v-if="items!=null&&items!=''&&items!=0" :class="items==1?'qyhy_jyms_box_content_fwkh_active':''">{{items==1?'再次招标中':items}}</span>
                                    </div>
                                    <div style="visibility:hidden;display:none;" class="qyhy_jyms_box_content_fwkh">
                                        <p v-for="(items,index) in item.surveyCustomerList" :key="index">{{items}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 委托代理 中标  这两个状态显示的专业网络服务交易协议 -->
                    <span class="box_all_div_title" v-if="nextStep2==0&&islianggePerson==true">中标服务供应商信息</span>
                    <div class="gys_details_all_content" v-show="nextStep2==0&&islianggePerson==true" v-for="(item,index0) in splrList" :key="index0" >
                        <p>
                            <span>公司名称：</span>
                            <span>{{splrList[0].splrName||"暂无"}}</span>
                        </p>
                        <div class="gys_details_all_div">
                            <div>
                                <span>信用等级：</span>
                                <div>
                                    <img v-for="(itemsun,index) in item.sunNumber" :key="index" src="../../../assets/icon/ri.png" alt="">
                                    <img v-for="(itemmount,index2) in item.mountNumber" :key="index2" src="../../../assets/imgs/mount-y.png" alt="">
                                    <img v-for="(itemstart,index3) in item.startNumber" :key="index3" src="../../../assets/imgs/star-y.png" alt="">
                                </div>
                            </div>
                            <div>
                                <span>服务优质率：</span>
                                <span>{{splrList[0].qualityRating||"暂无"}}%</span>
                            </div>
                        </div>
                        <p class="gys_details_all_p">
                            <span>公司简介：</span>
                            <span>{{splrList[0].enterpriceIntro||"暂无"}}</span>
                        </p>
                    </div>
                    <div v-if="nextStep2==0&&islianggePerson==true&&yehyGys[0]==0" class="qyhy_details_all_content_jyCg" style="border:0;">
                        <p>
                            请仔细阅读<span style="color:#9e0100;">专业服务网络交易协议</span>后完成交易
                        </p>
                    </div>
                    <!-- 委托代理 中标  这两个状态显示的专业网络服务交易协议 -->
                    <div v-if="nextStep2==0&&islianggePerson==true&&yehyGys[0]==0" class="qyhy_details_all_content_jyCg">
                        <!-- 协议 -->
                        <div class="qyhy_details_all_content_jyCg_div">
                            <h3>专业服务网络交易协议</h3>
                            <p>
                                <span>
                                    本协议由甲方（需求方）和乙方（专业服务供应商）在线签订，请甲方仔细阅读协议内容，请务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。甲方点击接受本协议，即意味着已阅读、理解并接受本协议所有条款，并对本协议条款的含义及相应的法律后果已全部知晓并充分认可。甲方点击确认本协议后，本协议即产生法律约束力。
                                </span>
                                <span>
                                    甲方在阅读本协议的过程中，如不同意本协议或其中任何条款约定，应拒绝接受本协议所约定的内容，甲方有权自主选择拒绝与乙方达成合作。
                                </span>
                                <p>
                                    第一章 定义
                                </p>
                                <p>
                                    除非本协议另有约定，在本协议中所用下列术语定义如下:
                                </p>
                                <p>
                                    第一条 同道合平台：指运营主体为重庆携同道合文化科技有限公司，为用户提供电子商务交易的网络平台，以下简称“平台”，平台网址：<a href="www.tongdaohe.net">www.tongdaohe.net</a>。
                                </p>
                                <p>
                                    第二条 用户：指在服务平台合法注册，接受并认可服务平台相关协议、规则、规范、制度等的自然人、法人或其他非法人组织。
                                </p>
                                <p>
                                    第三条 甲方：指在平台上发布服务需求并支付服务费用的用户。
                                </p>
                                <p>
                                    第四条 乙方：指在平台上提供专业服务并获得报酬的用户。
                                </p>
                                <p>
                                    第五条 服务需求：指甲方基于自身需求向乙方提出的具体服务要求。
                                </p>
                                <p>
                                    第六条 服务费用：指甲方和乙方的交易金额，即本协议约定交易金额或后续经协商调整后确定的交易总金额。
                                </p>
                                <p>
                                    第七条 平台账户：指用户在服务平台注册的账户，用户只能通过该账户登陆平台进行交易。
                                </p>
                                <p>
                                    第二章 甲方权利义务
                                </p>
                                <p>
                                    第一条 甲方应当根据服务需求主动向乙方提交本项目所需的相关资料，并保证该资料的真实性、合法性、准确性、完整性，如因甲方未按照前述标准提供资料导致乙方无法履行协议义务，由此产生的责任由甲方自行承担。
                                </p>
                                <p>
                                    第二条 甲方在向乙方提交项目所涉及资料时有权一并对乙方的服务提出建议和思路，同时有权在验收时对乙方的服务成果提出修改意见，但甲方提出的服务建议或思路以及修改意见应当明确具体，如不明确，乙方有权不听取建议或拒绝修改，同时甲方不得借机拖延进度及应支付的款项，甲方提出超出协议约定范围的修改要求，乙方有权拒绝或者另行收取费用。
                                </p>
                                <p>
                                    第三条 甲方未按照约定托管服务费用的，乙方有权拒绝或顺延提供服务。
                                </p>
                                <p>
                                    第四条 甲方应充分了解且同意遵守同道合平台公布的所有协议、规则、制度等文件，并按照平台的相关规定处理相关交易事项。
                                </p>
                                <p>
                                    第五条 甲方应及时验收乙方交付的服务成果（包括阶段成果和最终成果），如乙方向甲方提交服务成果后10天内甲方未给出具体验收意见的，视为乙方提交的服务成果合格。如有下一阶段服务的，乙方有权继续推进；如下一阶段服务因甲方原因导致无法继续推进的，乙方不承担任何责任。
                                </p>
                                <p>
                                    第六条 甲方有义务向乙方提供必要的配合义务，包括提供必要资料、及时验收、及时回复、及时付款等。
                                </p>
                                <p>
                                    第七条 甲方同意并知晓，乙方仅提供合法、合规、合理的服务，对甲方违背法律法规或行政规章的服务要求，乙方有权拒绝提供服务。
                                </p>
                                <p>
                                    第八条 甲方应当保证委托的服务事项不违反任何法律法规或侵犯他人合法权利，否则乙方有权拒绝提供服务并有权立即解除本协议，甲方已支付费用作为违约金不予退还。
                                </p>
                                <p>
                                    第九条 甲方应当保证合法使用乙方提交的服务成果，不得将服务成果用于任何违法违规或侵犯他人合法权益的活动，甲方应自行承担服务成果使用过程中发生的全部责任。
                                </p>
                                <p>
                                    第十条 甲方同意，为便于甲方交易，本协议作为交易的主要内容和双方之间权利义务的根本性约定，具体服务范围、服务目标及期限、服务计划、项目费用及付款方式等约定内容，甲方于平台网签时在《同道合平台专业服务三方合同》（以下或称“合同”）予以共同约定，甲方对在网签中提供的所有信息的真实性负责。
                                </p>
                                <p>
                                    第十一条 甲方网签时，应仔细确认所需要的服务计划、阶段服务起止时间、项目费用、支付比例等信息。该等信息将作为甲方的真实意思表示，甲方应对该等信息的法律后果承担责任。
                                </p>
                                <p>
                                    第十二条 甲方理解并同意：网签时系统生成的信息是计算机信息系统根据甲方填写的内容自动生成的数据，仅是甲方发出的合同要约；乙方收到甲方的网签请求并确认提供服务，合同立即生效，甲方应根据合同约定向平台支付服务费用，由平台根据项目进展情况向乙方支付服务费用。
                                </p>
                                <p>
                                    第三章 乙方权利义务
                                </p>
                                <p>
                                    第一条 乙方应按照本协议约定的时间和质量向甲方提供服务。
                                </p>
                                <p>
                                    第二条 乙方应当积极听取甲方的修改意见，甲方提出合理需求且提出明确的修改意见的，乙方在提交服务成果后可提供不超过三次的修改服务，但超出协议约定内容的修改需求乙方有权拒绝。
                                </p>
                                <p>
                                    第三条 乙方应当对甲方提供的相关资料承担保密义务，除为履行本协议义务及法律规定外，不得向第三方透露。
                                </p>
                                <p>
                                    第四条 乙方有权要求甲方按照合同约定支付相应款项，否则乙方有权拒绝或顺延提供服务。
                                </p>
                                <p>
                                    第五条 甲方与乙方约定一次性完成工作的，乙方未在合同约定期限（含变更期限）内完成工作（含变更内容）的，甲方有权拒绝支付未确认部分的服务费用。期限届满后，如在甲方催告要求交付服务成果或申请退款之时起10天内，乙方仍无法交付服务成果，乙方同意将未完成部分的费用退款给甲方，但甲方与乙方另有约定的除外。
                                </p>
                                <p>
                                    第六条 甲方与乙方约定分阶段工作的，乙方完成阶段性工作，甲方应在10天内予以验收确认，如验收合格应支付已完成阶段的服务费用；如甲方在10天内未予以验收的或对服务成果未提出异议的，视为验收合格，乙方有权要求甲方支付已完成阶段的服务费用。经甲方验收合格并确认支付服务费用后产生纠纷的，已支付服务费用不予退回，但甲方与乙方另有约定的除外。
                                </p>
                                <p>
                                    第七条 乙方应按照法律规定自行缴纳相应税费。
                                </p>
                                <p>
                                    第八条 乙方可能会向实现甲方需求所必须的关联方或合作伙伴共享甲方的服务需求信息，以保障为甲方提供的服务顺利进行。比如乙方必须将甲方的服务需求信息与第三方服务供应商共享来实现甲方的服务需求，并使其完成后续的售后服务，甲方对此无异议。
                                </p>

                                <p>
                                    第四章 服务费用流转和发票
                                </p>
                                <p>
                                    第一条 乙方委托重庆携同道合文化科技有限公司代为处理服务费用收支事宜。
                                </p>
                                <p>
                                    第二条 乙方应当按照甲方最终实际支付的服务费用向甲方开具合法有效的发票。
                                </p>

                                <p>
                                    第五章 知识产权
                                </p>
                                <p>
                                    第一条 本协议所产生成果的知识产权在甲方支付完全部服务费用后，归甲方所有，乙方或乙方委托提供服务的第三方保留法律规定禁止转让部分的知识产权，同时保留服务成果用于平台案例展示、平台优秀案例评选的权利。但甲方与乙方另有约定的除外。
                                </p>
                                <p>
                                    第二条 乙方应当保证服务成果符合国家法律法规的规定，不存在任何侵犯第三方的所有权、知识产权、名誉权、肖像权等侵权行为，并承担因此产生的全部责任。
                                </p>
                                <p>
                                    第三条 甲方的服务需求如需采购第三方知识产权产品的，乙方应当及时告知甲方经甲方书面同意且支付采购费用后，乙方予以采购并使用或有甲方自行采购并提供给乙方使用。
                                </p>
                                <p>
                                    第四条 甲方在未付清所有服务费用之前，不得主张服务成果的知识产权。如甲方在未付清服务费用之前自行或许可他人使用（包含但不限于直接使用、修改后使用）乙方提交的服务成果的，导致乙方或者其他第三方遭受损失的，甲方应承担由此产生的全部责任。
                                </p>
                                <p>
                                    第五条 甲方应积极就服务成果申请相关知识产权（如有），如发生第三方侵权的，乙方可协助甲方维权，但不对维权结果承担任何责任。
                                </p>

                                <p>
                                    第六章 责任限制
                                </p>
                                <p>
                                    乙方依照法律规定履行基础保障义务，但对于下述原因导致的合同履行障碍、履行瑕疵、履行延后或履行内容变更等情形，乙方并不承担相应的违约责任：
                                </p>
                                <p>
                                    第一条 因自然灾害、罢工、暴乱、战争、政府行为、司法行政命令等不可抗力因素；
                                </p>
                                <p>
                                    第二条 因电力供应故障、通讯网络故障等公共服务因素或第三人因素；
                                </p>
                                <p>
                                    第三条 在乙方已尽善意管理的情况下，因常规或紧急的设备与系统维护、设备与系统故障、网络信息与数据安全等因素。
                                </p>

                                <p>
                                    第七章 违约责任
                                </p>
                                <p>
                                    第一条 乙方未按照本协议约定按时提交服务成果的，应按项目费用总额的2‰/天向甲方支付违约金(在未付款中扣除)，延期达20天及以上的，除双方另有约定外，双方均有权解除协议，乙方已收取的服务费用（预付款或阶段预付款）应予退还（同时承担违约金）。乙方承担责任以收取的服务费用为限，仅在已收取的服务费用范围内承担责任。
                                </p>
                                <p>
                                    第二条 甲方在服务期间无正当理由单方终止协议的，已发生的服务费用或阶段服务费用无权要求返还。
                                </p>
                                <p>
                                    第三条 乙方在服务期间无正当理由单方终止协议的，未完成验收部分的服务费用应当退回给甲方。
                                </p>

                                <p>
                                    第八章 争议解决
                                </p>
                                <p>
                                    第一条 因本协议及与本协议有关的争议、解释等，均适用中华人民共和国法律。
                                </p>
                                <p>
                                    第二条 本协议签订或履行过程中，如有争议，双方应当友好协商解决；协商不成，双方一致同意提交重庆仲裁委员会进行仲裁。
                                </p>

                                <p>
                                    第九章 其他
                                </p>
                                <p>
                                    第一条 本协议以电子文本形式生成，甲方与乙方完成协议订立手续后，即具有与手写签名同等的法律效力。
                                </p>
                                <p>
                                    第二条 本协议中的任何约定如违反法律法规的规定而无效的，该无效条款不影响本协议其他条款的效力，甲方与乙方仍因履行其他条款所约定的权利义务。
                                </p>
                                <p>
                                    第三条 甲方、乙方点击“同意”按钮即视为完全接受本协议，在点击之前请再次确认已知悉并完全理解本协议的全部内容。
                                </p>
                            </p>
                        </div>
                    </div>
                    <div v-if="islianggePerson==true&&yehyGys[0]==1&&yehyGys[1]==0" class="qyhy_details_all_content_yqr">感谢您对同道合平台的支持和信任,请等待对方完成本协议的最终确认</div>
                </div>
                <!-- 招标中，投标的下一步 -->
                <div class="qyhy_jyms_box_content_wb_buttonDiv" v-if="tradeProcess=='投标'&&islianggePerson==true&&tradeState!='已终止'">
                    <button class="qyhy_jyms_box_content_wb_button" @click="nextStep" :disabled="this.splrList.length<1?true:false" :class="this.splrList.length>0?'':'colorbbbbbb'">下一步</button>
                </div>
                <div class="qyhy_jyms_box_content_wb_buttonDiv" v-if="tradeProcess=='中标'&&islianggePerson==true&&tradeState!='已终止'">
                    <button class="qyhy_jyms_box_content_wb_button" v-if="nextStep2==1&&yehyGys[0]==0" @click="changeNextStep2">下一步</button>
                </div>
                <div class="qyhy_jyms_box_content_wb_buttonDiv"  v-if="nextStep2==0&&islianggePerson==true&&tradeState!='已终止'&&yehyGys[0]==0" >
                    <button class="qyhy_jyms_box_content_wb_button" @click="ImAgree">已阅读,我同意</button>
                </div>
                <div class="qyhy_jyms_box_content_wb_buttonDiv qyhy_jyms_box_content_wb_buttonDiv_span_img" v-if="tradeProcess=='选标'&&islianggePerson==true&&tradeState!='已终止'">
                    <button class="qyhy_jyms_box_content_wb_button" @click="selectedGYS" :disabled="splrId==''?true:false">选择中标</button>
                    <!-- 第一次 -->
                    <div v-if="historyProcess.length==1" class="historyProcessDiv">
                        <img src="../../../assets/funsIcon/gantanhao.png" style="margin-right:4px;" alt="">
                        <span>没有合适供应商？您可以选择<a href="javascript:;" @click="alignTendering">再次招标</a>,<a href="javascript:;" @click="demandClose(1)">流标</a></span>
                    </div>
                    <!-- 第二次 -->
                    <div v-if="historyProcess.length==2" class="historyProcessDiv">
                        <img src="../../../assets/funsIcon/gantanhao.png" style="margin-right:4px;" alt="">
                        <span>没有合适供应商？您可以选择<a href="javascript:;"  @click="alignTenderings">需求流转</a>,<a href="javascript:;" @click="demandClose(2)">直接流标</a></span>
                    </div>
                    <div v-if="historyProcess.length==3" class="historyProcessDiv">
                        <img src="../../../assets/funsIcon/gantanhao.png" style="margin-right:4px;" alt="">
                        <span>没有合适供应商？您可以选择<a href="javascript:;" @click="demandClose(2)">直接流标</a></span>
                    </div>
                    <div class="bck"
                        v-show="demandClosevalue2">
                        <div class="enterprisEcertification">
                            <div class="topentrt">
                                <span>
                                    <span></span>需求流转
                                </span>
                                <div>
                                    <img src="../../../assets/tc/close.png"
                                        alt="close"
                                        @click="closedemandClose2()">
                                </div>
                            </div>
                            <div class="toContentPre">
                                <img src="../../../assets/icon/isalign.png" alt="图片">
                                <span>是否进行需求流转</span>
                            </div>
                            <div class="updata-btn">
                                <button @click="closedemandClose2()">取消</button>
                                <button @click="realyDemandClose2()">确定</button>
                            </div>
                        </div>
                    </div>
                    <div class="bck"
                        v-show="demandClosevalue3">
                        <div class="enterprisEcertification">
                            <div class="topentrt">
                                <span>
                                    <span></span>再次招标
                                </span>
                                <div>
                                    <img src="../../../assets/tc/close.png"
                                        alt="close"
                                        @click="closedemandClose3()">
                                </div>
                            </div>
                            <div class="toContentPre">
                                <img src="../../../assets/icon/isalign.png" alt="图片">
                                <span>是否进行再次招标</span>
                            </div>
                            <div class="updata-btn">
                                <button @click="closedemandClose3()">取消</button>
                                <button @click="realyDemandClose2()">确定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span>关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>
    </div>
</template>
<script>
import { 
    getProjDetailByCorp,
    corpTenderNextStep,
    corpReTender,
    corpRevokeNeed,
    chooseWinningBid,
    completeTransaction,
    checkCompleteTransaction,
} from "@/components/api/api";
export default {
    data() {
        return {
            // 获取href传过来的参数
            projId:this.$route.query.projId,
            // 获取的数据数组
            arrSUXQ:[],
            // 获取数据的标题前半部分
            businessType:"",
            // 获取数据的标题后半部分
            field:"",
            // 项目状态 
            tradeState:"",
            // 开始时间
            createdTime:"",
            // 结束时间
            overTime:"",
            // 预算金额
            costBudget:"",
            // 项目标签
            type1:"",
            type2:"",
            // 主要需求
            mainRequire:"",
            // 服务内容
            serveContent:"",
            // 预期效果
            resultExpect:"",
            // 交易模式的状态  目前只有这个
            allStatus:"",
            // 发布日期
            FBcreatedTime:"",
            // 交易进程
            tradeProcess:"",
            // 交易起止时间
            bidEnd:"",
            bidStart:"",
            // 参与投标的列表
            splrList:[],
            // 星星 月亮数量
            startNumber:0,
            mountNumber:0,
            sunNumber:0,
            // 第一次选择一个或多个服务供应商 ID集合
            projIdList:[],
            splrId:"",
            nextStep2:1,
            islianggePerson:false,
            isAlongToClick:false,
            demandClosevalue:false,
            demandClosevalue2:false,
            // 显示共有多少次流程交易
            historyProcess:[],
            selecteToTBList:[],
            updatedTime:"",
            demandClosevalue3:false,
            demandClosevalues:false,
            reason:"",
            reasonType:"",
            yehyGys:[],
            terminReason:""
        }
    },
    methods: {
        // 
        timestampToTime(timestamp) {
            var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '年';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
            let D = this.changes(date.getDate()) + '日';
            let h = this.changes(date.getHours()) + ':';
            let m = this.changes(date.getMinutes()) + ':';
            let s = this.changes(date.getSeconds());
            // return Y + M + D + h + m + s;
            return Y + M + D;
        },
        changes(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        },
        // 初始数据渲染
        defaultMounted(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            //数据渲染
            getProjDetailByCorp({projId:this.projId}).then(res => {
                if (res.data.code === 200) {
                    this.updatedTime=this.timestampToTime(res.data.data.updatedTime);
                    this.arrSUXQ=res.data.data;
                    this.businessType=res.data.data.businessType;
                    this.field=res.data.data.field;
                    this.field=res.data.data.field;
                    this.createdTime=res.data.data.releaseStart;
                    this.overTime=res.data.data.releaseEnd;
                    this.costBudget=res.data.data.costBudget;
                    this.terminReason=res.data.data.terminReason
                    this.type1=res.data.data.businessType;
                    this.type2=res.data.data.field;
                    this.mainRequire=res.data.data.mainRequire;
                    this.serveContent=res.data.data.serveContent;
                    this.resultExpect=res.data.data.resultExpect;
                    this.allStatus=res.data.data.tradeMode;
                    this.FBcreatedTime=res.data.data.createdTime;
                    this.tradeProcess=res.data.data.tradeProcess;
                    this.bidEnd=res.data.data.bidEnd;
                    this.bidStart=res.data.data.bidStart;
                    this.splrList=res.data.data.splrList;
                    this.historyProcess=JSON.parse(res.data.data.historyProcess);
                    for(var i=0;i<this.historyProcess.length;i++){
                        this.historyProcess[i].time=this.timestampToTime(this.historyProcess[i].time)
                    }
                    let date = new Date();
                    let date2=new Date(this.FBcreatedTime)
                    if(user.roleId==res.data.data.corpId&&date2-date<259200000){
                        this.isAlongToClick=true;
                    }
                    this.tradeState=res.data.data.tradeState;
                    // 信用等级计算 每个星星一级 一个月亮四级  一个太阳四级
                    for(var i=0;i<res.data.data.splrList.length;i++){
                        let level=res.data.data.splrList[i].creditRating;
                        if(0<=level&&level<4){
                            // 这里只有星星
                            this.splrList[i].startNumber=level;
                        }else if(4<=level&&level<16){
                            // 有星星 有月亮
                            this.splrList[i].startNumber=level%4
                            this.splrList[i].mountNumber=parseInt(level/4)
                        }else if(16<=level){
                            // 有星星 有月亮 有太阳
                            this.splrList[i].sunNumber=parseInt(parseInt(level/4)/4);
                            this.splrList[i].startNumber=level%4
                            this.splrList[i].mountNumber=parseInt(level/4)
                        }
                    }
                    if(this.tradeProcess=="中标"&&this.tradeState=="选标中"){
                        checkCompleteTransaction({"projId":this.projId}).then(res => {
                            this.yehyGys=res.data.data;
                        })
                    }
                    if(user.roleId==res.data.data.corpId){
                        this.islianggePerson=true;
                    }
                }
            });
        },
        // 服务供应商盒子中服务标签和服务客户切换.
        change(html,e){
            if(html=="服务标签"){
                e.currentTarget.nextElementSibling.className=""
                e.currentTarget.parentElement.nextElementSibling.style.visibility="visible";
                e.currentTarget.parentElement.nextElementSibling.style.display="flex";
                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style.visibility="hidden";
                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style.display="none";
            }else{
                e.currentTarget.previousElementSibling.className=""
                e.currentTarget.parentElement.nextElementSibling.style.visibility="hidden";
                e.currentTarget.parentElement.nextElementSibling.style.display="none";
                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style.visibility="visible";
                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style.display="block";
            }
            e.currentTarget.className="qyhy_jyms_box_content_wb_acitve"
        },
        // 服务供应商盒子中商家图片点击进入商家详情，以及投标文件.
        changrRouterLinkTo(splrId,projId){
            this.$router.push({path:"qyhyFillInBidInfo",query:{"splrId":splrId,"projId":projId}})
        },
        // 选标中  选择一个服务供应商使其中标
        selecteToTB(e,splrId){
            if(e) {
                e.stopPropagation ? e.stopPropagation(): e.cancelBubble = true;
            }
            var parent=document.getElementsByClassName("qyhy_jyms_box_content_header");
            for(var i=0;i<parent.length;i++){
                parent[i].lastElementChild.firstElementChild.style.display="none";
            }
            if(e.currentTarget.firstElementChild.style.display=="block"){
                e.currentTarget.firstElementChild.style.display="none";
            }else{
                e.currentTarget.firstElementChild.style.display="block";
            }
            this.splrId=splrId;
        },
        // 选择一个以上服务供应商使其再次投标
        selecteToTBSelectedMore(e,splrId){
            if(e) {
                e.stopPropagation ? e.stopPropagation(): e.cancelBubble = true;
            }
            if(e.currentTarget.firstElementChild.style.display=="block"){
                e.currentTarget.firstElementChild.style.display="none";
                for(var i=0;i<this.projIdList.length;i++){
                    if(this.projIdList[i].splrId==splrId){
                        this.projIdList.splice(i, 1); 
                    }
                }
            }else{
                e.currentTarget.firstElementChild.style.display="block";
                this.projIdList.push({
                    "projId": this.projId,
                    "splrId": splrId
                })
            }
        },
        // 再次投标
        selectedAlignBid(){
            if(this.projIdList.length>0){
                corpReTender(this.projIdList).then(res => {
                    if(res.data.code==200){
                        this.$notify({
                            title: "企业会员再次发起投标",
                            message: res.data.msg,
                            type: 'success',
                            position: 'top-left'
                        });
                        this.defaultMounted();
                    }else{
                        this.$notify({
                            title: "操作失败",
                            message: res.data.msg,
                            type: 'error',
                            position: 'top-left'
                        });
                    }
                })
            }else{
                this.$notify({
                    title: "操作失败",
                    message: "您尚未选择任何供应商进行再次投标！",
                    type: 'error',
                    position: 'top-left'
                });
            }
            
        },
        // 下一步  投标到选标的按钮
        nextStep(){
            // if(this.projIdList.length!=0){
                corpTenderNextStep({projId:this.projId}).then(res => {
                    if (res.data.code === 200) {
                        this.$notify({
                            title: "操作成功",
                            message: res.data.msg,
                            type: 'success',
                            position: 'top-left'
                        });
                        this.defaultMounted();
                    }else{
                        this.$notify({
                            title: "操作失败",
                            message: res.data.msg,
                            type: 'error',
                            position: 'top-left'
                        });
                        this.defaultMounted();
                    }
                })
            // }else{
            //     this.$notify({
            //         title: "操作失败",
            //         message: "您至少需要选择一位供应商！",
            //         type: 'error',
            //         position: 'top-left'
            //     });
            // }
        },
        // 下一步  中标（下一步）--阅读并同意网络协议
        changeNextStep2(){
            this.nextStep2=0;
        },
        // 需求关闭
        realyDemandClose(){
            // reason 终止原因
            if(this.reasonType==3){
                this.reason="未找到合适的服务供应商"
            }
            corpRevokeNeed({"projId":this.projId,"endReason":this.reason}).then(res => {
                if (res.data.code === 200) {
                    this.demandClosevalue=false;
                    this.demandClosevalues=true;
                    this.defaultMounted();
                }else{
                    this.demandClosevalue=false;
                    this.$notify({
                        title: "操作失败",
                        message: res.data.msg,
                        type: 'error',
                        position: 'top-left'
                    });
                    this.defaultMounted();
                }
            })
        },
        realyDemandCloses(){
            this.demandClosevalues=false;
            this.defaultMounted();
        },
        // 确认需求关闭弹窗
        demandClose(id){
            this.reasonType=id
            this.demandClosevalue=true;
        },
        // 再次招标
        alignTendering(){
            this.demandClosevalue3=true;
        },
        alignTenderings(){
            this.demandClosevalue2=true;
        },
        // 取消需求关闭
        closedemandClose(){
            this.demandClosevalue=false;
        },
        closedemandCloses(){
            this.demandClosevalues=false;
        },
        closedemandClose2(){
            this.demandClosevalue2=false;
        },
        closedemandClose3(){
            this.demandClosevalue3=false;
        },
        // 
        realyDemandClose2(){
            // corpReTendering为1时没有指定商家有资质证书
            // corpReTendering为2时有指定商家没有资质证书
            this.$router.push({path:"updateDemand",query:{"projId":this.projId,"corpReTender":1}})
        },
        // 需求修改
        demandModify(){
            this.$router.push({path:"updateDemand",query:{"projId":this.projId}})
        },
        // 选择中标
        selectedGYS(){
            chooseWinningBid({"projId":this.projId,"splrId":this.splrId}).then(res => {
                if (res.data.code === 200) {
                    this.$notify({
                        title: "操作成功",
                        message: res.data.msg,
                        type: 'success',
                        position: 'top-left'
                    });
                    this.defaultMounted();
                }else{
                    this.$notify({
                        title: "操作失败",
                        message: res.data.msg,
                        type: 'error',
                        position: 'top-left'
                    });
                    this.defaultMounted();
                }
            })
        },
        // 我已阅读，同意
        ImAgree(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            completeTransaction({"projId":this.projId,"corpId":user.roleId}).then(res => {
                // 需要双方均同意才生效:即企业会员同意和供应商同意
                if (res.data.code === 200) {
                    this.$notify({
                        title: "操作成功",
                        message: res.data.msg,
                        type: 'success',
                        position: 'top-left'
                    });
                    this.defaultMounted();
                }else{
                    this.$notify({
                        title: "操作失败",
                        message: res.data.msg,
                        type: 'error',
                        position: 'top-left'
                    });
                    this.defaultMounted();
                }
            })
        }
    },
    mounted(){
        this.defaultMounted();
    }
}
</script>
<style scoped>
    .sendTimeDiv>font>button{
        cursor:pointer;
    }
    .sendTimeDiv2>font>span:first-child{
        display: inline-block;
        width: 14%;
    }
    .sendTimeDiv2>font>span:last-child{
        color: #999;
    }
    .sendTimeDiv2{
        margin-top: 24px;
    }
    .qyhy_details_all{
        width: 100%;
        height: auto;
        background: #fafafa;
    }
    .qyhy_details_all>div{
        width: 80%;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .qyhy_details_all>div:last-child{
        display: flex;
        padding: 50px 24px;
        background: #fff;
    }
    .qyhy_details_all_title{
        padding: 16px;
        color: #9e0100;
        font-weight: bolder;
    }
    .qyhy_details_all_title:before{
        content: '<';
        margin-right: 8px;
    }
    .qyhy_details_all_title>a{
        color: #9e0100;
        font-weight: bolder;
    }
    .qyhy_details_all_content{
        display: flex;
        background: #fff;
        padding: 32px 0;
    }
    .qyhy_details_all_content>div:first-child{
        width: 25%;
        display: flex;
        justify-content: center;
    }
    .qyhy_details_all_content>div:first-child>img{
        width: 340px;
        height: 200px;
    }
    .qyhy_details_all_content>div:last-child{
        width: 75%;
    }
    .right_content_title{
        width:100%;
        display: flex;
    }
    .right_content_title>div{
        width: 90%;
    }
    .right_content_title>button{
        width: 90px;
        height: 28px;
        border: 0;
        border-radius: 14px;
        color: #fff;
    }
    .right_content_title>div>p:first-child>span:first-child{
        font-size: 22px;
    }
    .right_content_title>div>p:first-child>span:last-child{
        margin-left: 20px;
        color: #a1a1a1;
        font-size: 12px;
    }
    .right_content_title>div>p:last-child>span:first-child{
        font-size: 18px;
        color: #a1a1a1;
        margin-right: 26px;
    }
    .right_content_title>div>p:last-child>span:first-child>span{
        color: #9e0100;
        font-size: 24px;
    }
    .right_content_title>div>p+p{
        margin-top: 21px;
    }
    .right_content_title>div>p:last-child>span:not(:first-child){
        font-size: 18px;
        color: #a1a1a1;
    }
    .right_content_title>div>p:last-child>span:nth-child(2)::after{
        content: "|";
        display: inline-block;
        margin: 0 8px;
    }
    .right_content_body>p{
        margin-top: 24px;
    }
    .qyhy_details_all_content+span{
        display: block;
        color: #bbbbbb;
        padding-top: 32px;
        text-align: center;
        background: #f9f9f9;
        margin:0 auto;
        margin-bottom: 32px;
    }
    .clircl{
        display: inline-block;
        width: 64px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 8px;
    }
    .clircl>span{
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #dddddd;
    } 
    .招标中,.选标中{
        background: #e47b1e;
    }
    .sendTimeDiv,.jylcClassDiv{
        margin-top: 24px;
    }
    .sendTimeDiv{
        display: flex;
        justify-content: space-between;
    }
    .sendTimeDiv>font{
        width: 50%;
    }
    .sendTimeDiv>font:last-child{
        display: flex;
        flex-direction: row-reverse;
        padding-right: 2%;
    }
    .sendTimeDiv>font:last-child>button{
        width: 96px;
        height: 32px;
        border: 0;
        margin-left: 12px;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        user-select: none;
    }
    .sendTimeDiv>font:last-child>button>span{
        margin-left: 5%;
    }
    .right_content_body>p>span:first-child{
        display: inline-block;
        width: 14%;
        white-space: nowrap;
    }
    .sendTimeDiv>font>span:first-child{
        display: inline-block;
        width:24%;
    }
    .right_content_body>p>span:last-child{
        color: #999999;
    }
    .sendTimeDiv>font>span:nth-child(2){
        color: #999999;
    }
    .jylcClassDiv>span{
        font-size: 18px;
        color: #000;
    }
    .jylcClassDiv>div{
        display: flex;
        margin-top: 24px;
    }
    .jylcClassDiv>div>div{
        width: 96px;
        height: 28px;
        background:#dddddd;
        border-radius: 4px;
        text-align: center;
        line-height: 28px;
        color: #9e0100;
        font-weight: bold;
    }
    .jylcClassDiv>p{
        margin-top: 24px;
    }
    .jylcClassDiv>p>span:nth-child(odd){
        display: inline-block;
        width: 10%;
        color: #000;
        white-space: nowrap;
    }
    .jylcClassDiv>p>span:nth-child(4){
        margin-left: 20px;
    }
    .jylcClassDiv>p>span:nth-child(even){
        display: inline-block;
        color: #666666;
    }
    .box_all_div{
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        margin: 24px 0;
    } 
    .box_all_div_title{
        display: block;
        margin: 24px 0;
    }
    .qyhy_jyms_box_content{
        width: 31%;
        height: auto;
        border: 1px solid #f6f6f6;
        margin: 0 1%;
    }
    .qyhy_jyms_box_content_header{
        width: 100%;
        position: relative;
    }
    .qyhy_jyms_box_content_header>img{
        width: 125px;
        height: 70px;
        display: block;
        margin: 4px auto;
    }
    .qyhy_jyms_box_content_header>div{
        position: absolute;
        top: 10%;
        left: 90%;
        width: 14px;
        height: 14px;
        border: 1px solid #dddddd;
        z-index: 9;
    }
    .qyhy_jyms_box_content_header>div>span{
        color: #9e0100;
    }
    .qyhy_jyms_box_content_body{
        display: flex;
    }
    .qyhy_jyms_box_content_body>div:first-child{
        width: 60%;
    }
    .qyhy_jyms_box_content_body>div:last-child{
        width: 40%;
    }
    .qyhy_jyms_box_content_body>div>p{
        font-size: 16px;
        color: #666666;
        width: 100%;
        text-align: left;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-top: 16px;
        padding: 0 0 0 16px;
    }
    .qyhy_jyms_box_content_body>div>p+p{
        margin: 12px 0;
    }
    .qyhy_jyms_box_content_body>div:last-child>p{
        text-align: center;
        padding: 0 16px 0 0;
    }
    .qyhy_jyms_box_content_body>div:last-child>p>span{
        font-size: 20px;
        color: #9e0100;
    }
    .qyhy_jyms_box_content_wb{
        background: #fcfcfc;
    }
    .qyhy_jyms_box_content_wb>div:first-child{
        display: flex;
        margin-bottom: 12px;
        padding-left: 16px;
    } 
    .qyhy_jyms_box_content_wb>div:first-child>div{
        color: #666666;
    }
    .qyhy_jyms_box_content_wb>div:first-child>div+div{
        margin-left: 5%;
        padding-bottom: 4px;
        border-bottom: 2px solid #fff;
    }
    .qyhy_jyms_box_content_wb>div:first-child>.qyhy_jyms_box_content_wb_acitve{
        border-bottom: 2px solid #9e0100;
        color: #000;
    }
    .qyhy_jyms_box_content_sjbq{
        display: flex;
        flex-wrap: wrap;
        padding: 0 16px;
        height: 150px;
        padding-bottom: 16px;
        justify-content: space-between;
        overflow: hidden;
    }
    .qyhy_jyms_box_content_fwkh{
        height: 150px;
        padding: 0 16px;
        padding-bottom: 16px;
    }
    .qyhy_jyms_box_content_sjbq>span{
        width: 46%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: block;
        flex-shrink: 0;
        border: 1px solid #dddddd;
        border-radius: 18px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        
    }
    .qyhy_jyms_box_content_wb_buttonDiv{
        width: 520px;
        margin: 0 auto;
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
    }
    .qyhy_jyms_box_content_wb_button{
        width:240px;
        height: 42px;
        border: 0;
        border-radius: 21px;
        margin: 0 auto;
        background: #9e0100;
        color: #fff;
    }
    .qyhy_jyms_box_content_wb_button+div{
        margin: 2rem 0;
    }
    .qyhy_jyms_box_content_wb_button+div>span{
        font-size: 14px;
    }
    .qyhy_jyms_box_content_wb_button+div>span>a{
        color: #9e0100;
    }
    .qyhy_jyms_box_content_wb_buttonDiv_span_img{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .qyhy_jyms_box_content:nth-child(n+4){
        margin-top: 32px;;
    }
    .qyhy_details_all_content_jyCg{
        padding: 8px 4px;
        box-sizing: border-box;
        border:1px solid #dddddd;
        margin: 32px 0;
    }
    .qyhy_details_all_content_jyCg>p{
        margin-top: 16px;
    }
    .qyhy_details_all_content_jyCg>div{
        margin: 16px 0;
    }
    .qyhy_details_all_content_jyCg>div{
        width: 100%;
        height: 500px;
        overflow-y: scroll;
    }
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar {
        width: 10px;
    }
    /* 滚动槽 */
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar-track {
        border-radius: 8px;
    }
    /* 滚动条滑块 */
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, 1);
        box-shadow: 8px 0 0 #dddddd inset;
    }
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 #dddddd inset;
    }
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    .qyhy_details_all_content_jyCg>div:hover::-webkit-scrollbar {
        width: 10px;
    }
    .qyhy_details_all_content_jyCg>div::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgba(0,0,0,0);
        box-shadow: 10px 0 0 #eeeeee inset;
    } 
    .qyhy_details_all_content_jyCg>div {
        overflow-y: overlay;
        word-wrap: break-word;
    }
    .jyqzTime{
        margin-left:10%;
    }
    .qyhy_details_all_content_selectedBiao{
        margin: 32px 0;
    }
    .qyhy_details_all_content_selectedBiao>div+div{
        margin-top: 32px;
        display: flex;
    }
    .qyhy_details_all_content_selectedBiao>div+div>div{
        margin-left: 5%;;
    }
    .qyhy_details_all_content_selectedBiao>div+div>div:nth-child(2){
        margin-left: 0;
    }
    .qyhy_details_all_content_selectedBiao>div>span:nth-child(odd){
        color: #000;
        display: inline-block;
        width: 10%;
        margin-left: 10%;
    }
    .qyhy_details_all_content_selectedBiao>div>span:first-child{
        margin: 0;
    }
    .qyhy_details_all_content_selectedBiao>div>span:nth-child(even){
        color: #999999;
    }
    .qyhy_details_all_content_selectedBiao>div>div>span>span{
        display: inline-block;
        margin: 0 8px;
        user-select: none;
    }
    .box_all_div_title_right{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 2%;
    }
    .box_all_div_title_right>button{
        width: 96px;
        height: 32px;
        border:0;
        background: #9e0100;
        color: #fff;
    }
    .gys_details_all_content{
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    .gys_details_all_content>h5{
        font-size: 18px;
        font-weight: bold;
        color: #000;
        line-height: 4rem;
    }
    .gys_details_all_content>p>span:first-child{
        font-size: 16px;
        color: #666666;
        width: 10%;
    }
    .gys_details_all_content>p>span:last-child{
        font-size: 16px;
        color: #999999;
    }
    .gys_details_all_div{
        display: flex;
        padding: 2rem 0;
        align-items: center;
    }
    .gys_details_all_div>div{
        width: 50%;
        display: flex;
        align-items: center;
    }
    .gys_details_all_div>div>span:last-child{
        color: #9e0100;
    }
    .jylcClassDiv>.投标,.jylcClassDiv>.选标{
        background: none !important;
    }
    .jylcClassDiv>.投标>div:first-child{
        background: #9e0100 !important;
        color: #fff !important;
    }
    .jylcClassDiv>.投标>div:first-child+span>span{
        background: #9e0100 !important;
    }
    .jylcClassDiv>.选标>div:first-child,.jylcClassDiv>.选标>div:nth-child(3){
        background: #9e0100 !important;
        color: #fff !important;
    }
    .jylcClassDiv>.选标>div:first-child+span>span,.jylcClassDiv>.选标>div:nth-child(3)+span>span{
        background: #9e0100 !important;
    }
    .jylcClassDiv>.中标>div:first-child,.jylcClassDiv>.中标>div:nth-child(3),.jylcClassDiv>.中标>div:nth-child(5){
        background: #9e0100 !important;
        color: #fff !important;
    }
    .jylcClassDiv>.中标>div:first-child+span>span,.jylcClassDiv>.中标>div:nth-child(3)+span>span,.jylcClassDiv>.中标>div:nth-child(5)+span>span{
        background: #9e0100 !important;
    }
    .jylcClassDiv>.成交>div{
        background: #9e0100 !important;
        color: #fff !important;
    }
    .jylcClassDiv>.成交>div+span>span{
        background: #9e0100 !important;
    }
    .thirdJylcClassDiv>.投标,.jylcClassDiv>.选标{
        background: none !important;
    }
    .thirdJylcClassDiv>.投标>div:first-child,.thirdJylcClassDiv>.投标>div:nth-child(3){
        background: #9e0100 !important;
        color: #fff !important;
    }
    .thirdJylcClassDiv>.投标>div:first-child+span>span,.thirdJylcClassDiv>.投标>div:nth-child(3)+span>span{
        background: #9e0100 !important;
    }
    .thirdJylcClassDiv>.选标>div:first-child,.thirdJylcClassDiv>.选标>div:nth-child(3),.thirdJylcClassDiv>.选标>div:nth-child(5){
        background: #9e0100 !important;
        color: #fff !important;
    }
    .thirdJylcClassDiv>.选标>div:first-child+span>span,.thirdJylcClassDiv>.选标>div:nth-child(3)+span>span,.thirdJylcClassDiv>.选标>div:nth-child(5)+span>span{
        background: #9e0100 !important;
    }
    .thirdJylcClassDiv>.中标>div:first-child,.thirdJylcClassDiv>.中标>div:nth-child(3),.thirdJylcClassDiv>.中标>div:nth-child(5),.thirdJylcClassDiv>.中标>div:nth-child(7){
        background: #9e0100 !important;
        color: #fff !important;
    }
    .thirdJylcClassDiv>.中标>div:first-child+span>span,.thirdJylcClassDiv>.中标>div:nth-child(3)+span>span,.thirdJylcClassDiv>.中标>div:nth-child(5)+span>span,.thirdJylcClassDiv>.中标>div:nth-child(7)+span>span{
        background: #9e0100 !important;
    }
    .thirdJylcClassDiv>.成交>div{
        background: #9e0100 !important;
        color: #fff !important;
    }
    .thirdJylcClassDiv>.成交>div+span>span{
        background: #9e0100 !important;
    }
    .qyhy_jyms_box_content_fwkh_active{
      border:1px solid #9e0100 !important;
      color:#9e0100;
    }
    .qyhy_details_all_content_jyCg_div>h3{
        text-align: center;
        font-size: 24px;
        color: #9e0100;
    }
    .qyhy_details_all_content_jyCg_div>p{
        text-indent: 2em;
    }
    @media screen and (max-width: 1500px) {
        .jyqzTime{
            width: 14%;
        }
        .sendTimeDiv>font:last-child>button{
            width: 120px;
        }
        .qyhy_details_all_content_selectedBiao>div>span:nth-child(odd){
            width: 14%;
        }
    }
    .qyhy_jyms_box_content_fwkh_error{
        display: none !important;
    }
    .bck {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(00, 00, 00, 0.7);
    }
    .enterprisEcertification {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 720px;
        height: 500px;
        margin: 10% auto;
        background-color: #fff;
    }
    .topentrt {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f6f6f6;
        display: flex;
        justify-content: space-between;
    }
    .topentrt > span {
        margin-left: 16px;
        line-height: 20px;
        line-height: 40px;
    }
    .topentrt > div {
        padding-top: 4px;
        padding-right: 16px;
        cursor: pointer;
    }
    .topentrt > span > span {
        display: inline-block;
        width: 4px;
        height: 15px;
        line-height: 40px;
        background-color: #9e0100;
        position: relative;
        top: 2px;
        margin-right: 8px;
    }
    .toContentPre{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70%;
    }
    .toContentPre>*{
        flex-shrink: 0;
    }
    .toContentPre>span{
        font-size: 24px;
        color: #9e0100;
    }
    .updata-btn{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .updata-btn button{
        width: 210px;
        height: 40px;
        font-size: 18px;
        text-align: center;
        border-radius: 30px;
        background: #9e0100;
        border:0;
        margin:0 12px;
        color: #fff;
    }
    .qyhy_jyms_box_content_ZCTBZ{
        position: absolute;
        z-index: 3;
        padding: 1rem;
        background: #999999;
        color: #fff;
    }
    .historyProcessDiv{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .已终止{
      background: #666666;
    }
    .colorbbbbbb{
        background: #dddddd !important;
    }
    .closeReason{
        height: 36px;
        width: 50%;
        margin-top: 12px;
        text-indent: 1em;
    }
    .qyhy_details_all_content_yqr{
        width: 100%;
        height: 4rem;
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(00, 00, 00, 0.3)
    }
</style>