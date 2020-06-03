<template>
  <div>
    <el-container>
      <el-header>SOE星光影院管理系统</el-header>
      <!-- 管理列表 -->
      <el-container>
        <el-aside width="250px">
          <el-menu
            :default-active="activePath"
            class="el-menu-vertical-demo"
            router
          >
            <el-menu-item index="/admin/hall" @click="saveActivePath('/admin/hall')">
              <i class="el-icon-menu"></i>
              <span>影厅管理</span>
            </el-menu-item>
            <el-menu-item index="/admin/movie" @click="saveActivePath('/admin/movie')">
              <i class="el-icon-document"></i>
              <span>剧目管理</span>
            </el-menu-item>
            <el-menu-item index="/admin/plan" @click="saveActivePath('/admin/plan')">
              <i class="el-icon-setting"></i>
              <span>演出管理</span>
            </el-menu-item>
            <el-menu-item index="/admin/user" @click="saveActivePath('/admin/user')">
              <i class="el-icon-setting"></i>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="/admin/statistics" @click="saveActivePath('/admin/statistics')">
              <i class="el-icon-setting"></i>
              <span>销售统计</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容展示区 -->
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
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
      window.sessionStorage.setItem('adminActivePath', activePath)
      this.activePath = activePath
    }
  },
  created() {
    console.log(window.sessionStorage.getItem('adminActivePath'))
    this.activePath = window.sessionStorage.getItem('adminActivePath') 
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
</style>