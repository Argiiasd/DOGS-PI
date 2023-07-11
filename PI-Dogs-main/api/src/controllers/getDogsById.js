const axios = require('axios');
const { Dog, Temperament } = require('../db')
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds/";

const getDogById = async (id) => {
    //* si tiene UUID, hace la búsqueda en la base de datos
    if(isNaN(id)){
        //* busca por primary key
        const dogsDb = await Dog.findByPk(id, {include: [Temperament]});
        if (!dogsDb) throw new Error('No se encuentra ese ID en la base de datos');
        
        //* convierte el objeto a JSON
        const dog = dogsDb.toJSON();
        
        //* En la tabla de temperamentos busca el que corresponda con el ID
        const temperament = dog.Temperament.map((temperament) => temperament.name);
        dog.temperament = temperament;

        //* elimina el objeto de la base de datos
        delete dog.Temperament;

        //* retorna el objeto
        return dog;
    }

    //* si tiene un id normal, busca en la api
    const apiDogs = await axios(`${URL}${id}?api_key=${API_KEY}`);
    if (apiDogs.data.length === 0) {
        throw new Error("No hay perro con ese id");
    }
    const apiData = apiDogs.data;
    return {
        id: apiData.id,
        image: apiData.image?.url,
        name: apiData.name,
        height: apiData.height?.metric,
        weight: apiData.weight?.metric,
        life_span: apiData.life_span,
        temperament: apiData.temperament,
    }
}

module.exports = getDogById;