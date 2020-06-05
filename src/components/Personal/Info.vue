<template>
  <div>
    <div>
      <h1>个人信息</h1>
      <p>我的用户名：{{personalInfo.user_Name}}</p>
      <p>我的邮箱：{{personalInfo.user_Email}}</p>
      <p>我的状态：{{personalInfo.user_Status}}</p>
      <el-button type="primary" @click="handleChangePass">更改密码</el-button>
      <el-button type="primary" @click="handleChangeEmail">更新邮箱</el-button>
    </div>
    <!-- 更改密码对话框 -->
    <el-dialog title="更改我的密码" :visible.sync="dialogVisible" width="50%" @close="PassDialogClose">
      <el-form
        :model="personalPassForm"
        ref="personalFormRef"
        label-width="100px"
        :rules="personalFormRules"
      >
        <el-form-item prop="oldPassword">
          <el-input v-model="personalPassForm.oldPassword" placeholder="请输入旧密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input
            type="password"
            v-model="personalPassForm.newPassword"
            placeholder="请输入新密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="personalPassForm.checkPass"
            autocomplete="off"
            placeholder="请再次输入新密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlePassSubmit">确定更新</el-button>
      </div>
    </el-dialog>
    <!-- 更改邮箱对话框 -->
    <el-dialog
      title="更改我的邮箱"
      :visible.sync="EmailDialogVisible"
      width="50%"
      @close="EmailDialogClose"
    >
      <el-form ref="emailFormRef" :model="emailForm" :rules="emailFormRules">
        <el-form-item prop="value">
          <el-input v-model="emailForm.value" placeholder="请填入新邮箱"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="EmailDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEmailSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.personalPassForm.checkPass !== '') {
          this.$refs.personalFormRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.personalPassForm.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      personalPassForm: {
        oldPassword: '',
        newPassword: '',
        checkPass: ''
      },
      personalInfo: {},
      dialogVisible: false,
      EmailDialogVisible: false,
      emailForm: {},
      personalFormRules: {
        // 验证当前密码
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        // 检验两次密码是否一致
        checkPass: [{ validator: validatePass2, trigger: ['blur', 'change'] }]
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
    handleChangePass() {
      this.dialogVisible = true
    },
    handleChangeEmail() {
      this.EmailDialogVisible = true
    },
    handlePassSubmit() {
      this.personalPassForm.user_Id = this.personalInfo.user_Id
      console.log(this.personalPassForm)
      this.$http.post('index.php/index/Userc/password', this.personalPassForm).then((res)=>{
          console.log(res)
      })
      this.dialogVisible = false
    },
    handleEmailSubmit() {
      console.log(this.emailForm)
      this.EmailDialogVisible = false
    },
    PassDialogClose() {
      //   this.$refs.personalFormRef.resetFields()
    },
    EmailDialogClose() {
      //   this.$refs.emailFormRef.resetFields()
    }
  },
  created() {
    this.personalInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.personalInfo.user_Status = this.personalInfo.user_Status === 1 ? '正常' : '已禁用'
  }
}
</script>

<style lang="less" scoped>
</style>
