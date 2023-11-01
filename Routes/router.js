const express = require("express");
const router = express.Router();
const {showHome,showalldata,adddata} = require("../controller/contro");

router.route("/").get(showHome);
router.route("/twtest").get(showalldata);
router.route("/twtest").post(adddata);

module.exports = router;
