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
            <h3>系统信息</h3>
          </div>
          <div>
            <!-- 中间内容 -->
          </div>
        </el-card>
      </el-main>
      <!-- 右侧页脚 -->
      <RightFooter></RightFooter>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from '../components/leftMenu'
import RightHeader from '../components/rightHeader'
import RightFooter from '../components/rightFooter'

export default {
  components: {
    LeftMenu,
    RightHeader,
    RightFooter
  }

};
</script>
<style>
</style>

