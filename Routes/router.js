const express = require("express");
const router = express.Router();
const {showHome,showalldata} = require("../controller/contro");

router.route("/").get(showHome);
router.route("/timework").get(showalldata);

module.exports = router;
