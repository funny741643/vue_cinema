<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="item in movies" :key="item.imdbID">
      <div class="movie">
        <img :src="item.Poster" width="100%" height="100%">
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      movies: []
    }
  },
  created() {
    this.movies = JSON.parse(window.localStorage.getItem('searchMoviesValue'))
    console.log(this.movies)
  }
}
</script>

<style lang="less" scoped>
.movie {
  width: 240px;
  height: 330px;
  background-color: #ccc;
  margin: 0 auto 20px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>