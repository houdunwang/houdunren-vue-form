<template>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="left"
      :name="name"
      :picker-options="pickerOptions1">
    </el-date-picker>
</template>
<style>
  .el-time-spinner{
    white-space:normal !important;
  }
</style>
<script>
  export default {
    name:"HdDatetimepicker",
    props:{
      name:String,
      value:String
    },
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: this.value,
      };
    }
  };
</script>
