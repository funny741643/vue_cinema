<template>
  <div class="register-container">
    <div class="register-wrapper">
      <div class="form-header">欢迎加入SOE影院</div>
      <el-form
        :model="registerForm"
        ref="registerFormRef"
        label-width="0px"
        :rules="registerFormRules"
        class="register-form"
      >
        <el-form-item prop="email">
          <el-input v-model="registerForm.email" placeholder="请输入注册邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入注册账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            placeholder="请输入注册密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="registerForm.checkPass"
            autocomplete="off"
            placeholder="请再次确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" class="registerBtn" @click="handleSubmit">点击注册</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入注册密码'))
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        email: '',
        username: '',
        password: '',
        checkPass: ''
      },
      registerFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入注册名称', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入注册密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        // 检验两次密码是否一致
        checkPass: [{ validator: validatePass2, trigger: ['blur', 'change'] }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.registerFormRef.resetFields()
    },
    async handleSubmit() {
      let _this = this
      const { data: res } = await this.$http.post('index.php/index/Userc/register', this.registerForm)
      this.resetLoginForm()
      if (res.flag === 1) {
        this.$message({
          message: '恭喜你，注册成功',
          type: 'success',
          duration: 1000,
          onClose() {
            _this.$router.push('/login')
          }
        })
      } else {
        this.$message.error('注册失败！')
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
.register-container {
  background-color: #2b4b6b;
  height: 100%;
}
.register-wrapper {
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.register-form {
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
