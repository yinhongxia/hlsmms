<template>
  <el-container id="Home">
    <!-- 左侧 -->
    <LeftMenu></LeftMenu>
    <!-- 右侧 -->
    <el-container id="mainContent">
      <!-- 右侧顶部 -->
      <RightHeader></RightHeader>
      <!-- 右侧中间内容 -->
      <el-main>
        <!-- 卡片组件 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加管理员账号</h3>
          </div>
          <!-- 表单组件 -->
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
            label-position="top"
          >
            <el-form-item label="用户名：" prop="username">
              <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选择用户组：" prop="userGroup">
              <el-select v-model="ruleForm2.userGroup" placeholder="选择用户组">
                <el-option label="超级管理员" value="super"></el-option>
                <el-option label="普通管理员" value="general"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="submitForm('ruleForm2')">添加</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
      <!-- 右侧页脚 -->
      <RightFooter></RightFooter>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from "../components/leftMenu";
import RightHeader from "../components/rightHeader";
import RightFooter from "../components/rightFooter";

export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 数据对象
      ruleForm2: {
        pass: "",
        checkPass: "",
        username: "",
        userGroup: ""
      },
      // 验证规则
      rules2: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 8 到 18 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ],
        userGroup: [
          { required: true, message: "请选择用户组", trigger: "change" }
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
          // 发送ajax
          this.axios
            .post(
              "http://127.0.0.1:9990/users/addAdmin",
              this.qs.stringify(this.ruleForm2)
            )
            .then(result => {
              console.log("服务器成功返回的信息", result);
              // 根据返回的结果处理业务逻辑
              if (result.data.isOk) {
                this.$message({
                  message: result.data.msg,
                  type: "success"
                });
              } else {
                this.$message.error(result.data.msg);
              };
              setTimeout(()=>{
                this.$router.push('/AccManagement')
              },100)
            })
            .catch(err => {
              console.error("服务器失败返回的信息", err);
            });
        } else {  
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    LeftMenu,
    RightHeader,
    RightFooter
  }
};
</script>


