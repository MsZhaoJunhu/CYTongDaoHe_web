<template>
  <div class="gysaddevent">
    <div style="width:100%;padding: 16px 0 16px 16px;margin-top:32px;">
      <a @click="clickToRouter" class="gysaddevent_title">服务信息</a>
    </div>
    <div class="gysaddevent_publishing">
      <p class="gysaddevent_tip">基本内容</p>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务主题：</span>
        <el-input
          class="gysaddevent_publishing_input"
          type="text"
          v-model="serverTheme"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务时间：</span>
        <el-date-picker
          type="daterange"
          class="gysaddevent_publishing_input"
          v-model="timeAll"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务地点：</span>
        <el-input
          class="gysaddevent_publishing_input"
          type="text"
          v-model="serverAdress"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>参与人员：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="participatePerson"
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
        <span>输出结果：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="outputResult"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>亟待解决问题：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="outputProblem"
          placeholder="请输入"
        />
      </div>
      <div
        style="width:97%;height:1px;background:#d3d3d3;overflow:hidden;margin-bottom:20px;"
      ></div>
      <p class="gysaddevent_tip">下阶段服务计划</p>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务时间：</span>
        <el-date-picker
          type="daterange"
          class="gysaddevent_publishing_input"
          v-model="nextTimeAll"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>服务主题：</span>
        <el-input
          class="gysaddevent_publishing_input"
          type="text"
          v-model="nextServerTheme"
          placeholder="请输入"
        />
      </div>
      <div class="gysaddevent_publishing_inputrow">
        <span>输出结果：</span>
        <el-input
          class="gysaddevent_publishing_input_textarea"
          type="textarea"
          v-model="nextOutputResult"
          placeholder="请输入"
        />
      </div>
      <div
        style="width:97%;height:1px;background:#d3d3d3;overflow:hidden;margin-bottom:20px;"
      ></div>
      <p class="gysaddevent_tip">其他</p>
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
        <span>现场照片上传：</span>
        <el-upload
          action="http://42.51.16.10:8080/myTest/upload/common/file"
          style="display:inline-block;vertical-align:top;"
          :accept="'image/*'"
          list-type="picture-card"
          :limit="3"
          :on-success="successUpload2"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
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
      dialogImageUrl: '',
      dialogVisible: false,
      contractId:this.$route.query.contractId,
      eventId:this.$route.query.stage,
      type:this.$route.query.type,
      disabled:false,
      pickerOptions: { // 限制收货时间不让选择今天以前的
      　　disabledDate(time) {
      　　　　return time.getTime() > Date.now() - 24 * 60 * 60 * 1000
      　　}
      },
      serverTheme:"",
      timeAll:"",
      serverAdress:"",
      participatePerson:"",
      serverContent:"",
      outputResult:"",
      outputProblem:"",
      nextTimeAll:"",
      nextServerTheme:"",
      nextOutputResult:"",
      file1:"",
      file2:[],
    }
  },
  methods: {
    timestampToTime (timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = this.changes(date.getDate()) + ' ';
      // let h = this.changes(date.getHours()) + ':';
      // let m = this.changes(date.getMinutes()) + ':';
      // let s = this.changes(date.getSeconds());
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
      // this.fileName=response.type.match('[^/]+(?!.*/)');
      this.$confirm(`成功上传`);
    },
    successUpload2 (response) {
      this.file2.push(response.type);
      this.$confirm(`成功上传`);
    },
    submit(){
      let fileTwo=JSON.stringify(this.file2)
      startServer({
        "contractId": this.contractId,
        "eventId": this.eventId,
        "thisType": this.type,
        "nextMajor": this.nextServerTheme,
        "nextOut": this.nextOutputResult,
        "nextTime": this.timestampToTime(this.nextTimeAll[0])+"-"+this.timestampToTime(this.nextTimeAll[0]),
        "serverAddress": this.serverAdress,
        "serverContent": this.serverContent,
        "serverMajor": this.serverTheme,
        "serverOut": this.outputResult,
        "serverPeopel": this.participatePerson,
        "serverProblem": this.outputProblem,
        "serverFile":this.file1,
        "serverImg":fileTwo,
        "serverTime": this.timestampToTime(this.timeAll[0])+"-"+this.timestampToTime(this.timeAll[0]),
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
.gysaddevent_publishing_inputrow > span {
  display: inline-block;
  font-size: 14px;
}
.gysaddevent_publishing_inputrow > button{
  cursor: pointer;
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
  resize: none;
}
/deep/.gysaddevent_publishing_input_textarea .el-textarea__inner {
  height: 72px;
  background: #f6f6f6;
  border: none;
  border-radius: 0;
  resize: none;
}
@media screen and (max-width: 1366px) {
  .gysaddevent_publishing_input_textarea {
    width: 87%;
  }
}
</style>
