<template>
  <el-container id="home">
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
            <h3>修改账号密码</h3>
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
            <el-form-item label="原密码：" prop="oddpass">
              <el-input type="password" v-model="ruleForm2.oddpass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="newpass">
              <el-input type="password" v-model="ruleForm2.newpass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="submitForm('ruleForm2')">修改</el-button>
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
      if (value !== this.ruleForm2.newpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 数据对象
      ruleForm2: {
        oddpass: "",
        newpass: "",
        checkPass: ""
      },
      // 验证规则
      rules2: {
        oddpass: [
          { required: true, message: "原密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
        ],
        newpass: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" },
          { validator: validatePass2, trigger: 'blur' }
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
          // 使用路由对象的push实现跳转
          // this.$router.push("/");
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


