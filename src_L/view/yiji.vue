<template>
<div class="yiji">
    <h1>一级分类列表</h1>
    <h2>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="一级中文类">
            <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        </el-form>
    </h2>
     <h1>一级分类列表</h1>
    <h2>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="一级中文类">
            <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
       
        </el-form>
    </h2>
   <h2>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="二级中文类">
            <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
       
        </el-form>
    </h2>
    <h3>
        <el-button type="primary">提交</el-button>
        <el-button>重置</el-button>
    </h3>
       
</div>  
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  }
};
</script>

<style>
h3 {
  margin-left: 50px;
}
</style>
