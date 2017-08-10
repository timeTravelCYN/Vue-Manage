<template>
  <div class="flyer" ref="flyer">
    <!-- <router-link to="data">data</router-link> -->
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="guanggao">
        <router-link to="data">固定运营位</router-link>
      </div>
      <ul class="page-loadmore-list">
        <li v-for="item in list" class="page-loadmore-listitem" @click="changeUrl">{{ item }}</li>
      </ul>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'isRotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
      <div class="loadEnd" v-show="allLoaded">宣传也是有底线的~</div>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  name: 'flyer',
  data() {
    return {
      list: [],
      allLoaded: false,
      bottomStatus: ''
    }
  },
  methods: {
    changeUrl() {
      sessionStorage.setItem('flyerTop', this.$refs.flyer.scrollTop)
      sessionStorage.setItem('flyerList', JSON.stringify(this.list))
      alert(this.$refs.flyer.scrollTop)
      location.href = 'http://flyer.bbtree.com/m/flyer/mobile.html?fid=323&uid=100099155&sid=100033910&s=2'
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1];
        if (lastValue < 40) {
          for (let i = 1; i <= 10; i++) {
            this.list.push(lastValue + i);
          }
        } else {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    }
  },
  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  },
  activated() {
    if (sessionStorage.getItem('flyerList')) this.list = JSON.parse(sessionStorage.getItem('flyerList'))
    this.$nextTick(() => {
      const top = sessionStorage.getItem('flyerTop')
      const _self = this;
      this.$refs.flyer.scrollTop = top
    })
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    sessionStorage.setItem('flyerTop', this.$refs.flyer.scrollTop)
    sessionStorage.setItem('flyerList', JSON.stringify(this.list))
    next()
  }
}
</script>
<style lang="scss">
.flyer {
  width: 100%;
  height: 100%;
  overflow: scroll;
  .guanggao {
    height: 300px;
    text-align: center;
    line-height: 300px;
    background-color: #32c296;
    color: #ffffff;
  }
  .mint-spinner {
    display: inline-block;
    vertical-align: middle;
  }
  .mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      &.isRotate {
        transform: rotate(180deg);
      }
    }
  }
  .loadEnd {
    text-align: center;
    line-height: 50px;
  }
}

li {
  height: 70px;
  line-height: 70px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
}

.page-infinite-loading {
  text-align: center;
  height: 50px;
  line-height: 50px;
  div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>

