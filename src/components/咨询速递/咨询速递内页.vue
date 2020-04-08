<template>
  <!-- 已改 -->
  <div class="包裹">
    <header_ :select_index="3" />
    <xfc></xfc>
    <div class="main">
      <div class="zxsd_title">
        <p>{{newsTitle}}</p>
        <div class="subnav">
          <span>
            <img src="../../assets/imgs/liulan.png" alt /> 2548
          </span>
          <span>
            <img src="../../assets/imgs/shouchang.png" alt /> 56
          </span>
          <span>
            <img src="../../assets/imgs/zan.png" alt /> 125
          </span>
          <span>
            <img src="../../assets/imgs/riqi.png" alt />2018年5月31日
          </span>
        </div>
      </div>
      <div v-html="cont">
      </div>
      <div class="sbk">
      <div class="control">
        <a href="javascript:;" @click="preClick(newsId,newsType)">上一个最新:{{pre}}</a>
        <a href="javascript:;" @click="nextClick(newsId,newsType)">下一个最新:{{next}}</a>
      </div>
    </div>
    </div>
    <footer_ />
  </div>
</template>

<script>
import header_ from "@/components/public/头部";
import footer_ from "@/components/public/底部";
import { getNewDtailWithType,getNewNext,getNewPre } from "../api/api";
import xfc from '@/components/public/悬浮窗.vue'
export default {
  components: {
    header_,
    footer_,
    xfc,
  },
  data() {
    return {
      newsId:this.$route.query.newsId,
      newsType:this.$route.query.newsType,
      cont: "",
      newsTitle:'',
      next:"",
      pre:"",

    };
  },
  methods: {
    getgetNewIn() {
      getNewDtailWithType({"newId":this.newsId,"newType":this.newsType}).then(res => {
        if (res.data.code === 200) {
          this.cont = res.data.data.newsContent;
          this.newsTitle=res.data.data.newsTitle;
          this.next=res.data.next;
          this.pre=res.data.pre;
        } else {
          console.log("获取错误!");
        }
      });
    },
    preClick(newsId,newsType){
      // 上一个新闻
       getNewPre({"newId":newsId,"newType":newsType}).then(res => {
          if (res.data.code === 200) {
            this.cont=res.data.data.newsContent
            this.next=res.data.next;
            this.pre=res.data.pre;
            this.newsId=res.data.data.newsId;
          }
      })
    },
    nextClick(newsId,newsType){
      // 下一个新闻
      getNewNext({"newId":newsId,"newType":newsType}).then(res => {
        if (res.data.code === 200) {
            this.cont=res.data.data.newsContent
            this.next=res.data.next;
            this.pre=res.data.pre;
            this.newsId=res.data.data.newsId;
          }
      })
    }
  },
  created() {
    this.getgetNewIn();
  }
};
</script>

<style  scoped>
.包裹{
  /* min-width: 1400px; */
}
.main {
  position: relative;
  width: 66%;
  padding: 0 20px;
  margin: 0 auto;
  padding-top: 80px;
}
.zxsd_title {
  padding: 50px 0;
  text-align: center;
}

.zxsd_title span {
  font-size: 18px;

  color: #666;
}
.img_1,
.img_2 {
  margin: 30px 0 75px 0;
}
.img_1 img {
  display: block;
  width: 100%;
  height: 600px;
}
.img_2 {
  display: flex;
  justify-content: space-between;
}
.img_2 img {
  display: block;
  width: 50%;
  height: 410px;
}
.img_2 img:first-of-type {
  margin-right: 10px;
}
.main p {
  color: #333;
  font-size: 16px;
  margin-bottom: 50px;
  line-height: 30px;
  letter-spacing: 1px;
}
.zxsd_title p {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}
.sbk {
  border-top: solid 1px #ccc;
}
.control {
  display: flex;
  justify-content: space-between;
  margin: 30px auto 60px auto;
}
.control a:nth-child(1) {
  background: url(../../assets/imgs//xjt2.png) no-repeat;
  padding-left: 20px;
  background-position: left;
  cursor: pointer;
  color: #000000;
}
.control a:nth-child(2) {
  background: url(../../assets/imgs/xjt.png) no-repeat;
  padding-right: 20px;
  background-position: right;
  cursor: pointer;
  color: #000000;
}
/* xj */
.subnav {
  margin: 0 auto;
  width: 452px;
  display: flex;
  justify-content: space-between;
}
.subnav span {
  display: flex;
  align-items: center;
}
.subnav span img {
  margin-right: 5px;
}
@media screen and (max-width: 415px) {
  .main {
    width: 100%;
    box-sizing: border-box;
  }
  .main >>> div > p img {
    max-width: 100%;
  }
  .zxsd_title p{
    font-size: 28px;
    line-height: 36px;
  }
  .zxsd_title{
    padding: 12px 0;
  }
  .subnav{
    width: 100%;
  }
  .control{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .control>a{
    width: 40%;
  }
}
</style>