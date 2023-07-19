const {Dog, Temperament} = require('../db')

const getDogsFromDb = async () => {
    const dogs = await Dog.findAll({
        include: {
            model: Temperament, 
            attributes: ["name"], 
            through: {
                attributes: [],
            }
        }
    })
    return dogs;
}

module.exports = getDogsFromDb;