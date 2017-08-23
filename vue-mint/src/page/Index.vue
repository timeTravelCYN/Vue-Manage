<template>
  <div id="index">
    <mt-navbar v-model="selected" @click.native="changeRouter">
      <mt-tab-item id="flyer" type="flyer">
        创意传单
      </mt-tab-item>
      <mt-tab-item id="poster" type="poster">
        音乐画报
      </mt-tab-item>
      <mt-tab-item id="enroll" type="enroll">
        手机官网
      </mt-tab-item>
    </mt-navbar>
    <div class="routerView">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  computed: {
    selected: {
      /* 为什么要写getter setter https://my.oschina.net/dawd/blog/1490462 */
      get: function() {
        return this.$route.path.replace('/', '')
      },
      set: function(newVal) {
        return this.$router.push(newVal)
      }
    }
  },
  methods: {
    changeRouter() {
      this.$router.push(this.selected)
    }
  }
}
</script>

<style lang="scss">
#index {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .mint-navbar {
    width: 100%;
    height: 44px;
  }
  .routerView {
    flex: 1;
    height: calc(100% - 44px);
    overflow: hidden;
  }
  .mint-navbar .mint-tab-item {
    padding: 0px;
    font-size: 15px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #32c296;
    color: #32c296;
    margin-bottom: 0px;
  }
}
</style>

