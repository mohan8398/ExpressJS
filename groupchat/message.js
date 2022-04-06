const express = require('express');

const router =express.Router();

router.get('/',(req,res,next)=>{
    res.send('<form action="/" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)"  method="POST"><input id="username" type="text" name="username"><input id="meassge" type="text" name="meassage"><button type="submit">send</button></form>');
    
});

router.post('/',(req,res,next)=>{
    data.push(`(${req.body.username}:${req.body.meassge})`)
    //console.log(req.body);
    console.log(data);
    res.redirect('/');

});

module.exports= router;
