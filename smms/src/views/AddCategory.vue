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
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加管理</h3>
          </div>
          <!-- 表单组件 -->
          <el-form labelPosition="top" status-icon label-width="80px" :model="form" :rules="rules">
            <el-form-item label="所属分类：" prop="category">
              <el-select v-model="form.category" placeholder="-----顶级分类-----">
                <el-option label="类别一" value="类别一"></el-option>
                <el-option label="类别二" value="类别二"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分类名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="状态：">
              <el-radio-group v-model="form.resource">
                <el-radio label="启用"></el-radio>
                <el-radio label="禁用" ></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="submitForm('form')">添加</el-button>
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
    return {
      // 数据对象
      form: {
        category: "",
        name: "",
        resource:"禁用"
      },
      // 验证规则
      rules: {
        name: [
          { required: true, message: "分类名称不能为空", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    LeftMenu,
    RightHeader,
    RightFooter
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
  }
};
</script>
<style>
</style>

