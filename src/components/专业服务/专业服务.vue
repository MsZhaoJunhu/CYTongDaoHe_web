<template>
  <div class="包裹">
    <header_ :select_index="2" />
    <div class="banner">
      <div class="wrap">
        <p>我们提供的服务有哪些？</p>
        <h1>行业最专业的咨询服务</h1>
      </div>
    </div>
    <!-- <nav id="sernav">
      <div class="catalogue">
        <span>专业服务</span>
        <span>所有项目</span>
      </div>
      <div class="control">
        <span>时间<img src="../../assets/imgs/paixu.png" /></span>
        <span>类型<img src="../../assets/icon/more.png" /></span>
      </div>
    </nav> -->
    <router-view @select="updateselect"></router-view>
    <footer_ />
  </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import Bus from '../../bus.js'
import toast from '../弹窗/toast2.vue'
export default {
  data () {
    return {
      arrs: [],
      timeType:-1,
    }
  },
  components: {
    header_,
    footer_,
    toast,
  },
  methods: {
    updateselect: function (data) {
      this.$emit('updateheader', data)
    },
  },
  created () {
    //获取仓库数据
    Bus.$on('arrs', (data) => {
      this.arrs = data;
    })
  },
}
</script>

<style scoped>
.包裹 {
  /* min-width: 1400px; */
}
nav {
  display: flex;
  justify-content: space-between;
  width: 73%;
  margin: 30px auto;
}
.banner {
  width: 100%;
  margin: 0 auto;
  height: 361px;
  background-image: url("../../assets/imgs/projectbg.png");
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
.catalogue span:after {
  content: "";
  display: block;
  margin: 0 5px;
  width: 8px;
  height: 5px;
  background-image: url(../../assets/icon/more.png);
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
.toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
@media screen and (max-width: 415px) {
  .banner {
    display: none;
  }
  nav {
    padding: 0 16px;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
  }
  nav > div > span {
    font-size: 14px !important;
  }
}
</style>