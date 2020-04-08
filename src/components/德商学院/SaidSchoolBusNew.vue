<template>
  <div class="包裹">
    <header_ :select_index="5"/>
    <div class="ljj_nr" >
      <div class="ljj_banner">
        <img src="../../assets/imgs/banner_7_02.png" class="banner-img" alt>
      </div>
      <!--中间内容 -->
      <div class="ljj_content" >
        <div class="ljj_img" >
        <router-link to="/SaidSchoolBusNew/BusinessmanGy">
          <div class="ljj_imgInfo" @click="show(0)">
            <div class="ljj_imgAndtext dsgy">
              <img src="../../assets/imgs/ds_tb_06.png" v-show="saidSchool!=0" alt="">
              <img src="../../assets/imgs/ds_tb_06red.png" v-show="saidSchool==0" alt="">
              <p class="ljj_p2 p_active">德商公益</p>
            </div>
          </div>
          </router-link>
          <router-link to="/SaidSchoolBusNew/SouthBusinessman">
            <div class="ljj_imgInfo ljj_imgInfo2" @click="show(1)">
              <div class="ljj_imgAndtext shyd">
                <img src="../../assets/imgs/ds_tb_08.png" v-show="saidSchool!=1" alt="">
                <img src="../../assets/imgs/ds_tb_08red.png" v-show="saidSchool==1" alt="">
                <p class="ljj_p2">商海有道</p>
              </div>
            </div>
          </router-link>
          <router-link to="/SaidSchoolBusNew/ManagEnterSkills">
            <div class="ljj_imgInfo" @click="show(2)">
              <div class="ljj_imgAndtext yqys">
                <img src="../../assets/imgs/ds_tb_10.png" v-show="saidSchool!=2" alt="">
                <img src="../../assets/imgs/ds_tb_10red.png" v-show="saidSchool==2" alt="">
                <p class="ljj_p2">驭企有术</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <router-view></router-view>
      <toast class="toastAll"></toast>
      <toast2 class="toastAll"></toast2>
    </div>
    <footer_ />
  </div>
</template>
<script>
import toast from '../弹窗/toast.vue'
import toast2 from '../弹窗/toast2.vue'
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
export default {
  data(){
    return{
      saidSchool:0,
    } 
  }
  ,methods:{
    show(index){
      this.saidSchool=index;
    },
  },
    components: {
        toast,
        toast2,
        header_,
        footer_,
    },

};
</script>
<style lang="less" scoped>
button{
  outline: none; //除去button边框
  border: 0;
}
.banner-img{
    display: block;
    width: 100%
}
.ljj_nr {
  // 轮播
  // 图片内容
  .ljj_content {
    //margin-bottom: -20px;
    width: 100%;
    background-color: #ffffff;
    .ljj_img {
      // width: 88rem;
      width: 73%;
      height: 13rem;
      margin: 0 auto;
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      border: solid 0rem #ebebeb;
      >a{
        width: ceil(100%/3);
        display: inline-block;
        overflow: hidden;
      }
      .ljj_imgInfo {
        //width: 30rem;
        // height: 13rem;
        height: 100%;
        background-color: #ffffff;
        border: solid 1px #ebebeb;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .ljj_imgAndtext {
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          // margin: 3rem 12.1rem 3rem 12rem;
          >img{
            width: 74px;
            height: 69px;
          }
          .p_active{
            width: 5rem;
            font-family: HiraginoSansGB-W3;
            font-weight: normal;
            font-stretch: normal;
            line-height: 2rem;
            letter-spacing: 0rem;
            text-align: center;
            font-size: 20px;
            color: #9e0100;
          }
          .ljj_p2 {
            width: 5rem;
            font-family: HiraginoSansGB-W3;
            font-weight: normal;
            font-stretch: normal;
            line-height: 2rem;
            letter-spacing: 0rem;
            color: #5a5a5a;
            text-align: center;
            font-size: 20px;
          }
        }
      }
      .ljj_imgInfo2{
        border-left: 0px;
        border-right: 0px;
      }
      // .borderLeftRight0{
      //   border-left: 0px;
      //   border-right: 0px;
      // }
    }
  }
  //下面总体内容
  .ljj_sidebar img {
    position: fixed;
    right: 77px;
    bottom: 330px;
  }
}
.toastAll{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
}
  @media screen and (max-width: 415px) {
  .ljj_nr {
    .ljj_content {
      .ljj_img {
        width: auto;
        height: auto;
        margin: 0;
        display: flex;
        margin: 16px 0;
        justify-content: space-evenly;
        .ljj_imgInfo {
          height: auto;
          background-color: #ffffff;
          border: solid 1px #ebebeb;
          box-sizing: border-box;
          .ljj_imgAndtext {
            height: auto;
            margin: 0;
            .ljj_p2 {
              width: 5rem;
              font-family: HiraginoSansGB-W3;
              font-weight: normal;
              font-stretch: normal;
              line-height: 2rem;
              letter-spacing: 0rem;
              color: #5a5a5a;
              text-align: center;
              font-size: 20px;
            }
            .p_active{
              color: #9e0100;
            }
          }
        }
        // .borderLeftRight0{
        //   border-left: 0px;
        //   border-right: 0px;
        //   }
        }
      }
    }
    
  }
</style>
