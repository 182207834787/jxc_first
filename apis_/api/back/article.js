var express = require('express');
var router = express.Router();
var dbquery=require("../../config/connect_db")
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")

const {sqlHandle,readHandle,searchHandle,query}=dbquery

router.get("/class",(req,res,next)=>{
    const OneClass=`select * from one_class`
    const TwoClass=`select * from two_class`

      const asyncGetClass= async function () {
         const oneData =await readHandle(OneClass)
         const twoData =await readHandle(TwoClass)
         return {oneData,twoData}
      }
      asyncGetClass().then((data)=>{
        res.send({
          code:"1211",
          msg:"获取类名成功",
          data
        })
      }).catch((err)=>{
          res.send({
            code:"1212",
            msg:"获取类名失败"
          })
      })

})

module.exports=router