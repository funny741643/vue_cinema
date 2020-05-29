<template>
  <div>
    <el-table :data="hallList" stripe style="width: 100%" border>
      <el-table-column prop="id" label="影厅id" width="200"></el-table-column>
      <el-table-column prop="type" label="影厅类型" width="200"></el-table-column>
      <el-table-column prop="row" label="座位行数" width="200"></el-table-column>
      <el-table-column prop="col" label="座位列数" width="200"></el-table-column>
      <el-table-column prop="operator" label="操作">
        <template slot-scope="scope">
          <el-button size="large" @click="handleClick(scope.row)">编辑</el-button>
          <el-button size="large" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
