const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');

const errorController =require('./controllers/error')

const node1 =express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
node1.use(bodyParser.urlencoded({extented:false}));
node1.use(express.static(path.join(__dirname,'public')));

node1.use('/admin',adminRoutes);
node1.use(shopRoutes);

node1.use(errorController.get404);

node1.listen(3000);
