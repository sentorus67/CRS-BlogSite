const express = require('express');
const router = express.Router();
const {Blogpost} = require ('../models');
const { FLOAT } = require('sequelize');

router.get('/', async (req,res) => {
try{
    const Allpost= await Blogpost.findAll();

        //const posted= Allpost.get({plain: true});
        
    const posted = Allpost.map((bpost) =>
        bpost.get({ plain: true })
      );

 res.render('./layouts/main',{
    posted,
 });
}
catch(err){
    res.status(500).json(err);
}
});

module.exports=router;