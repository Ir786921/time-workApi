const showHome = (req,res)=>{
    res.send("hlw from home");
}

const showalldata = async(req,res)=>{
    try {
        const timeApi = await timeWork.find();
        res.status(200).send(timeApi);
    } catch (error) {
        res.status(404).send(error);
    }
}

module.exports = {showHome,showalldata};