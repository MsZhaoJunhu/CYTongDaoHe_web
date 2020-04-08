<template>
  <div>
    <el-form :model="formData3" :inline="true" ref="formData3" label-width="65px" size="medium">
      <el-row v-for="(item,index) in formData3.powerAttrList" :key="index" style="border-bottom: 1px solid #f0f0f0;padding: 10px;">
        <el-form-item label="参数名"
                      :prop="'powerAttrList.' + index + '.fieldDesc'"
                      :rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]">
          <el-input v-model="item.fieldDesc" placeholder="请输入参数名"/>
        </el-form-item>
        <el-form-item label="描述"
                      :prop="'powerAttrList.' + index + '.fieldName'"
                      :rules="[{ required: true, message: '描述不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]">
          <el-input v-model="item.fieldName" placeholder="请输入描述"/>
        </el-form-item>
        <el-form-item label="排序"
                      :prop="'powerAttrList.' + index + '.fieldSort'"
                      :rules="moreRules.fieldSort">
          <el-input type="number" v-model="item.fieldSort" autocomplete="off" placeholder="请输入排序"/>
        </el-form-item>
        <el-button type="danger" v-if="formData3.powerAttrList.length > 1" size="medium" @click="removeRow(index)">
          删除
        </el-button>
      </el-row>
      <el-row>
        <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
      </el-row>
    </el-form>
    <button @click="getMain">获取数据</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData3: {
          powerAttrList: [{
            fieldName: '',
            fieldSort: '',
            fieldDesc: '',
          }],
        },
        //新增表单的验证规则
        moreRules: {
          fieldSort: [{required: true, message: '请输入排序', trigger: 'change'},
            {
              validator: (rule, value, callback) => {
                if (value < 0) {
                  callback(new Error('必须大于0'));
                } else if (value.length > 5) {
                  callback(new Error('不超过5位数字'));
                } else if (!value) {
                  callback(new Error('排序不能为空'));
                } else {
                  callback();
                }
              },
              trigger: 'change',
            },
          ],
        },
      };
    },
    methods: {
      addRow() {
        this.formData3.powerAttrList.push({
          fieldName: '',
          fieldSort: '',
          fieldDesc: '',
        });
      },
      // 删除属性列
      removeRow(index) {
        this.formData3.powerAttrList.splice(index, 1);
      },
      getMain(){
        
      }
    },
  };
</script>
<style></style>