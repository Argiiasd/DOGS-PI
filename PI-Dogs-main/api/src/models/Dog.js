const { DataTypes } = require('sequelize');
//* Exportamos una funcion que define el modelo
//* Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  //* defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {timestamps: false});
};
