const mongoose=require("mongoose");

const eventSchema= new mongoose.Schema({
    practitionerId:{
      type:String,
    },
    naMe:{
        type:String,
       
    },
    surName:{
        type:String,
      
    },
    jobDescription:{
      String,
      
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("event_LoggingDB",eventSchema);