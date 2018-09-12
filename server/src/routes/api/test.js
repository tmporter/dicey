// /api/test
const router = require("express").Router();

router.get("/", (req, res) => {
   return res.status(200).send("All good here!")
});

module.exports = router;