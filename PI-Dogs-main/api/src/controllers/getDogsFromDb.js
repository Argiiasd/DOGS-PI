const {Dog} = require('../db')

const getDogsFromDb = async () => {
    const dogs = await Dog.findAll()
    return dogs;
}

module.exports = getDogsFromDb;