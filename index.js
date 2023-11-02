// require("dotenv").config();
const express = require("express");

const Cors = require("cors");
require("./db/conn");
const app = express();
app.use(express.json());
app.use(Cors());
const port = process.env.PORT || 3000;
const Route = require("./Routes/router");
// const connectDB = require("./db/conn")
app.use("/api",Route);

app.get("/",(req,res)=>{
    res.send("Server is started");
})

// const start = async ()=>{
//     try {
//         await connectDB(process.env.CONNECTION_URL)
//         app.listen(port,()=>{
//             console.log( `server is running in http://localhost:${port}`);
//         })
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// start();
app.listen(port,()=>{
    console.log( `server is running in http://localhost:${port}`);
})


   
   


