<template>
  <div>
    <el-table :data="ticketList" stripe style="width: 100%" border>
      <el-table-column prop="movie_Name" label="电影名称" width="200"></el-table-column>
      <el-table-column prop="theater_Name" label="影厅名称" width="200"></el-table-column>
      <el-table-column prop="movie_Price" label="电影价格" width="100"></el-table-column>
      <el-table-column prop="seat_Row" label="座位行" width="160"></el-table-column>
      <el-table-column prop="seat_Col" label="座位列" width="160"></el-table-column>
      <el-table-column prop="performance_Start" label="开始时间" width="200"></el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" type="danger" @click="handleAbound(scope.row)">退票</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalInfo: {},
      ticketList: []
    }
  },
  methods: {
    async getTickets() {
      const data = { user_Id: this.personalInfo.user_Id }
      const { data: res } = await this.$http.post('index.php/index/Ticketc/show', data)
      this.ticketList = res
    },
    handleAbound(row) {
      console.log(row)
      this.$confirm('此操作将退回该张票, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then( async () => {
          let that = this
          const { data: res } = await this.$http.post('index.php/index/Ticketc/abandon', row)
          if (res.flag === 1) {
          this.$message({
              type: 'success',
              message: '删除成功!',
              duration: 1000,
              onClose() {
                that.getTickets()
              }
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  created() {
    this.personalInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.getTickets()
  }
}
</script>

<style lang="less">
</style>
