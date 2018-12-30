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
            <el-table-column prop="username" label="用户名称"></el-table-column>
            <el-table-column prop="userGroup" label="用户组"></el-table-column>
            <el-table-column label="管理">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"> 编辑</i></el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                ><i class="el-icon-delete"> 删除</i></el-button>
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

export default {
  components: {
    LeftMenu,
    RightHeader,
    RightFooter
  },
  data() {
    return {
      tableData: [
        {
          username: "admin",
          userGroup: "超级管理员",
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style>
</style>

