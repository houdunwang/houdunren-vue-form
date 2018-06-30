<template>
  <div>
    <textarea class="form-control" :name="name" :title="title" :rows="rows" v-bind="options" :class="className" v-html="values"><slot></slot></textarea>
    <span class="invalid-feedback" role="alert" v-show="error"><strong v-html="error"></strong></span>
  </div>
</template>
<script>
  export default {
    name: "HdTextarea",
    props:{
      name: {type: String},
      title: {type: String},
      value: {type: String, default: ''},
      error: {type: String, default: ''},
      rows: {type: [String,Number], default: 3},
    },
    mounted(){
      // if(this.$slots.default[0]){
      //   console.log(this.$slots.default[0].text);
      // }
    },
    computed:{
      values:function(){
        if(this.$slots.default && this.$slots.default[0]){
          return this.$slots.default[0].text;
        }
      }
    }
  }
</script>
<style scoped>
</style>
