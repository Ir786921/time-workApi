const timew = require("../models/timework");
const showHome = (req,res)=>{
    res.send("hlw from home");
}

const showalldata = async(req,res)=>{
    try {
        const timeApi = await timew.find();
        res.status(200).send(timeApi);
    } catch (error) {
        res.status(404).send(error);
    }
}

const adddata = async(req,res)=>{
    try {
        const Addquestion = new timew(req.body);
        const createdQuestion = await Addquestion.save();
        res.status(201).send(createdQuestion);
    } catch (error) {
        res.status(404).send(error)
    }
    
}

module.exports = {showHome,showalldata,adddata};