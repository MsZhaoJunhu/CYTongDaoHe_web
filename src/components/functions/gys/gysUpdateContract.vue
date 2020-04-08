<template>
    <div style="position:relative;">
        <div class="fillSignContract">
            <!-- 顶部返回 -->
            <div class="fillSignContract_title">
                <router-link to="/fun/gysSignContract">主体合同</router-link>
            </div>
            <!-- 中部合同预览 -->
            <div class="fillSignContract_content">
                <!-- 标题 -->
                <div class="fillSignContract_content_title">
                    <span>合同模板</span>
                </div>
                <div class="fillSignContract_content_contract">
                    <div class="fillSignContract_content_contract_title">
                        <p>同道合平台专业服务三方合同</p>
                        <p>
                            <span>合同编号：</span>
                            <span>{{contractNumbe}}</span>
                        </p>
                    </div>
                    <div class="fillSignContract_content_contract_content">
                        <div class="contractPerson">
                            <span>甲方：</span>
                            <span class="circle" id="fillInContents1">①</span><span class="spanBottomLine" @click="changeHash('#fillInContent1')" style="padding:0;">{{firstParty}}</span>
                        </div>
                        <div class="contractPerson">
                            <span>乙方：</span>
                            <span>{{partyB}}</span>
                        </div>
                        <div class="contractPerson">
                            <span>丙方：</span>
                            <span>重庆携同道合文化科技有限公司</span>
                        </div>
                        <div class="contractPerson">
                            <span>根据《中华人民共和国合同法》,经三方友好协商一致,本着平等,互利,共赢的原则,特签订如下合同,以资共同遵守。</span>
                        </div>
                        <div class="contractPerson contractChapter">
                            <p class="contractChapterP">第一章&nbsp;&nbsp;服务范围</p>
                        </div>
                        <div class="contractPerson">
                            <p>
                                甲方委托乙方就
                                <span class="spanBottomLine" @click="changeHash('#fillInContent2')"><span class="circle" id="fillInContents2">②</span>{{content2}}</span>
                                提供
                                <span class="spanBottomLine" @click="changeHash('#fillInContent3')"><span class="circle" id="fillInContents3">③</span>{{content3}}</span>
                                服务,具体包括以下服务内容：
                            </p>
                        </div>
                        <div class="contractPerson scopeOfService">
                            <div v-for="(item,index) in content4" :key="index">
                                <span>第{{item.index}}条：</span>
                                <div class="spanBottomLine" @click="changeHash('#fillInContent4')"><span class="circle" id="fillInContents4">④</span>{{item.content}}</div>
                            </div>
                        </div>
                        <div class="contractChapter">
                            <p class="contractChapterP">第二章&nbsp;&nbsp;服务目标及期限</p>
                            <p class="contractChapter">通过
                                <span class="spanBottomLine" @click="changeHash('#fillInContent5')"><span class="circle" id="fillInContents5">⑤</span>{{content5}}</span>
                                服务,满足甲方
                                <span class="spanBottomLine" @click="changeHash('#fillInContent6')"><span class="circle" id="fillInContents6">⑥</span>{{content6}}</span>
                                ,本合同项目服务期限：
                                <span class="spanBottomLine" @click="changeHash('#fillInContent7')"><span class="circle" id="fillInContents7">⑦</span>{{content7.time1}}</span>
                                至
                                <span class="spanBottomLine">{{content7.time2}}</span>
                                止,服务期限中包含质保期。
                            </p>
                        </div>
                        <div class="contractChapter">
                            <p class="contractChapterP">第三章&nbsp;&nbsp;服务计划（明确各部分里程碑事件、具体内容、关键产出物及关键时间节点等）<span class="spanBottomLine" @click="changeHash('#fillInContent8')"><span class="circle" id="fillInContents8">⑧</span>填写内容</span></p>
                            <div class="contractChapterUlParent contractChapter">
                                <table>
                                    <tr>
                                        <td>序</td>
                                        <td>里程碑事件</td>
                                        <td>主要内容</td>
                                        <td>关键产出物</td>
                                        <td>服务起止时间</td>
                                    </tr>
                                    <tr v-for="(item,index) in content8" :key="index">
                                      <td>{{index+1}}</td>
                                      <td>{{item.eventName}}</td>
                                      <td>{{item.eventContent}}</td>
                                      <td>{{item.eventOutput}}</td>
                                      <td v-if="item.eventName!='质保期'">{{item.eventStart}}~{{item.eventEnd}}</td>
                                      <td v-if="item.eventName=='质保期'">{{item.eventStart}}</td>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                        <div class="contractChapter">
                            <p class="contractChapterP ordinary">第四章&nbsp;&nbsp;三方权利及义务</p>
                            <p class="ordinary">第一条&nbsp;&nbsp;甲方权利及义务</p>
                            <p class="ordinary">一、为保证项目顺利进行,甲方需委派一名项目协调人,代表甲方协助乙方与各部门及相关人员沟通;代表甲方配合乙方收集项目进行过程中所需的内部资料;代表甲方组织内部研讨、审批确定项目工作计划及服务过程中的成果交付;</p>
                            <p class="ordinary">二、为保证项目顺利进行,甲方应对项目进行过程中的相关问题及时与乙方沟通,双方不能达成一致的,甲方可单方面向丙方反馈或投诉;</p>
                            <p class="ordinary">三、甲方对阶段性服务成果有异议的,应在三个工作日内向乙方提交书面修改意见,仍不能解决异议的,由丙方进行评审;</p>
                            <p class="ordinary">四、甲方应向乙方工作人员提供履行项目服务必须的办公场地、网络、桌子、椅子、办公设备等;</p>
                            <p class="ordinary">五、项目如需甲方配合乙方具体实施,甲方应积极配合,按计划实施。</p>
                            <p class="ordinary">第二条&nbsp;&nbsp;乙方权利及义务</p>
                            <p class="ordinary">一、为保证项目顺利进行,乙方应成立项目组,明确项目负责人;</p>
                            <p class="ordinary">二、乙方应按照本合同相关要求,保质保量按时完成服务范围内所规定的工作,必须按服务起止时间交付各阶段性产出物并提交甲方、丙方;</p>
                            <p class="ordinary">三、乙方应及时向甲方、丙方通报项目进展情况,并按甲方提交的意见及时修改相关方案、文档等;</p>
                            <p class="ordinary">四、乙方在服务期限内必须设定质保期,保证服务实施后,乙方对后续运行过程中出现的问题提供电话咨询、现场服务等,项目质保期由甲乙双方确定,最高上限为6个月。</p>
                            <p class="ordinary">第三条&nbsp;&nbsp;丙方权利及义务</p>
                            <p class="ordinary">一、为保证服务质量,丙方对服务过程进行全程跟踪;</p>
                            <p class="ordinary">二、丙方对甲方支付的项目服务费用进行托管,当甲方明确认可乙方阶段性服务成果后,由丙方按合同约定的比例支付给乙方;</p>
                            <p class="ordinary">三、当甲方对乙方提供的阶段性服务成果提出异议时,丙方应及时介入并干预。</p>
                            <p class="ordinary">第四条&nbsp;&nbsp;三方共同义务</p>
                            <p class="ordinary">一、三方共同协商解决服务过程中出现的有争议事项,当甲乙双方对阶段性服务成果出现严重分歧时,由丙方组织专家团队进行评审,居中判定,甲乙双方最终须认可丙方的评价结果;</p>
                            <p class="ordinary">二、合同生效后,除不可抗原因,三方不得无故终止或解除合同。</p>
                        </div>
                        <div class=" contractChapter">
                            <p class="contractChapterP">第五章&nbsp;&nbsp;项目费用及付款方式</p>
                            <div>
                                <p class="ordinary">
                                    第一条&nbsp;&nbsp;项目总费用合计人民币
                                    <span class="spanBottomLine" @click="changeHash('#fillInContent9')"><span class="circle" id="fillInContents9">⑨</span>{{content9}}</span>
                                    (大写)元整 (小写：
                                    <span class="spanBottomLine">⑨{{填写内容}}</span>
                                    元);项目总费用包括但不限于咨询服务费、劳务费、人工成本、复印费、文件制作费、通讯费等,乙方为本项目服务所产生的交通费用、食宿费用由甲方报销,报销标准参照甲方财务制度规定;
                                </p>
                            </div>
                            <div class="contractChapterUlParent contractChapterUlParent2">
                                <p class="ordinary">第二条&nbsp;&nbsp;项目支付比例</p>
                                <table>
                                    <tr>
                                        <td>序</td>
                                        <td>里程碑事件</td>
                                        <td>支付比例</td>
                                    </tr>
                                    <tr v-for="(item, index) in content10" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{item.eventName}}</td>
                                        <td>{{item.eventPayment}}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td></td>
                                        <td style="opacity:0">质保期</td>
                                        <td style="opacity:0">10%</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>质保期</td>
                                        <td>10%</td>
                                    </tr> -->
                                </table>
                            </div>
                            <div>
                                <p class="ordinary">第三条&nbsp;&nbsp;项目总费用小于或等于人民币拾万圆,甲乙丙三方网签合同后,五个工作日内,甲方一次性将项目总费用全额交付丙方托管,丙方在收到项目托管费用的三个工作日内向乙方支付首阶段服务支付比例的25%作为预付款,当甲方确认乙方完成里程碑事件后,丙方应在三个工作日内,参照本合同第五章第二条规定向乙方支付该阶段尾款,丙方在下一阶段服务开始时间前三个工作日,丙方向乙方支付预付款,以此类推,直至各阶段费用支付完毕;</p>
                                <p class="ordinary">第四条&nbsp;&nbsp;项目总费用大于人民币拾万圆,甲乙丙三方网签合同后,五个工作日内,甲方将项目前两个阶段的费用交付丙方托管,丙方在收到项目托管费用的三个工作日内向乙方支付首阶段服务支付比例的25%作为预付款,当甲方确认乙方完成里程碑事件后,丙方应在三个工作日内,参照本合同第五章第二条规定向乙方支付该阶段尾款,甲方应在里程碑事件确认后的五个工作日内将下一阶段的费用交付丙方托管,丙方在下一阶段服务开始时间前三个工作日,丙方向乙方支付预付款,以此类推,直至各阶段费用支付完毕;</p>
                                <p class="ordinary">第五条&nbsp;&nbsp;为保证乙方的服务质量,乙方在收到首次预付款的同时一次性向丙方缴纳履约保证金,履约保证金为项目总费用的2%,丙方在向乙方支付第一笔预付款时直接划扣,如预付款不足以弥补履约保证金,差额部分由乙方在五个工作日内补足;第一阶段服务因乙方原因导致合同终止,履约保证金不予退还。项目结项后三个工作日内,丙方向乙方退还剩余的履约保证金;</p>
                                <p class="ordinary">
                                    第六条 甲方要求乙方暂停服务的,甲方应提前
                                    <span class="spanBottomLine" @click="changeHash('#fillInContent10')"><span class="circles" id="fillInContents10">⑩</span>{{content11}}</span>
                                    日书面通知乙方、丙方并说明理由和暂停期限,并按照乙方实际已完成的工作量结算,如超过本阶段核定工作量的一半,由丙方支付本阶段剩余的服务费用,如拟定暂停或者实际暂停超过
                                    <span class="spanBottomLine" @click="changeHash('#fillInContent11')"><span class="circles" id="fillInContents11">⑪</span>{{content12}}</span>
                                    日,则乙方有权选择单独终止本合同,</p>
                                <p class="ordinary">第七条&nbsp;&nbsp;为保证乙方的服务质量,丙方对服务全过程进行跟踪。交易模式为单一来源、招投标、竞争性谈判,丙方向乙方收取项目总费用的8%作为技术服务费,分两次平均划扣,首次为丙方向乙方支付第一笔尾款时直接划扣,末次为丙方向乙方支付第二笔尾款时直接划扣,如尾款不足以弥补当期技术服务费,差额部分由乙方在五个工作日内补足,交易模式为委托代理,丙方除向乙方收取项目总费用的8%作为技术服务费外,还向乙方收取项目总费用的4%作为技术服务费,甲方在首次支付项目费用时,向丙方一次性支付技术服务费,</p>
                                <p class="ordinary">第八条&nbsp;&nbsp;如项目只有一个阶段,则技术服务费一次性收取或划扣。</p>
                            </div>
                        </div>
                        <div>
                            <p class="ordinary contractChapterP">第六章&nbsp;&nbsp;保密</p>
                            <p class="ordinary">本项目所涉及的文件资料、财务数据及其它商业信息等，未经甲方许可，乙方、丙方不得以任何形式向其它方泄露，具体权利和义务详见《三方保密协议》。</p>
                            <p class="contractChapterP ordinary">第七章&nbsp;&nbsp;乙方服务评价</p>
                            <p class="ordinary">第一条&nbsp;&nbsp;乙方阶段性服务成果首先由甲方确认，当甲乙双方对阶段性服务成果的判定结果有异议时，由丙方组织专家团队采用专业方式，以客观角度进行评价，甲乙双方最终须认可丙方的评价结果；</p>
                            <p class="ordinary">第二条&nbsp;&nbsp;当乙方交付的阶段性服务成果经三次修改仍未通过，甲方有权终止本合同；甲方终止合同后，丙方在三个工作日内将剩余的项目托管费用退还甲方，乙方缴纳的履约保证金、支付的技术服务费不予退还。</p>
                            <p class="contractChapterP ordinary">第八章&nbsp;&nbsp;其它约定</p>
                            <p class="ordinary">第一条&nbsp;&nbsp;三方对本合同的任何全部或部分修改、新增、说明或放弃，都必须书面进行，拟订《补充合同》且经合同三方签字盖章认可；</p>
                            <p class="ordinary">第二条&nbsp;&nbsp;因合同一方违约在先或因不可抗力导致的延迟或无法履行本合同义务，合同另两方不承担违约责任；</p>
                            <p class="ordinary">
                                第三条&nbsp;&nbsp;如不可抗力条件持续超过
                                <span class="spanBottomLine" @click="changeHash('#fillInContent12')"><span class="circles" id="fillInContents12">⑫</span>{{content13}}</span>
                                天，甲乙丙三方均可向对方发出通知书，然后终止本合同；
                            </p>
                            <p class="ordinary">第四条&nbsp;&nbsp;本合同除根据合同约定提前终止外，其有效期应持续至双方的合同权利和义务履行完毕时为止；本合同的期满或终止均不应损害或影响合同中任何一方应有的权利和义务；</p>
                            <p class="ordinary">第五条&nbsp;&nbsp;其它约定内容：<span class="spanBottomLine" @click="changeHash('#fillInContent13')"><span class="circles" id="fillInContents13">⑬</span>{{content14}}</span></p>
                            <p class="ordinary">第六条&nbsp;&nbsp;本合同一式三份，三方各执一份，每份具有同等法律效应。</p>
                        </div>
                    </div>
                    <div class="fillSignContract_content_contract_tail">
                        <div>
                            <p class="ordinary">甲方：</p>
                            <p class="ordinary">(盖章)</p>
                            <p class="ordinary">法定代表人签字：</p>
                            <p class="ordinary">日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</p>
                        </div>
                        <div>
                            <p class="ordinary">乙方：</p>
                            <p class="ordinary">(盖章)</p>
                            <p class="ordinary">法定代表人签字：</p>
                            <p class="ordinary">日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</p>
                        </div>
                        <div>
                            <p class="ordinary">丙方：</p>
                            <p class="ordinary">(盖章)</p>
                            <p class="ordinary">法定代表人签字：</p>
                            <p class="ordinary">日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部合同填写 -->
            <div class="fillSignContract_footer">
                <!-- 标题 -->
                <div class="fillSignContract_footer_title">
                    <span>合同填写</span>
                </div>
                <div class="fillSignContract_footer_content">
                    <div class="footer_content_title">服务范围</div>
                    <div class="footer_content_content">
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent1">①</span>
                                <span>甲方公司名称：</span>
                            </span>
                            <select v-model="firstParty1Value" @change="changeFirstParty1Value">
                                <option :value="item" v-for="(item,index) in firstParty1" :key="index">{{item}}</option>
                            </select>
                            <select v-model="firstParty2Value" @change="changeFirstParty2Value">
                                <option :value="item" v-for="(item,index) in firstParty2" :key="index">{{item}}</option>
                            </select>
                            <div class="dibiao" @click="changeHash('#fillInContents1')" >
                                <img src="../../../assets/dibiao.png" alt="">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon" style="align-items:start">
                            <span>
                                <span class="circle" id="fillInContent2">②</span>
                                <span>主要需求：</span>
                            </span>
                            <textarea placeholder="甲方公司的主要需求,不超过100个字" maxlength="100" v-model="mainRequire"></textarea>
                            <div class="dibiao" @click="changeHash('#fillInContents2')">
                                <img src="../../../assets/dibiao.png" alt="">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent3">③</span>
                                <span>项目类型：</span>
                            </span>
                            <select v-model="projType">
                                <option :value="item.itemName" v-for="(item,index) in businessList" :key="index">{{item.itemName}}</option>
                            </select>
                            <div class="dibiao" @click="changeHash('#fillInContents3')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon contentSonTs">
                            <span>
                                <span class="circle" id="fillInContent4">④</span>
                                <span>服务内容：</span>
                            </span>
                            <div class="footer_content_contentSon_tablePar">
                                <div>
                                    <div v-for="(item,index) in serverContentArr" :key="index">
                                        <div>第{{index+1}}条</div>
                                        <!-- 横线 -->
                                        <span></span>
                                        <input type="text" placeholder="主要服务内容概括" v-model="item.content">
                                        <button @click="clickToSliceArr(serverContentArr,index)">
                                            <img src="../../../assets/jianhao.png" alt="">
                                        </button>
                                    </div>
                                </div>
                                <div @click="clickToAddArr(serverContentArr,'')">
                                    <img src="../../../assets/jiahao.png" alt="">
                                    <span>添加</span>
                                </div>
                            </div>
                            <div class="dibiao" @click="changeHash('#fillInContents4')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer_content_title">项目目标及期限</div>
                    <div class="footer_content_content">
                        <div class="footer_content_contentSon" style="align-items:start">
                            <span>
                                <span class="circle" id="fillInContent5">⑤</span>
                                <span>服务方式：</span>
                            </span>
                            <textarea placeholder="乙方的服务方式说明,不超过100字" maxlength="100" v-model="serverWay"></textarea>
                            <div class="dibiao" @click="changeHash('#fillInContents5')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon" style="align-items:start">
                            <span>
                                <span class="circle" id="fillInContent6">⑥</span>
                                <span>服务目标：</span>
                            </span>
                            <textarea placeholder="满足甲方的服务目标和具体要求,不超过100字" maxlength="100" v-model="serverTarget"></textarea>
                            <div class="dibiao" @click="changeHash('#fillInContents6')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent7">⑦</span>
                                <span>服务期限：</span>
                            </span>
                            <div class="time1Andtime2">
                                <el-date-picker
                                v-model="value1"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                            <div class="dibiao" @click="changeHash('#fillInContents7')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer_content_title">项目计划及费用</div>
                    <div class="footer_content_content">
                        <div class="footer_content_contentSon footer_content_contentSon_table2">
                            <div class="dibiao">
                                <span>
                                    <span class="circle" id="fillInContent8">⑧</span>
                                    <span>服务方式：</span>
                                </span>
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span  @click="changeHash('#fillInContents8')">查看模板</span>
                            </div>
                            <table>
                                <tr>
                                    <td>序</td>
                                    <td>事件名称</td>
                                    <td>主要内容</td>
                                    <td>关键产出物</td>
                                    <td>服务起止时间</td>
                                    <td>支付比例</td>
                                    <td>操作</td>
                                </tr>
                                <tr v-for="(item,index) in projEventList" :key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{item.eventName}}</td>
                                    <td>{{item.eventContent}}</td>
                                    <td>{{item.eventOutput}}</td>
                                    <td>
                                        <el-date-picker
                                        v-model="item.eventTime"
                                        :disabled="true"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                        </el-date-picker>
                                    </td>
                                    <td>{{item.eventPayment}}</td>
                                    <td>
                                        <div>
                                            <button>编辑</button>
                                            <button>删除</button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div class="addMore" @click="addArrTable()">
                                <img src="../../../assets/jiahao.png" alt="">
                                <span>新增</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent9">⑨</span>
                                <span>项目总费用：</span>
                            </span>
                            <div class="numberAddOrReduce">
                                <input type="text" v-model="projCost"> 
                                <div>
                                    <button>
                                        <img src="../../../assets/toTop.png" alt="">
                                    </button>
                                    <button>
                                        <img src="../../../assets/toBottom.png" alt="">
                                    </button>
                                </div>
                            </div>
                            <div class="dibiao" @click="changeHash('#fillInContents9')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon">
                            <span>费用大写：</span>
                            <input type="text" style="background:#fff;border:1px solid #999;" v-model="projCostValue" disabled>
                            <div class="dibiao">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent10">⑩</span>
                                <span>提前通知天数：</span>
                            </span>
                            <img class="zhushi" src="../../../assets/zhushi.png" alt="">
                            <div class="numberAddOrReduce">
                                <input type="text" v-model="noticeTime">
                                <div>
                                    <button>
                                        <img src="../../../assets/toTop.png" alt="">
                                    </button>
                                    <button>
                                        <img src="../../../assets/toBottom.png" alt="">
                                    </button>
                                </div>
                                <span>(天)</span>
                            </div>
                            <div class="dibiao" @click="changeHash('#fillInContents10')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent11">⑪</span>
                                <span>服务暂停天数：</span>
                            </span>
                            <img class="zhushi" src="../../../assets/zhushi.png" alt="">
                            <div class="numberAddOrReduce">
                                <input type="text" v-model="suspendTime">
                                <div>
                                    <button>
                                        <img src="../../../assets/toTop.png" alt="">
                                    </button>
                                    <button>
                                        <img src="../../../assets/toBottom.png" alt="">
                                    </button>
                                </div>
                                <span>(天)</span>
                            </div>
                            <div class="dibiao" @click="changeHash('#fillInContents11')">
                                <img src="../../../assets/dibiao.png" alt="">
                                <span>查看模板</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer_content_title">其他约定</div>
                    <div class="footer_content_content">
                        <div class="footer_content_contentSon">
                            <span>
                                <span class="circle" id="fillInContent12">⑫</span>
                                <span>不可抗力天数：</span>
                            </span>
                            <img class="zhushi" src="../../../assets/zhushi.png" alt="">
                            <div class="numberAddOrReduce">
                                <input type="text" v-model="majeureTime">
                                <div>
                                    <button>
                                        <img src="../../../assets/toTop.png" alt="">
                                    </button>
                                    <button>
                                        <img src="../../../assets/toBottom.png" alt="">
                                    </button>
                                </div>
                                <span>(天)</span>
                            </div>
                            <div class="dibiao" @click="changeHash('#fillInContents12')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon" style="align-items:start">
                            <span>
                                <span class="circle" id="fillInContent13">⑬</span>
                                <span>其他约束内容：</span>
                            </span>
                            <textarea placeholder="甲乙双方在本合同中约定的其他内容，不超过300字" maxlength="300" v-model="otherContent"></textarea>
                            <div class="dibiao" @click="changeHash('#fillInContents13')">
                                <img src="../../../assets/dibiao.png" alt="坐标图标">
                                <span>查看模板</span>
                            </div>
                        </div>
                        <div class="footer_content_contentSon contractProcessPar">
                            <div class="contractProcess">
                                <p>三方合同签订流程</p>
                                <div class="contractProcessSonPar">
                                    <div class="contractProcessSonPar-son1">
                                        <p>服务方：</p>
                                        <p>需求方：</p>
                                        <p>平台：</p>
                                    </div>
                                    <div class="contractProcessSonPar-son2">
                                        <div class="contractProcess_content">
                                            <div>
                                                <div>提交</div>
                                                <div>修改</div>
                                            </div>
                                            <div class="threeClicle">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="contractProcess_content">
                                            <div class="onecontractProcess_content">审核</div>
                                            <div class="threeClicle">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="contractProcess_content">
                                            <div class="onecontractProcess_content">确认</div>
                                            <div class="threeClicle">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div class="contractProcess_content lastcontractProcess_content">
                                            约定达成
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 预览和提交 -->
            <div class="fillSignContract_footer_button2">
                <div>
                    <!-- <button>预览</button> -->
                    <button @click="contractSubmit">修改</button>
                </div>
            </div>
        </div>
        <right-now :nowNumber="rightNowNumber" @change="changeNum" @changeValue="changeValue"></right-now>
    </div>
</template>
<script>
import { 
    getMyService,
    getBusinessList,
    startContract,
    splrFinish,
    getMyContractDetail,
    updateContract
} from "@/components/api/api";
import moment from 'moment';
import rightNow from './gysAddTable';
export default {
    data() {
        return {
            // 合同编号
            contractNumbe:"GLZX_20190520-004",
            // 甲方
            firstParty:"填写内容",
            firstParty1Value:"",
            firstParty2Value:"",
            firstParty1:[],
            firstParty2:[],
            firstPartyAll:[],
            businessList:"",
            // 乙方
            partyB:"",
            content2:"填写内容",
            content3:"填写内容",
            content4:[
                {index:"一",content:"填写的内容"},
                {index:"二",content:"填写的内容"},
                {index:"三",content:"填写的内容"},
            ],
            content5:"填写内容",
            content6:"填写内容",
            content7:{time1:"时间1",time2:"时间2"},
            content8:[
                // {index:1,event:"事件1",content:"内容1",output:"关键产出物",time:"2019/12/25--2019/12/26"}
            ],
            // 质保期
            content8Time:"20019/12/00--2019/12/26",
            content9:"填写内容",
            content10:[
                {index:1,content:"里程碑事件",pay:"10"}
            ],
            content11:"填写内容",
            content12:"填写内容",
            content13:"填写内容",
            content14:"填写内容",
            value1:moment(new Date(),"YYYY-MM-DD HH:mm:ss").valueOf(),
            rightNowNumber:1,
            corpIdProjId:[],
            // 调用接口需要的参数
            // 主要需求
            mainRequire:"",
            // 项目类型
            projType:"",
            serverContentArr:[
                {content:"",index:"一"}
            ],
            serverWay:"",
            serverTarget:"",
            serverTerm:"",
            projEventList:[],
            projCost:"",
            noticeTime:"",
            suspendTime:"",
            majeureTime:"",
            otherContent:"",
            corpIdProjIdValue:"",
            id:this.$route.query.id,
            serverTermValueMy:[],
            projCostValue:"壹圆",
        }   
    },
    components:{
        rightNow,
    },
    mounted() {
        this.preProNameAndComName();
        this.getBusinessList();
        this.preMounted();
    },
    watch: {
        value1(val){
            let value=new Date(val[0])
            let value2=new Date(val[1])
            this.serverTerm=value.getFullYear() + '年' + (value.getMonth() + 1) + '月' + value.getDate()+'日至'+value2.getFullYear() + '年' + (value2.getMonth() + 1) + '月' + value2.getDate()+'日';
        },
        projCost(val){
            this.projCostValue=this.atoc(val)
        }
    },
    methods: {
        preMounted(){
            let user=JSON.parse(sessionStorage.getItem("user"));
            getMyContractDetail(2,this.id).then(res => {
                if(res.data.code==200){
                    this.contractNumbe=res.data.data.contractNo
                    this.firstParty1Value=this.firstParty=res.data.data.corpName
                    this.mainRequire=this.content2=res.data.data.mainRequire
                    this.projType=this.content3=res.data.data.projType
                    this.serverContentArr=this.content4=JSON.parse(res.data.data.serverContent)
                    this.serverWay=this.content5=res.data.data.serverWay
                    this.serverTarget=this.content6=res.data.data.serverTarget
                    this.content7=res.data.data.serverTerm
                    this.projEventList=this.content8=res.data.data.projEventList
                    this.projCost=this.content9=res.data.data.projCost
                    this.content10=res.data.data.projEventList
                    this.noticeTime=res.data.data.noticeTime
                    this.suspendTime=this.content11=res.data.data.suspendTime
                    this.majeureTime=this.content12=res.data.data.majeureTime
                    this.otherContent=this.content13=res.data.data.otherContent
                    this.serverTerm=res.data.data.serverTerm
                    this.serverTerm=this.replaceMy(this.serverTerm,"至",",")
                    this.serverTerm=this.replaceMy(this.serverTerm,"年","-");
                    this.serverTerm=this.replaceMy(this.serverTerm,"月","-");
                    this.serverTerm=this.replaceMy(this.serverTerm,"日","");
                    this.serverTerm=this.replaceMy(this.serverTerm,"年","-");
                    this.serverTerm=this.replaceMy(this.serverTerm,"月","-");
                    this.serverTerm=this.replaceMy(this.serverTerm,"日","");
                    this.serverTerm=this.serverTerm.split(',')
                    this.value1=this.serverTerm
                    this.changeFirstParty1Value(this.firstParty1Value);
                }
            })
            splrFinish({ "splrId": user.roleId }).then(res => {
                if (res.data.code === 200) {
                    this.partyB=res.data.data[0].splrName
                }
            })
        },
        replaceMy(string,str1,str2) {
            var b = string.replace(str1, str2);
            return b;
        },
        /*数字金额转大写*/
        atoc(numberValue){  
            var numberValue=new String(Math.round(numberValue*100)); // 数字金额  
            var chineseValue=""; // 转换后的汉字金额  
            var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字  
            var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位  
            var len=numberValue.length; // numberValue 的字符串长度  
            var Ch1; // 数字的汉语读法  
            var Ch2; // 数字位的汉字读法  
            var nZero=0; // 用来计算连续的零值的个数  
            var String3; // 指定位置的数值  
            if(len>15){  
                alert("超出计算范围");  
                return "";
            }  
            if (numberValue==0){  
                chineseValue = "零元整";  
                return chineseValue;
            }  
            String2 = String2.substr(String2.length-len, len); // 取出对应位数的STRING2的值  
            for(var i=0; i<len; i++){  
                String3 = parseInt(numberValue.substr(i, 1),10); // 取出需转换的某一位的值  
                if ( i != (len - 3) && i != (len - 7) && i != (len - 11) && i !=(len - 15) ){  
                    if ( String3 == 0 ){  
                        Ch1 = "";  
                        Ch2 = "";  
                        nZero = nZero + 1;  
                    }else if ( String3 != 0 && nZero != 0 ){  
                        Ch1 = "零" + String1.substr(String3, 1);  
                        Ch2 = String2.substr(i, 1);  
                        nZero = 0;  
                    }else{  
                        Ch1 = String1.substr(String3, 1);  
                        Ch2 = String2.substr(i, 1);  
                        nZero = 0;  
                    }  
                }else{ // 该位是万亿，亿，万，元位等关键位  
                    if( String3 != 0 && nZero != 0 ){  
                        Ch1 = "零" + String1.substr(String3, 1);  
                        Ch2 = String2.substr(i, 1);  
                        nZero = 0;  
                    }else if ( String3 != 0 && nZero == 0 ){  
                        Ch1 = String1.substr(String3, 1);  
                        Ch2 = String2.substr(i, 1);  
                        nZero = 0;  
                    }else if( String3 == 0 && nZero >= 3 ){  
                        Ch1 = "";  
                        Ch2 = "";  
                        nZero = nZero + 1;  
                    }else{  
                        Ch1 = "";  
                        Ch2 = String2.substr(i, 1);  
                        nZero = nZero + 1;  
                    }  
                if( i == (len - 11) || i == (len - 3)){ // 如果该位是亿位或元位，则必须写上  
                    Ch2 = String2.substr(i, 1);  
                }  
            }  
            chineseValue = chineseValue + Ch1 + Ch2;  
            }  
            if ( String3 == 0 ){ // 最后一位（分）为0时，加上“整”  
                chineseValue = chineseValue + "整";  
            }  
            return chineseValue;  
        },
        // 拉去公司名称和关联对应的项目名称
        preProNameAndComName(){
            getMyService().then(res => {
                if (res.data.code === 200) {
                    this.firstPartyAll=res.data.data
                    this.firstParty1=this.hashArr(this.firstPartyAll)
                }
            })
            let user=JSON.parse(sessionStorage.getItem("user"));
            splrFinish({ "splrId": user.roleId }).then(res => {
                if (res.data.code === 200) {
                    this.partyB=res.data.data[0].splrName
                }
            })
        },
        getBusinessList(){
            getBusinessList().then(res => {
                this.businessList = res.data.data
            })
        },
        // 
        changeHash(idName) {
            document.querySelector(idName).scrollIntoView(true);
        },
        // 选择没重复的进入数组，重复的不进入
        hashArr(arr){
            let hash=[];
            for(var i=1;i<arr.length;i++){
                if(hash.indexOf(arr[i].corpName)==-1){
                    hash.push(arr[i].corpName);
                }
            }
            return hash;
        },
        // 选择公司后，获取跟该公司关联的项目
        changeFirstParty1Value(name){
            if(name){
                for(var i=0;i<this.firstPartyAll.length;i++){
                    if(this.firstPartyAll[i].corpName==name){
                        this.corpIdProjId.push({"corpId":this.firstPartyAll[i].corpId,"projId":this.firstPartyAll[i].projId,"corpName":this.firstPartyAll[i].corpName})
                        this.firstParty2.push(`${this.firstPartyAll[i].businessType}`+` `+`${this.firstPartyAll[i].field}`+` `+`${this.firstPartyAll[i].updatedTime}`)
                    }
                }
            }else{
                for(var i=0;i<this.firstPartyAll.length;i++){
                    if(this.firstPartyAll[i].corpName==this.firstParty1Value){
                        this.corpIdProjId.push({"corpId":this.firstPartyAll[i].corpId,"projId":this.firstPartyAll[i].projId,"corpName":this.firstPartyAll[i].corpName})
                        this.firstParty2.push(`${this.firstPartyAll[i].businessType}`+` `+`${this.firstPartyAll[i].field}`+` `+`${this.firstPartyAll[i].updatedTime}`)
                    }
                }
            }
            
        },
        changeFirstParty2Value(){
            for(var i=0;i<this.firstParty2.length;i++){
                if(this.firstParty2Value==this.firstParty2[i]){
                   this.corpIdProjIdValue=this.corpIdProjId[i]
                }
            }
        },
        // 点击删除数组
        clickToSliceArr(arr, index) {
            arr.splice(index, 1);
        },
        // 点击新增数组
        clickToAddArr(arr,index){
            if (index === '') {
                arr.push({
                    content:"",
                    index:this.numberConvertToUppercase(arr.length)
                });
                this.arrContent = arr[arr.length - 1];
            } else {
                this.arrContent = arr[index];
            }
        },
        addArrTable(){
            this.rightNowNumber=0;
        },
        // 弹窗关闭
        changeNum(val){
            this.rightNowNumber=val;
        },
        // 点击确定获取写入的值
        changeValue(val){
            // 服务备注
            this.projEventList.push(val)
        },
        numberConvertToUppercase(num){
            let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
            let unit = ["", "十", "百", "千", "万"];
            num = parseInt(num);
            let getWan = (temp) => {
            let strArr = temp.toString().split("").reverse();
            let newNum = "";
            for (var i = 0; i < strArr.length; i++) {
            newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
            }
            return newNum;
            }
            let overWan = Math.floor(num / 10000);
            let noWan = num % 10000;
            if (noWan.toString().length < 4) noWan = "0" + noWan;
            return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
        },
        contractSubmit(){
            for(var i=0;i<this.projEventList.length;i++){
                this.projEventList[i].projId=this.corpIdProjIdValue.projId
            }
            let contractDTO={
                "contract": {
                    "corpId": this.corpIdProjIdValue.corpId,
                    "corpName": this.corpIdProjIdValue.corpName,
                    "mainRequire": this.mainRequire,
                    "majeureTime": this.majeureTime,
                    "noticeTime": this.noticeTime,
                    "otherContent": this.otherContent,
                    "projCost": this.projCost,
                    "projId": this.corpIdProjIdValue.projId,
                    "projType": this.projType,
                    "serverContent": JSON.stringify(this.serverContentArr),
                    "serverTarget": this.serverTarget,
                    "serverTerm": this.serverTerm,
                    "serverWay": this.serverWay,
                    "suspendTime": this.suspendTime,
                    "splrName":this.partyB
                },
                "projEventList":this.projEventList
            }
            updateContract(this.id,contractDTO).then(res => {
                if (res.data.code === 200) {
                    this.$notify({
                        title: '',
                        message: '修改成功！',
                        position: 'top-left',
                        type: "success"
                    });
                    this.$router.push('funs')
                } else {
                    this.$notify({
                        title: '',
                        message: '修改合同失败！请重新登录后重试',
                        position: 'top-left',
                        type: "error"
                    });
                }
            })
        }
    },
}
</script>
<style scoped>
.fillSignContract{
    width: 80%;
    height: auto;
    margin: 0 auto;
    background: #fff;
    margin-bottom: 60px;
}
.fillSignContract_title{
    background: #fafafa;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
}
.fillSignContract_title>a{
    color: #9e0100;
    font-size: 20px;
}
.fillSignContract_title>a::before{
    content: '<';
    color: #9e0100;
    margin-right: 12px;
}
.fillSignContract_content{
    width: 100%;
    margin: 0 auto;
}
.fillSignContract_content_title,.fillSignContract_footer_title{
    height: 80px;
    border-bottom: 1px solid #999;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 30px;
}
.fillSignContract_content_title>span,.fillSignContract_footer_title>span{
    font-size: 28px;
}
.fillSignContract_content_contract{
    width: 100%;
    height: auto;
    padding: 0 30px;
    box-sizing: border-box;
}
.fillSignContract_content_contract_title{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    font-weight: bold;
}
.fillSignContract_content_contract_title>p:first-child{
    font-size: 34px;
    line-height: 68px;
}
.fillSignContract_content_contract_title>p:last-child{
    font-size: 28px;
    line-height: 56px;
}
.fillSignContract_content_contract_content{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.fillSignContract_content_contract_content>.contractPerson{
    display: flex;
    padding: 0.5rem 0;
    box-sizing: border-box;
}
.fillSignContract_content_contract_content p,.fillSignContract_content_contract_content span,.fillSignContract_content_contract_tail p{
    font-size: 20px;
}
.spanBottomLine{
    display: inline-block;
    width: auto;
    padding: 0 24px;
    font-size: 20px;
    text-align: left;
    text-decoration: underline;
    color: rgba(0,153,255, 1);
    text-decoration-color: #000;
    cursor: pointer;
}
.contractChapter{
    margin-top: 1rem;
}
.scopeOfService{
    display: flex;
    flex-direction: column;
}
.scopeOfService>div{
    padding: 0.5rem 0;
    display: flex;
}
.scopeOfService>div>span{
    white-space: nowrap;
}
.scopeOfService>div>div{
    margin-left: 0.5rem;
}
.contractChapterP{
    font-weight: bold;
}
.contractChapterUlParent td{
    font-size:20px;
    padding: 0.5rem 1rem;
    border: 1px solid #999;
    max-width: 500px;
    box-sizing: border-box;
}
.contractChapterUlParent tr>td:first-child,.contractChapterUlParent2 tr>td:last-child{
    text-align: center;
}
.contractChapterUlParent table{
    border-collapse: collapse;
}
.contractChapterUlParent tr:first-child>td{
    background: rgb(202, 201, 201);
}
.ordinary{
    line-height: 70px;
}
.fillSignContract_content_contract_tail{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
}
.fillSignContract_content_contract_tail .ordinary{
    line-height: 42px;
}
.circle,.circles{
    font-size: 16px;
    color: rgba(0,153,255, 1);
}
.fillSignContract_footer{
    width: 100%;
    margin: 0 auto;
}
.footer_content_title{
    height: 80px;
    font-size: 25px;
    box-sizing: border-box;
    padding-left: 30px;
    display: flex;
    align-items: center;
}
.footer_content_content{
    width: 100%;
    box-sizing: border-box;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
}
.footer_content_contentSon{
    min-height: 100px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
/* .footer_content_content>.footer_content_contentSon:nth-child(2){
  min-height: 100px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: start!important;
} */
.footer_content_contentSon span,.footer_content_contentSon p{
    font-size: 20px;
}
.footer_content_contentSon .circle{
    color: #000;
    border-color: #000;
}
.footer_content_contentSon>span:first-child{
    width: 12rem;
    display: flex;
    justify-content: flex-end;
}
.footer_content_contentSon>select:nth-child(2),.footer_content_contentSon>select:nth-child(3){
    width: 32.5rem;
    height: 40px;
    outline: none;
    margin: 0 1rem;
    text-indent: 0.5rem;
}
.dibiao{
    width: auto;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}
.dibiao>img{
    width: 32px;
    height: 32px;
    flex-shrink: 0;
}
.dibiao>span{
    color: #999;
}
.footer_content_contentSon>textarea:nth-child(2){
    max-width: 32.4rem;
    width: 32.4rem;
    height: auto;
    outline: none;
    margin: 0 1rem;
    text-indent: 0.5rem;
    line-height: 40px;
}
.footer_content_contentSon_tablePar{
    width: 36rem;
    height: auto;
    margin: 0 1rem;
}
.footer_content_contentSon_tablePar>div:first-child>div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 40px;
}
.footer_content_contentSon_tablePar>div:first-child>div>div:first-child{
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(230, 230, 230);
    border-radius: 4px;
    color: #999;
}
.footer_content_contentSon_tablePar>div:first-child>div>span:nth-child(2){
    display: block;
    width: 40px;
    height: 2px;
    background: #000;
    margin: 0 0.5rem;
}
.footer_content_contentSon_tablePar>div:first-child>div>input{
    width: 18.7rem;
    height: 40px;
    text-indent: 0.5rem;
}
.footer_content_contentSon_tablePar>div:first-child>div>button{
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background: none;
    font-size: 30px;
    line-height: 40px;
    border:1px solid #999;
    margin-left: 1.5rem;
    cursor: pointer;
}
.footer_content_contentSon_tablePar>div:first-child>div>button>img{
    height: 100%;
}
.footer_content_contentSon_tablePar>div:last-child{
    width: 32.4rem;
    height: 40px;
    border: 1px dashed #bfbfbf;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.footer_content_contentSon_tablePar>div:last-child>img{
    height: 100%;
}
.contentSonTs{
    align-items: flex-start;
}
.contentSonTs>span{
    margin-top: 40px;
}
.contentSonTs>DIV:last-child{
    margin-top: 40px;
}
.time1Andtime2{
    width: 24rem;
    height: 40px;
    margin: 0 1rem;
    /* border: 1px solid #999; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.time1Andtime2>input{
    border: 0;
}
.footer_content_contentSon_table2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.footer_content_contentSon_table2>.dibiao{
    width: 16rem;
    justify-content: flex-end;
}
.footer_content_contentSon_table2>table,.footer_content_contentSon_table2>table+div{
    width: 80%;
    margin-left: 4rem;
    border-collapse:collapse;
}
.footer_content_contentSon_table2>table>tr:first-child{
  height: 40px;
}
.footer_content_contentSon_table2>table>tr{
  height: 80px;
}
.footer_content_contentSon_table2>table td{
  border: 1px solid #999;
  text-align: center;
}
.footer_content_contentSon_table2>table>tr:first-child>td{
  background: rgb(202, 201, 201);
}
.footer_content_contentSon_table2>table>tr:not(:first-child)>td:last-child>div{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer_content_contentSon_table2>table>tr:not(:first-child)>td:last-child>div>button{
  background: none;
  border: 0;
  cursor: pointer;
  color: rgba(0, 110, 255, 1);
}
.footer_content_contentSon_table2 .addMore{
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #999;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
.footer_content_contentSon_table2 .addMore>img{
  height: 100%;
}
.numberAddOrReduce{
  width: 24rem;
  height: 50px;
  margin: 0 1rem;
  display: flex;
  align-items: center;
}
.numberAddOrReduce>input{
  width: 17%;
  height: 100%;
  text-indent: 1rem;
  box-sizing: border-box;
}
.numberAddOrReduce>div{
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #999;
  border-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.numberAddOrReduce>div>button{
  width: 100%;
  height: 50%;
  border: 0;
  cursor: pointer;
  background: none;
}
.numberAddOrReduce>div>button:first-child{
  border-bottom: 1px solid #999;
}
.numberAddOrReduce>div>button>img{
  height: 100%;
}
.footer_content_contentSon>input:nth-child(2){
  width: 24rem;
  margin: 0 1rem;
  height: 50px;
  text-indent: 1rem;
}
.footer_content_contentSon_table2>.dibiao{
  margin-bottom: 1rem;
}
.footer_content_contentSon .zhushi{
  height: 24px;
}

.fillSignContract_footer_button2{
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.fillSignContract_footer_button2>div{
  width: 240px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fillSignContract_footer_button2>div>button{
  width: 100px;
  height: 40px;
  border: 1px solid #999;
  cursor: pointer;
  border-radius: 4px;
}
.fillSignContract_footer_button2>div>button:first-child{
  background: none;
  color: #333;
}
.fillSignContract_footer_button2>div>button:last-child{
  background: #9e0100;
  color: #fff;
}
.contractProcess{
  width: 50%;
  height: auto;
  margin: 1rem 0;
  padding: 1rem;
  box-sizing: border-box;
  border:1px dashed #999;
  border-radius: 16px;
}
.contractProcess>p{
  font-size: 30px;
  color: #000;
}
.contractProcessSonPar{
  width: 100%;
  height: auto;
}
.contractProcessPar{
  width: auto;
  display: flex;
  align-items: center;
  justify-content: start;
}
.contractProcess_content{
  margin-top: 1rem;
}
.contractProcessSonPar-son1{
  display: flex;
  margin-top: 1rem;
}
.contractProcessSonPar-son1>p{
  width: calc(100%/4);
  font-size: 26px;
  color: #999;
}
.contractProcessSonPar-son2{
  width: 100%;
  height: auto;
  display: flex;
}
.contractProcess_content{
  width: calc(100%/4);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.contractProcess_content>div{
  width: 50%;
}
.contractProcess_content>div:first-child>div{
  width: 100%;
  background: rgb(230, 230, 230);
  text-align: center;
  color: #999;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
}
.contractProcess_content>div:last-child{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}
.threeClicle>span{
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #999;
  margin: 0 0.2rem;
}
.onecontractProcess_content{
  height: auto;
  margin: 1rem 0;
  padding: 1rem 0;
  background: rgb(230, 230, 230);
  text-align: center;
  color: #999;
}
.lastcontractProcess_content{
  width: calc(100%/4/2);
  margin: 1rem 0;
  padding: 1rem 0;
  background: rgb(230, 230, 230);
  color: #999;
  box-sizing: border-box;
  margin-top: 2rem;
}
@media screen and (max-width:1366px) {
  
}
</style>
<style>
.time1Andtime2 .el-date-editor{
  width: 100%;
  border-color: #999;
  display: flex;
  align-items: center;
}
.el-range-editor.is-active, .el-range-editor.is-active:hover{
  border-color: #999;
}
</style>