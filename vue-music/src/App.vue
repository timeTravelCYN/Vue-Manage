<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="scss">
/* 
  ~ 是sass-loader的一种处理，相当于映射到相对的common目录，webpackk里面的alias。 sass-loader官网有处理
*/

@import '~common/scss/variable';
#app {
  color: $color-theme;
}
</style>

