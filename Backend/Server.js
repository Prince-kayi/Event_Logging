const express=require("express")
const back = express();
const mongoose=require("mongoose")
const cors=require("cors");
const { application } = require("express");

back.use(cors());
back.use(express.json());
back.listen(1789,()=>console.log("tswe servers begin"))
