<template>
  <div class="ticket_wrapper">
    <!-- 影厅选择 -->
    <div class="base_select">
      <h1>请按下面提示来进行购票：</h1>
      <div class="select_hall">
        <p>请选择你想进入的影厅：</p>
        <el-radio-group v-model="hall" @change="handleRadioChange">
          <el-radio-button
            :label="item.theater_Name"
            v-for="item in hallList"
            :key="item.theater_Name"
          ></el-radio-button>
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
        <div class="seatList">
          <!-- <a
            href="#"
            v-for="item in seatData"
            :key="item.seat_Row+'0'+item.seat_Col"
            @click="(e)=>{selectSeat(e,item)}"
            :style="item.seat_Status === 1? style1: style2"
          ></a>-->
          <div v-for="(itemRow,index) in seatRow" :key="index" class="rowBox">
            <template v-for="item in seatList">
              <div
                class="aSeat"
                :key="item.seat_Row+'0'+item.seat_Col"
                v-if="item.seat_Row === itemRow"
                :style="item.seat_Status === 1 ? style1: style2"
                @click="(e) => {selectSeat(e,item)}"
              ></div>
            </template>
          </div>
        </div>
        <!-- 购票按钮 -->
        <div>
          <el-button class="buy_btn" type="primary" @click="handleGetTicket">确定购买</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hall: 'N号激光厅',
      options: [],
      time: '',
      movie_Id: 0,
      hallList: [],
      performanceId: 0,
      theaterId: 0,
      seatList: [],
      seatRow: 0,
      style1: { background: '#ccc' },
      style2: { background: 'red' },
      getTicketInfo: {},
      key: 1
    }
  },
  methods: {
    // 挑选时间段
    async handleSelectTime() {
      const data = {}
      data.performanceId = this.performanceId
      data.theaterId = this.theaterId
      const { data: res } = await this.$http.post('index.php/index/Seatc/show', data)
      this.seatList = res
      document.getElementById('site_box').style.display = 'block'
    },
    // 挑选演出厅
    async handleRadioChange() {
      const selectedObject = this.hallList.find(item => {
        return item.theater_Name === this.hall
      })
      const data = {}
      data.theaterId = selectedObject.theater_Id
      data.movieId = this.movie_Id
      this.seatRow = selectedObject.theater_rownum
      const { data: res } = await this.$http.post('index.php/index/Performancec/select', data)
      this.performanceId = res[0].performance_Id
      this.theaterId = res[0].theater_Id
      const dateTime = res[0].performance_Start
      const date = dateTime.split(' ')[0]
      const time = dateTime.split(' ')[1]
      const constructor = {}
      constructor.value = date
      constructor.label = date
      constructor.children = []
      const constructorChild = {}
      constructor.children.push(constructorChild)
      constructorChild.value = time
      constructorChild.label = time
      const option = []
      option.push(constructor)
      this.options = option
    },
    // 挑选座位
    selectSeat(e, item) {
      const seats = [...document.getElementsByClassName('aSeat')]
      seats.forEach(item => {
        if (item.style.background !== 'red') {
          item.style.background = 'rgb(204, 204, 204)'
        }
      })
      if (item.seat_Status !== 1) return this.$message.info('当前座位不可选')
      e.target.style.background = 'skyblue'
      this.getTicketInfo.performanceId = this.performanceId
      this.getTicketInfo.seatId = item.seat_Id
    },
    // 确认购票
    handleGetTicket() {
      var arr = Object.keys(this.getTicketInfo)
      if (arr.length === 0) {
        return this.$message.info('请先选择座位，再购票')
      }
      console.log(this.getTicketInfo)
      this.$http.post('index.php/index/Ticketc/buy', this.getTicketInfo).then(res => {
        console.log(res)
      })
    }
  },
  // 获取演出厅列表
  created() {
    this.movie_Id = parseInt(this.$route.params.id)
    this.$http.get('index.php/index/Theaterc/show').then(res => {
      this.hallList = res.data
    })
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
    .seatList {
      width: 100%;
      height: 350px;
      .rowBox {
        display: flex;
        padding: 0 50px;
        margin-top: 10px;
        justify-content: space-around;
        .aSeat {
          width: 20px;
          height: 20px;
          background: #ccc;
          cursor: pointer;
        }
      }
    }
    .buy_btn {
      transform: translate(225px);
    }
  }
}
</style>
