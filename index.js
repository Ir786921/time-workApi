// require("dotenv").config();
// const express = require("express");

// const Cors = require("cors");
// require("./db/conn");
// const app = express();
// app.use(express.json());
// app.use(Cors());
// const port = process.env.PORT || 3000;
// const Route = require("./Routes/router");
// const connect = require("./db/conn")
// app.use("/api",Route);

// app.get("/",(req,res)=>{
//     res.send("Server is started");
// })

// const start = async ()=>{
//     try {
//         await connect(process.env.CONNECTION_URL)
      
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// start();

// app.listen(port,()=>{
//     console.log( `server is running in http://localhost:${port}`);
// })

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
const Route = require("./Routes/router");
app.use("/api", Route);

// Connect to MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
  
  connectDB();// Call the connectDB function to establish the MongoDB connection

app.get("/", (req, res) => {
  res.send("Server is started");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



   
   


