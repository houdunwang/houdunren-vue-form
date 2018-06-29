<template>
  <div class="form-group row">
    <label class="col-3 col-lg-2 col-form-label text-right" v-html="title"></label>
    <div class="col-9 col-lg-10">
      <textarea class="form-control" :name="name" :title="title" :rows="rows" v-bind="options" :class="className" v-html="values"><slot></slot></textarea>
      <span class="invalid-feedback" role="alert" v-show="error"><strong v-html="error"></strong></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "HdTextarea",
    mounted(){
      console.log(this.$slots.default[0].text);
    },
    computed:{
      values:function(){
        return this.$slots.default[0].text;
      }
    }
  }
</script>
<style scoped>
</style>
