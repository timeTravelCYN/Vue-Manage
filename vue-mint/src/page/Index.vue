<template>
  <div id="index">
    <mt-navbar v-model="selected" @click.native="changeRouter">
      <mt-tab-item id="flyer"  type="flyer">
        创意传单
      </mt-tab-item>
      <mt-tab-item id="poster"  type="poster">
        音乐画报
      </mt-tab-item>
      <mt-tab-item id="enroll"  type="enroll">
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
      get: function () {
        return this.$route.path.replace('/', '')
      },
      set: function (newVal) {
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
  #index{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .routerView{
      flex: 1;
      overflow: hidden
    }
  }
</style>

