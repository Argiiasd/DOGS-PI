const axios = require('axios');
const { API_KEY, API_URL } = process.env;

const getAllTemperaments = async () => {
    const response = await axios(`${API_URL}?api_key=${API_KEY}`);
    const allTemperaments = await response.data.map((dog) => {
        return {
            temperament: dog.temperament  
        }
        
    })
    return allTemperaments;
}

module.exports = getAllTemperaments;