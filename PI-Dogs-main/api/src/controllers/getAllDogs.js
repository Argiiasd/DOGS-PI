const axios = require('axios');
const { API_KEY, API_URL } = process.env;

const getAllDogs = async () => {
    const response = await axios(`${API_URL}?api_key=${API_KEY}`);
    const allDogs = await response.data.map((dog) => {
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
        }
    })
    if (allDogs.length === 0) {
        throw new Error('No hay resultados');
    }
    return response.status(200).json(allDogs);
}

module.exports = getAllDogs;