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
            <h3>账号管理</h3>
          </div>
          <el-table :data="tableData" stripe>
            <el-table-column prop="userid" label="编号"></el-table-column>
            <el-table-column prop="username" label="用户名称"></el-table-column>
            <el-table-column prop="usergroup" label="用户组"></el-table-column>
            <el-table-column prop="addDate" label="添加日期" :formatter="formatter">
              <!-- <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.addDate | formatDate }}</span>
              </template>-->
            </el-table-column>
            <el-table-column label="管理">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row.userid)">
                  <i class="el-icon-edit">编辑</i>
                </el-button>
                <!-- didlog对话框 -->
                <el-dialog title="修改用户资料" :visible.sync="dialogFormVisible">
                  <!-- 表单组件 -->
                  <el-form
                    :model="ruleForm2"
                    status-icon
                    :rules="rules2"
                    ref="ruleForm2"
                    label-width="100px"
                    class="demo-ruleForm"
                    label-position="right"
                  >
                    <el-form-item label="账号：" prop="username">
                      <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="userpsw">
                      <el-input type="password" v-model="ruleForm2.userpsw" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户组：" prop="usergroup">
                      <el-select v-model="ruleForm2.usergroup" placeholder="选择用户组">
                        <el-option label="超级管理员" value="super"></el-option>
                        <el-option label="普通管理员" value="general"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm2')">确定修改</el-button>
                  </div>
                </el-dialog>

                <!-- 1）前端--点击删除：绑定事件，按id删除 -->
                <el-button size="mini" type="danger" @click="handleDelete(scope.row.userid)">
                  <i class="el-icon-delete">删除</i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
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
// 引入moment
import moment from "moment";

export default {
  components: {
    LeftMenu,
    RightHeader,
    RightFooter
  },

  data() {
    return {
      tableData: [],
      ruleForm2: [],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      // 验证规则
      rules2: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        userpsw: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
        ],
        usergroup: [
          { required: true, message: "请选择用户组", trigger: "change" }
        ]
      }
    };
  },

  methods: {
    handleEdit(userid) {
      // 获取旧数据，并回填
      // 前端：点击编辑按钮，绑定事件执行修改方法，按userid执行
      // 前端：发送ajax请求到后端，获取旧数据
      this.axios
        .get(`http://127.0.0.1:9990/users/getuserbyid?userid=${userid}`)
        .then(oldData => {
          console.log("后端返回的旧数据", oldData.data[0]);
          // 前端：接收旧数据回填到表单中
          this.dialogFormVisible = true;
          this.ruleForm2 = oldData.data[0];
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    handleDelete(userid) {
      // 2）前端--发送ajax给后端，并将userid传给后端
      this.axios
        .get(`http://127.0.0.1:9990/users/deluser?userid=${userid}`)
        .then(result => {
          console.log(result.data);
          // 6）前端--根据返回结果处理业务逻辑
          if (result.data.isOk) {
            // 更新页面
            this.getuser();
            // this.$router.push("/AccManagement");
            this.$message({
              message: result.data.msg,
              type: "success"
            });
          } else {
            this.$message.error(result.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 定义过滤事件方法
    formatter(oddDate) {
      // 格式化日期
      return moment(oddDate).format("YYYY-MM-DD");
    },
    // 封装发送ajax，更新页面方法
    getuser() {
      this.axios
        .get("http://127.0.0.1:9990/users/getusers")
        .then(result => {
          console.log("后端返回的数据", result.data);
          this.tableData = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm(formName) {
      // 关闭dialog对话框
      this.dialogFormVisible = false;
      // 调用组件的验证方法，提交表单时验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 发送ajax
          this.axios
            .post(
              "http://127.0.0.1:9990/users/usersave",
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
                // 发送ajax,更新页面
                this.getuser();
              } else {
                this.$message.error(result.data.msg);
                // 跳回表单
                this.dialogFormVisible = true;
              }
              setTimeout(() => {
                this.$router.push("/AccManagement");
              }, 100);
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
  created() {
    // 发送ajax,更新页面
    this.getuser();
  }
  /*   // 定义过滤器
  filters: {
    formatDate(oddDate) {
      // 格式化日期
      return moment(oddDate).format("YYYY-MM-DD");
    }
  } */
};
</script>
<style>
</style>

