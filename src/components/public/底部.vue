<template>
  <footer>
    <div class="top">
      <div class="left">
        <img src="../../assets/imgs/wetcat.jpg"
             alt="" />
        <div>
          <h4>全国电话</h4>
          <h2>400-0623-688</h2>
          <p>地址：重庆市渝北区食品城大道18号13幢3单元1-5</p>
        </div>
      </div>
      <ul class="right">
        <li>
          <h5>服务供应商</h5>
          <router-link to="/fwgys/gys">服务商库</router-link>
          <router-link to="/fwgys/gys">案例库</router-link>
        </li>
        <li>
          <h5>管理中心</h5>
          <router-link to="/glzx/tggs">通告公式</router-link>
          <router-link to="/glzx/fwxy">服务协议</router-link>
          <router-link to="/glzx/glgz">管理规则</router-link>
          <router-link to="/glzx/zxks">在线考试</router-link>
          <router-link to="/glzx/hyqy">会员权益</router-link>
          <router-link to="/glzx/tsjb">反馈申请</router-link>
        </li>
        <li>
          <h5>资讯速递</h5>
          <router-link to="/zxsd">相关政策</router-link>
          <router-link to="/zxsd2">行业动态</router-link>
          <router-link to="/zxsd3">前沿趋势</router-link>
        </li>
        <li>
          <h5>同道学院</h5>
          <router-link to="/SaidSchoolBusNew/BusinessmanGy">德商公益</router-link>
          <router-link to="/SaidSchoolBusNew/SouthBusinessman">商海有道</router-link>
          <router-link to="/SaidSchoolBusNew/ManagEnterSkills">驭企有术</router-link>
        </li>
        <li>
          <h5>关于我们</h5>
          <router-link to="/gywm/aboutus">关于我们</router-link>
          <router-link to="/gywm/joinus">加入我们</router-link>
          <router-link to="/gywm/news">公司新闻</router-link>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p>COPYRIGHT © 2018-2019 重庆携同道合文化科技有限公司 版权所有 保留一切权利 </p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      backFlag: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showBtn) //scroll 滚动事件
  },
  methods: {
    showBtn () {
      // 计算距离顶部的高度，当高度大于40显示回顶部，小于40则隐藏（默认隐藏）
      /*获取当前页面滚动条纵坐标的位置
      IE9及以上：可以使用window.pageYOffset或者document.documentElement.scrollTop ，
      safari： window.pageYOffset 与document.body.scrollTop都可以
      Chrome：谷歌浏览器只认识document.body.scrollTop;*/
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 1000) {
        let that = this
        this.backFlag = true
      } else {
        this.backFlag = false
      }
    },
    smoothscroll () {
      let that = this
      let timer = setInterval(() => {
        let speed = Math.floor(-that.scrollTop / 10)
        //scrollTop获取元素的滚动条的垂直位置，Math.floor() 向下取整
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + speed
        //document.documentElement.scrollTop 获取当前页面的滚动条纵坐标位置
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  destroyed () {  // 销毁监听事件,当我们离开这个页面的时候，便会调用这个函数
    window.removeEventListener('scroll', this.showBtn)
  },
}
</script>

<style scoped>
footer {
  background-color: #9e0100;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-width: 1400px; */
}
footer > * {
  width: 73%;
}
footer .top {
  display: flex;
  justify-content: space-between;
}
footer .top > * {
  padding: 48px 0;
  width: 100%;
}
footer .top .left {
  display: flex;
  align-items: center;
}
footer .top .left img {
  flex-shrink: 0;
  width: 119px;
  height: 119px;
  background: #fff;
  margin-right: 20px;
}
footer .top .left div {
  height: 119px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
footer .top .left div h4 {
  font-size: 18px;
  user-select: none;
}
footer .top .left div h2 {
  font-size: 28px;
  user-select: none;
}
footer .top .left div p {
  font-size: 16px;
  opacity: 0.6;
  user-select: none;
}
footer .top .right {
  margin: 0;
  display: flex;
  justify-content: flex-end;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}
footer .top .right li {
  margin-left: 54px;
}
footer .top .right li h5 {
  margin-bottom: 13px;
  font-size: 16px;
  opacity: 0.65;
  user-select: none;
  white-space: nowrap;
}
footer .top .right li a {
  color: inherit;
  font-size: 14px;
  opacity: 0.38;
  display: block;
  margin-bottom: 7px;
  user-select: none;
  white-space: nowrap;
}
footer .bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  padding: 23px 0;
}
footer .bottom p {
  font-size: 14px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  opacity: 0.43;
  color: #fff;
}
@media screen and (max-width: 1242px) {
  footer > * {
    width: 90%;
  }
}
@media screen and (max-width: 415px) {
  footer {
    display: none;
  }
}
</style>