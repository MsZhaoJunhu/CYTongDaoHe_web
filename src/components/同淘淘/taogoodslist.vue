<template>
  <el-row class="groupbuy" type="flex" justify="center">
    <el-col :span="16" :xl="16" :lg="18" :md="20">
      <div>
        <div class="grouptitle">{{title}} <span><i class="el-icon-arrow-right"></i></span><span><i class="el-icon-arrow-left"></i></span></div>
        <div class="grouplist">
          <div v-for="(item,index) of grouplist"
               :key="index"
               @click="routerPush(item.Route)">
            <el-image :src="item.Url">
            </el-image>
            <p class="goodstip">惠普（HP）GT52彩色墨水</p>
            <p class="goodsdesc">商品描述有就显示没有不显示就行了撒</p>
            <p class="goodsprice">¥ 68.00</p>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    title: String,
    grouplist: Array,
    route:String,
  },
  data () {
    return {
      routerPush(r){
        this.$router.push(r)
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.groupbuy {
  margin-top: 30px;
}
.groupbuy > div {
  background: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
}
.grouptitle {
  height: 55px;
  line-height: 55px;
  color: #666666;
  font-size: 18px;
  font-weight: 700;
  border-bottom: solid 1px #e9e9e9;
  padding-left: 30px;
}
.grouptitle span {
  width: 32px;
  height: 32px;
  float: right;
  margin: 12px 20px 0 0;
  font-size: 15px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  margin-right: 15px;
  border: #d9d9d9 1px solid;
  cursor: pointer;
}
.grouplist {
  display: flex;
  flex-direction: row;
}
.grouplist > div {
  padding: 30px 0;
  text-align: center;
  flex: 1;
  border-right: solid 1px #e9e9e9;
  cursor: pointer;
}
.grouplist > div:last-child {
  padding: 30px 0;
  text-align: center;
  flex: 1;
  border-right: none;
}
.grouplist > div:hover {
  box-shadow: inset 0 0 10px 20px rgba(233, 233, 233, 0.4);
}
.grouplist /deep/ .el-image{
  box-sizing: border-box;
  padding: 0 20px;
}
.goodstip {
  color: #333;
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
}
.goodsdesc {
  color: #5e5e5e;
  font-size: 14px;
  padding-bottom: 30px;
}
.goodsprice {
  color: #cc3333;
  font-size: 18px;
  font-weight: 700;
}
@media screen and (max-width: 1500px) {
  .goodsdesc{
    padding-bottom: 0.5rem;
    font-size: 12px;
  } 
  .goodstip{
    margin: 0.5rem 0;
    font-size: 17px;
  }
}
</style>