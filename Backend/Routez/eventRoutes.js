const { response } = require("express");
const express=require("express");
const EevntsCopy=require("../Models/Events")

const router=express.Router();

router.post("/register",(req,res)=>{
   const SignedUpUser=new EevntsCopy({
      practitionerId:req.body.practitionerId,
      naMe:req.body.naMe,
      surName:req.body.surName,
      jobDescription:req.body.jobDescription
   })
   SignedUpUser.save()
   .then(data=>{
      res.json(data)
   })
   .catch(error=>{
      res.json(error)
   }

   )
})

module.exports=router;