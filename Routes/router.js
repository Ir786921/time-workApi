const express = require("express");
const router = express.Router();
const {showHome,showalldata,adddata} = require("../controller/contro");

router.get("/", showHome);
router.get("/getdata",showalldata);
router.post("/postdata",adddata);

module.exports = router;
