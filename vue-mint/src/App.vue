<template>
  <div id="app">
    <div class="iosTimeline" v-if="isIos"></div>
    <div class="router_div">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { plat } from 'assets/js/util'
export default {
  name: 'app',
  computed: {
    isIos() {
      return plat.isIos()
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  .iosTimeline {
    width: 100%;
    height: 20px;
    background: transparent;
  }
  .router_div {
    width: 100%;
    height: calc(100% - 20px);
    flex: 1;
    overflow: hidden;
  }
}
</style>

