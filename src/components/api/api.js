import axios from 'axios'

// let base = 'http://192.168.199.234:8081';

// let base = 'http://58.17.192.13:28080/myTest';

// let base = 'http://47.101.159.25:8080/myTest';

let base = 'http://42.51.16.10:8080/myTest';

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

// 统一配置
let _hejj_request = axios.create({
  baseURL: base,
  responseType: 'json',
  validateStatus (status) {
    // 200 外的状态码都认定为失败
    return status === 200
  }
})

// 拦截请求
_hejj_request.interceptors.request.use((config) => {
  let token = sessionStorage.getItem("token");
  // 有 token就带上
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
//登录
export const login = params => { return _hejj_request.post(`${base}/loginAndRegApi/log`, params).then(res => res.data); };

//注销
export const logOut = params => { return _hejj_request.post(`${base}/loginAndRegApi/logOut`, params).then(res => res.data); };

//注册第一步 基础
export const postReg = params => { return _hejj_request.post(`${base}/loginAndRegApi/reg`, params).then(res => res.data); };

//身份选择
export const shenfenXz = params => { return _hejj_request.post(`${base}/loginAndRegApi/shenfen`, params).then(res => res.data); };

//人才会员注册
export const talentReg = params => { return _hejj_request.post(`${base}/loginAndRegApi/talentReg`, params).then(res => res.data); };
// export const  

//企业会员完善
export const enterpMemberReg = params => { return _hejj_request.post(`${base}/loginAndRegApi/enterpMemberReg`, params).then(res => res.data); };

//服务商注册完善
export const ServiceSupplyReg = params => { return _hejj_request.post(`${base}/loginAndRegApi/ServiceSupplyReg`, params).then(res => res.data); };

//共享人才 注册完善
export const sharingTalentsReg = params => { return _hejj_request.post(`${base}/loginAndRegApi/sharingTalentsReg`, params).then(res => res.data); };

//安全问题保存接口
export const safety = params => { return _hejj_request.post(`${base}/loginAndRegApi/safety`, params).then(res => res.data); };

//验证账号可用性
export const repeatName = params => { return _hejj_request.get(`${base}/loginAndRegApi/repeatName`, { params: params }); }

//发送邮件
export const getEmail = params => { return _hejj_request.get(`${base}/api/regApi/Email`, { params: params }); };
//发送手机号邮件0

//获取企业会员(显示为字段控制)
export const getMembership = params => { return _hejj_request.get(`${base}/api/homeApi/getMembership`, { params: params }); };

//根据id查找企业会员
export const getMembershipInfo = params => { return _hejj_request.get(`${base}/api/homeApi/getMembershipInfo`, { params: params }); };

//公司新闻
export const getMemNews = params => { return _hejj_request.get(`${base}/api/homeApi/getMemNews`, { params: params }); };

//联系我们
export const getMemAbout = params => { return _hejj_request.get(`${base}/api/homeApi/getMemAbout`, { params: params }); };

//业务一级
export const getBusinessList = params => { return _hejj_request.get(`${base}/api/getBusinessList`, { params: params }); };

//业务二级
export const getBusinessTowList = params => { return _hejj_request.get(`${base}/api/getBusinessTowList`, { params: params }); };

//获取一级行业
export const hyList = params => { return _hejj_request.get(`${base}/item/hyList`, { params: params }); };

//获取二级行业
export const htListChildren = params => { return _hejj_request.get(`${base}/item/htListChildren`, { params: params }); };


//服务供应商相关
export const getProviderList = params => { return _hejj_request.get(`${base}/api/providerApi/getProviderList`, { params: params }); };

//服务供应商单个信息
export const getCustSplrInfoVo = params => { return _hejj_request.get(`${base}/api/getCustSplrInfoVo`, { params: params }); };

//服务供应商单个信息
export const getSplrCaseInfo = params => { return _hejj_request.get(`${base}/api/getSplrCaseInfo`, { params: params }); };

//案列数据
export const getSplrCase = params => { return _hejj_request.get(`${base}/api/getSplrCase`, { params: params }); };

//咨询速递
export const getNews = params => { return _hejj_request.get(`${base}/new/getNews`, { params: params }); };

//新闻详情页
export const getNewsInfo = params => { return _hejj_request.get(`${base}/new/getNewsInfo`, { params: params }); };

//新闻具体详情
export const getgetNewIn = params => { return _hejj_request.get(`${base}/new/getNewIn`, { params: params }); };

//协议接口
export const getNewPtInfo = params => { return _hejj_request.get(`${base}/new/getNewPtInfo`, { params: params }); };

//智慧园区相关
export const getParkList = params => { return _hejj_request.get(`${base}/park/getParkList`, { params: params }); };

//智慧园区详情
export const getParkInfo = params => { return _hejj_request.get(`${base}/park/getParkInfo`, { params: params }); };

//专家智库
export const getProfsList = params => { return _hejj_request.get(`${base}/proficient/getProfs`, { params: params }); };

//
export const getProfById = params => { return _hejj_request.get(`${base}/proficient/getProfById`, { params: params }); };

//城市一级
export const getCity1 = params => { return _hejj_request.get(`${base}/item/city1`, { params: params }); };

//城市二级
export const getCity2 = params => { return _hejj_request.get(`${base}/item/city2`, { params: params }); };

//城市三级
export const getCity3 = params => { return _hejj_request.get(`${base}/item/city3`, { params: params }); };

//个人共享资源
export const resources = params => { return _hejj_request.get(`${base}/item/resources`, { params: params }); };

//resourcesEr
export const resourcesEr = params => { return _hejj_request.get(`${base}/item/resourcesEr`, { params: params }); };

//项目需求
export const getProjs = params => { return _hejj_request.get(`${base}/projinfo/getProjs`, { params: params }); };

//获取个人需求列表
export const getPersonNeeds = params => { return _hejj_request.get(`${base}/projperson/getPersonNeeds`, { params: params }); };

//发布个人需求
export const publishPersonNeed = params => { return _hejj_request.post(`${base}/projperson/publishPersonNeed`, params).then(res => res); };

//企业发布
export const publishProjsNeed = params => { return _hejj_request.post(`${base}/projinfo/publishProjsNeed`, params).then(res => res); };

//共享人才项目列表
export const getConsultant = params => { return _hejj_request.get(`${base}/consultant/getConsultant`, { params: params }); };

//共享人才 人才招聘
export const getHuntings = params => { return _hejj_request.get(`${base}/hunting/getHuntings`, { params: params }); };

// 获取候选人列表
export const getMyNeedsDetail = params => { return _hejj_request.get(`${base}/projperson/getMyNeedsDetail`, { params: params }); };

//选择ta
export const chooseTA = params => { return _hejj_request.put(`${base}/projperson/chooseTA`, params).then(res => res); };

// 我能服务
export const iCanServer = params => { return _hejj_request.post(`${base}/projperson/iCanServer`, params).then(res => res); };

//需求撤销
export const revokeNeed = params => { return _hejj_request.get(`${base}/projperson/revokeNeed`, { params: params }); }

//下一步
export const resultConfirmation = params => { return _hejj_request.put(`${base}/projperson/resultConfirmation`, params).then(res => res); };

// 提交评价
export const resultEvaluate = params => { return _hejj_request.put(`${base}/projperson/resultEvaluate`, params).then(res => res); };

// 获取候选人
export const getIndivDetail = params => { return _hejj_request.get(`${base}/indiv/getIndivDetail`, { params: params }); }

//获取企业会员交易列表
export const getProjDetailByCorp = params => { return _hejj_request.get(`${base}/projinfo/getProjDetailByCorp`, { params: params }); }

//企业会员下一步 
export const corpTenderNextStep = params => { return _hejj_request.get(`${base}/projinfo/corpTenderNextStep`, { params: params }); }

// 查看服务服务供应商
export const getSplrDetailWithTender = params => { return _hejj_request.get(`${base}/projinfo/getSplrDetailWithTender`, { params: params }); }

// 再次招标
export const corpReTender = params => { return _hejj_request.post(`${base}/projinfo/corpReTender`, params).then(res => res); };

// 需求关闭
export const corpRevokeNeed = params => { return _hejj_request.get(`${base}/projinfo/corpRevokeNeed`, { params: params }); }

// 选择中标
export const chooseWinningBid = params => { return _hejj_request.put(`${base}/projinfo/chooseWinningBid`, params).then(res => res); };

// 上传
export const file = params => { return _hejj_request.post(`${base}/upload/common/file`, params).then(res => res); };

// 下载
// export const downloadFile=params=>{return _hejj_request.post(`${base}/upload/common/downloadFile`,params).then(res=>res);};
export const downloadFile = params => { return _hejj_request.get(`${base}/upload/common/downloadFile`, { params: params }); }

// 下载
export const downloadFileNotCareful = params => { return _hejj_request.get(`${base}/fileupload/`, { params: params }); }

// 同意 达成交易
export const completeTransaction = params => { return _hejj_request.put(`${base}/projinfo/completeTransaction`, params).then(res => res); };

// 服务供应商列表
export const getProjList = params => { return _hejj_request.get(`${base}/projinfo/getProjList`, { params: params }); }

// 获取我被邀标
export const getProjListInvitation = params => { return _hejj_request.get(`${base}/projinfo/getProjListInvitation`, { params: params }); }

// 我的标的
export const getProjListOfMine = params => { return _hejj_request.get(`${base}/projinfo/getProjListOfMine`, { params: params }); }

// 服务供应商投标
export const serverTender = params => { return _hejj_request.post(`${base}/projinfo/serverTender`, params).then(res => res); };

// 辅助检测双方是否同意
export const checkCompleteTransaction = params => { return _hejj_request.get(`${base}/projinfo/checkCompleteTransaction`, { params: params }); }

// 新闻列表
export const getNewDtailWithType = params => { return _hejj_request.get(`${base}/new/getNewDtailWithType`, { params: params }); }

// 新闻内页下一个
export const getNewNext = params => { return _hejj_request.get(`${base}/new/getNewNext`, { params: params }); }

// 新闻上一个
export const getNewPre = params => { return _hejj_request.get(`${base}/new/getNewPre`, { params: params }); }

// 修改图片路径
export const changeAvatar = params => { return _hejj_request.put(`${base}/userInfo/changeAvatar`, params).then(res => res); };

// 获取用户信息
export const getMyInfo = params => { return _hejj_request.get(`${base}/userInfo/getMyInfo`, { params: params }); }

// 获取验证码
export const phone = params => { return _hejj_request.get(`${base}/api/regApi/phone`, { params: params }); }

// 校验手机是否重复注册
export const checkPhone = params => { return _hejj_request.get(`${base}/api/regApi/checkPhone`, { params: params }); }

// 获取园区排行
export const getHotPark = params => { return _hejj_request.get(`${base}/park/getHotPark`, { params: params }); }

// 新的服务供应商列表
export const getFertileSplrList = params => { return _hejj_request.get(`${base}/custsplr/getFertileSplrList`, { params: params }); }

// 修改首页请求优质服务商接口
export const getTopSplr = params => { return _hejj_request.get(`${base}/homepage/topSplr`, { params: params }); }

//咨询速递
export const getTdhNews = params => { return _hejj_request.get(`${base}/tdhnews/getTdhNews`, { params: params }); };

// 互助值
export const calcIndivResource = params => { return _hejj_request.get(`${base}/userInfo/calcIndivResource`, { params: params }); };

// 信用等级
export const calcCorpLevel = params => { return _hejj_request.get(`${base}/userInfo/calcCorpLevel`, { params: params }); };

// 
export const calcSplrLevel = params => { return _hejj_request.get(`${base}/userInfo/calcSplrLevel`, { params: params }); };

// 发送短信验证码
export const sendCode = params => { return _hejj_request.get(`${base}/userInfo/sendCode`, { params: params }); };

// 验证码登录
export const phoneLogin = params => { return _hejj_request.post(`${base}/userInfo/phoneLogin`, params).then(res => res.data); };

// 新首页菜单
export const getBusinessTowWithChild = params => { return _hejj_request.get(`${base}/api/getBusinessTowWithChild`, { params: params }); };

// 新闻
export const changeOneP = params => { return _hejj_request.get(`${base}/new/changeOneP`, { params: params }); };

// 企业会员回显
export const corpFinish = params => { return _hejj_request.get(`${base}/userCRUD/corpFinish`, { params: params }); };

// 服务商回显
export const splrFinish = params => { return _hejj_request.get(`${base}/userCRUD/splrFinish`, { params: params }); };

// 修改企业工商信息、经营情况、业务情况、发展规划
export const updateCorpInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateCorpInfo/${id}`, params).then(res => res); };

// 修改企业信息
export const updateCorpMainInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateCorpMainInfo/${id}`, params).then(res => res); };

// 修改高管信息
export const updateCorpMainManage = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateCorpMainManage/${id}`, params).then(res => res); };

// 供应商修改高管
export const updateSplrMainManage = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateSplrMainManage/${id}`, params).then(res => res); };

// 供应商修改企业
export const updateSplrMainInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateSplrMainInfo/${id}`, params).then(res => res); };

// 供应商修改业务情况
export const updateSplrBusinessInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateSplrBusinessInfo/${id}`, params).then(res => res); };

// 供应商修改典型案例
export const updateSplrServiceInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateSplrServiceInfo/${id}`, params).then(res => res); };

// 个人会员回显
export const indivFinish = params => { return _hejj_request.get(`${base}/userCRUD/indivFinish`, { params: params }); };

// 个人修改工商信息
export const updateIndivInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateIndivInfo/${id}`, params).then(res => res); };

// 个人修改个人资源
export const updateIndivResource = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateIndivResource/${id}`, params).then(res => res); };

// 修改服务供应商工商信息，经营情况
export const updateSplrInfo = (params, id) => { return _hejj_request.put(`${base}/userCRUD/updateSplrInfo/${id}`, params).then(res => res); };

export const hjjtest = (params) => { return _hejj_request.get(`/userCRUD/indivFinish?indivId=1`) };

// 校验修改登录密码输入的原密码
export const checkPasswordRight = (params) => { return _hejj_request.get(`/userCRUD/checkPasswordRight`, { params: params }) };

// 修改密码
export const updateLoginPassword = (params) => { return _hejj_request.put(`${base}/userCRUD/updateLoginPassword`, params).then(res => res); };

// 修改问题
export const updateSafeQA = (params) => { return _hejj_request.put(`${base}/userCRUD/updateSafeQA`, params).then(res => res); };

// 反馈列表
export const getFeedbackList = (params) => { return _hejj_request.get(`/feedback/getFeedbackList`, { params: params }) };

// 发布反馈
export const sendFeedBack = params => { return _hejj_request.post(`${base}/feedback/sendFeedBack`, params).then(res => res.data); };

// 确认修改反馈
export const updateFeedBack = (params, feedId) => { return _hejj_request.put(`${base}/feedback/updateFeedBack/${feedId}`, params).then(res => res); };

// 撤销修改
export const revokeFeedBack = (params, id) => { return _hejj_request.put(`${base}/feedback/revokeFeedBack/${id}`, params).then(res => res); };

// 反馈申请发布举报一级字典
export const feed1 = (params) => { return _hejj_request.get(`/item/feed1`, { params: params }) };
// 二级
export const feed2 = (params) => { return _hejj_request.get(`/item/feed2`, { params: params }) };
// 三级
export const feed3 = (params) => { return _hejj_request.get(`/item/feed3`, { params: params }) };

// 客户见证
export const getTestimony = (params) => { return _hejj_request.get(`/testimony/getTestimony`, { params: params }) };

// 企业认证企业
export const uploadCorpLicense = (params) => { return _hejj_request.put(`${base}/userCRUD/uploadCorpLicense`, params).then(res => res); };
// 企业认证供应商
export const uploadSplrLicense = (params) => { return _hejj_request.put(`${base}/userCRUD/uploadSplrLicense`, params).then(res => res); };

// 修改需求
export const corpChangeNeed = (params, id) => { return _hejj_request.put(`${base}/projinfo/corpChangeNeed/${id}`, params).then(res => res); };

// 获取招商信息
export const getMerchantList = (params) => { return _hejj_request.get(`/merchant/getMerchantList`, { params: params }) };

// 智慧园区招商报名
export const merchantEntered = (params) => { return _hejj_request.put(`${base}/merchant/merchantEntered`, params).then(res => res); };

// 检验供应商是否已经投标
export const checkSplrTender = (params) => { return _hejj_request.get(`/projinfo/checkSplrTender`, { params: params }) };

// 再次投标获取数据
export const getOldTender = (params) => { return _hejj_request.get(`/projinfo/getOldTender`, { params: params }) };

//再次招标
export const corpReTendering = (params, id) => { return _hejj_request.put(`${base}/projinfo/corpReTendering/${id}`, params).then(res => res); };

// 供应商获取合同列表
export const getMyContract = (role,params) => { return _hejj_request.get(`/contract/getMyContract/${role}`, { params: params }) };

// 获取具体某一个合同
export const getMyContractDetail = (role,id,params) => { return _hejj_request.get(`/contract/getMyContract/${role}/${id}`, { params: params }) };

// 获取供应商关联的项目
export const getMyService = (params) => { return _hejj_request.get(`/contract/getMyService`, { params: params }) };

// 发起合同签订
export const startContract = params => { return _hejj_request.post(`${base}/contract/startContract`, params).then(res => res.data); };

// 企业会员申请修改合同
export const confirmContract = (operation,contractId,params) => { return _hejj_request.put(`${base}/contract/confirmContract/${operation}/${contractId}`, params).then(res => res); };

// 供应商修改合同
export const updateContract = (contractId,params) => { return _hejj_request.put(`${base}/contract/updateContract/${contractId}`, params).then(res => res); };

// 供应商或者企业会员查看服务列表信息
export const getServerList = (userRole,params) => { return _hejj_request.get(`/transaction/getServerList/${userRole}`, { params: params }) };

// 查看服务详情
export const getServer1List = (userRole,contractId,params) => { return _hejj_request.get(`/transaction/getServerList/${userRole}/${contractId}`, { params: params }) };

// 发起服务日志
export const startServer = params => { return _hejj_request.post(`${base}/transaction/startServer`, params).then(res => res.data); };

// 查看服务日志详情
export const serverItem = (params) => { return _hejj_request.get(`/transaction/serverItem`, { params: params }) };

// 企业会员确认服务日志
export const confirmServer = (serverId,params) => { return _hejj_request.put(`${base}/transaction/confirmServer/${serverId}`, params).then(res => res); };

// 聊天
export const getMyFriend = (params) => { return _hejj_request.get(`/friend/getMyFriend`, { params: params }) };

//需求方对服务方
export const buildFriendShip = (id,params) => { return _hejj_request.post(`${base}/friend/buildFriendShip/${id}`, params).then(res => res); };

// post人才
export const talent = (params) => { return _hejj_request.post(`${base}/talent`, params).then(res => res); };

// get人才
export const getTalent = (id,params) => { return _hejj_request.get(`/talent/${id}`, { params: params })};

// put人才
export const putTalent = (id,params) => { return _hejj_request.put(`${base}/talent/${id}`, params).then(res => res); };

// post工作经验
export const talentWork = (params) => { return _hejj_request.post(`${base}/talent/workexp`, params).then(res => res); };

// get工作经验
export const getTalentWork = (id,params) => { return _hejj_request.get(`/talent/workexp/${id}`, { params: params })};

// put工作经验
export const putTalentWork = (id,params) => { return _hejj_request.put(`${base}/talent/workexp/${id}`, params).then(res => res); };

// post项目经验
export const addProject = (params) => { return _hejj_request.post(`${base}/talent/project`, params).then(res => res); };

// get项目经验
export const getProject = (id,params) => { return _hejj_request.get(`/talent/project/${id}`, { params: params })};

// put项目经验
export const updateProject = (id,params) => { return _hejj_request.put(`${base}/talent/project/${id}`, params).then(res => res); };

// post教育经历
export const addEdu = (params) => { return _hejj_request.post(`${base}/talent/edu`, params).then(res => res); };

// get教育经历
export const getEdu = (id,params) => { return _hejj_request.get(`/talent/edu/${id}`, { params: params })};

// put教育经历
export const updateEdu = (id,params) => { return _hejj_request.put(`${base}/talent/edu/${id}`, params).then(res => res); };

// post培训经历
export const addTrain = (params) => { return _hejj_request.post(`${base}/talent/train`, params).then(res => res); };

// get培训经历
export const getTrain = (id,params) => { return _hejj_request.get(`/talent/train/${id}`, { params: params })};

// put培训经历
export const updateTrain = (id,params) => { return _hejj_request.put(`${base}/talent/train/${id}`, params).then(res => res); };

// post资质证书
export const addQulification = (params) => { return _hejj_request.post(`${base}/talent/qulification`, params).then(res => res); };

// get资质证书
export const getQulification = (id,params) => { return _hejj_request.get(`/talent/qulification/${id}`, { params: params })};

// put资质证书
export const updateQulification = (id,params) => { return _hejj_request.put(`${base}/talent/qulification/${id}`, params).then(res => res); };

// 专业
export const zyList = (params) => { return _hejj_request.get(`${base}/item/zyList`, { params: params })};
export const zyListChildren = (params) => { return _hejj_request.get(`${base}/item/zyListChildren`, { params: params })};



export default {
  base
}