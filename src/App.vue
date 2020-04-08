<template>
  <div id="app">

    <router-view v-if="isRouterAlive"></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false;
      this.$$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (max-width: 1500px) and (min-width: 700px) {
  * {
    /* zoom: 0.96; */
  }
}
@media screen and (max-width: 415px) {
  #app {
    height: 100%;
    overflow-x: hidden;
  }
}
</style>
