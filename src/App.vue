<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              Header
            </div>
            <div class="card-body">
              <hd-input name="title" title="title" value="content" :options="{class:'sdf'}" error=""/>
              <hd-input name="title" title="title" value="content" :options="{class:'sdf'}" error="sdfdsfd"/>
              <hd-input name="title" title="title" value="content" :options="{class:'sdf'}" error="sdfdsfd"/>
              <hd-input name="title" title="title" value="content" :options="{class:'sdf'}" error="sdfdsfd"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
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
