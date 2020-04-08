<template>
  <div>
    <div class="ljj_gynr">
      <div class="ljj_gynr_left">
        <div class="ljj_left_context"
             v-for="(item,key) in newList"
             :key="key">
            <template>
              <div class="ljj_left_conlr">
                <router-link to="/SaidSchoolBusNew/gyhdny">
                    <h3 :class="item.lastName">
                      【{{item.lastName}}】
                      <span>{{item.fastName}}</span>
                    </h3>
                    <p>{{item.content}}</p>
                    <div class="ljj_img_box">
                      <div>
                        <img src="@/assets/imgs/gongyi_01.png" alt>
                      </div>
                      <div>
                        <img src="@/assets/imgs/gongyi_02.png" alt>
                      </div>
                      <div>
                        <img src="@/assets/imgs/gongyi_03.png" alt>
                      </div>
                    </div>
                </router-link>
                <div class="button">
                  <div class="control">
                    <button class="btn_bm" @click="clickSignUp">立即报名</button>
                    <button class="btn_dz" @click="clickFabulous">点赞 56</button>
                    <button class="btn_" @click="clickFabulousIcon">
                      <img src="@/assets/imgs/dianzan.png" alt>
                    </button>
                    <span @click="clickComment">
                      <img src="@/assets/imgs/wenjianjia.png"
                          style="margin-right:5px">28 条评论
                    </span>
                  </div>
                  <span>
                    <font v-if="selected!=0"
                          style="margin-right:35px">重庆城银科技</font> 2019-04-16
                  </span>
                </div>
              </div>
            </template>
        </div>
      </div>
      <div class="ljj_gynr_reght">
        <div class="ljj_reghtList">
          <div class="public_title_name">{{title}}</div>
          <ul>
            <li v-for="(item, index) in footerList" :key="index">
              <a href="javascript:;">
                {{item.content}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['text', 'select'],
  data () {
    return {
      newList: [
        {
          lastName: "火热报名中",
          fastName: "公益活动一",
          content:
            "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
          type: 1,
          time: "2019-04-16"
        },
        {
          lastName: "火热报名中",
          fastName: "公益活动二",
          content:
            "第一梯队毫无疑问的：McKinsey & Company - 麦肯锡公司，昵称大麦，麦府，由James McKinsey教授成立于上世纪，基本上就是咨询界的龙头老大，咨询顾问高大上的代名词，上海分舵好像也是大中华区总舵位于新天地湖滨路企业天地21层。其全球总裁为如雷贯耳的Dominic Barton 鲍达民先生，曾在上海舵执掌多年。",
          type: 2,
          time: "2019-04-16"
        },
        {
          lastName: "火热报名中",
          fastName: "公益活动三",
          content:
            "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
          type: 1,
          img: ["", "", ""],
          time: "2019-04-16"
        },
        {
          lastName: "报名已结束",
          fastName: "公益活动四",
          content:
            "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
          type: 3,
          imgs: "",
          time: "2019-04-16"
        }
      ],
      footerList: [
        { content: "顶尖咨询公司的政府咨询部分是怎样的？" },
        { content: "各类咨询公司的作用？" },
        { content: "企业雇佣咨询公司是否真的有效？" },
        { content: "四川一真企业管理咨询公司是？" },
        { content: "聘请专业的咨询公司对企业发展的好处？" },
        { content: "咨询公司存在的意义？" },
        { content: "咨询公司需要上市吗？" },
        { content: "咨询公四川一真企业管理咨询公司是？" }
      ],
      title: "",
      selected: "",
    };
  },
  prop: [
    'msg',
  ],
  created () {
    this.title = this.text[this.select];
    this.selected = this.select;
  },
  methods: {
    clickFabulous(){
      console.log('点击了点赞')
    },
    clickFabulousIcon(){
      console.log('点击了点赞Icon')
    },
    clickSignUp(){
      console.log('点击了报名')
    },
    clickComment(){
      console.log('点击了评论')
    }
  },
}
</script>
<style lang="less" scoped>
button {
  outline: none; //除去button边框
  border: 0;
}
// 服务核心内容ZONG
.ljj_gynr {
  display: flex;
  justify-content: space-between;
  .ljj_gynr_left {
    // width: 66rem;
    width: 70%;
    margin-bottom: 50px;
    overflow: hidden;
    .ljj_left_context {
      width: 100%;
      background-color: #ffffff;
      margin-bottom: 1rem;
      .ljj_left_conlr {
        padding: 1rem;
        p {
          // margin: 0.6rem 0;
          font-size: 1rem;
          color: #888888;
          display: flex;
          align-items: center;
          line-height: 1.5rem;
        }
        //字体
        h3 {
          // width: 13rem;
          font-family: HiraginoSansGB-W3;
          font-size: 1rem;
          letter-spacing: 0rem;
          color: #9e0100;
          line-height: 2rem;
          span {
            font-family: HiraginoSansGB-W3;
            font-size: 1rem;
            letter-spacing: 0rem;
            color: #353535;
          }
        }
        .报名已结束{
          color: #676767;
        }
        // 图片设定
        .ljj_img_box {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          >div{
            width: calc(100%/3);
            display: flex;
            align-items: center;
            justify-content: center;
            >img{
              width: 305px;
              height: 139px;
            }
          }
        }
        //button布局
        .button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          height: auto;
          .control {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
              + button {
                margin-left: 0.5rem;
              }
            }
            .btn_bm {
              display: block;
              width: 5rem;
              background-color: #9e0100;
              border-radius: 4px;
              color: #ffffff;
              text-align: center;
              line-height: 1.75rem;
              margin-right: 0.5rem;
              white-space: nowrap;
            }
            .btn_dz {
              width: 3rem;
              background-color: #d5bfbe;
              border-radius: 3px;
              color: #ffffff;
              text-align: center;
              line-height: 1.25rem;
              white-space: nowrap;
            }
            .btn_ {
              width: 1.25rem;
              background-color: #d5bfbe;
              border-radius: 3px;
              white-space: nowrap;
            }
            span {
              text-align: center;
              display: block;
              height: auto;
              margin-left: 0.5rem;
              letter-spacing: 0px;
              color: #8e6f6f;
              white-space: nowrap;
            }
          }
        }
        span {
          display: block;
          letter-spacing: 0px;
          color: #8e6f6f;
        }
      }
    }
  }
  .ljj_gynr_reght {
    // width: 20rem;
    width: 26%;
    height: 100%;
    background: #ffffff;
    button {
      // width: 20rem;
      height: 2.875rem;
      background-color: #9e0100;
      border-radius: 23px;
      font-size: 1.125rem;
      color: #ffffff;
      border: 0;
      outline: none; //除去button边框
      text-align: center;
      position: relative;
      img {
        position: absolute;
        top: 13px;
        left: 100px;
      }
    }
    .ljj_reghtList {
      padding: 1rem;
      ul li {
        width: 100%;
        height: auto;
        // margin-left: 20px;
        text-align: left;
        font-size: 14px;
        line-height: 36px;
        a{
          color: #676767;
        }
      }
    }
  }
}
.ljj_left_conlr3 {
  padding: 1rem;
  h3 {
    font-size: 1rem;
    letter-spacing: 0rem;
    color: #9e0100;
    line-height: 2rem;
    span {
      font-size: 1rem;
      letter-spacing: 0rem;
      color: #353535;
    }
  }
  .ljj_img_box3 {
    display: flex;
    justify-content: space-around;
    p {
      font-size: 1rem;
      color: #888888;
      display: block;
      width: 70%;
      line-height: 1.5rem;
    }
    img{
      width: 305px;
      height: 139px;
    }
  }
  //btn
  .button {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: auto;
      button {
        + button {
          margin-left: 5px;
        }
      }
      .btn_bm {
        display: block;
        width: 5rem;
        background-color: #9e0100;
        border-radius: 3px;
        color: #ffffff;
        text-align: center;
        line-height: 1.75rem;
        margin-right: 0.5rem;
      }
      .btn_dz {
        width: 4rem;
        background-color: #d5bfbe;
        border-radius: 3px;
        color: #ffffff;
        text-align: center;
        line-height: 1.25rem;
      }
      .btn_ {
        width: 32px;
        height: 28px;
        background-color: #d5bfbe;
        border-radius: 3px;
      }
      span {
        text-align: center;
        margin-left: 15px;
        height: 0.8rem;
        font-family: HiraginoSansGB-W3;
        font-size: 0.875rem;
        letter-spacing: 0px;
        color: #8e6f6f;
      }
    }
  }
  span {
    height: 0.68rem;
    font-family: HiraginoSansGB-W3;
    font-size: 0.875rem;
    line-height: 2.25rem;
    letter-spacing: 0px;
    color: #8e6f6f;
  }
}
.public_title_name {
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0px;
  color: #353535;
}

</style>
