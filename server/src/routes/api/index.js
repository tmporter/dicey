const router = require("express").Router();

router.use("/test", require("./test"));
router.use("/games", require("./games"));

module.exports = router;
