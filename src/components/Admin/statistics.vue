<template>
  <div>
    <div id="main" style="width: 750px;height:400px;"></div>
    <div class="searchBox">
      <el-form ref="searchFormRef" :model="searchForm">
        <el-form-item prop="value">
          <el-input v-model="searchForm.value" placeholder="检索">
            <el-button slot="append" icon="el-icon-search" @click="handleFind"></el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <div>
        <p>电影名：{{aMovie.movie_Name}}</p>
        <p>演出厅Id:{{aMovie.statistics_Id}}</p>
        <p>出售演出票数:{{aMovie.statistics_Num}}</p>
        <p>票房:{{aMovie.statistics_Pnum}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// 1.导入 echarts
import echarts from 'echarts'
import _ from 'lodash'
export default {
  data() {
    return {
      searchForm: {
        value: ''
      },
      movieRankList: [],
      aMovie: {}
    }
  },
  methods: {
    handleFind() {
      this.aMovie = this.movieRankList.find(item => {
        return item.movie_Name === this.searchForm.value
      })
      this.$refs.searchFormRef.resetFields()
    }
  },
  async mounted() {
    const { data: res } = await this.$http.get('index.php/index/Statisticsc/show')
    this.movieRankList = res
    const xdata = res.map(item => {
      return item.movie_Name
    })
    const ydata = res.map(item => {
      return item.statistics_Pnum
    })
    var myChart = echarts.init(document.getElementById('main'))
    let option = {
      xAxis: {
        type: 'category',
        data: xdata
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: ydata,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style lang="less" scoped>
.searchBox {
  width: 500px;
}
</style>
