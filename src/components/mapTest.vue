<template>
  <div class="amap-page-container" >
    <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >  
    <el-amap-marker vid="marker" :position="center" ></el-amap-marker>
    </el-amap>
    <div class="toolbar">
        <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
    </div>
</div>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      center: [106.608995, 29.648926],
      zoom: 20,
      lng: 106.5141999722,
      lat: 29.5491600000,
      loaded: false,
      plugin: [   //一些工具插件
        {
          pName: 'Geolocation',   //定位
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];         //设置坐标
                  self.loaded = true;                         //load
                  self.$nextTick();                           //页面渲染好后
                }
              })
            }
          }
        },
        {
          
        }
        ,{
          pName: 'ToolBar',  //工具栏
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'OverView',  //鹰眼
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'MapType',  //地图类型
          defaultType: 0,
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        }
      ]
    }
  },
  methods: {
    //把经纬度传到父组件
    sendlnglat (){ 
      this.$emit('register', this.lng, this.lat)
    }
  }
}
</script>

<style>
.amap-page-container {
  position: relative;
  margin-top: 0.03rem;
  font-size: 0.13rem;
  color: #fff;
  height: 7.8125rem;
  width: 14.0625rem;
}
@media screen and (max-width: 415px) {
  .amap-page-container {
    width:100%;
    height: 100%;
  }
}
</style>
