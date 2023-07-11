const { Dog, Temperaments } = require('../db');

const createDog = async (image, name, height, weight, life_span) => {
    const newDog = await Dog.create({image, name, height, weight, life_span});
    return newDog;
}

module.exports = createDog;