<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label>测试</label>
                  <hd-textarea name="content" title="标题" rows="5" error="333">houdunren.com</hd-textarea>
                  <hd-input :options="{class:'isbox',style:'color:green'}" value="后盾人" name="title" error="错误信息"/>
                  <hd-image name="avatar"></hd-image>
                  <small id="helpId" class="form-text text-muted">Help text</small>
                </div>
                <button>send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
