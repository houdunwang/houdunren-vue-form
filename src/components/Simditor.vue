<template>
  <div>
    <textarea :id="name" :name="name" v-html="content"></textarea>
  </div>
</template>
<style>
  .simditor img{
    max-width: 100%;
  }
</style>
<script>
  import $ from 'jquery'
  require('simditor/styles/simditor.css')
  require('simditor/site/assets/scripts/module.js')
  require('simditor/site/assets/scripts/hotkeys.js')
  require('simditor/site/assets/scripts/uploader.js')
  import Simditor from 'simditor/site/assets/scripts/simditor.js'
  export default {
    name: "HdSimditor",
    props: {
      url: {type: String},
      name: {type: String, default: 'content'},
    },
    mounted() {
      let token = document.head.querySelector('meta[name="csrf-token"]');
      let editor = new Simditor({
        textarea: $('#' + this.name),
        pasteImage: true,
        upload: true,
        upload: {
          url: this.url,
          params: {_token: token.content},
          fileKey: 'file',
          connectionCount: 3,
          leaveConfirm: '文件上传中，关闭此页面将取消上传。'
        }
      });
    },
    computed: {},
    data: function () {
      return {
        content: this.$slots.default && this.$slots.default[0] ? this.$slots.default[0].text : ''
      }
    }
  }
</script>
