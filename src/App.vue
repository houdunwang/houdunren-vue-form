<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form action="">
            <hd-simditor id="aaa" name="content"></hd-simditor>
            <hr>
            <hd-input value="a" error="33"></hd-input>
            <hr>
            <hd-textarea>这是内容</hd-textarea>
            <hr>
            <hd-datepicker name="date" value="2019-2-22"></hd-datepicker>
            <hr>
            <hd-datetimepicker name="datetimepicker" value="2019-2-18 06:26:18"></hd-datetimepicker>
            <hr>
            <hd-image></hd-image>
            <hd-image></hd-image>
            <hr>
            <button type="submit">提交</button>
          </form>
        </div>
      </div>
    </div>
    <div style="height: 500px;"></div>
  </div>

</template>
<style>
</style>
<script>
  import HdImage from "./components/Image";

  export default {
    name: 'app',
    components: {HdImage},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss">
</style>
