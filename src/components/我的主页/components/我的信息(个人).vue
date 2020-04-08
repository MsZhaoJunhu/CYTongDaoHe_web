 <template>
  <div class="我的信息">
    <p class="title">我的信息</p>
    <div class="info">
      <div class="infoleft">
        <div class="img_lv">
          <div class="img_box">
            <a class="submitImgAsPersonbtn"
               @click="toggleShow"></a>
            <my-upload field="img"
                       @crop-success="cropSuccess"
                       v-model="show"
                       :width="200"
                       :height="200"
                       img-format="png"
                       :size="size"></my-upload>
            <span>
              <img :src="avatar"
                   style="width:60px;height:60px;border-radius:30px;"
                   alt="">
            </span>
          </div>
          <span>
            <!-- <i>个人会员</i> -->
            <i>{{this.userTypeName}}</i>
          </span>
        </div>
        <div class="name">
          <h4>欢迎您:</h4>
          <h3><span>{{dataList.title}}</span><img src="@/assets/imgs/pic1.png"
                 alt=""></h3>
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
          <div class='complate_percent_part3 part'><span><img src="@/assets/imgs/complete_percent.png"
                   alt="">
              <span style='color:#bbbbbb'
                    @click="getMsg">&nbsp;&nbsp;注册信息完善</span></span>  
            <el-drawer title="注册信息完善"
                       :visible.sync="drawer"
                       :direction="direction"
                       :before-close="handleClose"
                       size='100%'>
              <el-tabs type="border-card"
                       tab-position="left"
                       style="height:auto;">
                <el-tab-pane label="工商信息">
                  <el-form ref="form"
                           :model="form"
                           label-width="80px"
                           class="gongshangxinxi">
                    <el-form-item label="">
                      <div>
                        <div>
                          <span>真实姓名</span>
                          <el-input v-model="personalMember[0].actualName"
                                    placeholder="请输入真实姓名"></el-input>
                        </div>
                        <p></p>
                      </div>

                      <div>
                        <div>
                          <span>昵称</span>
                          <el-input v-model="personalMember[0].nickname"
                                    placeholder="请输入昵称"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>电话号码</span>
                          <el-input v-model="personalMember[0].phoneNo"
                                    placeholder="请输入电话号码"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>邮箱地址</span>
                          <el-input v-model="personalMember[0].emailAdd"
                                    placeholder="请输入邮箱地址"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>身份证号</span>
                          <el-input v-model="personalMember[0].idNo"
                                    placeholder="请输入身份证号"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>联系地址</span>
                          <el-input v-model="personalMember[0].contactAdd"
                                    placeholder="请输入联系地址"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>微信号</span>
                          <el-input v-model="personalMember[0].wechatNo"
                                    placeholder="请输入微信号"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>QQ号</span>
                          <el-input v-model="personalMember[0].qqNo"
                                    placeholder="请输入QQ号"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>微博账号</span>
                          <el-input v-model="personalMember[0].microblogNo"
                                    placeholder="请输入微博账号"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>公司名称</span>
                          <el-input v-model="personalMember[0].associatedCo"
                                    placeholder="请输入公司名称"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>岗位名称</span>
                          <el-input v-model="personalMember[0].postName"
                                    placeholder="请输入岗位名称"></el-input>
                        </div>
                        <p></p>
                      </div>
                      <div>
                        <div>
                          <span>职务</span>
                          <el-select v-model="personalMember[0].corpPost"
                                     placeholder="请选择所在公司职务">
                            <el-option value="实际控制人"></el-option>
                            <el-option value="董事长"></el-option>
                            <el-option value="懂事"></el-option>
                            <el-option value="监事"></el-option>
                            <el-option value="高管"></el-option>
                            <el-option value="中干"></el-option>
                            <el-option value="基干"></el-option>
                            <el-option value="员工"></el-option>
                          </el-select>
                        </div>
                        <p></p>
                      </div>
                    </el-form-item>

                  </el-form>
                  <el-button class="form-btn"
                             @click="updataIndivInfobtn(1)">信息提交</el-button>
                </el-tab-pane>
                <el-tab-pane label="个人资源">
                  <el-form :model="formData"
                           :inline="true"
                           ref="formData"
                           label-width="65px"
                           size="medium">
                    <div class="gaoguanxinxi guanlicengxinxi">
                      <div>个人资源</div>
                      <div>
                        <div>资源类型</div>
                        <div>资源等级</div>
                        <div>资源标准</div>
                        <div>资源描述</div>
                        <div>操作</div>
                      </div>
                      <el-row v-for="(item,index) in personalMember[0].custIndivResourceList"
                              :key="index"
                              style="border-bottom: 1px solid #f0f0f0;padding: 10px;">
                        <el-form-item label="">
                          <el-select v-model="item.resourceType"
                                     :disabled="true"></el-select>
                        </el-form-item>
                        <el-form-item label="">
                          <el-select v-model="item.resourceLevel"
                                     :disabled="true"></el-select>
                        </el-form-item>
                        <el-form-item label="">
                          <el-input v-model="item.levelStandard"
                                    :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                          <el-input type="textarea"
                                    v-model="item.resourceDesc"
                                    :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                          <el-button type="danger"
                                     size="medium"
                                     @click="removeRow(index)">删除</el-button>
                          <el-button type="danger"
                                     size="medium"
                                     @click="openNewDrawer(index)">编辑</el-button>
                          <el-drawer title="编辑信息"
                                     :visible.sync="drawer2"
                                     :direction="direction"
                                     :before-close="handleClose"
                                     size="100%">
                            <div class="drawer2ContentParentDiv">
                              <span>资源类型:</span>
                              <el-select v-model="resourceTypeval"
                                         @change="elSelectChangeEvent"
                                         placeholder="请选择">
                                <el-option v-for="(item,index) in firstClassMenu"
                                           :key="index"
                                           :label="item.itemName"
                                           :value="item.dictItemId"></el-option>
                              </el-select>
                            </div>
                            <br>
                            <div class="drawer2ContentParentDiv">
                              <span>资源等级:</span>
                              <el-select v-model="resourceLevelval"
                                         @change="elSelectChangeEvent2"
                                         placeholder="请选择">
                                <el-option v-for="(item,index) in secedClassMenu"
                                           :key="index"
                                           :label="item.itemName"
                                           :value="item.itemCode"></el-option>
                              </el-select>
                            </div>
                            <br>
                            <div class="drawer2ContentParentDiv">
                              <span>资源标准:</span>
                              <el-input v-model="sertedClasMenu"
                                        placeholder=""
                                        :disabled="true"></el-input>
                            </div>
                            <br>
                            <div class="drawer2ContentParentDiv">
                              <span>资源描述:</span>
                              <el-input type="textarea"
                                        v-model="item.resourceDesc"></el-input>
                            </div>
                            <div class="drawer2ContentParentDiv">
                              <el-button class="form-btn"
                                         @click="updataObj(index)">保存</el-button>
                            </div>
                          </el-drawer>
                        </el-form-item>
                      </el-row>
                    </div>
                    <el-row>
                      <el-button type="primary"
                                 size="medium"
                                 @click="addRow">新增资源</el-button>
                    </el-row>
                  </el-form>
                  <el-button class="form-btn"
                             @click="updataIndivInfobtn(2)">信息提交</el-button>
                </el-tab-pane>
              </el-tabs>

            </el-drawer>
          </div>
        </div>
      </div>
      <div class="inforight">
        <template v-for="(item,index) in iconList">
          <div v-if='index ===1 '
               class="details">
            <span v-for='item2 in item.cards'>
              <img :src="item2.cardsrc"
                   alt="">
              {{item2.cardnum}}
            </span>
          </div>
          <div v-else
               class="details">
            <div class="icon">
              <img :src="item.iconSrc"
                   alt="">
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
import {
  updateIndivInfo,
  indivFinish,
  serverTender,
  file,
  changeAvatar,
  getMyInfo,
  calcIndivResource,
  updateIndivResource,
  resources,
  resourcesEr
} from "@/components/api/api";
import myUpload from 'vue-image-crop-upload';
import { hjjtest } from "@/components/api/api";
export default {
  name: 'my-infoP',
  props: {
    dataList: {
      type: Object,
      avatar: ""
    }
  },
  data () {
    return {
      iconList: [{
        title: '互助值',
        content: '',
        iconSrc: require('@/assets/imgs/icon-list2.png')
      }, {
        cards: [
          {
            cardsrc: require('@/assets/imgs/card_1.png'),
            cardnum: 0,
          },
          {
            cardsrc: require('@/assets/imgs/card_2.png'),
            cardnum: 2,
          },
          {
            cardsrc: require('@/assets/imgs/card_3.png'),
            cardnum: 1,
          }
        ]
      }, {
        title: '我的项目',
        content: '12',
        iconSrc: require('@/assets/imgs/icon-list3.png')
      }, {
        title: '我的活动',
        content: '12',
        iconSrc: require('@/assets/imgs/icon-list4.png')
      }, {
        title: '我的收藏',
        content: '102',
        iconSrc: require('@/assets/imgs/icon-list5.png')
      }],
      userTypeName: "",
      show: false,
      size: 2.1,
      integrity: "",
      avatar: "",
      drawer: false,
      drawer2: false,
      direction: 'btt',
      form: {
        userName: "",
        nickName: "",
        phoneNumber: "",
        emailAdress: "",
        userID: "",
        contactAdress: "",
        weChat: "",
        QQnumber: "",
        weBoNumber: "",
        companyName: "",
        postName: "",
        companyPost: ""
      },
      formData: {
        powerAttrList: [{
          resourceType: '',
          resourceGrade: '',
          resourceStandard: '',
          resourceDescribe: '',
        }],
      },
      personalMember: [{}],
      // 一级
      firstClassMenu: [],
      firstClassMenuVal: "",
      // 二级
      secedClassMenu: [],
      // 三级
      sertedClasMenu: "",
      resourceTypeval: "",
      resourceLevelval: "",
      levelStandardval: ""
    }
  },
  components: {
    "my-upload": myUpload
  },
  methods: {
    elSelectChangeEvent (val) {
      resourcesEr({ "dictItemId": val }).then(res => {
        if (res.data.code === 200) {
          this.secedClassMenu = res.data.data
          this.firstClassMenuVal = val;
          for (var i = 0; i < this.firstClassMenu.length; i++) {
            if (this.firstClassMenu[i].dictItemId == val) {
              this.resourceTypeval = this.firstClassMenu[i].itemName
            }
          }
        }
      });
    },
    elSelectChangeEvent2 (val) {
      resourcesEr({ "dictItemId": this.firstClassMenuVal, "itemCode": val }).then(res => {
        if (res.data.code === 200) {
          this.sertedClasMenu = res.data.data[0].itemValue1
          for (var i = 0; i < this.secedClassMenu.length; i++) {
            if (this.secedClassMenu[i].itemCode == val) {
              this.resourceLevelval = this.secedClassMenu[i].itemName
            }
          }
        }
      });
    },
    updataObj (index) {
      this.personalMember[0].custIndivResourceList[index].levelStandard = this.sertedClasMenu;
      this.personalMember[0].custIndivResourceList[index].resourceType = this.resourceTypeval;
      this.personalMember[0].custIndivResourceList[index].resourceLevel = this.resourceLevelval;
    },
    openNewDrawer (index) {
      this.drawer2 = true;
      let content = this.personalMember[0].custIndivResourceList[index].resourceType
      this.sertedClasMenu = this.personalMember[0].custIndivResourceList[index].levelStandard
      this.resourceTypeval = this.personalMember[0].custIndivResourceList[index].resourceType
      this.resourceLevelval = this.personalMember[0].custIndivResourceList[index].resourceLevel
      for (let i = 0; i < this.firstClassMenu.length; i++) {
        if (content == this.firstClassMenu[i].itemName) {
          resourcesEr({ "dictItemId": this.firstClassMenu[i].dictItemId }).then(res => {
            if (res.data.code === 200) {
              this.levelStandardval = this.firstClassMenu[i].levelStandard
              this.secedClassMenu = res.data.data
            }
          });
        }
      }
    },
    getMsg () {
      // let user = JSON.parse(sessionStorage.getItem("user"));
      // this.drawer = true;
      // this.$router.push('/complete/complete_two?shenfen='+user.role+'&tabSelect=1');
      this.$router.push('editFillInfo')
    },
    sutmitImgAsPersonHeader () {
      var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false;
      if (ie) {
        document.getElementById("file").click();
      } else {
        var a = document.createEvent("MouseEvents");//FF的处理 
        a.initEvent("click", true, true);
        document.getElementById("file").dispatchEvent(a);
      }
    },
    toggleShow () {
      this.show = !this.show;
    },
    cropSuccess (imgDataUrl) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      changeAvatar({ "avatar": imgDataUrl, "userId": user.userId }).then(res => {
        if (res.data.code == 200) {
          this.$confirm(res.data.msg);
          this.$router.push("funs")
        }
      })
    },
    handleClose (done) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      getMyInfo({ "userId": user.userId }).then(res => {
        if (res.data.code === 200) {
          this.integrity = res.data.data.integrity;
        }
      })
      this.$confirm('是否确认退出？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    addRow () {
      this.personalMember[0].custIndivResourceList.push({
        resourceType: '',
        resourceLevel: '',
        levelStandard: '',
        resourceDesc: '',
      });
    },
    removeRow (index) {
      this.personalMember[0].custIndivResourceList.splice(index, 1);
    },
    updataIndivInfobtn (index) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      this.personalMember[0].indivId = user.roleId;
      let parameter = {};
      switch (index) {
        case 1:
          parameter = this.certainFunction(this.personalMember[0], [
            "actualName",
            "nickname",
            "phoneNo",
            "emailAdd",
            "idNo",
            "contactAdd",
            "wechatNo",
            "qqNo",
            "microblogNo",
            "associatedCo",
            "postName",
            "corpPost",
            "indivId",
          ])
          updateIndivInfo(parameter, user.roleId).then(res => {
            if (res.data.code == 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;
        case 2:
          parameter = this.certainFunction(this.personalMember[0], [
            "custIndivResourceList",
          ])
          for (let i in parameter) {
            for (let j in parameter[i]) {
              parameter[i][j].indivId = user.roleId
            }
          }
          updateIndivResource(parameter.custIndivResourceList, user.roleId).then(res => {
            if (res.data.code == 200) {
              this.$message.success("修改保存成功！");
            }
          })
          break;

        default:
          break;
      }

    },
    certainFunction (obj, keys) {
      return keys.reduce((result, key) => {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
        return result;
      }, {});
    },

  },
  mounted () {
    var _this = this
    let user = JSON.parse(sessionStorage.getItem("user"));
    getMyInfo({ "userId": user.userId }).then(res => {
      if (res.data.code === 200) {
        this.integrity = res.data.data.integrity;
      }
    })
    switch (user.role) {
      case "0":
        _this.userTypeName = "企业会员"
        break;
      case "1":
        _this.userTypeName = "服务供应商"
        break;
      case "2":
        _this.userTypeName = "个人会员"
        break;
      default:
        _this.userTypeName = "共享人才"
        break;
    }
    getMyInfo({ "userId": user.userId }).then(res => {
      if (res.data.code === 200) {
        this.avatar = res.data.data.avatar
      }
    })

    indivFinish({ "indivId": user.roleId }).then(res => {
      if (res.data.code === 200) {
        this.personalMember = res.data.data
      }
    })

    //获取资源类型
    resources().then(res => {
      if (res.data.code === 200) {
        this.firstClassMenu = res.data.data

      }
    });
    calcIndivResource({ "indivId": user.roleId }).then(res => {
      if (res.data.code === 200) {

        if (res.data.type >= 80) {
          this.iconList[0].content = "30点"
        } else if (this.iconList[1].content >= 60 && this.iconList[1].content < 80) {
          this.iconList[0].content = "20点"
        } else if (this.iconList[1].content >= 40 && this.iconList[1].content < 60) {
          this.iconList[0].content = "10点"
        } else {
          this.iconList[0].content = "——"
        }
      }
    })
  },
}
</script>

<style scoped>
.我的信息 {
  background: #fff;
  box-sizing: border-box;
  padding: 25px;
  padding-bottom: 50px;
  margin-bottom: 20px;
}
.title {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #9e0100;
  margin-bottom: 30px;
}
.info {
  display: flex;
}
.infoleft {
  display: flex;
  padding-right: 30px;
  align-items: center;
  /* box-shadow: 1px 0 0 rgba(0,0,0,.1); */
  flex-shrink: 0;
  box-sizing: border-box;
}
.infoleft .img_lv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}
.infoleft .img_lv .img_box {
  width: 60px;
  height: 60px;
  /* background: #9e0000; */
  border-radius: 50%;
  position: relative;
}
.infoleft .img_lv span i {
  font-style: normal;
  display: inline-block;
  padding: 2px 10px;
  background: #9e0000;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  margin-top: 5px;
}
.infoleft .name {
  font-family: HiraginoSansGB-W3;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
}
.infoleft h3 {
  font-size: 20px;
  font-weight: normal;
  color: #9e0100;
  margin: 5px 0;
}
.infoleft p {
  font-family: HiraginoSansGB-W3;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  color: #cccccc;
}
.infomiddle {
  display: flex;
  padding-right: 60px;
  padding-left: 50px;
  align-items: center;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
.infomiddle .complate_percent .part {
  padding-bottom: 10px;
}
.infomiddle .complate_percent .complate_percent_part1 {
}
.infomiddle .complate_percent .complate_percent_part2 {
  text-align: right;
}
.infomiddle .complate_percent .complate_percent_part2 .num_small {
  color: #9e0100;
}
.infomiddle .complate_percent .complate_percent_part2 .num_large {
  text-align: right;
  font-size: 34px;
  color: #9e0100;
  font-weight: 600;
}
.inforight {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 25px;
}
.inforight .details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inforight .details:nth-of-type(2) {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.inforight .details:nth-of-type(2) span {
  margin-left: 10px;
  color: #999999;
}
.inforight .details .icon {
  height: 30px;
  width: 30px;
  /* background: red; */
}
.inforight .details h4 {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
  margin: 16px 0;
}
.inforight .details p {
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}
.submitImgAsPersonbtn {
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  border-radius: 30px;
}
.complate_percent_part3 > span {
  cursor: pointer;
}
@media screen and (max-width: 415px) {
  .我的信息 {
    padding: 8px;
  }
  .title {
    margin: 0 0 16px 0;
  }
  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .info > div {
    margin-bottom: 16px;
  }
  .infoleft {
    width: 50%;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .img_box + span > i {
    padding: 4px 6px !important;
  }
  .infomiddle {
    width: 50%;
    width: auto;
    padding: 0;
    margin: 0 auto;
    box-shadow: 0px 0 0 rgba(0, 0, 0, 0.1);
  }
  .inforight {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
  .inforight > div {
    margin: 0 36px 0 0 !important;
  }
  .inforight > div > h4 {
    margin: 8px 0 !important;
  }
  .inforight > div > p {
    text-align: center;
  }
  .name > h3 {
    display: flex;
  }
  .name > h3 > span {
    width: 96px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .name > h3 > img {
    height: 16px;
    position: relative;
    top: 4px;
  }
}
</style>
<style>
.el-drawer {
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
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 10px 0 0 #999 inset;
}
.el-drawer {
  overflow-y: overlay;
  word-wrap: break-word;
}
.el-drawer {
  margin-left: calc(100vw - 100%);
}
.el-button {
  display: block;
  margin: 48px auto;
  background: #9e0100;
  color: #fff;
  border: none;
}
.form-btn {
  color: #fff;
}
.el-button:focus,
.el-button:hover {
  background: #9e0100;
  color: #fff;
  border: none;
}
.el-drawer.btt,
.el-drawer.ttb,
.el-drawer__container {
  right: 0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active,
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #9e0100;
}
.el-input__inner {
  width: auto;
}
.el-input__inner:focus {
  border-color: #9e0100;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #9e0100;
}
.gongshangxinxi > div > div {
  display: flex;
  flex-wrap: wrap;
}
.gongshangxinxi > div > div > div > div {
  display: flex;
  margin: 16px 0;
  margin-right: 24px;
}
.gongshangxinxi > div > div > div > p {
  transform: translateY(-20px);
  text-align: center;
}
.gongshangxinxi span {
  display: inline-block;
  min-width: 96px;
  color: #333333;
}
.el-select {
  margin-right: 24px;
}
.gaoguanxinxi > div {
  color: #333333;
  border: 1px solid #e6e6e6;
}
.gaoguanxinxi > div:first-child {
  padding: 12px 0;
  padding-left: 8px;
  background: #f2f2f2;
}
.gaoguanxinxi > div:not(:first-child) {
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
}
.gaoguanxinxi > div:not(:first-child) > div {
  width: 16%;
  text-align: center;
}
.gaoguanxinxi > div:nth-child(2) > div:first-child {
  border-left: 0;
}
.gaoguanxinxi > .el-row {
  padding: 24px 0 !important;
}
.gaoguanxinxi .el-form-item {
  margin: 0;
}
.gaoguanxinxi > div:nth-child(2) {
  background: #f2f2f2;
}
.gaoguanxinxi > div:nth-child(2) > div {
  border: 1px solid #e6e6e6;
  border-top: 0;
  border-bottom: 0;
  padding: 12px 0;
}
.gaoguanxinxi > div:nth-child(2) > div + div {
  border-left: 0;
}
.gaoguanxinxi .el-button--medium {
  margin: 0;
}
.gaoguanxinxi .el-row + .el-row {
  border-top: 0;
}
.dongjiangaoxinxi > div:nth-child(2) > div {
  width: 25%;
}
.guanlicengxinxi > div:nth-child(2) > div {
  width: 20%;
}
.dongjiangaoxinxi > div:nth-child(2) > div:first-child {
  border-left: 0;
}
.dongjiangaoxinxi > div:nth-child(2) > div:last-child {
  border-right: 0;
}
.guanlicengxinxi > div:nth-child(2) > div:first-child {
  border-left: 0;
}
.guanlicengxinxi > div:nth-child(2) > div:last-child {
  border-right: 0;
}
.dongjiangaoxinxi > div:not(:first-child) > div {
  width: 25%;
}
.guanlicengxinxi > div:not(:first-child) > div {
  width: 20%;
}
textarea {
  margin-left: 0;
}
.elFormItemTextarea > div > div {
  width: 90%;
}
.elFormItemElButton button {
  margin: 0;
  color: #fff;
}
.elFormItemElButton button > span,
.firstChildIsNone button > span {
  color: #fff;
}
.guanlicengxinxi + .el-row button > span {
  color: #fff;
}
.drawer2 {
  width: 50% !important;
  margin: 0 auto;
  position: absolute;
  top: 10%;
}
.patentForm > div {
  display: flex;
  flex-wrap: wrap;
  padding-left: 16px;
}
.patentForm > div > div {
  display: flex;
  width: 50%;
  padding: 12px 0;
}
.patentForm > div > div > span {
  min-width: 94px;
}
.el-message-box .el-message-box__btns {
  display: flex;
  justify-content: center;
}
.el-message-box .el-button {
  margin: 0;
}
.drawer2MyButton2 button {
  margin: 0;
}
.drawer2MyButton2 button:hover {
  background: #9e0100;
  color: #fff;
}
.strategicTarget > div > div {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.strategicTarget > div > div > div {
  display: flex;
  width: 100%;
}
.strategicTarget > div > div > div > div {
  width: 33.3333333%;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #dcdfe6;
}
.strategicTarget > div > div > div > div:nth-child(2),
.strategicTarget > div > div > div > div:nth-child(3) {
  border-left: 0;
}
.strategicTarget > div > div > div:nth-child(2) > div {
  border-top: 0px;
  padding: 16px 0;
}
.strategicTarget textarea {
  width: 80%;
  margin: 0 auto;
}
.strategicTarget textarea:focus {
  border-color: #9e0100;
}
.datePickerDate span {
  min-width: auto;
}
.datePickerDate > input {
  padding-right: 0 !important;
}
.drawer2ContentParentDiv {
  padding-left: 32px;
}
.drawer2ContentParentDiv > div {
  width: auto;
}
.drawer2ContentParentDiv > span {
  margin-right: 16px;
}
</style>