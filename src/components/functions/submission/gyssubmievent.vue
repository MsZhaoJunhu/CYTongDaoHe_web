<template>
  <div class="gysaddevent">
    <div style="width:100%;padding: 16px 0 16px 16px;margin-top:32px;">
      <a @click="clickToRouter" class="gysaddevent_title">基本内容</a @click="clickToRouter">
    </div>
    <div class="gysaddevent_publishing">
      <p class="gysaddevent_tip">项目阶段验收</p>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务时间：</span>
        <el-date-picker
          type="daterange"
          v-model="timeAll"
          class="gysaddevent_publishing_input"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>参与人员：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          placeholder="请输入"
          v-model="participant"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>项目小组成员：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="itemParticipant"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务内容：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="serverContent"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>输出成果：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="achievements"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>上传附件：</span>
        <el-upload
          class="upload-demo"
          style="display:inline-block;vertical-align:top;"
          action="http://42.51.16.10:8080/myTest/upload/common/file"
          :limit="1"
          :on-success="successUpload"
        >
          <el-button size="small" style="background: #fff;color: #333;"
            >点击上传</el-button
          >
          <div slot="tip" class="el-upload__tip">
            支持扩展名：.rar .zip .doc .docx .pdf .jpg...
          </div>
        </el-upload>
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>特别说明：</span>
        <span style="width:90%;vertical-align:top;"
          >以上服务内容确认完毕，即代表甲方针对上述服务阶段/服务内容的确认完毕，如甲方对输出成果还有疑虑，项目组将根据甲方意见，结合自己的专业判断对该方案进行修订完善并对实施情况做出跟踪辅导，如还有任何疑问，请向同道合平台进行反馈或投诉，在此也感谢甲方对乙方以及同道合平台的支持和配合</span
        >
      </div>
      <div
        class="gysaddevent_publishing_inputrow gysaddevent_publishing_button"
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
  name: '',
  data() {
    return {
      contractId:this.$route.query.contractId,
      eventId:this.$route.query.stage,
      type:this.$route.query.type,
      timeAll:"",
      file1:"",
      pickerOptions: { // 限制收货时间不让选择今天以前的
      　　disabledDate(time) {
      　　　　return time.getTime() > Date.now() - 24 * 60 * 60 * 1000
      　　}
      },
      participant:"",
      itemParticipant:"",
      serverContent:"",
      achievements:"",
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
    successUpload (response) {
      this.file1 = response.type;
      this.$confirm(`成功上传`);
    },
    submit(){
      startServer({
        "contractId": this.contractId,
        "eventId": this.eventId,
        "thisType": this.type,
        "serverTime":this.timestampToTime(this.timeAll[0])+'~'+this.timestampToTime(this.timeAll[1]),
        "serverPeopel":this.participant,
        "serverProgrammer":this.itemParticipant,
        "serverOut":this.achievements,
        "serverFile":this.file1,
        "serverContent":this.serverContent
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

    },
  },
  watch: {
    fileList(val){
      console.log(val)
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
  cursor: pointer;
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
.gysaddevent_publishing_inputrow > button {
  margin-top: 2rem;
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
@media screen and (max-width: 1366px) {
  .gysaddevent_publishing_input_textarea {
    width: 87%;
  }
}
.gysaddevent_publishing_input_textarea {
  width: 90%;
  height: 72px;
  background: #f6f6f6;
  vertical-align: top;
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
/deep/.gysaddevent_publishing_input_textarea .el-textarea__inner {
  height: 72px;
  background: #f6f6f6;
  border: none;
  border-radius: 0;
  resize: none;
}
.gysaddevent_publishing_button > button{
  cursor: pointer;
}
</style>
