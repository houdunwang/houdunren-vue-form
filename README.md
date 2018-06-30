## hd-vue-form

> 基于 Vue.js 生成常用HTML表单元素。

项目地址：https://github.com/houdunwang/hd-vue-form

## 安装
### 前台配置
使用 npm 安装 `vue-form`

```
npm i hd-vue-form -S
```

**完整引入**

在 main.js 中写入以下内容：

```
import Vue from 'vue';

//配置elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//配置vue-form
import HdVueForm from 'HdVueForm';
//参数url为后台处理地址
Vue.use(HdVueForm,{url:'http://hdcms-laravel.hd/vue-form-upload'});

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 后台处理

组件会提交 `file` 字段的表单，后台返回的合理数据结构如下：

```
#上传成功返回结果
return ['file' => '文件地址', 'code' => 0];

#上传失败返回结果，系统会自动弹出错误信息
return ['message' => '错误内容', 'code' => 403];
```

## 组件

### 基础知识

#### 属性说明

组件属性由基本属性如 `title、value、error、name` 和 扩展属性 `options` 构成。

> 使用频率高的属性我们定义为了基本属性，其他属性使用扩展属性创建

扩展属性中可以使用任何表单属性，并使用options设置

```
<hd-input :options="{class:'isbox',style:'color:green'}" value="后盾人" name="title" error="错误信息"/>
```

#### 错误信息

基本属性 `error` 用于显示错误信息内容，当设置了`error`属性时表单将描红并显示错误信息。

### 组件列表

#### 文本框

```
<hd-input name="title" title="标题" value="内容" error="错误信息"/>
```

#### 文本域

```
<hd-textarea name="content" title="标题" rows="2">houdunren.com</hd-textarea>
```

#### 单张图片

```
<hd-image name="avatar"></hd-image>
```

![image-20180701031721248](assets/image-20180701031721248.png)

> 图片会用到后台处理，前查看前面介绍的 `后台处理` 章节

#### 日期选择

```
<hd-datepicker name="date" value="2019-2-22"></hd-datepicker>
```

![image-20180701031305803](assets/image-20180701031305803.png)

#### 日期时间

```
<hd-datetimepicker name="datetimepicker" value="2019-2-18 06:26:18"></hd-datetimepicker>
```

![image-20180701031550934](assets/image-20180701031550934.png)