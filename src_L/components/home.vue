<template>
  <div class="content" id="home">
      <div class="header">
          <h1>个人博客</h1>
          <h2>添加账户:host</h2>
      </div>
      <div class="section">
            <el-container style="height: 800px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>文章管理</template>
                    <el-menu-item-group>
                  <el-menu-item index="1-1"> <router-link to="/tianjia">添加文章</router-link></el-menu-item> 
                    <el-menu-item index="1-2"><router-link to="/liebiao">文章列表</router-link></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>分类管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="2-1"> <router-link to="/yiji">增加一级分类</router-link></el-menu-item>
                    <el-menu-item index="2-2"> <router-link to="/erji">增加二级分类</router-link></el-menu-item>
                    <el-menu-item index="2-3"> <router-link to="/fenlie">分类列表</router-link></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>接口管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="3-1">增加接口文档</el-menu-item>
                    <el-menu-item index="3-2">前台接口列表</el-menu-item>
                     <el-menu-item index="3-3"><router-link to="/lastjiekou">后台接口列表</router-link></el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                 <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>留言板管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="3-1">个人简介留言</el-menu-item>
                    <el-menu-item index="3-2">博客留言</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </el-menu>
            </el-aside>
            <div class="section-content">
                <router-view></router-view>
          </div>
     </el-container>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style>

</style>
