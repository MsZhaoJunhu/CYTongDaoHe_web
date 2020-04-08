<template>
  <el-header class="taoHeader">
    <el-row>
      <el-col :span="1"
              :offset="1"
              class="taologo">
        <img src="../../assets/taoLogo.png"
             alt="logo图片">
      </el-col>
      <el-col :span="5"
              :offset="11"
              class="searchinput">
        <el-input placeholder="请输入搜索的商品"
                  prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col :span="1"
              class="shoppingcar"
              :offset="2">
        <el-popover placement="bottom-end"
                    width="318"
                    trigger="click">
          <!-- 购物车空 -->
          <el-col class="shoppingcar0"
                  v-if="0">
            <i class="el-icon-shopping-cart-1" />
            <p>购物车为空</p>
            <p>你还没有选购任何商品，现在前往商城选购吧!</p>
          </el-col>
          <el-col class="shoppingcar1"
                  v-else>
            <ul>
              <li class="shoppingcailist"
                  v-for="(item,index) of 3"
                  :key="index">
                <el-image style="width:100px;height:100px"></el-image>
                <div>
                  <p>商品名</p>
                  <p>商品类别</p>
                  <p>￥{{1222}}</p>
                  <p>x{{2}}</p>
                </div>
                <p>x</p>
              </li>
            </ul>
            <div class="settlement">
              <p>共{{3}}件商品</p>
              <span>合计:</span>
              <span>￥{{12322}}</span>
              <el-button @click="clickToShoppingCart">去购物车</el-button>
            </div>
          </el-col>
          <el-col :span="1"
                  slot="reference"
                  class="headericon"><i class="el-icon-shopping-cart-1"></i></el-col>
        </el-popover>
      </el-col>
      <el-col :span="1"
              class="userinfo">
        <el-popover placement="bottom-end"
                    width="100"
                    trigger="click">
          <el-col class="userinfodesc">
            <div>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <p>12345678915</p>
            </div>
            <ul>
              <li>
                <router-link to="order">我的订单</router-link>
              </li>
              <li>
                <router-link to="userInfo">账户资料</router-link>
              </li>
              <li>
                <router-link to="userAdress">收货地址</router-link>
              </li>
            </ul>
          </el-col>
          <el-col :span="1"
                  slot="reference"
                  class="headericon"><i class="el-icon-user-solid"></i></el-col>
        </el-popover>
      </el-col>
      <el-col :span="2"
              class="incomebtn">
        <el-button>商家入驻</el-button>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    clickToShoppingCart(){
      this.$router.push("shoppintCart")
    }
  }
}
</script>

<style scoped>
.taoHeader {
  position: fixed;
  top: 62px;
  left: 0;
  right: 0;
  z-index: 3;
  background: #fff;
  height: 68px !important;
  box-shadow: 0px 10px 12px -6px rgba(0, 0, 0, 0.349019607843137);
}
.taologo {
  margin-top: 4px;
}

.searchinput {
  text-align: center;
  line-height: 68px;
}
.searchinput /deep/ .el-input__inner {
  border-radius: 20px;
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.searchinput /deep/ .el-input__inner:focus{
  border-color: #9e0000;
}
.searchinput /deep/ .el-input__prefix {
  font-size: 20px;
  top: 2px;
  cursor: pointer;
}
.shoppingcar,
.userinfo {
  color: #b0b0b0;
  text-align: center;
  line-height: 68px;
  font-size: 30px;
}
.headericon {
  width: 100%;
}
.incomebtn {
  text-align: center;
  line-height: 68px;
}
.incomebtn /deep/ .el-button {
  background: rgba(173, 24, 24, 1);
  color: #fff;
}
.shoppingcar0 {
  width: 318px;
  height: 217px;
  padding: 25px 30px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.shoppingcar0 i {
  font-size: 60px;
  color: #b0b0b0;
}
.shoppingcar0 p:first-child {
  font-size: 16px;
  color: #5e5e5e;
}
.shoppingcar0 p:last-child {
  font-size: 12px;
  color: #aeaeae;
}
.shoppingcailist {
  padding: 10px;
  border-bottom: 1px solid #e9e9e9;
}
.shoppingcailist:hover {
  box-shadow: inset 0 0 10px 10px rgba(233, 233, 233, 0.4);
}
.shoppingcailist > p {
  float: right;
  margin-top: 45px;
  width: 15px;
  height: 15px;
  line-height: 12px;
  font-size: 13px;
  text-align: center;
  color: #fff;
  background: #aaaaaa;
  border-radius: 50%;
}
.shoppingcailist > div:nth-child(2) {
  display: inline-block;
  vertical-align: top;
  padding: 5px 0 0 20px;
}
.shoppingcailist > div:nth-child(2) > p:first-child {
  font-size: 18px;
  font-weight: 700;
  color: #333;
}
.shoppingcailist > div:nth-child(2) > p:nth-child(2) {
  font-size: 12px;
  color: #333;
  margin-top: 15px;
}
.shoppingcailist > div:nth-child(2) > p:nth-child(3) {
  font-size: 12px;
  color: #df0000;
  display: inline-block;
  margin-top: 10px;
}
.shoppingcailist > div:nth-child(2) > p:nth-child(4) {
  font-size: 12px;
  color: #666666;
  padding-left: 5px;
  display: inline-block;
}
.settlement {
  width: 100%;
  padding: 20px 10px;
}
.settlement p {
  color: #666;
  font-size: 12px;
}
.settlement > span:first-child {
  font-size: 14px;
  color: #333;
}
.settlement > span:nth-child(2) {
  font-size: 16px;
  color: #cc3333;
}
.settlement > .el-button {
  float: right;
  margin-top: -15px;
  margin-right: 20px;
  background: rgba(173, 24, 24, 1);
  color: #fff;
  border: 0;
}
.userinfodesc > div,
.userinfodesc > ul {
  text-align: center;
}
.userinfodesc > div {
  margin: 5px 0;
}
.userinfodesc > ul > li {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-top: 1px solid #e9e9e9;
  line-height: 40px;
}
.userinfodesc > ul > li > a{
  color: #000;
}
</style>
<style>
.el-popover {
  padding: 0;
}
</style>