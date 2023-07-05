const { Router } = require('express');
const router = Router();
const getAllTemperaments = require("../handlers/AllTemperamentsHandler");

//* GET ALL TEMPERAMENTS
router.use("/temperaments", getAllTemperaments);

module.exports = router;