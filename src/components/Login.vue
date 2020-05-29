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
          <el-button type="primary" class="loginBtn" @click="handleLogin">点击登录</el-button>
          <el-link href="#/register">前往注册</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
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
      }
    }
  },
  methods: {
    async handleLogin() {
      const {data: res} = await this.$http.post('index.php/index/Userc/index', this.loginForm)
      let _this = this
      if (res.flag === 1) {
        // this.userToken = 'Bearer' + res.data.data.body.token;
        // 将用户token保存到vuex中
        // this.changeLogin({ Authorization: _this.userToken });
        // this.$message.success('恭喜你，登录成功')
        this.$message({
          type: 'success',
          message: '恭喜你，登录成功',
          duration: 1000,
          onClose() {
            _this.$router.push('/home')
          }
        })
      } else {
        this.$message.error('登录失败，请验证你的密码是否正确')
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
}
</style>
