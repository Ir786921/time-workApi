const express = require("express");
const router = express.Router();
const {showalldata,adddata,getindi} = require("../controller/contro");

router.get("/timework",showalldata);
router.post("/timework",adddata);
router.get("/timework/:quesId",getindi);

module.exports = router;
