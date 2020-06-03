<template>
  <div class="nowon-Wrapper">
    <div class="up_box">
      <div class="block">
        <el-carousel trigger="click" height="500px">
          <el-carousel-item v-for="item in carouselList" :key="item.movie_Id">
            <router-link :to="`/moviedetail/${item.movie_Id}`">
              <img :src="item.movie_Cover" width="800px" height="500px" />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="ranking">
        <h1>今日票房</h1>
        <ul class="movie_list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div>
      <el-row class="list">
        <el-col :span="6" v-for="item in otherList" :key="item.movie_Id">
          <div class="movie">
            <router-link :to="`/moviedetail/${item.movie_Id}`">
              <img :src="item.movie_Cover" width="100%" height="100%" />
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselList: [],
      otherList: []
    }
  },
  methods: {
    async getMovieList() {
      const { data: res } = await this.$http.post('index.php/index/Performancec/show')
      this.carouselList = res.slice(0, 3)
      this.otherList = res.slice(3)
    }
  },
  created() {
    this.getMovieList()
  }
}
</script>

<style lang="less" scoped>
.movie {
  width: 240px;
  height: 300px;
  background-color: #fff;
}
.nowon-Wrapper {
  width: 85%;
  margin: 0 auto;
}
.up_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.movie_list {
  list-style: none;
  padding: 0;
  li {
    width: 100%;
    height: 120px;
    background-color: #ccc;
    margin-bottom: 10px;
    margin-left: 30px;
  }
}
.ranking {
  width: 500px;
  color: red;
  text-align: center;
}
.block {
  width: 800px;
  cursor: pointer;
}
</style>
