const express =require('express')
const router=express.Router()
router.get('/:id',(request,response)=>{
    response.send("This is home page" + request. params.id)
})
module.exports=router