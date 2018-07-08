<template>
  <div>
    <input class="form-control" type="text" :name="name" :title="title" :value="value" v-bind="options" :class="className">
    <span class="invalid-feedback" role="alert" v-show="error"><strong v-html="error"></strong></span>
  </div>
</template>
<script>
  export default {
    name: "HdInput",
    props:{
      name: {type: String},
      title: {type: String},
      value: {type: String, default: ''},
      error: {type: String, default: ''},
      rows: {type: [String,Number], default: 3},
    },
    data() {

      return {
        value1: ''
      };
    }
  }
</script>
<style scoped>
</style>
