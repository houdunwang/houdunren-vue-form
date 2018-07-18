<template>
  <el-upload
    class="avatar-uploader"
    :action="url"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :on-remove="handleRemove"
    :headers="headers"
    :before-upload="beforeAvatarUpload">
    <img v-if="src" :src="src" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon hd-avatar-uploader-icon"></i>
    <input hidden type="text" :name="name" :value="src">
  </el-upload>
</template>
<style>
  .hd-avatar-uploader-icon {
    /*line-height: 178px !important;*/
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px !important;
    text-align: center;
  }

  .avatar {
    max-width: 600px;
    height: 178px;
    display: block;
  }
</style>
<script>
  export default {
    name: 'HdImage',
    props: {
      name: {type: String, default: ''},
      imageUrl: {type: String},
      allowSize:{default:.5}
    },
    data() {
      return {
        src:'',
        headers:{}
      }
    },
    watch:{
      imageUrl(val){
        this.src = val;
      }
    },
    mounted(){
      this.src=this.imageUrl;
      let token = document.head.querySelector('meta[name="csrf-token"]');
      if (token) {
        this.headers['X-CSRF-TOKEN'] = token.content;
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        if (res.code != 0) {
          return this.$message.error(res.message);
        }
        this.src = res.file;
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < this.allowSize;
        const isImage = /(jpg|jpeg|png|gif)$/i.test(file.name);
        if (!isImage) {
          this.$message.error('上传图片不合法!');
        }
        if (!isLt2M) {
          let unit = this.allowSize>1?this.allowSize+'MB':Math.ceil(this.allowSize*1024)+'KB';
          this.$message.error('上传图片大小不能超过 '+unit);
        }
        return isImage && isLt2M;
      },
      handleRemove(file, fileList) {
      }
    }
  }
</script>
