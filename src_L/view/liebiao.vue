<template>
<div class="liebiao">
    <!-- 删除 编辑 -->
    <el-table
    :data="formData"
    style="width: 900px">
    <el-table-column
      fixed
      label="标题"
      style="width:150px;">
       <template scope='scope'>
        <span>{{scope.row.editer}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
     style="width:150px" >
      <template scope='scope'>
        <span>{{scope.row.editer}}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      prop="zip"
      label="时间"
     style="width:160px">
      <template scope="scope">
          <span>{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    
     <el-table-column label="操作" style="width:150px;text-align:center" class="title">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
  </el-table>  

<!-- 分页 -->
 
  <div class="block">
   
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[2, 5, 10, 15]"
      :page-size="every"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.olddata.length">
    </el-pagination>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="open6">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</div>  
</template>

<script>
export default {
    data() {
      return {
        every:5,
        currentPage4: 4,
        olddata:[],
        formData:[],
        dialogVisible:false,
        id:'',
          tableData: [],
        dialogVisible:false,
        state:"",
        oneId:"",
        one_enname:"",
        twoId:"",
      }
    },
     created(){
       this.axios.get("back/article/getArticleList").then((data)=>{
           console.log(data)
              if(data.data.code=="1221"){
                console.log(data.data.data)
                  this.olddata=data.data.data
                 this.formData=this.olddata.slice(0,this.every)
              }







          })
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
         this.$router.push('/tianjia')
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleDelete(index, row) {
       
         console.log(index, row);
        this.id=row.id;
        this.enname_one=row.enname_one;
        this.twoId=row.twoId
        this.dialogVisible=true
      },
      handleSizeChange(val) {
         console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
     handleClose(done){
       this.$confirm('确认关闭')
       .then(_=>{
         done()
       }).catch(_=>{})
      
     },
       open6() {
          this.dialogVisible=false
          this.axios.post('back/article/deleteArticle',{
            twoId:this.twoId,enname_one:this.enname_one,id:this.id
          }).then((data)=>{
            if(data.data.code=='1225'){
              this.$message({
                showClose: true,
                type: 'success',
                message: '删除成功!'
                
           });
           this.$router.go(0)
            }else{
               this.$message({
               type: 'error',
               message: '已取消删除'
             });
            }
          })
      }
      
    }
  
}
</script>

<style>
.liebiao{
  margin-left: 10px;
    text-align: center;
}
.block{
  margin-left: 40px;
  margin-top: 25px;
}
el-table-column{
  text-align: center;
}
.cell{
   text-align: center;
  
}
</style>
