/*=========================================================
***INCLUDES************************************************
===========================================================*/

const express = require('express');                             /*ROUTES*/
const app = express();                                          /*ROUTES*/
require('dotenv').config({path: './config/.env'});              /*DOTENV*/
require('./config/db');                                         /*DB CONNECTION*/


/*=========================================================
***FUNCTIONS**********************************************
===========================================================*/

// Start server on port
app.listen(process.env.PORT, () => {
    console.log(`Server started http://localhost:${process.env.PORT} 🖥️`)
})