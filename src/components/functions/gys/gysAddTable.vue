<template>
  <div class="hiddenPar"
       v-show="nowNumber==0">
    <div class="hiddenParDiv">
      <div class="hiddenParDiv_title">
        <span>里程碑事件</span>
        <span @click="chanegProps">×</span>
      </div>
      <div class="hiddenParDiv_body">
        <div>
          <div>
            <span>里程碑事件名称：</span>
            <input type="text"
                   placeholder="请输入"
                   v-model="textareaValue.eventName">
          </div>
          <div>
            <span>主要内容：</span>
            <textarea placeholder="请输入"
                      v-model="textareaValue.eventContent"></textarea>
          </div>
          <div>
            <span>关键产出物：</span>
            <textarea placeholder="请输入"
                      v-model="textareaValue.eventOutput"></textarea>
          </div>
          <div>
            <span>服务起止时间：</span>
            <el-date-picker v-model="textareaValue.eventTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div>
            <span>支付比例：</span>
            <div>
              <input type="text"
                     v-model="textareaValue.eventPayment"
                     maxlength="2">
              <div>
                <button @click="clickToAddInputerNumber">
                  <img src="../../../assets/toTop.png"
                       alt="">
                </button>
                <button @click="clickToInputerNumber">
                  <img src="../../../assets/toBottom.png"
                       alt="">
                </button>
              </div>
            </div>
            <span>(%)</span>
          </div>
        </div>
        <div class="preFooter">
          <button @click="chanegProps">取消</button>
          <button @click="chanegProps2"
                  class="preFooterRed">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nowNumberC: "",
      textareaValue: {
        "eventName": "",
        "eventContent": "",
        "eventOutput": "",
        "eventPayment": 0,
        "eventTime": "",
        "eventStart": "",
        "eventEnd": ""
      },
      timeAll: "",
      time1: "",
      time2: "",
    }
  },
  props: {
    nowNumber: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    clickToAddInputerNumber () {
      if (this.textareaValue.eventPayment < 100) {
        this.textareaValue.eventPayment++;
      }
    },
    clickToInputerNumber () {
      if (this.textareaValue.eventPayment > 1) {
        this.textareaValue.eventPayment--;
      } else {

      }
    },
    chanegProps () {
      this.nowNumberC = 1;
      this.$emit('change', this.nowNumberC)
    },
    value1 (val) {
      let value = new Date(val[0])
      let value2 = new Date(val[1])
      this.time1 = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
      this.time2 = value2.getFullYear() + '-' + (value2.getMonth() + 1) + '-' + value2.getDate();
    },
    chanegProps2 () {
      if (this.index == 0) {
        if (this.textareaValue) {
          this.value1(this.textareaValue.eventTime);
          this.textareaValue.eventStart = this.time1
          this.textareaValue.eventEnd = this.time2
          this.textareaValue.projId = ""
          this.nowNumberC = 1;
          this.$emit('change', this.nowNumberC)
          this.$emit('changeValue', this.textareaValue)
          this.textareaValue = {};
        } else {
          this.$message({
            showClose: true,
            message: "操作失败！您信息不能为空！",
            type: "error"
          });
        }
      } else {
        if (this.textareaValue) {
          this.value1(this.textareaValue.eventTime);
          this.textareaValue.eventStart = this.time1
          this.textareaValue.eventEnd = this.time2
          this.textareaValue.projId = ""
          this.nowNumberC = 1;
          this.$emit('change', this.nowNumberC)
          this.$emit('changeValue2', this.textareaValue)
          this.textareaValue = {};
        } else {
          this.$message({
            showClose: true,
            message: "操作失败！您信息不能为空！",
            type: "error"
          });
        }
      }

    },
  },
  mounted () {
  }
}
</script>
<style scoped>
.hiddenPar {
  width: 100%;
  height: 100%;
  background-color: rgba(00, 00, 00, 0.7);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.hiddenParDiv {
  width: 720px;
  height: 480px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
}
.hiddenParDiv_title {
  width: 100%;
  height: 40px;
  background: rgba(246, 246, 246, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
}
.hiddenParDiv_title > span {
  display: block;
  width: auto;
  height: auto;
  padding: 0.5rem;
  font-size: 18px;
  line-height: 18px;
}
.hiddenParDiv_title > span:last-child {
  cursor: pointer;
  font-size: 34px;
}
.hiddenParDiv_body {
  width: 100%;
  height: auto;
}
.hiddenParDiv_body > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hiddenParDiv_body > div > div {
  width: 80%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
.hiddenParDiv_body > div > div > span {
  width: 150px;
  white-space: nowrap;
  text-align: right;
}
.hiddenParDiv_body > div > div > span + * {
  max-width: 290px;
  width: 50%;
  height: 36px;
  text-indent: 1em;
}
.hiddenParDiv_body > div > div > span + div {
  display: flex;
  width: auto;
  margin-right: 1rem;
}
.hiddenParDiv_body > div > div > span + textarea {
  padding-top: 1rem;
}
.hiddenParDiv_body > div > div > span + div + span {
  width: auto;
}
.hiddenParDiv_body > div > div > span + div > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hiddenParDiv_body > div > div > span + div > div > button {
  width: 20px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #999;
  cursor: pointer;
}
.hiddenParDiv_body > div > div > span + div > div > button > img {
  width: 100%;
  height: 100%;
}
.hiddenParDiv_body > div > div > span + div > input {
  width: 40px;
  text-indent: 1em;
  border: 1px solid #999;
  border-right: 0;
}
.preFooter {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row !important;
  justify-content: flex-end;
  align-items: center;
}
.preFooter > button {
  width: 100px;
  height: 36px;
  margin: 0 1rem;
  background: #fff;
  border: 1px solid #999;
  cursor: pointer;
}
.preFooterRed {
  background: #9e0100 !important;
  color: #fff;
}
textarea {
  margin: 0;
}
</style>
<style>
.hiddenParDiv_body > div > div > span + .el-date-editor > span,
.hiddenParDiv_body > div > div > span + .el-date-editor > i {
  width: auto;
}
</style>