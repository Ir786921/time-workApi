const express = require("express");
const Cors = require("cors");
require("./db/conn");
const timeWork = require("./models/timework");
const app = express();
app.use(express.json());
app.use(Cors());
const port = process.env.PORT || 3000;
const Route = require("./Routes/router")
app.use("/api",Route);
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

app.listen(port,()=>{
    console.log( `server is running in http://localhost:${port}`);
})