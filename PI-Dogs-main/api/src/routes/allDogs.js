const { Router } = require('express');
const router = Router();
const getAllDogs = require('../controllers/getAllDogs');

//*TODO: importar los handlers

//* GET ALL DOGS
router.get("/dogs", getAllDogs);
router.get("/:idBreed");
router.get("/dogs/name?=");

//* POST DOGS
router.post("/dogs");

module.exports = router;