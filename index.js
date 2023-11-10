

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
const Route = require("./Routes/router");
app.use("/api/aptitude", Route);

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



   
   


