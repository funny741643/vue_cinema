<template>
  <el-container>
    <el-header>
      <el-link type="primary" href="#/home" class="toHomeBtn">回到主页</el-link>
      欢迎来到您的秘密小天地
      <el-button type="primary" class="logoutBtn" @click="handleLogout">退出登录</el-button>
    </el-header>
    <!-- 管理列表 -->
    <el-container>
      <el-aside width="250px">
        <el-menu :default-active="activePath" class="el-menu-vertical-demo" router>
          <el-menu-item index="/personal/info" @click="saveActivePath('/personal/info')">
            <i class="el-icon-menu"></i>
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="/personal/ticket" @click="saveActivePath('/personal/ticket')">
            <i class="el-icon-document"></i>
            <span>我的影票</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 内容展示区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activePath: ''
    }
  },
  methods: {
    saveActivePath(activePath) {
      window.sessionStorage.setItem('personalActivePath', activePath)
      this.activePath = activePath
    },
    handleLogout() {
      localStorage.setItem('userInfo',JSON.stringify({user_Id: 0}));
      this.$router.push('/nowon')
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('personalActivePath')
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #eeeeee;
  padding-left: 0;
  align-items: center;
  color: #111;
  font-size: 30px;
  text-align: center;
  line-height: 60px;
}
.logoutBtn {
  position: relative;
  left: 500px;
}
.toHomeBtn {
  position: relative;
  right: 450px;
  font-size: 20px;
}
</style>
