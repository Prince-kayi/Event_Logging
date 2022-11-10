const mongoose=require("mongoose");

const eventSchema= new mongoose.Schema({
    practitionerId:{
      type:String,
    },
    name:{
        type:String,
    },
    surname:{
        type:String,  
    },
    jobDescription:{
      String,   
    },
    adminId:{
      String,
    },
    patient_Id:{
      String,
    },
    vital_Readings:{
      String,
    },
    ward:{
      String,
    },
    admission:{
     String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("event_LoggingDB",eventSchema);