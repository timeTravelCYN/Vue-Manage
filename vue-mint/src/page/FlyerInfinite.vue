<template>
  <div class="flyer">
    <!-- <router-link to="data">data</router-link> -->
  
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <p class="page-infinite-loading">
        <mt-spinner type="snake"></mt-spinner>
        加载中...
      </p>
    </div>
  
  </div>
</template>
<script>
export default {
  name: 'flyer',
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false
    }
  },
  methods: {
    loadMore() {
      console.log('...start')
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
}
</script>
<style lang="scss">
.flyer {
  width: 100%;
  height: 100%;
  overflow: scroll
}

li {
  height: 70px;
  line-height: 70px;
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

