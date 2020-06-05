<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.png" width="60px" height="60px" />
        <span>SOE星光剧场</span>
      </div>
      <div>
        <el-link type="primary" href="#/personal" style="fontSize:20px" v-if="userInfo.user_Id">{{userInfo.user_Name}}</el-link>
        <el-link type="primary" href="#/login" style="fontSize:20px"  v-else>点击登录</el-link>
      </div>
    </el-header>
    <div class="nav">
      <el-menu :default-active="activePath" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/nowon" @click="saveNavState('/nowon')">正在热映</el-menu-item>
        <el-menu-item index="/willon" @click="saveNavState('/willon')">即将上映</el-menu-item>
        <el-menu-item index="/hoton" @click="saveNavState('/hoton')">热播电影</el-menu-item>
      </el-menu>
      <el-input
        v-model="searchValue"
        placeholder="搜索电影"
        prefix-icon="el-icon-search"
        @change="search"
        id="searchInput"
      ></el-input>
    </div>
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
      activePath: '/nowon',
      searchValue: '',
      MOVIE_API_URL: 'https://www.omdbapi.com/?s=man&apikey=4a3b711b',
      movies: [],
      userInfo: {},
      key: true,
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
    if (localStorage.getItem('userInfo') === null) {
      localStorage.setItem('userInfo',JSON.stringify({user_Id: 0}))
    }
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  },
  methods: {
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
    search() {
      this.$http.post(`https://www.omdbapi.com/?s=${this.searchValue}&apikey=4a3b711b`).then(res => {
        this.movies = res.data.Search
        if (this.$route.path !== '/movies') {
          this.$router.push({name: 'Movies'})
          window.localStorage.setItem('searchMoviesValue',JSON.stringify(this.movies))
        } else {
          window.localStorage.setItem('searchMoviesValue',JSON.stringify(this.movies))
        }
        document.getElementById('searchInput').value = ''
      })
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
.nav {
  display: flex;
  justify-items: center;
  width: 85%;
  margin: 0 auto;
}
.el-input--prefix {
  line-height: 60px;
  width: 500px;
}
.el-main {
  background-color: #eaedf1;
}
.el-menu-demo {
  width: 80%;
  margin: 0 auto;
}
</style>
