<template>
    <div>
        <el-upload
                :action="url"
                list-type="picture-card"
                :file-list="imageUrl"
                :on-preview="handlePictureCardPreview"
                :multiple="true"
                :on-success="onSuccess"
                :headers="headers"
                :before-upload="beforeAvatarUpload"
                :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <textarea :name="name" cols="100%" rows="10" v-html="jsonData"></textarea>
    </div>
</template>
<style>
</style>
<script>
    import _ from 'lodash'

    export default {
        name: 'HdImages',
        props: {
            name: {type: String, default: ''},
            imageUrl: {type: Array},
            allowSize: {default: .5},
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                formData: [],
                headers: {}
            };
        },
        computed: {
            jsonData() {
                return JSON.stringify(this.formData)
            }
        },
        mounted() {
            this.formData = this.imageUrl;
            let token = document.head.querySelector('meta[name="csrf-token"]');
            if (token) {
                this.headers['X-CSRF-TOKEN'] = token.content;
            }
        },
        methods: {
            handleRemove(file, fileList) {
                this.formData = [];
                fileList.forEach((v, k) => {
                    this.formData.push({name:v.name,url:v.url,size:v.size,status:v.status});
                })
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < this.allowSize;
                const isImage = /(jpg|jpeg|png|gif)$/i.test(file.name);
                if (!isImage) {
                    this.$message.error('上传图片不合法!');
                }
                if (!isLt2M) {
                    let unit = this.allowSize > 1 ? this.allowSize + 'MB' : Math.ceil(this.allowSize * 1024) + 'KB';
                    this.$message.error('上传图片大小不能超过 ' + unit);
                }
                return isImage && isLt2M;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            onSuccess(response, file, fileList) {
                this.formData.push({name: file.name, url: response.file});
            }
        }
    }
</script>
