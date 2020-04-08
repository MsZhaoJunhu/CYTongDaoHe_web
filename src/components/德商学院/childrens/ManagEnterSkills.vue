<template>
    <div class="dsgy">
         <!-- 下面模块 总的大小 -->
    <div class="ljj_gyActiveBj">
      <!--中间板块-->
      <div class="ljj_gyActive">
        <div class="ljj_title">
          <ul>
            <li @click="clickTitle(0)" :class="titleNumber==0?'active':''">团队培训</li>
            <li @click="clickTitle(1)" :class="titleNumber==1?'active':''">共享学习</li>
            <li @click="clickTitle(2)" :class="titleNumber==2?'active':''">携同拓展</li>
            <li @click="clickTitle(3)" :class="titleNumber==3?'active':''">德商论坛</li>
          </ul>
          <div  style="position: relative;">
            <input type="text" placeholder="请输入关键词搜索">
            <img src="@/assets/imgs/search.png" >
          </div>
        </div>
        <div class="ljj_gynr">
          <div class="ljj_gynr_left">
            <div class="ljj_left_context">
              <div class="ljj_left_conlr">
                  <img src="@/assets/imgs/xy_01.png" class="img_show" alt>
                  <div>
                    <div>
                      <h3>
                        【火热报名中】
                        <span>讲座标题一</span>
                      </h3>
                      <p>主讲人:主讲人名称</p>
                      <div class="thisMy">
                        撒大啊大大  大苏打阿达的爱的爱的啊大啊爱的啊啊大爱的阿达啊啊撒大阿斯顿啊大大啊水水水水水水水水水水水水水水水水水水
                      </div>
                   </div>
                   <div class="button">
                    <div class="control">
                      <router-link v-if="selected!=-1" to="/SaidSchoolBusNew/ztjzny" class="btn_dz link_a">查看详情</router-link>
                      <button class="btn_dz">点赞&nbsp;&nbsp;56</button>
                      <button class="btn_ ">
                        <img src="@/assets/imgs/dianzan.png" alt>
                      </button>
                      <span class="margin-right5">
                        <img src="@/assets/imgs/wenjianjia.png">2810条评论
                      </span>
                    </div>
                       <span>2019-04-16</span>
                    </div>
                  </div>
              </div>
            </div>
            <div class="ljj_left_context">
              <div class="ljj_left_conlr">
                  <img src="@/assets/imgs/xy_01.png" class="img_show" alt>
                  <div>
                    <div>
                      <h3>
                        【火热报名中】
                        <span>讲座标题一</span>
                      </h3>
                      <p>主讲人:主讲人名称</p>
                      <div class="thisMy">
                        撒大啊大大  大苏打阿达的爱的爱的啊大啊爱的啊啊大爱的阿达啊啊撒大阿斯顿啊大大啊水水水水水水水水水水水水水水水水水水
                      </div>
                   </div>
                   <div class="button">
                    <div class="control">
                      <router-link v-if="selected!=-1" to="/SaidSchoolBusNew/ztjzny" class="btn_dz link_a margin-right5">查看详情</router-link>
                      <button class="btn_dz margin-right5">点赞&nbsp;&nbsp;56</button>
                      <button class="btn_  margin-right5">
                        <img src="@/assets/imgs/dianzan.png" alt>
                      </button>
                      <span class=" margin-right5">
                        <img src="@/assets/imgs/wenjianjia.png" style="margin-right:5px">2810 条评论
                      </span>
                    </div>
                       <span>2019-04-16</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="ljj_gynr_reght">
            <div class="ljj_reghtList">
              <ul>
                <li>学习热搜</li>
                <a href>
                  <li>顶尖咨询公司的政府咨询部分是怎样的？</li>
                </a>
                <a href>
                  <li>各类咨询公司的作用？</li>
                </a>
                <a href>
                  <li>企业雇佣咨询公司是否真的有效？</li>
                </a>
                <a href>
                  <li>四川一真企业管理咨询公司是？</li>
                </a>
                <a href>
                  <li>聘请专业的咨询公司对企业发展的好处？</li>
                </a>
                <a href>
                  <li>咨询公司存在的意义？</li>
                </a>
                <a href>
                  <li>咨询公司需要上市吗？</li>
                </a>
                <a href>
                  <li>四川一真企业管理咨询公司是？</li>
                </a>
                <li> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      yxList: [
        {
          lastName: "【火热报名中】",
          fastName: "游学项目一",
          content:
            "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
          type: 1,
          time: "2019-04-16"
        },
        {
          lastName: "【火热报名中】",
          fastName: "游学项目二",
          content:
            "第一梯队毫无疑问的：McKinsey & Company - 麦肯锡公司，昵称大麦，麦府，由James McKinsey教授成立于上世纪，基本上就是咨询界的龙头老大，咨询顾问高大上的代名词，上海分舵好像也是大中华区总舵位于新天地湖滨路企业天地21层。其全球总裁为如雷贯耳的Dominic Barton 鲍达民先生，曾在上海舵执掌多年。",
          type: 2,
          time: "2019-04-16"
        },
        {
          lastName: "【火热报名中】",
          fastName: "游学项目三",
          content:
            "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
          type: 1,
          img: ["", "", ""],
          time: "2019-04-16"
        },
        {
          lastName: "【报名以结束】",
          fastName: "游学项目四",
          content:
            "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
          type: 3,
          imgs: "",
          time: "2019-04-16"
        }
      ],
      selected:1,
      titleNumber:0,
    };
  },
  methods: {
    clickTitle(index){
      this.titleNumber=index;
      // 根据index请求对应数据
    }
  },
};
</script>

<style lang="less" scoped>
    button{
      outline: none; //除去button边框
      border: 0;
    }
.dsgy {
  .ljj_gyActiveBj {
    width: 100%;
    background: #f6f6f6;
    .ljj_gyActive {
      margin: 0 auto;
      width: 73%;
      overflow: hidden;
      border: solid #f6f6f6 1px;
      .ljj_title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0rem;
        box-sizing: border-box;
        ul {
          display: flex;
          // 第一个元素不变
          li {
            font-size: 24px;
            color: #bbbbbb;
            + li {
              margin-left: 24px;
            }
          }
          li:hover {
            color: #191919;
            cursor: pointer;
          }
          .active{
            color: #000;
          }
        }
        input {
          width: 14rem;
          height: 1.5rem;
          background-color: #ffffff;
          border-radius: 1.25rem;
          border: 0; // 去除未选中状态边框
          outline: none; // 去除选中状态边框
          //background-color: rgba(0, 0, 0, 0); // 透明背景
          font-size: 20px;
          position: relative;
          text-indent: 1em;
          display: flex;
        }
        img {
          position: absolute;
          top: 8px;
          right: 10px;
          cursor: pointer;
        }
      }
      // 服务核心内容ZONG
      .ljj_gynr {
        display: flex;
        justify-content: space-between;
        .ljj_gynr_left {
          width: 70%;
          .ljj_left_context {
            width: 100%;
            background-color: #ffffff;
            margin-bottom: 1rem;
            .ljj_left_conlr {
              padding: 1rem;
              display: flex;
              // border: 1px solid #000;
              .img_show {
                width: 321px;
                height: 262px;
              }
              .thisMy{
                height: 100%;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-line-clamp:8;
                -webkit-box-orient:vertical;
                border: 0px solid #00f;
                color: #bbbbbb;
                font-size: 14px;
              }
              > div {
                padding: 0px 1rem;
                box-sizing: border-box;
                border: 1x solid #0f0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                >div:first-child{
                height: 80%;
                }
                >div:last-child{
                  height: 20%;
                }
                p {
                  font-size: 14px;
                  margin-bottom: 13px;
                  color: #bbbbbb;
                }
                .button {
                  width: 100%;
                  height: auto;
                  display: flex;
                  margin: 0;
                  justify-content: space-between;
                  // border: 1px solid #0f0;
                }
                > span {
                  font-size: 14px;
                  height: 1rem;
                  display: inline-block;
                  line-height: 1rem;
                  color: #888888;
                  word-wrap: break-word;
                }
                h3 {
                  font-size: 1rem;
                  letter-spacing: 0rem;
                  color: #9e0100;
                  margin-bottom: 1rem;
                  span {
                    font-size: 1rem;
                    letter-spacing: 0rem;
                    color: #353535;
                  }
                }
              }
              //字体
              // 图片设定
              .ljj_img_box {
                display: flex;
                justify-content: space-between;
              }
              //button布局
              .button {
                display: flex;
                align-items: center;
                justify-content: space-between;
                bottom: 0px;
                margin-top: 10rem;
                border: 1px solid #000;
                .control {
                  .btn_bm {
                    background-color: #9e0100;
                    border-radius: 3px;
                    color: #ffffff;
                  }
                  .btn_dz {
                    background-color: #d5bfbe;
                    border-radius: 3px;
                    color: #ffffff;
                    text-align: center;
                    padding: 4px 8px;
                    margin: 0 4px;
                    line-height: 36px;
                    cursor: pointer;
                  }
                  .btn_dz:hover{
                    background: #9e0100;
                  }
                  .btn_ {
                    width: 36px;
                    height: 32px;
                    margin: 0 4px;
                    background-color: #d5bfbe;
                    border-radius: 3px;
                    cursor: pointer;
                  }
                  .btn_:hover{
                    background: #9e0100;
                  }
                  span {
                    font-size: 0.875rem;
                    line-height: 2.25rem;
                    letter-spacing: 0px;
                    color: #8e6f6f;
                    margin: 0 4px;
                    >img{
                      margin-right: 4px;
                    }
                  }
                  .link_a {
                    padding: 8px 8px;
                  }
                  .link_a:hover{
                    background: #9e0100;
                  }
                  .margin-right5{
                    cursor: pointer;
                  }
                }
              }
              .button *{
                white-space: nowrap;
              }
              span {
                width: 5.18rem;
                height: 0.68rem;
                font-size: 0.875rem;
                letter-spacing: 0px;
                color: #8e6f6f;
              }
            }
          }
        }
        .ljj_gynr_reght {
          width: 25%;
          height: 100%;
          background: #ffffff;
          .ljj_reghtList {
            padding: 1rem 0;
            ul > li {
              font-size: 24px;
              letter-spacing: 0px;
              color: #353535;
              line-height: 50px;
            }
            ul > a > li {
              font-size: 16px;
              line-height: 40px;
              letter-spacing: 0px;
              color: #676767;
            }
            ul>*{
              display: block;
            }
            ul li{
              text-indent: 1em;
            }
          }
        }
      }
    }
  }
}
</style>
