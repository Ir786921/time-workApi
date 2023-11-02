const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log("no connection");
})

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

// module.exports = connectDB;




