'use strict'


module.exports = (sequelizeDataBase, DataTypes) => sequelizeDataBase.define('games', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
});



