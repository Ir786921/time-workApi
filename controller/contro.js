const timew = require("../models/timework");
const showHome = (req,res)=>{
    res.send("hlw from home");
}

const showalldata = async(req,res)=>{

    
    try {
        const timeApi = await timew.find();
        res.status(200).json(timeApi);
    } catch (error) {
        res.status(404).json(error);
    }
}

const adddata = async(req,res)=>{
    const Addquestion = new timew({
        Question:req.body.Question,
        option1:req.body.option1,
        option2:req.body.option2,
        option3:req.body.option3,
        option4:req.body.option4,
        Answer:req.body.Answer
    });
    try {
       
        const createdQuestion = await Addquestion.save();
        res.status(200).json(createdQuestion);
        
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
    
}

module.exports = {showHome,showalldata,adddata};