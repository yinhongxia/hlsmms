<template>
  <div id="loginBox">
    <!-- 卡片组件：登录的外框 -->
    <el-card class="box-card" id="login">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>
      <!-- 表单组件 -->
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userpsw">
          <el-input type="password" v-model="ruleForm2.userpsw" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 数据对象
      ruleForm2: {
        userpsw: "",
        username: ""
      },
      // 验证规则
      rules2: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        userpsw: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //   提交表单的方法
    submitForm(formName) {
      // 调用组件的验证方法，提交表单时验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 让ajax携带cookie证书
          this.axios.defaults.withCredentials = true;
          // 完成表单验证后直接发起ajax请求到后端
          this.axios
            .post(
              "http://127.0.0.1:9990/users/checkLogin",
              this.qs.stringify(this.ruleForm2)
            )
            .then(result => {
              if (result.data.isOk) {
                //登录成功
                this.$message({
                  message: "恭喜你，" + result.data.msg,
                  type: "success"
                });
                // 使用路由对象的push实现跳转
                this.$router.push("/");
              } else {
                //登录失败
                this.$message.error(result.data.msg);
              }
            })
            .catch(err => {
              this.$message.error(err.message);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
#loginBox {
  background-color: rgb(43, 39, 39);
}
#login {
  width: 500px;
  height: 290px;
  /* 让盒子水平和垂直绝对居中 */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#login .el-input {
  width: 80%;
}
</style>

