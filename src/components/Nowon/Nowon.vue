<template>
  <div class="nowon-Wrapper">
    <div class="block">
      <el-carousel trigger="click" height="500px" interval="5000">
        <el-carousel-item>
          <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589804916891&di=19531db175625ec1a78e4baaf1aba71c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b892571dc6e632f875a399a812ae.jpg%401280w_1l_2o_100sh.jpg' width="800" height="500" />
          <!-- <h3 class="small">{{ item }}</h3> -->
        </el-carousel-item>
        <el-carousel-item>
          <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589805005347&di=fec97102b3a9db7d1eb3cd73806fb802&imgtype=0&src=http%3A%2F%2Fi0.wp.com%2Fimg.char.tw%2Fuploads%2F20181205175243_93.jpg%3Fresize%3D1600%2C900' width="800" height="500" />
          <!-- <h3 class="small">{{ item }}</h3> -->
        </el-carousel-item>
        <el-carousel-item>
          <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589805005344&di=d7227766ecd99618cf0a0aec345a97aa&imgtype=0&src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2013%2F0617%2F20130617091530221.jpg' width="800" height="500" />
          <!-- <h3 class="small">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="ranking">
      <h2>今日票房</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nowon-Wrapper {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}
.ranking {
  width: 300px;
  color: red;
  text-align: center;
}
.block {
  width: 800px;
  cursor: pointer;
}
</style>
