<template>
  <div class="form-group row">
    <label class="col-md-4 col-form-label text-md-right" v-html="title"></label>
    <div class="col-md-6">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HdFormGroup",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
