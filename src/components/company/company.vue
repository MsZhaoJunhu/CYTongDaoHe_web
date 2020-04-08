<template>
  <div class="company">
    <header_ :select_index="0" />
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../../assets/imgs/banner2.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imgs/banner3.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imgs/banner4.png" /></div>
          <div class="swiper-slide"><img src="../../assets/imgs/banner5.png" /></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <el-row type="flex" justify="center" class="xlm">
      <el-col :span="16">
        <span>
          <router-link to="/">首页</router-link>
        </span>
        <span>{{childrenMenu}}</span>
      </el-col>
    </el-row>
    <el-row class="bjs">
      <el-col :span="24">
        <el-row type="flex" justify="center">
          <el-col :span="4" class="title">
            <h3>管理中心</h3>
            <template v-for="(items,index) in title">
              <p :class="index==select?'selected':''" @click="change(items[0])">
                <router-link :to="{path:items[1],query:{id:id}}" class="company-public" replace><i></i>{{items[0]}}</router-link>
              </p>
            </template>
          </el-col>
          <el-col :span="12" :push="1" class="content">
            <router-view @updatetitle="change"></router-view>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <footer_ />
  </div>
</template>
<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import Swiper from 'swiper'
export default {
  name: 'company',

  data () {
    return {
      select: 0,
      title: [
        ['公司简介', 'company_int'],
        ['公司新闻', 'company_news'],
        ['联系我们', 'company_cont']
      ],
      childrenMenu: '会员企业',
      id: this.$route.query.id
    }
  },

  mounted () {
    new Swiper(".swiper-container", {
      initialslide: 2,
      slidesPerview: 3,
      direction: "horizontal",//横向切换
      speed: 480,//速度
      // autoplay:true,
      autoplay: {
        delay: 5000,
      },
      observer: true,//开启动态检查器
      loop: true,//环路
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
    })

  },
  methods: {
    change: function (data) {
      if (data == "公司简介") {
        this.select = 0;
      } else if (data == "公司新闻") {
        this.select = 1;
      } else if (data == "联系我们") {
        this.select = 2;
      }
    },
  },
  components: {
    header_,
    footer_,

  },
}
</script>
<style scoped>
.company {
  background-color: #f8f8f8;
  margin-bottom: 30px;
}
.swiper-slide im {
  display: block;
}
.xlm {
  height: 100px;
  line-height: 100px;
}
.xlm span a {
  color: #000;
}
.xlm span {
  background: url(../../assets/imgs/xjt.png) no-repeat;
  padding: 0 15px 0 5px;
  background-position: right;
}
.xlm span:last-of-type {
  background: rgba(255, 255, 255, 0);
}
.title {
  height: 345px;
  background-color: #ffffff;
  padding: 31px 15px;
  box-sizing: border-box;
}
.title h3 {
  font-size: 24px;
  color: #9e0100;
  margin-bottom: 40px;
  font-weight: normal;
}
.title p {
  font-size: 18px;
  color: #676767;
  margin-bottom: 40px;
  display: flex;
}
.title p.selected a {
  color: #9e0100 !important;
}
.title p i {
  display: block;
  height: 22px;
  width: 22px;
  background: url(../../assets/imgs/glzx_.png) no-repeat;
  background-position: 0px -331px;
  margin: 2px 14px 0 0;
}
.title p:nth-of-type(2) i {
  background-position: 0 -400px;
}
.title p:nth-of-type(3) i {
  background-position: 0 -454px;
}
.content {
  background: #fff;
  box-sizing: border-box;
}
.main > p {
  padding: 0 10px;
  font-size: 17px;
  line-height: 30px;
}
.bjs {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}
.main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.company-public {
  display: flex;
  color: #676767;
  font-size: 18px;
}
.banner .swiper-slide img {
  width: 100%;
}
</style>
