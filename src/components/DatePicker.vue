<template>
    <el-date-picker
      v-model="dateValue"
      align="left"
      type="date"
      :name="name"
      placeholder="选择日期"
      default-value="2018-12-11"
      :picker-options="pickerOptions">
    </el-date-picker>
</template>
<style>
  .el-date-editor.el-input{
    width: 100% !important;
  }
</style>
<script>
  export default {
    name:"HdDatepicker",
    props:{
      name:String,
      value:String
    },
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            // return time.getTime() > Date.now();
          },
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
        dateValue: this.value,
      };
    }
  };
</script>
