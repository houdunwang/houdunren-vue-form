<template>
  <div class="block">
    <div class="form-group row">
      <label class="col-3 col-lg-2 col-form-label text-right">sdf</label>
      <div class="col-9 col-lg-10">
        <el-input v-model="value" placeholder="请输入内容" name="abc"></el-input>
        <input type="text" name="" value="houdunren">
        <span class="invalid-feedback" role="alert"><strong ></strong></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "HdDatePicker",
    data() {
      return {
        value:33
      };
    },
    mounted:()=>{
      console.log(this.name)
    },
    methods: {
      change: (v) => {
        alert(v);
      }
    }
  };
</script>

<style scoped>

</style>
