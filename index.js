const express = require("express");
const Cors = require("cors");
require("./db/conn");
const timeWork = require("./models/timework");
const app = express();
app.use(express.json());
app.use(Cors());
const port = process.env.PORT || 3000;
app.post("/timeWork",async(req,res)=>{
    try {
        const Addquestion = new timeWork(req.body);
        const createdQuestion = await Addquestion.save();
        res.status(201).send(createdQuestion);
    } catch (error) {
        res.status(404).send(error)
    }
    
})
app.get("/", (req,res)=>{
  
    res.send("Server is Started");
   
})
app.get("/timework", async (req,res)=>{
    try {
        const timeApi = await timeWork.find();
        res.status(200).send(timeApi);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.listen(port,()=>{
    console.log( `server is running in http://localhost:${port}`);
})