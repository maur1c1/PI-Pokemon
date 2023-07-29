const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {

      type: DataTypes.UUID, //Un identificador unico universal (UUID)
      defaultValue: DataTypes.UUIDV4, //Si desea generar un valor UUID basada unicamente en numeros aleatorios, puede usar la uuid_generate_id
      primaryKey: true,

    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

      sprite: {

        type: DataTypes.STRING,
      },

      hp: {

        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      attack: {
        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      defense: {
        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      specialAttack:{
        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      specialDefense: {

        type: DataTypes.INTEGER,
        defaultValue: '50'

      },
      
      speed: {

        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      height: {

        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      weigth: {

        type: DataTypes.INTEGER,
        defaultValue: '50'
      },

      createdInDb: {

        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
  
  },
  {
    timestamps: false,
    freezeTableName: true,
  }

  );
};
