<template>
    <el-row type="flex" class="perfect-user-info" justify="center" :gutter="40">
      <el-col :sm="7" :md="6" :lg="5" :xl="4">
        <div class="grid-content bg-purple">
          <ul class="right-ul">
            <li class="li-active">
              <span>基本信息</span>
            </li>
            <li @click="clickMenu">
              <span>我的简历</span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :sm="15" :md="14" :lg="13" :xl="12">
        <div class="grid-content bg-purple-light">
          <div class="left-div-par">
            <div>
              <div class="surface-content-par experience-all-par" style="margin-top: 0;" v-show="!userInfo">
                <div class="surface-title-par">
                    <img src="../../../assets/icon3.png">
                    账户信息
                </div>
                <div class="experience-par">
                  <div class="experience-edit" @click="openDrawer1">
                    <i class="el-icon-edit-outline"></i>
                    编辑
                  </div>
                  <div class="width50">
                    <span>用户名称：</span>
                    {{user.actualName}}
                  </div>
                  <div class="width50">
                    <span>手机号码：</span>
                    {{user.phoneNo}}
                  </div>
                  <div class="width50">
                    <span>邮箱：</span>
                    {{user.emailAdd}}
                  </div>
                  <div class="width50">
                    <span>微信：</span>
                    {{user.wechatNo}}
                  </div>
                  <div class="width50">
                    <span>QQ：</span>
                    {{user.qqNo}}
                  </div>
                  <div class="width50">
                    <span>微博：</span>
                    {{user.microblogNo}}
                  </div>
                  <div class="width50">
                    <span>推荐人：</span>
                    {{user.recommendName}}
                  </div>
                  <div class="width50">
                    <span>推荐人电话：</span>
                    {{user.recommendPhone}}
                  </div>
                </div>
              </div>
              <div v-show="userInfo" class="personBool-par not-first-par">
                <p>账户信息</p>
                <div class="fixed-div-par">
                  <div class="fixed-div">
                    <p>用户名称:</p>
                    <el-input v-model="user.actualName" placeholder="请输入公司名称"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>手机号码:</p>
                    <el-input v-model="user.phoneNo" placeholder="请输入手机号码"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>邮箱:</p>
                    <el-input v-model="user.emailAdd" placeholder="请输入邮箱号码"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>微信:</p>
                    <el-input v-model="user.wechatNo" placeholder="请输入微信号码"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>QQ:</p>
                    <el-input v-model="user.qqNo" placeholder="请输入QQ号码"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>微博:</p>
                    <el-input v-model="user.microblogNo" placeholder="请输入微博号码"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>推荐人:</p>
                    <el-input v-model="user.recommendName" placeholder="请输入推荐人名称"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>推荐人电话:</p>
                    <el-input v-model="user.recommendPhone" placeholder="请输入推荐人电话"></el-input>
                  </div>
                </div>
                <div class="btns-par">
                  <el-button type="primary" plain @click="update1">保存并更新</el-button>
                  <el-button @click="userInfo=!userInfo">取消</el-button>
                </div>
              </div>
              <div class="surface-content-par experience-all-par" v-show="!conpenyInfo">
                <div class="surface-title-par">
                    <img src="../../../assets/icon1.png">
                    关联公司信息
                </div>
                <div class="experience-par">
                  <div class="experience-edit" @click="openDrawer2">
                    <i class="el-icon-edit-outline"></i>
                    编辑
                  </div>
                  <div class="width50">
                    <span>公司名称：</span>
                    {{user.associatedCo}}
                  </div>
                  <div class="width50">
                    <span>岗位：</span>
                    {{user.postName}}
                  </div>
                  <div class="width100">
                    <span>职务：</span>
                    {{user.corpPost}}
                  </div>
                </div>
              </div>
              <div v-show="conpenyInfo" class="personBool-par not-first-par">
                <p>公司信息</p>
                <div class="fixed-div-par">
                  <div class="fixed-div">
                    <p>公司名称:</p>
                    <el-input v-model="user.associatedCo" placeholder="请输入公司名称"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>岗位:</p>
                    <el-input v-model="user.postName" placeholder="请输入在职岗位"></el-input>
                  </div>
                  <div class="fixed-div">
                    <p>职务:</p>
                    <el-select v-model="user.corpPost" placeholder="请选择职务">
                        <el-option label="实际控制人" value="实际控制人"></el-option>
                        <el-option label="董事长" value="董事长"></el-option>
                        <el-option label="董事" value="董事"></el-option>
                        <el-option label="监事" value="监事"></el-option>
                        <el-option label="高管" value="高管"></el-option>
                        <el-option label="中干" value="中干"></el-option>
                        <el-option label="基干" value="基干"></el-option>
                        <el-option label="员工" value="员工"></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="btns-par">
                  <el-button type="primary" plain @click="update2">保存并更新</el-button>
                  <el-button @click="conpenyInfo=!conpenyInfo">取消</el-button>
                </div>
              </div>
              <div class="surface-content-par experience-all-par" v-show="!personResources">
                <div class="surface-title-par">
                    <img src="../../../assets/icon2.png">
                    个人资源
                </div>
                <div class="experience-par" v-for="(item,i) in user.custIndivResourceList" :key="i">
                  <div class="experience-edit" @click="openDrawer3(i)">
                    <i class="el-icon-edit-outline"></i>
                    编辑
                  </div>
                  <div class="width50">
                    {{item.resourceType}}
                  </div>
                  <div class="width50">
                    {{item.resourceLevel}}
                  </div>
                  <div class="width50">
                    {{item.levelStandard}}
                  </div>
                  <div class="width100">
                    {{item.resourceDesc}}
                  </div>
                </div>
                <button class="workExpBtn" @click="openDrawer3">+添加个人资源</button>
              </div>
              <div v-show="personResources" class="personBool-par not-first-par">
                <p>个人资源</p>
                <div class="fixed-div-par" v-for="(item,i) in arr" :key="i">
                    <div class="fixed-div">
                        <p>资源名称:</p>
                        <el-select v-model="item.resourceType" @change="changeResourceType" placeholder="请选择资源类型">
                            <el-option v-for="(item,index) in primaryResources" :key="index" :label="item.itemName" :value="item.dictItemId"></el-option>
                        </el-select>
                    </div>
                    <div class="fixed-div">
                        <p>资源等级:</p>
                        <el-select v-model="item.resourceLevel" @change="changeResourceLevel" placeholder="请选择资源登记">
                            <el-option v-for="(item,index) in twoTierResources" :key="index" :label="item.itemName" :value="item.itemCode"></el-option>
                        </el-select>
                    </div>
                    <div class="fixed-div">
                        <p>资源标准:</p>
                        <el-input class="input-ts" v-model="item.levelStandard" placeholder="请选择资源等级" :disabled="true"></el-input>
                    </div>
                    <div class="fixed-div">
                        <p>资源描述:</p>
                        <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" placeholder="请输入对资源的描述" v-model="item.resourceDesc"></el-input>
                    </div>
                </div>
                <div class="btns-par">
                  <el-button type="primary" plain @click="update3">保存并更新</el-button>
                  <el-button @click="clickCancel">取消</el-button>
                </div>
              </div>
              <div style="margin-top: 2rem;" class="gxrc-par">
                <el-button type="primary" plain @click="clickMenu">
                  <img src="../../../assets/imgGXRC.png" alt="">
                  共享人才
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </template>
  <script>
    import {
        indivFinish,
        resources,
        resourcesEr,
        updateIndivInfo,
        updateIndivResource,
        talent
    } from "@/components/api/api";
    export default{
      data () {
        return {
            userInfo:false,
            conpenyInfo:false,
            personResources:false,
            personIndex:"",
            user:"",
            primaryResources:"",
            twoTierResources:"",
            threeTierResources:"",
            arr:[{resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},]
        }
      },
      components: {
          
      },
      created () {
        this.primaryResourcesFun();
        let user = JSON.parse(sessionStorage.getItem("user"));
        indivFinish({ "indivId": user.roleId }).then(res => {
            if (res.data.code === 200) {
                this.user = res.data.data[0]
            }
        })
      },
      methods: {
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
                    this.arr[0].resourceType = this.primaryResources[i].itemName
                    this.arr[0].resourceLevel=""
                    this.arr[0].levelStandard=""
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
                    this.arr[0].resourceLevel = this.twoTierResources[i].itemName
                }
            }
            resourcesEr({ "dictItemId": this.twoTierResourcesVal, "itemCode": val }).then(res => {
                if (res.data.code === 200) {
                    this.arr[0].levelStandard = res.data.data[0].itemValue1;
                }
            });
        },
        update1(){
            let user = JSON.parse(sessionStorage.getItem("user"));
            let parameter = this.certainFunction(this.user, [
                "actualName",
                "phoneNo",
                "emailAdd",
                "wechatNo",
                "qqNo",
                "microblogNo",
                "recommendName",
                "recommendPhone",
                "indivId",
            ])
            updateIndivInfo(parameter,user.roleId).then(res => {
                if (res.data.code == 200) {
                    updateIndivResource(this.user.custIndivResourceList, user.roleId).then(res => {
                        talent({actualname:this.user.actualName,indivId:user.roleId,phoneNo:this.user.phoneNo,registerEmail:this.user.emailAdd}).then(res => {
                            if (res.data.code == 200) {
                            }
                        })
                    })
                } else {
                    this.$notify({
                    title: '操作失败',
                    message: '您登录信息已失效，请重新登录后重试！',
                    type: 'error',
                    position: 'top-left'
                    });
                }
            })
            this.userInfo=!this.userInfo;
            this.conpenyInfo=false;
            this.personResources=false;
        },
        update2(){
            let user = JSON.parse(sessionStorage.getItem("user"));
            let parameter = this.certainFunction(this.user, [
                "associatedCo",
                "postName",
                "corpPost",
                "indivId",
            ])
            updateIndivInfo(parameter,user.roleId).then(res => {
                if (res.data.code == 200) {
                    updateIndivResource(this.user.custIndivResourceList, user.roleId).then(res => {
                        talent({actualname:this.user.actualName,indivId:user.roleId,phoneNo:this.user.phoneNo,registerEmail:this.user.emailAdd}).then(res => {
                            if (res.data.code == 200) {

                            }
                        })
                    })
                } else {
                    this.$notify({
                    title: '操作失败',
                    message: '您登录信息已失效，请重新登录后重试！',
                    type: 'error',
                    position: 'top-left'
                    });
                }
            })
            this.userInfo=false;
            this.conpenyInfo=!this.conpenyInfo;
            this.personResources=false;
        },
        update3(){
            let user = JSON.parse(sessionStorage.getItem("user"));
            if(this.personIndex>=0){
                this.user.custIndivResourceList[this.personIndex]=this.arr[0]
                let parameter = this.certainFunction(this.user, [
                    "actualName",
                    "phoneNo",
                    "emailAdd",
                    "wechatNo",
                    "qqNo",
                    "microblogNo",
                    "associatedCo",
                    "postName",
                    "corpPost",
                    "recommendName",
                    "recommendPhone",
                    "indivId",
                ])
                updateIndivInfo(parameter,user.roleId).then(res => {
                    if (res.data.code == 200) {
                        updateIndivResource(this.user.custIndivResourceList, user.roleId).then(res => {
                            talent({actualname:this.user.actualName,indivId:user.roleId,phoneNo:this.user.phoneNo,registerEmail:this.user.emailAdd}).then(res => {
                                if (res.data.code == 200) {
                                  this.arr=[{resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},];
                                }
                            })
                        })
                    } else {
                        this.$notify({
                        title: '操作失败',
                        message: '您登录信息已失效，请重新登录后重试！',
                        type: 'error',
                        position: 'top-left'
                        });
                        this.arr=[{resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},];
                    }
                    this.personIndex=""
                })
            }else{
                this.user.custIndivResourceList.push(this.arr[0])
                // let parameter = this.certainFunction(this.user, [
                //     "custIndivResourceList",
                //     "indivId",
                // ])
                // updateIndivInfo(parameter,user.roleId).then(res => {
                //     if (res.data.code == 200) {
                        updateIndivResource(this.user.custIndivResourceList, user.roleId).then(res => {
                            talent({actualname:this.user.actualName,indivId:user.roleId,phoneNo:this.user.phoneNo,registerEmail:this.user.emailAdd}).then(res => {
                                if (res.data.code == 200) {
                                  console.log(res.data)
                                  this.arr=[{resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},];
                                }
                            })
                        })
                    // } else {
                    //     this.$notify({
                    //     title: '操作失败',
                    //     message: '您登录信息已失效，请重新登录后重试！',
                    //     type: 'error',
                    //     position: 'top-left'
                    //     });
                    //     this.arr=[{resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},];
                    // }
                    this.personIndex=""
                // })
            }
            this.userInfo=false;
            this.conpenyInfo=false;
            this.personResources=!this.personResources;
        },
        openDrawer1(){
          this.userInfo=!this.userInfo;
          this.conpenyInfo=false;
          this.personResources=false;
        },
        openDrawer2(){
          this.userInfo=false;
          this.conpenyInfo=!this.userInfo;
          this.personResources=false;
        },
        openDrawer3(index){
          this.userInfo=false;
          this.conpenyInfo=false;
          this.personResources=!this.personResources;
          this.personIndex=index
          if(this.personIndex>=0){
              this.arr[0]=this.user.custIndivResourceList[index]
          }
        },
        clickMenu(){
          this.$router.push('perfectUserInfo1')
        },
        selectCustIndustry2(value){
          if(value=="其他"){
            this.custIndustry2Bool=!this.custIndustry2Bool
            this.$nextTick(() => {
              this.$refs.custIndustry2Id.$refs.input.focus()
            });
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
        clickCancel(){
          this.personResources=false,
          this.arr=[{resourceType:"",resourceLevel:"",levelStandard:"",resourceDesc:""},];
        }
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
    .left-div-par /deep/ input,.left-div-par /deep/ textarea{
      border-radius: 0;
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
    .fixed-div-selectPar{
      display: flex;
    }
    .fixed-div-select /deep/ .el-input,.fixed-div-select /deep/ textarea{
      width: 12rem;
    }
    .fixed-div-selectPar /deep/ .el-select{
      margin: 0;
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
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
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
    .experience-par .width100 span,.experience-par .width50 span{
      width: 6rem;
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
    .surface-title-par{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        color: rgb(158, 0, 0);
        font-weight: bold;
    }
    .gxrc-par{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .gxrc-par /deep/ .el-button{
      height: 40px;
      padding: 0 12px;
      border-radius: 0;
    }
    .gxrc-par /deep/ span{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .gxrc-par img{
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
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