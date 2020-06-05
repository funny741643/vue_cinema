<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="form-header">SOE影院欢迎您</div>
      <el-form
        :model="loginForm"
        ref="loginFormRef"
        label-width="0px"
        :rules="loginFormRules"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <!-- 忘记密码 -->
          <el-tooltip class="item" effect="dark" content="忘记密码了，呜呜" placement="top-start">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              class="forgetPass"
              @click="handleChangeEmail"
            ></el-button>
          </el-tooltip>
          <el-button type="primary" class="loginBtn" @click="handleLogin">点击登录</el-button>
          <el-link href="#/register">前往注册</el-link>
        </el-form-item>
      </el-form>
    </div>
    <!-- 邮箱地址 -->
    <el-dialog
      title="我的邮箱地址"
      :visible.sync="EmailDialogVisible"
      width="50%"
      @close="EmailDialogClose"
    >
      <el-form ref="emailFormRef" :model="emailForm" :rules="emailFormRules">
        <el-form-item prop="email">
          <el-input v-model="emailForm.email" placeholder="请填入您的邮箱"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="EmailDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEmailSubmit">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      EmailDialogVisible: false,
      emailForm: {},
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在6到12位之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      emailFormRules: {
        value: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    handleChangeEmail() {
      this.EmailDialogVisible = true
    },
    async handleEmailSubmit() {
      console.log(this.emailForm)
      const res = await this.$http.post('index.php/index/Repasswordc/forget', this.emailForm)
      if(res.data == true) {
        this.EmailDialogVisible = false
        this.EmailDialogClose()
      }
    },
    EmailDialogClose() {
      this.$refs.emailFormRef.resetFields()
    },
    async handleLogin() {
      console.log(this.loginForm)
      const { data: res } = await this.$http.post('index.php/index/Userc/index', this.loginForm)
      let _this = this
      if (res.flag.user_Status === 1) {
        this.$message({
          type: 'success',
          message: '恭喜你，登录成功',
          duration: 1000,
          onClose() {
            localStorage.setItem('userInfo', JSON.stringify(res.flag))
            _this.$router.push('/home')
          }
        })
      } else if (res.flag == 3) {
        this.$message.error('登录失败，请验证你的密码是否正确')
      } else if (res.flag == 2) {
        this.message.error('该账户已冻结')
      } else if (res.flag == 4) {
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.form-header {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  position: absolute;
  top: 30px;
}
.login-container {
  background-color: #2b4b6b;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591279941466&di=2d0207ed69568cfe34cab6c6c1a6d9d1&imgtype=0&src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F202004%2F28%2F232531etkhnpud1wilji7l.jpg&qq-pf-to=pcqq.c2c);
  background-size: cover;
  height: 100%;
}
.login-wrapper {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
  .loginBtn {
    margin-right: 20px;
  }
  .forgetPass {
    position: relative;
    right: 180px;
  }
}
</style>
