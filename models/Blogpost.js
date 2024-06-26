const { Model, DataTypes}=require('sequelize');
const sequelize = require('../config/connection.js');

class Blogpost extends Model {}

Blogpost.init(
    {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    date_posted:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    }
);
module.exports=Blogpost;

///----------------------

