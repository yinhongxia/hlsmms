<template>
  <div id="app">

    <!-- 添加路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
}
</script>

<style>
html,
body,
#app,
#loginBox,#home {
  height: 100%;
  margin: 0;
}
</style>
