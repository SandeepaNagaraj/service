const express =require('express')
const router=express.Router()
let listofService = [
    {
    "id":1,
    "name":"web Development"
    },
    {
        "id":2,
        "name":"Digital Marketing" 
    },
    {
        "id":3,
        "name":"Software Developing"
    }
]
router.get('/',(request,response)=>{
    response.send("This is services page")
})

router.get('/:id',(request,response)=>
{
    const ServiceId =Number(request.params.id)
    const getservice=listofService.find((Service) => Service.id === ServiceId)                                         

if(!getService)
{
    response.status(500).send("Expected service not found")
}
else{
    response.json(getService.name)
}
})
module.exports=router