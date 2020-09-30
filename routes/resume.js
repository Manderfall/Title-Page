const express = require("express");
const router = express.Router();

/* general */
router.get("/resume", (req, res) => {
	res.render("resume");
});
/* ------------------ */


module.exports = router;