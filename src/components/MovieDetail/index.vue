<template>
  <div class="detail_wrapper">
    <!-- 电影海报信息展示 -->
    <div class="movie_display">
      <div class="movie_playbill">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
          width="240px"
          height="330px"
        />
      </div>
      <div class="movie_info">
        <h1 class="movie_name">IRON MAN3</h1>
        <p class="movie_type">科幻 动作 漫威</p>
        <p class="movie_area">美国/120分钟</p>
        <p class="show_date">2018-09-10大陆上映</p>
        <el-button type="primary">
          <a href="#/ticket/440">购票</a>
        </el-button>
      </div>
      <div class="office_records">
        <p>累计票房: 1440万</p>
      </div>
    </div>
    <!-- 电影剧情简介 -->
    <div class="story_introduction">
      <h1>剧情简介：</h1>时光荏苒，岁月无声。日子不紧不慢的如涓涓溪水静静的流去，而从身边流去的只有时光，沉淀下来的是与你一路相伴的幸福和快乐，温馨和安暖。
      于我，在这个凋零都感受到诗意横溢的秋，只想做一件事，拈一片绯红的枫叶，轻轻地刻上我的心语。对信仰，是我今生永不改变的主题！
      而后，幸福的寄往有你的那个城市。从此，在我心里，于我的生命里，轻握你许的安暖，静静地在岁月的彼岸，为你守候一世永恒！
      一段情，反复的掂量，最后加深了岁月的绵长。一路追赶里，一路追忆里，最后得到的是什么，最后又失去的是什么。
      或许，只有我们在静思的时候才会明白，这路的追忆里，我们得到的快乐往往比痛苦要少。当相思成殇的时候，除了对月徒悲叹之外，什么也不曾抓到。
    </div>
    <!-- 电影短评 -->
    <div class="short_comment">
      <div class="short_comment_header">
        <h1>热门短评：</h1>
        <el-button type="warning" @click="handleWrite">我要写短评</el-button>
      </div>
      <hr />
    </div>
    <!-- 撰写短评对话框 -->
    <div>
      <el-dialog title="写短评:" :visible.sync="dialogVisible" width="50%">
        <p>我来康康你写了啥子：</p>
        <el-input v-model="commentValue"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleDialog">不想写了，哼</el-button>
          <el-button type="primary" @click="handleDialog">我写完啦</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      commentValue: ''
    }
  },
  methods: {
    handleDialog() {
      this.dialogVisible = false
    },
    handleWrite() {
        this.dialogVisible = true
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="less" scoped>
.story_introduction {
  margin: 50px 0 50px;
}
.short_comment_header {
  display: flex;
  height: 50px;
  line-height: 50px;
  h1 {
    margin: 0;
  }
  .el-button {
    height: 40px;
    margin-top: 5px;
    margin-left: 100px;
  }
}
.office_records {
  margin-left: 50px;
  width: 300px;
  position: relative;
  p {
    position: absolute;
    right: 0;
    bottom: 10px;
    color: brown;
  }
}
.movie_info {
  margin-left: 50px;
  p {
    margin: 0;
  }
  h1 {
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .el-button {
    margin-top: 120px;
    // margin-right: 0;
    margin-left: 85px;
  }
}

.detail_wrapper {
  width: 90%;
  margin: 0 auto;
}
.movie_display {
  width: 100%;
  height: 300px;
  background-color: #fff;
  display: flex;
}
</style>