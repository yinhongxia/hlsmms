<template>
  <el-aside width="230px">
    <!-- 左侧顶部的标题 -->
    <div id="leftTitle">
      <h2>华联超市管理系统</h2>
      <p>您好,admin</p>
      <p><router-link to="/">管理首页</router-link> | 退出系统</p>
    </div>
    <!-- 左侧菜单 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
    >

      <!-- 第1个菜单：分类管理 -->
      <el-submenu index="1">
        <template slot="title">
          <span>分类管理</span>
        </template>
        <el-menu-item index="sortmanagement"><router-link to="/sortmanagement">分类管理</router-link></el-menu-item>
        <el-menu-item index="/addcategory"><router-link to="/addcategory">添加分类</router-link></el-menu-item>
      </el-submenu>

      <!-- 第2个菜单：商品管理 -->
      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-1">商品管理</el-menu-item>
        <el-menu-item index="2-2">添加商品</el-menu-item>
      </el-submenu>

      <!-- 第3个菜单：进货管理 -->
      <el-submenu index="3">
        <template slot="title">
          <span>进货管理</span>
        </template>
        <el-menu-item index="3-1">库存管理</el-menu-item>
        <el-menu-item index="3-2">添加库存</el-menu-item>
      </el-submenu>

      <!-- 第4个菜单：出货管理 -->
      <el-submenu index="4">
        <template slot="title">
          <span>出货管理</span>
        </template>
        <el-menu-item index="4-1">销售列表</el-menu-item>
        <el-menu-item index="4-2">商品出库</el-menu-item>
        <el-menu-item index="4-3">商品退货</el-menu-item>
      </el-submenu>

      <!-- 第5个菜单：统计管理 -->
      <el-submenu index="5">
        <template slot="title">
          <span>统计管理</span>
        </template>
        <el-menu-item index="5-1">销售统计</el-menu-item>
        <el-menu-item index="5-2">进货统计</el-menu-item>
      </el-submenu>

      <!-- 第6个菜单：账号管理 -->
      <el-submenu index="6">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item index="/accManagement"><router-link to="/accManagement">账号管理</router-link></el-menu-item>
        <el-menu-item index="/addAdmin"><router-link to="/addAdmin">添加账号</router-link></el-menu-item>
        <el-menu-item index="/changepass"><router-link to="/changepass">密码修改</router-link></el-menu-item>
      </el-submenu>

      <!-- 第7个菜单：会员管理 -->
      <el-submenu index="7">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-menu-item index="7-1">账号管理</el-menu-item>
        <el-menu-item index="/AddAdmin"><router-link to="/AddAdmin">添加账号</router-link></el-menu-item>
      </el-submenu>

      <!-- 第8个菜单：系统管理 -->
      <el-submenu index="8">
        <template slot="title">
          <span>系统管理</span>
        </template>
        <el-menu-item index="/"><router-link to="/">系统信息</router-link></el-menu-item>
        <el-menu-item index="8-2">系统配置</el-menu-item>
        <el-menu-item index="8-3">权限管理</el-menu-item>
        <el-menu-item index="8-4">添加管理组</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
