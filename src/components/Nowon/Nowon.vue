<template>
  <div class="nowon-Wrapper">
    <div class="up_box">
      <div class="block">
        <el-carousel trigger="click" height="500px">
          <el-carousel-item>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589804916891&di=19531db175625ec1a78e4baaf1aba71c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b892571dc6e632f875a399a812ae.jpg%401280w_1l_2o_100sh.jpg"
              width="800"
              height="500"
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589804916891&di=19531db175625ec1a78e4baaf1aba71c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b892571dc6e632f875a399a812ae.jpg%401280w_1l_2o_100sh.jpg"
              width="800"
              height="500"
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589804916891&di=19531db175625ec1a78e4baaf1aba71c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b892571dc6e632f875a399a812ae.jpg%401280w_1l_2o_100sh.jpg"
              width="800"
              height="500"
            />
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
        <el-col :span="6">
          <div class="movie"><router-link to="/moviedetail/440"><img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" width="100%" height="100%"></router-link></div>
        </el-col>
        <el-col :span="6">
          <div class="movie"><img src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg" width="100%" height="100%"></div>
        </el-col>
        <el-col :span="6">
          <div class="movie"><img src="https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg" width="100%" height="100%"></div>
        </el-col>
        <el-col :span="6">
          <div class="movie"><img src="https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" width="100%" height="100%"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
    margin-left: 30px
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
