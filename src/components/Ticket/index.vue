<template>
  <div class="ticket_wrapper">
    <!-- 影厅选择 -->
    <div class="base_select">
      <h1>请按下面提示来进行购票：</h1>
      <div class="select_hall">
        <p>请选择你想进入的影厅：</p>
        <el-radio-group v-model="hall">
          <el-radio-button label="N号激光厅"></el-radio-button>
          <el-radio-button label="IMAX巨幕厅"></el-radio-button>
          <el-radio-button label="杜比影院"></el-radio-button>
          <el-radio-button label="中国巨幕厅"></el-radio-button>
          <el-radio-button label="激光巨幕全景声厅"></el-radio-button>
        </el-radio-group>
      </div>
      <!-- 场次选择 -->
      <div class="select_time">
        <p>请选择你要观影的时间段：</p>
        <div>
          <el-cascader v-model="time" :options="options" @change="handleSelectTime"></el-cascader>
        </div>
      </div>
    </div>
    <!-- 座位选择 -->
    <div id="site_box">
      <p>请选择你观影的位置：</p>
      <div class="select_site">
        <div class="screen">屏幕位置</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hall: 'N号激光厅',
      options: [
        {
          value: 'today',
          label: '今天',
          children: [
            {
              value: '1',
              label: '8:00'
            },
            {
              value: '2',
              label: '12:00'
            },
            {
              value: '1',
              label: '15:00'
            }
          ]
        },
        {
          value: 'tomorrow',
          label: '明天',
          children: [
            {
              value: '1',
              label: '8:00'
            },
            {
              value: '2',
              label: '12:00'
            },
            {
              value: '1',
              label: '15:00'
            }
          ]
        }
      ],
      time: ''
    }
  },
  methods: {
    handleSelectTime() {
      console.log(this.time)
      document.getElementById('site_box').style.display = 'block'
    }
  }
}
</script>

<style lang="less" scoped>
#site_box {
    display: none;
}
.ticket_wrapper {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .base_select {
    width: 600px;
  }
  .select_site {
    width: 550px;
    height: 500px;
    background-color: #fff;
    .screen {
      width: 180px;
      height: 50px;
      line-height: 50px;
      color: #fff;
      text-align: center;
      transform: translate(185px);
      background-color: #bbb;
    }
  }
}
</style>
