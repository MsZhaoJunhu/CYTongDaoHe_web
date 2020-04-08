<template>
  <div class="zjzk">
    <header_ :select_index="0" />
    <xfc></xfc>
    <div class="banner">
      <div class="swiper-container one">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/imgs/banner.png" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/banner2.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/banner3.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/banner4.png" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/banner5.png" />
          </div>
        </div>
        <!-- 分页 -->
        <div class="swiper-pagination one_pagination"></div>
        <!--导航按钮-->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="16">
        <p class="titleLj">
          <span>
            <router-link to="/">首页</router-link>
          </span>
          <span>专家智库-专家名称</span>
        </p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="16">
        <el-row class="zjzk_leftRight" type="flex">
          <el-col :span="6" class="zjzk_left_img">
            <img :src="profInfo.profAvatar" alt="图片" />
          </el-col>
          <el-col :span="16" :push="2" class="zjzk_right_word">
            <div class="zjzk_title_h2">
              <p>
                <span>{{profInfo.profName}}</span>
                <span>{{profInfo.profBirth}}</span>
              </p>
              <p>
                <span>{{profInfo.profTitle||'暂无'}}</span>
                <span>{{profInfo.profEdu||'暂无'}}</span>
              </p>
            </div>
            <div>
              <div class="zjzk_word_left">
                <p>
                  <span>工作单位：</span>
                  <span>{{profInfo.profWork||'暂无'}}</span>
                </p>
                <p>
                  <span>职务：</span>
                  <span>{{profInfo.profPost||'暂无'}}</span>
                </p>
                <p>
                  <span>邮箱地址：</span>
                  <span>{{profInfo.profEmail||'暂无'}}</span>
                </p>
                <p>
                  <span>名誉头衔：</span>
                  <span>{{profInfo.profHead||'暂无'}}</span>
                </p>
                <p>
                  <span>个人简介：</span>
                  <span>{{profInfo.profResume||'暂无'}}</span>
                </p>
                <p>
                  <span>主要成就：</span>
                  <span>{{profInfo.profAchieve||'暂无'}}</span>
                </p>
                <p>
                  <span>个人荣誉：</span>
                  <span>
                    <span>{{profInfo.profHonor||'暂无'}}</span>
                    <span>{{profInfo.profHonor||'暂无'}}</span>
                    <span>{{profInfo.profHonor||'暂无'}}</span>
                  </span>
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- <div class="zjzk_leftRight">
          <div>
            
          </div>
          <div class="zjzk_right_word">
            
          </div>
        </div> -->
      </el-col>
    </el-row>
    <footer_ />
  </div>
</template>
<script>
import header_ from "@/components/public/头部";
import footer_ from "@/components/public/底部";
import Swiper from "swiper";
import { getProfById } from "@/components/api/api";
import xfc from "@/components/public/悬浮窗.vue";
export default {
  components: {
    header_,
    footer_,
    xfc
  },
  data () {
    return {
      profInfo: {}
    }
  },
  mounted () {
    new Swiper(".one", {
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 2500, //时间 毫秒
        disableOnInteraction: false //用户操作之后是否停止自动轮播默认true
      },
      loop: true //循环 最后面一个往后面滑动会滑到第一个
    });
    this.getProfById(this.GetUrlByParamName("profId"))
    //console.info(this.GetUrlByParamName("profId"));
  },
  methods: {
    //获取跳转时所带的参数
    GetUrlByParamName (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      //var reg =new RegExp("(?<=?user_id=)")
      var URL = decodeURI(window.location.href);
      URL = URL.replace(/^[\W\w]*user_id=([\d]+)$/g, "$1");
      //console.info('dsfsdfsdfsd',URL)
      var r = URL.substr(1).match(name);
      // if(r!=null){
      //     //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码
      //     return  decodeURI(r[2]);
      // };
      return URL.substring(r.index + 2 + name.length) || null;
    },
    getProfById (id) {
      getProfById({ profId: id }).then(res => {
        if (res.data.code === 200) {
          //this.custCorpList = res.data.data;
          this.profInfo = res.data.data;
        }
      });
    }
  }
}
</script>
<style scoped>
.zjzk {
  /* overflow-x: hidden; */
}
.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.zjzk_ny_all {
  width: 100%;
  height: auto;
  background: #fbfbfb;
  padding: 40px 0;
}
.zjzk_ny_all > div {
  width: auto;
  height: 100%;
  margin: 0 auto;
}
.titleLj {
  width: auto;
  display: block;
  margin: 0 auto;
  color: #4a4a4a;
  padding: 42px 0;
}
.titleLj > span a {
  color: #4a4a4a;
}
.titleLj > span {
  font-size: 16px;
  color: #4a4a4a;
  font-weight: bold;
  user-select: none;
}
.titleLj > span + span:before {
  content: url("../../assets/images/ToRightZjzk.png");
  padding: 0 10px;
  position: relative;
  top: -2px;
}
.zjzk_leftRight {
  margin-bottom: 4rem;
}
.zjzk_title_h2 > p:first-child > span:first-child {
  font-size: 24px;
  margin-right: 18px;
  color: #333333;
  user-select: none;
}
.zjzk_title_h2 > p:first-child > span:last-child {
  font-size: 12px;
  color: #a1a1a1;
  user-select: none;
}
.zjzk_title_h2 > p:nth-child(2) {
  margin-top: 22px;
}
.zjzk_title_h2 > p:nth-child(2) > span {
  font-size: 18px;
  color: #9e0100;
  font-weight: bold;
  user-select: none;
}
.zjzk_title_h2 > p:nth-child(2) > span + span:before {
  content: "|";
  padding: 0 8px;
}
.zjzk_title_h2 + div {
  margin-top: 36px;
  display: flex;
}
.zjzk_word_left > p {
  display: flex;
}
.zjzk_word_left > p + p {
  margin-top: 24px;
}
.zjzk_word_left > p > span:first-child {
  display: block;
  width: 100px;
  color: #666666;
  font-size: 14px;
  user-select: none;
}
.zjzk_word_left > p > span:last-child {
  width: 80%;
  color: #999999;
  font-size: 14px;
  user-select: none;
}
.zjzk_word_left > p:nth-child(4) > span:last-child {
  font-weight: bolder;
  color: #9e0100;
}
.zjzk_word_left > p:last-child > span:last-child > span + span::before {
  content: "、";
}
.banner img {
  width: 100%;
}
.zjzk_left_img img{
  width: 100%;
}
</style>