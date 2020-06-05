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
      <!-- 票房榜 -->
      <div class="ranking">
        <h1>今日票房榜</h1>
        <div class="ticket_wrapper" v-for="(item,i) in movieTop" :key="item.statistics_Id">
          <div class="ticket_img">
            <div class="ticket_first">{{i+1}}</div>
            <img :src="item.movie_Cover" alt />
          </div>
          <div class="ticket_info">
            <div class="ticket_name">{{item.movie_Name}}</div>
            <div class="ticket_lala">
              <i class="el-icon-star-on"></i>
              正在热映中
            </div>
            <div class="ticket_price">总票房：{{item.statistics_Pnum}}元</div>
            <div class="ticket_num">共售卖：{{item.statistics_Num}}张</div>
          </div>
        </div>
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
      otherList: [],
      movieTop: []
    }
  },
  methods: {
    async getMovieList() {
      const { data: res } = await this.$http.post('index.php/index/Performancec/show')
      this.carouselList = res.slice(0, 3)
      this.otherList = res.slice(3)
    },
    async getMovieRank() {
      const { data: res } = await this.$http.get('index.php/index/Statisticsc/show')
      this.movieTop = res.slice(0, 3)
      console.log(this.movieTop)
    }
  },
  created() {
    this.getMovieList()
    this.getMovieRank()
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
.ranking{
  width: 550px;
  position: relative;
  left: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  h1{
    text-align: center;
    height: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.932);
    line-height: 20px;
    color: tomato;
  }
  .ticket_wrapper{
    height: 140px;
    width: 100%;
    position: relative;
    top: -20px;
    
    .ticket_first{
      height: 40px;
      width: 40px;
      line-height: 40px;
      background-color:#ffb400;
      opacity: 0.5;
      margin: 60px 10px 10px 20px;
      color: white;
      text-align: center;
      float: left;
    }
    img{
      margin-top:10px ;
      height: 120px;
      width: 80px;
      float: left;
    }
    .ticket_info{
      height: 98px;
      width: 280px;
      position: absolute;
      top: 30px;
      right: 20px;
      border-bottom: 1px #999 solid;

      .ticket_name{
        font-size: 20px;
      }
      .ticket_lala{
        margin-top: 10px;
        color: rgba(240, 161, 15, 0.891);
      }
      .ticket_price {
        position: absolute;
        top: 70px;
        right: 0px;
        // font-size: 15px;
      }
      .ticket_num{
        position: absolute;
        top: 40px;
        right: 0px;
        // font-size: 15px;
      }
    }
  }
}

.block {
  width: 800px;
  cursor: pointer;
}
</style>
