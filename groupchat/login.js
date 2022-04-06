const express =require('express');

const router =express.Router();

router.get('/userlogin',(req,res,next)=>{
    res.send('<form action="/login/userlogin" method ="POST"><input type="text" name="title"><button type="submit">login</button></form>');
    
});

router.post('/',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});

module.exports =router;
