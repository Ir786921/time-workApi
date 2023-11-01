const express = require("express");
const Cors = require("cors");
require("./db/conn");
const app = express();
app.use(express.json());
app.use(Cors());
const port = process.env.PORT || 3000;
const Route = require("./Routes/router")
app.use("/api",Route);

app.get("/",(req,res)=>{
    res.send("Server is started");
})

app.listen(port,()=>{
    console.log( `server is running in http://localhost:${port}`);
})