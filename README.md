## hd-vue-form

> 基于 Vue.js 生成常用HTML表单元素。

项目地址：https://github.com/houdunwang/hd-vue-form

## 安装

使用 npm 安装 `vue-form`

```
npm i hd-vue-form -S
```

**完整引入**

在 main.js 中写入以下内容：

```
import Vue from 'vue';
import HdVueForm from 'HdVueForm';
import App from './App.vue';

Vue.use(HdVueForm);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 组件

#### 基础知识

组件属性由 基本属性如 `title、value、error、name` 和 扩展属性 `options` 构成。

> 使用频率高的属性我们定义为了基本属性，其他属性使用扩展属性创建

**扩展属性**

```
<hd-input :options="{class:'btn-primary',style:'font-size:60px;color:green'}" value="后盾人"/>
```

> 扩展属性中可以使用任何表单属性

**错误信息**

基本属性 `error` 用于显示错误信息内容，当设置了`error`属性时表单将描红并显示错误信息。

#### 文本框

```
<hd-input name="title" title="标题" value="内容" error="错误信息"/>
```

#### 文本域

```
<hd-textarea name="content" title="标题" rows="2">houdunren.com</hd-textarea>
```



