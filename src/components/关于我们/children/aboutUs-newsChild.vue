<template>
    <div class="media_all">
        <div class="ljj_gynr">
          <div class="ljj_gynr_left">
            <div class="ljj_left_context" v-for="(item,key) in newsList" :key="key">
              <template>
                <div class="ljj_left_conlr">
                    <router-link :to="{path:'/gywm/newsny',query:{id:item.newsId}}">
                        <h3>
                            <span>{{item.newsTitle}}</span>
                        </h3>
                        <p>{{item.content}}</p>
                        <div class="ljj_img_box">
                            {{item.newsContent}}
                        </div>
                        <div class="button">
                            <div class="control">
                            <button  v-if="selected==0" class="btn_dz">点赞 {{item.visitorNumber}}</button>
                            <button  v-if="selected==0" class="btn_">
                                <img src="@/assets/imgs/dianzan.png" alt>
                            </button>
                            </div>
                            <span>{{item.newsDt}}</span>
                        </div>
                    </router-link>
                </div>
              </template>
            
              <!-- <template v-else-if="item.type==2">
                <div class="ljj_left_conlr">
                  <router-link to="/gywm/newsny">
                    <h3>
                      <span>{{item.fastName}}</span>
                    </h3>
                    <p>{{item.content}}</p>
                    <div class="button">
                      <div class="control">
                        <button  v-if="selected==0" class="btn_dz">点赞 56</button>
                        <button  v-if="selected==0" class="btn_">
                          <img src="@/assets/imgs/dianzan.png" alt>
                        </button>
                      </div>
                      <span>2019-04-16</span>
                    </div>
                  </router-link>
                </div>
              </template>
              <template v-else="item.type==3">
                <div class="ljj_left_conlr3">
                  <router-link to="/gywm/newsny">
                    <h3>
                      <span>{{item.fastName}}</span>
                    </h3>
                    <div class="ljj_img_box3">
                      <img src="@/assets/imgs/gongyi_07.png" alt>
                      <p>{{item.content}}</p>
                    </div>
                    <div class="button">
                      <div class="control">
                        <button  v-if="selected==-1" class="btn_dz">点赞 56</button>
                        <button  v-if="selected==-1" class="btn_">
                          <img src="@/assets/imgs/dianzan.png" alt>
                        </button>
                      </div>
                      <span>2019-04-16</span>
                    </div>
                  </router-link>
                </div>
              </template> -->
            </div>
          </div>
          <div class="ljj_gynr_reght">
            <div class="ljj_reghtList">
             <!--  <div class="public_title_name">{{title}}</div>
              <ul v-for="(item, index) in footerList" :key="index">
                <a href>
                  <li>{{item.content}}</li>
                </a>
              </ul> -->
              <iframe src="http://isoyu.com/?a=code&type=top" frameborder="0" scrolling="no" width="290" height="300"></iframe>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import {getTdhNews} from "../../api/api"

export default {
    props:['text','select'],
    data() {
        return {
            newsList:[],
            newList: [
                {
                fastName: "公益活动一",
                content:
                    "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
                type: 1,
                time: "2019-04-16"
                },
                {
                fastName: "公益活动二",
                content:
                    "第一梯队毫无疑问的：McKinsey & Company - 麦肯锡公司，昵称大麦，麦府，由James McKinsey教授成立于上世纪，基本上就是咨询界的龙头老大，咨询顾问高大上的代名词，上海分舵好像也是大中华区总舵位于新天地湖滨路企业天地21层。其全球总裁为如雷贯耳的Dominic Barton 鲍达民先生，曾在上海舵执掌多年。",
                type: 2,
                time: "2019-04-16"
                },
                {
                fastName: "公益活动三",
                content:
                    "活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容活动详情的内容...",
                type: 1,
                img: ["", "", ""],
                time: "2019-04-16"
                },
                {
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
            title:"",
            selected:"",
        };
    },
    prop:[
        'msg',
    ],
    created(){
        this.title=this.text[this.select];
        this.selected=this.select;
        getTdhNews().then(res=>{
            res.data.data.forEach((item, index) => {
              item.newsContent = item.newsContent.replace(new RegExp("\S&nbsp;?|<(\S*?)[^>]*>.*?|<.*? />|&nbsp; ",'g'),'');
              let i = item.newsContent.length;
              item.newsContent = item.newsContent.substr(0,380) + (item.newsContent.length < 380 ? '':'......');
            });
            this.newsList=res.data.data
        })
    },
    
}
</script>
<style lang="less" scoped>
  button{
    outline: none; //除去button边框
    border: 0;
  }
// 服务核心内容ZONG
    .ljj_gynr {
        display: flex;
        justify-content: space-between;
        .ljj_gynr_left {
          width: 78%;
          margin-bottom: 50px;
          .ljj_left_context {
            width: 100%;
            background-color: #ffffff;
            margin-bottom: 1rem;
            .ljj_left_conlr {
              padding: 2rem;
              p {
                margin: 0.6rem 0;
                font-size: 1rem;
                color: #888888;
                display: flex;
                align-items: center;
                line-height: 25px;
              }
              //字体
              h3 {
                width: 13rem;
                font-family: HiraginoSansGB-W3;
                font-size: 1rem;
                letter-spacing: 0rem;
                color: #9e0100;
                margin-bottom: 1rem;
                span {
                  font-family: HiraginoSansGB-W3;
                  font-size: 1rem;
                  letter-spacing: 0rem;
                  color: #353535;
                }
              }
              // 图片设定
              .ljj_img_box {
                display: flex;
                justify-content: space-between;
                    color: grey;
              }
              //button布局
              .button {
                display: flex;
                justify-content: space-between;
                margin-top: 2rem;
                .control {
                  display:flex;
                  align-items: center;
                  button {
                    + button {
                      margin-left: 5px;
                    }
                  }
                  .btn_bm {
                    display:block;
                    width: 5.25rem;
                    height: 1.75rem;
                    background-color: #9e0100;
                    border-radius: 3px;
                    color: #ffffff;
                    text-align: center;
                    line-height: 1.75rem;
                    margin-right: 5px
                  }
                  .btn_dz {
                    width: 84px;
                    height: 28px;
                    background-color: #d5bfbe;
                    border-radius: 3px;
                    color: #ffffff;
                    text-align:center;
                    line-height:28px;
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
                letter-spacing: 0px;
                color: #8e6f6f;
              }
            }
          }
        }
        .ljj_gynr_reght {
          width: 21%;
          height: 100%;
          background: #ffffff;
          button {
            width: 20rem;
            height: 2.875rem;
            background-color: #9e0100;
            border-radius: 23px;
            font-size: 1.125rem;
            color: #ffffff;
            border: 0;
            outline: none; //除去button边框
            text-align: center;
            position: relative;
            img{
              position: absolute;
              top:13px;
              left:100px;
            }
          }
          .ljj_reghtList {
            ul li {
              height: auto;
              margin-left: 20px;
              text-align: left;
              font-size: 14px;
              line-height: 36px;
              color: #676767;
            }
          }
        }
    }
    .ljj_left_conlr3 {
    padding: 2rem;
  h3 {
    width: 13rem;
    font-family: HiraginoSansGB-W3;
    font-size: 1rem;
    letter-spacing: 0rem;
    color: #9e0100;
    margin-bottom: 1rem;
    span {
      font-family: HiraginoSansGB-W3;
      font-size: 1rem;
      letter-spacing: 0rem;
      color: #353535;
    }
  }
  .ljj_img_box3 {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0 2rem;
      font-size: 1rem;
      color: #888888;
      line-height: 25px;
    }
  }
  //btn
  .button {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .control {
      display: flex;
      button {
        + button {
          margin-left: 5px;
        }
      }
      .btn_bm {
        display:block;
        width: 5.25rem;
        height: 1.75rem;
        background-color: #9e0100;
        border-radius: 3px;
        color: #ffffff;
        text-align: center;
        line-height: 1.75rem;
        margin-right: 5px
      }
      .btn_dz {
        width: 84px;
        height: 28px;
        background-color: #d5bfbe;
        border-radius: 3px;
        color: #ffffff;
        text-align:center;
        line-height:28px;
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
  .ljj_reghtList{
    padding-bottom: 30px;
  }
  .public_title_name{
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 28px;
    letter-spacing: 0px;
    color: #353535;
    margin-left: 20px;
    padding-top: 25px
  }
@media screen and (max-width: 415px) {
  .media_all,.media_all>div,.media_all>div>div,.media_all>div>div>div{
    width: 100% !important;
    padding: 0 4px;
  }
  .ljj_gynr_left,.ljj_left_context{
    margin: 0 !important;
  }
  .ljj_left_conlr{
    padding: 0 !important;
    margin-bottom: 16px;
  }
  .ljj_gynr_reght{
      display: none;
  }
  .ljj_left_context{
    overflow: hidden;
  }
  .ljj_left_conlr>a>h3{
    width: 100% !important;
    text-align: center;
    padding-top: 16px;
  }
  .ljj_left_conlr>a>p{
    text-indent: 2em;
  }
  .ljj_img_box{
    display: flex;
    flex-direction: column;
  }
  .ljj_img_box>img{
    width: auto;
    height: auto;
  }
  .ljj_img_box>img:not(:first-child){
    margin-top: 16px;
  }
  .ljj_left_conlr>a>.button{
    margin-top: 16px !important;
    padding: 0 8px;
  }
  .ljj_left_conlr3{
    padding: 0;
  }
  .ljj_left_conlr3>a>h3{
    width: 100% !important;
    text-align: center;
  }
  .ljj_left_conlr3>a>.ljj_img_box3{
    display: flex;
    flex-direction: column;
  }
  .ljj_left_conlr3>a>.ljj_img_box3>p{
    margin: 0;
    text-indent: 2em;
  }
  .ljj_left_conlr3>a>.button{
    margin-top:0 !important;
    margin-bottom: 30px;
    padding-right: 8px;
  }
}
</style>
