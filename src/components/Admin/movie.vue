<template>
  <div>
    <div class="addBtn">
      <el-button type="primary" @click="handleAdd">增加剧目</el-button>
    </div>
    <el-table :data="movieList" stripe style="width: 100%" border>
      <el-table-column prop="movie_Name" label="电影名称" width="160"></el-table-column>
      <el-table-column prop="movie_Type" label="电影类型" width="160"></el-table-column>
      <el-table-column prop="movie_Brief" label="电影简介" width="160"></el-table-column>
      <el-table-column prop="movie_Time" label="电影时长" width="160"></el-table-column>
      <el-table-column prop="movie_Start" label="上映时间" width="180"></el-table-column>
      <el-table-column prop="movie_End" label="下架时间" width="180"></el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" @click="handleChange(scope.row)">更新</el-button>
          <el-button size="large" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 增添电影的对话框 -->
    <el-dialog title="添加电影" :visible.sync="addMovieVisible" width="50%" @close="addDialogClosed">
      <el-form ref="addFormRef" :model="addForm">
        <el-form-item prop="name">
          <el-input placeholder="电影名称" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="type">
          <el-input placeholder="电影类型" v-model="addForm.type"></el-input>
        </el-form-item>
        <el-form-item prop="brief">
          <el-input placeholder="电影简介" v-model="addForm.brief"></el-input>
        </el-form-item>
        <el-form-item prop="time">
          <el-input placeholder="电影时长" v-model="addForm.time"></el-input>
        </el-form-item>
        <el-form-item prop="start">
          <el-date-picker
            v-model="addForm.start"
            type="date"
            placeholder="选择上映时间"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item prop="end">
          <el-date-picker
            v-model="addForm.end"
            type="date"
            placeholder="选择下架时间"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addMovieVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd">添加</el-button>
      </div>
    </el-dialog>
    <!-- 更改电影信息对话框 -->
    <el-dialog title="编辑电影" :visible.sync="changeMovieVisible" width="50%">
      <div>
        <el-form ref="form" :model="changeForm" label-width="80px">
          <el-form-item>
            <el-input placeholder="电影名称" v-model="changeForm.movie_Name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="电影类型" v-model="changeForm.movie_Type"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="电影简介" v-model="changeForm.movie_Brief"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="电影时长" v-model="changeForm.movie_Time"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="changeForm.movie_Start" type="date" placeholder="选择上映时间"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="changeForm.movie_End" type="date" placeholder="选择下架时间"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="changeMovieVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitChange">更新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [],
      addMovieVisible: false,
      changeMovieVisible: false,
      addForm: {
        name: '',
        type: '',
        brief: '',
        time: '',
        start: '',
        end: ''
      },
      changeForm: {}
    }
  },
  methods: {
    handleAdd() {
      this.addMovieVisible = true
    },
    submitAdd() {
      this.$http.post('index.php/index/Moviec/add', this.addForm).then(res => {
        let that = this
        if (res.data.flag == 1) {
          this.$message({
            type: 'success',
            message: '添加电影成功',
            duration: 1500,
            onClose() {
              that.addMovieVisible = false
              that.getMovieList()
            }
          })
        } else {
          this.$message.error('添加失败')
        }
      })
    },
    addDialogClosed() {
      this.$refs.addFormRef.resetFields()
    },
    handleChange(row) {
      this.changeMovieVisible = true
      this.changeForm = row
    },
    async submitChange() {
      const { data: res } = await this.$http.post('index.php/index/Moviec/update', this.changeForm)
      let that = this
      if (res.flag === 1) {
        this.$message({
          type: 'success',
          message: '更新电影信息成功',
          duration: 1500,
          onClose() {
            that.changeMovieVisible = false
            that.getMovieList()
          }
        })
      } else {
        this.$message.error('更新电影信息失败！！！')
      }
    },
    handleDelete(row) {
      let that = this
      this.$confirm('此操作将永久删除该电影, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http.post('index.php/index/Moviec/delete', row).then(res => {
            if (res.data.flag === 1) {
              this.$message({
                type: 'success',
                message: '删除成功!',
                duration: 1000,
                onClose() {
                  that.getMovieList()
                }
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    async getMovieList() {
      const { data: res } = await this.$http.post('index.php/index/Performancec/show')
      this.movieList = res
    }
  },
  created() {
    this.getMovieList()
  }
}
</script>

<style lang="less" scoped>
.addBtn {
  text-align: right;
  margin-bottom: 10px;
}
</style>
