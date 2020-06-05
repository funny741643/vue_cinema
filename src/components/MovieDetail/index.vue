<template>
  <div class="detail_wrapper">
    <!-- 电影海报信息展示 -->
    <div class="movie_display">
      <div class="movie_playbill">
        <img :src="movieInfo.movie_Cover" width="240px" height="330px" />
      </div>
      <div class="movie_info">
        <h1 class="movie_name">{{movieInfo.movie_Name}}</h1>
        <p class="movie_type">{{movieInfo.movie_Type}}</p>
        <p class="movie_area">{{movieInfo.movie_Time}}</p>
        <p class="show_date">{{movieInfo.movie_Start}}大陆上映</p>
        <el-button type="primary" @click="handleWillBuy">购票</el-button>
      </div>
      <div class="office_records">
        <p>累计票房: 1440万</p>
      </div>
    </div>
    <!-- 电影剧情简介 -->
    <div class="story_introduction">
      <h1>剧情简介：</h1>
      {{movieInfo.movie_Brief}}
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

    <!-- 评论展示 -->
    <div class="comment_wrapper" v-for="item in commentList" :key="item.comment_Id">
      <div class="name">{{item.user_Name}}</div>
      <div class="date">
        {{item.comment_Date}}
        <i
          class="el-icon-star-on"
          v-for="item in 4"
          :key="item"
          style="color:rgba(240, 161, 15, 0.891)"
        ></i>
      </div>
      <div class="comment_info">{{item.comment_Content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      commentValue: '',
      id: 0,
      movieInfo: {},
      commentList: [],
      userInfo: {}
    }
  },
  methods: {
    async handleDialog() {
      const data = {}
      data.comment = this.commentValue
      data.movieId = this.id
      const { data: res } = await this.$http.post('index.php/index/Commentc/add', data)
      if (res.flag === 1) {
        this.$message.success('提交评论成功')
        this.getCommentList()
      }
      this.dialogVisible = false
    },
    getCommentList() {
      const data = { movie_Id: this.id }
      this.$http.post('index.php/index/Commentc/show', data).then(res => {
        this.commentList = res.data
      })
    },
    async getMovieDetail() {
      const { data: res } = await this.$http.post('index.php/index/Performancec/content', { movie_Id: this.id })
      this.movieInfo = res
    },
    handleWrite() {
      if (this.userInfo.user_Id) {
        this.dialogVisible = true
      } else {
        this.$router.push('/login')
      }
    },
    handleWillBuy() {
      if (this.userInfo.user_Id) {
        this.$router.push(`/ticket/${this.id}`)
      } else {
        this.$router.push('/login')
      }
    }
  },
  created() {
    this.id = parseInt(this.$route.params.id)
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.getMovieDetail()
    this.getCommentList()
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
.comment_wrapper {
  width: 99%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  .name {
    font-size: 25px;
  }
  .date {
    color: #999;
    margin-bottom: 20px;
  }
}
</style>