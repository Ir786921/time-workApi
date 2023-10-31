const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/timeWork').then(()=>{
    console.log("connection is established");
}).catch(()=>{
    console.log("not connected");
})