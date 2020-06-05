<template>
  <div>
    <div class="addBtn">
      <el-button type="primary" @click="handleAdd">增加演出</el-button>
    </div>
    <el-table :data="planList" stripe style="width: 100%" border>
      <el-table-column prop="performance_Id" label="演出Id" width="120"></el-table-column>
      <el-table-column prop="movie_Name" label="电影名称" width="180"></el-table-column>
      <el-table-column prop="theater_Name" label="演出厅名称" width="160"></el-table-column>
      <el-table-column prop="movie_Price" label="电影价格" width="180"></el-table-column>
      <el-table-column prop="performance_Start" label="开始时间" width="200"></el-table-column>
      <el-table-column prop="performance_End" label="结束时间" width="200"></el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" @click="handleChange(scope.row)">编辑</el-button>
          <el-button size="large" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加演出计划 -->
    <el-dialog title="新增演出" :visible.sync="addPlanVisible" width="50%" @close="dialogClose">
      <div>
        <el-form ref="addPlanRef" :model="addForm" label-width="100px">
          <el-form-item label="电影名称" prop="movie_Name">
            <el-input v-model="addForm.movie_Name" @input="movieNameChange"></el-input>
          </el-form-item>
          <div class="movie_list">
            <p
              v-for="(item,index) in movieList"
              :key="index"
              style="margin-bottom: '5px'"
              @click="selectMovie(item)"
            >{{item.movie_Name}}</p>
          </div>
          <el-form-item label="选择演出厅" prop="theater_Name">
            <el-select v-model="addForm.theater_Id" placeholder="请选择演出厅">
              <el-option
                v-for="item in hallList"
                :key="item.theater_Id"
                :label="item.theater_Name"
                :value="item.theater_Id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="添加票价" prop="movie_Price">
            <el-input v-model="addForm.movie_Price"></el-input>
          </el-form-item>
          <el-form-item label="开始时间" prop="performance_Start">
            <el-date-picker
              v-model="addForm.performance_Start"
              type="datetime"
              placeholder="选择开始时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="addPlanVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd">点击添加</el-button>
      </div>
    </el-dialog>
    <!-- 更新演出计划 -->
    <el-dialog title="更新演出计划" :visible.sync="changePlanVisible" width="50%">
      <div>
        <el-form ref="form" :model="changeForm" label-width="100px">
          <el-form-item label="演出Id">
            <el-input
              placeholder="演出Id"
              v-model="changeForm.performance_Id"
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="电影名称" prop="movie_Name">
            <el-input v-model="changeForm.movie_Name" @input="movieNameChange2"></el-input>
          </el-form-item>
          <div class="movie_list">
            <p
              v-for="(item,index) in movieList"
              :key="index"
              style="margin-bottom: '5px'"
              @click="selectMovie2(item)"
            >{{item.movie_Name}}</p>
          </div>
          <el-form-item label="更改票价" prop="movie_Price">
            <el-input v-model="changeForm.movie_Price"></el-input>
          </el-form-item>
          <el-form-item label="选择演出厅" prop="theater_Name">
            <el-select v-model="changeForm.theater_Id" placeholder="请选择演出厅">
              <el-option
                v-for="item in hallList"
                :key="item.theater_Id"
                :label="item.theater_Name"
                :value="item.theater_Id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="changeForm.performance_Start"
              type="datetime"
              placeholder="更改开始时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="changePlanVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitChange">点击更新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planList: [],
      addForm: {
        movie_Name: '',
        theater_Id: '',
        movie_Price: '',
        performance_Start: ''
      },
      movieList: [],
      hallList: [],
      changeForm: [],
      addPlanVisible: false,
      changePlanVisible: false,
      movie_Time: '',
      movie_Id: 0
    }
  },
  methods: {
    async getPlanList() {
      const { data: res } = await this.$http.get('index.php/index/Performancec/pshow')
      this.planList = res
    },
    async getHallList() {
      const { data: res } = await this.$http.get('index.php/index/Theaterc/show')
      this.hallList = res
    },
    dialogClose() {
      this.$refs.addPlanRef.resetFields()
    },
    handleAdd() {
      this.addPlanVisible = true
    },
    movieNameChange() {
      let data = {}
      data.str = this.addForm.movie_Name
      this.$http.post('index.php/index/Moviec/find', data).then(res => {
        this.movieList = res.data
      })
    },
    movieNameChange2() {
      let data = {}
      data.str = this.changeForm.movie_Name
      this.$http.post('index.php/index/Moviec/find', data).then(res => {
        this.movieList = res.data
      })
    },
    selectMovie(item) {
      this.addForm.movie_Name = item.movie_Name
      this.movie_Time = item.movie_Time
      this.movie_Id = item.movie_Id
    },
    selectMovie2(item) {
      this.changeForm.movie_Name = item.movie_Name
      this.changeForm.movie_Id = item.movie_Id
      // this.movie_Time = item.movie_Time
      // this.movie_Id = item.movie_Id
    },
    // 增减演出计划
    async submitAdd() {
      this.addForm.movie_Time = this.movie_Time
      this.addForm.movie_Id = this.movie_Id
      const { data: res } = await this.$http.post('index.php/index/Performancec/plan', this.addForm)
      if (res.flag === 1) {
        this.$message.success('添加演出计划成功')
        this.getPlanList()
        this.addPlanVisible = false
      } else {
        this.$message.error('添加演出计划失败')
      }
    },
    handleChange(row) {
      this.changePlanVisible = true
      this.changeForm = row
    },
    submitChange() {
      this.$http.post('index.php/index/Performancec/update', this.changeForm).then(res => {
        if (res.data.flag === 1) {
          this.$message.success('更新成功')
          this.changePlanVisible = false
          this.getPlanList()
        } else {
          this.$message.error('更新失败')
        }
      })
    },
    // 删除演出计划
    async handleDelete(row) {
      let that = this
      this.$confirm('此操作将永久删除该场演出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data: res } = await this.$http.post('index.php/index/Performancec/delete', { performance_Id: row.performance_Id })
            if (res.flag === 1) {
              this.$message({
                type: 'success',
                message: '删除成功!',
                duration: 1000,
                onClose() {
                  that.getPlanList()
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
    this.getPlanList()
    this.getHallList()
  }
}
</script>

<style lang="less" scoped>
.addBtn {
  text-align: right;
  margin-bottom: 10px;
}
.movie_list {
  padding: 0 100px 10px;
  p {
    width: 200px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    background: #ffd;
    color: black;
  }
}
</style>
