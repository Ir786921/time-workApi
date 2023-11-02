const mongoose = require("mongoose");
// require('dotenv').config();
// mongoose.connect(process.env.CONNECTION_URL,{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("connection established");
// }).catch((err)=>{
//     console.log("no connection");
// })

const connectDB = async (uri) => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };



// async function connect(uri){
//     console.log("flow come here");
//     try {
//         await mongoose.connect(uri);
//         console.log("connected to MongoDB");
//     }
//     catch(error) {
//         console.log("not connected to mongoDB",error);
//     }
// }



// const mongoString = process.env.CONNECTION_URL

// mongoose.connect(mongoString);
// const database = mongoose.connection

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

// const connectDB =  async(uri)=>{
    
//     try {
//         await mongoose.connect(uri,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
           
//     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//     socketTimeoutMS: 300000
//     })
//     }
//      catch (error) {
//         console.log(error);
//     }
// };

module.exports = connectDB;




