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
          <div class="text item">
            <el-alert title="商品总数：5。已经销售的总金额：890.00。库存商品总价：1235.82" type="info" show-icon></el-alert>
            <el-alert title="导入数据" type="info" show-icon></el-alert>
            <el-row :gutter="40">
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>
                  <el-table :data="tableData" stripe>
                    <el-table-column prop="goods" label="商品名称"></el-table-column>
                    <el-table-column prop="sales" label="销量"></el-table-column>
                  </el-table>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货的商品</h3>
                  </div>
                  <el-table :data="tableData2" stripe>
                    <el-table-column prop="goods" label="商品名称"></el-table-column>
                    <el-table-column prop="stock" label="库存"></el-table-column>
                    <el-table-column prop="operate" label="操作"></el-table-column>
                  </el-table>
                </el-card>
              </el-col>
            </el-row>
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
  name: "home",
  components: {
    LeftMenu,
    RightHeader,
    RightFooter
  },
  data() {
    return {
      tableData: [
        {
          goods: "海飞丝去屑洗发水",
          sales: "8"
        },
        {
          goods: "茅台酒",
          sales: "6"
        },
        {
          goods: "龙凤呈祥",
          sales: "5"
        },
        {
          goods: "龙凤呈祥2",
          sales: "2"
        }
      ],
       tableData2: [
        {
          goods: "我的优乐美",
          stock: 0,
          operate:"入库"
        }
       ]    
    }
  }
};
</script>
<style>
</style>

