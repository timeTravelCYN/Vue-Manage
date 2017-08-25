<template>
  <div class="prePoster">
    <c-header title="预览模板" :leftFunc="backHash"></c-header>
    <iframe src="http://flyer.bbtree.com/m/poster/new.html" frameborder="0" class="iframe"></iframe>
  </div>
</template>

<script>
import cHeader from 'base/header/Header'
  export default {
    components: {
      cHeader
    },
    methods: {
      backHash() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
.prePoster{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .iframe{
    width: 100%;
    height: calc(100% - 45px);
  }
}
</style>