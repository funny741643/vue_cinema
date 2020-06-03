<template>
  <div>
    <!-- 添加按钮 -->
    <div class="addBtn">
      <el-button type="primary" @click="handleAdd">增加影厅</el-button>
    </div>
    <!-- 影厅列表 -->
    <el-table :data="hallList" stripe style="width: 100%" border>
      <el-table-column prop="theater_Id" label="影厅Id" width="200"></el-table-column>
      <el-table-column prop="theater_Name" label="影厅名称" width="200"></el-table-column>
      <!-- <el-table-column prop="type" label="影厅类型" width="200"></el-table-column> -->
      <el-table-column prop="theater_colnum" label="座位行数" width="200"></el-table-column>
      <el-table-column prop="theater_rownum" label="座位列数" width="200"></el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" type="primary" @click="handleManage(scope.row)">座位管理</el-button>
          <el-button size="large" @click="handleChange(scope.row)">编辑</el-button>
          <el-button size="large" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加影厅 -->
    <el-dialog title="新增影厅" :visible.sync="addHallVisible" width="50%" @close="addDialogClosed">
      <el-form ref="addHallRef" :model="addForm" label-width="80px">
        <el-form-item label="影厅名称" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="座位行数" prop="col">
          <el-input v-model="addForm.col" type="number"></el-input>
        </el-form-item>
        <el-form-item label="座位列数" prop="row">
          <el-input v-model="addForm.row" type="number"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addHallVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd">点击添加</el-button>
      </div>
    </el-dialog>
    <!-- 编辑影厅 -->
    <el-dialog title="编辑影厅" :visible.sync="changeHallVisible" width="50%">
      <div>
        <el-form ref="form" :model="changeForm" label-width="100px">
          <el-form-item label="影厅Id">
            <el-input v-model="changeForm.theater_Id" type="number" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="影厅名称">
            <el-input v-model="changeForm.theater_Name"></el-input>
          </el-form-item>
          <el-form-item label="座位行数">
            <el-input v-model="changeForm.theater_colnum" type="number" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="座位列数">
            <el-input v-model="changeForm.theater_rownum" type="number" :disabled="true"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="changeHallVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitChange">点击更新</el-button>
      </div>
    </el-dialog>
    <!-- 座位管理 -->
    <el-dialog title="座位管理" :visible.sync="manageSeatVisible">
      <div>
        <div v-for="(itemRow,index) in seatRow" :key="index">
          <template v-for="item in seatList" >
            <div class="aSeat" 
              :key="item.seat_Row+'0'+item.seat_Col" 
              v-if="item.seat_Row === itemRow"
              :style="item.seat_Status === 1 ? styleOk: styleERR"
              @click="(e) => {changeSeatState(e,item)}">
            </div>
          </template>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="manageSeatVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitManage">更新状态</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hallList: [],
      seatList: [],
      seatRow: 0,
      addHallVisible: false,
      changeHallVisible: false,
      manageSeatVisible: false,
      addForm: {
        name: '',
        row: 0,
        col: 0
      },
      changeForm: [],
      styleOk: {
        background: '#ccc'
      },
      styleERR: {
        background: 'red'
      }
    }
  },
  methods: {
    getHallList() {
      this.$http.get('index.php/index/Theaterc/show').then(res => {
        this.hallList = res.data
      })
    },
    addDialogClosed() {
      this.$refs.addHallRef.resetFields()
    },
    handleAdd() {
      this.addHallVisible = true
    },
    async submitAdd() {
      const { data: res } = await this.$http.post('index.php/index/Theaterc/add', this.addForm)
      let that = this
      if (res.flag == 1) {
        this.$message({
          type: 'success',
          message: '添加影视厅成功',
          duration: 1500,
          onClose() {
            that.addHallVisible = false
            that.getHallList()
          }
        })
      } else {
        this.$message.error('添加影视厅失败')
      }
    },
    handleChange(row) {
      this.changeHallVisible = true
      this.changeForm = row
    },
    async submitChange() {
      const { data: res } = await this.$http.post('index.php/index/Theaterc/update', this.changeForm)
      if(res.flag === 1) {
        this.$message.success('更新成功')
        this.changeHallVisible = false
        getHallList()
      } else {
        this.$message.error('更新失败')
      }
    },
    handleManage(row) {
      this.manageSeatVisible = true
      this.seatRow = row.theater_rownum
      this.$http.post('index.php/index/Theaterc/shows',row).then((res)=>{
        this.seatList = res.data
        this.seatList.sort((pritem, item)=>{
          return item.row < pritem.row;
        })
      })
    },
    submitManage(){
      this.manageSeatVisible = false
    },
    changeSeatState(e,item) {
      if(e.target.style.background === "red"){
        e.target.style.background = "#ccc"
      } else {
        e.target.style.background = "red"
      }
      this.$http.post('index.php/index/Seatc/update',item).then((res)=> {
        if(res.data.flag === 1) {
          this.$message.success('更新状态成功')
        }
      })
    }
  },
  created() {
    this.getHallList()
  }
}
</script>

<style lang="less" scoped>
.addBtn {
  text-align: right;
  margin-bottom: 10px;
}
.aSeat {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-left: 10px;
  background-color: #ccc;
  cursor: pointer;
}
</style>
