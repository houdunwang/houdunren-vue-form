<template>
  <div class="form-group row">
    <label class="col-3 col-lg-2 col-form-label text-right" v-html="title"></label>
    <div class="col-9 col-lg-10">
      <input class="form-control" type="text" :name="name" :title="title" :value="value" v-bind="options" :class="className">
      <span class="invalid-feedback" role="alert" v-show="error"><strong v-html="error"></strong></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "HdInput"
  }
</script>
<style scoped>
</style>
