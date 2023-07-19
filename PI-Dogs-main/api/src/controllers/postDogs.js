const { Op } = require('sequelize');
const { Dog, Temperament } = require('../db');

const createDog = async (image, name, height, weight, life_span, temps) => {
    const newDog = await Dog.create({image, name, height, weight, life_span});

    const aux = await Temperament.findAll({where: {
        name: temps
    }});

    console.log("console.log:", aux);

    if(aux.length > 0){
        await newDog.setTemperaments(aux);
    }

    return newDog;
}

module.exports = createDog;