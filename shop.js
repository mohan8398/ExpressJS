const express = require('express');

const router =express.Router();

router.get('/',(req,res,next)=>{
    //console.log('In another middleware');
    res.send('<h1>Hello to nodes js</h1>');
    
});

module.exports= router;
