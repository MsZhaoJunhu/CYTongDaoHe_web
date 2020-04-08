<template>
    <div class="huiyuan">
        <div class="dqhydj">
            <p>您目前的会员等级为<span class="red">同进会员</span>，还需要消费10000元可升级为<span class="red">道至会员</span>！</p>
            <ul>
                <li><img src="../../../assets/imgs/xie.png" alt=""></li>
                <li><img src="../../../assets/imgs/tong.png" alt=""></li>
                <li><img src="../../../assets/imgs/dao.png" alt=""></li>
                <li><img src="../../../assets/imgs/he.png" alt=""></li>
            </ul>
            <div class="jdt">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="xsqy">
            <!-- 第一个我的权益-线上权益 -->
            <div class="xs_wdqy">
                <p class="bt">我的权益—线上权益</p>
                <div class="icos">
                    <!-- PC端只能看 -->
                    <!-- 第一行 -->
                    <div class="row">
                        <div>
                            <div><i></i></div>
                            <p>官网制作<br />（模板）</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>在线推广</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>在线交易</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>佣金减免</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>微信公众号及小程序代申请</p>
                        </div>
                    </div>
                    <!-- 第二行 -->
                    <div class="row">
                        <div>
                            <div><i></i></div>
                            <p>微官网制作（模板）</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>小程序制作（模板）</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>域名、网站空间申请、托管</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>网站日常运营维护</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>云之家企业APP开通</p>
                        </div>
                    </div>
                    <!-- 移动端只能看 -->
                    <div class="rowMedia">
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>官网制作<br />（模板）</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>在线推广</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>在线交易</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>佣金减免</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>微信公众号及小程序代申请</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>微官网制作<br />（模板）</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>小程序制作<br />（模板）</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>域名、网站空间申请、托管</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>网站日常运营维护</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>云之家企业APP开通</p>
                        </el-button>
                    </div>
                </div>
            </div>





            <!-- 第二个线上权益-权益介绍 -->
            <div class="xs_qyjs">
                <p class="bt">线上权益—权益介绍</p>
                <div class="icos">
                    <!-- PC端可以看可以点 -->
                    <div class="row" @click="changeWidth($event)">
                        <div>
                            <div><i></i></div>
                            <p>官网制作1<br />（模板）</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>在线推广</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>在线交易</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>佣金减免</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>微信公众号及小程序代申请</p>
                        </div>
                    </div>
                    <!-- PC端具体信息 -->
                    <span class="Details">
                        <div v-if="tabFirstJS==1">
                            <span style="left:45px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i></i>
                                </div>
                                <div>
                                    <h2>官网制作（模板）</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS==2">
                            <span style="left:225px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 655px 0;"></i>
                                </div>
                                <div>
                                    <h2>在线推广</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS==3">
                            <span style="left:405px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 451px 0;"></i>
                                </div>
                                <div>
                                    <h2>在线交易</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS==4">
                            <span style="left:585px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 250px 0;"></i>
                                </div>
                                <div>
                                    <h2>佣金减免</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                         <div v-if="tabFirstJS==5">
                            <span style="left:765px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 53px 0;"></i>
                                </div>
                                <div>
                                    <h2>微信公众号及小程序代申请</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                    </span>
                    <!-- PC端可以看可以点 -->
                    <div class="row" @click="changeWidth($event)">
                        <div>
                            <div><i></i></div>
                            <p>微官网制作（模板）</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>小程序制作（模板）</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>域名、网站空间申请、托管</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>网站日常运营维护</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>云之家企业APP开通</p>
                        </div>
                    </div>
                    <!-- PC端具体信息 -->
                    <span class="Details">
                        <div v-if="tabFirstJS==6">
                            <span style="left:45px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 2px -175px;"></i>
                                </div>
                                <div>
                                    <h2>微官网制作（模板）</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS==7">
                            <span style="left:225px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 655px -175px;"></i>
                                </div>
                                <div>
                                    <h2>在线推广</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS==8">
                            <span style="left:405px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 451px -175px;"></i>
                                </div>
                                <div>
                                    <h2>在线交易</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS==9">
                            <span style="left:585px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 250px -175px;"></i>
                                </div>
                                <div>
                                    <h2>佣金减免</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                         <div v-if="tabFirstJS==10">
                            <span style="left:765px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 53px -175px;"></i>
                                </div>
                                <div>
                                    <h2>微信公众号及小程序代申请</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                    </span>
                    <!-- 移动端可以点可以查看具体信息 -->
                    <div class="rowMedia">
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">官网制作<br />（模板）</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">在线推广</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">在线交易</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">佣金减免</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">微信公众号及小程序代申请</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">微官网制作<br />（模板）</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">小程序制作<br />（模板）</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">域名、网站空间申请、托管</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">网站日常运营维护</p>
                        </el-button>
                        <el-button type="text" @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">云之家企业APP开通</p>
                        </el-button>
                    </div>
                </div>
            </div>





        </div>
        <!-- 第三个我的权益-线下权益 -->
        <div class="xxqy">
            <div class="xx_wdqy">
                <p class="bt">我的权益—线下权益</p>
                <div class="icos">
                    <!-- PC端只能看 -->
                    <!-- 第一行 -->
                    <div class="row">
                        <div>
                            <div><i></i></div>
                            <p>合规性诊断</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>企业结构诊断</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>融资需求分析</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>政策配套</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>企业深度调研</p>
                        </div>
                    </div>
                    <!-- 第二行 -->
                    <div class="row">
                        <div>
                            <div><i></i></div>
                            <p>OTC上市<br />辅助</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>商业路演</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>产业对接会</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>私董会</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>企业家学习</p>
                        </div>
                    </div>
                    <!-- 第三行 -->
                    <div class="row">
                        <div>
                            <div><i></i></div>
                            <p>团队培训</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>专题讲座</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>携同拓展</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>国内外游学</p>
                        </div>
                    </div>
                    <!-- 移动端只能看 -->
                    <div class="rowMediaTwo">
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>合规性诊断</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>企业结构诊断</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>融资需求分析</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>政策配套</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>企业深度调研</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>OTC上市<br />辅助</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>商业路演</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>产业对接会</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>私董会</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>企业家学习</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>团队培训</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>专题讲座</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>携同拓展</p>
                        </el-button>
                        <el-button type="text" disabled>
                            <div><i></i></div>
                            <p>国内外游学</p>
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="xx_qyjs">
                <p class="bt">线下权益—权益介绍</p>
                <div class="icos">
                    <!-- PC端 -->
                    <!-- 第一行可以点击 -->
                    <div class="row"  @click="changeWidth($event)">
                        <div>
                            <div><i></i></div>
                            <p>合规性诊断</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>企业结构诊断</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>融资需求分析</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>政策配套</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>企业深度调研</p>
                        </div>
                    </div>
                    <!-- PC具体信息 -->
                    <span class="Details">
                        <div v-if="tabFirstJS2==11">
                            <span style="left:45px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i></i>
                                </div>
                                <div>
                                    <h2>合规性诊断</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==12">
                            <span style="left:225px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 655px 0;"></i>
                                </div>
                                <div>
                                    <h2>企业结构诊断</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==13">
                            <span style="left:405px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 455px 0;"></i>
                                </div>
                                <div>
                                    <h2>在线交易</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==14">
                            <span style="left:585px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 255px 0;"></i>
                                </div>
                                <div>
                                    <h2>佣金减免</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                         <div v-if="tabFirstJS2==15">
                            <span style="left:765px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 58px 0;"></i>
                                </div>
                                <div>
                                    <h2>微信公众号及小程序代申请</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                    </span>
                    <!-- 第二行可以点击 -->
                    <div class="row"  @click="changeWidth($event)">
                        <div>
                            <div><i></i></div>
                            <p>OTC上市<br />辅助</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>商业路演</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>产业对接会</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>私董会</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>企业家学习</p>
                        </div>
                    </div>
                    <!-- PC具体信息 -->
                    <span class="Details">
                        <div v-if="tabFirstJS2==16">
                            <span style="left:45px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 2px -175px;"></i>
                                </div>
                                <div>
                                    <h2>微官网制作（模板）</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==17">
                            <span style="left:225px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 655px -175px;"></i>
                                </div>
                                <div>
                                    <h2>在线推广</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==18">
                            <span style="left:405px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 456px -175px;"></i>
                                </div>
                                <div>
                                    <h2>在线交易</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==19">
                            <span style="left:585px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 255px -175px;"></i>
                                </div>
                                <div>
                                    <h2>佣金减免</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                         <div v-if="tabFirstJS2==20">
                            <span style="left:765px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 58px -175px;"></i>
                                </div>
                                <div>
                                    <h2>微信公众号及小程序代申请</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                    </span>
                    <!-- 第三行可以点击 -->
                    <div class="row"  @click="changeWidth($event)">
                        <div>
                            <div><i></i></div>
                            <p>团队培训</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>专题讲座</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>携同拓展</p>
                        </div>
                        <div>
                            <div><i></i></div>
                            <p>国内外游学</p>
                        </div>
                    </div>
                    <!-- PC具体信息 -->
                    <span class="Details">
                        <div v-if="tabFirstJS2==21">
                            <span style="left:45px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 2px -350px;"></i>
                                </div>
                                <div>
                                    <h2>微官网制作（模板）</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==22">
                            <span style="left:225px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 655px -350px;"></i>
                                </div>
                                <div>
                                    <h2>在线推广</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==23">
                            <span style="left:405px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 456px -350px;"></i>
                                </div>
                                <div>
                                    <h2>在线交易</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                        <div v-if="tabFirstJS2==24">
                            <span style="left:585px;"></span>
                            <p>权益介绍:</p>
                            <div>
                                <div>
                                    <i style="background-position: 250px -350px;"></i>
                                </div>
                                <div>
                                    <h2>佣金减免</h2>
                                    <p>官网制作（模板）可以让会员通过成本价格获得制作的模板官网</p>
                                    <p class="red" style="color: #9e0100;font-weight: bold;">
                                        权益对象：携行会员、同进会员、道至会员、合众会员</p>
                                </div>
                            </div>
                            <div>
                                <p>权益说明：</p>
                                <p>通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折
                                </p>
                            </div>
                        </div>
                    </span>
                    <!-- 移动端可以点击可以查看 -->
                    <div class="rowMediaTwo">
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">合规性诊断</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">企业结构诊断</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">融资需求分析</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">政策配套</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">企业深度调研</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">OTC上市<br />辅助</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">商业路演</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">产业对接会</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">私董会</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">企业家学习</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">团队培训</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">专题讲座</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">携同拓展</p>
                        </el-button>
                        <el-button type="text"  @click="open($event)">
                            <div data-detailHY="权益对象：携行会员、同进会员、道至会员、合众会员"><i></i></div>
                            <p data-detailNR="权益说明：通过评估得到用模板建立官网的成本价格，会员可以以此价格委托平台方进行模板建站，不同等级会员在价格上享有一定优惠——携行会员不享有折扣、同进会员打9.5折、道至会员打9折、合众会员打8折">国内外游学</p>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
<!-- 等级特权分布 -->
        <div class="tqfb">
            <p class="bt tqfbBT">等级特权分布</p>
            <table class="tqfbTable">
                <tr>
                    <td>会员特权</td>
                    <td>携行会员</td>
                    <td>同进会员</td>
                    <td>道至会员</td>
                    <td>合众会员</td>
                </tr>
                <tr>
                    <td>官网制作（模板）</td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>在线推广</td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>在线交易</td>
                    <td>一个月</td>
                    <td>六个月</td>
                    <td>一年</td>
                    <td>永久</td>
                </tr>
                <tr>
                    <td>佣金减免</td>
                    <td></td>
                    <td>减免额度1%</td>
                    <td>减免额度3%</td>
                    <td>减免额度5%</td>
                </tr>
                <tr>
                    <td>微信公众号、小程序代申请</td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>微官网制作（模板）</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>小程序制作（模板）</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>域名，网站空间申请，托管</td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>网站日常运营维护</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>云之家企业APP开通</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>合规性诊断</td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>企业结构诊断</td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>融资需求分析</td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>政策配套</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>企业深度调研</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>OTC上市辅助</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>商业路演</td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>产业对接会</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>私董会</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>企业家学习</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>团队培训</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>专题讲座</td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>携同扩展</td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                    <td class="hook"></td>
                </tr>
                <tr>
                    <td>国内外游学</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="hook"></td>
                </tr>
            </table>
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item  title="等级特权分布" name="1">
                    <table class="MediaTable">
                        <tr>
                            <td>会员特权</td>
                            <td>携行会员</td>
                            <td>同进会员</td>
                            <td>道至会员</td>
                            <td>合众会员</td>
                        </tr>
                        <tr>
                            <td>官网制作（模板）</td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>在线推广</td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>在线交易</td>
                            <td>一个月</td>
                            <td>六个月</td>
                            <td>一年</td>
                            <td>永久</td>
                        </tr>
                        <tr>
                            <td>佣金减免</td>
                            <td></td>
                            <td>减免额度1%</td>
                            <td>减免额度3%</td>
                            <td>减免额度5%</td>
                        </tr>
                        <tr>
                            <td>微信公众号、小程序代申请</td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>微官网制作（模板）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>小程序制作（模板）</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>域名，网站空间申请，托管</td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>网站日常运营维护</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>云之家企业APP开通</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>合规性诊断</td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>企业结构诊断</td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>融资需求分析</td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>政策配套</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>企业深度调研</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>OTC上市辅助</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>商业路演</td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>产业对接会</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>私董会</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>企业家学习</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>团队培训</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>专题讲座</td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>携同扩展</td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                            <td class="hook"></td>
                        </tr>
                        <tr>
                            <td>国内外游学</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="hook"></td>
                        </tr>
                    </table>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabFirstJS:1,
                tabFirstJS2:11,
                activeNames: ['0']
            }
        },
        mounted() {
            this.$emit('updatetitle','4')
        },
        methods: {
            changeWidth(e){
                if((e.target.tagName=="I")){
                    if(e.target.parentElement.nextElementSibling.textContent=="官网制作（模板）"){
                        this.tabFirstJS=1;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="在线推广"){
                        this.tabFirstJS=2;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="在线交易"){
                        this.tabFirstJS=3;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="佣金减免"){
                        this.tabFirstJS=4;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="微信公众号及小程序代申请"){
                        this.tabFirstJS=5;
                    }else if(e.target.parentElement.nextElementSibling.textContent=="微官网制作（模板）"){
                        this.tabFirstJS=6;
                    }else if(e.target.parentElement.nextElementSibling.textContent=="小程序制作（模板）"){
                        this.tabFirstJS=7;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="域名、网站空间申请、托管"){
                        this.tabFirstJS=8;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="网站日常运营维护"){
                        this.tabFirstJS=9;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="云之家企业APP开通"){
                        this.tabFirstJS=10;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="合规性诊断"){
                        this.tabFirstJS2=11;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="企业结构诊断"){
                        this.tabFirstJS2=12;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="融资需求分析"){
                        this.tabFirstJS2=13;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="政策配套"){
                        this.tabFirstJS2=14;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="企业深度调研"){
                        this.tabFirstJS2=15;
                    }else if(e.target.parentElement.nextElementSibling.textContent=="OTC上市辅助"){
                        this.tabFirstJS2=16;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="商业路演"){
                        this.tabFirstJS2=17;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="产业对接会"){
                        this.tabFirstJS2=18;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="私董会"){
                        this.tabFirstJS2=19;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="企业家学习"){
                        this.tabFirstJS2=20;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="团队培训"){
                        this.tabFirstJS2=21;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="专题讲座"){
                        this.tabFirstJS2=22;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="携同拓展"){
                        this.tabFirstJS2=23;
                    }else if(e.target.parentElement.nextElementSibling.innerHTML=="国内外游学"){
                        this.tabFirstJS2=24;
                    }
                }
            },
            open(e){
                var el=e.target;
                if(el.tagName=="I"){
                    var datailHY=el.parentElement.getAttribute("data-detailHY")
                    var datailNR=el.parentElement.nextElementSibling.getAttribute("data-detailNR")
                    this.$alert(datailNR,datailHY,{
                        customClass:'heightset'
                    });
                }else if(el.tagName=="DIV"){
                    var datailHY=el.getAttribute("data-detailHY")
                    var datailNR=el.nextElementSibling.getAttribute("data-detailNR")
                    this.$alert(datailNR,datailHY,{
                        customClass:'heightset'
                    });
                }else if(el.tagName=="P"){
                     var datailHY=el.previousElementSibling.getAttribute("data-detailHY")
                    var datailNR=el.getAttribute("data-detailNR")
                    this.$alert(datailNR,datailHY,{
                        customClass:'heightset'
                    });
                }
            },
            handleChange(val) {
                
            }
        },
        watch: {

        },
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
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
        flex-wrap:wrap;
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
    .huiyuan{
        background-color:#fbfbfb;
    }
    .dqhydj{
        width: 1057px;
        height: 198px;
        background-color: #ffffff;
        padding: 25px 0px 25px 50px;
        box-sizing: border-box;
        position: relative;
    }
    .dqhydj p{
        font-weight: bold;
    }
    span.red{
        color: #9e0100;
    }
    .jdt{
        position: absolute;

        display: flex;
        margin-left:30px;
        top: 95px;
    }
    .jdt>div{
        width: 255px;
        height: 10px;
        background: #9e000010;
    }
    .jdt>div:nth-child(1){
        background: #9e0000;
    }
    .dqhydj ul li{
        list-style-type:none;
        float: left;
        margin: 25px 250px 0 0;
        z-index: 10;
    }
    .dqhydj ul li img{
        position: absolute;
        z-index: 9;
    }
    .xsqy,.xxqy,.tqfb{
        width: 1057px;
        box-sizing: border-box;
        padding: 25px 0px 25px 50px;
        background: #ffffff;
        margin-top: 30px;
    }
    .xsqy i{
        display: block;
        width: 40px;
        height: 44px;
        background: url(../../../assets/imgs/icon.png)
    }
    .xxqy i{
        display: block;
        width: 45px;
        height: 46px;
        background: url(../../../assets/imgs/icon2.png)
    }

    .xsqy .icos>.row:nth-of-type(1)>div:nth-of-type(2) i,.el-button:nth-of-type(2) i{
        background-position: 534px 0;
    }
    .xsqy .icos>.row:nth-of-type(1)>div:nth-of-type(3) i,.el-button:nth-of-type(3) i{
        background-position: 370px 0;
        width: 42px;
    }
    .xsqy .icos>.row:nth-of-type(1)>div:nth-of-type(4) i,.el-button:nth-of-type(4) i{
        background-position: 205px 0;
    }
    .xsqy .icos>.row:nth-of-type(1)>div:nth-of-type(5) i,.el-button:nth-of-type(5) i{
        background-position:44px 0;
    }
    .xsqy .icos>.row:nth-last-of-type(1)>div:nth-of-type(1) i,.el-button:nth-of-type(6) i{
        background-position: 0 44px;
        width: 34px;
        height: 44px;
    }
    .xsqy .icos>.row:last-of-type>div:nth-of-type(2) i,.el-button:nth-of-type(7) i{
        background-position: 535px 44px;
    }
    .xsqy .icos>.row:last-of-type>div:nth-of-type(3) i,.el-button:nth-of-type(8) i{
        background-position: 370px 44px;
        width: 42px;
        height: 44px;
    }
    .xsqy .icos>.row:last-of-type>div:nth-of-type(4) i,.el-button:nth-of-type(9) i{
        background-position: 205px 44px;
    }
    .xsqy .icos>.row:last-of-type>div:nth-of-type(5) i,.el-button:nth-of-type(10) i{
        width: 42px;
        height: 44px;
        background-position: 43px 44px;
    }

    .xxqy .icos>.row:nth-of-type(1)>div:nth-of-type(2) i,.rowMediaTwo>.el-button:nth-of-type(2) i{
        background-position: 537px 0;
    }
    .xxqy .icos>.row:nth-of-type(1)>div:nth-of-type(3) i,.rowMediaTwo>.el-button:nth-of-type(3) i{
        background-position: 372px 0;
    }
    .xxqy .icos>.row:nth-of-type(1)>div:nth-of-type(4) i,.rowMediaTwo>.el-button:nth-of-type(4) i{
        background-position: 209px 0;
    }
    .xxqy .icos>.row:nth-of-type(1)>div:nth-of-type(5) i,.rowMediaTwo>.el-button:nth-of-type(5) i{
        background-position: 47px 0;
    }
    .xxqy .icos>.row:nth-of-type(2)>div:nth-of-type(1) i,.rowMediaTwo>.el-button:nth-of-type(6) i{
        background-position: 0 -144px;
    }
    .xxqy .icos>.row:nth-of-type(2)>div:nth-of-type(2) i,.rowMediaTwo>.el-button:nth-of-type(7) i{
        background-position: 537px -144px;
    }
    .xxqy .icos>.row:nth-of-type(2)>div:nth-of-type(3) i,.rowMediaTwo>.el-button:nth-of-type(8) i{
        background-position: 372px -144px;
    }
    .xxqy .icos>.row:nth-of-type(2)>div:nth-of-type(4) i,.rowMediaTwo>.el-button:nth-of-type(9) i{
        background-position: 209px -144px;
    }
    .xxqy .icos>.row:nth-of-type(2)>div:nth-of-type(5) i,.rowMediaTwo>.el-button:nth-of-type(10) i{
        background-position: 47px -144px;
    }
    .xxqy .icos>.row:nth-of-type(3)>div:nth-of-type(1) i,.rowMediaTwo>.el-button:nth-of-type(11) i{
        background-position: 0 -288px;
    }
    .xxqy .icos>.row:nth-of-type(3)>div:nth-of-type(2) i,.rowMediaTwo>.el-button:nth-of-type(12) i{
        background-position: 537px -288px;
    }
    .xxqy .icos>.row:nth-of-type(3)>div:nth-of-type(3) i,.rowMediaTwo>.el-button:nth-of-type(13) i{
        background-position: 373px -288px;
    }
    .xxqy .icos>.row:nth-of-type(3)>div:nth-of-type(4) i,.rowMediaTwo>.el-button:nth-of-type(14) i{
        background-position: 209px -288px;
    }

    p.bt{
        font-size: 20px;
        color: #9e0100;
    }
    .xs_wdqy,.xx_wdqy{
        margin-bottom: 60px;
    }
    .row{
        margin: 20px 0;
        display: flex;
    }
    .row p{
        margin-top: 15px;
        width: 110px;
        text-align: center;
    }
    .row>div{
        width: 110px;
        display: inline-block;
        margin-right: 70px;
    }
    .row>div>div{
        margin-left:18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 72px;
        height: 72px;
        background-color: #9e010010;
    }
    .xs_qyjs .row div,.xx_qyjs .row div{
        background-color: #ffffff00;
    }
    .Details{
        display: block;
        width: 830px;
    }
    .Details>div{
        position: relative;
        margin-top: 15px;
        height: 100%;
        background-color: #f6f6f6;
        padding: 15px;
        box-sizing: border-box;
    }
    .Details>div>span{
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 10px solid #f6f6f6;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top:-10px;
        left: 45px;
    }
    .Details>div>div:nth-of-type(1){
        margin: 25px 0;
        display: flex;
    }
    .xxqy .Details>div:nth-of-type(1)>div i{
        width: 55px;
        height: 56px;
        background-size: 850px;
    }
    .xsqy .Details>div:nth-of-type(1)>div i{
        width: 49px;
        height: 52px;
        background-size: 850px;
    }
    .Details>div h2{
        font-size: 20px;
        color: #555;
        font-weight:normal;
    }
    .Details>div>div>div:nth-of-type(2) p{
        font-size: 14px;
        color: #888;
    }
    .Details>div>div>div:nth-of-type(2)>p:nth-last-of-type(2){
        margin: 10px 0;
    }
    .Details>div>div:nth-of-type(1)>div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85px;
        width: 85px;
        border-radius: 50%;
        background-color: #9e010010;
        margin-right: 20px;
    }
    p.red{
        color: #9e0100;
        font-weight: bold;
    }
    .Details>div>div:nth-of-type(2){
        height: 30px;
        border-top: 1px #ddd solid;
    }
    .Details>div>div:nth-of-type(2){
        display: flex;
        height: 50px;
        padding-top:10px;
    }
    .Details>div>div:nth-of-type(2)>p{
        display: inline-block;
    }
    .Details>div>div:nth-of-type(2)>p:nth-of-type(2){
        font-size: 14px;
        color: #888;
        line-height: 24px;
        width: 720px;
    }
    .tqfb table{
        width: 100%;
        margin-top: 20px;
        border-collapse: collapse;
    }
    .tqfb table tr:nth-of-type(1) td{
        background-color: #faf2f2;
        color: #333;
        font-size: 18px;
        border:0;
    }
    .tqfb table td{
        border:1px solid #eee;
        text-align: center;
        color: #555;
        font-size: 16px;
        height:45px;
        width: 190px;
    }
    .tqfb table td:nth-of-type(1){
        width: 265px;
    }
    .tqfb table td.hook{
        background: url(../../../assets/icon/hook.png) no-repeat;
        background-position: center;
    }
    .rowMedia,.rowMediaTwo{
        
        display: none;
        margin-top: 10px;
    }
    .el-collapse-item__header{
        display: none;
    }
    .media_img_header{
        display: none;
    }
    .el-collapse{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .dqhydj{
            width: 100%;
            height: 130px;
            padding: 0px 16px;
        }
        .dqhydj>p,.dqhydj>p>span{
            font-size: 14px;
        }
        .dqhydj ul{
            display: flex;
        }
        .dqhydj ul>li:first-child{
            margin-left: 25px;
        }
        .dqhydj ul>li{
            margin-right: 100px;
        }
        .dqhydj ul>li>img{
            width: 35px;
            height: 40px;
        }
        .jdt{
            top: 72px;
            left: 36px;
        }
        .jdt>div{
            width: 100px !important;
        }
        .xsqy,.xxqy,.tqfb{
            width: 100%;
        }
        .xsqy,.xxqy,.tqfb{
            margin-top: 16px;
            padding: 16px 16px 0px 16px;
        }
        .tqfb{
            padding:0;
        }
        .xsqy,.xx_qyjs{
            padding-bottom: 40px;
        }
        .xsqy>div>p,.xxqy>div>p,.tqfb>div>p{
            font-size: 16px;
        }
        .Details,.row{
            display: none;
        }
        .rowMedia,.rowMediaTwo{
            display: block;
            display: flex;
            flex-wrap: wrap;
        }
        .rowMedia>.el-button,.rowMediaTwo>.el-button{
            width: 110px;
            height: 50px;
            box-sizing: border-box;
            margin: 0 14px 0 0;       
        }
        .rowMedia>.el-button:nth-child(n+4),.rowMediaTwo>.el-button:nth-child(n+4){
            margin-top: 50px;
        }
        .rowMedia>.el-button:not(:nth-child(n+4)),.rowMediaTwo>.el-button:not(:nth-child(n+4)){
            margin-top: 4px;
        }
        .el-button i{
            margin: 0 auto;
        }
        .el-button p{
            white-space:pre-wrap;
            color:#000;
            margin-top: 4px;
        }
        .el-collapse-item__header{
            display: block;
        }
        .tqfbTable,.tqfbBT{
            display: none;
        }
        .tqfb table tr:nth-of-type(1) td{
            font-size: 14px;
        }
        .tqfb table td{
            font-size: 12px;
        }
        .el-collapse{
            display: block;
        }
        .heightset{
            margin-top: 250px;
        }
        .heightset .el-message-box__header>.el-message-box__title{
            width: 95%;
        }
        .heightset .el-message-box__content{
            
        }
    }
    

</style>