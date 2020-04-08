<template>
  <div class="内容">
    <xfc></xfc>
    <nav id="sernav">
      <div class="catalogue">
        <span>专业服务</span>
        <span>所有项目</span>
      </div>
      <div class="control">
        <span @click="clickTime(0)" :class="timeType==true?'defaultTime':timeType==false?'reverseTime':''">时间<img v-show="timeType==true" src="../../../assets/imgs/paixu.png" /><img v-show="timeType==false" src="../../../assets/imgs/paixu2.png" /></span>
        <!-- <span @click="clickType(1)">类型<img src="../../../assets/icon/more.png" /></span> -->
        <select @change="changeType" v-model="selectType">
          <option value="默认">默认</option>
          <option v-for="(item,index) in firstClassMenu" :key="index" :value="item.itemName">{{item.itemName}}</option>
        </select>
      </div>
    </nav>
    <section>
      <router-link to="publishing_projects" v-if="$store.state.islogin" class="fabu">
        <button class="btn">发布项目</button>
      </router-link>
      <router-link :to="{path:'my_projects_require',query:{id:item.projId}}" class="item" v-for="(item,i) in ProjList" :key="i">
        <div class="img_box">
          <img :src="item.projLogo" />
        </div>
        <h4>
          <span>{{item.contractNo}}</span>
          <span :class="item.projState">{{item.projState}}</span>
        </h4>
        <div>
          <span class="tagParent">
            <span class="tag">{{item.businessType||'暂无'}}</span>
            <span class="tagHover">{{item.businessType}}</span>
          </span>
          <span class="tagParent">
            <span class="tag">{{item.field||'暂无'}}</span>
            <span class="tagHover">{{item.field}}</span>
          </span>
          <span class="tagParent">
            <span class="tag">{{item.industry||'暂无'}}</span>
            <span class="tagHover">{{item.industry}}</span>
          </span>
        </div>
        <p>
          <span>
            <i class="company_logo">
              <!-- <img src="../../../assets/imgs/13.png" /> -->
              <img :src="item.corpLogo" />
            </i>
            <span class="company_title">{{item.corpName}}</span>
          </span>
          <span class="address">{{item.location}}</span>
        </p>
      </router-link>
      <a class="item2"></a>
      <a class="item2"></a>
      <a class="item2"></a>
    </section>
    <div class="pages">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="fsNumber"
          :page-size="20"
          :current-page.sync="userCurrentPage"
          @current-change="sizeChange"
          >
      </el-pagination>
    </div>
    <div class="fwgy">
      <div class="wrap">
        <h1>服务感言</h1>
        <div>
          <div class="item">
            <p>
              <span>项目名称</span>
              <span class="address">里程碑一</span>
            </p>

            <p>服务感言的内容服务感言的内容服务感言的内容服务感言的内容服务感言的内容务感言的内容服务感言的内容服务感言的内容</p>
            <p>
              <span>项目标签</span>
              <span>项目标签</span>
            </p>
            <p class="time">
              <i class="company_logo">
                <img src="../../../assets/imgs/13.png" />
              </i>
              <span style="color:#bbbbbb">2019-04-26</span>
            </p>
          </div>

          <div class="item">
            <p>
              <span>项目名称</span>
              <span class="address">里程碑一</span>
            </p>

            <p>服务感言的内容服务感言的内容服务感言的内容服务感言的内容服务感言的内容务感言的内容服务感言的内容服务感言的内容</p>
            <p>
              <span>项目标签</span>
              <span>项目标签</span>
            </p>
            <p class="time">
              <i class="company_logo">
                <img src="../../../assets/imgs/13.png" />
              </i>
              <span style="color:#bbbbbb">2019-04-26</span>
            </p>
          </div>
          <div class="item">
            <p>
              <span>项目名称</span>
              <span class="address">里程碑一</span>
            </p>

            <p>服务感言的内容服务感言的内容服务感言的内容服务感言的内容服务感言的内容务感言的内容服务感言的内容服务感言的内容</p>
            <p>
              <span>项目标签</span>
              <span>项目标签</span>
            </p>
            <p class="time">
              <i class="company_logo">
                <img src="../../../assets/imgs/13.png" />
              </i>
              <span style="color:#bbbbbb">2019-04-26</span>
            </p>
          </div>
          <div class="item">
            <p>
              <span>项目名称</span>
              <span class="address">里程碑一</span>
            </p>

            <p>服务感言的内容服务感言的内容服务感言的内容服务感言的内容服务感言的内容务感言的内容服务感言的内容服务感言的内容</p>
            <p>
              <span>项目标签</span>
              <span>项目标签</span>
            </p>
            <p class="time">
              <i class="company_logo">
                <img src="../../../assets/imgs/13.png" />
              </i>
              <span style="color:#bbbbbb">2019-04-26</span>
            </p>
          </div>
          <div class="item2"></div>
          <div class="item2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "../../../bus.js";
import xfc from "@/components/public/悬浮窗.vue";
import { getProjs,getBusinessList } from "@/components/api/api";
export default {
  name: "all_projects",
  data() {
    return {
      ProjList: [],
      fsNumber:1,
      userCurrentPage:1,
      timeType:true,
      selectType:"默认",
      firstClassMenu:[]
    };
  },
  created() {
    this.$emit("select", 2);
    this.getProjList();
    getBusinessList().then(res => {
        if (res.data.code === 200) {
            this.firstClassMenu=res.data.data
        }
    });
  },
  methods: {
    //获取需求中列表
    getProjList() {
      getProjs({"pageSize":20,"pageNum":this.userCurrentPage,"order":this.timeType}).then(res => {
        this.fsNumber=res.data.data.total;
        if (res.data.code === 200) {
          this.ProjList = res.data.data.records;
        }
      });
    },
    sizeChange(val){
      if(this.selectType=="默认"){
        getProjs({"pageSize":20,"pageNum":val,"order":this.timeType}).then(res => {
          this.fsNumber=res.data.data.total;
          if (res.data.code === 200) {
            this.ProjList = res.data.data.records;
          }
        });
      }else{
        getProjs({"pageSize":20,"pageNum":val,"order":this.timeType,"businessType":this.selectType}).then(res => {
          this.fsNumber=res.data.data.total;
          if (res.data.code === 200) {
            this.ProjList = res.data.data.records;
          }
        });
      }
    },
    clickTime(){
      this.timeType=!this.timeType
      if(this.selectType=="默认"){
        getProjs({"pageSize":20,"pageNum":this.userCurrentPage,"order":this.timeType}).then(res => {
          this.fsNumber=res.data.data.total;
          if (res.data.code === 200) {
            this.ProjList = res.data.data.records;
          }
        });
      }else{
        getProjs({"pageSize":20,"pageNum":this.userCurrentPage,"order":this.timeType,"businessType":this.selectType}).then(res => {
          this.fsNumber=res.data.data.total;
          if (res.data.code === 200) {
            this.ProjList = res.data.data.records;
          }
        });
      }
      
    },
    changeType(){
      if(this.selectType=="默认"){
        getProjs({"pageSize":20,"pageNum":this.userCurrentPage,"order":this.timeType}).then(res => {
          this.fsNumber=res.data.data.total;
          if (res.data.code === 200) {
            this.ProjList = res.data.data.records;
          }
        });
      }else{
        getProjs({"pageSize":20,"pageNum":this.userCurrentPage,"order":this.timeType,"businessType":this.selectType}).then(res => {
          this.fsNumber=res.data.data.total;
          if (res.data.code === 200) {
            this.ProjList = res.data.data.records;
          }
        });
      }
      getProjs({"pageSize":20,"pageNum":this.userCurrentPage,"order":this.timeType,"businessType":this.selectType}).then(res => {
        this.fsNumber=res.data.data.total;
        if (res.data.code === 200) {
          this.ProjList = res.data.data.records;
        }
      });
    },
  },
  components: {
    xfc
  }
};
</script>
<style scoped>
.需求中 {
  color: #eccc4d !important;
}
.质保中 {
  color: #5693cc !important;
}
.已结项 {
  color: #9e0100 !important;
}
.服务中 {
  color: #64d1d8 !important;
}
.已终止{
  color: #888888 !important;
}
.address {
  flex-shrink: 0;
  font-size: 14px;
  color: #cccccc;
}
.company_title {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 14px;
  color: #666666 !important;
}
.banner {
  width: 100%;
  margin: 0 auto;
  height: 361px;
  background-image: url("../../../assets/imgs/projectbg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
}
.banner .wrap {
  width: 73%;
  margin: 0 auto;
  margin-bottom: 56px;
  color: #fff;
  opacity: 0.8;
}
.banner p {
  font-size: 20px;
}
.banner h1 {
  font-size: 60px;
  margin-top: 10px;
}

.control,
.catalogue {
  display: flex;
}
.control span,
.catalogue span {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #4a4a4a;
}
.control select{
  border: 0;
  color: #999;
  outline: none;
  margin-left: 12px;
  width: auto;
  /* 选择框样式去掉 */
  /* appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none; */

}
.catalogue span:after {
  content: "";
  display: block;
  margin: 0 5px;
  width: 8px;
  height: 5px;
  background-image: url(../../../assets/icon/more.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotateZ(-90deg);
}
.catalogue span:last-of-type:after {
  content: none;
}
.control span {
  margin-left: 15px;
  color: #999999;
}
.control img {
  margin-left: 5px;
}
section {
  width: 73%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #cccccc;
  justify-content: space-between;
}
.fabu,
.item {
  width: calc(91%/4);
  height: auto;
  background-color: #ffffff;
  border: solid 1px #ededed;
  box-sizing: border-box;
  /* margin-right: calc((1330px - 280px * 4) / 3); */
  margin-bottom: 40px;
  padding-bottom: 20px;
}
section .item2 {
  width: 281px;
}
section > div:nth-child(4n) {
  margin-right: 0;
}
.fabu {
  background-image: url(../../../assets/imgs/fabu_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.btn {
  width: 220px;
  margin-bottom: 25px;
  margin-left: 30px;
}
/* section > .item {
  display: flex;
  flex-direction: column;
} */
section > .item > * {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
section > .item .img_box {
  width: 100%;
  height: 155px;
  background-color: #f1ecec;
}
.img_box>img{
  width: 100%;
  height: 100%;
}
section > .item h4 {
  position: relative;
  margin: 15px 0;
  overflow:hidden;
}
section > .item h4 > span:nth-child(1) {
  display:inline-block;
  width: 200px;
  overflow:hidden;
  box-sizing: border-box;
  font-size: 16px;
  color: #4a4a4a;
  margin-left: 15px;
  font-weight: 600;
  text-overflow: ellipsis !important;
}
/*修改的*/
section > .item h4 > span:nth-child(2) {
  font-size: 16px;
  color: #59ced5;
  margin-right: 15px;
  float: right;
}

section > .item > div:last-of-type {
  margin: 0 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section > .item .company_logo img{
  width: 22px;
  height: 22px;
}
section > .item .company_logo {
  display: block;
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
}
section > .item p {
  display: flex;
  font-size: 14px;
  padding: 0 15px;
  color: #666666;
  justify-content: space-between;
}
section > .item p span {
  display: flex;
  align-items: center;
}
section > .item p span i {
  margin-right: 10px;
}
section > .item p span:last-child {
  color: #cccccc;
}
.pages {
  width: 73%;
  margin: 30px auto;
}
.page_btn {
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-size: 18px;
  color: #353535;
  border: none;
  border-radius: 50%;
}
.page_btn.selected {
  background-color: #e6e6e6;
}
.fwgy {
  background: #fbfbfb;
}
.fwgy .wrap {
  width: 73%;
  margin: 0 auto;
  padding: 45px 0;
  text-align: center;
}
.fwgy .wrap h1 {
  font-size: 30px;
  color: #353535;
}
.fwgy .wrap > div {
  display: flex;
  justify-content: space-between;
  padding: 48px 0;
  flex-wrap: wrap;
}
.fwgy .item {
  width: 335px;
  height: 188px;
  background-color: #ffffff;
  border: solid 1px #efefef;
  margin: 0;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fwgy .item2 {
  width: 335px;
  height: 188px;
}
.fwgy .item > p > span:nth-child(1) {
  font-size: 14px;
  color: #333333;
  font-family: Arial, Helvetica, sans-serif;
}
.fwgy .item > p > span:nth-child(2) {
  font-size: 14px;
  color: #9e0100;
  font-family: Arial, Helvetica, sans-serif;
}
.fwgy .item .company_logo {
  display: block;
  width: 24px;
  height: 24px;
  background-color: #cdabab;
  overflow: hidden;
  border-radius: 50%;
}
.fwgy .item p {
  display: flex;
  font-size: 14px;
  color: #666666;
  text-align: left;
  justify-content: space-between;
}
.fwgy .item p:nth-of-type(2) {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.fwgy .item p:nth-of-type(3) {
  display: block;
  margin: 5px 0;
}
.fwgy .item p:nth-of-type(3) span {
  display: inline-block;
  min-width: 100px;
  height: 30px;
  background: #eeeeee;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  color: #bbbbbb;
  margin-right: 10px;
}
.fwgy .item p span{
    display:flex;
    align-items: center;
}
.fwgy .item p span i{
    margin-right: 10px;
}
.fwgy .item p.time{
    font-size: 12px;
    opacity: 0.7;
}
.fabu{
    display: none;
}
#sernav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 73%;
  margin: 0 auto;
  height: 4rem;
}
.defaultTime{
  color: #999 !important;
}
.reverseTime{
  color: #000 !important;
}
.tagParent{
  display: block;
  width: calc(94%/3);
  height: 36px;
  text-align: center;
  background: #eeeeee;
  line-height: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tag{
  color: #bbbbbb;
  display: block;
  width: 80px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.tag:hover+.tagHover{
  display: block;
}
.tagHover{
  display: none;
  position: absolute;
  top: -40px;
  width: auto;
  color: #666;
  background: #e0dfdf;
  padding: 0 12px;
  white-space: nowrap;
}
@media screen and (max-width: 1366px) {
  .fwgy .wrap > div > div:nth-child(n+4){
    margin-top: 24px !important;
  }
}
</style>
<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #9e0100;
    }
</style>
