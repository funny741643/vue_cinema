<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.png" width="60px" height="60px" />
        <span>SOE星光剧场</span>
      </div>
      <div>
        <el-link type="primary" href="#/login" style="fontSize:20px">点击登录</el-link>
      </div>
    </el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">热映电影</el-menu-item>
      <el-menu-item index="2">即将上映</el-menu-item>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #111;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-main {
  background-color: #eaedf1;
}
.el-menu-demo {
  width: 80%;
  margin: 0 auto;
}
</style>
