<template>
  <div class="selectAdress">
    <div class="selectAdressHeader">
      <div class="header-back"
           @click="backSummaryAdd">
      </div>
      <div class="header-title">位置</div>
    </div>
    <!-- <div class="selectAdressSearch ">
      <div class="selectAdress-search border-bottom">
        <img src="../../assets/img/搜索.png" />
        <input type="text"
               placeholder="搜索位置"
               autofocus />
      </div>
    </div> -->
    <div class="selectAdressMain">
      <div class="amap-page-container">
        <div class="search-box border-bottom-1px">
          <el-amap-search-box :search-option="searchOption"
                              :on-search-result="onSearchResult"></el-amap-search-box>
        </div>
        <div class="amap-demos">
          <el-amap vid="amapDemo"
                   :plugin="plugin"
                   :center="center"
                   :zoom="zoom"
                   class="amap-demo"
                   :events="events">
            <el-amap-marker v-for="(marker, index) in markers"
                            :key="marker.index"
                            :position="marker.position"
                            :animation="marker.animation"
                            :events="marker.events"
                            :vid="index"></el-amap-marker>
            <el-amap-info-window v-for="(marker, index) in markers"
                                 :position="marker.position"
                                 :content="sendPosition"
                                 :key="index"></el-amap-info-window>
          </el-amap>

        </div>

        <div class="toolbar">
          <div class="title">当前位置</div>
          <div class="nowAdress">
            <div v-if="loaded">{{sendPosition}}</div>
            <div v-else>正在定位(可手动输入定位)</div>
          </div>
          <div class="submit"
               @click="sendLocation">提交该地址</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selectAdress',
  data() {
    let self = this
    return {
      sendPosition: '',
      searchOption: {
        city: '昆明',
        citylimit: false
      },
      center: [29.549406, 106.514506],
      zoom: 12,
      markers: [
        {
          position: [29.549406, 106.514506],
          animation: 'AMAP_ANIMATION_DROP',
          events: {
            click(o) {
            }
          }
        }
      ],
      plugin: [
        //一些工具插件
        {
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 100, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          extensions: 'all',
          pName: 'Geolocation', //定位
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.sendPosition = result.formattedAddress
                  self.lng = result.position.lng //设置经度
                  self.lat = result.position.lat //设置维度
                  self.center = [self.lng, self.lat] //设置中心坐标
                  self.markers[0].position = [self.lng, self.lat]
                  self.loaded = true //load
                  var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: 'all'
                  })
                  geocoder.getAddress([self.lng, self.lat], function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                      if (result && result.regeocode) {
                        self.loaded = true
                        self.sendPosition = result.regeocode.formattedAddress
                        self.$nextTick()
                      }
                    }
                  })
                  self.$nextTick() //页面渲染好后
                }
              })
            }
          }
        },
        {
          pName: 'ToolBar', //工具栏
          events: {
            init(instance) {
              
            }
          }
        },
        {
          pName: 'Scale', //比例尺
          events: {
            init(instance) {
              
            }
          }
        }
      ],
      //这是点击地图上的图标实现定位的事件
      events: {
        click(e) {
          let { lng, lat } = e.lnglat
          self.lng = lng
          self.lat = lat
          self.markers[0].position = [self.lng, self.lat]

          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress([lng, lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.loaded = true
                self.sendPosition = result.regeocode.formattedAddress
                self.$nextTick()
              }
            }
          })
        }
      },
      lng: 0,
      lat: 0,
      loaded: false
    }
  },
  methods: {
    //这是搜索框搜索完成后的回调函数
    onSearchResult(pois) {
      let self = this
      let latSum = 0
      let lngSum = 0
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi
          lngSum += lng
          latSum += lat
        })
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        }
        self.lng = center.lng
        self.lat = center.lat
        // 这里通过高德 SDK 完成。
        var geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: 'all'
        })
        geocoder.getAddress([center.lng, center.lat], function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            if (result && result.regeocode) {
              self.loaded = true
              self.sendPosition = result.regeocode.formattedAddress
              self.$nextTick()
            }
          }
        })
        self.center = [center.lng, center.lat]
        self.markers[0].position = [center.lng, center.lat]
      }
    },
    //点返回按钮 回到上个页面上
    backSummaryAdd() {
      this.$emit('leaveSelectAdress', '请选择')
    },
    //把经纬度传到父组件
    sendLocation() {
      console.log('获取的精度和纬度', this.lng, this.lat)
      console.log('获取的地址', this.sendPosition)
      this.$emit('leaveSelectAdress', this.sendPosition)
    }
  }
}
</script>
<style lang="less">
@size: 1/75rem;
.selectAdress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 9;
  .selectAdressHeader {
    width: 100%;
    height: 44px;
    background-color: #ff6800;
    position: fixed;
    top: 0;
    z-index: 9;
    overflow: hidden;
    .header-back {
      float: left;
      margin-top: 11px;
      margin-left: 15px;
      width: 22px;
      height: 22px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .header-title {
      position: absolute;
      left: 30%;
      width: 40%;
      height: 44px;
      font-size: 20px;
      color: #ffffff;
      text-align: center;
      line-height: 44px;
      z-index: 1;
    }
  }
  .selectAdressSearch {
    position: relative;
    width: 100%;
    height: 60px;
    margin-top: 44px;
    .selectAdress-search {
      width: 100%;
      height: 60px;
      background-color: #ffffff;
      position: relative;
      img {
        position: absolute;
        width: 40 * @size;
        height: 40 * @size;
        top: 40 * @size;
        left: 6%;
        z-index: 2;
      }
      input {
        box-sizing: border-box;
        position: absolute;
        top: 20 * @size;
        left: 5%;
        width: 90%;
        height: 80 * @size;
        background-color: #eeeeee;
        border-radius: 8 * @size;
        text-indent: 70 * @size;
        color: #c3c3c3;
        font-size: 40 * @size;
      }
    }
  }
  .selectAdressMain {
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #cccccc;
    .amap-page-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      .amap-copyright {
        display: none !important;
      }
      .amap-controls {
        .amap-scalecontrol {
          left: 70px !important;
        }
      }
      .search-box {
        width: 100%;
        height: auto;
        .el-vue-search-box-container {
          width: 100%;
          .search-btn {
            // border: 1px solid red;
            font-size: 36 * @size;
            margin: 5px 8px;
            height: 35px;
            border-radius: 5px;
          }
        }
      }
      .amap-demos {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 150px;
      }
      .toolbar {
        position: absolute;
        bottom: 0;
        left: 0px;
        right: 0px;
        height: 150px;
        background-color: #ffffff;
        .title {
          font-size: 40 * @size;
          margin-top: 15px;
          padding: 0 20px;
        }
        .nowAdress {
          font-size: 36 * @size;
          margin-top: 8px;
          padding: 0 20px;
          img {
            float: left;
            width: 22px;
            height: auto;
            padding-right: 5px;
          }
          div {
            height: 35px;
            overflow: hidden;
          }
        }
        .submit {
          background-color: #ff6800;
          margin: 15px 20px 0;
          height: 45px;
          text-align: center;
          line-height: 45px;
          border-radius: 5px;
          font-size: 22px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>