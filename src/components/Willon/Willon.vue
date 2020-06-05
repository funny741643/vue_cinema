<template>
  <div class="Willon_wrapper">
    <div class="left_box">
      <div class="movie_info" v-for="item in movieList" :key="item.movie_Id">
        <img
          :src="item.movie_Cover"
          alt
        />
        <span class="movie_name">{{item.movie_Name}}</span>
        <div class="movie_like">
          <i class="el-icon-star-on"></i>
          <span>2132人想看</span>
        </div>
        <span class="movie_data">上映日期 {{item.movie_Start}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: []
    }
  },
  methods: {
    async getMovieList() {
      const { data: res } = await this.$http.post('index.php/index/Performancec/will')
      this.movieList = res
    }
  },
  created() {
    this.getMovieList()
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.Willon_wrapper {
  height: 1200px;
  width: 85%;
  margin: 0 auto;
  position: relative;
}

.left_box {
  width: 100%;
  height: 800px;
}

.movie_info {
  height: 320px;
  width: 200px;
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 50px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
}
.movie_info img {
  width: 100%;
  height: 80%;
}

.movie_name {
  position: absolute;
  bottom: 70px;
  left: 20px;
  text-align: center;
  color: white;
  font-size: 18px;
}
.movie_data {
  position: absolute;
  bottom: 10px;
  left: 20px;
}
.movie_like {
  position: absolute;
  bottom: 40px;
  left: 20px;
  // background-color: wheat;
  color: rgba(240, 161, 15, 0.891);
}

.right_box {
  width: 25%;
  height: 1000px;
  position: absolute;
  top: 0px;
  right: 0;
  box-shadow: 0 0 0 1px;
}
.right_top {
  margin-bottom: 50px;
}
.right_top a {
  float: right;
  text-decoration: none;
  color: rgba(240, 161, 15, 0.891);
  font-size: 18px;
  // padding-top: 10px;
}

.right_top span {
  font-size: 20px;
  padding-top: 40px;
}

.movie_list li {
  height: 50px;
  width: 250px;

  margin: 0 auto;
  margin-bottom: 10px;
  list-style: none;
  background-color: rgb(214, 213, 213);
  text-align: center;
}
</style>
