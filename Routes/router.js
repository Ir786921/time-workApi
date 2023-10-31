const express = require("express");
const router = express.Router();
const {showHome,showalldata,adddata} = require("../controller/contro");

router.route("/").get(showHome);
router.route("/timework").get(showalldata);
router.route("/timework").post(adddata);

module.exports = router;
