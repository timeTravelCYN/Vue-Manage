<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../../static/img/img.jpg">
          </img>{{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'chenyn'
    }
  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      if (command == 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #ffffff;
  .logo {
    float: left;
    width: 250px;
    text-align: center;
  }
  .user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #ffffff;
    .el-dropdown-link {
      position: relative;
      display: inline-block;
      padding-left: 50px;
      color: #ffffff;
      cursor: pointer;
      vertical-align: middle
    }
    .user-logo {
      position: absolute;
      left: 0;
      top: 15px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>

