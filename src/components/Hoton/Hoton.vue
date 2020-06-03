<template>
  <div class="Hoton_wrapper">
    <div class="Hoton_top">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item >
          <img class="movie_pic" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590926360707&di=585f1d429ac16fb5178b991e6bb49ac3&imgtype=0&src=http%3A%2F%2Fi0.wp.com%2Fimg.char.tw%2Fuploads%2F20181205171539_31.jpg%3Fresize%3D1600%2C609" alt="">
        </el-carousel-item>

        <el-carousel-item >
          <img  class="movie_pic" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590749085967&di=33e0797a46fdc4c52d7dab936e661c81&imgtype=0&src=http%3A%2F%2Fi0.wp.com%2Fimg.char.tw%2Fuploads%2F20181017032626_48.jpg%3Fresize%3D1600%252C609" alt="">
        </el-carousel-item> 
        
        <el-carousel-item >
          <img  class="movie_pic" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590749403349&di=fd5c9730087f47426ce093ac01bbba29&imgtype=0&src=http%3A%2F%2Fimage14.m1905.cn%2Fuploadfile%2F2014%2F0425%2F20140425024203978344.jpg" alt="">
        </el-carousel-item> 
      </el-carousel>
    </div>

    <div class="Hoton_word">
      <span>必看电影(100部)</span>
      <p>全部
        <i class="el-icon-right"></i>
      </p>
    </div>

    <div class="Hoton_middle">
      <div v-for="item in 5" :key="item" class="Hoton_movie_wrapper">
        <div class="movie_info">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590666364097&di=a0be0e01ef235dadefc2612a4997bc0b&imgtype=0&src=http%3A%2F%2Fcs.vmovier.com%2FUploads%2Fpost%2F2018-03-16%2F5aabe10526d5b.jpg"
            alt
          />
          <span class="movie_name">复仇者联盟</span>
          <div class="line_box"></div>
          <span class="movie_firstNumber">9.7</span>
          <span class="movie_firstNumber"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.Hoton_wrapper {
  height: 1200px;
  width: 85%;
  margin: 0 auto;
  position: relative;
  // background-color: #bfa;
}

.Hoton_top {
  height: 300px;
  width: 80%;
  margin: 0 auto;
}

.movie_pic{
  height: 100%;
  width: 100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.Hoton_word{
  height: 100px;
  width: 100%;
  position: relative;
  span{
    font-size: 30px;
    position: absolute;
    bottom: 10px;

  }
  p{
    position: absolute;
    top: -30px;
    right: 20px;
    line-height: 100px;
    font-size: 30px;
  }
}
.Hoton_middle {
  height: 600px;
  div{
    float: left;
  }
}

.movie_info {
  height: 320px;
  width: 200px;
  display: inline-block;
  margin-right:50px;
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
  bottom: 19px;
  left: 13px;
  font-size: 22px;
}

.line_box{
  height:64px ;
  width: 133px;
  border-right: 1px solid rgb(228, 216, 216);
  position: absolute;
  bottom: 0;
}

.movie_firstNumber{
  font-size: 26px;
  position: absolute;
  bottom: 18px;
  right: 15px;
  color: rgba(240, 161, 15, 0.891);;
}
</style>