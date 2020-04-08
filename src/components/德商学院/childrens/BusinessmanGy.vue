<template>
  <div class="dsgy">
    <!-- 下面模块 总的大小 -->
    <div class="ljj_gyActiveBj">
      <!--中间板块-->
      <div class="ljj_gyActive">
        <div class="ljj_title">
          <span>公益活动</span>
          <div style="position: relative;">
            <input type="text" placeholder="请输入关键词搜索">
            <img src="@/assets/imgs/search.png" alt>
          </div>
        </div>
        <busin_public_ :text=title :select=selected></busin_public_>
      </div>
    </div>
  </div>
</template>

<script>
import busin_public_ from '../../public/BusinPublic.vue'
export default {
  data() {
    return {
      title:["公益热搜"],
      selected:0
    }
  },
  components: {
      busin_public_
  },
};
</script>
<style lang="less" scoped>
button{
  outline: none; //除去button边框
  border: 0;
}
.dsgy {
  width: 100%;
  .ljj_gyActiveBj {
    width: 100%;
    background: #f6f6f6;
    .ljj_gyActive {
      margin: 0 auto;
      // width: 88rem;
      width: 73%;
      /*min-width: 1410px;*/
      border: solid #f6f6f6 1px;
      .ljj_title {
        // width: 64rem;
        display: flex;
        justify-content: space-between;
        padding: 2rem 0 1rem 1rem;
        span {
          width: 8rem;
          font-family: HiraginoSansGB-W3;
          font-size: 1.5rem;
          height: 1.75rem;
          line-height: 1.75rem;
          letter-spacing: 0rem;
        }
        input {
          padding-left: 10px;
          width: 14rem;
          height: 1.5rem;
          background-color: #ffffff;
          border-radius: 1.25rem;
          border: 0; // 去除未选中状态边框
          outline: none; // 去除选中状态边框
          //background-color: rgba(0, 0, 0, 0); // 透明背景
          font-size: 16px;
          position: relative;
          text-indent:5px
        }
        img {
          position: absolute;
          // top: (36px-20px)/4;
          margin-left: -1.5rem;
        }
      }
    }
  }
}   
    @media screen and (max-width: 415px) {
       .ljj_gyActive{
         width: 414px !important;
         min-width: 414px !important;
         overflow: hidden;
         box-sizing: border-box;
       }  
       .ljj_title{
         width: 100% !important;
         box-sizing: border-box;
         margin: 16px 0 !important;
         padding: 0 0 0 16px
       }
       .ljj_title input,.ljj_title input+img{
         display: none;
       }
       .ljj_title span{
         font-size: 18px !important;
       }
    }
</style>
