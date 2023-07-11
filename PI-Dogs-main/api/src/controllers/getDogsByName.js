const axios = require('axios');
const { Op } = require('sequelize');
const { Dog } = require('../db.js');
const URL = "https://api.thedogapi.com/v1/breeds/";

const getDogByName = async (name) => {
    //* convertimos el nombre a minúsculas para comparar con la base de datos
    const lowerCaseName = name.toLowerCase();

    //* hacemos el pedido a la api
    const apiResponse = await axios(`${URL}search?q=${name}`);
    const apiDogs = apiResponse.data;

    //* hacemos el pedido a la base de datos
    const dbDogs = await Dog.findAll({
        where: {
            name: {
                //* este operador nos permite hacer una búsqueda más flexible
                [Op.iLike]: `%${lowerCaseName}%`
            }
        }
    });

    //* retorna los resultados de la base de datos y la api
    const allDogs = [...dbDogs, ...apiDogs];

    //* si no hay resultados, retorna un error
    if(allDogs.length === 0) {
        throw new Error("No se encontraron razas de perros con ese nombre");
    }
    
    return allDogs.map((dog) => {
        return {
            id: dog.id,
            image: dog.image?.url,
            name: dog.name,
            height: dog.height?.metric,
            weight: dog.weight?.metric,
            life_span: dog.life_span,
            temperament: dog.temperament,
        }
    })
}
module.exports = getDogByName;