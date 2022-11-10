const express = require("express")
const back = express();
const mongoose = require("mongoose")
const cors = require("cors");
const routerUrls = require("./Routez/eventRoutes")

back.use(cors());
back.use(express.json());
mongoose.connect("mongodb+srv://events-logging:eventsLogging89@cluster0.3pqwdtt.mongodb.net/event_LoggingDB",
    () => console.log("Database connected"))

back.use(express.json())
back.use(cors())
back.use("/api", routerUrls)
back.listen(1789, () => console.log("API Server running "));

