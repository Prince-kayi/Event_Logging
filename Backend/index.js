const express=require("express")
const back = express();
const mongoose=require("mongoose")
const cors=require("cors");
const routerUrls=require("./Routez/eventRoutes")

back.use(cors());
back.use(express.json());
mongoose.connect("mongodb+srv://events-logging:eventsLogging89@cluster0.3pqwdtt.mongodb.net/event_LoggingDB",
()=>console.log("tswe and trumu Database connected"))
 

back.use(express.json())
back.use(cors())
back.use("/app",routerUrls)
back.listen(1789,()=>console.log("trumus and tswe servers begin"))
