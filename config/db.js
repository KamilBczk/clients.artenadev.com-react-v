const mongoose = require('mongoose');                           /*DATABASE*/
require('dotenv').config({path: './config/.env'});              /*DOTENV*/

mongoose
    .connect(process.env.DATABASE,
        {
            useNewUrlParser:true,
        }
    )
    .then(() => console.log('Connected to database 💾'))
    .catch((err) => console.log('Failet to connect to MongoDB', err));
