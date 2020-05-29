<template>
  <div class="Willon_wrapper">
    <div class="left_box">
      <div class="movie_info">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590666364097&di=a0be0e01ef235dadefc2612a4997bc0b&imgtype=0&src=http%3A%2F%2Fcs.vmovier.com%2FUploads%2Fpost%2F2018-03-16%2F5aabe10526d5b.jpg"
          alt
        />
        <span class="movie_name">复仇者联盟</span>
        <div class="movie_like">
          <i class="el-icon-star-on"></i>
          <span>2132人想看</span>
        </div>
        <span class="movie_data">上映日期 2020 07 05</span>
      </div>

      <div class="movie_info">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590667760698&di=6d8dbd44be8850868858873332585c0f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F2dbff1a7715cd7c69dc8fdcc42a785564388413c.jpg"
          alt
        />
        <span class="movie_name">流浪地球</span>
        <div class="movie_like">
          <i class="el-icon-star-on"></i>
          <span>2132人想看</span>
        </div>

        <span class="movie_data">上映日期 2020 07 05</span>
      </div>
      <div class="movie_info">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590667760698&di=535d121a826abf40d548ae0dee77e6d2&imgtype=0&src=http%3A%2F%2Ffile03.16sucai.com%2F2017%2F01%2F2017lwcixrtynx4.jpg"
          alt
        />
        <span class="movie_name">敦刻尔克</span>
        <div class="movie_like">
          <i class="el-icon-star-on"></i>
          <span>2132人想看</span>
        </div>

        <span class="movie_data">上映日期 2020 07 05</span>
      </div>
      <div class="movie_info">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590666364097&di=a0be0e01ef235dadefc2612a4997bc0b&imgtype=0&src=http%3A%2F%2Fcs.vmovier.com%2FUploads%2Fpost%2F2018-03-16%2F5aabe10526d5b.jpg"
          alt
        />
        <span class="movie_name">复仇者联盟</span>
        <div class="movie_like">
          <i class="el-icon-star-on"></i>
          <span>2132人想看</span>
        </div>

        <span class="movie_data">上映日期 2020 07 05</span>
      </div>

      <div class="movie_info">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590667760698&di=6d8dbd44be8850868858873332585c0f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F2dbff1a7715cd7c69dc8fdcc42a785564388413c.jpg"
          alt
        />
        <span class="movie_name">流浪地球</span>
        <div class="movie_like">
          <i class="el-icon-star-on"></i>
          <span>2132人想看</span>
        </div>

        <span class="movie_data">上映日期 2020 07 05</span>
      </div>
    </div>

    <div class="right_box">
      <div class="right_top">
        <span>最受期待</span>
        <a href>查看榜单--></a>
      </div>
      <div class="movie_list">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
*{
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
  width: 74%;
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
.right_top{
  margin-bottom: 50px;
}
.right_top a {
  float: right;
  text-decoration: none;
  color: rgba(240, 161, 15, 0.891);
  font-size: 18px;
  // padding-top: 10px;
}

.right_top span{
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
