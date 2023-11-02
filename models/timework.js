const mongoose = require('mongoose');

const timeWorkSchema2 = new mongoose.Schema({
Question:{
    type:String,
    required:true,
    minlength:5
},
option1:{
    type:String,
    required:true

},
option2:{
    type:String,
    required:true

},
option3:{
    type:String,
    required:true

},
option4:{
    type:String,
    required:true

},
Answer:{
    type:String,
    required:true
}

})

const Timew = new mongoose.model('Timew',timeWorkSchema2);
module.exports = Timew;
