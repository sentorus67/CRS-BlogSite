const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Blogpost= require('./Blogpost');

const db ={
    Blogpost,
    sequelize,
    Sequelize,
};

module.exports = db;