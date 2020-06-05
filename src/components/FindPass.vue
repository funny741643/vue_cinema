<template>
  <div class="findBox">
    <el-form :model="findForm" label-width="0px" :rules="findFormRules" ref="findFormRef">
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="findForm.password"
          placeholder="请输入新密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="findForm.checkPass"
          autocomplete="off"
          placeholder="请再次确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="handleSubmit">确认提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.findForm.checkPass !== '') {
          this.$refs.findFormRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.findForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      findForm: {
        password: '',
        checkPass: ''
      },
      findFormRules: {
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        // 检验两次密码是否一致
        checkPass: [{ validator: validatePass2, trigger: ['blur', 'change'] }]
      }
    }
  },
  methods: {
    async handleSubmit() {
      const data = {}
      data.password = this.findForm.password
      data.token = this.token
      const res = await this.$http.post('index.php/index/Repasswordc/solve',data)
      if(res.data.flag === 1) {
        this.$router.push('/login')
      }
    }
  },
  created() {
    this.token = this.$route.query.token
  }
}
</script>

<style lang="less" scoped>
.findBox {
  width: 500px;
  margin: 200px auto 0;
}
.btns {
  text-align: center;
}
</style>
