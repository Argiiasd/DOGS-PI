const axios = require('axios');
const { API_KEY } = process.env;
const { Temperament } = require('../db');
const URL = "https://api.thedogapi.com/v1/breeds/"

const getAllTemperaments = async () => {
    const response = await axios(`${URL}?api_key=${API_KEY}`);
    const allTemperaments =  response.data;
    const getTemperamentsFromDb = await Temperament.findAll();
    return [...allTemperaments, ...getTemperamentsFromDb].map((dog) => {
        return {
            id: dog.id,
            temperament: dog.temperament,
        }
    });
}

module.exports = getAllTemperaments;