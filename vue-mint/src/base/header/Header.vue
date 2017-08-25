<template>
  <div class="c-header">
    <div class="backLeft" @click="leftFunc"></div>
    <div class="header_title" v-text="title"></div>
    <div class="backRight"></div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      title: {
        type: String
      },
      leftFunc: {
        type: Function,
        default: () => {
          console.log('empty')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin';
  .c-header{
    display: flex;
    width: 100%;
    height: 44px;
    @include border-1px(#eeeeee);
    .backLeft, .backRight{
      width: .27rem;
      height: 100%;
    }
    .backLeft{
      background: url('./back.png') no-repeat;
      background-size: .1rem .2rem;
      background-position: right center;
    }
    .header_title{
        flex: 1;
        height: 100%;
        text-align: center;
        line-height: 44px;
        font-size: .16rem;
        color: #333333;
    }
  }
</style>
