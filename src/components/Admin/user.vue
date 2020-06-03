<template>
  <div>
    <el-table :data="userList" stripe style="width: 100%" border>
      <el-table-column prop="user_Id" label="用户ID" width="180"></el-table-column>
      <el-table-column prop="user_Name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="user_Email" label="用户邮箱" width="180"></el-table-column>
      <el-table-column label="用户状态" width="180">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.user_Status" @change="userStateChanged(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" @click="handleChange(scope.row)">更新信息</el-button>
          <el-button size="large" type="danger" @click="handleDelete(scope.row)">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 更新用户信息 -->
    <el-dialog title="更新演出计划" :visible.sync="changeUserVisible" width="50%">
      <div>
        <el-form ref="form" :model="changeForm">
          <el-form-item>
            <el-input
              placeholder="用户ID"
              v-model="changeForm.user_Id"
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="用户名" v-model="changeForm.user_Name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="用户邮箱" v-model="changeForm.user_Email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="changeUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitChange">点击更新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
      changeForm: [],
      changeUserVisible: false
    }
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get('index.php/index/Adminc/show')
      res.forEach(item => {
        item.user_Status = item.user_Status === 1 ? true : false
      })
      this.userList = res
    },
    userStateChanged(row) {
      this.$http.post('index.php/index/Adminc/freeze', row).then(res => {
        if (res.data.flag === 1) {
          this.getUserList()
        }
      })
    },
    async handleDelete(row) {
      let that = this
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http.post('index.php/index/Adminc/delete', row).then(res => {
            if (res.data.flag === 1) {
              this.$message({
                type: 'success',
                message: '删除用户成功!',
                duration: 1000,
                onClose() {
                  that.getUserList()
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
    handleChange(row) {
      this.changeUserVisible = true
      this.changeForm = row
    },
    async submitChange() {
      let that = this
      const { data: res } = await this.$http.post('index.php/index/Adminc/update', this.changeForm)
      if (res.flag === 1) {
        this.$message({
          type: 'success',
          message: '修改用户信息成功!',
          duration: 1000,
          onClose() {
            that.getUserList()
            that.changeUserVisible = false
          }
        })
      }
    }
  },
  created() {
    this.getUserList()
  }
}
</script>

<style lang="less" scoped>
.addBtn {
  text-align: right;
  margin-bottom: 10px;
}
</style>
