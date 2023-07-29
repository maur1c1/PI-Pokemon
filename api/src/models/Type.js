const {DataTypes} = require('sequelize');
//exportamos una funcion que define el modelo 
//Luego le injectamos la conexion sequelize.

module.exports = (sequelize) => {
//defino el modelo

sequelize.define('type', {

    id: {

        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        
    },
    name: {

        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

});
};