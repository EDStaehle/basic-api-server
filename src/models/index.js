'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } =  require('sequelize');
const gamesSchema = require('./games.schema');
const carsSchema = require('./cars.schema');
//  'postgres://localhost:5432/basic-api-app
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

// instantiate our sequelize connection to our database
const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const carsModel = carsSchema(sequelizeDatabase, DataTypes);
const GamesModel = gamesSchema(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  GamesModel,
  carsModel,
};



