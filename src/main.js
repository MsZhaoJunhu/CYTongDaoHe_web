import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import animate from 'animate.css'  

import filters from './components/filters/filter'
import './components/css/common.css'
import './assets/font/font.css'

import elementUploaderFile from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*引入vue-touch滑动*/
import VueTouch from 'vue-touch'
import './assets/css/iconfont.css'

Vue.use(VueTouch, {name: 'v-touch'})

VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}

//引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.use(animate)

//引入vuexfengzuang
//：引入vuex
import Vuex from "vuex"
Vue.use( elementUploaderFile)
//: 注册vuex组件
Vue.use(Vuex)
//: 创建vuex实例 store 
var store = new Vuex.Store({
  //vuex中全局共享数据
  state:{
    islogin:true,
    //toast
    flag:false,
    toastFlag1:false,
    toastFlag2:false,
    toastFlag3:false,
    //toast2
    toast2Flag1:false,
    toast2Flag2:false,
    toast2Flag3:false,
    toast2Flag4:false,
    toast2Flag5:false,
    toast2Flag6:false,
    //toast3
    toast3Flag1:false,
    toast3Flag2:false,
    toast3Flag3:false,
    toast3Flag4:false,
    toast3Flag5:false,
    toast3Flag6:false,
    //toast4
    toast4Flag1:false,
    toast4Flag2:false,
    toast4Flag3:false,
    toast4Flag4:false,
    toast4Flag5:false,
    //toast5
    toast5Flag1:false,
    //toast6
    toast6Flag1:false,
    toast6Flag2:false,
    toast6Flag3:false,
    toast6Flag4:false,
    toast6Flag5:false,
    toast6Flag6:false,
    toast6Flag7:false,
    toast6Flag8:false,
    toast6Flag9:false,
    toast6Flag10:false,
    toast6Flag11:false,
    toast6Flag12:false,
    toast6Flag13:false,
    //组件弹窗
    toastZj:false,
    userName:"",
    userPassword:"",
    serverInfo:"",
  },
  //修改vuex中全局共享数据
  mutations:{
    //toast
    //弹窗显示
    changeTrue(state){
      state.flag=true;
      state.toastFlag1=true;
      state.toastFlag2=true;
    },
    //弹窗关闭
    changeFalse(state){
      state.flag=false;
      state.toastFlag1=false;
      state.toastFlag2=false;
      state.toastFlag3=false;
      //toast2
      state.toast2Flag1=false;
      state.toast2Flag2=false;
      state.toast2Flag3=false;
      state.toast2Flag4=false;
      state.toast2Flag5=false;
      state.toast2Flag6=false;
      //toast3
      state.toast3Flag1=false;
      state.toast3Flag2=false;
      state.toast3Flag3=false;
      state.toast3Flag4=false;
      state.toast3Flag5=false;
      state.toast3Flag6=false;
      //toast4
      state.toast4Flag1=false;
      state.toast4Flag2=false;
      state.toast4Flag3=false;
      state.toast4Flag4=false;
      state.toast4Flag5=false;
      //toast5
      state.toast5Flag1=false;
    },
    changeTrueTwo(state){
      state.toastFlag1=true;
      state.toastFlag2=false;
      state.toastFlag3=true;
    },
    //toast2
    changeTrueToast2(state){
      state.toast2Flag1=true;
      state.toast2Flag2=true;
    },
    changeTrueToast22(state){
      state.toast2Flag1=true;
      state.toast2Flag2=false;
      state.toast2Flag3=true;
    },
    changeTrueToast23(state){
      state.toast2Flag1=true;
      state.toast2Flag2=false;
      state.toast2Flag3=false;
      state.toast2Flag4=true;
    },
    changeTrueToast24(state){
      state.toast2Flag1=true;
      state.toast2Flag2=false;
      state.toast2Flag3=false;
      state.toast2Flag4=false;
      state.toast2Flag5=true;
    },
    changeTrueToast25(state){
      state.toast2Flag1=true;
      state.toast2Flag2=false;
      state.toast2Flag3=false;
      state.toast2Flag4=false;
      state.toast2Flag5=false;
      state.toast2Flag6=true;
    },
    //toast3
    changeTrueToast3(state){
      state.toast3Flag1=true;
      state.toast3Flag2=true;
      state.toast3Flag3=false;
      state.toast3Flag4=false;
      state.toast3Flag5=false;
      state.toast3Flag6=false;
    },
    changeTrueToast32(state){
      state.toast3Flag1=true;
      state.toast3Flag2=false;
      state.toast3Flag3=false;
      state.toast3Flag4=false;
      state.toast3Flag5=false;
      state.toast3Flag6=true;
    },
    changeTrueToast33(state){
      state.toast3Flag1=true;
      state.toast3Flag2=false;
      state.toast3Flag3=false;
      state.toast3Flag4=false;
      state.toast3Flag5=true;
      state.toast3Flag6=false;
    },
    changeTrueToast34(state){
      state.toast3Flag1=true;
      state.toast3Flag2=false;
      state.toast3Flag3=false;
      state.toast3Flag4=true;
      state.toast3Flag5=false;
      state.toast3Flag6=false;
    },
    changSB(state){
      state.toast3Flag1=true;
      state.toast3Flag2=false;
      state.toast3Flag3=true;
      state.toast3Flag4=false;
      state.toast3Flag5=false;
      state.toast3Flag6=false;
    },
    //toast4
    changeTrueToast4(state){
      state.toast4Flag1=true;
      state.toast4Flag2=true;
    },
    changeTrueToast42(state){
      state.toast4Flag1=true;
      state.toast4Flag2=false;
      state.toast4Flag3=true;
    },
    changeTrueToast43(state){
      state.toast4Flag1=true;
      state.toast4Flag2=false;
      state.toast4Flag3=false;
      state.toast4Flag4=true;
    },
    changeTrueToast44(state){
      state.toast4Flag1=true;
      state.toast4Flag2=false;
      state.toast4Flag3=false;
      state.toast4Flag4=false;
      state.toast4Flag5=true;
    },
    //toast5
    changeTrueToast5(state){
      state.toast5Flag1=true;
    },
    //toast6
    changeToastZjTrue(state){
      state.toastZj=true;
    },
    changeToastZjFalse(state){
      state.toastZj=false;
    },
    changeSixToast1(state){
      state.toast6Flag1=true;
      state.toast6Flag2=true;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast2(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=true;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast3(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=true;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast4(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=true;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast5(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=true;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast6(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=true;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast7(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=true;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast8(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=true;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast9(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=true;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast10(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=true;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    changeSixToast11(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=true;
      state.toast6Flag13=false;
    },
    changeSixToast12(state){
      state.toast6Flag1=true;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=true;
    },
    changeSixToastFalse(state){
      state.toast6Flag1=false;
      state.toast6Flag2=false;
      state.toast6Flag3=false;
      state.toast6Flag4=false;
      state.toast6Flag5=false;
      state.toast6Flag6=false;
      state.toast6Flag7=false;
      state.toast6Flag8=false;
      state.toast6Flag9=false;
      state.toast6Flag10=false;
      state.toast6Flag11=false;
      state.toast6Flag12=false;
      state.toast6Flag13=false;
    },
    tanchu(state){
      return alert(state.islogin);
    },
    setuserName(state,userNameValue){
      state.userName=userNameValue;
    },
    setuserPassword(state,userPasswordValue){
      state.userPassword=userPasswordValue;
    },
    serverInfo(state,value){
      state.serverInfo=value;
    }
  },
  //获取vuex中全局共享数据
  getters:{
   getIsLogin:function(state){
    return state.islogin;
   },
   getFlag:function(state){
    return state.flag;
   },
   getToastFlag1:function(state){
    return state.toastFlag1;
   },
   getToastFlag2:function(state){
    return state.toastFlag2;
   },
   getToastFlag3:function(state){
    return state.toastFlag3;
   },
   //toast2
   getToast2Flag1:function(state){
    return state.toast2Flag1;
   },
   getToast2Flag2:function(state){
    return state.toast2Flag2;
   },
   getToast2Flag3:function(state){
    return state.toast2Flag3;
   },
   getToast2Flag4:function(state){
    return state.toast2Flag4;
   },
   getToast2Flag5:function(state){
    return state.toast2Flag5;
   },
   getToast2Flag6:function(state){
    return state.toast2Flag6;
   },
   //toast3
   getToast3Flag1:function(state){
    return state.toast3Flag1;
   },
   getToast3Flag2:function(state){
    return state.toast3Flag2;
   },
   getToast3Flag3:function(state){
    return state.toast3Flag3;
   },
   getToast3Flag4:function(state){
    return state.toast3Flag4;
   },
   getToast3Flag5:function(state){
    return state.toast3Flag5;
   },
   getToast3Flag6:function(state){
    return state.toast3Flag6;
   },
   //toast4
   getToast4Flag1:function(state){
    return state.toast4Flag1;
   },
   getToast4Flag2:function(state){
    return state.toast4Flag2;
   },
   getToast4Flag3:function(state){
    return state.toast4Flag3;
   },
   getToast4Flag4:function(state){
    return state.toast4Flag4;
   },
   getToast4Flag5:function(state){
    return state.toast4Flag5;
   },
   //toast5
   getToast5Flag1:function(state){
    return state.toast5Flag1
   },
   //toast6
   getToastZj:function(state){
    return state.toastZj;
  },

  getToast6Flag1:function(state){
    return state.toast6Flag1;
  },
  getToast6Flag2:function(state){
    return state.toast6Flag2;
  },
  getToast6Flag3:function(state){
    return state.toast6Flag3;
  },
  getToast6Flag4:function(state){
    return state.toast6Flag4;
  },
  getToast6Flag5:function(state){
    return state.toast6Flag5;
  },
  getToast6Flag6:function(state){
    return state.toast6Flag6;
  },
  getToast6Flag7:function(state){
    return state.toast6Flag7;
  },
  getToast6Flag8:function(state){
    return state.toast6Flag8;
  },
  getToast6Flag9:function(state){
    return state.toast6Flag9;
  },
  getToast6Flag10:function(state){
    return state.toast6Flag10;
  },
  getToast6Flag11:function(state){
    return state.toast6Flag11;
  },
  getToast6Flag12:function(state){
    return state.toast6Flag12;
  },
  getToast6Flag13:function(state){
    return state.toast6Flag13;
  },
  getuserName:function(state){
    return state.userName;
  },
  getuserPassword:function(state){
    return state.userPassword;
  },
  getserverInfo:function(state){
    return state.serverInfo;
  },
},
  actions:{
    getTanchu({commit},state){
      return commit('tanchu',state)
    }
  }
})

//引入map
import AMap from 'vue-amap';
Vue.use(AMap);

  // 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '1af7cf591426e4ff23e60648c1192bfa',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete',
  'AMap.PlaceSearch', // POI搜索插件
  'AMap.Scale', // 右下角缩略图插件 比例尺
  'AMap.ToolBar', // 地图工具条
  'AMap.CircleEditor', // 圆形编辑器插件
  'AMap.Geolocation', // 定位控件，用来获取和展示用户主机所在的经纬度位置
  'AMap.Geocoder']
});
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {
    App
  },
  router,
  store
}).$mount('#app')
