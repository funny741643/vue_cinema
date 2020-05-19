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
      :default-active="activePath"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item index="/nowon" @click="saveNavState('/nowon')">正在热映</el-menu-item>
      <el-menu-item index="/willon" @click="saveNavState('/willon')">即将上映</el-menu-item>
      <el-menu-item index="/hoton" @click="saveNavState('/hoton')">热播电影</el-menu-item>
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
      activePath: '/nowon'
    }
  },
  mounted() {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
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
