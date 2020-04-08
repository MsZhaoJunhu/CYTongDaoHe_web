<template>
    <div class="suoyou_all">
        <div class="funsBox" v-for="(item,i) in arrs" :key="i" :style="{width:arrs[i][0]}">
            <div>
                <img :src="arrs[i][1]" alt="">
                <span class="funsBox-iconSpan">{{arrs[i][2]}}</span>
            </div>
            <div class="funsBoxOne" :style="arrs[i][2]==''?'background:#fafafa':'background:#fff'">  
                <div v-for="(content,k) in arrs[i][3]" :key="k" @click="tz(content.routerLink,content.routerQuery)" >
                    <div>
                        <div>
                            <img :src="content.imgURL" alt="">
                        </div>
                        <div>
                            <a>{{content.title}}</a>
                            <span class="funsBoxTwocontentSpan">{{content.message}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span v-if="tdt_xsny==0">关于同道通管理工具 丨 同道合平台 丨 联系客服     同道合 © 2019     渝IPC备XXXXXXXX号     重庆携同道合文化科技有限公司 © 2019 </span>
    </div>
</template>
<script>
import userDySz from '../../../data/role.js'
export default {
  data () {
    return {
      //对应各自的功能0为功能页   1为企业会员交易  2为个人会员需求发布
      tdt_xsny: 0,
      //功能显示菜单数组   规则：一行100%  比如 49的一个 1%为间隔 则需要一个空的数组 以arr为例子 一行三个则需要一个空数组 一行2个则需要两个空数组
      arrs: []
    }
  },
  methods: {
    tz (link, queryCon) {
      this.$router.push({ path: link, query: { 'userSelect': queryCon } });
    }
  },
  mounted () {
    let user = JSON.parse(sessionStorage.getItem("user"));
    switch (Number.parseInt(user.role)) {
      case 0:
        this.arrs = userDySz.arrs1
        break;
      case 1:
        this.arrs = userDySz.arrs4;
        break;
      case 2:
        this.arrs = userDySz.arrs2;
        break;
      case 3:
        this.arrs = userDySz.arrs3;
        break;
      default:
        break;
    }
  },
}
</script>
<style scoped>
    .suoyou_all{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        /* min-width: 1400px; */
    }
    .funsBox{
        height: auto;
        margin:0 1.5%;
        cursor: pointer;
    }
    .funsBox>div:first-child{
        height: 44px;
        padding: 0 13px;
        background: #fafafa;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .funsBox>div:last-child{
        height: 146px;
        background: #fff;
        box-sizing: border-box;
        padding: 0 13px;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .funsBox-iconSpan{
        padding-left: 8px;
    }
    .funsBoxTwocontentSpan{
        overflow: hidden;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
    }
    .funsBoxOne{
        width: 100%;
    }
    .funsBoxOne>div{
        width: 166px;
        margin-right: 48px;
    }
    .funsBoxOne>div:last-child{
        margin: 0;
    }
    .funsBoxOne>div>div{
        display: flex;
    }
    .funsBoxOne>div>div>div:last-child{
        display: flex;
        flex-direction: column;
        padding-left: 10px;
    }
    .funsBoxOne>div>div>div:last-child>a{
        font-size: 16px;
        color: #000;
    }
    .funsBoxOne>div>div>div:last-child>span{
        font-size: 14px;
        color: #999999;
    }
    .funsBox{
        margin-top: 48px;
    }
    .funsBox+span{
        display: block;
        color: #bbbbbb;
        padding-top: 32px;
        text-align: center;
        background: #f9f9f9;
        margin:0 auto;
    }
</style>