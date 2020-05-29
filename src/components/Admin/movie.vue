<template>
  <div>
    <div class="addBtn">
      <el-button type="primary" @click="handleAdd">增加剧目</el-button>
    </div>
    <el-table :data="movieList" stripe style="width: 100%" border>
      <el-table-column prop="name" label="电影名称" width="180"></el-table-column>
      <el-table-column prop="type" label="电影类型" width="180"></el-table-column>
      <el-table-column prop="during" label="电影时长" width="180"></el-table-column>
      <el-table-column prop="start" label="上映时间" width="200"></el-table-column>
      <el-table-column prop="end" label="下架时间" width="200"></el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" @click="handleClick(scope.row)">编辑</el-button>
          <el-button size="large" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 增添影院的对话框 -->
    <el-dialog title="添加电影" :visible.sync="addMovieVisible" width="50%">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input placeholder="电影名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="电影类型"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="电影时长"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="value1" type="date" placeholder="选择上映时间"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="value1" type="date" placeholder="选择下架时间"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="addMovieVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [
        {
          name: '模仿游戏',
          type: '剧情',
          during: '120',
          start: '2012-03-09',
          end: '2012-05-09'
        },
        {
          name: '百鸟朝凤',
          type: '剧情 文化',
          during: '120',
          start: '2012-04-12',
          end: '2012-07-10'
        },
        {
          name: '618历险记',
          type: '科幻',
          during: '160',
          start: '2018-09-03',
          end: '2022-06-09'
        }
      ],
      addMovieVisible: false
    }
  },
  methods: {
    handleAdd() {
      this.addMovieVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.addBtn {
  text-align: right;
  margin-bottom: 10px;
}
</style>
