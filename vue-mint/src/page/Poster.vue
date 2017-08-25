<template>
  <div class="poster">
    <router-link to="previewPoster">
      <div class="everPoster">
        <img src="../assets/images/poster.jpg" alt="">
        <div class="everDesc">
          <div class="title">用画报讲述幼儿园精彩故事</div>
          <div class="everTime">创建时间: 2017-08-01 10:00</div>
        </div>
      </div>
    </router-link>
    <div class="userPoster">
      <div class="head">
        我的画报
        <div class="poster_help" @click="howPoster">如何制作画报?</div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from 'assets/js/bus.js'
export default {
  data() {
    return {

    }
  },
  methods: {
    howPoster() {
      bus.$emit('showHelpPoster', true)
    },
  }
}
</script>
<style lang="scss">
@import '~assets/css/mixin.scss';
.poster {
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #f5f5f5;
  .everPoster {
    margin-bottom: .1rem;
    display: flex;
    padding: .15rem;
    width: 100%;
    height: 1.4rem;
    box-sizing: border-box;
    background-color: #ffffff;
    @include border-1px(#eeeeee);
    img {
      margin-right: .25rem;
      width: 1.5rem;
      height: 1rem;
    }
    .everDesc {
      .title {
        font-size: 16px;
        color: #333333;
        line-height: .3rem;
        height: .6rem;
      }
      .everTime {
        margin-top: .12rem;
        color: #999999;
        @include no-wrap;
      }
    }
  }
  .userPoster {
    @include border-1px(#eeeeee);
    background: #ffffff;
    .head {
      padding-left: .15rem;
      height: .5rem;
      line-height: .5rem;
      box-sizing: border-box;
      font-size: 14px;
      color: #333333;
      .poster_help {
        margin-right: .12rem;
        float: right;
        font-size: 12px;
        color: #a8a8a8;
      }
    }
  }
}
</style>

