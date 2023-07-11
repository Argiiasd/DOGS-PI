const createDog = require('../controllers/postDogs');

module.exports = (req, res) => {
    try{
        const { image, name, height, weight, life_span } = req.body;
        const newDog = createDog(image, name, height, weight, life_span);
        res.status(201).json(newDog);
    } catch(error){
        res.status(400).json({error: error.message});
    }
}