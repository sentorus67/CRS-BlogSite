const express = require('express');
const router = express.Router();
const { FLOAT } = require('sequelize');

router.get('/', async (req,res) => {
try{
 res.render('./partials/home');
}
catch(err){
    res.status.json(err);
}
});

module.exports=router;