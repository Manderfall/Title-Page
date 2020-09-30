const express = require("express");
const router = express.Router();

/* general */
router.get("/certificates", (req, res) => {
	res.render("certificates");
});
/* ------------------ */


module.exports = router;