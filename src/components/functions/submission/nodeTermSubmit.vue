<template>
  <div class="gysaddevent">
    <div style="width:100%;padding: 16px 0 16px 16px;margin-top:32px;">
      <a @click="clickToRouter" class="gysaddevent_title">服务信息</a>
    </div>
    <div class="gysaddevent_publishing">
      <p class="gysaddevent_tip">项目结项验收</p>
      <div class="gysaddevent_publishing_inputrow">
        <span>项目经理：</span>
        <el-input
          class="gysaddevent_publishing_input"
          type="text"
          placeholder="请输入"
          v-model="itemManager"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>整体验收时间：</span>
        <el-date-picker
          class="gysaddevent_publishing_input"
          type="date"
          placeholder="选择日期"
          v-model="wholeTime"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>质保期：</span>
        <el-date-picker
          type="daterange"
          class="gysaddevent_publishing_input"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          v-model="qualityTime"
        >
        </el-date-picker>
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>质保承诺：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          placeholder="请输入"
          v-model="quality"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>致：</span>
        <span style="width:91%;vertical-align:top;"
          >（甲方）我司已按合同要求履行质保期承诺，并由三方（平台）确认合格，请给予结项。</span
        >
      </div>
      <div
        class="gysaddevent_publishing_inputrow"
        style="justify-content: center"
      >
        <button @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  startServer
} from "@/components/api/api";
export default {
  data() {
    return {
      contractId:this.$route.query.contractId,
      // eventId:this.$route.query.stage,
      eventId:-1,
      type:this.$route.query.type,
      pickerOptions: { // 限制收货时间不让选择今天以前的
      　　disabledDate(time) {
      　　　　return time.getTime() > Date.now() - 24 * 60 * 60 * 1000
      　　}
      },
      itemManager:"",
      wholeTime:"",
      qualityTime:"",
      quality:"",
    }
  },
  methods: {
    timestampToTime (timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = this.changes(date.getDate());
      return Y + M + D;
    },
    changes (t) {
      if (t < 10) {
        return "0" + t;
      } else {
        return t;
      }
    },
    clickToRouter(){
      this.$router.push({path:"itemSubmission",query:{"contractId":this.contractId}})
    },
    submit(){
      startServer({
        "contractId": this.contractId,
        "eventId": this.eventId,
        "thisType": this.type,
        "projectManager": this.itemManager,
        "qualityTime": this.timestampToTime(this.qualityTime),
        "qualityPromisee": this.quality,
        "serverTime": this.timestampToTime(this.wholeTime[0])+"~"+this.timestampToTime(this.wholeTime[1]),
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$message({
              showClose: true,
              message: res.msg,
              type: "success"
          });
          this.clickToRouter();
        }
      });
    }
  }
}
</script>

<style scoped>
.gysaddevent {
  background: #fafafa;
  width: 80%;
  margin: 0 auto;
}
.gysaddevent_title {
  display: block;
  width: auto;
  color: #9e0100;
  font-weight: bolder;
  box-sizing: border-box;
  width: 150px;
}
.gysaddevent_title:before {
  content: '<';
  margin-right: 8px;
}
.gysaddevent_publishing {
  width: 100%;
  height: auto;
  margin-bottom: 5rem;
  box-sizing: border-box;
  padding: 20px 28px;
  background: #fff;
}
.gysaddevent_tip {
  font-size: 18px;
  font-weight: 700;
}
.gysaddevent_publishing_inputrow {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
}
.gysaddevent_publishing_inputrow > span:first-child {
  flex: 0;
  min-width: 100px;
}
.gysaddevent_publishing_inputrow > span {
  display: inline-block;
  font-size: 14px;
}
.gysaddevent_publishing_input {
  width: 30%;
  height: 32px;
  background: #f6f6f6;
  border: none;
  border-radius: 0;
}
.gysaddevent_publishing button:last-child {
  width: 410px;
  height: 42px;
  background: #a00000;
  color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 16px;
}

/deep/.gysaddevent_publishing_input .el-input__inner {
  height: 32px;
  background: #f6f6f6;
  border: none;
  border-radius: 0;
}
/deep/.gysaddevent_publishing_input .el-range-input {
  background: #f6f6f6;
}
/deep/.gysaddevent_publishing_input .el-range-separator,
/deep/.gysaddevent_publishing_input .el-range__icon {
  line-height: 30px;
  color: #606266;
}
.gysaddevent_publishing_input_textarea {
  width: 90%;
  height: 72px;
  background: #f6f6f6;
  vertical-align: top;
}
/deep/.gysaddevent_publishing_input_textarea .el-textarea__inner {
  height: 72px;
  background: #f6f6f6;
  border: none;
  border-radius: 0;
  resize: none;
}
.gysaddevent_publishing_input /deep/ .el-input__prefix>i{
  line-height: normal;
}
@media screen and (max-width: 1366px) {
  .gysaddevent_publishing_input_textarea {
    width: 87%;
  }
}
</style>
