<template>
  <div id="index">
    <c-header title='招生宣传' :leftFunc='leftFunc'></c-header>
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
    <div class="show_help" v-if="helpShow">
      <div class="title">
        去电脑端制作音乐画报
      </div>
      <div>
        <p>1. 请登录幼儿园后台 y2.bbtree.com</p>
        <p>2. 选择左侧菜单 招生--品牌宣传--音乐画报</p>
        <p>3. 使用强大的工具创作您的画报吧!</p>
      </div>
      <div class="button" @click="changeHelpShow">我知道了</div>
    </div>
  </div>
</template>

<script>
import bus from 'assets/js/bus.js';
import cHeader  from 'base/header/Header'
export default {
  name: 'app',
  data() {
    return {
      helpShow: false
    }
  },
  components: {
    cHeader
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
  mounted() {
    let self = this;
    bus.$on('showHelpPoster', (flag) => {
      self.helpShow = flag
    })
  },
  methods: {
    changeRouter() {
      this.$router.push(this.selected)
    },
    changeHelpShow() {
      this.helpShow = false;
    },
    leftFunc() {
      alert('leftFunc')
    }
  }
}
</script>

<style lang="scss">
#index {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .mint-navbar {
    width: 100%;
    height: 44px;
  }
  .routerView {
    flex: 1;
    height: calc(100% - 89px);
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
  .show_help {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.6);
    .title {
      font-size: 22px;
      line-height: 80px;
    }
    p {
      font-size: 14px;
      line-height: 30px;
    }
    .button {
      margin-top: .3rem;
      width: 1.7rem;
      height: .36rem;
      text-align: center;
      line-height: .36rem;
      border-radius: .18rem;
      background: #32c296;
      color: #ffffff;
      font-size: 14px;
    }
  }
}
</style>

