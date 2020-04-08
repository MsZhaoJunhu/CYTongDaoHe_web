<template>
  <div class="taoIndex">
    <header_ :select_index="3"></header_>
    <!-- 顶部header -->
    <tao-header />
    <!-- 中部body -->
    <el-main>
      <!-- swiper -->
      <el-row class="taoswiper" type="flex" justify="center">
        <el-col :span="16" :xl="16" :lg="18" :md="20">
          <el-carousel arrow="never">
            <el-carousel-item v-for="(item,index) in swiperlist"
                              :key="index">
              <el-image style="width:100%;height:100%"
                        :src="item.Url"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row class="toplist"
              type="flex"
              justify="center">
      </el-row>
      <!--  -->
      <el-row class="firsttip" type="flex" justify="center">
        <el-col :span="16" :xl="16" :lg="18" :md="20">
          <template v-for="(item,index) of firstlist">
            <el-image :key="index"
                      :src="item.Url" />
          </template>
        </el-col>
      </el-row>
      <!--团购  -->
      <tao-goodslist :title="'特惠团购'"
                     :grouplist="grouplist"></tao-goodslist>
      <!--高端消费-->
      <tao-goodslist :title="'高端消费'"
                     :grouplist="grouplist"></tao-goodslist>
      <!--标准服务  -->
      <tao-goodslist :title="'标准服务'"
                     :grouplist="grouplist2"></tao-goodslist>
    </el-main>
    <el-footer>
      <div>
        <p>帮助</p>
        <p>隐私</p>
        <p>条款</p>
      </div>
      <div>copyright © 2019 城银产品拓展部出品</div>
      <div>关于同道通管理工具 丨 同道合平台 丨 联系客服 同道合 © 2019 渝IPC备XXXXXXXX号 重庆携同道合文化科技有限公司 © 2019 </div>
    </el-footer>
  </div>
</template>
<script>
import header_ from '@/components/public/头部'
import TaoHeader from './taoheader'
import TaoGoodslist from './taogoodslist'
export default {
  data () {
    return {
      swiperlist: [
        {
          id: '001',
          Url: require('../../assets/tao/banner1.png'),
        }, {
          id: '002',
          Url: require('../../assets/tao/banner2.png'),
        }, {
          id: '003',
          Url: require('../../assets/tao/banner3.png'),
        }
      ],
      firstlist: [
        {
          id: '001',
          Url: require('../../assets/tao/bodyBanner1.png'),
        }, {
          id: '002',
          Url: require('../../assets/tao/bodyBanner2.png'),
        }, {
          id: '003',
          Url: require('../../assets/tao/bodyBanner3.png'),
        }
        , {
          id: '004',
          Url: require('../../assets/tao/bodyBanner4.png'),
        }
      ],
      grouplist: [
        {
          id: '001',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"commodityDetails"
        },
        {
          id: '002',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"commodityDetails"
        },
        {
          id: '003',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"commodityDetails"
        },
        {
          id: '004',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"commodityDetails"
        },
      ],
      grouplist2: [
        {
          id: '001',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"standardDetails"
        },
        {
          id: '002',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"standardDetails"
        },
        {
          id: '003',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"standardDetails"
        },
        {
          id: '004',
          Url: require('../../assets/tao/pro1smart.png'),
          Route:"standardDetails"
        },
      ],
      shoppingCart: [
        {
          name: "冬装百搭卫衣",
          type: "服饰",
          price: 1800,
          number: 2,
        },
        {
          name: "科沃斯扫地机器人",
          type: "家居",
          price: 8000,
          number: 1,
        },
        {
          name: "卫龙辣条",
          type: "食品",
          price: 50,
          number: 10,
        }
      ],
      shoppingCartNumber: 13,
      shoppingCartPrice: 10300
    }
  },
  components: {
    header_,
    TaoHeader,
    TaoGoodslist
  },
  methods: {
    deleteShop (arr, index) {
      arr.splice(index, 1);
    },
  },
}
</script>
<style scoped>
.taoIndex {
  background: rgba(237, 237, 237, 1);
}
.taoswiper {
  margin-top: 130px;
}
.taoswiper > div {
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
}
.taoswiper /deep/ .el-carousel__container {
  height: 510px;
}
.taoswiper /deep/ .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.taoswiper /deep/.el-carousel__item img {
  width: 100%;
}
.firsttip {
  margin-top: 30px;
}
.firsttip > div {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
}
.firsttip > div > div {
  flex: 1;
}
.el-footer {
  background: #fff;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  color: #cfcfcf;
}
.el-footer > div:first-child {
  display: flex;
  margin: 20px 0 15px 0;
  flex-direction: row;
  justify-content: center;
}
.el-footer > div:first-child > p {
  display: inline-block;
  margin: 0 20px;
}
</style>